/**
 * Ukol 2 importuj modul hrusky, ktery je v souboru plody/ovoce/hrusky.js a vypis na konzoli pocet hrusek.
 */

 let hrusky = require("./plody/ovoce/hrusky");

 console.log(hrusky.pocetHrusek)


 /**
  * BONUS:
  * Importuj soubor mujModul.js ktery je ve slozce moduly a vypis konstatu pi
  * Napoveda: Musis se vratit ve slozkach o uroven vyse pomoci ../ , muzeme mit nekolik za sebou ../../../../../..
  */


 let matika = require("../../moduly/mujModul");

 console.log(matika.pi);