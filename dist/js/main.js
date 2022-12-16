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
