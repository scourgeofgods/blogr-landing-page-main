const navtoggler = document.querySelector(".navbar-toggler");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
console.log(close);
console.log(navtoggler);

open.addEventListener("click", () => {
  open.classList.add("d-none");
  close.classList.remove("d-none");
});
close.addEventListener("click", () => {
  open.classList.remove("d-none");
  close.classList.add("d-none");
});
