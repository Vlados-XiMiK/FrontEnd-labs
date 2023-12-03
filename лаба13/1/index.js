function displayImages() {
    // Очищаємо попередні помилки та зображення
    document.getElementById('errorMessage').textContent = '';
    document.getElementById('imageContainer').innerHTML = '';

    // Отримуємо значення з текстового поля JSON
    var jsonInput = document.getElementById('jsonInput').value;

    try {
        // Парсимо JSON
        var imageArray = JSON.parse(jsonInput);

        // Створюємо зображення та додаємо їх до сторінки
        var imageContainer = document.getElementById('imageContainer');
        imageArray.forEach(function (imageSrc) {
            var thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            var img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Thumbnail';
            thumbnail.appendChild(img);
            thumbnail.addEventListener('click', function () {
                showFullSizeImage(imageSrc);
            });
            imageContainer.appendChild(thumbnail);
        });
    } catch (error) {
        // Виводимо повідомлення про помилку, якщо парсинг JSON невдалося
        document.getElementById('errorMessage').textContent = 'Невірний формат JSON';
    }
}

function showFullSizeImage(imageSrc) {
    // Відкриваємо зображення в новому вікні або вкладці
    window.open(imageSrc, '_blank');
}