
/* HOTANI ACRYLIC STORE - NEWSLETTER */

(function () {
    const section = document.getElementById("newsletter");
    if (!section) return;

    section.innerHTML = `
        <div class="newsletter-container">
            <div class="newsletter-content">
                <span class="section-subtitle">Stay Connected</span>
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get updates about new collections, special offers and latest designs.</p>

                <form id="newsletter-form" class="newsletter-form">
                    <input
                        type="email"
                        id="newsletter-email"
                        placeholder="Enter your email address"
                        required
                    >
                    <button type="submit">Subscribe</button>
                </form>

                <p id="newsletter-message" aria-live="polite"></p>
            </div>
        </div>
    `;

    const form = section.querySelector("#newsletter-form");
    const message = section.querySelector("#newsletter-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        message.textContent = "Thank you for your interest!";
        form.reset();
    });
})();
