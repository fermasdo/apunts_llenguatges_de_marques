# 2. CSS i presentació web

En esta unitat, de **tres setmanes orientatives**, donaràs una aparença coherent i adaptable al minilloc de la unitat 1. Mantindràs l'HTML semàntic: **CSS decidix com es veu; HTML indica què és cada part**. Esta és una proposta metodològica vinculada a l'[itinerari del curs](index.md), no una temporalització oficial.

[Obri la presentació de la unitat](../presentacions/unitat-2-css/index.html){ .md-button .md-button--primary }

<div class="grid cards" markdown>

-   **Punt de partida**

    ---

    Tens `index.html` i `contacte.html` amb estructura semàntica, navegació, productes, una taula i un formulari de prova.

-   **Producció final**

    ---

    Crearàs un únic full `css/estils.css` que les dos pàgines compartixen, usable en pantalla estreta, amb teclat i amb zoom.

</div>

## Propòsit i resultats observables

Un **full d'estils en cascada** o **CSS** (*Cascading Style Sheets*) és un conjunt de regles que definixen la presentació d'un document. Una regla associa un **selector** amb declaracions de propietat i valor.

En acabar podràs:

- [ ] enllaçar un full CSS extern des de dos documents HTML i reutilitzar-lo;
- [ ] escriure regles amb selectors, propietats i valors, i predir quin estil s'aplica en casos senzills;
- [ ] usar la cascada, l'herència i classes sense recórrer a `!important`;
- [ ] controlar espais, amplàries, vores i fons amb el model de caixa;
- [ ] crear una tipografia, uns colors i un contrast llegibles;
- [ ] distribuir el menú amb Flexbox i les fitxes amb Grid;
- [ ] comprovar que no hi ha desplaçament horitzontal a 320 px, que el focus es veu i que el text continua usable al 200 % de zoom;
- [ ] descriure les proves realitzades i corregir una incidència observable.

!!! note "Abast"
    Treballarem CSS natiu i un sistema visual menut. No usarem frameworks, animacions, posicionament avançat, JavaScript ni tipografies o imatges externes. L'objectiu és entendre les decisions de presentació abans d'automatitzar-les.

## Activació: el contingut no és el disseny

Obri el teu `index.html` de la unitat 1. El navegador ja mostra títols, enllaços, paràgrafs i camps perquè l'HTML té una aparença predeterminada. Ara imagina este encàrrec:

> El taller necessita una imatge coherent en les dos pàgines, fitxes de producte llegibles en mòbil i ordinador, i un focus de teclat que es veja sempre.

Abans d'escriure CSS, respon:

1. Quins elements continuen sent títols, navegació o articles encara que canvie el seu color?
2. Quines decisions visuals es repetixen en les dos pàgines?
3. Què costaria corregir si cada element tinguera un atribut `style` diferent?

La resposta és un **full extern**: una única font per a les decisions visuals compartides.

## 1. El primer full CSS extern

### Connecta'l des de les dos pàgines

Dins de la carpeta que vas crear en la unitat 1, conserva `index.html` i `contacte.html` i crea la carpeta `css`. Si ja no tens aquella carpeta, copia primer els dos fitxers HTML a una carpeta nova abans de continuar:

```text
projecte-taller/
├── index.html
├── contacte.html
└── css/
    └── estils.css
```

En el `head` de **cada** document HTML, després de `meta viewport`, afegix:

```html
<link rel="stylesheet" href="css/estils.css">
```

El valor de `href` és una **ruta relativa**: des d'`index.html` i `contacte.html` entra a la carpeta `css` i busca `estils.css`.

Escriu primer en `css/estils.css`:

```css
body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #24303a;
}
```

Guarda, recarrega les dos pàgines i comprova el canvi. Una regla es llig així:

```text
body {                         ← selector: elements body
  line-height: 1.5;            ← propietat: valor
}                               ← declaració entre claus
```

| Símptoma | Primera comprovació |
|---|---|
| No canvia res. | El `link` està dins de `head` i la ruta és `css/estils.css`? |
| El CSS apareix com a text en el navegador. | El fitxer acaba exactament en `.css`? |
| Només canvia una pàgina. | Les dos pàgines tenen el mateix `link`? |
| El canvi no és el que esperaves. | Has guardat el fitxer que obri el navegador i l'has recarregat? |

