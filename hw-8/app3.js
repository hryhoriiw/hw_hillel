// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let userNumber = parseFloat(prompt('введіть ціле число '));

let startNumber = 1;
let endNumber = 100;

if (!isNaN(userNumber) && userNumber % 1 ===0) {
    for (i=startNumber;i<=100;i++) {
        if (i**2 <= userNumber) {
            console.log(i);
        }
    }
} else {
    alert('помилка, число не ціле');
}