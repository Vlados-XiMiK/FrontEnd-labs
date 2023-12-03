function findHexColor(text) {
    const hexColorRegex = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;
    const matches = text.match(hexColorRegex);

    return matches ? matches : null;
}

function findAndDisplayColor() {
    const textInput = document.getElementById('textInput');
    const resultElement = document.getElementById('result');

    const text = textInput.value;
    const hexColors = findHexColor(text);

    if (hexColors) {
        resultElement.innerHTML = `Знайдені кольори: ${hexColors.join(', ')}`;
    } else {
        resultElement.innerHTML = 'Кольорів не знайдено.';
    }
}