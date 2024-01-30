// Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.

const evenOrOdd = parseFloat(prompt('take me your digit'))

const lastDigit = evenOrOdd % 10;

const isEven = lastDigit % 2===0;

if (isEven) {
    alert('is even digit');
} else {
    alert('this digit is not even')
}

alert(lastDigit) // немного не понял условие в задании 'Вывести последнюю цифру' , поэтому вот так вывел и в коде на 5 строчке