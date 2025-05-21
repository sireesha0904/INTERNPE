document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const iconSun = document.querySelector(".icon-sun");
  const iconMoon = document.querySelector(".icon-moon");

  // Initialize mode based on saved preference or system
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    iconSun.classList.remove("hidden");
    iconMoon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    iconSun.classList.add("hidden");
    iconMoon.classList.remove("hidden");
  }

  toggleBtn.addEventListener("click", () => {
    iconSun.classList.toggle("hidden");
    iconMoon.classList.toggle("hidden");
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  });
});
