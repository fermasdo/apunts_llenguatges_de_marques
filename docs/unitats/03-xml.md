# 3. XML i espais de noms

En esta unitat, de **quatre setmanes orientatives**, crearàs un document XML per a intercanviar el catàleg fictici d'una botiga amb una altra aplicació. XML separa les dades de la manera de mostrar-les i permet descriure-les amb un vocabulari explícit. Esta és una proposta metodològica vinculada a l'[itinerari del curs](index.md), no una temporalització oficial.

<div class="grid cards" markdown>

-   **Punt de partida**

    ---

    Tens dades de productes que una aplicació ha de poder llegir sense conéixer la seua interfície web: nom, preu, disponibilitat i informació sobre el mateix document.

-   **Producció final**

    ---

    Crearàs un fitxer `cataleg.xml` ben format, amb dos productes d'un vocabulari propi i metadades Dublin Core identificades amb l'espai de noms `dc`.

</div>

## Propòsit i resultats observables

**XML** (*eXtensible Markup Language*) és un format de text per a representar dades estructurades. No fixa els noms de les etiquetes: cada domini pot definir el seu vocabulari. Esta flexibilitat és útil en un document interoperable, és a dir, un document que diferents persones o sistemes poden interpretar a partir d'un acord sobre les dades.

La unitat treballa el document interoperable i es relaciona, de manera orientativa, amb els **RA1 i RA4** indicats en l'itinerari. No establix criteris d'avaluació ni substituïx la programació oficial.

En acabar podràs:

- [ ] explicar les dades d'un catàleg com un arbre d'elements, atributs i text;
- [ ] crear un document XML amb declaració UTF-8, una única arrel i etiquetes correctament imbricades;
- [ ] detectar i corregir errors de bona formació a partir del missatge d'un editor o parser;
- [ ] decidir de forma raonada quina dada ha de ser un element, un atribut o text;
- [ ] escriure caràcters reservats amb entitats XML quan calga;
- [ ] declarar i usar un espai de noms propi i l'espai de noms de Dublin Core;
- [ ] explicar l'efecte d'un prefix, un espai de noms per defecte i l'abast d'una declaració `xmlns`;
- [ ] lliurar un catàleg de tres productes i un registre de proves de bona formació.

!!! note "Abast"
    Treballarem sintaxi XML, modelatge bàsic, bona formació i espais de noms. La unitat següent convertirà les regles del catàleg en una DTD o un XSD i farà **validació formal**. Ara comprovarem que el document és ben format, però no escriurem DTD, XSD ni esquemes.

## Activació: un catàleg que no depén d'una pantalla

Una botiga fictícia, **TecnoRiu**, vol enviar el seu catàleg a una aplicació d'inventari. La pàgina web anterior pot mostrar una fitxa bonica, però l'aplicació necessita dades amb significat, no colors ni columnes de pantalla.

Abans d'escriure etiquetes, pensa en estes preguntes:

1. Quin objecte conté tot l'enviament?
2. Quines dades es repetixen per cada producte?
3. El codi intern és contingut llegible o identifica un element concret?
4. Qui ha creat el document i en quin idioma està descrit?

Una possible resposta és un arbre: un `cataleg` conté les metadades del document i diversos `producte`; cada producte conté les seues dades. L'arbre descriu relacions, no la posició visual del contingut.

```text
cataleg
├── dc:title
├── dc:creator
├── dc:language
├── producte
│   ├── nom
│   ├── preu
│   └── disponible
└── producte
    ├── nom
    ├── preu
    └── disponible
```

L'element arrel `cataleg` té com a fills tres metadades Dublin Core i dos elements `producte`. Cada `producte` té els fills `nom`, `preu` i `disponible`.

## 1. L'arbre i la sintaxi XML

### Elements, atributs i text

Un **element** està delimitat per una etiqueta d'obertura i una de tancament. Pot contindre text, altres elements o les dos coses. Un **atribut** és una propietat escrita en l'etiqueta d'obertura, amb un valor entre cometes.

```xml
<producte codi="TR-101">
  <nom>Teclat compacte</nom>
  <preu moneda="EUR">39.90</preu>
  <disponible>sí</disponible>
</producte>
```

