const features = [
    {
        title: 'Call Center',
        description: 'Giải pháp nền tảng tổng đài chuyên nghiệp với đầy đủ tính năng thiết yếu để vận hành trung tâm chăm sóc khách hàng và Telesales, hỗ trợ các kênh liên lạc truyền thống như hotline và email.',
        price: '500.000 VND',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp kênh thoại và email', tag: 'Mới', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
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
        title: 'Contact Center',
        description: 'Giải pháp đa kênh tối ưu cho doanh nghiệp xây dựng trung tâm chăm sóc khách hàng chuyên nghiệp, tập trung vào tiếp nhận, phản hồi tự động, phân phối, giám sát và phân tích tương tác để nâng cao trải nghiệm và hiệu quả vận hành.',
        price: '800.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)', tag: 'Mới', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
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
        title: 'OMNI-Channel CRM',
        description: 'Giải pháp tích hợp toàn diện các kênh liên lạc và công cụ quản lý, thực thi, giám sát, tự động hóa và tối ưu hoạt động marketing, bán hàng và chăm sóc khách hàng trên cùng một nền tảng thống nhất.',
        price: '1.000.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
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
        isNew: 'Add-on',
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
        btnText: 'Liên hệ chuyên viên',
    },
    {
        isNew: 'Add-on',
        name: 'AI',
        price: 'Liên hệ với chúng tôi để triển khai',
        description: `Ứng dụng AI ở tất cả các giai đoạn, từ phản hồi khách hàng tự động, hỗ trợ chuyên viên đến đánh giá mức độ tiềm năng của khách hàng, đánh giá chất lượng dịch vụ chuyên viên và nhiều ứng dụng khác`,
        features: [
            { title: 'AI chatbot - Tự động phản hồi khách hàng', description: 'Nothing', imgUrl: false },
            { title: 'AI assisstant - Hỗ trợ chuyên viên', description: 'Nothing', imgUrl: false },
            { title: 'AI Knowledge base - Kho tri thức', description: 'Nothing', imgUrl: false },
            { title: 'AI Lead scoreing - Đánh giá lead tiềm năng', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Tích hợp AI ngay',
        btnText: 'Liên hệ chuyên viên',
    },
    {
        isNew: 'Add-on',
        name: 'Smart Dialer',
        price: 'Liên hệ với chúng tôi để triển khai',
        description: `Ứng dụng AI ở tất cả các giai đoạn, từ phản hồi khách hàng tự động, hỗ trợ chuyên viên đến đánh giá mức độ tiềm năng của khách hàng, đánh giá chất lượng dịch vụ chuyên viên và nhiều ứng dụng khác`,
        features: [
            { title: 'Tự động quay số (auto dialer)', description: 'Nothing', imgUrl: false },
            { title: 'Tạo danh sách theo bộ lọc, quản lý danh sách blacklist, tạo dữ liệu qua API ', description: 'Nothing', imgUrl: false },
            { title: 'Tự động gọi (auto call)', description: 'Nothing', imgUrl: false },
            { title: 'Tự động đảo số, lựa chọn đầu số để tối ưu cước phí', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Dùng Smart Dialer ngay',
        btnText: 'Liên hệ chuyên viên',
    },
];

const plans = [{
    title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)',
    rows: [
        ['Kênh thoại (voice call)', true, true, true],
        ['Kênh Email', true, true, true],
        ['Kênh SMS (text message)', true, true, true],
        ['Ticket form', true, true, true],
        ['Kênh Facebook & Instagram (chat, comment, call)', true, true, false],
        ['Kênh Zalo OA (chat, video call, voice call)', true, true, false],
        ['Kênh Zalo cá nhân (chat)', true, true, false],
        ['Kênh Live chat (chat)', true, true, false],
        ['Kênh Tiktok (lead form)', true, true, false],
        ['Ladi page', true, true, false],
    ]
},
{
    // title: null,
    title: 'Tính năng nâng cao của kênh chat',
    rows: [
        ['Chat bot', true, true, false],
        ['Trợ lý ảo tự động trả lời khách hàng', true, true, false],
        ['Trợ lý hỗ trợ chuyên viên', true, true, false],
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
        ['Hiển thị thông tin 360° khách hàng', true, false, false],
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
        ['Khảo sát sự hài lòng của khách hàng (CSAT) sau khi kết thúc chat', true, true, false],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng email', true, true, true],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng tin nhắn (Facebook, Zalo)', true, true, false],
        ['Khảo sát lấy ý kiến khách hàng theo kịch bản gọi điện', true, true, true],
    ]
},
{
    title: 'Quản lý khách hàng tiềm năng',
    rows: [
        ['Quản lý nguồn lead', true, false, false],
        ['Quản lý danh sách lead theo từng vai trò', true, false, false],
        ['Tính năng xử lý lead cho chuyên viên', true, false, false],
        ['Phân loại và thu thập thông tin lead', true, false, false],
        ['Phân loại và thu thập thông tin lead bằng AI', true, false, false],
        ['Chuyển giao thành cơ hội bán hàng', true, false, false],
        ['Quản lý kịch bản và quy trình nuôi dưỡng, tái khai thác lead tự động', true, false, false],
        ['Gợi ý kịch bản nuôi dưỡng lead bằng AI', true, false, false],
    ]
},
{
    title: 'Quản lý cơ hội bán hàng',
    rows: [
        ['Quản lý pipeline, phễu bán hàng', true, false, false],
        ['Quản lý danh sách sản phẩm, dịch vụ', true, false, false],
        ['Quản lý danh sách Deal theo từng vai trò', true, false, false],
        ['Tính năng xử lý Deal cho chuyên viên', true, false, false],
        ['Phân loại và thu thập thông tin Deal', true, false, false],
        ['Phân loại và thu thập thông tin Deal bằng AI', true, false, false],
        ['Quản lý kịch bản và quy trình bám đuổi tự động', true, false, false],
        ['Gợi ý kịch bản tư vấn bán hàng bằng AI', true, false, false],
        ['Tích hợp thông tin cơ hội bán hàng thành công sang các hệ thống liên quan', true, false, false],
    ]
},
{
    title: 'Tính năng trợ lý ảo AI',
    rows: [
        ['Hỗ trợ chuyên viên bằng AI', true, false, false],
    ]
},
{
    title: 'Đo lường và tối ưu hiệu quả quảng cáo',
    rows: [
        ['Đo lường kết quả quảng cáo', true, false, false],
        ['Tối ưu hiệu quả quảng cáo bằng conversion API của Meta và Google', true, false, false],
    ]
},
{
    title: 'Tính năng Meta commerce (bán hàng trực tiếp qua Facebook)',
    rows: [
        ['Quản lý sản phẩm', true, false, false],
        ['Đồng bộ danh mục sản phẩm lên meta catalog', true, false, false],
        ['Chat mua hàng (hỏi thông tin sản phẩm)', true, false, false],
        ['Giao diện đặt hàng online cho khách hàng', true, false, false],
        ['Quản lý đơn hàng ', true, false, false],
        ['Tích hợp tạo đơn hàng sang hệ thống liên quan', true, false, false],
        ['Tối ưu tỷ lệ chuyển đổi từ quảng cáo bằng conversion API của Meta', true, false, false],
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
        ['Báo cáo phễu bán hàng', true, false, false],
        ['Bộ báo cáo tổng hợp và chi tiết phiếu ghi', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết khách hàng', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết lead', true, false, false],
        ['Bộ báo cáo tổng hợp và chi tiết deal', true, false, false],
        ['Dashboard tổng hợp các chỉ số nhanh về vận hành', true, true, true],
    ]
},
{
    title: 'Tính năng báo cáo nâng cao',
    rows: [
        ['Tạo báo cáo đa chiều', true, false, false]
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
        topic: 'Chi phí',
        questions: [
            {
                ques: "Sử dụng Caresoft, tôi có phải trả chi phí lưu trữ file ghi âm và các tài liệu đính kèm không?",
                ans: "Không. Phí phần mềm Caresoft đã bao gồm chi phí lưu trữ dữ liệu (file ghi âm, tài liệu, hình ảnh đính kèm), chỉ có giới hạn về dung lượng từng file (25Mb) và thời gian lưu trữ (12 tháng)."
            },
            {
                ques: "Dịch vụ triển khai của Caresoft gồm những hạng mục nào, thời gian triển khai trong bao lâu?",
                ans: "Dịch vụ triển khai của Caresoft bao gồm các hoạt động tư vấn xây dựng quy trình nghiệp vụ tối ưu nhất cho doanh nghiệp trên hệ thống Caresoft, thiết lập hệ thống, đào tạo và chuyển giao. Tùy phạm vi nghiệp vụ và nhu cầu quản lý của doanh nghiệp, thời gian triển khai có thể kéo dài từ 1 tuần đến 3 tuần hoặc dài hơn để đảm bảo doanh nghiệp có thể khai thác được đầy đủ nhất các tính năng của Caresoft."
            },
            {
                ques: "Caresoft có tăng giá dịch vụ khi tôi tiến hành gia hạn không?",
                ans: "Không. Caresoft cam kết không tăng giá đối với các khách hàng đang sử dụng và tiếp tục gia hạn gói dịch vụ hiện tại. Khi có chính sách giá mới, Caresoft sẽ chỉ áp dụng cho khách hàng mới từ thời điểm ban hành."
            },
            {
                ques: "Tôi có thể thiết kế gói dịch vụ gồm nhiều loại tài khoản khác nhau cho từng nhóm người dùng khác nhau không?",
                ans: "Có. Caresoft cung cấp các gói dịch vụ linh hoạt, kết hợp nhiều loại tài khoản cho từng nhóm người dùng khác nhau để tối ưu chi phí cho doanh nghiệp."
            },
            {
                ques: "Caresoft có thu các loại cước phí thoại, SMS không?",
                ans: "Không. Caresoft không thực hiện thu cước phí Thoại và SMS brandname, khách hàng sẽ ký hợp đồng và thanh toán phí dịch vụ trực tiếp cho nhà cung cấp dịch vụ."
            },
            {
                ques: "Caresoft có thu phí gửi tin nhắn Zalo không?",
                ans: "Đối với cước gửi các tin nhắn mất phí của Zalo, khách hàng có 2 lựa chọn: thứ nhất là sử dụng ví Zalo mặc định mà Caresoft đăng ký với Zalo - trường hợp này khách hàng sẽ thanh toán cước phí cho Caresoft thông qua hình thức đối soát cuối kỳ, lựa chọn thứ 2 là khách hàng sử dụng ví của đối tác khác, Caresoft sẽ thực hiện tích hợp với đối tác mà khách hàng chỉ định với điều kiện đối tác hỗ trợ việc tích hợp này."
            },
        ]
    },
    {
        topic: 'Kỹ thuật',
        questions: [
            {
                ques: "Khi sử dụng Caresoft, người dùng có phải cài đặt phần mềm lên máy tính không?",
                ans: "Không. Caresoft hoạt động trên nền tảng web, khi sử dụng Caresoft trên máy tính, người dùng chỉ cần có kết nối Internet và trình duyệt web."
            },
            {
                ques: "Tôi có cần thể sử dụng Caresoft trên điện thoại không?",
                ans: "Có. Bạn có thể tải ứng dụng Caresoft từ kho ứng dụng của Apple và Google và sử dụng song song với trình duyệt web. Dữ liệu cập nhật từ ứng dụng mobile được cập nhật và đồng bộ tức thời."
            },
            {
                ques: "Tôi có thể sử dụng máy điện thoại IP để bàn để nghe gọi cho khách hàng không?",
                ans: "Có. Bạn có thể thiết lập máy điện thoại IP phone để nghe gọi. Ngoài ra bạn cũng có thể sử dụng tai nghe và micro kết nối trực tiếp với máy tính hoặc điện thoại di động có cài ứng dụng Caresoft."
            },
            {
                ques: "Việc tích hợp Caresoft với các phần mềm quản trị doanh nghiệp khác có phức tạp không? ",
                ans: "Khi bạn quyết định sử dụng Caresoft, đội ngũ tư vấn triển khai của Caresoft sẽ cùng bạn thiết kế luồng tích hợp dữ liệu tối ưu nhất. Caresoft cung cấp đẩy đủ các API và các phương thức tích hợp để kết nối với các phần mềm ERP, POS phổ biến hiện nay."
            },
        ]
    },
    {
        topic: 'Hỗ trợ',
        questions: [
            {
                ques: "Caresoft có hỗ trợ kỹ thuật trong quá trình sử dụng không?",
                ans: "Có. Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua hotline, email và live chat để hỗ trợ trực tiếp cho tất cả người dùng, đảm bảo SLA cam kết."
            },
            {
                ques: "Nếu tôi ngừng sử dụng thì dữ liệu có bị mất không?",
                ans: "Không. Dữ liệu của bạn sẽ được lưu trữ an toàn trong vòng 30 ngày sau khi hủy dịch vụ, và bạn có thể xuất hoặc khôi phục trong thời gian đó."
            },
            {
                ques: "Hệ thống Caresoft có đảm bảo tính ổn định không?",
                ans: "Có. Caresoft cam kết thời gian hoạt động 99%, có hệ thống giám sát và sao lưu liên tục để đảm bảo hoạt động không gián đoạn."
            },
            {
                ques: 'Bạn có câu hỏi khác?',
                ans: "Hãy liên hệ chúng tôi ngay!"
            }
        ]
    }
];
