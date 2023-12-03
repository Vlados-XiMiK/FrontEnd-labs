var session = [
    { discipline: 'Математика', points: 75, passed: true },
    { discipline: 'Фізика', points: 60, passed: true },
    { discipline: 'Хімія', points: 45, passed: false },

];

// Функція виведення списку дисциплін
function displayDisciplines() {
    var passedDisciplines = [];
    var failedDisciplines = [];

    for (var i = 0; i < session.length; i++) {
        var discipline = session[i];
        if (discipline.passed) {
            passedDisciplines.push(discipline.discipline);
        } else {
            failedDisciplines.push(discipline.discipline);
        }
    }

    var result = passedDisciplines.concat(failedDisciplines);

    // Виведення результату на сторінку
    document.write('<p>Список дисциплін: ' + result.join(', ') + '</p>');
}

// Функція додавання дисципліни
function addDiscipline(name, points) {
    var existingDiscipline = session.find(function (discipline) {
        return discipline.discipline === name;
    });

    if (existingDiscipline) {
        existingDiscipline.points += points;
        if (existingDiscipline.points >= 60) {
            existingDiscipline.passed = true;
        }
    } else {
        var newDiscipline = {
            discipline: name,
            points: points,
            passed: points >= 60,
        };
        session.push(newDiscipline);
    }
}

// Функція знаходження середнього балу
function averagePoints() {
    var totalPoints = 0;

    for (var i = 0; i < session.length; i++) {
        totalPoints += session[i].points;
    }

    return totalPoints / session.length;
}

// Функція знаходження кількості незарахованих дисциплін
function countFailedDisciplines() {
    var count = 0;

    for (var i = 0; i < session.length; i++) {
        if (!session[i].passed) {
            count++;
        }
    }

    return count;
}

// Функція знаходження дисципліни з найвищим балом
function highestPointsDiscipline() {
    var highestPoints = 0;
    var highestDiscipline = null;

    for (var i = 0; i < session.length; i++) {
        if (session[i].points > highestPoints) {
            highestPoints = session[i].points;
            highestDiscipline = session[i].discipline;
        }
    }

    return highestDiscipline;
}

// Функція виведення дисциплін за кількість балів
function displayDisciplinesByPoints(points) {
    var passedDisciplines = [];

    for (var i = 0; i < session.length; i++) {
        if (session[i].points >= points) {
            passedDisciplines.push(session[i].discipline);
        }
    }

    // Виведення результату на сторінку
    document.write('<p>Дисципліни з балами більше або рівні ' + points + ': ' + passedDisciplines.join(', ') + '</p>');
}

// Виклик функцій для виведення результатів на сторінку
displayDisciplines();
addDiscipline('Інформатика', 80);
document.write('<p>Середній бал: ' + averagePoints() + '</p>');
document.write('<p>Кількість незарахованих дисциплін: ' + countFailedDisciplines() + '</p>');
document.write('<p>Дисципліна з найвищим балом: ' + highestPointsDiscipline() + '</p>');
displayDisciplinesByPoints(60);