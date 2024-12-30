import "./styles.css";

const flyoutItems = document.querySelectorAll("li.has-submenu");

for (const flyoutItem of flyoutItems) {
  let timer;
  flyoutItem.addEventListener("mouseover", function () {
    this.className = "has-submenu open";
    this.querySelector("a").setAttribute("aria-expanded", "true");
    clearTimeout(timer);
  });
  flyoutItem.addEventListener("mouseout", function () {
    timer = setTimeout(function () {
      const opened = document.querySelector(".has-submenu.open");
      opened.className = "has-submenu";
      opened.querySelector("a").setAttribute("aria-expanded", "false");
    }, 800);
  });
}

const slides = document.querySelectorAll(".carousel-slide");
console.log(slides.length);
let slideIndex = 0;
showSlide();
function showSlide() {
  slideIndex++;
  console.log(slideIndex);
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlide, 5000);
}