| Part | Exemple | Funció en esta dada |
|---|---|---|
| Element | `<producte>…</producte>` | Agrupa les dades d'un producte. |
| Atribut | `codi="TR-101"` | Identifica este producte dins del catàleg. |
| Text | `Teclat compacte` | Comunica el nom a una persona o programa. |
| Element amb atribut | `<preu moneda="EUR">39.90</preu>` | Expressa un valor i el context necessari per interpretar-lo. |

La sagnia fa visible la jerarquia, però el parser no la necessita. En canvi, sí que necessita que cada etiqueta tinga el tancament correcte i una imbricació correcta. L'orde que han de seguir les dades d'un producte és una decisió del model; només una DTD, un XSD o les regles d'una aplicació el poden imposar formalment.

### Declaració XML i UTF-8

Inicia el document amb esta declaració:

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

`UTF-8` és una codificació de caràcters que permet guardar correctament lletres com `à`, `ç` o `ñ`. Guarda el fitxer realment en UTF-8 des de l'editor; la declaració no transforma una codificació diferent.

Després de la declaració hi ha d'haver una única **arrel**, l'element que conté tots els altres. Per exemple, `cataleg` és l'arrel del nostre document.

### Bona formació: les regles mínimes

Un document XML és **ben format** quan respecta les regles sintàctiques d'XML. Un parser pot llegir l'estructura sense trobar ambigüitats. Entre altres regles, ha de tindre una sola arrel, etiquetes tancades, imbricació correcta i atributs amb valors entre cometes.

```xml
<cataleg>
  <producte>
    <nom>Ratolí vertical</nom>
  </producte>
</cataleg>
```

No pots tancar un element pare abans del fill. Esta seqüència, per exemple, **no** és XML ben format:

```xml
<producte><nom>Ratolí vertical</producte></nom>
```

!!! warning "Ben format no vol dir vàlid"
    La **bona formació** comprova la sintaxi: una arrel, etiquetes, cometes i imbricació. La **validesa** comprova si el document complix un contracte extern, com una DTD o un XSD: quins elements s'admeten, en quin orde o quin tipus de valor tenen. Un XML pot ser ben format i, tanmateix, no complir el contracte. Treballaràs eixe contracte en la [unitat 4](04-validacio-xml.md).

### Entitats per als caràcters reservats

En XML, els caràcters `<` i `&` tenen un significat sintàctic. Si formen part del text, usa una **entitat**, una seqüència que els representa sense confondre'ls amb una etiqueta o referència.

| Si vols escriure | Escriu en XML | Motiu |
|---|---|---|
| `Auriculars < 50 €` | `Auriculars &lt; 50 €` | `<` podria iniciar una etiqueta. |
| `Riu & Fills` | `Riu &amp; Fills` | `&` podria iniciar una entitat. |
| `L'oferta` dins d'un atribut amb cometes dobles | `L'oferta` | L'apòstrof no necessita entitat en eixe context. |
| `Oferta "especial"` dins d'un atribut amb cometes dobles | `Oferta &quot;especial&quot;` | `"` tancaria el valor de l'atribut. |

```xml
<descripcio>Auriculars &lt; 50 € de Riu &amp; Fills</descripcio>
```

## 2. Modelar un catàleg: decisions que expliquen les dades

XML et deixa inventar `nom`, `preu` o `producte`, però has de mantindre el mateix criteri en tot el document. Abans d'escriure, anota què representa cada dada i si pot repetir-se.

| Dada | Decisió | Per què |
|---|---|---|
| Catàleg complet | Element arrel `cataleg` | Agrupa l'enviament sencer. |
| Producte | Element `producte` repetible | Cada producte té diverses dades relacionades. |
| Codi intern | Atribut `codi` | És una identificació curta de l'element producte. |
| Nom | Element `nom` amb text | És contingut principal, llegible i potencialment ampliable. |
| Preu | Element `preu` amb text i atribut `moneda` | El valor i la moneda tenen papers diferents; la moneda dóna context al valor. |
| Disponibilitat | Element `disponible` | És una dada del producte que pot tindre una explicació o canviar de forma en el futur. |
| Títol, autoria i idioma del document | Elements Dublin Core | Són metadades sobre el recurs, no sobre un producte concret. |

