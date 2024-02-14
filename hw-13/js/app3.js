//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

function mainArrayLength() {

    let mainArrayLength = parseInt(prompt('Введіть довжину основного масиву'));
    let innerArrayLength = parseInt(prompt('Введіть довжину внутрішніх масивів'));
 
    let twoDimensionalArray = [];

    for (let i = 0; i < mainArrayLength; i++) {
        let innerArray = [];

        for (let j = 0; j < innerArrayLength; j++) {
            let element = prompt(`Введіть значення для елементу [${i}][${j}]`);
            innerArray.push(element);
        }
        twoDimensionalArray.push(innerArray);
    }
    return twoDimensionalArray;
}

let result = mainArrayLength();

console.log(result);