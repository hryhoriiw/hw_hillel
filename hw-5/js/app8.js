// Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)


const enterNumber = parseInt(prompt('Enter a six-digit number'));

function specularity(number) {

    firstDigit = parseInt(String(number)[0]);
    secondDigit = parseInt(String(number)[1]);
    thirdDigit = parseInt(String(number)[2]);
    fourthDigit = parseInt(String(number)[3]);
    fifthDigit = parseInt(String(number)[4]);
    sixthDigit = parseInt(String(number)[5]);

    const specularityTrue = firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit;

    return {specularityTrue}
}


const {specularityTrue} = specularity(enterNumber);

if (specularityTrue) {
    alert('mirror number')
} else {
    alert('the number is not mirrored')
}
