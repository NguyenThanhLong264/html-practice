const overlay = document.querySelector('.overlay');

function setupOverlay() {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            toggleOverlay();
        }
    })
}

function toggleOverlay() {
    overlay.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
}