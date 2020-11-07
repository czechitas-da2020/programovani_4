// "4 Typy funkci"

/**
 * 1# Bez Parametru a Bez Navratove hodnoty
 */

function noParNoReturn(){
    console.log("Ahoj ja jsem hezka funkce bez parametru a bez navratove hondnoty");
}

// volam funkci, aby se vykonala
noParNoReturn();

/**
 * 2# S parametrem a bez navratove honoty
 */

function withParamNoReturn(jmeno){
    // v teto funkci existuje promena jmenem JMENO
    console.log("Ahoj " + jmeno);
}

let mojeJmeno = "Karel";
withParamNoReturn(mojeJmeno);


/**
 * 3# Bez parametru s navratovou hodnotou
 */

 function vygenerujMiTimeStamp(){
    let timeStamp = new Date().valueOf();
    return timeStamp;
 }

 console.log(vygenerujMiTimeStamp());


 /**
  * 4# S Parametrem, s navratovou hodnotou
  */
  function secti(a, b){
      let soucet = a + b;
      return soucet;
  }

  let soucet = secti(3,4);
  console.log(soucet);
