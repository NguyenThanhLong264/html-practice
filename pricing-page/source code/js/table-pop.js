

function highlightPopularColumn(index) {
    const tables = Array.from(document.querySelectorAll('table.compare-table'))
        .filter(table => table.id !== 'main');

    const lastTable = tables[tables.length - 1];
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((tr, rowIndex) => {
            const cells = tr.children;
            if (cells[index]) {
                cells[index].classList.add('popular');
                if (table === lastTable && rowIndex === rows.length - 1) {
                    cells[index].classList.add('popular-bottom');
                }
            }
        });
    });
}

function highlightMainHeader(index) {
    const mainTable = document.querySelector('table.compare-table#main');
    if (!mainTable) return;
    const headerRow = mainTable.querySelector('thead tr');
    if (!headerRow) return;
    const th = headerRow.children[index];
    if (!th) return;
    th.classList.add('popular');

    const marker = document.createElement('span');
    marker.className = 'marker';

    const markerText = document.createElement('span');
    markerText.className = 'marker-text';
    markerText.textContent = 'Most popular';

    marker.appendChild(markerText);

    th.appendChild(marker);
}
{/* < span class="marker" ><span class="marker-text">Most popular</span></span > */ }
