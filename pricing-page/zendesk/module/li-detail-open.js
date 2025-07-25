const openLiBtns = document.querySelectorAll('.openBtn-keys');
const featuresContent = document.getElementById('features');

openLiBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        document.body.classList.add('no-scroll');
        overlay.classList.remove('hidden');
        hideAllContent();

        featuresContent.classList.add('active')
        let data
        const li_id = btn.id;
        const [, itemindex, liindex] = li_id.split('-');
        if (btn.classList.contains('li-card')) {
            data = features[itemindex].keys[liindex]
        } else if (btn.classList.contains('li-addons')) {
            data = add_ons[itemindex].features[liindex]
        }
        createKeyById(data.title, data.description, data?.imgUrl)
        console.log('w', data);
    });
});

function createKeyById(title, description, imgUrl) {
    featuresContent.innerHTML = `
        <h1>${title}</h1> 
        <p>${description}</p> 
        ${imgUrl ? `<img src=${imgUrl} alt="img"/>` : ''
        } `
}