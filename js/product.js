const btns = document.getElementsByClassName('productTabLink')
const content = document.getElementsByClassName('productDetailsContent')
const addBtn = document.getElementsByClassName('addBtn')[0]

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