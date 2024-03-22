

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // autoplay: 
  //   {
  //     delay: 4000,
  //   },

  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 3
    },
    1595: {
      slidesPerView: 2
    }
  }
});