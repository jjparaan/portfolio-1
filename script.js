// loading screen
var loader = document.getElementById('preloader')

window.addEventListener('load', function(){
    loader.style.display = 'none'
})

// sliding img
var slideImg = document.getElementById('slideImg')

var images = new Array(
    'img/rwd.jpeg',
    'img/digital-marketing.jpg',
    'img/login.jpg',
    'img/contact.jpg'
)

var len = images.length
var i = 0

function slider(){
    if(i > len-1) {
        i = 0
    }
    slideImg.src = images[i]
    i++
    setTimeout('slider()', 3000)
}

// modal
const modalBtn = document.getElementById('modal-btn')
const modalContainer = document.getElementById('modal_container')
const modalExt = document.getElementById('modal-ext')

modalBtn.addEventListener('click', () => {
    modalContainer.classList.add('show-modal')
})

modalExt.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal')
})

// filter

const all = document.querySelector('.all')
const items = document.querySelector('.web9')

all.addEventListener('click', function(){
    items.classList.toggle('show-item')
})

// contact form