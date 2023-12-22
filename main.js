const nav = document.querySelector(".nav");
window.addEventListener("scroll", (e) => {
  // console.log(
  //   document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
  // );
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav.style.padding = "10px";
    nav.style.fontSize = "21px";
  } else {
    nav.style.padding = "100px";
    nav.style.fontSize = "30px";
  }
});
