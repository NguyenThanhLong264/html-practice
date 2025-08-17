const mainTableRows = ['Call Center', 'Contact Center', 'Omni-Channel CRM']
const mainTable = document.getElementById('main')

const tableHead = document.createElement('thead');
tableHead.classList.add('table-header');

const headRow = document.createElement('tr');
headRow.classList.add('header-row')

const mainBody = document.getElementById('mainBody');

function laptopTable() {
    mainBody.innerHTML = '';
    headRow.innerHTML = '';
    tableHead.classList.remove('mobile');
    mainTableRows.forEach(text => {
        const th = document.createElement('th');
        th.innerHTML = `<p class="head-text">${text}</p>`
        headRow.appendChild(th);
    });

    tableHead.appendChild(headRow);
    mainTable.insertBefore(tableHead, mainTable.firstChild);

    const nonOpen = plans.filter(plan => plan.title === null);
    const noOpenRow = document.createElement('tr')
    noOpenRow.classList.add('main-tr', 'no-ex');
    noOpenRow.innerHTML = ` 
    <td class="no-ex-td">
        <table class="compare-table">
            <tbody class="main-body"></tbody>
        </table>
    </td>`;
    const noOpenRowTable = noOpenRow.querySelector('tbody');
    nonOpen.forEach((item) => {
        noOpenRowTable.innerHTML = '';
        item.rows.forEach((row) => {
            const tds = row.map(cell => `
            <td class="main-td">
                <p class="normal-text">${cell}</p>
            </td>
        `).join('');
            const tr = document.createElement('tr');
            tr.classList.add('sub-tr');
            tr.innerHTML = tds;
            noOpenRowTable.appendChild(tr);
        });
    });
    mainBody.appendChild(noOpenRow);

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
        td.classList.add('open-td', 'open');
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
        const trContent = td.querySelector('.tr-content');
        trContent.appendChild(smallTable);

        tr.appendChild(td);
        mainBody.appendChild(tr);
    });

    changeWidthByCols();
}

function mobileTable() {
    mainBody.innerHTML = '';
    headRow.innerHTML = '';

    let currentPlanIdx = 0
    renderTableByIndex(currentPlanIdx + 1)
    tableHead.classList.add('mobile');
    const th = document.createElement('th');
    const selectedText = mainTableRows[currentPlanIdx] ?? 'Chọn gói'; // fallback nếu rỗng
    th.innerHTML = `
    <div class="mobile-thead">
      <h3>Plans</h3>
      <div class="custom-select" id="customSelect">
        <div class="select-trigger">
          <span class="selected">${selectedText}</span>
          <span class="arrow">▾</span>
        </div>
      </div>
    </div>
  `;
    const selectBox = th.querySelector('.custom-select');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    mainTableRows.forEach((text, index) => {
        const option = document.createElement('div');
        option.className = 'option';
        option.dataset.value = index;
        option.textContent = text;
        optionsDiv.appendChild(option);
    });
    selectBox.appendChild(optionsDiv);
    headRow.appendChild(th);
    tableHead.appendChild(headRow);
    mainTable.insertBefore(tableHead, mainTable.firstChild);

    const selected = selectBox.querySelector('.selected');
    const selectTrigger = selectBox.querySelector('.select-trigger');

    optionsDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('option')) {
            const index = Number(e.target.dataset.value);
            currentPlanIdx = index;
            selected.textContent = e.target.textContent;
            optionsDiv.style.display = 'none';
            renderTableByIndex(currentPlanIdx + 1);
            toggleTable();
        }
    });

    selectTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = optionsDiv.style.display === 'block';
        optionsDiv.style.display = isOpen ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        optionsDiv.style.display = 'none';
    });
    replaceIcon();
}

function renderTableByIndex(index) {
    mainBody.innerHTML = '';
    const nonOpen = plans.filter(plan => plan.title === null);
    const noOpenRow = document.createElement('tr')
    noOpenRow.classList.add('main-tr', 'no-ex');
    noOpenRow.innerHTML = ` 
    <td class="no-ex-td">
        <table class="compare-table">
            <tbody class="main-body"></tbody>
        </table>
    </td>`;
    const noOpenRowTable = noOpenRow.querySelector('tbody');
    nonOpen.forEach((item) => {
        noOpenRowTable.innerHTML = '';
        item.rows.forEach((row) => {
            const labelCell = row[0] ?? '';
            const valueCell = row[index] ?? '-';
            const tds = `
                <td class="main-td">
                    <p class="normal-text">${labelCell}</p>
                </td>
                <td class="main-td">
                    <p class="normal-text">${valueCell}</p>
                </td>
            `;
            const tr = document.createElement('tr');
            tr.classList.add('sub-tr');
            tr.innerHTML = tds;
            noOpenRowTable.appendChild(tr);
        });
    });
    mainBody.appendChild(noOpenRow);

    const openPlans = plans.filter(plan => plan.title !== null);
    openPlans.forEach((plan) => {
        const smallTable = document.createElement('table');
        smallTable.className = 'compare-table';

        plan.rows.forEach((row) => {
            const subTr = document.createElement('tr');
            subTr.className = 'sub-tr';

            [0, index].forEach(i => {
                const cell = row[i];
                const td = document.createElement('td');
                td.className = 'main-td';

                const p = document.createElement('p');
                p.className = 'normal-text';
                p.textContent = cell ?? '';

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
        const trContent = td.querySelector('.tr-content');
        trContent.appendChild(smallTable);

        tr.appendChild(td);
        mainBody.appendChild(tr);
        replaceIcon();
    });
}

function replaceIcon() {
    const iconCheck = `
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="16"
                                                viewBox="0 0 21 16" fill="currentColor">
                                                <path
                                                    d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z">
                                                </path>
                                            </svg>`;

    const iconCross = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                    d="m2 13.964 12.021-12.02" vector-effect="non-scaling-stroke">
                                                </path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                    d="m2.098 1.998 12.02 12.021" vector-effect="non-scaling-stroke">
                                                </path>
                                            </svg>`;
    document.querySelectorAll('.main-td .normal-text').forEach(p => {
        const text = p.textContent.trim().toLowerCase();

        if (text === 'true') {
            p.innerHTML = iconCheck;
        } else if (text === 'false') {
            p.innerHTML = iconCross;
        }
    });
    // toggleTable();
}

function changeWidthByCols() {
    const colWidth = `${65 / mainTableRows.length}%`;
    const ths = headRow.querySelectorAll(':scope > th'); // chỉ th con trực tiếp
    const tds = document.querySelectorAll('.main-td')

    tds.forEach(td => {
        const currentFlexGrow = parseFloat(getComputedStyle(td).flexGrow);
        if (currentFlexGrow !== 1) {
            td.style.flex = `0 0 ${colWidth}`;
        }
    });

    ths.forEach(th => {
        th.style.width = colWidth;
    });
}