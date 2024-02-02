// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.

let naturalNumber = parseFloat(prompt('введи натуральное число'))
if ( naturalNumber > 0) {
    let dividers = `Дільники числа ${naturalNumber} это`;

    for (let i=1; i<= naturalNumber;i++) {
        if (naturalNumber % i === 0) {
            dividers += ` ${i} `;
        }
    }
    alert(dividers) 
} else {
    alert('Жаль, що ви не ввели натуральне число або ввели від\'ємне число')
}

let pairedDivisors = 0;
for (let i=1;i<=naturalNumber;i++) {
    if (naturalNumber % i === 0 && i % 2 === 0) {
        pairedDivisors++;
    }
}
alert(`кількість парних дільників це ${pairedDivisors}`)

let sumDivisors = 0;
for (let i=1; i<=naturalNumber;i++) {
    if (naturalNumber % i === 0 && i % 2 === 0) {
        sumDivisors += i;
    }
}

alert(`сума цих парних дільників це ${sumDivisors} `)








