// cart.js

// Example: Update subtotal when quantity changes
document.querySelectorAll(".quantity-input").forEach((input) => {
  input.addEventListener("change", (e) => {
    const qty = +e.target.value;
    if (qty < 1) e.target.value = 1; // minimum 1

    const row = e.target.closest("tr");
    const priceText = row.children[1].textContent.trim().replace("$", "");
    const price = parseFloat(priceText);

    const subtotalCell = row.children[3];
    subtotalCell.textContent = `$${(price * qty).toFixed(2)}`;

    // You should also update the overall total here by recalculating all subtotals
  });
});

// Example: Remove item from cart
document.querySelectorAll(".btn-remove").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    row.remove();

    // Update totals accordingly here
  });
});
