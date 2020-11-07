let vek = 4;
let jmeno = "Karel";

// klasicky zapis
let vysledek = "Jmenuji se " + jmeno + " a je mi " + vek + " let";
console.log(vysledek);

// string interpolation
// pouziva zpetne uvozovky ALT + 96 ``
vysledek = `Jmenuji se ${jmeno} a je mi ${vek} let`;
console.log(vysledek);


console.log(`Muze tam byt i expresion ${vek + 5}, ${4/2} atd atd`)

// vsec co je v ${} se nahradi

