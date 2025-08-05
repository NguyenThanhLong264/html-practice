const featuresArea = document.querySelector('.plan-content-wrapper')

const featureContent = document.createElement('div');
featureContent.className = 'feature-content card';

const contentFlex = document.createElement('div');
contentFlex.className = 'content-flex';

featureContent.appendChild(contentFlex);
featuresArea.appendChild(featureContent);

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