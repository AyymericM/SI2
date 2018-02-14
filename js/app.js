const menuBtn = document.getElementsByClassName('mobileMenu')[0]
const menuContent = document.getElementsByClassName('navbarContent')[0]

menuBtn.addEventListener('click', () => {
    if (menuContent.classList.contains('mobileMenuOpen')) {
        menuContent.classList.remove('mobileMenuOpen')
    } else {
        menuContent.classList.add('mobileMenuOpen')
    }
})