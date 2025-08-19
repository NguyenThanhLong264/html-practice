const faqSection = document.querySelector('.ques-section')

// function displayFaq() {
questions.forEach((question, i) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('ques-sec-wrapper');

    wrapper.innerHTML = `
            <h3 class="small-title">${question.topic}</h3>
            <div class="ques-li-wrapper">
                ${question.questions.map(ques => `
                    <div class="ques-li">
                        <div class="ques-heading">
                            <button class="open-table-btn">
                                <h3 class="open-text">${ques.ques}</h3>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m19.352 9.218-7.366 7.366-7.338-7.338L5.85 8.044l6.136 6.136 6.164-6.164z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ques-content">
                            <div class="q-content-wrapper">
                                <p class="normal-text">${ques.ans}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

    faqSection.appendChild(wrapper);
});
// }
