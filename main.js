const navbar = document.querySelector("#myNav");
const icon_bars = document.querySelector(".navbar-icon");
icon_bars.addEventListener("click", () => {
  if (navbar.className === "nav") {
    navbar.classList += " responsive";
  } else {
    navbar.classList = "nav";
  }
});
