/* Дано трехзначное число. 
Верно ли, что все его цифры одинаковые? 
Есть ли среди его цифр одинаковые?
*/

const enterNumber = parseInt(prompt('Enter a third-digit number'));

function similarity(number) {
    const digit1 = parseInt(String(number)[0]);
    const digit2 = parseInt(String(number)[1]);
    const digit3 = parseInt(String(number)[2]);

    const allDigitsSame = digit1 === digit2 && digit2 === digit3;

    const twoDigitsSame = digit1 === digit2 || digit2 === digit3 || digit1 === digit3;

    return {allDigitsSame,twoDigitsSame}
}

const {allDigitsSame,twoDigitsSame} = similarity(enterNumber);


if (allDigitsSame) {
    alert('all digits same')
} else if(twoDigitsSame) {
    alert('two digits same')
} else {
    alert('no digit is the same')
}

