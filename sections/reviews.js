
/* HOTANI ACRYLIC STORE - CUSTOMER REVIEWS */

(function () {
    const section = document.getElementById("customer-reviews");
    if (!section) return;

    const reviews = [
        {
            name: "Happy Customer",
            rating: "★★★★★",
            message: "Beautiful design and excellent product quality."
        },
        {
            name: "Satisfied Customer",
            rating: "★★★★★",
            message: "The product looks amazing on my wall."
        },
        {
            name: "Valued Customer",
            rating: "★★★★★",
            message: "Great finishing and a beautiful shopping experience."
        }
    ];

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">Customer Feedback</span>
                <h2>What Our Customers Say</h2>
                <p>Experiences from our valued customers</p>
            </div>

            <div class="reviews-grid">
                ${reviews.map(review => `
                    <article class="review-card">
                        <div class="review-stars">${review.rating}</div>
                        <p>"${review.message}"</p>
                        <h3>${review.name}</h3>
                    </article>
                `).join("")}
            </div>
        </div>
    `;
})();
