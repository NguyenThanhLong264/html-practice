const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        Array.from(overlay.children).forEach(child => {
            child.style.display = 'none';
        });
        toggleOverlay();
    }
})

function toggleOverlay() {
    overlay.classList.toggle('open');
    // if (overlay.classList.contains('open')) {
    //     document.body.classList.add('no-scroll');
    // } else {
    //     document.body.classList.remove('no-scroll');
    // }
}