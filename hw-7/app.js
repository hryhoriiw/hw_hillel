//Вивести на сторінку в один рядок через кому числа від 10 до 20.

let startNumber = 10;
let endNumber = 20;
result = '';

for (let i=startNumber; i <= endNumber; i++) {
    result += i + (i<endNumber ? ', ' : '')
}

console.log(result)






















