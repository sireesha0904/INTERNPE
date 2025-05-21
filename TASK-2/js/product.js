// product.js

// Example: Add to cart functionality (simplified)
document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    const productId = e.target.dataset.productId;
    // Logic to add productId to cart storage (localStorage/sessionStorage/API call)
    alert(`Product ${productId} added to cart!`);
  });
});
