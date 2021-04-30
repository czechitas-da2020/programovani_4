/**
 * Ukol 3 C:
 * Pouzij funkci .filter a nechej pouze cisla mensi jak 6
 * Napoveda podivej se do examples-new\array-functions.js
 */


let pole = [7,9,5,4,20];


pole.filter((prvekVpoli) => {
    if(prvekVpoli < 6){
        return true;
    } else {
        return false;
    }
})

console.log(pole)