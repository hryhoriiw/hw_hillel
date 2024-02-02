// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let startNumber = 30;
let endNumber = 80;
let sumNumbers = 0;

for (let i=startNumber;i<=endNumber;i++) {
    if (i % 2 === 0) {
        sumNumbers += i;
    }
}
alert(`сумма всіх парних чисел від ${startNumber} до ${endNumber} це ${sumNumbers}`)











