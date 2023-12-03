function generateSquares() {
    const input = document.getElementById('binaryInput');
    const squaresContainer = document.getElementById('squaresContainer');

    // Очищаємо контейнер перед генерацією нових квадратів
    squaresContainer.innerHTML = '';

    // Отримуємо значення з textarea
    const binaryString = input.value.trim();

    // Розділяємо введений рядок на масив рядків
    const lines = binaryString.split('\n');

    // Перевіряємо, чи введено лише 0 і 1
    if (lines.every(line => /^[01]+$/.test(line))) {
        // Генеруємо квадратики на основі введених рядків
        lines.forEach(line => {
            const row = document.createElement('div');
            row.classList.add('row');

            for (const char of line) {
                const square = document.createElement('div');
                square.classList.add('square', char === '0' ? 'white' : 'black');
                row.appendChild(square);
            }

            squaresContainer.appendChild(row);
        });
    } else {
        alert('Будь ласка, введіть лише 0 та 1.');
    }
}