// Higher order funkce je funkce ktera prijima druhou funkci
// Prikladem muzou byt funkce, ktere pracuji nad polem
let pole = [8,7,6,1,5,2];

// funkce for each iteruje nad polem a prijima funkci, ktere preda
// jako prvni parametr prvek pole
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
pole.forEach((prvek) => {
    console.log(prvek);
});

let mojeFunkce = (prvek) => {
    console.log(prvek)
}

pole.forEach(mojeFunkce);


// Funkce filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Vrati nove POLE pouze s prvky ktere splni podminku
// Prijima funkci, ktera vraci TRUE/ FALSE na zaklade toho jestli prvek splnil podminku a nebo ne


let novePole = pole.filter((prvek) => {
    return prvek > 6
});

console.log(novePole)



