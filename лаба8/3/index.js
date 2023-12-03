let currentTask;
let score = 0;
let totalQuestions = 0;

function generateTask() {
    if (totalQuestions >= 10) {
        // Максимальна кількість питань досягнута
        alert('Ви вже відповіли на максимальну кількість питань.');
        return;
    }

    const operand1 = Math.floor(Math.random() * 9) + 1;
    const operand2 = Math.floor(Math.random() * 9) + 1;
    currentTask = { operand1, operand2, answer: operand1 * operand2 };

    const answerOptions = [];
    for (let i = 0; i < 3; i++) {
        const option = Math.floor(Math.random() * 9) + 1;
        answerOptions.push(option);
    }
    answerOptions.push(currentTask.answer);
    answerOptions.sort(() => Math.random() - 0.5);

    const answersForm = document.getElementById('answersForm');
    answersForm.innerHTML = '';

    answerOptions.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${option}`));
        answersForm.appendChild(label);
    });

    document.getElementById('task').textContent = `Скільки буде ${operand1} * ${operand2}?`;
    totalQuestions++;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Будь ласка, виберіть вірний варіант відповіді.');
        return;
    }

    const userAnswer = parseInt(selectedAnswer.value, 10);
    if (userAnswer === currentTask.answer) {
        score++;
        document.getElementById('result').textContent = 'Правильно!';
    } else {
        document.getElementById('result').textContent = `Неправильно. Правильна відповідь: ${currentTask.answer}`;
    }

    const percentCorrect = (score / totalQuestions) * 100;
    document.getElementById('score').textContent = `Загальний рахунок: ${percentCorrect.toFixed(2)}% (${score} правильних відповідей з ${totalQuestions})`;

    document.getElementById('answersForm').reset();
    generateTask();
}

function nextTask() {
    document.getElementById('result').textContent = '';
    checkAnswer();
}

generateTask();