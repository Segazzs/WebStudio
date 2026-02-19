const openMenuBtn = document.getElementById("open-menu-btn");
const mobMenu = document.getElementById("mob-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");

const order = document.getElementById("order");
const dashboard = document.getElementById("dashboard");
const closeDashboard = document.getElementById("close-dashboard");

openMenuBtn.addEventListener("click", function () {
  mobMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", function () {
  mobMenu.classList.remove("is-open");
});

order.addEventListener("click", function () {
  dashboard.classList.add("is-open");
});

closeDashboard.addEventListener("click", function () {
  dashboard.classList.remove("is-open");
});
