const storyItems = Array.from(document.querySelectorAll('.story__item'));
const storyBottoms = Array.from(document.querySelectorAll('.story__bottom'));
storyItems.forEach( e => {
  e.addEventListener('mouseenter', () => {
    e.childNodes[7].classList.add('active');
  })
  e.addEventListener('mouseleave', () => {
    e.childNodes[7].classList.remove('active');
  })
})

// const proceduresSwiper = new Swiper('.procedures__item-swiper', {
//   navigation: {
//     nextEl: '.procedures__item-btn-next',
//     prevEl: '.procedures__item-btn-prev',
//   },
//   slidesPerView: 1,
//   spaceBetween: rem(3),
//   speed: 1000,
// })

const valueThumbs = new Swiper('.thumbs-swiper', {
  slideToClickedSlide: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
})

const valueslider = new Swiper('.values-swiper', {
  slidesPerView: 1,
  spaceBetween: rem(1),
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
})

valueslider.controller.control = valueThumbs;
valueThumbs.controller.control = valueslider;

const licBtn = document.querySelectorAll('.licenzia__item-btn');
const closeBtn = document.querySelector('.modal-licenzia__slider-close');
const licSlides = document.querySelectorAll('.licenzia__item');
let slider = document.querySelector('.modal-licenzia__slider')
let index;
closeBtn.addEventListener('click', () => {
  slider.classList.remove('active');
})

const quoteSlider = new Swiper('.licenzia-swiper', {
  //loop: true,
  slidesPerView: 4,

  navigation: {
    nextEl: '.licenzia-btn-next',
    prevEl: '.licenzia-btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  spaceBetween: rem(2.1),
  speed: 1000,
  breakpoints: {
    768: {
      spaceBetween: rem(2.1),
      slidesPerView: 4,
      slidesPerColumn: 1,
    },
    120: {
      spaceBetween: rem(4.2),
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
  },
  on: {
    click: function (e) {
      console.log(e)
      if(e.clickedSlide !== undefined) {
        slider.classList.add('active');
        index = e.clickedIndex;
        llSlider.update();
      }
    }
  },
})

const llSlider = new Swiper('.modal-licenzia__swiper', {
  //loop: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  initialSlide: index,

  navigation: {
    nextEl: '.modal-licenzia-btn-next',
    prevEl: '.modal-licenzia-btn-prev',
  },
  spaceBetween: rem(52),
  speed: 1000,
})

quoteSlider.controller.control = llSlider;


const aboutSlider = new Swiper('.about-swiper', {
  navigation: {
    nextEl: '.about-btn-next',
    prevEl: '.about-btn-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.about-swiper-pagination',
    type: 'fraction',
  },
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1000,
  breakpoints: {
    768: {
      pagination: {
        el: '.about-swiper-pagination',
        type: 'fraction',
      },
    },
    375: {
      pagination: {
        el: '.about-swiper-pagination',
        type: 'bullets',
      }
    }
  }
})
