
// //Знайти суму всіх цілих чисел від 1 до 15.

let startNumber = 1;
let endNumber = 15;
let sum = 0;
let expression = '';

for (let i=startNumber;i <= endNumber; i++) {
    sum += i;
    expression += (i !== startNumber ) ? `+${i}` : `${i}`;
    console.log(`сума: ${expression} = ${sum}`)
}

alert(`Загальна сума всіх цілих чисел від ${startNumber} до ${endNumber} = ${sum} (подробиці у консолі)`);
















