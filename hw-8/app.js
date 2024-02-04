/*Вивести числа від 20 до 30 через пропуск, 
використовуючи крок 0,5 (20 20,5 21 21,5….).*/


let startNumber = 20;
let endNumber = 30;
let numberAdder = 0.5;
let result = '';

for(let i=startNumber;i<endNumber;i+=numberAdder) {
    result += parseFloat(`${i}`) + ' ';
}

console.log(result);




















