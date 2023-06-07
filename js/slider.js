const dots = document.querySelectorAll('.slider__dot');
const img = document.querySelector('.slider__image');
const imgSlides = ['./img/slide_1.png','./img/slide_2.png','./img/slide_3.png'];
let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    if(currentIndex >= imgSlides.length){
        currentIndex = 0;
    } else if (currentIndex<0) {
        currentIndex = imgSlides.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.visibility = 'hidden';
    setTimeout(()=>{
        img.style.visibility = 'visible';
    }, 0);
    img.src = imgSlides[index];
    updateDots(index);
    
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}

const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});

