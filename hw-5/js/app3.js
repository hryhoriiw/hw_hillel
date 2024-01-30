// Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)

const firstDigit = parseInt(prompt('take me your FIRST digit please'))
const secondDigit = parseInt(prompt('take me your SECOND digit please'))

function isDivisor(a,b) {
    return b % a === 0;
}

const firstIsDivisorSecond = isDivisor(firstDigit,secondDigit);
const secondIsDivisorFirst = isDivisor(secondDigit,firstDigit);


if (firstIsDivisorSecond && secondIsDivisorFirst) {
    alert('both numbers are equal')
} else if (firstIsDivisorSecond) {
    alert('first divisor of second')
} else if (secondIsDivisorFirst) {
    alert('second divisor of first')
} else {
    alert('nobody is divisor')
}

