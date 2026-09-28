# 1. HTML semàntic i accessible

En esta unitat, de **quatre setmanes orientatives**, transformaràs una pàgina amb text en un document que explica la funció de cada part. És la base del treball associat a **RA2** en l'[itinerari del curs](index.md): una referència per orientar el treball, no una llista de burocràcia.

<div class="grid cards" markdown>

-   **Punt de partida**

    ---

    Ja pots crear, guardar, obrir i recarregar un HTML mínim amb `h1`, `p`, `ul` i `li`. No necessites Git, terminal ni CSS.

-   **Producció final**

    ---

    Construiràs una fitxa de taller fictícia en dos fitxers HTML connectats, comprensible amb el teclat i amb una estructura verificable.

</div>

## Propòsit i resultats observables

**HTML semàntic** és HTML que indica el significat o la funció del contingut, no només la seua aparença. Per exemple, un `nav` identifica una zona de navegació i un `h2` un apartat del tema.

En acabar podràs:

- [ ] crear un document HTML complet amb `lang`, `title` i `meta viewport` adequats;
- [ ] organitzar el contingut amb un sol `h1` i encapçalaments `h2` i `h3` que expressen la seua jerarquia;
- [ ] identificar i usar les regions `header`, `nav`, `main`, `article`, `section` i `footer`;
- [ ] crear enllaços locals, una taula de dades i un formulari amb etiquetes comprensibles;
- [ ] decidir i justificar si una imatge necessita un text alternatiu (`alt`) descriptiu o buit segons el context;
- [ ] revisar una pàgina amb el teclat, detectar errors de model i, si tens connexió, consultar un validador HTML.

!!! note "Abast"
    Treballarem estructura, contingut i accessibilitat bàsica. La presentació visual amb CSS i l'enviament real de formularis a un servidor arribaran més avant.

## Punt de partida: una mateixa informació, funcions diferents

Imagina un catàleg amb este text seguit:

```text
Núvol de paper. Catàleg de material creatiu. Productes. Quadern cosit. Paper reciclat de 80 g/m². 6,50 €. Contacte.
```

Abans d'escriure cap etiqueta, identifica què és cada fragment: el nom del negoci, la presentació, un apartat, un producte, les seues dades i una destinació de navegació. Esta decisió és el **model de contingut**: l'organització que necessita la informació abans de donar-li aspecte.

Una estructura clara ajuda les persones que lliguen visualment, qui navega només amb teclat i les tecnologies de suport, com un lector de pantalla. També facilita mantindre la pàgina quan cresca.

## Document, jerarquia i regions

### La base d'un document actual

Partint de la unitat 0, afegim dues decisions importants:

| Element | Què declara | Per què convé |
|---|---|---|
| `lang="ca"` | L'idioma principal és el català. | Un lector de pantalla pot triar una pronunciació més adequada. |
| `<meta name="viewport" content="width=device-width, initial-scale=1">` | Configura l'amplària inicial de visualització segons el dispositiu. | És una base habitual per a mòbil; l'adaptació real també depén del contingut i del CSS. |
| `<title>` | El nom de la pàgina en la pestanya i l'historial. | Permet distingir pàgines obertes. |
| `<a href="#contingut">` | Un enllaç intern fins a una zona de la pàgina. | Permet saltar la navegació repetida amb el teclat. |

El primer enllaç del document complet serà un **enllaç de salt** (*skip link*). La seua destinació és l'element que té `id="contingut"`.

### Encapçalaments: l'esquelet del contingut

Els encapçalaments indiquen nivells, no grandàries de lletra. Usa un `h1` per al títol principal del document; els temes principals són `h2` i els subtemes d'un `h2` són `h3`.

```text
h1  Catàleg de Núvol de paper
├── h2  Productes destacats
│   ├── h3  Quadern cosit
│   └── h3  Bloc de notes
└── h2  Com contactar
```

No tries un `h3` només perquè es veu més menut que un `h2`: el nivell ha de correspondre a la subordinació del contingut. Evita salts que facen difícil entendre l'estructura. Més avant CSS decidirà la mida i l'estil sense canviar el nivell.

### Regions i elements de seccionament

Una **regió semàntica** o *landmark* és una part gran del document amb una funció reconeixible. Alguns lectors de pantalla permeten saltar directament entre regions com `nav` i `main`. `article` i `section` també organitzen el contingut, però no són automàticament regions de navegació.

