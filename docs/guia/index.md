# Guia del mòdul

Esta guia explica com usar els apunts i com documentar el treball. No substituïx la informació oficial del centre ni una programació didàctica verificada.

## Recorregut recomanat

1. Llig el propòsit i els coneixements previs de cada unitat.
2. Reproduïx els exemples mínims.
3. Canvia una sola cosa i observa'n l'efecte.
4. Completa les activitats de comprovació.
5. Aplica el que has aprés en un [repte](../reptes/index.md).
6. Usa l'espai de [consulta](../consulta/index.md) quan necessites recordar sintaxi o vocabulari.

Els objectius de les unitats són metes observables creades per organitzar l'aprenentatge. No es presenten com a resultats d'aprenentatge o criteris oficials.

## Ritme semipresencial

Cada bloc de treball seguirà, sempre que el calendari ho permeta, este patró:

1. **Abans de la sessió:** lectura curta i comprovació inicial.
2. **Sessió guiada:** exemple, decisions tècniques i resolució dels primers errors.
3. **Treball autònom:** exercicis graduats amb un resultat observable.
4. **Comprovació:** validador, prova o llista de control indicada en l'enunciat.
5. **Tancament:** lliurament breu, autoavaluació i registre de dubtes.

Els enunciats especificaran què cal crear, quins fitxers es proporcionen, com es comprova el resultat i què s'ha de lliurar. Així es reduïxen les dependències d'una resposta immediata del professorat.

## Com demanar ajuda tècnica

Una consulta útil permet reproduir el problema. Inclou:

- **objectiu:** què intentaves aconseguir;
- **context:** fitxer, eina i ordre exacta;
- **resultat esperat:** què havia de passar;
- **resultat obtingut:** primer missatge d'error complet, sense captures retallades;
- **intents:** canvis que ja has provat, d'un en un.

```text title="Plantilla de consulta"
Objectiu: validar catalog.xml amb catalog.xsd.
Ordre: xmllint --noout --schema catalog.xsd catalog.xml
Esperava: missatge de validació correcta.
He obtingut: catalog.xml:8: element price: Schemas validity error.
He provat: revisar el valor de price i executar de nou l'ordre.
```

Abans d'enviar-la, elimina noms personals, tokens, contrasenyes, rutes privades i dades reals. Copia text quan siga possible: es pot buscar, llegir amb tecnologies de suport i reutilitzar en una prova.

## Continguts actualitzables

La web és un material viu, però **actualitzable** no significa canviant sense control:

1. cada explicació té una única font en `docs/`;
2. els exemples complets es guardaran amb la unitat o en `docs/exemples/` quan es desenvolupen;
3. una correcció ha de mantindre coherents explicació, entrada, ordre i eixida;
4. les decisions dependents d'una versió han d'indicar l'eina o l'estàndard consultat;
5. si una font oficial canvia, es revisa el contingut afectat en lloc d'afegir una còpia paral·lela.

Prioritzem estàndards i documentació primària. Una entrada de blog pot ajudar a entendre, però no substituïx l'especificació quan cal confirmar sintaxi o interoperabilitat.

!!! info "Com comunicar una correcció"
    Indica pàgina i secció, descriu el problema, aporta una prova mínima i enllaça la font quan la correcció depenga d'un estàndard. No cal reescriure tota la unitat.

## Informació institucional pendent

- [ ] Presentació i calendari del mòdul.
- [ ] Eines i procediment de lliurament acordats pel centre.
- [ ] Criteris d'avaluació contrastats amb la programació i la normativa aplicable.
- [ ] Normes de treball i canals de comunicació.

!!! warning "Pendent de verificació"
    Esta pàgina no atribuïx resultats d'aprenentatge, percentatges, terminis ni normes. Eixa informació només s'incorporarà quan estiga confirmada i diferenciada de les orientacions metodològiques.
