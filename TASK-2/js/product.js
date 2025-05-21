const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Sneakers", price: 50 },
  { id: 3, name: "Backpack", price: 35 },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const div = document.createElement("div");
  div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  productList.appendChild(div);
});

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}
