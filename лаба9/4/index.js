let isToggled = false;
const image = document.getElementById('myImage');

function toggleImageSize() {
    if (!isToggled) {
        image.style.width = `${image.width * 2}px`;
        image.style.height = `${image.height * 2}px`;
    } else {
        image.style.width = '600px';
        image.style.height = '400px';
    }

    isToggled = !isToggled;
}