function generateTable(strings) {
    // Створення елемента таблиці
    var tableElement = document.createElement('table');

    // Додавання стилів для бордеру таблиці
    tableElement.style.border = '1px solid black';

    // Створення рядка таблиці
    var trElement = document.createElement('tr');

    // Проходження по кожному рядку і створення відповідного рядка таблиці
    for (var i = 0; i < strings.length; i++) {
        var tdElement = document.createElement('td');

        // Додавання стилів для бордеру комірки таблиці
        tdElement.style.border = '1px solid black';

        // Додавання тексту у комірку таблиці
        tdElement.textContent = strings[i];

        // Додавання комірки до рядка
        trElement.appendChild(tdElement);
    }

    // Додавання рядка до таблиці
    tableElement.appendChild(trElement);

    // Додавання таблиці на сторінку
    document.body.appendChild(tableElement);
}

// Приклад виклику функції з масивом рядків
var inputStrings = [
    'Рядок 1',
    'Рядок 2',
    'Рядок 3',
    'Рядок 4'
];

generateTable(inputStrings);