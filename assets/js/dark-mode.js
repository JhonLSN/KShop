const btnDark = document.querySelector('.footer__dark-mode')
const header = document.querySelector('.header')
const headerInput = document.querySelector('.header__input')

btnDark.addEventListener('click', () => {
  header.classList.toggle('dark')
  header
})