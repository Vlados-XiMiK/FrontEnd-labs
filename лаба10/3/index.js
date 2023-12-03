const selectedColors = new Set();

function toggleColor(color) {
    if (selectedColors.has(color)) {
        selectedColors.delete(color);
    } else {
        selectedColors.add(color);
    }

    updateRectangleBackground();
}

function applyColors() {
    // Застосовуємо кольори до прямокутника
    const rectangle = document.getElementById('rectangle');
    rectangle.style.background = getGradient();

    // Очищаємо вибрані кольори
    selectedColors.clear();
}

function updateRectangleBackground() {
    const rectangle = document.getElementById('rectangle');
    rectangle.style.background = getGradient();
}

function getGradient() {
    if (selectedColors.size === 0) {
        return 'linear-gradient(to right, #ffffff, #ffffff)';
    } else if (selectedColors.size === 1) {
        return `linear-gradient(to right, ${[...selectedColors][0]}, ${[...selectedColors][0]})`;
    } else {
        const gradientColors = Array.from(selectedColors).join(', ');
        return `linear-gradient(to right, ${gradientColors})`;
    }
}