// Get the theme toggle button element
const toggle = document.getElementById("theme-toggle");

// Retrieve the current theme from localStorage
const currentTheme = localStorage.getItem("theme");

// Check if the current theme is "dark"
if (currentTheme === "dark") {
    // Apply dark mode by adding the "dark-mode" class to the body
    document.body.classList.add("dark-mode");
    // Set the toggle button text to a sun emoji (indicating light mode toggle)
    toggle.textContent = "☀️";
} else {
    // Set the toggle button text to a moon emoji (indicating dark mode toggle)
    toggle.textContent = "🌙";
}

// Add a click event listener to the toggle button
toggle.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the body and store the result
    const isDark = document.body.classList.toggle("dark-mode");
    // Save the updated theme preference in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
    // Update the toggle button text based on the current theme
    toggle.textContent = isDark ? "☀️" : "🌙";
});
