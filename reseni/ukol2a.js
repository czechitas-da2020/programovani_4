/**
 * Vypis na obrazovku druhy a posledni prvek v poli. Tj 9 a 6
 */

let pole = [7, 9, 5, 4, 6];

// druhy prvek
console.log("druhy" + pole[1]);

// posledni prvek
console.log("posledni" + pole[pole.length - 1])

/**
 * Uloz si druhy a posledni prvek v poli do promene a vypis jejich soucet, tj 9 + 6 = 15
 */

let druhy = pole[1];
let posledni = pole[pole.length - 1];

let soucet = druhy + posledni;
console.log(soucet);
// a nebo taky
console.log(pole[1] + pole[pole.length - 1])



/** 
 * Napis si funkci, ktera bude prijimat pole, a 2 indexy z pole. Funkce vrati soucet techto prvku.
 */

function mojeFunkce(pole, indexA, indexB) {
    let prvniPrvek = pole[indexA];
    let druhyPrvek = pole[indexB];

    return prvniPrvek + druhyPrvek;
}

let vysledek = mojeFunkce(pole, 0, 2);
console.log(vysledek); // 7+5 => 12


