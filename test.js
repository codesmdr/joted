//FAQ
document.querySelectorAll(".box h3").forEach((faqBox) => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle("active");
  };
});
