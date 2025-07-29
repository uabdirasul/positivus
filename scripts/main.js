// menu toggler
const toggler = document.querySelector(".header__toggler");
const nav = document.querySelector(".header__nav");

toggler.addEventListener("click", () => {
  toggler.classList.toggle("open");
  nav.classList.toggle("mobile-open");
});
