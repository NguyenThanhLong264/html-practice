const formWrapper = document.createElement('div')
formWrapper.classList.add('form-wrapper')

function displayForm() {
    document.querySelectorAll('.openForm').forEach(button => {
        button.addEventListener('click', () => {
            toggleOverlay();
            overlay.appendChild(formWrapper)
        })
    })

}