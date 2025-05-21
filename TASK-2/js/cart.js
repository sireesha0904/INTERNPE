const cartItemsContainer = document.getElementById("cart-items");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItemsContainer.appendChild(div);
  });
}
