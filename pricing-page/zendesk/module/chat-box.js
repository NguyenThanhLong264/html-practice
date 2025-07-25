const chatBox = document.querySelector('.chat-box')

document.querySelector('.chat-icon').addEventListener('click', () => {
    chatBox.classList.toggle('open')
})

const closeChat = document.querySelector('.closeChat')
closeChat.addEventListener('click', () => {
    chatBox.classList.toggle('open')
})