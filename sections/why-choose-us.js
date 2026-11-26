
/* HOTANI ACRYLIC STORE - WHY CHOOSE US */

(function () {
    const section = document.getElementById("why-choose-us");
    if (!section) return;

    const features = [
        {
            icon: "✦",
            title: "Premium Materials",
            text: "Quality materials and beautiful finishing."
        },
        {
            icon: "◇",
            title: "Unique Designs",
            text: "Exclusive designs for every space."
        },
        {
            icon: "♡",
            title: "Customer Satisfaction",
            text: "Your satisfaction is our priority."
        },
        {
            icon: "✓",
            title: "Easy Ordering",
            text: "Simple and convenient ordering process."
        }
    ];

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">The HOTANI Difference</span>
                <h2>Why Choose Us?</h2>
                <p>Quality, creativity and care in every design</p>
            </div>

            <div class="why-choose-grid">
                ${features.map(feature => `
                    <div class="why-choose-card">
                        <span class="why-choose-icon">${feature.icon}</span>
                        <h3>${feature.title}</h3>
                        <p>${feature.text}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
})();
