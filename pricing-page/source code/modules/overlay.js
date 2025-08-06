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

    if (overlay.classList.contains('open')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}