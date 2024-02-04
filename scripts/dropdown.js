const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");
const selected = document.querySelector(".selected");
const check = document.querySelector(".check");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selected.innerText = option.innerText;

    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");

    check.classList.add("show");

    options.forEach((option) => {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});
