(function () {
    const drawer = document.getElementById("cart-drawer");
    if (!drawer) return;

    drawer.innerHTML = `
        <div class="cart-overlay"></div>
        <div class="cart-panel">
            <div class="cart-header">
                <h2>Your Shopping Cart</h2>
                <button id="close-cart" aria-label="Close cart">×</button>
            </div>
            <div id="cart-items" class="cart-items"></div>
            <div class="cart-footer">
                <div class="cart-total-row">
                    <strong>Subtotal:</strong>
                    <strong id="cart-total">Rs. 0</strong>
                </div>
                <button id="checkout-button" class="checkout-button">
                    Order on WhatsApp
                </button>
            </div>
        </div>
    `;
})();
