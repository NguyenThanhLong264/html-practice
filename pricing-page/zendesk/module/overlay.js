const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

function hideAllContent() {
    document.querySelectorAll('.modal-section').forEach(el => el.classList.remove('active'));
}

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        hideAllContent();
    }
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    hideAllContent();
});