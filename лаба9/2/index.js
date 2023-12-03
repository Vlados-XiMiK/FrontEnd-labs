const formSections = document.querySelectorAll('section');

formSections.forEach(section => {
    const inputElements = section.querySelectorAll('input, textarea');

    inputElements.forEach(input => {
        input.addEventListener('focus', () => {
            formSections.forEach(s => s.classList.remove('active'));
            section.classList.add('active');
        });
    });
});