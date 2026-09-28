---
theme: default
title: HTML semàntic i accessible
info: |
  Presentació docent de la unitat 1 de Llenguatges de Marques.
  HTML descriu la funció del contingut.
class: text-left
transition: slide-left
mdc: true
---

# HTML semàntic<br>i accessible

## Unitat 1 · Llenguatges de Marques

<div class="mt-14 text-2xl font-bold text-teal-700">
Organitza → marca la funció → prova amb teclat → corregix
</div>

---
layout: two-cols
---

# Activació: un text seguit no explica res

::left::

```text
Núvol de paper. Catàleg de material creatiu.
Productes. Quadern cosit. Paper reciclat
de 80 g/m². 6,50 €. Contacte.
```

::right::

<div class="mt-8 text-xl leading-9">

Què és cada fragment?

- nom del negoci;
- presentació;
- apartat;
- producte;
- dades;
- navegació.

</div>

<div v-click class="mt-8 p-4 rounded bg-teal-50 border-l-4 border-teal-600">
Abans d'escriure etiquetes, decidim el <strong>model de contingut</strong>.
</div>

---
layout: two-cols
---

# L'encàrrec del taller

::left::

Crearàs dos fitxers locals:

```text
unitat-1/
├── index.html
└── contacte.html
```

::right::

El minilloc ha de:

1. tindre una estructura que s'entenga;
2. permetre anar i tornar entre pàgines;
3. funcionar amb teclat;
4. usar dades completament fictícies.

<div class="mt-8 text-lg font-bold text-teal-700">Encara no decidim el disseny: això arribarà amb CSS.</div>

---
layout: two-cols
---

# El document HTML complet

::left::

```text
html
├── head → informació sobre la pàgina
└── body → contingut visible
```

```html
<!doctype html>
<html lang="ca">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">
    <title>Núvol de paper | Catàleg</title>
  </head>
  <body>
    <h1>Catàleg de Núvol de paper</h1>
  </body>
</html>
```

::right::

<iframe src="./demos/document.html" title="Demostració de les parts d'un document HTML" class="w-full h-95 border rounded shadow"></iframe>

---
layout: two-cols
---

# `title` no és `h1`

::left::

```html
<title>Núvol de paper | Catàleg</title>
```

Identifica la pàgina en:

- la pestanya;
- l'historial;
- una llista de pàgines obertes.

::right::

```html
<h1>Catàleg de Núvol de paper</h1>
```

És el títol principal del contingut visible.

<iframe src="./demos/title-h1.html" title="Demostració de la diferència entre title i h1" class="w-full h-45 mt-5 border rounded shadow"></iframe>

---
layout: two-cols
---

# Encapçalaments: un índex, no una grandària

::left::

```text
h1  Catàleg de Núvol de paper
├── h2  Productes destacats
│   ├── h3  Quadern cosit
│   └── h3  Bloc de notes
└── h2  Com contactar
```

::right::

<div class="mt-8 text-xl leading-9">

- Un sol `h1` per pàgina.
- `h2` per a un tema principal.
- `h3` per a un subtema d'eixe `h2`.

</div>

<div v-click class="mt-8 p-4 rounded bg-red-50 border-l-4 border-red-600">
No tries <code>h3</code> perquè pareix més menut. El nivell expressa la relació entre idees.
</div>

---
layout: two-cols
---

# Regions i elements de seccionament

::left::

```html
<header>…</header>
<nav>…</nav>
<main>…</main>
<footer>…</footer>
```

`nav` i `main` són regions que orienten la navegació.

::right::

```html
<section>
  <h2>Productes destacats</h2>
  <article>…</article>
</section>
```

`section` agrupa un tema; `article` és una peça amb sentit propi.

<iframe src="./demos/regions.html" title="Demostració de regions i elements de seccionament HTML" class="w-full h-42 mt-4 border rounded shadow"></iframe>

---
layout: two-cols
---

# Enllaç de salt: no repetisques el menú

::left::

```html
<a href="#contingut">
  Vés al contingut principal
</a>

<main id="contingut">
```

És el primer enllaç del document i apunta al contingut principal.

::right::

<iframe src="./demos/skip-link.html" title="Demostració d'un enllaç de salt al contingut principal" class="w-full h-85 border rounded shadow"></iframe>

<div class="mt-3 text-sm text-gray-500">Prem Tab dins de l'exemple i després Enter.</div>

---
layout: two-cols
---

# Enllaços que expliquen la destinació

::left::

