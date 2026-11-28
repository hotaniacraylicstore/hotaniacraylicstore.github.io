
/* HOTANI ACRYLIC STORE - CUSTOM NAME & NUMBER PLATES */

(function () {

    const section = document.getElementById("custom-design");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">

            <div class="custom-design-container">

                <div class="custom-design-content">

                    <span class="section-subtitle">
                        Made Just For You
                    </span>

                    <h2>Custom Name & Number Plates</h2>

                    <p>
                        Create your own personalized acrylic design.
                        Choose your name, number and preferred style.
                    </p>

                    <a href="pages/contact.html"
                       class="custom-design-button">
                        Order Your Custom Design →
                    </a>

                </div>

                <div class="custom-design-image">

                    <img
                        src="images/banners/custom-design.jpg"
                        alt="Custom Acrylic Name Plate"
                        loading="lazy"
                    >

                </div>

            </div>

            <div class="section-heading">
                <h2>Custom Plates Collection</h2>
                <p>Explore our personalized acrylic designs</p>
            </div>

            <div class="product-grid" id="custom-plates-products">
                <p class="collection-loading">
                    New products coming soon.
                </p>
            </div>

        </div>
    `;

})();
