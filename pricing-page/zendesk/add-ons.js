const add_on_data = [
    {
        isNew: true,
        name: 'Chat bot',
        price: '50.000 VNĐ per user/month',
        description: `The Chat bot add-on enables automated customer interactions through real-time messaging. 
                      It can handle common inquiries, provide basic support, and operate 24/7. 
                      This helps save time and improve overall user experience.`,
        features: [
            'Agent copilot',
            'AI-powered workflows',
            'Insights and suggestions',
            'Generative AI writing tools',
            'AI-powered knowledge'
        ],
        bottomText: 'Try chat bot now'
    },
    {
        isNew: false,
        name: 'Voice Bot',
        price: '70.000 VNĐ per user/month',
        description: `Voice bot supports interactive voice responses using AI-driven conversation trees. 
                      It can automate inbound call flows and reduce agent workload.`,
        features: [
            'Call deflection',
            'Speech-to-text',
            'Voice sentiment analysis'
        ],
        bottomText: 'Try voice bot now'
    },
    {
        isNew: true,
        name: 'Analytics Suite',
        price: '100.000 VNĐ per account/month',
        description: `Advanced reporting and dashboard tools for measuring customer engagement, 
                      agent performance, and AI effectiveness.`,
        features: [
            'Real-time dashboards',
            'Custom report builder',
            'Export to CSV'
        ],
        bottomText: 'Get insights today'
    }
];


const container = document.getElementById('add-on-flex');

container.innerHTML = add_on_data.map(item => `
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
                    ${item.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="description">${item.bottomText}</div>
            <div class="add-on-btn">
                <div class="button-wrapper color-none">
                    <button class="magic-btn">
                        <span class="text current">Learn More</span>
                        <span class="text hover">Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
`).join('');
