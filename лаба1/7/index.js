function calculatePower() {
    var baseNumber = parseFloat(prompt('Введіть число (S):'));
    var exponentDigit = parseInt(prompt('Введіть цифру (K):'));

    if (!isNaN(baseNumber) && !isNaN(exponentDigit) && Number.isInteger(exponentDigit)) {
        // Піднесення числа до ступеня введеної цифри
        var result = Math.pow(baseNumber, exponentDigit);

        alert('Результат піднесення числа ' + baseNumber + ' до ступеня ' + exponentDigit + ': ' + result);
    } else {
        alert('Будь ласка, введіть коректні значення.');
    }
}

calculatePower();