| Element | Funció | Ús habitual |
|---|---|---|
| `header` | Capçalera de la pàgina o d'una secció. | Nom del lloc i presentació. |
| `nav` | Regió de navegació amb un grup d'enllaços. | Menú cap a les pàgines del lloc. |
| `main` | Regió del contingut principal i únic de la pàgina. | El catàleg o la fitxa que vens a consultar. |
| `article` | Peça de contingut que té sentit per si mateixa. | Un producte, una notícia o una entrada. |
| `section` | Apartat temàtic del contingut, normalment amb encapçalament. | «Productes destacats». |
| `footer` | Peu de la pàgina o d'una secció. | Informació final, autoria o contacte. |

!!! tip "Primer HTML natiu"
    HTML ja té elements per a encapçalaments, navegació, botons i formularis. Abans d'afegir ARIA —atributs per comunicar informació extra a tecnologies de suport— usa l'element HTML que correspon a la seua funció. En esta unitat no necessites ARIA.

## Exemple guiat: catàleg «Núvol de paper»

El document següent és complet i es pot copiar en un fitxer anomenat `index.html`. No incorpora imatges: així el pots provar sense descarregar ni crear recursos addicionals.

```html title="index.html"
<!doctype html>
<html lang="ca">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Núvol de paper | Catàleg</title>
  </head>
  <body>
    <a href="#contingut">Vés al contingut principal</a>

    <header>
      <p>Núvol de paper</p>
      <p>Material creatiu per a idees quotidianes.</p>
      <nav>
        <ul>
          <li><a href="index.html">Catàleg</a></li>
          <li><a href="contacte.html">Contacte</a></li>
        </ul>
      </nav>
    </header>

    <main id="contingut">
      <h1>Catàleg de Núvol de paper</h1>
      <p>Dos productes senzills per escriure, organitzar i regalar.</p>

      <section>
        <h2>Productes destacats</h2>

        <article>
          <h3>Quadern cosit</h3>
          <p>Quadern de 96 pàgines de paper reciclat de 80 g/m².</p>
          <p>Preu: 6,50 €</p>
        </article>

        <article>
          <h3>Bloc de notes</h3>
          <p>Bloc de 60 fulls quadrats amb enquadernació en espiral.</p>
          <p>Preu: 4,20 €</p>
        </article>
      </section>
    </main>

    <footer>
      <p>Catàleg fictici per a pràctiques d'HTML.</p>
    </footer>
  </body>
</html>
```

### Llig-lo per decisions

1. `title` identifica esta pàgina concreta; `h1` presenta el contingut que veus dins de la pàgina. No tenen per què ser idèntics.
2. L'enllaç inicial apunta a `#contingut`. En prémer-lo, el navegador porta directament a `main`, que té eixe `id`.
3. `header`, `nav`, `main` i `footer` delimiten les zones principals. Només hi ha un `main`.
4. La secció «Productes destacats» té un `h2`; cada producte és un `article` amb un `h3`, perquè cada fitxa es podria entendre fora de la llista.
5. Els enllaços diuen «Catàleg» i «Contacte», no «fes clic ací». El seu text explica la destinació fins i tot fora de context.

!!! warning "Prova local dels enllaços"
    En este moment `contacte.html` encara no existix. No és un error del navegador: el crearàs en la pràctica. Un enllaç local usa una ruta relativa, és a dir, un nom de fitxer de la mateixa carpeta.

## Elements per a informació i interacció

### Imatges: text alternatiu segons el context

L'atribut `alt` oferix una alternativa textual si la imatge no es veu o si s'usa un lector de pantalla. Ha de comunicar la informació que aporta la imatge **en eixe context**; no cal començar amb «imatge de».

```html
<img src="cartell-taller.png" alt="Cartell blau amb el text Taller de gravat, dissabte 12 d'octubre">
```

Este és un exemple de sintaxi: `cartell-taller.png` ha de ser una imatge disponible en l'activitat on l'uses. No l'afegisques ara al catàleg, perquè no existeix en la teua carpeta. Si una imatge és purament decorativa i no aporta informació, usa `alt=""`; no escrigues un `alt` buit per a una imatge que sí que comunica dades.

### Taules: dades amb files i columnes

