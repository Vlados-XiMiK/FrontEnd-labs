function createHeaders() {

    var N = prompt('Введіть кількість заголовків (ціле додатнє число):');


    N = parseInt(N);
    if (!Number.isInteger(N) || N <= 0) {
        alert('Будь ласка, введіть коректне ціле додатнє число.');
        return;
    }


    for (var i = 1; i <= N; i++) {
        var headerElement = document.createElement('h2');
        headerElement.textContent = 'Header' + i;
        document.body.appendChild(headerElement);
    }
}


createHeaders();
