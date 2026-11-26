
/* HOTANI ACRYLIC STORE - FOOTER */

(function () {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-main">
            <div class="footer-container">

                <div class="footer-about">
                    <img src="images/logo/Logo.jpg" alt="HOTANI ACRYLIC">
                    <h3>HOTANI ACRYLIC</h3>
                    <p>
                        Discover beautiful acrylic wall decor,
                        Islamic calligraphy and unique designs
                        for your home.
                    </p>
                </div>

                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <a href="index.html">Home</a>
                    <a href="#shop-by-category">Shop Categories</a>
                    <a href="pages/contact.html">Contact Us</a>
                </div>

                <div class="footer-links">
                    <h3>Customer Service</h3>
                    <a href="pages/shipping-policy.html">Shipping Policy</a>
                    <a href="pages/refund-policy.html">Refund Policy</a>
                    <a href="pages/privacy-policy.html">Privacy Policy</a>
                    <a href="pages/terms.html">Terms & Conditions</a>
                </div>

                <div class="footer-links">
                    <h3>Contact</h3>
                    <a href="pages/contact.html">Get in Touch</a>
                    <p>Pakistan</p>
                </div>

            </div>
        </div>

        <div class="footer-bottom">
            <p>© ${new Date().getFullYear()} HOTANI ACRYLIC STORE. All Rights Reserved.</p>
        </div>
    `;
})();
