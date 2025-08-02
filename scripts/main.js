// menu toggler
const toggler = document.querySelector(".header__toggler");
const nav = document.querySelector(".header__nav");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("open");
  nav.classList.toggle("mobile-open");
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".testimonials-wrapper__container")) {
    tns({
      container: ".testimonials-wrapper__container",
      items: 1,
      center: true,
      mouseDrag: true,
      loop: true,
      slideBy: "page",
      controls: true,
      nav: true,
      autoplayButtonOutput: false
    });
  }
});
