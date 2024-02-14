/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача. */

function doMath(x, znak, y) {

    if (znak === '+') {
        return x + y;
    } else if (znak === '-') {
        return x - y;
    } else if (znak === '*') {
        return x * y;
    } else if (znak === '/') {
        return x / y;
    } else if (znak === '%') {
        return x % y;
    } else if (znak === '^') {
        return Math.pow(x, y);
    } else {
        alert('Некорректный оператор!');
        return undefined;
    }
}

let userFirstNumber;

do {
    userFirstNumber = parseInt(prompt(`Введите первое число`));

    if (isNaN(userFirstNumber)) {
        alert('Введите действительное число');
    }
} while (isNaN(userFirstNumber));

let userSecondNumber;
let userChoice;

do {
    userChoice = prompt(`Введите действие (+, -, *, /, %, ^)`);
    userSecondNumber = parseInt(prompt(`Введите второе число`));
} while (isNaN(userSecondNumber));

let result = doMath(userFirstNumber , userChoice , userSecondNumber);

if (result !== undefined) {
    alert(`${userFirstNumber} ${userChoice} ${userSecondNumber} = ${result}`);
}
