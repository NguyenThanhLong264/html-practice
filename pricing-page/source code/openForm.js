const btnsOpen = document.querySelectorAll('.btn-open-form');
const popup = document.getElementById('popupOverlay');
const btnClose = document.getElementById('btnClosePopup');
const form = document.getElementById('contactForm');

btnsOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

// Đóng khi click ra ngoài popup
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Có thể thêm logic gửi dữ liệu về server tại đây
    alert("Thông tin đã được gửi! Cảm ơn bạn.");

    form.reset();
    popup.style.display = 'none';
});