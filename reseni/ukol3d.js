/**
 * Pomoci cyklu while vypisuj cisla z pole dokud nenarazis na cislo 7
 */

let pole = [1,4,7,2,9,7,2];

let pokracujeme = true;
let index = 0;

while(pokracujeme){
    console.log(pole[index]);
    index = index + 1;
    if(pole[index] == 7){
        pokracujeme = false;
    }
}

/**
 * Dokazes prepsat predchozi while cyklus bez promene pokracujeme?
 */

// je potreba vyresetovat index
index = 0;

while(pole[index] != 7){
    console.log(pole[index]);
    index = index + 1;
}

