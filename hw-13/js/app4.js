
function sortStrUser() {
    const userChoiceStr = prompt(`Введіть свій рядок`);

    if (typeof userChoiceStr === 'number' || typeof userChoiceStr === 'string') {
        const userChoiceDelete = prompt(`Введіть які символи ви хочете прибрати в результаті`);

        if (userChoiceDelete === null || checkIfCharactersExist(userChoiceStr, userChoiceDelete)) {
            let result = `Ваш результат ${userChoiceStr} без ${userChoiceDelete} = `;

            for (let i = 0; i < userChoiceStr.length; i++) {
                let currentChar = userChoiceStr[i];
                let deleteCurrentChar = false;

                for (let j = 0; j < userChoiceDelete.length; j++) {
                    if (currentChar === userChoiceDelete[j]) {
                        deleteCurrentChar = true;
                        break;
                    }
                }

                if (!deleteCurrentChar) {
                    result += currentChar;
                }
            }

            return result;
        } else {
            alert(`Извините, вы не ввели ничего или ввели неверное значение`);
        }
    } else {
        alert(`Шкода, що ви не захотіли ввести свій рядок`);
    }
}

function checkIfCharactersExist(str , values) {
    
    for (let i = 0; i < values.length; i++) {
        let symbolExists = false;

        for (let j = 0; j < str.length; j++) {

            if (str[j] === values[i]) {
                symbolExists = true;
                break;
            }
        }
        if (!symbolExists) {
            return false;
        }
    }   
    return true;
}


const resultSortUser = sortStrUser();
alert(resultSortUser);