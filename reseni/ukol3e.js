/**
 * Prepis nasledujici while cyklus na for cyklus
 */


let x = 5;

while (x < 10) {
    console.log(x);
    x = x + 1;
}

console.log("konec while");

for (let i = 5; i < 10; i = i + 1) {
    console.log(i)
}


console.log("konec for");


/**
 * BONUS 1
 * prepis na FOR
 */

x = 5;

while (x < 10) {
    console.log(x);
    x = x + 3;
}

for (let i = 5; i < 10; i = i + 3) {
    console.log(i)
}

console.log("konec BONUS 1 ");


/**
 * BONUS 2
 * prepis na FOR
 */

x = 15;

while (x > 10) {
    console.log(x);
    x = x - 1;
}



for (let i = 15; i > 10; i = i - 1) {
    console.log(i)
}
