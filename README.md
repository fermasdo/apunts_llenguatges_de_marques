# Llenguatges de Marques

Base tècnica dels apunts del mòdul, publicada amb [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

El contingut està pensat per a l'alumnat i s'organitza en unitats, reptes i recursos de consulta.

## Requisits

- Python 3.10 o posterior.
- `pip`.

## Instal·lació local

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install --require-hashes -r requirements.txt
```

En Windows, activa l'entorn amb `.venv\Scripts\activate`.

## Previsualització

```bash
mkdocs serve
```

El servidor local mostra l'adreça exacta en iniciar-se. Els canvis en els fitxers de `docs/` recarreguen la pàgina automàticament.

## Validació

Abans de proposar un canvi, executa:

```bash
mkdocs build --strict
python -m pip check
```

La construcció estricta tracta com a errors els avisos de configuració, navegació i enllaços interns. El directori generat `site/` és temporal i no s'ha d'incloure en el repositori.

`requirements.in` declara les dos dependències directes i `requirements.txt` fixa també les transitives amb hashes. Per actualitzar el bloqueig de manera conscient:

```bash
python -m pip install pip-tools==7.6.1
pip-compile --generate-hashes --no-emit-index-url --strip-extras requirements.in
```

## Estructura

- `docs/`: font dels apunts i recursos.
- `mkdocs.yml`: navegació, tema i extensions.
- `requirements.in` i `requirements.txt`: dependències directes i bloqueig reproduïble.
- `.github/workflows/docs.yml`: validació i publicació en GitHub Pages.

No publiques dades personals, qualificacions, credencials ni normativa sense verificar-ne la font oficial.

## GitHub Pages

El workflow valida cada `pull request` i cada `push`. Només un `push` a `main` pot desplegar el lloc. Abans del primer desplegament cal seleccionar **GitHub Actions** com a font en **Settings → Pages**. El `GITHUB_TOKEN` del workflow té permisos mínims i, per disseny, no pot habilitar Pages en un repositori que encara no ho tinga configurat.

No s'ha definit `site_url`, `repo_url`, domini personalitzat ni fitxer `CNAME`, perquè encara no es coneixen l'adreça pública i la identitat definitiva del repositori.
