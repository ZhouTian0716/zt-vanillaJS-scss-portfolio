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
const expDetails = document.querySelectorAll(".experience__details");
const expTabs = document.querySelector(".experience__tabs");
const expActive = document.querySelector("#experience__active");

expBtns.forEach((e) =>
  e.addEventListener("click", (e) => {
    expIndex = parseInt(e.target.getAttribute("data-index"));
    console.log(expIndex);
    deviceWidth = window.visualViewport.width;
    // check translate X or Y depend on screen size
    if (deviceWidth < 768) {
      expActive.style.transform = `translate( ${expIndex * 120}px,0px )`;
    } else {
      expActive.style.transform = `translate(-100%, ${expIndex * 100}%)`;
    }
    // step 1: remove all active class
    expDetails.forEach((el) => el.classList.remove("active"));
    // step 2: add active class to selected one
    expDetails.forEach((el) => {
      if (parseInt(el.getAttribute("data-index")) === expIndex) {
        el.classList.add("active");
      }
    });
  })
);

// This is only for develepment resizing
window.addEventListener("resize", () => {
  deviceWidth = window.visualViewport.width;
  if (deviceWidth < 768) {
    expActive.style.transform = `translate( ${expIndex * 120}px,0px )`;
  } else {
    expActive.style.transform = `translate( -100%, ${expIndex * 100}% )`;
  }
});
// This is only for develepment resizing


window.addEventListener('click',e=>{
  console.log(e.target)
})
