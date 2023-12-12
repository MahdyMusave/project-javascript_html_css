// const tabs = document.querySelector(".tab");
// Array.from(tabs.children).forEach((tab) => {
//   tab.addEventListener("click", (e) => {
//     //   // console.log(e.target);
//     let tabId = tab.getAttribute("data-tab");
//     //   tabs.addEventListener((tab) => {
//     //     tab.classList.remove("active");
//     //   });
//     //   tabs.addEventListener((tab) => {
//     //     tab.classList.remove("show");
//     //   });

//     // console.log(tab);
//     // console.log(tabId);
//     // tab.classList.add("active");
//     tab.getAttribute("data-tab").classList.add("show");
//   });
// });
// // tab.addEventListener("click", (e) => {

// // })

const tabs = document.querySelectorAll(".tabs");
const tabcontent = document.querySelectorAll(".tabcontent");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabId = e.target.getAttribute("data-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabcontent.forEach((content) => {
      content.classList.remove("show");
    });

    e.target.classList.add("active");
    // console.log(document.getElementById(tabId));
    document.getElementById(tabId).classList.add("show");
  });
});
