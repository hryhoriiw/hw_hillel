
const images = document.querySelectorAll('.myImg')

const randomImg = Math.floor(Math.random() * images.length);

images[randomImg].classList.remove('hidden')

console.log(images[randomImg])