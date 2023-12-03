document.addEventListener('DOMContentLoaded', function () {
    loadFormData();
});

function saveFormData() {
    var form = document.getElementById('myForm');
    var formData = {};

    // Збираємо дані з усіх елементів форми і зберігаємо їх у об'єкт
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        if (element.name) {
            if (element.type === 'checkbox' || element.type === 'radio') {
                formData[element.name] = element.checked;
            } else {
                formData[element.name] = element.value;
            }
        }
    }

    // Зберігаємо об'єкт з даними в localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
    var form = document.getElementById('myForm');
    var formData = localStorage.getItem('formData');

    if (formData) {
        formData = JSON.parse(formData);

        // Встановлюємо значення з localStorage в елементи форми
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];

            if (element.name && formData.hasOwnProperty(element.name)) {
                if (element.type === 'checkbox' || element.type === 'radio') {
                    element.checked = formData[element.name];
                } else {
                    element.value = formData[element.name];
                }
            }
        }
    }
}