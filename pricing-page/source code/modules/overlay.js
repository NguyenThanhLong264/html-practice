const overlay = document.querySelector('.overlay');

function setupOverlay() {
    document.querySelectorAll('.openForm').forEach(button => {
        button.addEventListener('click', () => {
            toggleOverlay();
        })
    })

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