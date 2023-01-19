const backToTopButton = document.querySelector('a#backToTopButton')


window.addEventListener('scroll', showBackToTopButtonOnScroll)

function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500
}).reveal(`
.portifolio,
#sobre img,
#sobre h2,
#sobre p,
#sobre a,
.totem,
.card,
#knowledge,
.contato button,
.contato a,
.contato input,
.contato textarea`)