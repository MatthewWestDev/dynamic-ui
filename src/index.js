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
