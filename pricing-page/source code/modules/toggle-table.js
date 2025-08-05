function toggleTable() {
    const tableToggles = document.querySelectorAll('.tr-header');

    tableToggles.forEach(row => {
        row.addEventListener('click', () => {
            const parentRow = row.closest('.main-tr');
            if (parentRow) {
                parentRow.classList.toggle('open');
            }
        });
    });
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
