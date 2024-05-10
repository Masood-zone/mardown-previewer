document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openButton");
  const closeButton = document.getElementById("closeButton");
  const sidebar = document.getElementById("sidebar");

  openButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0)";
    sidebar.classList.add("");
    openButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  });

  closeButton.addEventListener("click", function () {
    sidebar.style.transform = "translateX(-100%)";
    closeButton.classList.add("hidden");
    openButton.classList.remove("hidden");
  });
});