!!! tip "No convertisques cada dada en atribut"
    Els atributs van bé per a identificadors o qualificadors curts. Els elements són més flexibles per a dades que poden créixer, repetir-se, tindre estructura pròpia o necessitar una descripció. No hi ha una regla mecànica: tria un criteri i aplica'l de manera consistent.

## 3. Espais de noms: vocabularis sense col·lisions

Dos sistemes poden usar el mateix nom d'element amb sentits diferents. Per exemple, `title` podria ser el títol d'un document en un vocabulari i el càrrec d'una persona en un altre. Un **espai de noms** (*namespace*) identifica el vocabulari al qual pertany un nom.

Un espai de noms usa un **URI** (*Uniform Resource Identifier*) com a identificador. Un URI no ha de ser necessàriament una adreça que descarrega un fitxer quan l'obris: ací la seua funció principal és ser un identificador únic i estable.

### Prefix, declaració i nom expandit

En el catàleg usarem dos vocabularis:

| Vocabulari | URI | Com l'escriurem |
|---|---|---|
| Catàleg propi de TecnoRiu | `https://tecnoriu.example/ns/cataleg` | Espai de noms per defecte. |
| Dublin Core Metadata Terms | `http://purl.org/dc/terms/` | Prefix `dc`, com `dc:title`. |

La declaració `xmlns` associa un prefix o el valor per defecte amb un URI:

```xml
<cataleg xmlns="https://tecnoriu.example/ns/cataleg"
          xmlns:dc="http://purl.org/dc/terms/">
  <dc:title>Catàleg de TecnoRiu</dc:title>
</cataleg>
```

`dc:title` és un **nom qualificat**: `dc` és el prefix, i `title` és el nom local. El prefix és una abreviació que podem canviar si manté el mateix URI. La identitat tècnica completa és el **nom expandit**: URI + nom local.

```text
dc:title
└─ prefix dc → http://purl.org/dc/terms/
              + title

Nom expandit: {http://purl.org/dc/terms/}title
```

Per tant, `dc:title` i `meta:title` poden identificar exactament el mateix element si els dos prefixos s'han declarat amb `http://purl.org/dc/terms/`. En canvi, dos elements escrits com `title` poden ser diferents si el seu espai de noms és diferent.

### Espai de noms per defecte i atributs

`xmlns="…"` declara l'**espai de noms per defecte**. S'aplica als elements sense prefix que estan dins del seu abast:

```xml
<cataleg xmlns="https://tecnoriu.example/ns/cataleg">
  <producte codi="TR-101">
    <nom>Teclat compacte</nom>
  </producte>
</cataleg>
```

Ací `cataleg`, `producte` i `nom` pertanyen a `https://tecnoriu.example/ns/cataleg`.

!!! warning "El namespace per defecte no s'aplica als atributs sense prefix"
    En l'exemple anterior, `codi` **no** pertany a `https://tecnoriu.example/ns/cataleg`: és un atribut sense espai de noms. Si necessitares que fora d'un vocabulari concret, hauries de declarar un prefix i usar-lo, per exemple `tr:codi="TR-101"`. No introduirem eixa distinció en el catàleg actual; només hem de saber interpretar-la correctament.

### Abast d'una declaració

Una declaració d'espai de noms s'aplica a l'element on apareix i a tots els descendents, llevat que una declaració interior la redefinisca. Declara els espais de noms a l'arrel quan tot el document els necessita: així evites repeticions i és més fàcil llegir-lo.

```xml
<cataleg xmlns="https://tecnoriu.example/ns/cataleg"
          xmlns:dc="http://purl.org/dc/terms/">
  <dc:title>Catàleg de TecnoRiu</dc:title>
  <producte codi="TR-101">
    <nom>Teclat compacte</nom>
  </producte>
</cataleg>
```

En este cas, `dc` es pot usar en `dc:title` perquè la declaració de l'arrel està dins del seu abast. Un prefix no declarat produïx un error de bona formació.

## 4. Exemple guiat: el primer `cataleg.xml`

Crea una carpeta de treball i un fitxer anomenat `cataleg.xml`. Seguix estes decisions abans de copiar el document complet:

