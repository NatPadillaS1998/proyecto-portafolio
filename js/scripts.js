// TODO Scripts
const menu = document.querySelector(".menu-toggle");

const menuList = menu.querySelector(".menu-list");

menu.addEventListener("click", menuToggler);

function menuToggler() {
  menuList.toggleAttribute("hidden");
}
