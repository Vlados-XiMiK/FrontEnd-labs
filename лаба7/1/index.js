function findDates(text) {
    const dateRegex = /\b(?:\d{2}[./-]\d{2}[./-]\d{4})\b/g;
    const matches = text.match(dateRegex);

    // Перевірка на наявність знайдених дат
    if (!matches) return [];

    // Перевірка на валідність дат
    const validDates = matches.filter((date) => isValidDate(date));

    return validDates;
}

// Функція перевірки валідності дати
function isValidDate(dateString) {
    const regex = /^(?:\d{2}[./-]\d{2}[./-]\d{4})$/;
    if (!regex.test(dateString)) return false;

    const parts = dateString.split(/[./-]/);
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (month < 1 || month > 12 || day < 1 || day > 31) return false;

    const testDate = new Date(year, month - 1, day);
    return (
        testDate.getFullYear() === year &&
        testDate.getMonth() === month - 1 &&
        testDate.getDate() === day
    );
}

function findAndDisplayDates() {
    const textInput = document.getElementById('textInput');
    const resultElement = document.getElementById('result');

    const text = textInput.value.trim();
    const foundDates = findDates(text);

    if (foundDates.length > 0) {
        resultElement.innerText = `Знайдені валідні дати: ${foundDates.join(', ')}`;
    } else {
        resultElement.innerText = 'В тексті відсутні валідні дати у форматі ДД.ММ.РРРР, ДД/ММ/РРРР, ДД-ММ-РРРР.';
    }
}