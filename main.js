const input = document.querySelector("input");
const menu = document.querySelector("#menu");
const item = document.querySelector("li");
Array.from(menu.children).forEach((items) => {
  // console.log(items);
  input.addEventListener("input", (e) => {
    // console.log(e.target.value.toLowerCase());
    const searchValue = e.target.value.toLowerCase();
    const itemText = items.textContent.toLowerCase();

    // console.log(itemText);
    if (itemText.indexOf(searchValue) > -1) {
      items.style.display = "";
    } else {
      items.style.display = "none";
    }
  });
});
