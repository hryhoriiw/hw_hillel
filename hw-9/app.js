// /*Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.*/

let userArrayLenght = parseInt(prompt('Введіть довжину массиву'));

let userArray = [];

let checkArray = true;

if (!isNaN(userArrayLenght) && userArrayLenght > 0) {
    for (let i = 0 ; i < userArrayLenght ; i++) {
        let element = prompt(`Впишіть елемент масива ${i + 1}`);
        if (element.length > 0) {
            userArray.push(element);
        } else {
            alert('помилка');
            checkArray = false;
            break;
        }
    }    
} else {
    checkArray = false;
    alert('Введіть число більше 0')
}

if (checkArray) {
    document.write(`<p>Ваш массив без змін це ${userArray}<p/>`)
} 

let userArrayIncrease = [...userArray].sort();

if(checkArray){
    document.write(`<p>Ваш массив за зростанням це ${userArrayIncrease}<p/>`);
}

if (userArray.length >= 5) {
    userArrayIncrease.splice(2, 4);
    document.write(`<p>Ваш массив без 2-4 єлементів це ${userArrayIncrease}<p/>`); 
} else {
    alert('Ваш массив має менше 5 єлементів');
}