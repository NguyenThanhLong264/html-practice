const card_area = document.getElementById('feature-cards')

features.forEach((item, itemIdx) => {
    const card_item = document.createElement('div')
    card_area.appendChild(card_item);
    card_item.id = toKebabCase(item.title)
    card_item.classList.add('card-item')

    if (item.marked) {
        card_item.classList.add('marked')
    }

    const card_main = createElementFromHTML(`<div class="card-main">
                            <div class="text">
                                <h4>${item.title}</h4>
                                <p class="subtitle">${item.description}</p>
                                <p class="money">${item.price}</p>
                                <p class="tiny-tag">${item.price_tag}</p>
                            </div>
                            <div class="btn">
                                <div class="button-wrapper">
                                    <button class="magic-btn">
                                        <span class="text current">${item.buy_btn_text}</span>
                                        <span class="text hover">${item.buy_btn_text}</span>
                                    </button>
                                </div>
                            </div>
                        </div>`)

    const listItems = item.keys.map((key, li_idx) => {
        return `
    <li class='openBtn-keys li-card' id='card_key-${itemIdx}-${li_idx}'>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 21 16" fill="currentColor">
          <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z"></path>
        </svg>
      </div>
      <div class="key-text">
          <span>
            <span class='key-label'>${key.title}</span>
            ${key.tag ? `
              <span class="new">
                <p>${key.tag}</p>
              </span>` : ''}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="key-icon-end">
              <path d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8"></path>
            </svg>
          </span>
      </div>
    </li>
  `;
    }).join('');


    const card_features = createElementFromHTML(`<div class="card-features">
                            <p class="title-med">${item.key_feature}</p>
                            <div class="list-features">
                            <ul>
                            ${listItems}
                            </ul> 
                            </div>
                            </div>`)

    card_item.appendChild(card_main);
    card_item.appendChild(card_features);
})

function toKebabCase(str) {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-')
        .replace(/^\-+|\-+$/g, '');
}

function createElementFromHTML(htmlString) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = htmlString.trim();
    return wrapper.firstElementChild;
}