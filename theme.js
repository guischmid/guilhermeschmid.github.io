const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector(".btn__icon");
const currentTheme = localStorage.getItem("theme");

// Initial
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-sun", "fa-moon");
}

// Toggle
toggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  // Animation
  icon.classList.add("animated");

  // Change Icon
  if (isDark) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }

  // Save to localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Reset Animation
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
