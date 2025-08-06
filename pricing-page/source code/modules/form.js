const formWrapper = document.createElement('div')
formWrapper.classList.add('form-wrapper')
formWrapper.innerHTML = `
                <div class="form-content">
                    <form action="contact">
                        <div class="form-title">
                            <h3 class="form-title-text">Let’s talk this out</h3>
                            <p class="normal-text">We’ll help you choose the features that work best for your business.
                            </p>
                        </div>
                        <div class="form-input">
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <label class="input-label" for="email">Work email</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required>
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
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <label class="input-label" for="email">Message</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required>
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
                                    <label class="input-label" for="email">First name</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required>
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
                                    <label class="input-label" for="email">Last name</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required>
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
                                    <label class="input-label" for="email">Phone number</label>
                                    <div class="input-detail">
                                        <input type="text" id="email" name="email" required>
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
                                        <input type="checkbox" name="agree" id="">
                                        <label class='normal-text' for="agree">Yes, I would like to receive marketing-related communications
                                            about Zendesk products, services, and events. I understand I may unsubscribe
                                            at any time.</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-wrapper full">
                                <div class="input-content">
                                    <div class="normal-text">
                                        By submitting my personal data, I consent to Zendesk collecting, processing, and
                                        storing my information in accordance with the Zendesk Privacy Notice.
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
function displayForm() {
    document.querySelectorAll('.openForm').forEach(button => {
        button.addEventListener('click', () => {
            toggleOverlay();
            overlay.appendChild(formWrapper)
        })
    })

    document.querySelectorAll('.input-detail input').forEach(input => {
        const wrapper = input.closest('.input-content');
        const warning = wrapper?.querySelector('.input-warning');
        const icon = wrapper?.querySelector('.input-icon');

        // Khi blur: kiểm tra valid/invalid
        input.addEventListener('blur', () => {
            if (!input.checkValidity()) {
                if (warning) warning.style.display = 'block';
                if (icon) icon.style.display = 'flex';
            } else {
                if (warning) warning.style.display = 'none';
                if (icon) icon.style.display = 'none';
            }
        });

        // Khi đang gõ: nếu valid thì ẩn cảnh báo
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                if (warning) warning.style.display = 'none';
                if (icon) icon.style.display = 'none';
            }
        });
    });

}