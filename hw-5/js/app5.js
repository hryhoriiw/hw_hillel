// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

const enterNumber = parseFloat(prompt('Enter a two-digit number'));

function getFirstDigit(number) {
    return parseInt(String(number)[0]);
}

function getSecondDigit(number) {
    return parseInt(String(number)[1]);
}

const firstDigit = getFirstDigit(enterNumber);
const secondDigit = getSecondDigit(enterNumber);

if (firstDigit > secondDigit) {
    alert('First digit > second');
} else if (firstDigit < secondDigit) {
    alert('First digit < second');
} else {
    alert('First digit = second');
}
