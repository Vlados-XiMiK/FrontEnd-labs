class Student {
    constructor(firstName, lastName, mathGrade, historyGrade, geographyGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mathGrade = mathGrade;
        this.historyGrade = historyGrade;
        this.geographyGrade = geographyGrade;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = '<table border="1"><tr><th>Ім\'я</th><th>Прізвище</th><th>Математика</th><th>Історія</th><th>Географія</th><th>Середня оцінка</th></tr>';

        this.students.forEach(student => {
            const avg = this.calculateAverage([student.mathGrade, student.historyGrade, student.geographyGrade]);
            table += `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.mathGrade}</td><td>${student.historyGrade}</td><td>${student.geographyGrade}</td><td>${avg.toFixed(2)}</td></tr>`;
        });

        table += '</table>';
        return table;
    }

    calculateAverage(grades) {
        const sum = grades.reduce((acc, grade) => acc + parseInt(grade), 0);
        return sum / grades.length;
    }

    getAverageMessage() {
        const avg = this.calculateAverage(this.students.map(student => this.calculateAverage([student.mathGrade, student.historyGrade, student.geographyGrade])));

        return `Середня оцінка групи - ${avg.toFixed(2)}`;
    }
}

class StylesTable extends ListOfStudents {
    getStyles() {
        return 'table { border-collapse: collapse; width: 80%; margin: 20px; } th, td { border: 1px solid black; padding: 8px; text-align: center; }';
    }

    getTableList() {
        const parentTableList = super.getTableList();

        let tableWithStyles = `<style>${this.getStyles()}</style>${parentTableList}`;

        return tableWithStyles;
    }
}

// Створення об'єкту класу ListOfStudents
const students = [
    new Student('Іван', 'Іванов', 5, 5, 5),
    new Student('Петро', 'Петров', 4, 5, 5),
    new Student('Сидір', 'Сидоров', 4, 5, 5),
];

const list = new ListOfStudents(students);
document.getElementById("listTable").innerHTML = list.getTableList();
document.getElementById("listAverage").innerHTML = list.getAverageMessage();

// Створення об'єкту класу StylesTable
const styledList = new StylesTable(students);
document.getElementById("styledTable").innerHTML = styledList.getTableList();
document.getElementById("styledAverage").innerHTML = styledList.getAverageMessage();