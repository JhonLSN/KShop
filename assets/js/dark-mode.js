const btnDark = document.querySelector('.footer__dark-mode')
const header = document.querySelector('.header')
const headerInput = document.querySelector('.header__input')
const footer = document.querySelector('.footer')

btnDark.addEventListener('click', () => {
  let btnItems = document.querySelectorAll('.main-items__card .btn')
  
  btnDark.classList.toggle('dark')
  header.classList.toggle('dark')
  headerInput.classList.toggle('dark')
  btnItems.forEach((btn) => {
    btn.classList.toggle('dark')
  })
  footer.classList.toggle('dark')
})