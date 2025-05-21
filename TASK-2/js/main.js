// main.js

// Event listener for adding items to the cart
document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
  button.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    const title = card.querySelector(".card-title").textContent;
    const price = card.querySelector(".price").textContent;
    const image = card.querySelector(".card-img-top").src;

    // Create an item object
    const item = {
      title: title,
      price: price,
      image: image,
    };

    // Get cart from localStorage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, alert the user
    alert(`${title} has been added to your cart!`);
  });
});
