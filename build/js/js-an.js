const storyItems = Array.from(document.querySelectorAll('.story__item'));
const storyBottoms = Array.from(document.querySelectorAll('.story__bottom'));
const valuesTabs = Array.from(document.querySelectorAll('.values__left-slide'));
const valuesSlides = Array.from(document.querySelectorAll('.values__right-slide'));
let tabIndex;
storyItems.forEach( e => {
  e.addEventListener('mouseenter', () => {
    e.childNodes[7].classList.add('active');
  })
  e.addEventListener('mouseleave', () => {
    e.childNodes[7].classList.remove('active');
  })
})

valuesTabs.forEach(e => {
  e.addEventListener('click', () => {
    for(let i = 0; i < valuesTabs.length;i++){
      valuesTabs[i].classList.remove('active-tab');
      valuesSlides[i].classList.remove('active-slide');
    }
    e.classList.add('active-tab');
    tabIndex = valuesTabs.indexOf(e);
    valuesSlides[tabIndex].classList.add('active-slide');
  })
})

const historySlider = new Swiper('.story-swiper', {
  freeMode: false,
  slidesPerView: 5,
  spaceBetween: rem(4),
  speed: 1000,
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: rem(4),
    },
    200: {
      slidesPerView: 2,
      spaceBetween: rem(8.8),
    }
  }
})

const doctorsSlider = new Swiper('.our-doctors__slider', {
  slidesPerView: 3,
})

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 768){
    historySlider.init(historySlider);
    doctorsSlider.init(doctorsSlider);
  }
  historySlider.destroy(false, false);
  doctorsSlider.destroy(false, false);
})

const closeBtn = document.querySelector('.modal-licenzia__slider-close');
let slider = document.querySelector('.modal-licenzia__slider')
let index;
closeBtn.addEventListener('click', () => {
  slider.classList.remove('active');
})



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

const llSlider = new Swiper('.modal-licenzia__swiper', {
  //loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.modal-licenzia-btn-next',
    prevEl: '.modal-licenzia-btn-prev',
  },
  spaceBetween: rem(5),
  speed: 1000,
})


const quoteSlider = new Swiper('.licenzia-swiper', {
  slidesPerGroup: 4,
  slidesPerView: 4,

  navigation: {
    nextEl: '.licenzia-btn-next',
    prevEl: '.licenzia-btn-prev',
  },
  pagination: {
    el: '.licenzia-pagination',
    type: 'bullets',
    clickable: true,
  },
  spaceBetween: rem(2.1),
  speed: 1000,
  breakpoints: {
    768: {
      spaceBetween: rem(2.1),
      slidesPerGroup: 4,
      slidesPerView: 4,
      slidesPerColumn: 1,
    },
    120: {
      spaceBetween: rem(4.2),
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
  },
  on: {
    click: function (e) {
      if(e.clickedSlide !== undefined) {
        slider.classList.add('active');
        index = e.clickedIndex;
        llSlider.slideTo(index, 0);
        llSlider.update();
      }
    }
  },
})

document.addEventListener('click', (el) => {
  const licenseSlider = document.querySelector('.modal-licenzia__wrapper');
  const notSlider = el.composedPath().includes(licenseSlider);
  const notModal = el.composedPath().includes(slider);
    if(slider.className.includes('active')) {
      if(notModal && !notSlider){
        slider.classList.remove('active');
      }
    }
})

quoteSlider.controller.control = llSlider;

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