Una taula és adequada per comparar dades que tenen la mateixa estructura, com existències i preus. No l'uses per a distribuir visualment una pàgina.

```html
<table>
  <caption>Disponibilitat dels productes</caption>
  <thead>
    <tr>
      <th scope="col">Producte</th>
      <th scope="col">Estoc</th>
      <th scope="col">Preu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Quadern cosit</th>
      <td>12 unitats</td>
      <td>6,50 €</td>
    </tr>
    <tr>
      <th scope="row">Bloc de notes</th>
      <td>8 unitats</td>
      <td>4,20 €</td>
    </tr>
  </tbody>
</table>
```

`caption` explica de què tracta la taula. Cada `th` és una capçalera; `scope="col"` indica una columna i `scope="row"` una fila. Això permet relacionar una dada amb la seua capçalera.

### Formularis: cada control necessita un nom

Un **formulari** arreplega informació escrita o triada per la persona usuària. `label` és el text que anomena un control; el valor de `for` ha de coincidir exactament amb l'`id` del control.

```html
<form action="#" method="get">
  <p>
    <label for="nom">Nom</label>
    <input id="nom" name="nom" type="text" required>
  </p>
  <p>
    <label for="consulta">Consulta</label>
    <textarea id="consulta" name="consulta" required></textarea>
  </p>
  <button type="submit">Enviar consulta</button>
</form>
```

`required` indica que el camp és obligatori. `method="get"` permet observar els valors en una prova: amb `action="#"`, el navegador els afig a l'adreça de la mateixa pàgina i fa una petició a eixe recurs. En obrir el fitxer localment no hi ha cap servidor; si la pàgina està publicada, no hi ha cap *backend* configurat per tractar o guardar la consulta. Per això, **no escrigues dades reals**: podrien quedar a la barra d'adreces o a l'historial. El servidor i el tractament segur de dades arribaran en altres contextos.

## Accessibilitat: comprovacions abans que decoració

L'accessibilitat no és una capa final: són decisions de contingut i estructura des del principi.

| Comprovació | Com la fas ara | Què evita |
|---|---|---|
| Idioma i títol | Revisa `lang="ca"` i un `title` específic. | Pronunciació inadequada i pestanyes indistinguibles. |
| Jerarquia | Recorre els `h1`, `h2` i `h3` com un índex. | Apartats sense relació clara. |
| Regions | Localitza `header`, `nav`, `main` i `footer`. | Una pàgina sense orientació estructural. |
| Enllaços i controls | Llig-ne el text sense el paràgraf del voltant. | «Ací» o camps sense nom. |
| Teclat | Prem `Tab` repetidament i després `Shift` + `Tab`. | Elements que no reben focus o un ordre il·lògic. |
| Informació | Escriu paraules com «obert» o «esgotat», no només un color. | Missatges que depenen exclusivament del color. |

El **focus** és l'indicador del control que rebrà la pròxima acció del teclat. Amb `Tab`, l'ordre ha de seguir la lectura: enllaç de salt, enllaços de navegació, contingut i controls del formulari. No elimines l'indicador de focus del navegador.

### Diagnòstic d'errors habituals

| Símptoma | Causa probable | Primera acció |
|---|---|---|
| El navegador mostra un enllaç que no obri res. | El fitxer de `href` no existix o té un nom diferent. | Compara el nom complet, incloses majúscules, accents i extensió. |
| Un títol pareix correcte però la jerarquia falla. | S'ha triat l'etiqueta per la mida visual. | Escriu els encapçalaments com un índex i corregix el nivell. |
| En prémer `Tab` no saps on estàs. | No has observat el focus o s'ha modificat indegudament. | Prova en un navegador sense CSS propi i comprova l'ordre. |
| El formulari permet enviar sense un camp obligatori. | Falta `required` en eixe control. | Revisa que el control tinga l'atribut `required`. |
| En clicar l'etiqueta, el control no rep el focus. | `label for` no coincidix amb l'`id` del control. | Revisa cada parella `for`–`id` caràcter a caràcter. |
| La taula resulta confusa en llegir-la. | S'han usat `td` on calia una capçalera. | Afig `caption`, `th` i el `scope` adequat. |

## Pràctica graduada

### 1. Completa els enllaços del catàleg

**Objectiu:** crear dues pàgines locals que es puguen recórrer entre elles.