!!! tip "Una font única"
    Evita repetir colors, marges o tipografies en atributs `style="…"` dins de l'HTML. Un full extern permet corregir una decisió una sola vegada i aplicar-la a tot el minilloc.

## 2. Per què guanya una regla?

### Cascada, herència i especificitat

La **cascada** resol quina regla s'aplica quan més d'una afecta la mateixa propietat. Per començar, usa estes tres idees:

1. Una regla més concreta pot superar una regla més general.
2. Si tenen la mateixa concreció, guanya la que apareix més tard.
3. Algunes propietats de text, com `color` i `font-family`, s'**hereten** dels elements pare; `margin`, `border` i `background` no.

```css
body {
  color: #24303a;
}

a {
  color: #075985;
}

nav a {
  color: #ffffff;
}

.enllac-destacat {
  color: #7c2d12;
}
```

| Selector | A què s'aplica | Idea clau |
|---|---|---|
| `a` | Qualsevol enllaç. | Regla general. |
| `nav a` | Un enllaç dins de `nav`. | Més concret que `a`. |
| `.enllac-destacat` | Un element que té eixa classe. | Variació reutilitzable. |
| `#contingut` | L'element amb eixe `id`. | Ja identifica el destí de l'enllaç de salt; no el necessites per a l'estil general. |

Una **classe** és un nom que pots afegir a diversos elements amb l'atribut `class`. Per exemple, una secció de productes pot ser:

```html
<section class="productes">
  <h2>Productes destacats</h2>
  <!-- articles de producte -->
</section>
```

!!! warning "No uses `!important` per arreglar un conflicte"
    `!important` fa més difícil entendre la cascada i mantindre el projecte. Revisa primer el selector, la propietat i l'orde de les regles. En esta unitat no el necessites.

### Pràctica curta: prediu abans de provar

Amb les regles anteriors, quin color tindrà un enllaç dins de `nav`? **Blanc**, perquè `nav a` és més concret que `a`. Ara mou la regla `a` al final: el resultat continua sent blanc. L'orde només resol l'empat entre regles amb la mateixa especificitat.

## 3. Un sistema visual llegible

Les **propietats personalitzades** de CSS són noms reutilitzables de valors. Declara un conjunt menut de colors i espais en `:root`, que representa l'element arrel del document:

```css
:root {
  --color-fons: #fffdf8;
  --color-text: #24303a;
  --color-principal: #075985;
  --color-superficie: #e0f2fe;
  --color-focus: #b45309;
  --espai-1: 0.5rem;
  --espai-2: 1rem;
  --espai-3: 1.5rem;
}
```

`rem` és una unitat relativa a la mida de lletra arrel del navegador. Per això, els espais definits amb `rem` acompanyen millor les preferències de mida de text que una mesura fixa en píxels.

```css
body {
  margin: 0;
  background-color: var(--color-fons);
  color: var(--color-text);
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

a {
  color: var(--color-principal);
}
```

La jerarquia visual —mida, pes o color— ajuda a llegir, però no substituïx la jerarquia HTML de `h1`, `h2` i `h3`. Mantín un contrast clar entre text i fons. Si tens connexió, pots comprovar una combinació amb una eina de contrast; en qualsevol cas, llig el text amb llum baixa i amb la pantalla ampliada.

!!! note "El color no pot ser l'únic avís"
    Si una disponibilitat és «esgotat» o un camp és obligatori, conserva eixes paraules en el text. Canviar només el color deixa fora persones que no el distingixen o que usen una configuració visual diferent.

## 4. El model de caixa i una amplària segura

Cada element visible ocupa una **caixa**. De fora cap a dins, té:

```text
margin → border → padding → contingut
```

- `margin` separa la caixa d'altres caixes.
- `border` és la vora.
- `padding` separa el contingut de la vora.
- `width` establix una amplària per a la caixa.

Comença el full amb esta regla:

```css
* {
  box-sizing: border-box;
}
```

