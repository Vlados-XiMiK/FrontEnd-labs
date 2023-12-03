function moveButton() {
    var container = document.getElementById('container');
    var button = document.getElementById('runawayButton');

    // Генеруємо випадкові координати для нового положення кнопки
    var maxX = container.clientWidth - button.clientWidth;
    var maxY = container.clientHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    // Встановлюємо нові координати кнопки
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}