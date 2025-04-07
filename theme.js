/**
 * Toggles between light and dark themes for the website.
 * 
 * - Retrieves the current theme preference from localStorage.
 * - Sets the initial theme and toggle button icon based on the saved preference.
 * - Adds an event listener to the toggle button to switch themes and update the preference in localStorage.
 * 
 * Elements:
 * - `#theme-toggle`: The button element used to toggle the theme.
 * 
 * Local Storage:
 * - Key: `theme`
 *   - Value: `"dark"` for dark mode.
 *   - Value: `"light"` for light mode.
 * 
 * Behavior:
 * - If the theme is set to "dark", the `dark-mode` class is added to the root element (`<html>`),
 *   and the toggle button displays a sun icon (☀️).
 * - If the theme is set to "light" or not set, the `dark-mode` class is removed,
 *   and the toggle button displays a moon icon (🌙).
 * - Clicking the toggle button switches the theme, updates the icon, and saves the preference.
 */

// Icon constants
const ICON_SUN = "☀️";
const ICON_MOON = "🌙";
const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

// Set initial theme and icon
if (currentTheme === "dark") {
  document.documentElement.classList.add("dark-mode");
  toggle.textContent = ICON_SUN;
} else {
  toggle.textContent = ICON_MOON;
}

// Toggle theme on click
if (toggle) {
  toggle.addEventListener("click", () => {
    // Toggle the "dark-mode" class and store the result.
    // `isDark` will be true if the "dark-mode" class is now applied, false otherwise.
// Utility function to debounce calls
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Save preference with debounce
const saveThemePreference = debounce(() => {
  localStorage.setItem("theme", isDark ? "dark" : "light");
}, 300);

saveThemePreference();
    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Change icon
    toggle.textContent = isDark ? "☀️" : "🌙";
  });
}
