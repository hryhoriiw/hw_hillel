// Надрукувати повну таблицю множення від 1 до 10.

const userInput = prompt('введіть цифру від 1 до 10');
const userNumber = parseFloat(userInput);

if (isNaN(userNumber)) {
    alert('ви ввели не число, будь ласка, введіть коректне число.');
} else if (userNumber > 10) {
    alert(`ваше число (${userNumber}) більше ніж 10`);
} else if (userNumber === 0) {
    alert('ваше число 0, мінімальне число - 1');
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${userNumber} * ${i} = ${i * userNumber}`);
    }
}
