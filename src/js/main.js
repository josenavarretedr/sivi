import '../scss/style.scss'
// import { setupCounter } from './counter';

// setupCounter(document.querySelector('#counter'))

let $navbar_menuIcon = document.querySelector('.navbar__menuIcon');
let $navbar_menu = document.querySelector('.navbar__menu');
let $navbar_menuClose = document.querySelector('.navbar__menu__close');

$navbar_menuIcon.addEventListener('click', function () {
  $navbar_menu.classList.toggle('navbar__menu--open');
})

$navbar_menuClose.addEventListener('click', function () {
  $navbar_menu.classList.toggle('navbar__menu--open');
})

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    $navbar_menu.classList.toggle('navbar__menu--open');
  }
};
