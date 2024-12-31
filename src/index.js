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
const tabs = Array.from(document.querySelectorAll(".tab"));
// console.log(slides.length);
let slideIndex = 1;
showSlide(slideIndex);

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    const tabIndex = tabs.indexOf(tab);
    console.log(`tabIndex ${tabIndex}`);
    showSlide(tabIndex);
  });
}

const previousBtn = document.querySelector(".previous");
previousBtn.addEventListener("click", () => {
  moveSlide(slideIndex - 1);
});

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => {
  console.log(`Next clicked, ${slideIndex}`);
  moveSlide(slideIndex + 1);
});

function moveSlide(num) {
  console.log(`Moving to slide ${num}`);
  slideIndex = num;
  showSlide(num);
}

// just a starting point
function autoSlide() {
  slideIndex++;
  setTimeout(showSlide, 5000, slideIndex);
}

function showSlide(slideNum) {
  if (slideNum > slides.length) {
    console.log(`Rolling ahead to the first slide`);
    slideNum = 1;
  }
  if (slideNum < 1) {
    console.log(`Rolling back to the last slide`);
    slideNum = slides.length;
  }
  for (const slide of slides) {
    slide.style.display = "none";
  }
  slideIndex = slideNum;
  slides[slideNum - 1].style.display = "block";
}
