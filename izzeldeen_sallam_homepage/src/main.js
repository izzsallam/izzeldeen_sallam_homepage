const burger = document.querySelector('.header__burgernav');
const nav = document.querySelector('.header__nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav_collapse');
});
