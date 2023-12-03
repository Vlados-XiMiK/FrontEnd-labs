function displayTextWithFontSize(text, fontSize) {

    var outputDiv = document.getElementById('output');


    var spanElement = document.createElement('span');


    spanElement.style.fontSize = fontSize;


    spanElement.textContent = text;


    outputDiv.appendChild(spanElement);


    outputDiv.appendChild(document.createElement('br'));
}

displayTextWithFontSize('Це текст зі шрифтом розміром 16px', '16px');
displayTextWithFontSize('Це текст зі шрифтом розміром 24px', '24px');
displayTextWithFontSize('Це текст зі шрифтом розміром 32px', '32px');