Amb `border-box`, l'amplària declarada inclou el `padding` i la `border`; és més previsible quan la pantalla s'estreny. Afig després un contenidor per al contingut principal:

```css
main {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

`min()` tria el valor més menut: deixa 1 `rem` de marge a cada costat en una pantalla estreta i evita línies excessivament llargues en una pantalla ampla. `margin-inline: auto` centra el bloc en la direcció de lectura.

!!! warning "Evita l'amplària fixa per a la maquetació"
    `width: 900px` pot funcionar en la teua pantalla i provocar desplaçament horitzontal en un mòbil. Reduïx la finestra abans de donar una decisió per bona.

## 5. Flexbox per al menú; Grid per a les fitxes

### Flexbox: una direcció principal

**Flexbox** distribuïx elements sobretot en una fila o una columna. És adequat per al grup d'enllaços que ja tens dins de `nav`:

```css
header {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding-block: var(--espai-2);
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espai-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

nav a {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background-color: var(--color-principal);
  color: #ffffff;
  text-decoration: none;
}
```

`flex-wrap: wrap` permet que els enllaços passen a una línia nova si no caben. `gap` crea la separació; no necessites afegir marges diferents a cada enllaç.

### Grid: files i columnes de fitxes

**Grid** és útil quan distribuïxes elements en files i columnes. Després d'afegir `class="productes"` a la secció de productes, aplica:

```css
.productes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--espai-2);
  margin-block: var(--espai-3);
}

.productes > h2 {
  grid-column: 1 / -1;
}

.productes article {
  padding: var(--espai-2);
  border: 1px solid #94a3b8;
  border-radius: 0.5rem;
  background-color: #ffffff;
}
```

`minmax(16rem, 1fr)` diu que una fitxa no serà més estreta de `16rem` i que pot créixer si hi ha espai. `auto-fit` calcula quantes columnes caben. Amb una pantalla estreta, les fitxes passen a una columna sense canviar els `article` per `div` ni afegir una media query.

## 6. Exemple guiat: un `estils.css` complet

Aplica el `link` a les dos pàgines i afegix `class="productes"` a la secció que conté els dos `article` de `index.html`. Després copia este fitxer complet a `css/estils.css`:

```css title="css/estils.css"
:root {
  --color-fons: #fffdf8;
  --color-text: #24303a;
  --color-principal: #075985;
  --color-superficie: #e0f2fe;
  --color-focus: #b45309;
  --espai-1: 0.5rem;
  --espai-2: 1rem;
  --espai-3: 1.5rem;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--color-fons);
  color: var(--color-text);
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

header,
main,
footer {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}

header,
footer {
  padding-block: var(--espai-2);
}

h1,
h2,
h3 {
  color: var(--color-principal);
  line-height: 1.2;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--espai-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

nav a {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background-color: var(--color-principal);
  color: #ffffff;
  text-decoration: none;
}

.productes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: var(--espai-2);
  margin-block: var(--espai-3);
}

.productes > h2 {
  grid-column: 1 / -1;
}

.productes article,
form,
table {
  border: 1px solid #94a3b8;
  border-radius: 0.5rem;
  background-color: #ffffff;
}

.productes article,
form {
  padding: var(--espai-2);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.75rem;
  border: 1px solid #94a3b8;
  text-align: left;
}

