// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function filterArrayAndGetAverage(inputArray) {

  let numberInArray = [];
  let count = 0;
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'number') {
      numberInArray.push(inputArray[i])
      sum += inputArray[i];
      count++;
    }
  }

  let average = count > 0 ?  sum / count : 0;
  return average;
}

const array = [1, 5, true , [4,5,6] , 'hello' , { key: 10} , undefined , 102];
const result = filterArrayAndGetAverage(array);
console.log(result);


























