function toggleTable() {
    const tableToggles = document.querySelectorAll('.tr-header');
    tableToggles.forEach(row => {
        row.addEventListener('click', () => {
            const parentRow = row.closest('.open-td');
            if (parentRow) {
                parentRow.classList.toggle('open');
            }
        });
    });
};
function toggleFaq() {
    const faqToggles = document.querySelectorAll('.ques-heading');
    faqToggles.forEach(row => {
        row.addEventListener('click', () => {
            const parentRow = row.closest('.ques-li');
            if (parentRow) {
                parentRow.classList.toggle('open');
            }
        });
    });
}

function toggleMobileNav() {
    const toggleBtn = document.querySelector('.m-nav-toggle-menu');
    toggleBtn.addEventListener('click', () => {
        const menu = document.getElementById('menu')
        menu.classList.toggle('open')
    })
}