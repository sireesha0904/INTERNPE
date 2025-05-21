// checkout.js

// Calculate order summary and update the page
function calculateOrderSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  // Container for the order summary
  const orderSummaryContainer = document.getElementById("order-summary");
  const cartItemsContainer = document.getElementById("cart-items");

  if (cart.length === 0) {
    orderSummaryContainer.innerHTML =
      "<p>Your cart is empty. Please add items to proceed.</p>";
    return;
  }

  // Loop through cart and generate the item list in the order summary
  cartItemsContainer.innerHTML = ""; // Clear existing items
  cart.forEach((item) => {
    // Remove the '$' symbol and convert the price to a number
    const priceNumber = parseFloat(item.price.replace("$", "").trim());
    if (!isNaN(priceNumber)) {
      total += item.quantity * priceNumber;
    }

    // Add item to the order summary section
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    cartItemElement.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex">
            <img src="${item.image}" alt="${
      item.title
    }" class="img-fluid" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
            <div>
              <h5>${item.title}</h5>
              <p class="price">${item.price}</p>
            </div>
          </div>
          <div>
            <p>Qty: ${item.quantity}</p>
            <p class="total-price">${(priceNumber * item.quantity).toFixed(
              2
            )}</p>
          </div>
        </div>
      `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  // Update the order summary with the total price
  const totalFormatted = `$${total.toFixed(2)}`;
  orderSummaryContainer.innerHTML = `
      <h4>Order Summary</h4>
      <ul>
        ${cart
          .map(
            (item) => `
          <li>${item.title} - ${item.price} x ${item.quantity}</li>
        `
          )
          .join("")}
      </ul>
      <h5>Total: ${totalFormatted}</h5>
    `;
}

// Proceed to checkout (example)
function proceedToCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before proceeding.");
    return;
  }

  // Here you can implement checkout actions like redirecting to a payment gateway, etc.
  alert("Proceeding to checkout... (this is a placeholder action)");

  // Optionally, clear the cart after checkout (for testing purposes)
  // localStorage.removeItem("cart");
  // window.location.href = "order-confirmation.html"; // Redirect to a confirmation page
}

// Run on page load
window.onload = function () {
  calculateOrderSummary();

  // Add event listener for the checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", proceedToCheckout);
  }
};