1. La declaració indica XML 1.0 i UTF-8.
2. `cataleg` és l'única arrel i declara els dos espais de noms.
3. Les metadades `dc` descriuen el document sencer; per això són filles de `cataleg`.
4. Cada `producte` usa el mateix model: `codi`, `nom`, `preu` i `disponible`.
5. `preu` guarda el número com a text i aporta la moneda amb l'atribut `moneda`.

```xml title="cataleg.xml"
<?xml version="1.0" encoding="UTF-8"?>
<cataleg xmlns="https://tecnoriu.example/ns/cataleg"
          xmlns:dc="http://purl.org/dc/terms/">
  <dc:title>Catàleg de TecnoRiu</dc:title>
  <dc:creator>TecnoRiu</dc:creator>
  <dc:language>ca</dc:language>
  <producte codi="TR-101">
    <nom>Teclat compacte</nom>
    <preu moneda="EUR">39.90</preu>
    <disponible>sí</disponible>
  </producte>
  <producte codi="TR-205">
    <nom>Ratolí vertical</nom>
    <preu moneda="EUR">29.50</preu>
    <disponible>no</disponible>
  </producte>
</cataleg>
```

Per comprovar-lo, usa una comprovació reproduïble. Si tens Python 3 instal·lat, des de la carpeta que conté el fitxer executa:

```console
python3 -c 'import xml.etree.ElementTree as ET; ET.parse("cataleg.xml"); print("XML ben format")'
```

Si el document és ben format, veuràs `XML ben format`. Si no ho és, Python mostrarà una excepció amb una línia i una columna aproximades. També pots usar la comprovació XML configurada en l'editor del centre, però anota l'eina i el resultat. No deduïsques que és correcte només perquè té colors o s'obri en un navegador.

| Comprovació | Resultat que has d'observar |
|---|---|
| Arrel | Només hi ha un `cataleg` exterior. |
| Tancaments | Cada `producte`, `preu` i metadada acaba abans que acabe el seu pare. |
| Identificadors | `TR-101` i `TR-205` no es repetixen. |
| Vocabularis | `dc:title`, `dc:creator` i `dc:language` usen el prefix declarat `dc`. |
| Atributs | `codi` i `moneda` tenen valors entre cometes. |
| Caràcters | `à` i `í` es conserven en guardar i tornar a obrir el fitxer UTF-8. |

## Diagnòstic: quan el parser diu que no

Línia i columna són pistes, no una sentència: l'error visible pot estar una línia abans. Revisa primer l'element que obri prop del punt indicat i els seus possibles tancaments.

| Símptoma o missatge aproximat | Causa freqüent | Estratègia de diagnòstic i correcció |
|---|---|---|
| `mismatched tag` | Les etiquetes es tanquen en orde incorrecte. | Localitza l'última etiqueta oberta i tanca-la abans del seu pare. Indenta el bloc. |
| `Premature end of data` | Falta una etiqueta de tancament o el fitxer acaba abans d'hora. | Comença per l'últim element obert i compara obertures i tancaments. |
| `Extra content at the end of the document` | Hi ha dos arrels, com `</cataleg><nota>`. | Deixa una única arrel que continga qualsevol dada addicional. |
| `EntityRef: expecting ';'` | Hi ha un `&` de text sense `&amp;`. | Substituïx el caràcter per `&amp;`; no alteres una entitat que ja acaba en `;`. |
| `Attribute ... not closed` | Falta una cometa en un atribut. | Revisa l'etiqueta d'obertura i usa sempre cometes dobles de parella. |
| `Namespace prefix dc ... is not defined` | S'usa `dc:` sense declarar `xmlns:dc`, o fora del seu abast. | Declara `xmlns:dc="http://purl.org/dc/terms/"` a l'arrel. |
| Les lletres accentuades es veuen malament | El fitxer no s'ha guardat realment en UTF-8. | Canvia la codificació de l'editor a UTF-8, guarda i torna a validar. |

!!! tip "Canvia una cosa i torna a provar"
    Quan depures, fes una correcció menuda i repetix la comprovació. Si reescrius tot el fitxer alhora, pots ocultar la causa inicial o introduir-ne una altra.

## Pràctica graduada

### 1. De dades planes a arbre XML

