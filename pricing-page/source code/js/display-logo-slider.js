const imageNames = generateImageNames('logo', 1, 24, ['png']);
const slider = document.getElementById('logo-slider');
const imgList = [];

let loadedCount = 0;

// function logo() {
imageNames.forEach(name => {
    const img = new Image();
    img.src = `img/logos/${name}`;
    img.alt = name;

    img.onload = () => {
        imgList.push(img.cloneNode());
        loadedCount++;
        checkDone();
    };

    img.onerror = () => {
        loadedCount++;
        checkDone();
    };
});
// }
function checkDone() {
    if (loadedCount === imageNames.length) {
        finalizeSlider();
    }
}

function finalizeSlider() {
    imgList.forEach(img => {
        slider.appendChild(img.cloneNode());
    });
    imgList.forEach(img => {
        slider.appendChild(img.cloneNode());
    });

    const imgCount = imgList.length * 2;
    const totalShiftPercent = (imgCount) * 100;
    const duration = imgList.length * 2; // mỗi ảnh 2s

    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes slide {
        to {
            transform: translateX(-${totalShiftPercent / 2}%);
        }
    }
    #logo-slider > img {
        animation: slide ${duration}s linear infinite;
    }
    `;
    document.head.appendChild(style);
}

function generateImageNames(prefix, start, end, extensions) {
    const result = [];
    for (let i = start; i <= end; i++) {
        extensions.forEach(ext => {
            result.push(`${prefix} (${i}).${ext}`);
        });
    }
    return result;
}

