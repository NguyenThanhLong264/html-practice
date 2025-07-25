const openFormBtns = document.querySelectorAll('.openBtn-form');

const form = document.getElementById('myForm');
const formContent = document.getElementById('formContent');

openFormBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.add('no-scroll');
        overlay.classList.remove('hidden');
        hideAllContent();
        formContent.classList.add('active');
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
        console.log("Send Complete");
    }, 2000);
});