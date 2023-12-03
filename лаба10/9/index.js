function changeColor(event) {
    var selectedClass = 'selected';

    // Знаходимо попередній вибраний елемент
    var previousSelected = document.querySelector('.' + selectedClass);

    // Перевіряємо, чи клікнули на li елемент
    if (event.target.tagName === 'LI') {
        var clickedElement = event.target;

        // Видаляємо клас selected з попереднього вибраного елемента, якщо він існує
        if (previousSelected) {
            previousSelected.classList.remove(selectedClass);
        }

        // Додаємо клас selected до клікнутого елемента
        clickedElement.classList.add(selectedClass);
    }
}