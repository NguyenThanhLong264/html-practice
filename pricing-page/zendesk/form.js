const openBtns = document.querySelectorAll('[class*="openBtn-"]');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

const form = document.getElementById('myForm');
const statusMessage = document.getElementById('statusMessage');

const formContent = document.getElementById('formContent');
const featuresContent = document.getElementById('features'); // Dành cho phần mở rộng

let formState = 'normal';

function hideAllContent() {
    document.querySelectorAll('.modal-section').forEach(el => el.classList.remove('active'));
}

// console.log("q", openBtns);

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        document.body.classList.add('no-scroll');
        overlay.classList.remove('hidden');
        hideAllContent();

        if (btn.classList.contains('openBtn-form')) {
            formContent.classList.add('active');
            formState = 'normal';
        }
        if (btn.classList.contains('openBtn-keys')) {
            featuresContent.classList.add('active')
        }
    });
});

// Click nền overlay để đóng
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        hideAllContent();
    }
});

// Click nút đóng
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    hideAllContent();
});

// Gửi form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formState = 'loading';
    statusMessage.textContent = 'Đang gửi...';

    setTimeout(() => {
        formState = 'submitted';
        statusMessage.textContent = 'Gửi thành công!';
    }, 2000);
});
