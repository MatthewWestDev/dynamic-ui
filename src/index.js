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
const tabs = Array.from(document.querySelectorAll(".tabBtn"));
console.log(`Number of slides: ${slides.length}`);
console.log(`Number of tabs: ${tabs.length}`);
let slideIndex = 1;
let intervalId;
showSlide(slideIndex);
autoSlide();

for (const tab of tabs) {
  tab.addEventListener("click", () => {
    const tabIndex = tabs.indexOf(tab);
    console.log(`tabIndex ${tabIndex}`);
    showSlide(tabIndex + 1);
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

function autoSlide() {
  if (!intervalId) {
    console.log("autoslide");
    intervalId = setInterval(() => {
      slideIndex++;
      showSlide(slideIndex);
    }, 5000);
  }
}
function stopAutoSlide() {
  clearInterval(intervalId);
  intervalId = null;
}
const carouselWrapper = document.querySelector(".carousel-wrapper");
carouselWrapper.addEventListener("mouseenter", () => {
  console.log("stopping autoslide");
  stopAutoSlide();
});
carouselWrapper.addEventListener("mouseleave", () => {
  console.log("restarting autoslide");
  autoSlide();
});

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
  setCurrentTab(slideNum - 1);
}

function setCurrentTab(currentSlideNum) {
  for (const tab of tabs) {
    if (tabs.indexOf(tab) == currentSlideNum) {
      console.log(`tab index ${tabs.indexOf(tab)}`);
      tab.classList.add("current");
    } else {
      tab.classList.remove("current");
    }
  }
}
