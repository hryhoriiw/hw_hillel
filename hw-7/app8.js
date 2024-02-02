// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let startNumber = 100;
let endNumber = 200;

for (let i=startNumber;i<=endNumber;i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}