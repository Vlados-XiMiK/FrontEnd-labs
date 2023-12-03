function formatDate() {
    const inputDateElement = document.getElementById('inputDate');
    const resultElement = document.getElementById('result');


    const inputDateStr = inputDateElement.value.trim();


    const [day, month, year] = inputDateStr.split(/\.|\//);


    const parsedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);


    if (isNaN(parsedDate.getTime())) {
        resultElement.innerText = 'Введіть коректну дату!';
        return;
    }


    const currentDate = new Date();

    // Визначення різниці в днях між поточною датою та введеною датою
    const timeDiffInDays = Math.floor((currentDate - parsedDate) / (1000 * 60 * 60 * 24));


    if (timeDiffInDays === 0) {
        resultElement.innerText = 'Сьогодні';
    } else if (timeDiffInDays === 1) {
        resultElement.innerText = 'Вчора';
    } else if (timeDiffInDays >= 2 && timeDiffInDays <= 6) {
        resultElement.innerText = `${timeDiffInDays} дні тому`;
    } else if (timeDiffInDays === 7) {
        resultElement.innerText = 'Тиждень тому';
    } else if (currentDate.getFullYear() === parsedDate.getFullYear()) {
        resultElement.innerText = `${parsedDate.getDate().toString().padStart(2, '0')}.${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}.${parsedDate.getFullYear()}`;
    } else {
        resultElement.innerText = `${parsedDate.getFullYear()}.${(parsedDate.getMonth() + 1).toString().padStart(2, '0')}.${parsedDate.getDate().toString().padStart(2, '0')}`;
    }
}