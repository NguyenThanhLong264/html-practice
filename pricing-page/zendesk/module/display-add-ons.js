const container = document.getElementById('add-on-flex');

container.innerHTML = add_ons.map((item, addonIdx) => `
    <div class="add-on-item">
        <div class="item-content">
            ${item.isNew ? `<span class="new"><p>New: Add-on</p></span>` : ''}
            <div class="add-on-content text">
                <h4>${item.name}</h4>
                <span><p class="tiny-tag">${item.price}</p></span>
                <div class="description">${item.description}</div>
            </div>
            <div class="add-on-li list-features">
                <ul>
                    ${item.features.map((f, liIdx) => `
                        <li class='openBtn-keys li-addons' id=adon-${addonIdx}-${liIdx}>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 21 16" fill="currentColor">
          <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z"></path>
        </svg>
      </div>
      <div class="key-text">
          <span>
            <span class='key-label no-dec'>${f.title}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="key-icon-end">
            <path d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8"></path>
            </svg>
            </span>
          </span>
      </div>
    </li>`).join('')}
                </ul>
            </div>
            <div class="description">${item.bottomText}</div>
            <div class="add-on-btn">
                <div class="button-wrapper color-none">
                    <button class="magic-btn openBtn-form" >
                        <span class="text current">Learn More</span>
                        <span class="text hover">Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
`).join('');