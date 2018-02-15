const menuBtn = document.getElementsByClassName('mobileMenu')[0]
const menuContent = document.getElementsByClassName('navbarContent')[0]
const cartCount = document.getElementById('cartCount')

menuBtn.addEventListener('click', () => {
    if (menuContent.classList.contains('mobileMenuOpen')) {
        menuContent.classList.remove('mobileMenuOpen')
    } else {
        menuContent.classList.add('mobileMenuOpen')
    }
});

(() => {
    if (sessionStorage.getItem('cartCount')) {
        cartCount.innerText = sessionStorage.getItem('cartCount')
    } else {
        cartCount.innerText = '0'
    }
})()

cartCount.addEventListener('click', () => {
    sessionStorage.setItem('cartCount', 0)
    cartCount.innerText = "0"
})