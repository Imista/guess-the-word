const showFooter = () => {
    const view = `
    <div class="footer">
        <div class="social">
            <a href="https://github.com/MuffinPlease" target="_blank">
                <div class="social-img"><img src="./src/resources/github.svg" alt="Github"></div>
            </a>
            <a>
                <div class="social-img wiouth-link"><img src="./src/resources/linkedin.svg" alt="Linkedin"></div>
            </a>
            <a href="https://www.paypal.com/donate/?hosted_button_id=PDL887NS8F7LY" target="_blank">
                <div class="social-img"><img src="./src/resources/paypal.svg" alt="Paypal"></div>
            </a>
        </div>
        <p class="footer-info">Muffin Please</p>
    </div>
    `;
    return view;
}

export default showFooter;