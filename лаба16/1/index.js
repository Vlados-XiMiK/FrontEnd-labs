document.getElementById('loadImages').addEventListener('click', loadDogImages);

function loadDogImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Очистимо галерею перед завантаженням нових фотографій.

    // Запит до API для отримання фотографій собак.
    fetch('https://dog.ceo/api/breeds/image/random/5')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Відображення фотографій у галереї.
                data.message.forEach(imgUrl => {
                    const img = document.createElement('img');
                    img.src = imgUrl;
                    img.addEventListener('click', () => openImage(imgUrl));
                    gallery.appendChild(img);
                });
            } else {
                console.error('Не вдалося отримати фотографії собак.');
            }
        })
        .catch(error => console.error('Помилка запиту до API:', error));
}

function openImage(imgUrl) {
    // В цьому місці можна додати код для відкриття фотографії в повному розмірі або інші дії.
    console.log('Відкрито фотографію:', imgUrl);
}