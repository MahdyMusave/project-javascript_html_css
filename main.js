const tab = document.querySelector(".tab");
const content = document.querySelectorAll(".tabcontent");
Array.from(tab.children).forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(item);
    tabId = item.getAttribute("data-tab");
    // console.log(tabId);
    Array.from(tab.children).forEach((tabs) => {
      tabs.classList.remove("active");
    });
    content.forEach((contentTb) => {
      contentTb.classList.remove("show");
    });

    item.classList.add("active");
    document.getElementById(tabId).classList.add("show");
  });
});
