function toggleTable() {
    const tableToggles = document.querySelectorAll('.tr-header');
    tableToggles.forEach(row => {
        row.addEventListener('click', () => {
            const parentRow = row.closest('.td-open-content');
            if (parentRow) {
                parentRow.classList.toggle('open');
            }
        });
    });
};

// function toggleFaq() {
const faqToggles = document.querySelectorAll('.ques-heading');
faqToggles.forEach(row => {
    row.addEventListener('click', () => {
        const parentRow = row.closest('.ques-li');
        if (parentRow) {
            parentRow.classList.toggle('open');
        }
    });
});
// }

// function toggleMobileNav() {
const toggleBtn = document.querySelector('.m-nav-toggle-menu');
const menu = document.getElementById('menu')
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open')
})

document.addEventListener('click', (e) => {
    if (menu.classList.contains('open')
        && !menu.contains(e.target)
        && !toggleBtn.contains(e.target)) {
        menu.classList.remove('open');
    }
});
// }