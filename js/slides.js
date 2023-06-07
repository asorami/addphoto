function myFunction(x) {
  if (x.matches) { 
    var swiper = new Swiper(".slide-content", {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  } else {
    var swiper = new Swiper(".slide-content", {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}
var x = window.matchMedia("(max-width: 1600px)")
myFunction(x)
x.addListener(myFunction)
