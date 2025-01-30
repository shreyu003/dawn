document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cartProductDeleteBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            let cartItem = this.closest(".as-cart-line-item-box");
            let itemKey = cartItem.getAttribute("data-item-key");

            if (!itemKey) {
                console.error("Item key not found.");
                return;
            }

            fetch('/cart/change.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: itemKey,
                    quantity: 0
                })
            })
            .then(response => response.json())
            .then(() => cartItem.remove())
            .catch(error => console.error("Error removing item:", error));
        });
    });
});