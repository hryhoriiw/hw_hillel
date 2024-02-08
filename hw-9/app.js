let userArrayLength = parseInt(prompt('Введіть довжину масиву'));

let userArray = [];

let checkArray = true;

if (!isNaN(userArrayLength) && userArrayLength > 0) {
    for (let i = 0; i < userArrayLength; i++) {
        let element = prompt(`Введіть елемент масиву ${i + 1}`);
        if (element !== null && element !== '') {
            userArray.push(element);
        } else {
            alert('Помилка: введіть коректний елемент');
            checkArray = false;
            break;
        }
    }
} else {
    checkArray = false;
    alert('Введіть число більше 0');
}

if (checkArray) {
    document.write(`<p>Ваш масив без змін: ${userArray}</p>`);
}

let userArraySorted = [...userArray].sort(function(a, b) {
    return a - b;
});

if (checkArray) {
    document.write(`<p>Ваш масив відсортований за зростанням: ${userArraySorted}</p>`);
}

if (userArray.length >= 5) {
    userArray.splice(1, 3);
    document.write(`<p>Ваш масив без елементів з 2 по 4: ${userArray}</p>`);
} else {
    alert('Ваш масив має менше 5 елементів');
}



