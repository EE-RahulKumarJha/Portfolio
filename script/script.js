const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  container.classList.toggle("show");
});

function toggleMenu() {
  if (window.innerWidth <= 950 && container.classList.contains("show")) {
    container.classList.remove("show");
    main.style.marginLeft = "0";
  }

  if (window.innerWidth > 950 && !container.classList.contains("show")) {
    container.classList.add("show");
    main.style.marginLeft = "18.75rem";
  }
}

window.addEventListener("resize", toggleMenu);
window.addEventListener("load", toggleMenu);

window.addEventListener("click", (event) => {
  const isSidebar =
    event.target.closest("#header") || event.target.closest(".hamburger");
  if (isSidebar || window.innerWidth > 950) return;

  container.classList.remove("show");
});
