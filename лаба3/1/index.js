function unique(arr) {
    return [...new Set(arr)];
}

let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];

// Використовуємо document.write для виведення результату на сторінку
document.write('<p>' + unique(strings).join(', ') + '</p>');