/** UKOL 1C - KALKULACKA
 * Napis 4 funkce, ktere budou resit matematicke operace +,-,*,/
 * Napis funkci kalkulacka, ktera bude prijimat operator, a dve hodnoty.
 * Funkce kalkulacka na zaklade operatoru zavola prislusnou funkci a vrati vysledek.
 *   
 */

 function scitani(a, b){ // uprav zahlavi 
    return a + b;
 };

 function odecitani(a, b){ // uprav zahlavi 
    return a - b;
 };

 function nasobeni(a, b){ // uprav zahlavi 
    return a * b;
 };

 function deleni(a, b){ // uprav zahlavi 
    return a / b;
 };

 function kalkulacka(operator, x, y){
    if(operator == "+"){
       return scitani(x, y);
    }

    if(operator == "-"){
      return odecitani(x, y);
   }

   if(operator == "*"){
      return nasobeni(x, y);
   }

   if(operator == "/"){
      return deleni(x, y);
   }

   // pokud zadna podminka neprojde vracime null
   return null;
 };


let cislo1 = 4;
let cislo2 = 5;
let vysledek = kalkulacka("+", cislo1, cislo2);
console.log(vysledek); // 9




// Napoveda (NECTI POKUD NECHCES!): Vsechny funkce budou mit return, funkce kalkulacka muze mit 4x if


/**
 * BONUS UPRAVY:
 * Pokud jsi pouzil ve funkci kalkulacka nekolikrat return, prepis to tak, aby byl pouzit jen 1x.
 * Pokud jsi ve funkci kalkulacka pouzil jen 1x return, prepis to tak, aby byl pouzit nekolikrat.
 * Zkontroluj jestli mas osetreny takovyto vstup: kalkulacka("blbost",7 ,9), v tomto pripade kalukacka vrati
 * hodnotu null
 */