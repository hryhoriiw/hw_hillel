//Знайти добуток усіх цілих чисел від 15 до 35.

let startNumber = 15;
let endNumber = 35;
let product = 1;

for(let i=startNumber; i <= endNumber ;i++) {
    product *= i;
}

console.log(`добуток від ${startNumber} до ${endNumber} = ${product}`)