**Objectiu:** distingir contenidors, dades repetibles i text.

**Punt de partida:** disposes de dos productes: `TR-310`, Base refrigeradora, 24.90 EUR, disponible; i `TR-415`, Cable USB-C & USB-A, 8.50 EUR, disponible.

1. Dibuixa en paper o en un fitxer de text l'arrel, els dos productes i les dades filles.
2. Escriu un XML amb una única arrel, dos `producte`, i els elements `nom`, `preu` i `disponible`.
3. Usa `codi` com a atribut i `moneda="EUR"` en cada preu.
4. Escriu correctament l'ampersand del segon nom.

**Resultat observable:** el parser accepta el fitxer i el text del segon producte mostra `Cable USB-C & USB-A` quan es llig com a dada.

**Criteris d'èxit:**

- [ ] Els dos `producte` són fills de la mateixa arrel.
- [ ] No hi ha etiquetes mal imbricades ni atributs sense cometes.
- [ ] L'ampersand s'ha escrit com `&amp;` dins de l'XML.

### 2. Metadades amb Dublin Core

**Objectiu:** incorporar un vocabulari extern sense confondre'l amb el propi.

**Punt de partida:** el teu XML de la pràctica 1 és ben format.

1. Declara `xmlns:dc="http://purl.org/dc/terms/"` a l'arrel.
2. Afig, abans dels productes, `dc:title`, `dc:creator` i `dc:language`.
3. Escriu valors ficticis, en valencià, per a les tres metadades.
4. Torna a comprovar la bona formació.

**Resultat observable:** el parser no informa d'un prefix no declarat, les tres metadades comencen per `dc:` i la declaració és exactament `xmlns:dc="http://purl.org/dc/terms/"`.

**Criteris d'èxit:**

- [ ] La declaració és exactament `xmlns:dc="http://purl.org/dc/terms/"`; he comparat l'URI amb la taula de la unitat.
- [ ] Les metadades són filles de `cataleg`, no d'un producte.
- [ ] Has mantingut els dos vocabularis diferenciats.

### 3. Prova d'errors controlats

**Objectiu:** interpretar un error de bona formació en lloc d'endevinar.

**Punt de partida:** conserva una còpia que el parser accepte, per exemple `cataleg-correcte.xml`.

1. Crea `proves-bona-formacio.txt`.
2. Fes una còpia del catàleg i introduïx un error d'imbricació.
3. Executa la comprovació, anota el missatge i corregix només eixe error.
4. Repetix el procés amb un `&` sense escapar i amb `dc:subject` sense la declaració `xmlns:dc`.

**Resultat observable:** el registre té tres entrades amb «error provocat», «missatge o símptoma» i «correcció aplicada».

**Criteris d'èxit:**

- [ ] No has modificat la còpia correcta.
- [ ] Relaciona cada missatge amb una regla concreta: imbricació, entitat o prefix declarat.
- [ ] Cada còpia corregida torna a ser ben formada.

## Minirepte: catàleg interoperable de tres productes

**Objectiu:** preparar un catàleg XML coherent perquè un altre sistema puga interpretar les dades i les metadades del document.

**Punt de partida:** el model i les comprovacions de les pràctiques anteriors.

**Fitxers esperats:**

```text
cataleg.xml
proves-bona-formacio.txt
```

En `cataleg.xml`, crea un catàleg fictici de **tres productes** amb estes condicions:

1. declaració XML amb `encoding="UTF-8"` i una única arrel;
2. espai de noms per defecte per al vocabulari propi, amb un URI sota `https://` que inventes per al teu projecte;
3. declaració de `dc` amb l'URI `http://purl.org/dc/terms/`;
4. les metadades `dc:title`, `dc:creator` i `dc:language` com a filles de l'arrel;
5. tres elements `producte` amb un `codi` diferent, `nom`, `preu` amb `moneda="EUR"` i `disponible`;
6. almenys un nom que exigisca usar `&amp;` o `&lt;`;
7. sagnia que permeta identificar visualment cada pare i els seus fills.

En `proves-bona-formacio.txt`, descriu almenys estes proves: l'eina emprada, una comprovació satisfactòria del document final i dos errors provocats i corregits.

**Criteris d'èxit:**

