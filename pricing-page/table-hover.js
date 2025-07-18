// pricing-page/table-hover.js

const table = document.getElementById('feature-table');

table.querySelectorAll('tbody td').forEach((td) => {
    td.addEventListener('mouseenter', () => {
        const cellIndex = td.cellIndex;
        if (cellIndex === 0 || cellIndex === undefined) return;

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row) => {
            const target = row.cells[cellIndex];
            if (target) target.classList.add('highlight-col');
        });
    });

    td.addEventListener('mouseleave', () => {
        const cellIndex = td.cellIndex;
        if (cellIndex === 0 || cellIndex === undefined) return;

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row) => {
            const target = row.cells[cellIndex];
            if (target) target.classList.remove('highlight-col');
        });
    });
});