# Reptes

Un **repte** combina coneixements de diverses unitats per obtindre un resultat verificable. Els criteris següents descriuen qualitat tècnica del producte; no són criteris d'avaluació oficials ni impliquen percentatges de nota.

!!! tip "Abans de buscar ajuda"
    Conserva l'error, l'ordre executada i el resultat. Explica què esperaves, què ha passat i què has provat. Esta informació permet diagnosticar sense substituir el teu intent.

## Repte 1. Aparador web accessible

**Unitats:** 0, 1 i 2.

**Objectiu:** publicar un catàleg web semàntic i adaptable a partir d'un model d'informació explícit.

**Punt de partida:** una botiga necessita presentar almenys quatre productes amb identificador, nom, descripció, categoria, preu i disponibilitat. Pots reutilitzar l'empresa fictícia de les unitats o crear-ne una sense dades personals.

**Producte observable:**

1. arbre o taula del model de dades;
2. portada HTML i almenys una fitxa en una segona pàgina;
3. full CSS extern;
4. registre breu de proves.

**Criteris d'èxit:**

- HTML complet, idioma declarat, regions semàntiques i títols coherents;
- enllaços amb destinació existent i text comprensible;
- graella sense desplaçament horitzontal entre 320 px i 1280 px;
- focus visible, navegació amb teclat i text usable al 200 %;
- comprovació amb validador HTML o justificació si no hi ha connexió.

**Límit útil:** no uses frameworks CSS. El repte pretén fer visibles la cascada, Grid i les decisions d'accessibilitat.

## Repte 3. Catàleg interoperable

**Unitats:** 3, 4, 5 i 7.

**Objectiu:** modelar, validar i transformar un inventari; oferir-ne també una representació JSON coherent.

**Punt de partida:** sis dispositius amb identificador, categoria, fabricant, model, estat, data d'alta i persona o ubicació responsable no identificable.

**Producte observable:**

1. document XML ben format;
2. DTD de lectura o comparació i XSD per al contracte tipat;
3. una mostra invàlida creada expressament;
4. consultes XPath;
5. informe HTML generat amb XSLT;
6. representació JSON i esquema acordat;
7. fitxer de text amb ordres i resultats de prova.

**Criteris d'èxit:**

- identificadors únics i valors d'estat enumerats;
- dates comprovades com a dates, no només com a text;
- la mostra vàlida passa l'esquema i la invàlida falla per la causa documentada;
- l'informe mostra els elements demanats i no inclou registres aliens al filtre;
- les transformacions es poden regenerar sense editar l'eixida manualment.

## Repte 2. Canal de novetats

**Unitat:** 6, amb reutilització del projecte web.

**Objectiu:** distribuir actualitzacions d'un catàleg amb un feed interoperable.

**Punt de partida:** quatre novetats publicades en pàgines HTML. Si no hi ha servidor, usa `https://example.org/` com a domini reservat i explica que és una simulació.

**Producte observable:** feed RSS, enllaç al feed des de la portada i registre de validació.

**Criteris d'èxit:**

- canal amb títol, URL absoluta i descripció;
- quatre `item` amb `guid` únic i estable, data amb zona horària i resum;
- XML ben format verificat localment;
- comprovació amb un validador de feeds quan hi haja connexió;
- estratègia escrita per no duplicar entrades en actualitzacions futures.

## Repte 4. Integració de sistemes

**Unitats:** 8 i 9.

**Objectiu:** preparar una importació reproduïble entre un conjunt de documents i un sistema de gestió de laboratori.

**Punt de partida:** una instància local, contenidor o entorn de demostració d'un sistema de gestió triat i documentat.

**Producte observable:** configuració mínima del sistema, comptes amb permisos diferenciats, mapatge de camps, dades fictícies, importació, consulta o informe, extracció de resultats, registre d'incidències i pla breu de recuperació.

**Criteris d'èxit:**

- no s'usen dades personals reals;
- les transformacions de camps estan documentades;
- l'accés aplica els permisos mínims necessaris;
- els errors es poden detectar sense revisar manualment tots els registres;
- el procés es pot repetir o revertir en l'entorn de pràctiques.

## Lliurament revisable

Mantín noms de fitxer descriptius i rutes relatives. No inclogues dades personals, credencials ni contingut amb llicència incompatible. Una altra persona ha de poder obrir el projecte i repetir les comprovacions a partir de les instruccions entregades.
