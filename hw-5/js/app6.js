/* Дано трехзначное число. 
Определить является ли четной сумма его цифр. 
Определить, кратна ли сумма его цифр пяти. 
Определить является ли произведение его цифр больше 100.
*/

const enterNumber = parseInt(prompt('Enter a third-digit number'));

function sumOfDigits (number) {
    return parseInt(String(number)[0]) + parseInt(String(number)[1]) + parseInt(String(number)[2]);
}

const sum = sumOfDigits(enterNumber);



if ( sum % 2 === 0) {
    alert('the sum is even')
} else {
    alert('the sum is not even')
} 

if (sum % 5 === 0) {
    alert('the amount is divided by 5')
} else {
    alert('the amount is NOT divisible by 5')
}

if (sum > 100) {
    alert('amount is more than 100')
} else if (sum === 100) {
    alert('the sum is 100')
} else {
    alert('amount less than 100')
}

