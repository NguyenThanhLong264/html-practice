const question_data = [
    {
        topic: 'Purchase',
        questions: [
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            },
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            },
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            }
        ]
    },
    {
        topic: 'System',
        questions: [
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            },
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            },
            {
                ques: "How can I purchase the product?",
                ans: "After clicking “Buy now”, you will create a Zendesk account and immediately be able to purchase your software. You can easily pay by credit card or Paypal. Customers who prefer to purchase through our sales representatives can opt to pay via invoice."
            }
        ]
    }
]

const question_area = document.querySelector('.q-area')

const topic = question_data.map(item =>
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
                </div>`
).join('')

question_area.innerHTML = topic

console.log('q', question_area);