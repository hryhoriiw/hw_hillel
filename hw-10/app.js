// 1) Знайти суму та кількість позитивних елементів.
let myArray = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47
];

let sumPositives = 0;
let positiveElem = '';

for (let i = 0; i < myArray.length; i++) {

    if(myArray[i] > 0) {
        sumPositives += myArray[i];
        positiveElem += myArray[i] + ', ';
    }

} 

document.write(`<p> Позитивні єлементи ${positiveElem}  <p/>`);
document.write(`<p>${sumPositives} сума позитивних єлементів <p/>`);




// 2) Знайти мінімальний елемент масиву та його порядковий номер.
let minElem = myArray[0];

let indexMinElement = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minElem) {
        minElem = myArray[i];
        indexMinElement = i;
    }
}

document.write(`<p> Мінімальне число в массиві це ${minElem}</p>`);
document.write(`<p> Індекс мінімального числа це - ${indexMinElement}</p>`);



// 3) Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = myArray[0];

let indexMaxElement = 0;

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] > maxElement) {
        maxElement = myArray[i];
        indexMaxElement = i;
    }

}

document.write(`<p> Максимальне число в массиві це - ${maxElement}</p>`);
document.write(`<p> Індекс максимального числа це - ${indexMaxElement}</p>`);

// 4) Визначити кількість негативних елементів.
let negativeElem = ``;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 0) {
        negativeElem += myArray[i] + `, `;
    }
}

document.write(`<p>Всі негативні єлементи : ${negativeElem}</p>`);

// 5) Знайти кількість непарних позитивних елементів.

let quantityUnpairedPositives = 0;
let sumUnpairedPositiveElem = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
        quantityUnpairedPositives ++;
        sumUnpairedPositiveElem += myArray[i];
    }
}

document.write(`<p>Кількість непарних позитивних єлементів : ${quantityUnpairedPositives}</p>`);

// 6) Знайти кількість парних позитивних елементів.

let quantityPairedPositives = 0;
let sumPairedPositiveElem = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0 && myArray[i] % 2 === 0) {
        quantityPairedPositives++;
        sumPairedPositiveElem += myArray[i];
    }
}

document.write(`<p>Кількість парних позитивних єлементів : ${quantityPairedPositives}</p>`);
// 7) Знайти суму парних позитивних елементів.
document.write(`<p>Cума парних позитивних єлементів ${sumPairedPositiveElem}</p>`);

// 8) Знайти суму непарних позитивних елементів.
document.write(`<p>Cума непарних позитивних єлементів : ${sumUnpairedPositiveElem}</p>`);

// 9) Знайти добуток позитивних елементів.

let multPositiveElem = 1;

for (let i = 0; i < myArray.length; i++) {

    if(myArray[i] > 0) {
        multPositiveElem *= myArray[i];
    }

}

document.write(`<p>Добуток позитивних елементів : ${multPositiveElem}</p>`);


// 10) Знайти найбільший серед елементів масиву, остальні обнулити.
for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] !== maxElement) {
        myArray[i] = 0;
    }

}

document.write(`<p>Масив з обнуленими елементами, крім найбільшого: ${myArray}</p>`);


