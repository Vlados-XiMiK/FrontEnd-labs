function calculateBurgers() {
    var walletMoney = parseFloat(document.getElementById('walletMoney').value);
    var burgerPrice = parseFloat(document.getElementById('burgerPrice').value);

    if (isNaN(walletMoney) || isNaN(burgerPrice) || walletMoney < 0 || burgerPrice <= 0) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть коректні числові значення.';
    } else {
        var numberOfBurgers = Math.floor(walletMoney / burgerPrice);
        var change = walletMoney % burgerPrice;

        var resultMessage = 'Ви можете купити ' + numberOfBurgers + ' бургерів.<br>Здача: ' + change.toFixed(2) + ' грн.';
        document.getElementById('result').innerHTML = resultMessage;
    }
}