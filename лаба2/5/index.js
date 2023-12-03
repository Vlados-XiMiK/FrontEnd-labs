function replaceDateFormats(text) {

    var dateRegex = /\b(\d{4})\/(\d{2})\/(\d{2})\b/g;

    // зміна на формат "дд.мм.гггг"
    var newText = text.replace(dateRegex, function (match, year, month, day) {
        return day + '.' + month + '.' + year;
    });

    return newText;
}

// Пример использования функции
var inputText = prompt('Введіть текст з датами в форматі рррр/мм/дд:');
var newText = replaceDateFormats(inputText);

alert('Результат:\n' + newText);
