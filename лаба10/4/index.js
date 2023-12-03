function editBlock(button) {
    const block = button.parentElement;
    const paragraph = block.querySelector('p');
    const textarea = document.createElement('textarea');
    textarea.value = paragraph.textContent;
    block.insertBefore(textarea, paragraph);
    paragraph.style.display = 'none';


    textarea.addEventListener('blur', () => {
        paragraph.textContent = textarea.value;
        textarea.remove();
        paragraph.style.display = 'block';
    });


    textarea.focus();
}

function deleteBlock(button) {
    const block = button.parentElement;
    block.remove();
}