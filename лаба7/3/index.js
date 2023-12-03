function toSnakeCase(camelCase) {
    return camelCase.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

function convertToSnakeCase() {
    const camelCaseInput = document.getElementById('camelCaseInput');
    const resultElement = document.getElementById('result');

    const camelCaseName = camelCaseInput.value.trim();
    const snakeCaseName = toSnakeCase(camelCaseName);

    if (snakeCaseName) {
        resultElement.innerText = `Результат: ${snakeCaseName}`;
    } else {
        resultElement.innerText = 'Будь ласка, введіть CamelCase ім\'я.';
    }
}