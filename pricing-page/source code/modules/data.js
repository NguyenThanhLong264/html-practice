const features = [
    {
        title: 'Call Center',
        description: 'Giải pháp nền tảng tổng đài chuyên nghiệp với các tính năng thiết yếu để vận hành trung tâm chăm sóc khách hàng và Telesales với các kênh liên lạc truyền thống là hotline và email.',
        price: '500.000 VND',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp kênh thoại và email', tag: 'New', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: false
    },
    {
        title: 'OMNI-CHANNEL CONTACT CENTER',
        description: 'Giải pháp tối ưu cho doanh nghiệp muốn xây dựng trung tâm chăm sóc khách hàng chuyên nghiệp trên nhiều kênh liên lạc. Tập trung vào khả năng tiếp nhận – phản hồi tự động - phân phối – giám sát – phân tích các tương tác khách hàng giúp nâng cao trải nghiệm người dùng và hiệu quả vận hành của đội ngũ CSKH.',
        price: '800.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: true
    }, {
        title: 'OMNI-CHANNEL CRM',
        description: 'Giải pháp tích hợp toàn diện các kênh liên lạc và công cụ quản lý – thực thi - giám sát - tự động hóa và tối ưu hóa hoạt động marketing, bán hàng và chăm sóc khách hàng.',
        price: '1.000.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Liên hệ',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Quản lý khách hàng tiềm năng (Lead management)', description: 'Nothing' },
            { title: 'Phễu bán hàng', description: 'Nothing' },
            { title: 'Đo lường và tối ưu hiệu quả quảng cáo', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Bán hàng qua Facebook (Meta commerce)', description: 'Nothing' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: false
    }
]

const add_ons = [
    {
        isNew: true,
        name: 'Chat bot',
        price: '10.000.000/ 1 lần triển khai',
        description: `Tự động tiếp nhận và phản hồi khách hàng 24x7 trên các kênh chat (Facebook, Istagram, Zalo, Livechat), tối ưu nguồn lực và nâng cao trải nghiệm khách hàng.`,
        features: [
            { title: 'Tích hợp với tất cả kênh chat', description: 'Nothing', imgUrl: false },
            { title: 'Xây dựng kịch bản hội thoại (Flow Builder)', description: 'Nothing', imgUrl: false },
            { title: 'Nhận diện nội dung và phản hồi', description: 'Nothing', imgUrl: false },
            { title: 'Thu thập và phân loại thông tin', description: 'Nothing', imgUrl: false },
            { title: 'Chuyển tiếp đến chuyên viên', description: 'Nothing', imgUrl: false },
            { title: 'Cho phép tích hợp AI', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Dùng chat bot ngay',
        btnText: 'Thử ngay',
    },
    {
        isNew: true,
        name: 'AI',
        price: 'Contact us',
        description: `Ứng dụng AI ở tất cả các giai đoạn, từ phản hồi khách hàng tự động, hỗ trợ chuyên viên đến đánh giá mức độ tiềm năng của khách hàng, đánh giá chất lượng dịch vụ chuyên viên và nhiều ứng dụng khác`,
        features: [
            { title: 'AI chatbot - Tự động phản hồi khách hàng', description: 'Nothing', imgUrl: false },
            { title: 'AI assisstant - Hỗ trợ chuyên viên', description: 'Nothing', imgUrl: false },
            { title: 'AI Knowledge base - Kho tri thức', description: 'Nothing', imgUrl: false },
            { title: 'AI Lead scoreing - Đánh giá lead tiềm năng', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Liên hệ ngay với chúng tôi để dùng AI',
        btnText: 'Liên hệ',
    },
    {
        isNew: true,
        name: 'Smart Dialer',
        price: 'Contact us',
        description: `Ứng dụng AI ở tất cả các giai đoạn, từ phản hồi khách hàng tự động, hỗ trợ chuyên viên đến đánh giá mức độ tiềm năng của khách hàng, đánh giá chất lượng dịch vụ chuyên viên và nhiều ứng dụng khác`,
        features: [
            { title: 'Tự động quay số (auto dialer)', description: 'Nothing', imgUrl: false },
            { title: 'Tự động gọi (auto call)', description: 'Nothing', imgUrl: false },
            { title: 'Tạo danh sách theo bộ lọc, quản lý danh sách blacklist, tạo dữ liệu qua API ', description: 'Nothing', imgUrl: false },
            { title: 'Tự động đảo số, lựa chọn đầu số để tối ưu cước phí', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Liên hệ ngay với chúng tôi để sử dụng Smart Dialer',
        btnText: 'Liên hệ',
    },
];

const plans = [{
    title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)',
    rows: [
        ['Kênh thoại (voice call)', true, true, true],
        ['Kênh Email', true, true, true],
        ['Kênh SMS (text message)', true, true, true],
        ['Ticket form', true, true, true],
        ['Kênh Facebook & Instagram (chat, comment, call)', true, true, '-'],
        ['Kênh Zalo OA (chat, video call, voice call)', true, true, '-'],
        ['Kênh Zalo cá nhân (chat)', true, true, '-'],
        ['Kênh Live chat (chat)', true, true, '-'],
        ['Kênh Tiktok (lead form)', true, true, '-'],
        ['Ladi page', true, true, '-'],
    ]
},
{
    title: 'Tính năng nâng cao của kênh chat',
    rows: [
        ['Chat bot', true, true, '-'],
        ['Trợ lý ảo tự động trả lời khách hàng', true, true, '-'],
        ['Trợ lý hỗ trợ chuyên viên', true, true, '-'],
    ]
},
{
    title: 'Tính năng nâng cao của kênh thoại',
    rows: [
        ['Voice to text', true, true, true],
        ['Smart IVR', true, true, true],
        ['Voice API', true, true, true],
    ]
},
{
    title: 'Quản lý thông tin khách hàng',
    rows: [
        ['Quản lý thông tin khách hàng cá nhân', true, true, true],
        ['Quản lý thông tin tổ chức', true, true, true],
        ['Hiển thị thông tin 360° khách hàng', true, '-', '-'],
    ]
},
{
    title: 'Quản lý yêu cầu của khách hàng - phiếu ghi',
    rows: [
        ['Quản lý phiếu ghi', true, true, true],
        ['Quản lý SLA', true, true, true],
        ['Quản lý kho tri thức (KB)', true, true, true],
        ['Chấm điểm dịch vụ nội bộ', true, true, true],
        ['Quản lý quy trình tự động hóa nhắc việc, thông báo, gửi thông tin cho khách hàng', true, true, true],
    ]
},
{
    title: 'Tính năng nâng cao của phiếu ghi',
    rows: [
        ['Tóm tắt nội dung bằng AI', true, true, true],
        ['Phân loại phiếu ghi bằng AI', true, true, true],
        ['Gợi ý phản hồi khách hàng bầng AI', true, true, true],
        ['Chấm điểm chất lượng dịch vụ bằng AI', true, true, true],
    ]
},
{
    title: 'Khảo sát khách hàng',
    rows: [
        ['Khảo sát sự hài lòng của khách hàng (CSAT) sau cuộc gọi', true, true, true],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) sau khi kết thúc chat', true, true, '-'],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng email', true, true, true],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng tin nhắn (Facebook, Zalo)', true, true, '-'],
        ['Khảo sát lấy ý kiến khách hàng theo kịch bản gọi điện', true, true, true],
    ]
},
{
    title: 'Quản lý khách hàng tiềm năng',
    rows: [
        ['Quản lý nguồn lead', true, '-', '-'],
        ['Quản lý danh sách lead theo từng vai trò', true, '-', '-'],
        ['Tính năng xử lý lead cho chuyên viên', true, '-', '-'],
        ['Phân loại và thu thập thông tin lead', true, '-', '-'],
        ['Phân loại và thu thập thông tin lead bằng AI', true, '-', '-'],
        ['Chuyển giao thành cơ hội bán hàng', true, '-', '-'],
        ['Quản lý kịch bản và quy trình nuôi dưỡng, tái khai thác lead tự động', true, '-', '-'],
        ['Gợi ý kịch bản nuôi dưỡng lead bằng AI', true, '-', '-'],
    ]
},
{
    title: 'Quản lý cơ hội bán hàng',
    rows: [
        ['Quản lý pipeline, phễu bán hàng', true, '-', '-'],
        ['Quản lý danh sách sản phẩm, dịch vụ', true, '-', '-'],
        ['Quản lý danh sách Deal theo từng vai trò', true, '-', '-'],
        ['Tính năng xử lý Deal cho chuyên viên', true, '-', '-'],
        ['Phân loại và thu thập thông tin Deal', true, '-', '-'],
        ['Phân loại và thu thập thông tin Deal bằng AI', true, '-', '-'],
        ['Quản lý kịch bản và quy trình bám đuổi tự động', true, '-', '-'],
        ['Gợi ý kịch bản tư vấn bán hàng bằng AI', true, '-', '-'],
        ['Tích hợp thông tin cơ hội bán hàng thành công sang các hệ thống liên quan', true, '-', '-'],
    ]
},
{
    title: 'Tính năng trợ lý ảo AI',
    rows: [
        ['Hỗ trợ chuyên viên bằng AI', true, '-', '-'],
    ]
},
{
    title: 'Đo lường và tối ưu hiệu quả quảng cáo',
    rows: [
        ['Đo lường kết quả quảng cáo', true, '-', '-'],
        ['Tối ưu hiệu quả quảng cáo bằng conversion API của Meta và Google', true, '-', '-'],
    ]
},
{
    title: 'Tính năng Meta commerce (bán hàng trực tiếp qua Facebook)',
    rows: [
        ['Quản lý sản phẩm', true, '-', '-'],
        ['Đồng bộ danh mục sản phẩm lên meta catalog', true, '-', '-'],
        ['Chat mua hàng (hỏi thông tin sản phẩm)', true, '-', '-'],
        ['Giao diện đặt hàng online cho khách hàng', true, '-', '-'],
        ['Quản lý đơn hàng ', true, '-', '-'],
        ['Tích hợp tạo đơn hàng sang hệ thống liên quan', true, '-', '-'],
        ['Tối ưu tỷ lệ chuyển đổi từ quảng cáo bằng conversion API của Meta', true, '-', '-'],
    ]
},
{
    title: 'Quản lý chiến dịch marketing và chăm sóc khách hàng (Campaign)',
    rows: [
        ['Quản lý danh sách và thông tin chiến dịch', true, true, true],
        ['Thực hiện và cập nhật kết quả thực hiện chiến dịch', true, true, true],
    ]
},
{
    title: 'Tích hợp với các hệ thống liên quan',
    rows: [
        ['Hiển thị, tra cứu lịch sử giao dịch của khách hàng từ các hệ thống nghiệp vụ', true, true, true],
        ['Cập nhật & đồng bộ thông tin với các hệ thống liên quan', true, true, true],
    ]
},
{
    title: 'Công cụ lọc và kết xuất dữ liệu (Segmentation, filter & export)',
    rows: [
        ['Tạo tệp dữ liệu', true, true, true],
        ['Lọc và kết xuất dữ liệu', true, true, true],
    ]
},
{
    title: 'Tính năng dashboard và báo cáo',
    rows: [
        ['Bộ báo cáo tổng hợp và chi tiết tương tác theo từng kênh liên lạc', true, true, true],
        ['Báo cáo phễu bán hàng', true, '-', '-'],
        ['Bộ báo cáo tổng hợp và chi tiết phiếu ghi', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết khách hàng', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết lead', true, '-', '-'],
        ['Bộ báo cáo tổng hợp và chi tiết deal', true, '-', '-'],
        ['Dashboard tổng hợp các chỉ số nhanh về vận hành', true, true, true],
    ]
},
{
    title: 'Tính năng báo cáo nâng cao',
    rows: [
        ['Tạo báo cáo đa chiều', true, '-', '-']
    ]
},
{
    title: 'Tính năng quay số và gọi điện tự động (smart dialer)',
    rows: [
        ['Tự động quay số (auto dialer)', true, true, true],
        ['Tự động gọi (auto call/ call bot)', true, true, true],
    ]
},
{
    title: 'Phương thức truy cập',
    rows: [
        ['Trình duyệt máy tính', true, true, true],
        ['Ứng dụng điện thoại', true, true, true],
        ['Điện thoại IP Phone', true, true, true],
    ]
},
]

const questions = [
    {
        topic: 'Dịch vụ',
        questions: [
            {
                ques: "Chi phí dịch vụ đã bao gồm những gì?",
                ans: "Giá đã bao gồm hạ tầng cloud, bảo trì hệ thống và các tính năng cốt lõi. Bạn không cần đầu tư phần cứng hay tổng đài vật lý."
            },
            {
                ques: "Tôi có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào không?",
                ans: "Hoàn toàn được. Bạn có thể thay đổi gói dịch vụ bất kỳ lúc nào. Hệ thống sẽ tự động điều chỉnh chi phí theo chu kỳ sử dụng."
            },
            {
                ques: "Có phát sinh chi phí khởi tạo hoặc triển khai không?",
                ans: "Có. Mỗi khách hàng sẽ cần thanh toán một khoản phí triển khai một lần ban đầu để đội ngũ Caresoft tiến hành cấu hình hệ thống, tích hợp và đào tạo sử dụng. Mức phí cụ thể sẽ được báo giá tùy theo quy mô và yêu cầu của doanh nghiệp."
            }
        ]
    },
    {
        topic: 'Kỹ thuật',
        questions: [
            {
                ques: "Tôi có cần cài đặt phần mềm hay thiết bị gì không?",
                ans: "Không cần. Caresoft hoạt động hoàn toàn trên nền tảng đám mây. Bạn chỉ cần trình duyệt và kết nối Internet để sử dụng."
            },
            {
                ques: "Caresoft hỗ trợ những kênh tương tác nào?",
                ans: "Hệ thống hỗ trợ gọi điện (Call Center), live chat, email, Facebook, Zalo, SMS và nhiều kênh khác – tích hợp trên một nền tảng duy nhất."
            },
            {
                ques: "Có thể tích hợp Caresoft với CRM/ERP không?",
                ans: "Có. Caresoft hỗ trợ tích hợp linh hoạt qua API, cũng như các kết nối sẵn với nhiều hệ thống CRM, ERP, eCommerce phổ biến."
            }
        ]
    },
    {
        topic: 'Hỗ trợ',
        questions: [
            {
                ques: "Caresoft có hỗ trợ kỹ thuật trong quá trình sử dụng không?",
                ans: "Có. Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua hotline, email và live chat. Các gói nâng cao có CSKH riêng đồng hành cùng doanh nghiệp."
            },
            {
                ques: "Nếu tôi ngừng sử dụng thì dữ liệu có bị mất không?",
                ans: "Không. Dữ liệu của bạn sẽ được lưu trữ an toàn trong vòng 30 ngày sau khi hủy dịch vụ, và bạn có thể xuất hoặc khôi phục trong thời gian đó."
            },
            {
                ques: "Hệ thống có đảm bảo ổn định không?",
                ans: "Có. Caresoft cam kết uptime 99%, có hệ thống giám sát và sao lưu liên tục để đảm bảo hoạt động không gián đoạn."
            },
            {
                ques: 'Bạn có câu hỏi?',
                ans: "Hãy liên hệ chúng tôi ngay!"
            }
        ]
    }
];