**Punt de partida:** el `index.html` de l'exemple guiat dins d'una carpeta nova, per exemple `unitat-1`.

1. Crea `contacte.html` en la mateixa carpeta.
2. Copia l'estructura bàsica del document: `doctype`, `html`, `head`, `body`, enllaç de salt, `header`, `nav`, `main` i `footer`.
3. Canvia el `title` i l'`h1` perquè identifiquen la pàgina de contacte.
4. En `main`, incorpora el formulari anterior amb una introducció breu. Mantín `action="#"` i `method="get"`; prova'l només amb dades fictícies.
5. Comprova que des de cada pàgina pots arribar a l'altra i tornar.


**Criteris d'èxit:**

- [ ] Els dos fitxers estan en la mateixa carpeta i els `href` usen els seus noms reals.
- [ ] Cada pàgina té un `title` i un únic `h1` que corresponen al seu contingut.
- [ ] El formulari té `label`, `for`, `id`, `name`, `required` i un botó amb text clar.
- [ ] No he escrit dades reals en el formulari de prova.
- [ ] Amb `Tab` pots arribar als enllaços i als controls en un ordre comprensible.

### 2. Afig dades estructurades

**Objectiu:** representar les dades del catàleg sense usar una taula com a recurs de maquetació.

**Punt de partida:** el teu `index.html` amb dos productes.

1. Després de les fitxes, crea una `section` titulada «Disponibilitat» amb un `h2`.
2. Incorpora la taula de l'exemple i adapta les dades als dos productes.
3. Verifica que el text de `caption` explica el conjunt de dades i que les capçaleres tenen `scope`.

**Resultat observable:** una taula amb dos files de producte, tres columnes i capçaleres identificables.

**Criteris d'èxit:**

- [ ] La taula té `caption`, `thead`, `tbody`, `th` i `td`.
- [ ] Les columnes indiquen producte, estoc i preu.
- [ ] No has usat una taula per col·locar el menú o els articles a la pantalla.

### 3. Revisa abans de validar

**Objectiu:** detectar primer problemes que afecten el model i la navegació.

**Punt de partida:** les dues pàgines de les pràctiques anteriors.

