let totalPaint = 100;
const paintCost = 10;

function fillPaint() {
    totalPaint = 100;
    updatePaintStatus();
    console.log("Фарбу заправлено до 100%");
}

function drawSquare() {
    if (totalPaint >= paintCost) {
        totalPaint -= paintCost;

        const square = document.createElement("div");
        square.className = "square";
        square.style.backgroundColor = `rgba(255, 0, 0, ${totalPaint / 100})`;
        document.getElementById("canvas").appendChild(square);

        console.log("Малюємо квадрат");
        updatePaintStatus();
    } else {
        console.log("Недостатньо фарби для малювання квадрата");
    }
}

function updatePaintStatus() {
    document.getElementById("paintStatus").textContent = `Залишилося фарби: ${totalPaint}`;
}