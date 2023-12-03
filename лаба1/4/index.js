function describeAge() {
    var age = parseInt(document.getElementById('age').value);

    if (isNaN(age) || age < 1 || age > 69) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть коректний вік.';
        return;
    }

    var units = ['рік', 'роки', 'років'];

    var lastDigit = age % 10;
    var tensDigit = Math.floor(age / 10);

    var description = '';

    if (tensDigit >= 2) {
        description += getTensWord(tensDigit) + ' ';
    }

    if (lastDigit > 0 || (age >= 10 && age <= 20)) {
        description += getUnitsWord(lastDigit, tensDigit);
    }


    var yearWord = getYearWord(age);

    document.getElementById('result').innerHTML = 'Опис віку: ' + description + ' ' + yearWord;
}

function getTensWord(tensDigit) {
    var tensWords = ['десять', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят'];
    return tensWords[tensDigit - 1] || '';
}

function getUnitsWord(lastDigit, tensDigit) {
    if (tensDigit === 1) {
        // випадку закінчення на 0
        var teensWords = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
        return teensWords[lastDigit] || '';
    } else {
        // інших випадків
        var unitsWords = ['один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
        return unitsWords[lastDigit - 1] || '';
    }
}

function getYearWord(age) {
    var lastDigit = age % 10;
    if (age >= 10 && age <= 20) {
        return 'років';
    } else if (lastDigit === 1) {
        return 'рік';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'роки';
    } else {
        return 'років';
    }
}
