// Definuji si prazdny objekt
let matematika = {};

// Muzu si vytvorit promenou pi
let pi = 3.14;

// Jak jsme si ukazovali, funkci muzeme ulozit do promene
let scitani = (a,b) => {
    return a + b;
}

// A jak jsm sei ukazovali drive, v objektu muzou byt promene, funkce, pole, proste naprosto cokoliv!

// Do objektu matematika vytvorim atribut pi a ulozim tam promenou pi
matematika.pi = pi;
// Do objektu matematika vytvorim atribut scitani a ullozim tam promenou scitani
matematika.scitani = scitani;

// Vyexportuji objekt matematika;
module.exports = matematika;