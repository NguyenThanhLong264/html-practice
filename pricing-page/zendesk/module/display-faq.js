const question_area = document.querySelector('.q-area')

const topic = questions.map(item =>
    `<div class="each-topic">
                    <div class="topic up-case tag">${item.topic}</div>
                    <div class="q-list">
                    ${item.questions.map(q =>
        `<div class="qt">
                            <div class="question">
                                ${q.ques}
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ans">
                                <p>
                                  ${q.ans}
                                </p>
                            </div>
                        </div>`
    ).join('')}
                </div>
                </div>`
).join('')

question_area.innerHTML = topic;