const planSection = document.querySelector('.plans')
const planContainer = planSection.querySelector('.container')


function displayAddOns() {
    const addOnsArray = []
    document.querySelectorAll('part-wrapper', 'add-ons').innerHTML = "";
    add_ons.forEach((addOn, addOnIndex) => {
        const addOnWrapper = document.createElement('div')
        addOnWrapper.classList.add('add-on-wrapper')
        const addOnCard = document.createElement('div');
        addOnCard.classList.add('add-on-card');

        addOnWrapper.appendChild(addOnCard);

        addOnCard.innerHTML = `
        <span class="tag">
            <span class="tag-text">${addOn.isNew}</span>
        </span>
        <h4 class="col-title">${addOn.name}</h4>
        <p class="head-text">${addOn.price}</p>
        <p class="normal-text">${addOn.description}</p>
        <ul class="feature-li">
        ${addOn.features.map(fea => `
            <li class="li-features">
                <div class="li-initial-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16"
                        viewBox="0 0 21 16" fill="currentColor">
                        <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z">
                        </path>
                    </svg>
                </div>
                <div class="li-content">
                    <div class="li-a">
                        <span class="">
                            <span class="li-text">
                                ${fea.title}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 16 16" fill="currentColor" class="search-icon-li">
                                <path
                                    d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            </li>
            `).join('')}
        </ul>
        <p class="normal-text">${addOn.bottomText}</p>
        <button class="secondary-btn openForm">
            <span class="btn-text-bg">
                <span class="btn-span">
                    <span class="i-text">${addOn.btnText}</span>
                    <span class="af-text">${addOn.btnText}</span>
                </span>
            </span>
        </button>
`
        addOnsArray.push(addOnWrapper)
    })

    addOnsArray.forEach((addOn, index) => {
        if (index % 2 === 0) {
            const partWrapper = document.createElement('div');
            partWrapper.classList.add('part-wrapper', 'add-ons');


            partWrapper.appendChild(addOnsArray[index]);

            if (addOnsArray[index + 1]) {
                partWrapper.appendChild(addOnsArray[index + 1]);
            }

            const lastChild = planContainer.lastElementChild;

            if (lastChild && lastChild.classList.contains('part-wrapper') && lastChild.classList.contains('cta')) {
                planContainer.insertBefore(partWrapper, lastChild);
            } else {
                planContainer.appendChild(partWrapper);
            }
        }
    });
}