document.querySelectorAll('.marked').forEach(item => {
    if (!item.querySelector('.marker')) {
        const marker = document.createElement('div');
        marker.classList.add('marker');
        marker.textContent = 'Most popular';
        item.appendChild(marker);
    }
});
