const openBtns = document.querySelectorAll('.openBtn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('myForm');
const statusMessage = document.getElementById('statusMessage');

let formState = 'normal';

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        formState = 'normal';
        statusMessage.textContent = '';
        document.body.classList.add('no-scroll');
    });
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formState = 'loading';
    statusMessage.textContent = 'Đang gửi...';

    setTimeout(() => {
        formState = 'submitted';
        statusMessage.textContent = 'Gửi thành công!';
    }, 2000);
});


const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });
});