# Unitat 2 · CSS i presentació web

Presentació docent creada amb [Slidev](https://sli.dev/). Complementa els apunts de `docs/unitats/02-css.md`; no els substituïx.

## Requisits

- Node.js 24 o posterior.
- `npm`.

## Ús local

```bash
npm ci
npm run dev
```

La font és `slides.md`. Els exemples interactius es troben en `public/demos/` i s'incrusten en les diapositives com a pàgines HTML locals.

## Construcció

```bash
npm run build
```

La versió web es genera en `dist/`, que és una eixida local i no es publica al repositori. Per exportar un PDF, si l'entorn té les dependències del navegador necessàries:

```bash
npm run export
```

## Publicació dins de MkDocs

```bash
npm run build:mkdocs
```

Esta ordre genera temporalment la presentació en `docs/presentacions/unitat-2-css/`, perquè MkDocs la publique. El workflow de GitHub Actions l'executa abans de construir el lloc; no cal versionar esta eixida.
