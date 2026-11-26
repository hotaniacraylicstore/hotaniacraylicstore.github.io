
/* HOTANI ACRYLIC STORE - SHOPPING BENEFITS */

(function () {
    const section = document.getElementById("shopping-benefits");
    if (!section) return;

    const benefits = [
        {
            icon: "🚚",
            title: "Free Shipping",
            text: "On selected orders"
        },
        {
            icon: "🔒",
            title: "Secure Shopping",
            text: "Safe and secure orders"
        },
        {
            icon: "✨",
            title: "Premium Quality",
            text: "Beautiful quality products"
        },
        {
            icon: "💬",
            title: "Customer Support",
            text: "We're here to help"
        }
    ];

    section.innerHTML = `
        <div class="benefits-container">
            ${benefits.map(item => `
                <div class="benefit-item">
                    <span class="benefit-icon">${item.icon}</span>
                    <div class="benefit-text">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
})();
