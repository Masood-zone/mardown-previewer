// Sidebar open/close function
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openButton");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.getElementById("sidebar");

  openButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0)";
    sidebar.style.display = "block"; // Show the sidebar
    openButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  });

  closeButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.display = "none"; // Hide the sidebar
    closeButton.classList.add("hidden");
    openButton.classList.remove("hidden");
  });
});

// Dark mode Headings change function
document.addEventListener("DOMContentLoaded", function () {
  // Check if the page is in dark mode initially
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  // Function to update heading styles based on theme
  function updateHeadingStyles(isDarkMode) {
    const headings = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6,p,pre,code,li"
    );
    headings.forEach((heading) => {
      heading.style.color = isDarkMode ? "white" : "initial"; // Set to white in dark mode, otherwise use default color
    });
  }

  // Update heading styles based on current theme
  updateHeadingStyles(isDarkMode);

  // Listen for changes to the data-theme attribute
  document.documentElement.addEventListener("themechange", function () {
    updateHeadingStyles(
      document.documentElement.getAttribute("data-theme") === "dark"
    );
  });
});