- [ ] Un parser o editor XML accepta `cataleg.xml` com a ben format.
- [ ] Hi ha exactament tres productes i cap codi es repetix.
- [ ] El vocabulari propi i Dublin Core no es barregen: els elements `dc:` tenen el prefix declarat.
- [ ] Pots explicar que l'espai de noms per defecte afecta `producte`, però no l'atribut sense prefix `codi`.
- [ ] El registre de proves permet a una altra persona entendre què has comprovat.

!!! note "Preparació per a la unitat 4"
    En el minirepte has triat un model coherent, però encara no hi ha cap contracte que obligue un document a tindre tres productes, un preu numèric o una moneda concreta. En la unitat 4 expressaràs algunes d'estes regles amb DTD i XSD, i diferenciaràs mostres vàlides i invàlides.

## Autoavaluació

Intenta respondre abans de desplegar cada solució.

1. Quina és la diferència entre un element, un atribut i text en `<preu moneda="EUR">39.90</preu>`?

    ??? success "Solució"
        `preu` és l'element que representa la dada completa. `moneda` és l'atribut que la qualifica amb `EUR`. `39.90` és el text que conté el valor del preu.

2. Per què un document XML ha de tindre una única arrel?

    ??? success "Solució"
        Perquè l'arrel és el punt únic d'entrada de l'arbre XML i ha de contindre tota l'estructura del document. Dos elements al mateix nivell exterior no formen un únic arbre XML.

3. Com escrius `Riu & Fills` dins del text d'un element?

    ??? success "Solució"
        `Riu &amp; Fills`. L'ampersand inicia referències d'entitat en XML, per això no es pot escriure directament com a text.

4. Un XML amb totes les etiquetes tancades és necessàriament vàlid?

    ??? success "Solució"
        No. Pot ser ben format perquè respecta la sintaxi, però la validesa exigix a més que complisca les regles d'una DTD o un XSD. Encara no hem definit eixe contracte.

5. Quin és el nom expandit de `dc:title` si `dc` correspon a `http://purl.org/dc/terms/`?

    ??? success "Solució"
        `{http://purl.org/dc/terms/}title`. El prefix és una abreviació llegible; l'URI i el nom local identifiquen el nom complet.

6. Si `xmlns="https://exemple.test/ns"` està a l'arrel, `codi` en `<producte codi="TR-101">` és dins d'eixe espai de noms?

    ??? success "Solució"
        No. L'espai de noms per defecte s'aplica als elements sense prefix, no als atributs sense prefix. `producte` sí que està en eixe espai de noms; `codi`, no.

7. On declararies `xmlns:dc` si totes les metadades del document usen Dublin Core?

    ??? success "Solució"
        A l'element arrel. Així la declaració queda dins de l'abast de totes les metadades descendents i no cal repetir-la.

## Resum operatiu i recursos

**Modela l'arbre → escriu XML UTF-8 ben format → identifica els vocabularis amb espais de noms → comprova amb un parser → registra i corregix els errors.**

- XML descriu dades jeràrquiques amb elements, atributs i text; la sagnia ajuda a llegir-ne l'arbre.
- La bona formació comprova la sintaxi; la validesa comprovarà després un contracte DTD o XSD.
- Els caràcters reservats, com `&` i `<`, necessiten les entitats `&amp;` i `&lt;` quan són text.
- Un URI identifica un vocabulari. El prefix només és una abreviació, i el nom expandit en conserva la identitat.
- `xmlns` per defecte s'aplica als elements sense prefix dins del seu abast, **no** als atributs sense prefix.

### Recursos per continuar

- [W3C: Extensible Markup Language (XML) 1.0](https://www.w3.org/TR/xml/): especificació de referència sobre sintaxi, bona formació i entitats.
- [W3C: Namespaces in XML 1.0](https://www.w3.org/TR/xml-names/): definició d'espais de noms, prefixos, abast i atributs.
- [MDN: XML introduction](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction): introducció pràctica a l'estructura XML.
- [Dublin Core Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/): vocabulari de les metadades `dc` usades en l'exemple.
- [Unitat 4: Validació XML](04-validacio-xml.md): pas següent per expressar el contracte del catàleg amb DTD i XSD.
