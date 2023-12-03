    function calculator() {
    var proceed = true;

    while (proceed) {
    var number1 = parseFloat(prompt('Введіть перше число:'));
    var operator = prompt('Введіть оператор (+, -, *, /):');
    var number2 = parseFloat(prompt('Введіть друге число:'));

    var result;

    switch (operator) {
    case '+':
    result = number1 + number2;
    break;
    case '-':
    result = number1 - number2;
    break;
    case '*':
    result = number1 * number2;
    break;
    case '/':
    result = number1 / number2;
    break;
    default:
    alert('Неправильний оператор. Спробуйте ще раз.');
    continue;
}

    alert('Результат: ' + result);

    var answer = prompt('Хочете вирішити ще один приклад? (Так/Ні)').toLowerCase();

    if (answer !== 'так') {
    proceed = false;
}
}

    alert('Дякую за використання калькулятора!');
}


    calculator();
