// Mobile menu
const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.drawer');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.close');

if (hamburger && drawer) {
  hamburger.addEventListener('click', () => drawer.classList.add('open'));
  backdrop.addEventListener('click', () => drawer.classList.remove('open'));
  closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
}
