document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    let cart = getCart();
    let cartTable = document.getElementById("cart-items");
    let subtotal = 0;

    cartTable.innerHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="product-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p><strong>${item.name}</strong></p>
                        <p>₱${item.price.toLocaleString()}</p>
                    </div>
                </div>
            </td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>₱${itemTotal.toLocaleString()}</td>
            <td>
                <button class="remove-btn" onclick="removeItem(${index})">
                    🗑️
                </button>
            </td>
        `;

        cartTable.appendChild(row);
    });

    document.getElementById("cart-subtotal").textContent = `₱${subtotal.toLocaleString()}`;
}

function updateQuantity(index, change) {
    let cart = getCart();

    if (cart[index].quantity + change >= 1) { 
        cart[index].quantity += change;
        saveCart(cart);
        loadCart();
    }
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1); // Remove item from cart
    saveCart(cart);
    loadCart();
}