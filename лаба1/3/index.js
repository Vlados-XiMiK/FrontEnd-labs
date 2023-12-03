function isLeapYear(year) {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

function manipulateDate() {
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);


    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || month < 1 || month > 12 || year < 1) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть коректну дату.';
        return;
    }

    var daysInMonth = [0, 31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (day < 1 || day > daysInMonth[month]) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть коректну дату.';
        return;
    }


    var previousDate = new Date(year, month - 1, day - 1);
    var nextDate = new Date(year, month - 1, day + 1);


    var resultMessage = 'Попередня дата: ' + previousDate.getDate() + '.' + (previousDate.getMonth() + 1) + '.' + previousDate.getFullYear() + '<br>';
    resultMessage += 'Наступна дата: ' + nextDate.getDate() + '.' + (nextDate.getMonth() + 1) + '.' + nextDate.getFullYear();
    document.getElementById('result').innerHTML = resultMessage;
}