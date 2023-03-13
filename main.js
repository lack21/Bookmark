// lear
// Bookmark

window.addEventListener("DOMContentLoaded", () => {
  const featureBtns = document.querySelectorAll(".feature-btn");
  const features = document.querySelectorAll(".feature");

  const iconArrows = document.querySelectorAll(".icon-arrow");
  const questionAnswers = document.querySelectorAll(".answer");

  const linksBtn = document.querySelector(".links-btn");
  const links = document.querySelector(".links");

  featureBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      featureBtns.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");

      features.forEach((item) => item.classList.remove("active"));
      features[index].classList.add("active");
    });
  });

  iconArrows.forEach((item, index) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      questionAnswers[index].classList.toggle("active");
    });
  });

  linksBtn.addEventListener("click", () => {
    links.classList.toggle("active");
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 5, linksBtn.src.length - 4) ==
      "r"
        ? "images/icon-close.svg"
        : "images/icon-hamburger.svg";
  });
});
