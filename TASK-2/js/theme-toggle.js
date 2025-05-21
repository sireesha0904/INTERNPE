// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem("theme") || "light-mode"; // default to "light-mode" if nothing is saved
if (savedTheme === "dark-mode") {
  document.body.classList.add("dark-mode");
  document
    .getElementById("theme-icon")
    .classList.replace("bi-moon-stars", "bi-sun");
}

// Toggle theme function
const toggleTheme = () => {
  const currentTheme = document.body.classList.contains("dark-mode");

  // Toggle theme
  if (currentTheme) {
    document.body.classList.remove("dark-mode");
    document
      .getElementById("theme-icon")
      .classList.replace("bi-sun", "bi-moon-stars");
    localStorage.removeItem("theme");
  } else {
    document.body.classList.add("dark-mode");
    document
      .getElementById("theme-icon")
      .classList.replace("bi-moon-stars", "bi-sun");
    localStorage.setItem("theme", "dark-mode");
  }
};

// Add event listener for theme toggle button
document
  .getElementById("theme-toggle-btn")
  .addEventListener("click", toggleTheme);
