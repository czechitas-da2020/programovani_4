// STREDNE TEZKE UKOLY

/**
 * Napis funkci, ktera zkontroluje ze vsechny prvky v poli jsou vetsi jako 100.
 * Pouzij: array.every (kazdy prvek musi splnit podminku)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

function jsouVetsi(pole){

}


let pole1 = [4,5,150,64,125];
console.log(jsouVetsi(pole1)); // false

let pole2 = [400,100,150,640,125];
console.log(jsouVetsi(pole2)); // true


/**
 * Napis funkci, ktera zkontroluje ze vsechny prvky v poli jsou cisla
 * Pouzij array.every a v podmince pouzij typeof https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */

 function jsouCisla(pole){

 }

 
let poleCisla = [4,5,150,64,125];
console.log(jsouCisla(poleCisla)); // true

let poleMixed = [400,100,"150",640,false];
console.log(jsouCisla(poleMixed)); // false


/**
 * Napis funkci, ktera zkontrolulje ze alepson JEDEN element v poli je zaporny
 * Pouzij funkci array.some()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */

 function maZaporny(pole){

 }


 console.log(maZaporny([7,5,6,9,7])); // false
 console.log(maZaporny([7,5,-6,9,7])); // true
 console.log(maZaporny([7,5,-6,9,-7])); // true

 /**
  * Napis funkci, ktera prevede vsechna cisla v poli na jejich zaporne hodnoty
  * Pouzij funkci array.map()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */

function prevod(pole){

}

console.log(prevod([4,5,-6,8,9])); // [-4,-5,-6,-8,-9]


 /**
  * Napis funkci, ktera prevede vsechna cisla v poli na jejich zaporne NEBO kladne hodnoty na zaklade prepinace
  * Pouzij funkci array.map()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */

function prevod(pole, znamenko){

}

console.log(prevod([4,5,-6,8,9], "+")); // [4,5,6,8,9]
console.log(prevod([4,5,-6,8,9], "-")); // [-4,-5,-6,-8,-9]




/**
 * Napis funkci, ktera ti vrati pouze prvni dva elementy v poli
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

function prvniElementy(pole){

}

console.log(prvniElementy([7,8,9,5,4])); // [7,8]


/**
 * Napis funkci, ktera ti vrati pouze prvnich x elementu v poli
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

function xElementu(pole, x){

}

console.log(xElementu([7,8,9,5,4], 3)); // [7,8,9]



/**
 * Napis funkci, ktera ti vrati presne polovinu pole
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

function polovina(pole){

}

console.log(polovina([7,8,9,5,4])); // [7,8]
console.log(polovina([7,8,9,5,4,9])); // [7, 8, 9]

/**
 * Napis funkci, ktera rozdeli pole na 2 casti, a vrati ti tyto dve pole v poli [[],[]]
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

 function poleVPoli(pole){

 }

 console.log(poleVPoli([7,8,9,5,4])); // [[7,8],[9,5,4]]
 console.log(poleVPoli([7,8,9,5,4,9])); // [[7,8,9],[5,4,9]]

