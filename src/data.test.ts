import { describe, it, expect } from 'vitest';
import { config } from '../src/config';
import { experience } from '../src/data/experience';
import { projects } from '../src/data/projects';
import { articles } from '../src/data/articles';
import { skills } from '../src/data/skills';

describe('Config', () => {
  it('debe tener todos los links requeridos', () => {
    expect(config.links.github).toBeTruthy();
    expect(config.links.linkedin).toBeTruthy();
    expect(config.links.medium).toBeTruthy();
    expect(config.links.gmail).toBeTruthy();
  });

  it('los urls deben ser validos', () => {
    const urls = Object.values(config.links).filter(
      (v) => typeof v === 'string' && !v.startsWith('mailto:')
    );
    urls.forEach((url) => {
      expect(() => new URL(url)).not.toThrow();
    });
  });
});

describe('Experience data', () => {
  it('debe tener al menos una experiencia', () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it('cada experiencia debe tener campos requeridos', () => {
    experience.forEach((exp) => {
      expect(exp.title).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period.start).toBeTruthy();
      expect(exp.period.end).toBeTruthy();
    });
  });
});

describe('Projects data', () => {
  it('debe tener al menos un proyecto', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('cada proyecto debe tener links', () => {
    projects.forEach((proj) => {
      expect(proj.links.github).toBeTruthy();
    });
  });
});

describe('Articles data', () => {
  it('debe tener al menos un articulo', () => {
    expect(articles.length).toBeGreaterThan(0);
  });
});

describe('Skills data', () => {
  it('debe tener al menos una skill', () => {
    expect(skills.length).toBeGreaterThan(0);
  });
});
