const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
let imgs = document.getElementsByClassName('carousel_img')
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