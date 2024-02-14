/*Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/ 

function filterArrayAndGetAverage (inputArray) {
  
  let numberInArray = [];
  
  for (let i = 0; i < inputArray.length; i++) {
    
    if (typeof inputArray[i] === 'number') {
      numberInArray.push(inputArray[i]);
    }

  }
  console.log(numberInArray);

  let sum = 0;

  for (let i = 0; i < numberInArray.length; i++) {
    sum += numberInArray[i];
  }

  const average = numberInArray.length > 0 ? sum / numberInArray.length : 0;
  console.log(average)
}


const array = [1, 5, true , [4,5,6] , 'hello' , { key: 10} , undefined , 102];
filterArrayAndGetAverage(array);





























