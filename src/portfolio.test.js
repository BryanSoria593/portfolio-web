import { readFileSync } from "node:fs";
import { afterEach, describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";

const html = readFileSync(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const windows = [];
const cvUrl =
  "https://drive.google.com/file/d/12mJ2mxTEFF_jxOXknRr3BM_h8h-QfBLs/view?usp=share_link";

function render({
  savedTheme,
  systemDark = false,
  storageBlocked = false,
} = {}) {
  const dom = new JSDOM(html, {
    url: "https://portfolio.test/",
    runScripts: "dangerously",
    beforeParse(window) {
      window.matchMedia = () => ({ matches: systemDark });
      if (storageBlocked) {
        Object.defineProperty(window, "localStorage", {
          get() {
            throw new Error("Storage unavailable");
          },
        });
      } else if (savedTheme) {
        window.localStorage.setItem("bryan-portfolio-theme", savedTheme);
      }
    },
  });
  windows.push(dom.window);
  return dom.window;
}

afterEach(() => {
  windows.splice(0).forEach((window) => window.close());
});

describe("Portfolio publicado", () => {
  it.each([
    [undefined, false, "light"],
    [undefined, true, "dark"],
    ["light", true, "light"],
    ["dark", false, "dark"],
  ])(
    "elige el tema guardado o del sistema (%s, %s)",
    (savedTheme, systemDark, expected) => {
      const window = render({ savedTheme, systemDark });
      const document = window.document;
      expect(document.documentElement.dataset.theme).toBe(expected);

      document.querySelector(".theme-toggle").click();
      const next = expected === "dark" ? "light" : "dark";
      expect(document.documentElement.dataset.theme).toBe(next);
      expect(window.localStorage.getItem("bryan-portfolio-theme")).toBe(next);
      expect(
        document.querySelector(".theme-toggle").getAttribute("aria-pressed"),
      ).toBe(String(next === "dark"));
    },
  );

  it("permite cambiar de tema incluso cuando el almacenamiento está bloqueado", () => {
    const { document } = render({ storageBlocked: true });
    document.querySelector(".theme-toggle").click();
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("abre el CV vigente en cabecera y portada sin forzar descarga", () => {
    const { document } = render();
    for (const section of ["header", "#inicio"]) {
      const link = document.querySelector(`${section} a[href="${cvUrl}"]`);
      expect(link).not.toBeNull();
      expect(link.hasAttribute("download")).toBe(false);
      expect(link.target).toBe("_blank");
      expect(link.rel).toContain("noopener");
    }
  });

  it("mantiene destinos de navegación únicos y válidos", () => {
    const { document } = render();
    const ids = [...document.querySelectorAll("[id]")].map(
      (element) => element.id,
    );
    expect(new Set(ids).size).toBe(ids.length);
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      expect(
        document.getElementById(link.getAttribute("href").slice(1)),
      ).not.toBeNull();
    }
  });

  it("muestra la experiencia sin desplegables", () => {
    const { document } = render();
    expect(document.querySelectorAll("details").length).toBe(0);
    const career = document.querySelector("#trayectoria");
    expect(career.textContent).toContain("Liquidaciones productivas");
    expect(career.textContent).toContain("Trabajo de campo sin conexión");
    expect(
      career.querySelectorAll(".career-stage .contributions li").length,
    ).toBeGreaterThan(0);
  });

  it("actualiza el diagrama al alternar la conectividad", () => {
    const { document } = render();
    const online = document.querySelector('[data-mode="online"]');
    const offline = document.querySelector('[data-mode="offline"]');
    online.click();
    expect(document.querySelector("#sync-state").textContent).toBe(
      "SINCRONIZACIÓN",
    );
    expect(online.getAttribute("aria-pressed")).toBe("true");
    expect(offline.getAttribute("aria-pressed")).toBe("false");
    offline.click();
    expect(document.querySelector("#sync-state").textContent).toBe("EN ESPERA");
    expect(document.querySelector("#sync-log").textContent).toContain(
      "Datos conservados",
    );
  });
});
