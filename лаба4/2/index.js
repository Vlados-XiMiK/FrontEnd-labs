function removeMenuClass() {
    let obj = {
        className: 'open menu'
    };

    removeClass(obj, 'menu');
}

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    // Видалення класу cls з масиву класів
    var index = classes.indexOf(cls);
    if (index !== -1) {
        classes.splice(index, 1);
    }

    obj.className = classes.join(' ');

    // Виведення результату на сторінку
    document.getElementById('result').innerHTML = 'Стан після видалення класу ' + cls + ': ' + obj.className;
}
