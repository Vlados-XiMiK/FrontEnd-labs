function processParameters() {
    let sum = 0;
    let words = [];

    // Запит користувача для отримання параметрів
    let userInput = prompt('Введіть числа та слова через кому (наприклад, Jane, 1,3,like,5,9,read,4,book):');

    // Розділення введених даних за комами
    let args = userInput.split(',');

    for (let i = 0; i < args.length; i++) {
        const currentArg = args[i];

        // Перетворення на число або використання як рядка
        if (!isNaN(currentArg.trim())) {
            sum += parseFloat(currentArg.trim());
        } else {
            words.push(currentArg.trim());
        }
    }

    // Виведення результатів на сторінку
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `sum = ${sum}<br>${words.join(' ')}`;
    document.body.appendChild(resultDiv);
}

// Виклик функції
processParameters();
