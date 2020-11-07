
// Muzu si vytvorit promenou pi
let pi = 3.14;

// Jak jsme si ukazovali, funkci muzeme ulozit do promene
let scitani = (a,b) => {
    return a + b;
}


// A nebo muzeme vytvorit obejkt ktery chceme exportovat primo takto:
module.exports = {
    pi: pi, 
    scitani: scitani
}