function addClass(obj, cls) {
    var classes = obj.className.split(' ');

    if (classes.indexOf(cls) === -1) {
        classes.push(cls);
    }

    obj.className = classes.join(' ');

    // Виведення результату на сторінку
    document.getElementById('result').innerHTML = obj.className;
}

// Приклад використання
let obj = {
    className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
