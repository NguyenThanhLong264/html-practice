const openBtns = document.querySelectorAll('[class*="openBtn-"]');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

const form = document.getElementById('myForm');
const statusMessage = document.getElementById('statusMessage');

const formContent = document.getElementById('formContent');
const featuresContent = document.getElementById('features');

function hideAllContent() {
    document.querySelectorAll('.modal-section').forEach(el => el.classList.remove('active'));
}

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        document.body.classList.add('no-scroll');
        overlay.classList.remove('hidden');
        hideAllContent();

        if (btn.classList.contains('openBtn-form')) {
            formContent.classList.add('active');
        }
        if (btn.classList.contains('openBtn-keys')) {
            featuresContent.classList.add('active')
            let data
            const li_id = btn.id;
            const [, itemindex, liindex] = li_id.split('-');
            if (btn.classList.contains('li-card')) {
                data = features[itemindex].keys[liindex]
            } else if (btn.classList.contains('li-addons')) {
                data = add_on_data[itemindex].features[liindex]
            }
            createKeyById(data.title, data.description, data?.imgUrl)
        }
    });
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        hideAllContent();
    }
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    hideAllContent();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
        console.log("Send Complete");
    }, 2000);
});
