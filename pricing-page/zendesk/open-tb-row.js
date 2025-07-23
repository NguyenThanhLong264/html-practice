document.querySelectorAll('.parent-row').forEach(row => {
    const button = row.querySelector('button.row-btn');
    if (button) {
        button.addEventListener('click', () => {
            row.classList.toggle('close');
        });
    }
});
