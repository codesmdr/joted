const open1 = document.querySelector("#open1");
const close1 = document.querySelector("#close1");
const open2 = document.querySelector("#open2");
const close2 = document.querySelector("#close2");

const modal_container1 = document.querySelector("#modal_container1");
const modal_container2 = document.querySelector("#modal_container2");

const box = document.querySelectorAll("#boxed");

//FAQ
box.forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});

// grab info using querySelector and the class
open1.addEventListener("click", function () {
  modal_container1.classList.add("show");
});

open2.addEventListener("click", function () {
  modal_container2.classList.add("show");
});

close1.addEventListener("click", function () {
  modal_container1.classList.remove("show");
});

close2.addEventListener("click", function () {
  modal_container2.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modal_container1.classList.remove("show");
    modal_container2.classList.remove("show");
  }
});
