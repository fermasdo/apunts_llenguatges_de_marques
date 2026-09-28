---
theme: default
title: CSS i presentació web
info: |
  Presentació docent de la unitat 2 de Llenguatges de Marques.
  HTML descriu la funció; CSS decidix la presentació.
class: text-left
drawings:
  persist: false
transition: slide-left
mdc: true
---

# CSS i presentació web

## Unitat 2 · Llenguatges de Marques

<div class="mt-14 text-2xl font-bold text-teal-700">
HTML descriu la funció → CSS decidix la presentació → comprovem → corregim
</div>

---
layout: two-cols
---

# L'encàrrec del taller

::left::

La web ja té HTML semàntic:

- `index.html` i `contacte.html`;
- navegació, articles, taula i formulari;
- enllaç de salt i navegació amb teclat.

::right::

> Les dos pàgines han de semblar el mateix lloc, funcionar en mòbil i mostrar sempre el focus.

<div class="mt-12 text-xl font-bold text-teal-700">
Què correspon a HTML? I què correspon a CSS?
</div>

---
layout: two-cols
---

# Una sola font de decisions visuals

::left::

```text
projecte-taller/
├── index.html
├── contacte.html
└── css/
    └── estils.css
```

Un full extern evita repetir colors, espais i tipografies.

::right::

```html
<!-- dins de cada <head> -->
<link rel="stylesheet"
      href="css/estils.css">
```

```css
body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #24303a;
}
```

---
layout: two-cols
---

# Llig una regla CSS

::left::

```css
nav a {
  color: #ffffff;
  padding: 0.5rem 0.75rem;
}
```

<div class="mt-6 text-lg">

- **selector**: `nav a`;
- **propietat**: `color`;
- **valor**: `#ffffff`;
- **regla**: selector + declaracions.

</div>

::right::

<iframe src="./demos/regla.html" title="Demostració d'una regla CSS aplicada a enllaços de navegació" class="w-full h-85 border rounded shadow"></iframe>

<div class="mt-2 text-sm text-gray-500">Exemple renderitzat: el selector no modifica el significat de l'enllaç.</div>

---
layout: two-cols
---

# Cascada, herència i especificitat

::left::

```css
body { color: #24303a; }
a { color: #075985; }
nav a { color: #ffffff; }
.enllac-destacat { color: #7c2d12; }
```

::right::

1. Una regla més concreta pot guanyar.
2. Si empaten, guanya la que apareix més tard.
3. `color` s'hereta; `margin` i `border`, no.

<div class="mt-8 p-4 rounded bg-amber-50 border-l-4 border-amber-500">
<strong>Pregunta:</strong> quin color té un enllaç dins de <code>nav</code>?<br>
<span v-click>Blanc: <code>nav a</code> és més concret que <code>a</code>.</span>
</div>

<div v-click class="mt-5 text-red-700 font-bold">No uses <code>!important</code> per a amagar un conflicte.</div>

---
layout: two-cols
---

# Sistema visual: variables i contrast

::left::

```css
:root {
  --color-fons: #fffdf8;
  --color-text: #24303a;
  --color-principal: #075985;
  --espai-2: 1rem;
}

body {
  background: var(--color-fons);
  color: var(--color-text);
}
```

::right::

<iframe src="./demos/variables.html" title="Demostració de variables CSS per a colors i espais" class="w-full h-85 border rounded shadow"></iframe>

- Usa `rem` per a espais que acompanyen el zoom.
- El color reforça un estat; el text l'explica.
- La jerarquia visual no substituïx `h1`, `h2` i `h3`.

---
layout: two-cols
---

# El model de caixa

::left::

<div class="mt-8 flex items-center justify-center text-center font-bold">
  <div class="p-7 bg-amber-100 border-3 border-amber-500">margin
    <div class="mt-4 p-6 bg-sky-100 border-3 border-sky-600">border
      <div class="mt-4 p-5 bg-teal-100 border-3 border-teal-600">padding
        <div class="mt-4 p-4 bg-white border">contingut</div>
      </div>
    </div>
  </div>
</div>

::right::

- `margin`: separació exterior.
- `border`: vora.
- `padding`: separació interior.
- `width`: amplària de la caixa.

```css
* {
  box-sizing: border-box;
}
```

Amb `border-box`, la `width` inclou `padding` i `border`.

---
layout: two-cols
---

# Amplària segura: fluida, no fixa

::left::

