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

## Peu de pàgina i data d'actualització

El peu global identifica l'autor com a **Ferran Mas Doménech**. En cada construcció, el hook natiu `hooks/last_update.py` consulta `git log -1 --format=%cs` i mostra la data de l'últim commit de `HEAD` en valencià (per exemple, `21 de setembre de 2026`).

En local, la data correspon al `HEAD` que tens construït. En GitHub Actions, correspon al commit descarregat per a aquella execució; en el desplegament de Pages és, per tant, l'última actualització publicada. Si Git no està disponible (per exemple, en una còpia del codi sense metadades Git), la construcció continua i conserva el text de reserva `Última actualització: no disponible`.

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
- `hooks/last_update.py`: data de l'últim commit al peu global.
- `requirements.in` i `requirements.txt`: dependències directes i bloqueig reproduïble.
- `.github/workflows/docs.yml`: validació i publicació en GitHub Pages.

No publiques dades personals, qualificacions, credencials ni normativa sense verificar-ne la font oficial.

## GitHub Pages

El workflow valida cada `pull request` i cada `push`. Només un `push` a `main` pot desplegar el lloc. Abans del primer desplegament cal seleccionar **GitHub Actions** com a font en **Settings → Pages**. El `GITHUB_TOKEN` del workflow té permisos mínims i, per disseny, no pot habilitar Pages en un repositori que encara no ho tinga configurat.

No s'ha definit `site_url`, `repo_url`, domini personalitzat ni fitxer `CNAME`, perquè encara no es coneixen l'adreça pública i la identitat definitiva del repositori.
