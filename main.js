const navbar = document.querySelector("#myNav");

window.addEventListener("scroll", (e) => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 80) {
    // console.log(document);
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
});
