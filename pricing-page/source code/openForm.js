const btnOpen = document.querySelector('.btn-open-form');
const popup = document.getElementById('popupOverlay');
const btnClose = document.getElementById('btnClosePopup');
const form = document.getElementById('contactForm');

btnOpen.addEventListener('click', () => {
    popup.style.display = 'flex';
});

btnClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Đóng khi click ra ngoài popup
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Có thể thêm logic gửi dữ liệu về server tại đây
    alert("Thông tin đã được gửi! Cảm ơn bạn.");

    form.reset();
    popup.style.display = 'none';
});