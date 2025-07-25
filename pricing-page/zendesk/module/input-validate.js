const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });
});