<div class="mt-8 p-5 rounded bg-red-50 border-l-4 border-red-600 text-xl">
❌ <code>&lt;a href="contacte.html"&gt;Fes clic ací&lt;/a&gt;</code>
</div>

::right::

<div class="mt-8 p-5 rounded bg-teal-50 border-l-4 border-teal-600 text-xl">
✅ <code>&lt;a href="contacte.html"&gt;Contacte&lt;/a&gt;</code>
</div>

<div class="mt-10 text-xl">
Un enllaç local usa el nom real del fitxer. Si no obri: revisa majúscules, accents i extensió.
</div>

---
layout: two-cols
---

# `alt`: una alternativa segons el context

::left::

```html
<img src="cartell-taller.png"
     alt="Taller de gravat, dissabte 12 d'octubre">
```

Si el cartell aporta data i horari, l'alternativa ha de comunicar-los.

::right::

```html
<img src="linia-decorativa.svg" alt="">
```

Una imatge purament decorativa té `alt=""`.

<iframe src="./demos/alt.html" title="Demostració de text alternatiu informatiu i decoratiu" class="w-full h-40 mt-4 border rounded shadow"></iframe>

---
layout: two-cols
---

# Taules: dades, no maquetació

::left::

```html
<caption>Disponibilitat dels productes</caption>
<th scope="col">Producte</th>
<th scope="row">Quadern cosit</th>
```

- `caption` explica el conjunt.
- `th` és una capçalera.
- `scope` relaciona files i columnes.

::right::

<iframe src="./demos/taula.html" title="Demostració d'una taula de dades amb capçaleres" class="w-full h-85 border rounded shadow"></iframe>

---
layout: two-cols
---

# Formularis: cada control necessita un nom

::left::

```html
<label for="nom">Nom</label>
<input id="nom" name="nom"
       type="text" required>
```

`for` i `id` han de coincidir exactament.

::right::

<iframe src="./demos/formulari.html" title="Demostració de l'associació entre etiqueta i control" class="w-full h-85 border rounded shadow"></iframe>

<div class="mt-3 text-sm text-gray-500">Prova a clicar l'etiqueta «Nom»: el control rep el focus.</div>

---
layout: two-cols
---

# `GET` és una prova, no un canal privat

::left::

```html
<form action="#" method="get">
  …
</form>
```

`GET` posa els valors a l'URL d'`action` i fa una petició a eixe recurs.

::right::

<iframe src="./demos/get.html" title="Demostració d'un formulari GET amb dades fictícies" class="w-full h-75 border rounded shadow"></iframe>

<div class="mt-4 p-3 rounded bg-amber-50 border-l-4 border-amber-500">
No hi ha cap <em>backend</em> configurat per tractar o guardar esta consulta, però els valors poden aparéixer a l'adreça i a l'historial. <strong>No escrigues dades reals.</strong>
</div>

---
layout: two-cols
---

# El navegador també és una eina de revisió

::left::

```text
Tab → enllaç de salt → menú
    → contingut → formulari

Shift + Tab → recorregut invers
```

Comprova ordre lògic i focus visible.

::right::

<iframe src="./demos/teclat.html" title="Demostració de navegació per teclat en una pàgina HTML" class="w-full h-85 border rounded shadow"></iframe>

No elimines l'indicador de focus del navegador.

---
layout: center
class: text-center
---

# Minirepte: fitxa de taller accessible

<div class="text-left text-xl leading-9 mt-8">

1. `index.html` i `contacte.html` amb navegació local.
2. Un sol `h1`, jerarquia coherent i regions semàntiques.
3. Dos `article`, una taula de disponibilitat i un formulari de prova.
4. Enllaç de salt, text d'enllaç clar i dades fictícies.
5. Prova amb `Tab`, `Shift` + `Tab` i, si és possible, validador HTML.

</div>

<div class="mt-12 text-2xl font-bold text-teal-700">
HTML correcte: estructura, orientació i funció abans d'aplicar CSS.
</div>

---
layout: center
class: text-center
---

# Idees per emportar

<div class="text-left text-xl leading-10 mt-8">

- La semàntica diu què és cada part; no com es veu.
- Els encapçalaments formen un índex i les regions orienten.
- Taules i formularis necessiten capçaleres i etiquetes reals.
- La revisió amb teclat detecta problemes que no resol un validador.

</div>

<div class="mt-14 text-2xl font-bold text-teal-700">
Organitza → marca la funció → prova amb teclat → corregix
</div>
