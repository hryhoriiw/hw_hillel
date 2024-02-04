/*дано деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
 (Наприклад, числа 9, 81 можна отримати, а 13 - не можна) */


const userNumber = parseFloat(prompt('введите число'));

if (!isNaN(userNumber) && userNumber > 0) {
    let checkNum = true;
    for (let i=1 ; i <= userNumber ; i *=3) {
        if (userNumber === i || userNumber === 1) {
            checkNum = false;
            break;
        } 
    } 
    if (checkNum) {
        alert(`${userNumber} не можна одержати це число шляхом зведення числа 3`)
    } else {
        alert(`${userNumber} можна одержати це число шляхом зведення числа 3`)
    }
} else {
    alert(`введите корректное число`);
}









