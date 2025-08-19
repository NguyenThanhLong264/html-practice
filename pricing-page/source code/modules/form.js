function displayForm() {
    const openFormBtns = document.querySelectorAll('.openForm')
    openFormBtns.forEach((btn) => {
        btn.onclick = () => {
            toggleOverlay()
            const formWrapper = overlay.querySelector('.form-wrapper');
            if (formWrapper && formWrapper.style.display !== 'flex') {
                formWrapper.style.display = 'flex';
            }
        }
    })
}

const form = document.getElementById('contact-form')
const formElements = form.querySelectorAll('input, textarea, select');

// 👉 gom validate vào 1 hàm chung
function validateInput(inp) {
    if (inp.dataset.req !== 'false') {
        const regexPattern = inp.dataset.regex
        const regex = new RegExp(regexPattern)
        const warnEl = inp.parentElement.querySelector('.warn-text')

        if (inp.value.length === 0) {
            inp.dataset.inputStage = 'blank'
            if (warnEl) warnEl.textContent = inp.dataset.blankMess
        }
        else if (!regex.test(inp.value) && regexPattern !== 'none') {
            inp.dataset.inputStage = 'cons'
            if (warnEl) warnEl.textContent = inp.dataset.consMess
        }
        else {
            inp.dataset.inputStage = 'normal'
            if (warnEl) warnEl.textContent = ''
        }
    }
}

formElements.forEach((inp) => {
    inp.addEventListener('blur', () => {
        if (inp.dataset.initial === 'true') {
            inp.dataset.initial = 'false'
        }
        validateInput(inp)
    })

    inp.addEventListener('input', () => {
        if (inp.dataset.initial !== 'true') {
            validateInput(inp)
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    Array.from(formElements).forEach(inp => {
        inp.dataset.initial = 'false';
        validateInput(inp)
    });

    const isValid = Array.from(formElements).every(item => item.dataset.inputStage === 'normal');
    if (!isValid) {
        console.warn("Form chưa hợp lệ!");

        const firstInvalid = Array.from(formElements).find(inp =>
            inp.dataset.inputStage === 'blank' || inp.dataset.inputStage === 'cons'
        );

        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalid.focus({ preventScroll: true });
        }

        return;
    }

    const data = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
        agree: form.agree.checked
    };
    console.log(data);
})
