/**
 * 1d) Vypis na obrazovku prvni prvek pole1 a prvni prvek pole2
 * 
 * Porovnej prvni prvky pole a vypis na obrazovku bud:
 * "Prvni prvky jsou stejne!" a nebo "Prvni prvky nejsou stejne!"
 * 
 * Napoveda: podivej se do examples/pole.js
 * 
 */

let pole1 = [7,9,5,7,6]
let pole2 = [7,9,5,4,6]

// console.log(pole1[0])
// console.log(pole2[0])

// if(pole1[0] == pole2[0]){
//     console.log("Jsou stejne!")
// } else {
//     console.log("Nejsou stejne!");
// }



/**
 * 1dd)
 * Napis kod ktery zkontroluje ze jsou pole stejna za pouziti for cyklu.
 * Tedy: Napiseme si for cyklus ktery nam bude prochazet obe pole zaroven a budeme postupne
 * porovnavat kazdy prvek pole. Tedy prvek z pole1 a pole2 na stejnem indexu. 
 * 
 * Pokud potrebujes napovedu, podivej se do: examples/iterace-polem.js
 * 
 * Vysledek cheme vypsat az po skonceni for cyklu. Tedy az vsechno skonci vypis:
 * "Pole jsou stejne" nebo "pole nejsou stejne"
 * 
 */
let jsouStejne = true;
let nestejnyIndex;

 for(let i = 0; i <  pole1.length; i=i+1){    
    //console.log(pole1[i] + " | " + pole2[i]);
    if(pole1[i] == pole2[i]){
       jsouStejne = true;
    } else {
       jsouStejne = false;
       nestejnyIndex = i;
       break;
    }    
}

if(jsouStejne == true){
    console.log("Jsou stejne")
} else {
    console.log("Nejsou stejne " + nestejnyIndex)
}



/**
 * 1ddd)
 * Vylepsi predchozi kod, tak ze budeme ve vysledku znat i index, kde prvky nejsou stejne.
 * (BONUS: Vypis i prvky ktere nejsou stejne).
 * 
 * Vysledek:
 * "Pole jsou stejne"
 *  nebo
 * "Pole nejsou stejne na indexu 4"
 */




/**
 * 1dddd)
 * Presun svuj kod do funkce, ktera bude prijimat dve pole a bude cravet true nebo false, podle toho jestli jsou pole stejne nebo ne.
 */

function jsouPoleStejne (poleA, poleB){
    let jsouStejne
    for(let i = 0; i <  poleA.length; i=i+1){    
        //console.log(pole1[i] + " | " + pole2[i]);
        if(poleA[i] == poleB[i]){
           jsouStejne = true;
        } else {
           jsouStejne = false;         
           break;
        }    
    }

    return jsouStejne;    
}

function jsouPoleStejne (poleA, poleB){
    let jsouStejne;
    for(let i = 0; i <  poleA.length; i++){    
        if(poleA[i] == poleB[i]){
           jsouStejne = true;
        } else {
           jsouStejne = false;         
           return false;
        }    
    }

    return jsouStejne;    
}

let VysledekMojiFunkce = jsouPoleStejne(pole1, pole2)

if(VysledekMojiFunkce == true){
    console.log("jsou stejne")
} else {
    console.log("nejsou stejne")
}