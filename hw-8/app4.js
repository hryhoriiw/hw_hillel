//Дане ціле число. З'ясувати, чи є воно простим

let userNumber = parseFloat(prompt('введите целое число'));

if (!isNaN(userNumber) && userNumber > 1) {
    let primeNumber = true;

    for (let i=2 ; i<userNumber ; i++ ) {
        if (userNumber % i === 0) {
            primeNumber = false;
            break;
        }
    }

    if(primeNumber) {
        alert(`число ${userNumber} простое`);
    } else {
        alert(`число ${userNumber} Не простое`)
    }
} else {
    alert('введите корректное значение (возможно вы ввели не число или число меньше чем 2')
}
















