function displayForm() {
    const formWrapper = document.createElement('div')
    formWrapper.classList.add('form-wrapper')
    formWrapper.innerHTML = `
    <button class="close-btn" onclick="toggleOverlay()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16"
                        aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" d="M3 13L13 3m0 10L3 3"></path>
                    </svg>
                </button>
                <div class="form-content">
                    <form action="contact">
                        <div class="form-title">
                            <h3 class="form-title-text">Đăng ký tư vấn ngay</h3>
                            <p class="normal-text">Chúng tôi sẵn sàng tư vấn giải pháp phù hợp nhất với mô hình hoạt
                                động của doanh nghiệp bạn.
                            </p>
                        </div>
                        <div class="form-input">
                            <div class="input-wrapper lap-50">
                                <div class="input-content">
                                    <label class="input-label" for="name">Họ Tên</label>
                                    <div class="input-detail">
                                        <input type="text" id="name" name="name" required="">
                                        <div class="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="input-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        This field is required
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper lap-50">
                                <div class="input-content">
                                    <label class="input-label" for="company">Công ty/ Doanh nghiệp</label>
                                    <div class="input-detail">
                                        <input type="text" id="company" name="company" required="">
                                        <div class="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="input-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        This field is required
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper lap-50">
                                <div class="input-content">
                                    <label class="input-label" for="email">Email</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required="">
                                        <div class="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="input-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        Enter a business email address
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper lap-50">
                                <div class="input-content">
                                    <label class="input-label" for="phone">SĐT</label>
                                    <div class="input-detail">
                                        <input type="text" id="phone" name="phone" required="">
                                        <div class="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="input-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        This field is required
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <label class="input-label" for="message">Ghi chú</label>
                                    <div class="input-detail">
                                        <textarea type="text" id="message" name="message" required=""></textarea>
                                        <div class="input-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="input-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 9.5a.5.5 0 0 1-.5-.5V4.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5m0 1A.75.75 0 1 1 8 12a.75.75 0 0 1 0-1.5"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        This field is required
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <div class="check-box-wrapper">
                                        <input type="checkbox" name="agree" id="agree">
                                        <label class="normal-text" for="agree">Tôi đồng ý nhận thông tin tiếp thị về sản
                                            phẩm, dịch vụ và sự kiện của CareSoft. Tôi có thể hủy đăng ký bất cứ lúc
                                            nào.</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <div class="normal-text">
                                        Khi gửi thông tin cá nhân, tôi đồng ý để CareSoft thu thập, xử lý và lưu trữ dữ
                                        liệu của mình theo Chính sách quyền riêng tư của CareSoft.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-submit">
                            <a href="#" class="primary-btn">
                                <span class="btn-text-bg">
                                    <span class="btn-span">
                                        <span class="i-text">Contact Sales</span>
                                        <span class="af-text">Contact Sales</span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </form>
                </div>
`
    document.querySelectorAll('.openForm').forEach(button => {
        button.onclick = () => {
            toggleOverlay();

            // Chỉ thêm nếu chưa tồn tại
            const existing = overlay.querySelector('.form-wrapper');
            if (!existing) {
                overlay.appendChild(formWrapper);

                formWrapper.querySelectorAll('.input-detail input').forEach(input => {
                    const wrapper = input.closest('.input-content');
                    const warning = wrapper?.querySelector('.input-warning');
                    const icon = wrapper?.querySelector('.input-icon');

                    input.addEventListener('blur', () => {
                        if (!input.checkValidity()) {
                            if (warning) warning.style.display = 'block';
                            if (icon) icon.style.display = 'flex';
                        } else {
                            if (warning) warning.style.display = 'none';
                            if (icon) icon.style.display = 'none';
                        }
                    });

                    input.addEventListener('input', () => {
                        if (input.checkValidity()) {
                            if (warning) warning.style.display = 'none';
                            if (icon) icon.style.display = 'none';
                        }
                    });
                });
                formWrapper.querySelectorAll('.input-detail textarea').forEach(input => {
                    const wrapper = input.closest('.input-content');
                    const warning = wrapper?.querySelector('.input-warning');
                    const icon = wrapper?.querySelector('.input-icon');

                    input.addEventListener('blur', () => {
                        if (!input.checkValidity()) {
                            if (warning) warning.style.display = 'block';
                            if (icon) icon.style.display = 'flex';
                        } else {
                            if (warning) warning.style.display = 'none';
                            if (icon) icon.style.display = 'none';
                        }
                    });

                    input.addEventListener('input', () => {
                        if (input.checkValidity()) {
                            if (warning) warning.style.display = 'none';
                            if (icon) icon.style.display = 'none';
                        }
                    });
                });
            }
        };
    });
}