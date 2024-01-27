const howMany = parseFloat(prompt('how many hours?'));

function hoursInSeconds() {
    return howMany * 3600 + ' seconds';  
}

const userResult = alert(howMany + ' hours is ' + hoursInSeconds())