const btnMobile = document.querySelector('.header__btnMobile')

function toggleMenu() {
  const nav = document.querySelector('.header__nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)