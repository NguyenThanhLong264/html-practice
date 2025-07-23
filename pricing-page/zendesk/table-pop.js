//pricing-page/zendesk/table-pop.js

function addClassToColumn(tableSelector, columnIndex, className) {
    const tables = document.querySelectorAll(`${tableSelector}`);

    tables.forEach(table => {
        if (table.closest(tableSelector) === table) {
            const th = table.querySelector(`thead th:nth-child(${columnIndex + 1})`);
            const innerDiv = th?.querySelector('.th-content');
            if (innerDiv) {
                innerDiv.classList.add('marked', 'pop');
            }
        }

        table.querySelectorAll(`tbody tr`).forEach(tr => {
            const tds = tr.querySelectorAll('td');
            if (!tr.classList.contains('parent-row') && tds.length > columnIndex) {
                tds[columnIndex].classList.add(className);
            }
        });
    });
}



window.addEventListener('DOMContentLoaded', () => {
    addClassToColumn('.com-table', 1, 'pop');
    document.querySelectorAll('.marked').forEach(item => {
        if (!item.querySelector('.marker')) {
            const marker = document.createElement('div');
            marker.classList.add('marker');
            marker.textContent = 'Most popular';
            item.appendChild(marker);
        }
    });

});

