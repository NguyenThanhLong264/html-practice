const featuresArea = document.querySelector('.plan-content-wrapper')

function renderLaptopLayout(features) {
    const existing = featuresArea.querySelector('.feature-content.card');
    if (existing) existing.remove();
    const featureContent = document.createElement('div');
    featureContent.className = 'feature-content card';

    const contentFlex = document.createElement('div');
    contentFlex.className = 'content-flex';

    featureContent.appendChild(contentFlex);
    featuresArea.appendChild(featureContent);

    // Render từng feature-col
    features.forEach((fea) => {
        const featureCol = document.createElement('div');
        featureCol.className = 'feature-col';

        featureCol.innerHTML = `
            <div class="col-wrapper">
                <div class="col-content">
                    <div>
                        <h4 class="col-title">${fea.title}</h4>
                        <p class="col-sub-title">${fea.description}</p>
                        <div>
                            <p class="price"><span>$${fea.price}</span></p>
                            <p class="price-tag col-sub-title">${fea.price_tag}</p>
                        </div>
                    </div>
                    <div class="btns-wrapper">
                        <a href="#" class="primary-btn">
                            <span class="btn-text-bg">
                                <span class="btn-span">
                                    <span class="i-text">${fea.buy_btn_text}</span>
                                    <span class="af-text">${fea.buy_btn_text}</span>
                                </span>
                            </span>
                        </a>
                        <a href="#" class="click-link col-feature">
                            <span class="click-link-text features">Buy now</span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16" style="padding-left:6px">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M11.948 8.85H1v-1.7h10.948L9.399 4.6l1.202-1.202L15.202 8l-4.601 4.602-1.202-1.203z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <ul class="feature-li">
                    ${fea.keys.map(f => `
                        <li class="li-features">
                            <div class="li-initial-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="currentColor">
                                    <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z"></path>
                                </svg>
                            </div>
                            <div class="li-content">
                                <a href="#" class="li-a">
                                    <span class="li-text">${f.title}</span>
                                    ${f.tag ? `<span class="tag"><span class="tag-text">${f.tag}</span></span>` : ''}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="search-icon-li">
                                        <path d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8"></path>
                                    </svg>
                                </a>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        contentFlex.appendChild(featureCol);
    });
}

function renderMobileLayout() {
    featuresArea.innerHTML = `
    <div class="feature-wrapper">
        <div class="feature-p-wrapper">
            <div class="feature-content">
                <div class="feature-m-content">
                </div>
            </div>
            <div class="feature-btn">
                <a href="" class="primary-btn">
                    <span class="btn-text-bg">
                        <span class="btn-span">
                            <span class="i-text">See more feature</span>
                            <span class="af-text">See more feature</span>
                        </span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    `;

    const featureContent = document.querySelector('.feature-m-content');
    featureContent.innerHTML = `
     <div class="main-card">
        <div class="slick-list">
            <div class="slick-track">
            </div>
        </div>
     </div>
     <div class="slide-nav">
        <nav class="slide-nav-wrapper">
            <button class="nav-btn">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m5.052 12.85 3.549 3.55-1.202 1.202L1.798 12l5.601-5.602 1.202 1.203-3.549 3.549H21v1.7z">
                        </path>
                    </svg>
                </div>
            </button>
            <button class="nav-btn">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M18.948 11.15 15.399 7.6l1.202-1.202L22.202 12l-5.601 5.6-1.202-1.202 3.549-3.549H3v-1.7z">
                        </path>
                    </svg>
                </div>
            </button>
        </nav>
    </div>
     <div class="feature-m-li"></div>
    `;

    const card = document.querySelector('.slick-track');
    card.style.width = `${features.length * 100}%`;
    const featureLi = document.querySelector('.feature-m-li');

    features.forEach((fea, index) => {
        const cardContent = `
        <div class="feature-m-col" id=${fea.title.replace(' ', '-').toLowerCase()}>
            <div>
                <div class="tab">
                    <div class="tab-padding">
                        <div class="col-content">
                            <div>
                                <h4 class="col-title">${fea.title}</h4>
                                <p class="col-sub-title">${fea.description}</p>
                                <div>
                                    <p class="price"><span>$${fea.price}</span></p>
                                    <p class="price-tag col-sub-title">${fea.price_tag}</p>
                                </div>
                            </div>
                            <div class="btns-wrapper">
                                <a href="" class="primary-btn">
                                    <span class="btn-text-bg">
                                        <span class="btn-span">
                                            <span class="i-text">${fea.buy_btn_text}</span>
                                            <span class="af-text">${fea.buy_btn_text}</span>
                                        </span>
                                    </span>
                                </a>
                                <a href="" class="click-link col-feature">
                                    <span class="click-link-text features">Buy now</span>
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16" style="padding-left:6px">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M11.948 8.85H1v-1.7h10.948L9.399 4.6l1.202-1.202L15.202 8l-4.601 4.602-1.202-1.203z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        card.insertAdjacentHTML('beforeend', cardContent);
        const navArea = document.querySelector('.slide-nav-wrapper')
        const navButtons = navArea.querySelectorAll('.nav-btn');
        const firstNavBtn = navButtons[1];

        const dot = document.createElement('button');
        dot.className = 'small-nav-btn';
        dot.dataset.index = index;
        firstNavBtn.insertAdjacentElement('beforebegin', dot);
    });

    const slickList = document.querySelector('.slick-list');
    const dots = document.querySelectorAll('.small-nav-btn');
    const items = document.querySelectorAll('.feature-m-col');

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            slickList.scrollTo({
                left: i * slickList.clientWidth,
                behavior: 'smooth'
            });
        });
    });

    slickList.addEventListener('scroll', () => {
        const scrollLeft = slickList.scrollLeft;
        const containerWidth = slickList.clientWidth;

        // Nếu mỗi item chiếm đúng 100% chiều rộng
        const index = Math.round(scrollLeft / containerWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle('choosen', i === index);
        });
    });
}
