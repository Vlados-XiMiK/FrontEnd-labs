const cartItems = {};

function addToCart(productName) {
    if (cartItems[productName]) {
        cartItems[productName]++;
    } else {
        cartItems[productName] = 1;
    }

    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById('cartTable');
    const cartBody = document.getElementById('cartItems');
    cartBody.innerHTML = '';

    for (const productName in cartItems) {
        const quantity = cartItems[productName];

        const row = cartBody.insertRow();
        const cellProductName = row.insertCell(0);
        const cellQuantity = row.insertCell(1);

        cellProductName.textContent = productName;
        cellQuantity.textContent = quantity;
    }
}