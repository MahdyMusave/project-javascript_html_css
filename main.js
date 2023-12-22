const nav = document.querySelector(".nav");
window.addEventListener("scroll", (e) => {
  // console.log(
  //   document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
  // );
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
