/** KALKULACKA - VELMI VELMI TEZKE
 * Muzes pouzit kod z normalniho ukolu kalkulacka, uprav funkci kalkulacka tak, ze bude prijimat pole prvku.
 * Prvky v poli muzou byt operatory a nebo cisla;
 * kalkulacka([7,"+",9,"*",3])
 * kalkulacka([7,"+",9,"*",3,"-",1])
 * 
 * Vypocitej vysledek takovehoto zapisu. NEBER V POTAZ PREDNOST MATEMATICKYCH OPERACI
 * Tj nasobeni nema prednost pred + a - 
 * Muzes pocitat s tim, ze zadani bude VZDY korektni (nebudou dve cisla po sobe, na konci nebude chybet cislo atd)
 * 
 * Na konci souboru jsou napovedy
 */

 function kalkulacka(pole){

 }

let vysledek = kalkulacka([7,"+",9,"+",3]);
console.log(vysledek); // 19

vysledek = kalkulacka([7,"+",9,"*",3]);
console.log(vysledek); // 48




/**
 * Napovedy:
 * 1. pouzij for cyklus
 * 2. pouzij for cyklus pro iteraci polem
 * 3. iteruj zleva doprava
 * 4. vytvor si pomocnou promenou vysledek
 * 5. pro zacatek vyres pouze sekvenci se scitanim (neres ostatni znaky)
 * 5. vymysli si algoritmus v hlave / na papire! jak bys to resil
 * Napoveda: cyklus nemusi zacinat od 0
 * Napoveda: uvnitr tela cyklu muzeme upravovat index, napriklad k nemu pricitat 1 
 */

