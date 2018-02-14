const btns = document.getElementsByClassName('productTabLink')
const content = document.getElementsByClassName('productDetailsContent')

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