let images = document.querySelectorAll('.image img');
let prev = document.querySelector('.prev');
let post = document.querySelector('.post');
let close = document.querySelector('.close');
let galleryImg = document.querySelector('.gallery-inner img');
let gallery = document.querySelector('.gallery');

let currentIndex = 0;

function showGallery(){

    if(currentIndex ===0){
prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if(currentIndex === images.length - 1){
post.classList.add('hide')
    } else {
        post.classList.remove('hide')
    }


    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery();
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery();
    }
})

post.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showGallery();
    }
})