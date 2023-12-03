const textarea = document.getElementById("text-area");
const historyButtons = document.getElementById("history-buttons");
const MAX_HISTORY = 10; // Максимальна кількість елементів в історії

// Завантаження тексту та історії при завантаженні сторінки
window.onload = function () {
    loadText();
    loadHistory();
};

// Збереження тексту при введенні
function saveText() {
    const text = textarea.value;
    document.cookie = `text=${encodeURIComponent(text)}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
    saveHistory(text);
}

// Завантаження тексту
function loadText() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'text') {
            textarea.value = decodeURIComponent(value);
            break;
        }
    }
}

// Збереження історії
function saveHistory(text) {
    let history = getHistory();
    if (!history) {
        history = [];
    }

    if (history.length >= MAX_HISTORY) {
        history.shift(); // Видалення першого елементу, якщо історія перевищує ліміт
    }

    history.push(text);
    document.cookie = `history=${encodeURIComponent(JSON.stringify(history))}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
    updateHistoryButtons();
}

// Завантаження історії
function loadHistory() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'history') {
            const history = JSON.parse(decodeURIComponent(value));
            if (history && history.length > 0) {
                historyButtons.style.display = 'flex'; // Показуємо стрілки тільки якщо історія не порожня
            }
            updateHistoryButtons();
            break;
        }
    }
}

// Отримання історії
function getHistory() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'history') {
            return JSON.parse(decodeURIComponent(value));
        }
    }
    return null;
}

// Переміщення по історії
function moveHistory(direction) {
    const history = getHistory();
    if (history) {
        let currentIndex = history.indexOf(textarea.value);
        if (currentIndex === -1) {
            currentIndex = history.length;
        }

        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < history.length) {
            textarea.value = history[newIndex];
            saveText();
        }
    }
}

// Оновлення стану кнопок історії
function updateHistoryButtons() {
    const history = getHistory();
    const currentIndex = history ? history.indexOf(textarea.value) : -1;
    document.querySelector("#history-buttons button:first-child").disabled = currentIndex <= 0;
    document.querySelector("#history-buttons button:last-child").disabled = currentIndex === history.length - 1;
}