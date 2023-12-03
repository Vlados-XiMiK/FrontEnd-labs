function toCamelCase(snakeCase) {
    return snakeCase.replace(/_([a-z])/g, (_, match) => match.toUpperCase());
}

function convertToCamelCase() {
    const snakeCaseInput = document.getElementById('snakeCaseInput');
    const resultElement = document.getElementById('result');

    const snakeCaseName = snakeCaseInput.value.trim();
    const camelCaseName = toCamelCase(snakeCaseName);

    if (camelCaseName) {
        resultElement.innerText = `Результат: ${camelCaseName}`;
    } else {
        resultElement.innerText = 'Будь ласка, введіть snake_case ім\'я.';
    }
}