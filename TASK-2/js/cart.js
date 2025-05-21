// Load cart items from localStorage
function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cart-items");

  cartItemsContainer.innerHTML = ""; // Clear existing items

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="empty-cart-message">Your cart is empty. Start shopping now!</p>';
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("col-md-12", "cart-item");

    cartItem.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.title}" />
        <div class="item-details">
          <h5>${item.title}</h5>
          <p class="price">${item.price}</p>
          <p class="remove-btn" data-title="${
            item.title
          }"><i class="bi bi-trash"></i> Remove</p>
        </div>
        <div class="item-actions">
          <div class="quantity">
            <input type="number" class="form-control" value="${
              item.quantity
            }" min="1">
          </div>
          <p class="total-price">${calculateItemTotal(
            item.price,
            item.quantity
          )}</p>
        </div>
      </div>
    `;

    // Update quantity
    cartItem.querySelector("input").addEventListener("change", function (e) {
      const newQuantity = e.target.value;
      updateItemQuantity(item.title, newQuantity);
    });

    // Add remove button functionality
    cartItem
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeItemFromCart(item.title);
      });

    cartItemsContainer.appendChild(cartItem);
  });

  // Update the total price after items are loaded
  updateTotalPrice();
}

// Calculate total price of a single item (item price * quantity)
function calculateItemTotal(price, quantity) {
  // Remove the dollar sign and parse the price as a number
  const priceNumber = parseFloat(price.replace("$", ""));
  if (isNaN(priceNumber)) {
    return "$0.00"; // Return a default value if the price is invalid
  }
  return `$${(priceNumber * quantity).toFixed(2)}`;
}

// Update total price in the cart
function updateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => {
    // Remove the dollar sign and parse the price as a number
    const priceNumber = parseFloat(item.price.replace("$", ""));
    if (!isNaN(priceNumber)) {
      total += item.quantity * priceNumber;
    }
  });
  document.getElementById("total-price").textContent = `$${total.toFixed(2)}`;
}

// Remove item from cart
function removeItemFromCart(title) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.title !== title);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCartItems(); // Reload cart after removal
}

// Update item quantity in cart
function updateItemQuantity(title, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.map((item) => {
    if (item.title === title) {
      item.quantity = parseInt(newQuantity); // Ensure it's an integer
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  // Reload cart items and total price after quantity update
  loadCartItems();
}

// Button to handle checkout functionality
function checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert(
      "Your cart is empty. Please add items to your cart before proceeding to checkout."
    );
  } else {
    // Redirect to checkout page
    window.location.href = "checkout.html";
  }
}

// Load the cart items when the page loads
window.onload = function () {
  loadCartItems();

  // Adding event listener for checkout button
  const checkoutBtn = document.querySelector(".checkout-btn");
  checkoutBtn.addEventListener("click", checkout);
};
