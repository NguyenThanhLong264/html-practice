const features = [
    {
        title: 'Call Center',
        description: 'Comprehensive call center system for all business communication needs.',
        price: '400.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Buy now',
        key_feature: 'Key feature',
        keys: [
            { title: 'Ticket - Case management', description: 'Nothing' },
            { title: 'Tính năng Email', description: 'Nothing' },
            { title: 'Tính năng SMS', description: 'Nothing' },
            { title: 'Tính năng tổng đài', description: 'Nothing' },
            { title: 'Tính năng outbound', description: 'Nothing' },
            { title: 'CRM', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Quality Assurance', description: 'Nothing' },
            { title: 'Mobile App', description: 'Nothing' }
        ],
        marked: false
    },
    {
        title: 'Contact Center',
        description: 'An omnichannel solution unifying Call Center, Chat, Facebook, OTT, SMS, and Email — fully integrated with CRM, ERP, POS, and eCommerce.',
        price: '660.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Buy now',
        key_feature: 'Key feature',
        keys: [
            {
                title: 'Ticket - Case management',
                description: 'Nothing'
            }
        ],
        marked: false
    }, {
        title: 'Smart Dialer',
        description: 'An advanced auto and semi-auto dialing solution that boosts agent productivity and reduces outbound call costs.',
        price: '600.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Contact us',
        key_feature: 'Key feature',
        keys: [
            {
                title: 'Ticket - Case management',
                description: 'Nothing'
            }
        ],
        marked: true
    }
]

const card_area = document.getElementById('feature-cards')

features.forEach(item => {
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

    const listItems = item.keys.map(key => {
        return `<li><span>${key.title}</span></li>`;
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