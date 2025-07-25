const customSelect = document.getElementById('customSelect');
const trigger = customSelect.querySelector('.select-trigger');
const options = customSelect.querySelectorAll('.option');
const selected = customSelect.querySelector('.selected');

trigger.addEventListener('click', () => {
    customSelect.classList.toggle('open');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        customSelect.dataset.value = option.dataset.value;
        customSelect.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('open');
    }
});
