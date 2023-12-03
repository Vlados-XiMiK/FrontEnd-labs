function numberToWords(number) {
    if (number < 10 || number > 99) {
        return 'Будь ласка, введіть двозначне число.';
    }

    var units = ['', 'один', 'два', 'три', 'чотири', 'п\'ять', 'шість', 'сім', 'вісім', 'дев\'ять'];
    var teens = ['десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п\'ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев\'ятнадцять'];
    var tens = ['', '', 'двадцять', 'тридцять', 'сорок', 'п\'ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев\'яносто'];

    var unitsDigit = number % 10;
    var tensDigit = Math.floor(number / 10);

    var result = '';

    if (tensDigit > 1) {
        result += tens[tensDigit] + ' ';
    }

    if (tensDigit === 1) {
        result += teens[unitsDigit] + ' ';
    } else {
        result += units[unitsDigit] + ' ';
    }

    return result.trim();
}


var userInput = parseInt(prompt('Введіть двозначне число:'));
var result = numberToWords(userInput);

alert('Текстовий вигляд числа ' + userInput + ': ' + result);
