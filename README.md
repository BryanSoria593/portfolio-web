# Portfolio de Bryan Soria

Portfolio de productos web y móviles construido con Astro. Implementa el diseño de la propuesta 2 con modos claro y oscuro, experiencia visible y acceso al CV en Google Drive.

## Desarrollo

```sh
pnpm install --frozen-lockfile
pnpm dev
```

El servidor local está disponible en `http://localhost:4321`.

## Verificación

```sh
pnpm build
pnpm test
```

`pnpm build` ejecuta la comprobación de Astro y genera `dist/`. `pnpm test` genera la página y verifica su HTML e interacciones con Vitest y JSDOM: tema, navegación, acceso al CV y diagrama de conectividad.

## Estructura

- `src/pages/index.astro`: composición de la página.
- `src/components/portfolio/`: navegación, presentación, impacto, productos, trayectoria, stack, contacto e interacciones.
- `src/layouts/Layout.astro`: metadatos, datos estructurados e inicialización del tema.
- `src/styles/portfolio.css`: diseño responsive y temas.
- `src/portfolio.test.js`: pruebas de la página generada.
- `public/`: favicon, imagen social, sitemap y robots.
- `propuestas/`: propuestas HTML de referencia; no se incluyen en el sitio publicado.

El botón de hoja de vida abre el enlace de Google Drive configurado en `Header.astro` y `Hero.astro`. El tema elegido se guarda en el navegador; si no hay preferencia, se utiliza la del sistema.