input,
textarea,
button {
  font: inherit;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 0.75rem;
  border: 0;
  background-color: var(--color-principal);
  color: #ffffff;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

@media (min-width: 48rem) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--espai-2);
  }
}
```

L'única **media query** organitza la capçalera en fila quan hi ha prou espai. La resta de l'adaptació ve d'amplàries fluides, `flex-wrap` i Grid. No ocultes l'enllaç de salt: quan rep focus, el navegador ha de poder mostrar-lo i usar-lo.

## 7. Accessibilitat visual: comprova, no suposem

El focus és una informació funcional, no un detall decoratiu. No elimines `outline` sense oferir un indicador alternatiu visible. La regla `:focus-visible` prioritza mostrar el contorn en navegar amb teclat; el navegador aplica heurístiques segons el context per decidir quan convé fer-lo visible.

Fes estes proves sobre les dos pàgines:

| Prova | Com la fas | Resultat esperat |
|---|---|---|
| Amplària estreta | Reduïx la finestra fins a uns 320 px. | No hi ha desplaçament horitzontal; menú, taula i fitxes continuen accessibles. |
| Amplària ampla | Amplia la finestra. | El text no ocupa tota la pantalla i les fitxes aprofiten l'espai disponible. |
| Teclat | Prem `Tab` i `Shift` + `Tab`. | Veus sempre el focus en l'enllaç, el menú, els camps i el botó. |
| Zoom | Establix el zoom del navegador al 200 %. | Pots llegir, activar enllaços i omplir controls sense perdre contingut. |
| Color | Revisa avisos i disponibilitat. | Les paraules comuniquen l'estat, no solament el color. |

!!! tip "Registra el que proves"
    Anota l'amplària o el zoom utilitzat, què has observat i quina correcció has aplicat. Un «funciona» sense una prova concreta no permet reproduir un problema ni demostrar que l'has revisat.

## Pràctica graduada

### 1. Un estil compartit

**Objectiu:** connectar un únic CSS extern a les dos pàgines.

1. Crea `css/estils.css` i afig el `link` als dos `head`.
2. Aplica `font-family`, `line-height`, `color` i `background-color` a `body`.
3. Guarda, recarrega i comprova les dos pàgines.

**Criteris d'èxit:**

- [ ] Hi ha un únic full `css/estils.css` compartit.
- [ ] Les rutes dels dos `link` són correctes.
- [ ] No has usat atributs `style` per a estes decisions repetides.

### 2. Caixa i llegibilitat

**Objectiu:** limitar l'amplària de lectura sense impedir l'ús en mòbil.

1. Aplica `box-sizing: border-box` a tots els elements.
2. Dona a `main` una amplària amb `min(100% - 2rem, 70rem)` i centra'l.
3. Afig `padding`, `border` i fons a una fitxa de producte.
4. Reduïx la finestra i comprova que no apareix desplaçament lateral.

**Criteris d'èxit:**

- [ ] Pots explicar la diferència entre `padding` i `margin`.
- [ ] No hi ha una amplària fixa que desborde la pantalla estreta.
- [ ] El contingut és més fàcil de llegir en pantalla ampla.

### 3. Menú i fitxes adaptables

**Objectiu:** usar Flexbox i Grid sense alterar la semàntica HTML.

1. Aplica Flexbox al `ul` de navegació amb `flex-wrap` i `gap`.
2. Afig `class="productes"` a la secció que conté els articles.
3. Aplica la graella de l'exemple amb `auto-fit` i `minmax()`.
4. Comprova el resultat en finestra estreta i ampla.

**Criteris d'èxit:**

- [ ] El menú es pot partir en diverses línies sense eixir de la pantalla.
- [ ] Les fitxes passen d'una a diverses columnes segons l'espai.
- [ ] Els productes continuen sent `article` i no has usat una taula per maquetar.

### 4. Proves d'accessibilitat visual

**Objectiu:** detectar problemes que no es veuen només en una pantalla ampla.

1. Afig la regla `:focus-visible` de l'exemple.
2. Prova les dos pàgines amb `Tab` i `Shift` + `Tab`.
3. Prova-les a uns 320 px i amb zoom al 200 %.
4. Escriu en `proves.txt` tres línies: prova, resultat i correcció o confirmació.

**Criteris d'èxit:**

- [ ] El focus és visible en enllaços, camps i botons.
- [ ] No depens només del color per informar.
- [ ] El registre descriu comprovacions concretes.

## Minirepte: sistema visual per al taller

**Objectiu:** donar al minilloc de la unitat 1 una identitat visual menuda, coherent, adaptable i usable.

**Punt de partida:** `index.html` i `contacte.html` amb contingut fictici i estructura semàntica ja revisada.

**Fitxers esperats:**

```text
index.html
contacte.html
css/estils.css
proves.txt
```

Aplica estes condicions:

1. un únic full CSS extern compartit per les dos pàgines;
2. variables per a, com a mínim, colors i espais;
3. tipografia, contrast i amplària de lectura llegibles;
4. navegació amb Flexbox i fitxes de producte amb Grid;
5. cap desplaçament horitzontal entre 320 px i 1280 px;
6. focus visible i text usable al 200 %;
7. un registre breu de proves de teclat, zoom i pantalla estreta.

**Llista de verificació:**

- [ ] `index.html` i `contacte.html` enllacen el mateix `css/estils.css`.
- [ ] He mantingut les regions, els encapçalaments, la taula i el formulari semàntics de la unitat 1.
- [ ] El menú usa `flex-wrap` i les fitxes una graella adaptable.
- [ ] El focus no s'ha eliminat i es veu amb el teclat.
- [ ] No he usat `!important`, amplàries fixes incompatibles amb mòbil ni dades personals.
- [ ] He anotat les proves i les incidències corregides.

Este minirepte prepara el [Repte 1: Aparador web accessible](../reptes/index.md#repte-1-aparador-web-accessible), on ampliaràs el catàleg a quatre productes i lliuraràs el registre de proves.

!!! note "Del minirepte al Repte 1"
    Reutilitzaràs el full CSS, l'estructura semàntica i les proves. Per al repte, a més, hauràs d'explicitar un model de dades, ampliar el catàleg a quatre productes i convertir la segona pàgina en una fitxa de producte. No avances eixos canvis ara: primer consolida el sistema visual amb dos productes.

## Autoavaluació

Intenta respondre abans de desplegar cada solució.

1. Per què convé que `index.html` i `contacte.html` compartisquen `estils.css`?

    ??? success "Solució"
        Perquè les decisions repetides estan en una sola font. Pots corregir el color, l'espai o la tipografia una vegada i les dos pàgines reben el canvi.

2. Si `a` i `nav a` donen un color diferent al mateix enllaç del menú, quina regla guanya?

    ??? success "Solució"
        `nav a`, perquè és més concreta: només coincidix amb enllaços que estan dins de `nav`.

3. Quina diferència hi ha entre `padding` i `margin`?

    ??? success "Solució"
        `padding` és l'espai interior, entre el contingut i la vora. `margin` és l'espai exterior que separa la caixa d'altres elements.

4. Per què `box-sizing: border-box` facilita controlar una amplària?

    ??? success "Solució"
        Perquè la `width` inclou el `padding` i la `border`. Així és més fàcil evitar que una caixa cresca més del que esperes.

5. Quan usaràs Flexbox i quan Grid en este minilloc?

    ??? success "Solució"
        Flexbox és adequat per al menú, que s'ordena principalment en una direcció. Grid és adequat per a les fitxes, que poden distribuir-se en files i columnes.

6. Per què no és una bona solució usar `width: 900px` per a tot el contingut?

    ??? success "Solució"
        Perquè pot ser més ample que una pantalla estreta i provocar desplaçament horitzontal. Una amplària fluida amb un límit màxim s'adapta millor.

7. Què comproves amb `Tab` que no comproves només mirant la pàgina?

    ??? success "Solució"
        Comproves si el focus arriba als elements útils, si l'orde és comprensible i si l'indicador de focus es veu.

8. Si un estat es comunica amb verd, quina informació ha d'acompanyar-lo?

    ??? success "Solució"
        Una paraula o frase, com «disponible» o «esgotat». El color pot reforçar el missatge, però no pot ser l'única informació.

## Resum operatiu i recursos

**HTML descriu la funció → CSS decidix la presentació → prova en amplàries, zoom i teclat → corregeix.**

- Un full extern evita duplicar decisions visuals.
- La cascada no és màgia: selector, herència, especificitat i orde expliquen el resultat.
- El model de caixa, les amplàries fluides, Flexbox i Grid permeten adaptar el contingut sense canviar-ne la semàntica.
- Focus visible, contrast i text explícit formen part del disseny, no són un afegit final.

### Recursos per continuar

- [MDN: primers passos amb CSS, en castellà](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Getting_started): sintaxi, selectors i fulls externs.
- [MDN: dissenys CSS, en castellà](https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout): Flexbox, Grid i distribució adaptable.
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/): comprovació opcional de contrast de color.
- [Repte 1: Aparador web accessible](../reptes/index.md#repte-1-aparador-web-accessible): projecte que integra les unitats 0, 1 i 2.
