const nav = document.querySelector(".sidebar");
const iconBar = document.querySelector(".open-nav-icon");
const panel = document.querySelector(".content-panel");
const close = document.querySelector(".close-nav");

iconBar.addEventListener("click", (e) => {
  nav.style.width = "100%";
});

close.addEventListener("click", () => {
  nav.style.width = "0%";
});
