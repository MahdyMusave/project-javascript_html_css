const nav = document.querySelector(".sidebar");
const icon_bar = document.querySelector(".open-nav-icon");
const panel = document.querySelector(".content-panel");
const close = document.querySelector(".close-nav");
icon_bar.addEventListener("click", (e) => {
  // nav.classList.toggle("openNav");
  nav.style.display = "block";
  nav.style.width = "20%";
});
close.addEventListener("click", () => {
  nav.style.display = "none";
  nav.style.width = "0";
});
