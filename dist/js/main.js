let lastScrollTop;
navbar = document.querySelector("#nav_bar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else if (scrollTop === 0) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-10px";
  }
  lastScrollTop = scrollTop;
});

// set work experience menu tab click event
let expIndex;
const expBtns = document.querySelectorAll(".experience__btn");
const expTabs = document.querySelector(".experience__tabs");
const expActive = document.querySelector("#experience__active");

expBtns.forEach((e) =>
  e.addEventListener("click", (e) => {
    expIndex = parseInt(e.target.getAttribute("data-index"));
    console.log(expIndex);

    expActive.style.transform = `translate(-100%, ${expIndex * 100}%)`;
  })
);
