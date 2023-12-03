let currentTask;
let score = 0;
let totalQuestions = 0;

function generateTask() {
    const operand1 = Math.floor(Math.random() * 9) + 1;
    const operand2 = Math.floor(Math.random() * 9) + 1;
    currentTask = { operand1, operand2, answer: operand1 * operand2 };

    document.getElementById('task').textContent = `Скільки буде ${operand1} * ${operand2}?`;
    document.getElementById('answerInput').value = '';
    totalQuestions++;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answerInput').value, 10);
    if (isNaN(userAnswer)) {
        alert('Будь ласка, введіть число.');
        return;
    }

    if (userAnswer === currentTask.answer) {
        score++;
        document.getElementById('result').textContent = 'Правильно!';
    } else {
        document.getElementById('result').textContent = `Неправильно. Правильна відповідь: ${currentTask.answer}`;
    }

    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    document.getElementById('score').textContent = `Загальний рахунок: ${percentage}% ( ${score} правильних відповідей з ${totalQuestions} )`;

    if (totalQuestions >= 10) {
        document.getElementById('score').textContent += ' - Готово!';
        document.getElementById('answerInput').disabled = true;
    }

    generateTask();
}

function nextTask() {
    document.getElementById('result').textContent = '';
    checkAnswer();
}

generateTask();