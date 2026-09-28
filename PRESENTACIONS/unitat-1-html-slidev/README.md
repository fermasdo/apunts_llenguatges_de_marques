# Unitat 1 · HTML semàntic i accessible

Presentació docent creada amb [Slidev](https://sli.dev/). Complementa `docs/unitats/01-html-semantic.md`.

```bash
npm ci
npm run dev
```

La font és `slides.md`. Les demostracions HTML locals estan a `public/demos/`. Per generar la versió web estàtica, executa `npm run build`; l'eixida queda en `dist/` i no es versiona.

## Publicació dins de MkDocs

```bash
npm run build:mkdocs
```

Esta ordre genera temporalment la presentació en `docs/presentacions/unitat-1-html/`, perquè MkDocs la publique. El workflow de GitHub Actions l'executa abans de construir el lloc; no cal versionar esta eixida.
