const page = document.getElementsByTagName('html')[0]
const header = document.getElementsByClassName('header')[0]
const navbar = document.getElementsByClassName('navbarContent')[0]
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
let imgs = document.getElementsByClassName('carousel_img')
let txt = document.getElementById('carouselTxt')
let index = 0

document.getElementById('carousel').style.width = `${100*imgs.length}vw`

btnRight.addEventListener('click', () => {
    if (index < imgs.length*100-100) {
        index += 100
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = `translateX(-${index}%)`
        }
    }
})

btnLeft.addEventListener('click', () => {
    if (index > 0) {
        index -= 100
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = `translateX(-${index}%)`
        }
    }
})

window.addEventListener('scroll', () => {
    if (page.scrollTop > header.clientHeight) {
        if (!navbar.classList.contains('big')) {
            navbar.classList.add('big')
        }
    } else {
        if (navbar.classList.contains('big')) {
            navbar.classList.remove('big')
        }
    }
})