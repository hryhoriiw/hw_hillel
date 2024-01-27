const choice = {
    add: function(a,b) {
        return a+b;
    },

    sub: function(a,b) {
        return a-b;
    },
    
    mult: function(a,b) {
        return a*b;
    },
    
    div: function(a,b) {
        return b !== 0 ? a / b : "Impossible";
    },
}

const userChoose = prompt('choose operation (add, sub, mult, div)');
const firstNumber = parseFloat(prompt('write the first number'))
const secondNumber = parseFloat(prompt('write the second number'))

const result = choice[userChoose](firstNumber,secondNumber);

console.log(firstNumber + ' ' + userChoose + ' ' + secondNumber + ' = ' + result);
