const block = document.querySelector('.resizable-rotatable-block');
const resizer = document.getElementById('resizer');
const widthControl = document.getElementById('width');
const heightControl = document.getElementById('height');
const rotateControl = document.getElementById('rotate');

resizer.addEventListener('mousedown', (e) => {
    let isResizing = true;
    const startX = e.clientX;
    const startWidth = parseInt(getComputedStyle(block).width);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
    });

    function handleMouseMove(e) {
        if (isResizing) {
            const newWidth = startWidth + (e.clientX - startX);
            block.style.width = `${newWidth}px`;
            widthControl.value = newWidth;
        }
    }
});

widthControl.addEventListener('input', () => {
    block.style.width = `${widthControl.value}px`;
});

heightControl.addEventListener('input', () => {
    block.style.height = `${heightControl.value}px`;
});

rotateControl.addEventListener('input', () => {
    block.style.transform = `rotate(${rotateControl.value}deg)`;
});