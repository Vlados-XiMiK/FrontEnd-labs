function toCamelCase(cssStyle) {
    return cssStyle.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

// Пример использования функции
var cssStyleInput = prompt('Введіть назву CSS-стилю з дефісами:');
var camelCaseStyle = toCamelCase(cssStyleInput);

alert('Результат: ' + camelCaseStyle);