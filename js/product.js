const btns = document.getElementsByClassName('productTabLink')
const content = document.getElementsByClassName('productDetailsContent')
const addBtn = document.getElementsByClassName('addBtn')[0]
const rates = document.getElementsByClassName('productRate')
let hasRated = false;
// TAB NAVIGATION

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        for (let j = 0; j < btns.length; j++) {
            btns[j].classList.remove('activeTab')
            content[j].classList.remove('activeDetails')
        }
        btns[i].classList.add('activeTab')
        content[i].classList.add('activeDetails')
    })
}

// ADD TO CART COUNTER

addBtn.addEventListener('click', () => {
    if (sessionStorage.getItem('cartCount')) {
        let newCount = parseInt(sessionStorage.getItem('cartCount')) + 1
        sessionStorage.setItem('cartCount', newCount)
        cartCount.innerText = newCount
    } else {
        sessionStorage.setItem('cartCount', 1)
        cartCount.innerText = '1'
    }
})

// RATING SYSTEM

function markRate(index) {
    for (let i = 0; i < rates.length; i++) {
        if (i >= index) {
            rates[i].classList.add('grayRate')
        } else {
            rates[i].classList.remove('grayRate')
        }
    }
}

for (let i = 0; i < rates.length; i++) {
    rates[i].addEventListener('mouseover', (e) => {
        if (!hasRated) {
            markRate(e.target.dataset.i)
        }
    })

    rates[i].addEventListener('click', (e) => {
        if (!hasRated) {
            hasRated = true;
            markRate(e.target.dataset.i)
        }
    })
}