document.querySelectorAll('.parent-row').forEach(row => {
    const button = row.querySelector('button.row-btn');
    if (button) {
        button.addEventListener('click', () => {
            row.classList.toggle('close');
        });
    }
});

document.querySelectorAll('.qt').forEach(qt => {
    const question = qt.querySelector('.qt .question');
    if (question) {
        question.addEventListener('click', () => {
            qt.classList.toggle('open');
        });
    }
});
