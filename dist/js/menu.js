const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav__modal');
const overlay = document.querySelector('#overlay');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

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