const features = [
    {
        title: 'Call Center',
        description: 'Comprehensive call center system for all business communication needs.',
        price: '400.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Buy now',
        key_feature: 'Key feature',
        keys: [
            { title: 'Ticket - Case management', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Tính năng Email', description: 'Nothing', tag: 'New', },
            { title: 'Tính năng SMS', description: 'Nothing' },
            { title: 'Tính năng tổng đài', description: 'Nothing' },
            { title: 'Tính năng outbound', description: 'Nothing' },
            { title: 'CRM', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Quality Assurance', description: 'Nothing' },
            { title: 'Mobile App', description: 'Nothing' }
        ],
        marked: false
    },
    {
        title: 'Contact Center',
        description: 'An omnichannel solution unifying Call Center, Chat, Facebook, OTT, SMS, and Email — fully integrated with CRM, ERP, POS, and eCommerce.',
        price: '660.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Buy now',
        key_feature: 'Key feature',
        keys: [
            {
                title: 'Ticket - Case management',
                description: 'Nothing',
                tag: "New",
            }
        ],
        marked: true
    }, {
        title: 'Smart Dialer',
        description: 'An advanced auto and semi-auto dialing solution that boosts agent productivity and reduces outbound call costs.',
        price: '600.000 VNĐ',
        price_tag: 'per user/ month',
        buy_btn_link: '/',
        buy_btn_text: 'Contact us',
        key_feature: 'Key feature',
        keys: [
            {
                title: 'Ticket - Case management',
                description: 'Nothing'
            },
            {
                title: 'Ticket - Case management',
                description: 'Nothing'
            }
        ],
        marked: false
    }
]

const add_ons = [
    {
        isNew: true,
        name: 'Chat bot',
        price: '50.000 VNĐ per user/month',
        description: `The Chat bot add-on enables automated customer interactions through real-time messaging. 
                      It can handle common inquiries, provide basic support, and operate 24/7. 
                      This helps save time and improve overall user experience.`,
        features: [
            { title: 'Agent copilot', description: 'Nothing', imgUrl: false },
            { title: 'AI-powered workflows', description: 'Nothing', imgUrl: false },
            { title: 'Insights and suggestions', description: 'Nothing', imgUrl: false },
            { title: 'Generative AI writing tools', description: 'Nothing', imgUrl: false },
            { title: 'AI-powered knowledge', description: 'Nothing', imgUrl: false }
        ],
        bottomText: 'Try chat bot now'
    },
    {
        isNew: false,
        name: 'Voice Chat',
        price: '70.000 VNĐ per user/month',
        description: `Voice chat supports interactive voice responses using AI-driven conversation trees. 
                      It can automate inbound call flows and reduce agent workload.`,
        features: [
            { title: 'Call deflection', description: 'Nothing', imgUrl: false },
            { title: 'Speech-to-text', description: 'Nothing', imgUrl: false },
            { title: 'Voice sentiment analysis', description: 'Nothing', imgUrl: false }
        ],
        bottomText: 'Try voice chat now'
    },
    {
        isNew: true,
        name: 'Analytics Suite',
        price: '100.000 VNĐ per account/month',
        description: `Advanced reporting and dashboard tools for measuring customer engagement, 
                      agent performance, and AI effectiveness.`,
        features: [
            { title: 'Real-time dashboards', description: 'Nothing', imgUrl: false },
            { title: 'Custom report builder', description: 'Nothing', imgUrl: false },
            { title: 'Export to CSV', description: 'Nothing', imgUrl: false }
        ],
        bottomText: 'Get insights today'
    }
];

const plans = [
    {
        title: null,
        rows: [
            ['Infrastructure survey, implementation, training (1st time)',
                '2.000.000 VNĐ',
                'Contact',
                '2.000.000 VNĐ']
        ]
    },
    {
        title: null,
        rows: [
            ['Add ticket-only users (/user/month)',
                '125.000 VNĐ',
                'Contact',
                '125.000 VNĐ',]
        ]
    },
    {
        title: 'Live chat',
        rows: [
            ['Number of concurrent chats', false, false, 'Unlimited'],
            ['Chat Rating', false, false, true]
        ]
    },
    {
        title: 'Live chat',
        rows: [
            ['Number of concurrent chats', false, false, 'Unlimited'],
            ['Chat Rating', false, false, true]
        ]
    },
]

const questions = [
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
    },
]