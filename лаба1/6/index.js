function findSum() {
    var numbers = [];
    var input;

    do {
        input = parseFloat(prompt('Введіть число (введення 0 завершить обчислення):'));

        if (!isNaN(input)) {
            numbers.push(input);
        } else {
            alert('Будь ласка, введіть коректне число.');
        }

    } while (input !== 0);

    var sum = numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);

    alert('Сума введених чисел: ' + numbers.join(' + ') + ' = ' + sum);
}
findSum();