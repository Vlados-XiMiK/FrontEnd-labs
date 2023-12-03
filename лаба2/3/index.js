function toKebabCase(camelCaseStyle) {
    return camelCaseStyle.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}

// Пример использования функции
var camelCaseStyleInput = prompt('Введіть назву CamelCase-стилю:');
var kebabCaseStyle = toKebabCase(camelCaseStyleInput);

alert('Результат: ' + kebabCaseStyle);
