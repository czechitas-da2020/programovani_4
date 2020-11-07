// Nezajima nas jak tato funkce funguje. 
function magicFunction(){
    return [...Array(5).keys()].map(x => x*2);
}

// Toto je pouze jiny zapis funkce
let pozdrav = (promena) => {
    console.log(`Cislo ${promena}`)
}

/**
 * Pomoci funkce forEach (napoveda v souboru examples-news/array-functions) zavolej nad kazdym prvkem pole funkci pozdrav
 */

let pole = magicFunction();

// zde pis kod

