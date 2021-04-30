/**
 * Pomoci string interpolation zformatuj dany text 
 */

let jmeno = "Petr";
let prijmeni = "Sberac";
let pocetHrusek = 14;
let pocetJablek = 5;

let text = `Ovocnar jmenem ${jmeno} ${prijmeni} nasbiral ${pocetHrusek} hrusek, ${pocetJablek} jablek. Dohromady ${pocetJablek + pocetHrusek} ovocnych plodu.`; // zde naformatuj text
console.log(text); //"Ovocnar jmenem Petr Sberac nasbiral 14 hrusek, 5 jablek. Dohromady 19 ovocnych plodu."

