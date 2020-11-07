// Importovani modulu se provadi klicovym slovem require
// musime zadat spravnou cestu k souboru 
const matematika = require("./mujModul");

console.log(matematika.pi);
console.log(matematika.scitani(4,5));

// muzeme importovat z vice souboru
// promena nemusi byt const
// vzdy musime mit spravnou cestu
let matematika2 = require("./spec-moduly/mujModul2");

// tecka . v ceste znamena aktualni slozka

console.log(matematika2.pi);
console.log(matematika2.scitani(4,5));