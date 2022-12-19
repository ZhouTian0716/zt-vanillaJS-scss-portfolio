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
let deviceWidth;
const expBtns = document.querySelectorAll(".experience__btn");
const expTabs = document.querySelector(".experience__tabs");
const expActive = document.querySelector("#experience__active");

expBtns.forEach((e) =>
  e.addEventListener("click", (e) => {
    expIndex = parseInt(e.target.getAttribute("data-index"));
    deviceWidth = window.visualViewport.width;
    if (deviceWidth < 768) {
      // check translate X or Y depend on screen size
      // expActive.style.transform = `translate(-100%, ${expIndex * 100}%)`;
      expActive.style.transform = `translate( ${expIndex * 120}px,-2px )`;
    } else {
      expActive.style.transform = `translate(-100%, ${expIndex * 100}%)`;
    }
  })
);

window.addEventListener("resize", () => {
  deviceWidth = window.visualViewport.width;
  if (deviceWidth < 768) {
    expActive.style.transform = `translate( ${expIndex * 120}px,-2px )`;
  } else {
    expActive.style.transform = `translate( -100%, ${expIndex * 100}% )`;
  }

  // console.log(deviceWidth);
});
