function manipulateNumber() {
    var inputNumber = document.getElementById('inputNumber').value;


    if (inputNumber.length !== 5 || isNaN(inputNumber)) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть п\'ятизначне число.';
        return;
    }

    // Переміщення останньої цифри на початок
    var manipulatedNumber = inputNumber.slice(-1) + inputNumber.slice(0, -1);

    document.getElementById('result').innerHTML = 'Результат: ' + manipulatedNumber;
}