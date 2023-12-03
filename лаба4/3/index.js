function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

Dog.prototype.speak = function() {
    if (this.age < 1) {
        return 'Тяф'; // якщо вік собаки менше року
    } else if (this.age >= 1 && this.age <= 3) {
        return 'Гав'; // якщо вік собаки від року до 3
    } else {
        return 'Ррр'; // якщо вік собаки більше 3 років
    }
};

var dog1 = new Dog('Барон', 'Лабрадор', 2);
var dog2 = new Dog('Рекс', 'Німецька вівчарка', 4);
var dog3 = new Dog('Дейзі', 'Бішон фрізе', 0.5);

// Виведення результату на сторінку
document.getElementById('result').innerHTML =
    dog1.name + ': ' + dog1.speak() + '<br>' +
    dog2.name + ': ' + dog2.speak() + '<br>' +
    dog3.name + ': ' + dog3.speak();
