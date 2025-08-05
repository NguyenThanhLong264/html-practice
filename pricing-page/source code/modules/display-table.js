const mainTableRows = ['Suite', 'Suite plans', 'Suit']
const mainTable = document.getElementById('main')
const tableHead = document.createElement('thead');
tableHead.classList.add('table-header');
const headRow = document.createElement('tr');
headRow.classList.add('header-row')

const mainBody = document.getElementById('mainBody');

const noOpenRow = document.getElementById('noOpenRow')
const noOpenRowTable = noOpenRow.querySelector('tbody');

function laptopTable() {
    headRow.innerHTML = '';
    mainTableRows.forEach(text => {
        const th = document.createElement('th');
        th.innerHTML = `<p class="head-text">${text}</p>`
        headRow.appendChild(th);
    });
    console.log('tableHead', headRow);

    tableHead.appendChild(headRow);
    mainTable.insertBefore(tableHead, mainTable.firstChild);

    const nonOpen = plans.filter(plan => plan.title === null);
    nonOpen.forEach((item) => {
        item.rows.forEach((row) => {
            const tds = row.map(cell => `
            <td class="main-td">
                <p class="normal-text">${cell}</p>
            </td>
        `).join('');
            const tr = document.createElement('tr');
            tr.classList.add('sub-tr');
            tr.innerHTML = tds;
            noOpenRowTable.innerHTML = '';
            noOpenRowTable.appendChild(tr);
        });
    });

    const openPlans = plans.filter(plan => plan.title !== null);
    openPlans.forEach((plan) => {
        const smallTable = document.createElement('table');
        smallTable.className = 'compare-table';

        plan.rows.forEach((row) => {
            const subTr = document.createElement('tr');
            subTr.className = 'sub-tr';

            row.forEach(cell => {
                const td = document.createElement('td');
                td.className = 'main-td';

                const p = document.createElement('p');
                p.className = 'normal-text';
                p.textContent = cell;

                td.appendChild(p);
                subTr.appendChild(td);
            });

            smallTable.appendChild(subTr);
        });

        const tr = document.createElement('tr');
        tr.className = 'main-tr';

        const td = document.createElement('td');
        td.className = 'open-td';

        td.innerHTML = `
        <div class="td-open-content">
            <div class="tr-header">
                <button class="open-table-btn">
                    <h3 class="open-text">${plan.title}</h3>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="m19.352 9.218-7.366 7.366-7.338-7.338L5.85 8.044l6.136 6.136 6.164-6.164z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="tr-content"></div>
        </div>
    `;

        // Thêm smallTable vào div.tr-content
        const trContent = td.querySelector('.tr-content');
        trContent.appendChild(smallTable);

        tr.appendChild(td);
        mainBody.appendChild(tr);
    });

}
