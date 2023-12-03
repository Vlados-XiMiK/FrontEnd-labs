function calculator(expression) {
    // Розбиваємо рядок на операнди та операцію
    var match = expression.match(/^(\d+)\s*([+\-*/])\s*(\d+)$/);

    if (!match) {
        return 'Некоректний формат виразу';
    }

    var operand1 = parseFloat(match[1]);
    var operator = match[2];
    var operand2 = parseFloat(match[3]);

    if (isNaN(operand1) || isNaN(operand2)) {
        return 'Некоректні операнди';
    }

    // Виконуємо відповідну операцію
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return 'Ділення на нуль неможливе';
            }
        default:
            return 'Невідома операція';
    }
}

// Приклад використання
var expressionInput = prompt('Введіть вираз (наприклад, 5 + 3):');
var result = calculator(expressionInput);

alert('Результат: ' + result);
