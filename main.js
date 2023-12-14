const navbar = document.querySelector("#myNav");
if (navbar.className === "nav") {
  navbar.classList +=" responsive";
} else {
  navbar.classList = "nav";
}
