const row_area = document.querySelector('.com-table tbody')

const withoutTitle = plans.filter(item => item.title === null);
const withTitle = plans.filter(item => item.title !== null);

let currentMode = window.innerWidth <= 850 ? 'mobile' : 'desktop';
window.addEventListener('resize', () => {
    const newMode = window.innerWidth <= 850 ? 'mobile' : 'desktop';
    if (newMode !== currentMode) {
        currentMode = newMode;
        rerenderBasedOnMode();
    }
});
rerenderBasedOnMode();

function rerenderBasedOnMode() {
    if (currentMode === 'mobile') {
        const select = document.getElementById('customSelect');
        const selectedText = select.querySelector('.selected');
        const options = select.querySelectorAll('.option');
        if (!select.dataset.value && options.length > 0) {
            const defaultOption = options[0];
            select.dataset.value = defaultOption.dataset.value;
            selectedText.textContent = defaultOption.textContent;
        }
        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                const text = option.textContent;
                select.dataset.value = value;
                selectedText.textContent = text;
                select.classList.remove('open');
                updateMobilePlans();
            });
        });
        function updateMobilePlans() {
            const currentValue = select.dataset.value;
            // console.log('Đã chọn:', currentValue);

            const mobile_plans = filterPlanData(currentValue);
            const withoutTitle = mobile_plans.filter(item => item.title === null);
            const withTitle = mobile_plans.filter(item => item.title !== null);

            const t1 = createFlatRows(withoutTitle);
            const t2 = createExpandableRows(withTitle);

            row_area.innerHTML = t1 + t2;
        }
        updateMobilePlans();
    }
    else {
        const withoutTitle = plans.filter(item => item.title === null);
        const withTitle = plans.filter(item => item.title !== null);
        const t1 = createFlatRows(withoutTitle);
        const t2 = createExpandableRows(withTitle);
        row_area.innerHTML = t1 + t2;
    }
}

function createFlatRows(withoutTitle) {
    return withoutTitle.map(item =>
        item.rows.map(row =>
            `<tr>${row.map(renderCell).join('')}</tr>`
        ).join('')
    ).join('');
}

function createExpandableRows(withTitle) {
    return withTitle.map(item =>
        `<tr class="parent-row">
            <td colspan="${item.rows[0].length}">
                <div class="row-btn">
                    <button class="row-btn">
                        ${item.title}
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="table-inner">
                    <table>
                        <tbody>
                            ${item.rows.map(row =>
            `<tr>${row.map(renderCell).join('')}</tr>`
        ).join('')}
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>`
    ).join('');
}

function renderCell(cell) {
    if (cell === true) {
        return `<td>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
            </svg>
        </td>`;
    } else if (cell === false) {
        return `<td>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
            </svg>
        </td>`;
    } else {
        return `<td>${cell}</td>`;
    }
}

function filterPlanData(indexStr) {
    const index = parseInt(indexStr);

    return plans.map(item => ({
        title: item.title,
        rows: item.rows.map(row => [row[0], row[index]])
    }));
}

