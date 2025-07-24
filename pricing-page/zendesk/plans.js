const plan_data = [
    {
        title: null,
        rows: [
            ['Infrastructure survey, implementation, training (1st time)',
                '2.000.000 VNĐ',
                'Contact',
                '2.000.000 VNĐ']
        ]
    },
    {
        title: null,
        rows: [
            ['Add ticket-only users (/user/month)',
                '125.000 VNĐ',
                'Contact',
                '125.000 VNĐ',]
        ]
    },
    {
        title: 'Live chat',
        rows: [
            ['Number of concurrent chats', false, false, 'Unlimited'],
            ['Chat Rating', false, false, true]
        ]
    },
    {
        title: 'Live chat',
        rows: [
            ['Number of concurrent chats', false, false, 'Unlimited'],
            ['Chat Rating', false, false, true]
        ]
    },
]

const row_area = document.querySelector('.com-table tbody')

const withoutTitle = plan_data.filter(item => item.title === null);
const withTitle = plan_data.filter(item => item.title !== null);

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
            <td colspan="4">
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

const t1 = createFlatRows(withoutTitle);
const t2 = createExpandableRows(withTitle);

row_area.innerHTML = t1 + t2;

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

if (window.innerWidth <= 768) {
    const select = document.getElementById('plans');

    function updateMobilePlans() {
        const currentValue = select.value;
        const mobile_plans = filterPlanData(currentValue);

        const withoutTitle = mobile_plans.filter(item => item.title === null);
        const withTitle = mobile_plans.filter(item => item.title !== null);

        const t1 = createFlatRows(withoutTitle);
        const t2 = createExpandableRows(withTitle);

        row_area.innerHTML = t1 + t2;
    }

    updateMobilePlans();

    select.addEventListener('change', updateMobilePlans);
}

function filterPlanData(indexStr) {
    const index = parseInt(indexStr);

    return plan_data.map(item => ({
        title: item.title,
        rows: item.rows.map(row => [row[0], row[index]])
    }));
}
