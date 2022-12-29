const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav__modal');
const overlay = document.querySelector('#overlay');
const navLinks=document.querySelectorAll('.menu-nav__item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
navLinks.forEach(el=>el.addEventListener('click', closeMenu));

const closeMenu = () => {
  hamburger.classList.remove("open");
  nav.classList.remove("open");
  showMenu = false;
};

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    overlay.classList.add('open');


    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('open');

    showMenu = false;
  }
}