let selectedColor = null;

function selectColor(color) {
    selectedColor = color;
}

function createCanvas() {
    const canvas = document.getElementById('canvas');

    for (let i = 0; i < 100; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', () => colorPixel(pixel));
        canvas.appendChild(pixel);
    }
}

function colorPixel(pixel) {
    if (selectedColor) {
        pixel.style.backgroundColor = selectedColor;
    }
}

createCanvas();