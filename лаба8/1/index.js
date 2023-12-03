function displaySelectedValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const resultElement = document.getElementById('result');

    if (checkboxes.length > 0) {
        const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
        resultElement.innerHTML = `Обрані елементи: ${selectedValues.join(', ')}`;
    } else {
        resultElement.innerHTML = 'Нічого не обрано.';
    }
}