```css
main {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

- deixa marge en pantalla estreta;
- limita les línies en pantalla ampla;
- evita una maquetació de `width: 900px`.

::right::

<iframe src="./demos/amplaria.html" title="Demostració d'amplària fluida i amplària fixa" class="w-full h-85 border rounded shadow"></iframe>

<div class="mt-3 text-sm text-gray-500">Arrossega el separador del visor per observar el comportament fluid.</div>

---
layout: two-cols
---

# Flexbox: el menú és una fila flexible

::left::

```css
nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
```

<div class="mt-8 text-xl font-bold text-teal-700">`gap` separa; `flex-wrap` evita desbordar.</div>

::right::

<iframe src="./demos/flexbox.html" title="Demostració d'un menú flexible amb Flexbox" class="w-full h-85 border rounded shadow"></iframe>

---
layout: two-cols
---

# Grid: les fitxes ocupen files i columnes

::left::

```html
<section class="productes">
  <h2>Productes destacats</h2>
  <article>…</article>
  <article>…</article>
</section>
```

La graella canvia la distribució, no la semàntica dels `article`.

::right::

```css
.productes {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}

.productes > h2 {
  grid-column: 1 / -1;
}
```

<iframe src="./demos/grid.html" title="Demostració de fitxes de producte en una graella CSS Grid" class="w-full h-52 mt-3 border rounded shadow"></iframe>

---
layout: two-cols
---

# Responsive: primer una base fluida

::left::

Abans d'afegir punts de tall:

- `width: min(...)`;
- `flex-wrap`;
- `minmax()` i `auto-fit`;
- text i controls que poden créixer.

::right::

```css
@media (min-width: 48rem) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}
```

Una **media query** és una excepció justificada, no el punt de partida.

---
layout: two-cols
---

# Focus i zoom: també són disseny

::left::

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid #b45309;
  outline-offset: 3px;
}
```

No elimines `outline` sense una alternativa visible.

::right::

<iframe src="./demos/focus.html" title="Demostració del focus visible amb teclat" class="w-full h-85 border rounded shadow"></iframe>

Prem <kbd>Tab</kbd> dins de l'exemple i comprova el focus.

---
layout: two-cols
---

# Comprovacions abans d'entregar

::left::

| Prova | Pregunta |
|---|---|
| 320 px | Hi ha desplaçament horitzontal? |
| 1280 px | El text és massa ample? |
| `Tab` | Veig on està el focus? |
| 200 % | Puc llegir i usar els controls? |
| Color | El text explica l'estat? |

::right::

<div class="mt-12 p-6 rounded bg-teal-50 border border-teal-600 text-xl">
Registra en <code>proves.txt</code>:<br><br>
<strong>prova → resultat → correcció o confirmació</strong>
</div>

---
layout: two-cols
---

# Pràctica guiada: diagnostica abans de corregir

::left::

```css
main { width: 900px; }
nav a:focus { outline: 0; }
```

Quins símptomes esperes en un mòbil o amb teclat?

::right::

1. Identifica el problema.
2. Explica la causa probable.
3. Proposa una primera correcció.
4. Prova-la sense `!important`.

<div v-click class="mt-8 p-4 rounded bg-red-50 border-l-4 border-red-600">
Amplària fixa → desplaçament lateral.<br>
Focus eliminat → no saps on actuarà el teclat.
</div>

---
layout: center
class: text-center
---

# Minirepte: sistema visual per al taller

<div class="text-left text-xl leading-9 mt-8">

1. Un sol `css/estils.css` per a les dos pàgines.
2. Variables de color i espai, tipografia i contrast llegibles.
3. Menú amb Flexbox i productes amb Grid.
4. Sense desplaçament horitzontal entre 320 px i 1280 px.
5. Focus visible, text usable al 200 % i proves registrades.

</div>

<div class="mt-12 text-2xl font-bold text-teal-700">
El repte posterior ampliarà el catàleg; ara consolida el sistema visual.
</div>

---
layout: center
class: text-center
---

# Idees per emportar

<div class="text-left text-xl leading-10 mt-8">

- HTML descriu què és cada part; CSS n'organitza la presentació.
- Una font única evita duplicar decisions visuals.
- Flexbox i Grid adapten la distribució sense canviar la semàntica.
- Un disseny no està acabat fins que s'ha provat amb amplària estreta, zoom i teclat.

</div>

<div class="mt-14 text-2xl font-bold text-teal-700">
Organitza → presenta → prova → corregeix
</div>
