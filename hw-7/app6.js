//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let startNumber = 1;
let endNumber = 500;
let sum = 0

for (let i=startNumber; i<=endNumber; i++) {
    sum += i;
}

let result = sum / (endNumber - startNumber + 1);
 
console.log(result);











