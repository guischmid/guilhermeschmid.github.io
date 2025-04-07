/**
 * Toggles the website theme between light and dark modes.
 * 
 * - Retrieves the current theme from localStorage or defaults to "light".
 * - Applies the "dark-mode" class to the document if the current theme is "dark".
 * - Listens for a click event on the theme toggle button to switch themes.
 * - Updates the theme in localStorage based on the current state.
 * 
 * @constant {HTMLElement} toggle - The button element used to toggle the theme.
 * @constant {string} currentTheme - The current theme, either "light" or "dark".
 */

const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
  document.documentElement.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  const theme = document.documentElement.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
});
