const page = document.getElementsByTagName('html')[0]
const header = document.getElementsByClassName('header')[0]
const navbar = document.getElementsByClassName('navbarContent')[0]
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
let imgs = document.getElementsByClassName('carousel_img')
let txt = document.getElementById('carouselTxt')
let index = 0

// CAROUSEL STUFF

document.getElementById('carousel').style.width = `${100*imgs.length}vw`;

(() => {
    let container = document.getElementsByClassName('carouselBtns')[0]
    if (index<=0) {
        btnLeft.style.visibility = 'hidden'
        btnLeft.style.opacity = '0'
        container.style.transform = 'translateX(-40px)'
    } else if (index >= imgs.length*100-100) {
        btnRight.style.visibility = 'hidden'
        btnRight.style.opacity = '0'
        container.style.transform = 'translateX(40px)'
    } else {
        return
    }
})()

btnRight.addEventListener('click', () => {
    if (index < imgs.length*100-100) {
        btnLeft.style.visibility = 'visible'
        btnLeft.style.opacity = '1'
        index += 100
        let container = document.getElementsByClassName('carouselBtns')[0]
        if (index >= imgs.length*100-100) {
            btnRight.style.visibility = 'hidden'
            btnRight.style.opacity = '0'
            container.style.transform = 'translateX(40px)'
        } else {
            container.style.transform = 'translateX(0)'
            btnRight.style.visibility = 'visible'
            btnRight.style.opacity = '1'
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = `translateX(-${index}%)`
        }
    }
})

btnLeft.addEventListener('click', () => {
    if (index > 0) {
        btnRight.style.visibility = 'visible'
        btnRight.style.opacity = '1'
        index -= 100
        let container = document.getElementsByClassName('carouselBtns')[0]
        if (index<=0) {
            btnLeft.style.visibility = 'hidden'
            btnLeft.style.opacity = '0'
            container.style.transform = 'translateX(-40px)'
        } else {
            container.style.transform = 'translateX(0)'
            btnLeft.style.visibility = 'visible'
            btnLeft.style.opacity = '1'
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = `translateX(-${index}%)`
        }
    }
})

// NAVBAR TRANSFORMATION

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