1. Guarda els canvis i recarrega les dues pàgines.
2. Prova tots els enllaços i recorre cada pàgina amb `Tab` i `Shift` + `Tab`.
3. Revisa idioma, `title`, un sol `h1`, ordre dels encapçalaments, regions, enllaços, taula i formulari.
4. Si tens connexió, obri el [W3C Nu Html Checker](https://validator.w3.org/nu/), tria l'opció de pujar un fitxer o enganxar codi i revisa cada missatge. Si no tens connexió, deixa anotat que has fet la revisió manual.

!!! tip "El validador orienta; no pensa per tu"
    Un document pot no tindre errors de sintaxi i, tanmateix, tindre un títol poc clar o un ordre de focus deficient. Corregix primer els errors de model, els enllaços i el teclat; després interpreta els avisos del validador.

**Resultat observable:** una llista curta de comprovacions fetes i les correccions que has aplicat.

## Minirepte: Fitxa de taller

**Objectiu:** publicar una informació professional fictícia en un minilloc de dues pàgines que es puga entendre sense dependre de la presentació visual.

**Punt de partida:** una carpeta amb `index.html` i `contacte.html`. No uses dades personals, imatges externes ni recursos que no estiguen disponibles localment.

Crea la fitxa d'un taller fictici —per exemple, reparació de bicicletes, impressió 3D o enquadernació— amb:

1. una portada `index.html` amb presentació, navegació, almenys dos `article` de servei o producte i una taula de disponibilitat o tarifes;
2. una pàgina `contacte.html` amb la mateixa navegació i un formulari de consulta de prova, omplit només amb dades fictícies;
3. un enllaç de salt, idioma, títols específics, jerarquia `h1`–`h3` coherent i regions semàntiques;
4. dades completament fictícies i un text que no depenga només del color per comunicar l'estat.

**Resultat observable:** una altra persona pot obrir `index.html`, arribar a la segona pàgina, tornar i entendre l'estructura amb el teclat.

**Llista de verificació:**

- [ ] He creat exactament dos fitxers: `index.html` i `contacte.html`.
- [ ] Els enllaços locals funcionen en obrir els fitxers des de la carpeta.
- [ ] Cada document declara `lang="ca"`, `charset="UTF-8"`, `viewport` i un `title` específic.
- [ ] Hi ha un sol `h1` per pàgina i cada encapçalament té el nivell que correspon a la seua subordinació.
- [ ] He usat `header`, `nav`, `main` i `footer`; cada servei o producte és un `article` dins d'una `section` amb títol.
- [ ] La taula té `caption`, capçaleres i `scope`; el formulari té etiquetes associades.
- [ ] He provat `Tab` i `Shift` + `Tab`, i el focus recorre controls útils en ordre de lectura.
- [ ] No he usat «fes clic ací», ni només color per informar, ni cap imatge o enllaç que no es puga provar.

Este minirepte prepara l'estructura del [Repte 1: Aparador web accessible](../reptes/index.md#repte-1-aparador-web-accessible). En la unitat següent hi afegiràs CSS, però no canvies ara la semàntica per resoldre una decisió visual.

## Autoavaluació

Intenta respondre abans de desplegar cada solució.

1. Per què no convé triar `h3` només perquè es veu més menut que `h2`?

    ??? success "Solució"
        Perquè els encapçalaments indiquen jerarquia, no mida. Després d'un `h1` s'usa un `h2` per a un apartat principal; CSS podrà modificar l'aparença més avant.

2. Quina diferència funcional hi ha entre `main` i `section`?

    ??? success "Solució"
        `main` conté el contingut principal i únic de la pàgina. `section` delimita un apartat temàtic dins del contingut, habitualment amb un encapçalament.

3. Quin text d'enllaç és més útil: «fes clic ací» o «Consulta les tarifes del taller»? Per què?

    ??? success "Solució"
        «Consulta les tarifes del taller», perquè explica la destinació fins i tot si es llig sense el text que l'envolta.

4. En un formulari, `label for="correu"` i `input id="email"` estan associats?

    ??? success "Solució"
        No. Els valors de `for` i `id` han de ser exactament iguals. Per exemple, `for="correu"` amb `id="correu"`.

5. Per què el formulari amb `action="#"` no envia una consulta real?

    ??? success "Solució"
        Perquè `#` apunta a la mateixa pàgina i no hi ha cap servidor que reba, guarde o gestione les dades. Amb `method="get"`, el navegador posa els valors a l'adreça; per això la prova s'ha de fer amb dades fictícies.

6. Quin problema pot detectar la prova amb `Tab` que un validador no resol per si mateix?

    ??? success "Solució"
        Permet comprovar si el focus arriba als elements útils i si l'ordre és comprensible. Un validador revisa regles del codi, però no decidix si l'experiència de navegació és lògica.

7. Un cartell d'un taller mostra la data, l'horari i l'adreça, però eixes dades no apareixen enlloc més. Quin `alt` necessita? I si al costat hi ha una línia decorativa que no aporta informació?

    ??? success "Solució"
        El cartell necessita un `alt` que comunique les dades útils en el context, per exemple `alt="Taller de gravat: dissabte 12 d'octubre, de 10 a 13 h, aula 2"`. La línia decorativa usa `alt=""` perquè no aporta cap informació.

## Resum operatiu i recursos

**Organitza el contingut → marca la funció amb HTML → prova amb teclat → corregeix → valida si és possible.**

- La semàntica descriu què és cada part; CSS decidirà com es veu.
- Un document accessible declara l'idioma, té un títol específic, una jerarquia d'encapçalaments i regions clares.
- Els enllaços han de descriure la destinació; les taules necessiten capçaleres; els controls de formulari necessiten `label`.
- El primer recurs d'accessibilitat és l'HTML natiu correcte. El validador complementa, però no substituïx, la revisió de contingut i teclat.

### Recursos per continuar

- [MDN: HTML semàntic, en castellà](https://developer.mozilla.org/es/docs/Glossary/Semantics#sem%C3%A1ntica_en_html): definicions i exemples breus.
- [MDN: accessibilitat HTML, en castellà](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Accessibility/HTML): ampliació sobre estructura, textos alternatius i formularis.
- [W3C Nu Html Checker](https://validator.w3.org/nu/): validador opcional en línia per comprovar documents HTML.
- [Unitat 2: CSS i presentació](02-css.md): pròxim pas per separar estructura i disseny.
