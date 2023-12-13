// const tab = document.querySelector(".tab");
// const content = document.querySelectorAll(".tabcontent");

// Array.from(tab.children).forEach((item,index) => {
//   console.log(item[index]);
//   item.addEventListener("click", (e) => {
//     // console.log(item);
//     const tabId = item.getAttribute("data-tab");
//     const tabColor = item.getAttribute("data-color");

//     // console.log(tabColor);
//     Array.from(tab.children).forEach((tabs, index) => {
//       tabs.classList.remove("active");
//     });
//     content.forEach((contentTb) => {
//       contentTb.classList.remove("show");
//       contentTb.style.backgroundColor = tabColor;
//     });
//     item.classList.add("active");
//     document.getElementById(tabId).classList.add("show");
//   });
//   document.getElementById("default").click();
// });

const tabButtons = document.querySelectorAll(".tabs");
const tabContent = document.querySelectorAll(".tabcontent");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");
    const tabColor = button.getAttribute("data-color");

    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.style.backgroundColor = ""; // Reset background color of all buttons
    });
    tabContent.forEach((content) => {
      content.classList.remove("show");
      content.style.backgroundColor = tabColor;
    });

    button.classList.add("active");
    button.style.backgroundColor = tabColor; // Set background color of clicked button
    document.getElementById(tabId).classList.add("show");
  });
});

document.querySelector("#default").click();
