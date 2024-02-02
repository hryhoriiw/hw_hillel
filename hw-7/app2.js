//Вивести квадрати чисел від 10 до 20.

let startNumber = 10;
let endNumber = 20;
result = '';

for (let i=0; i<=endNumber; i++) {
    let square = startNumber*startNumber
    if (startNumber > 20 ) {
        break;
    }
    console.log(startNumber + ' - квадрат ' + square);
    startNumber++
}











































