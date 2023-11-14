"use strict";

const historyItems = Array.from(document.querySelectorAll('.story__item'));
const storyBottoms = Array.from(document.querySelectorAll('.story__bottom'));
const valuesTabs = Array.from(document.querySelectorAll('.values__left-slide'));
const valuesSlides = Array.from(document.querySelectorAll('.values__right-slide'));
const searchBtn = document.querySelector('.search-btn');
const searchLabel = document.querySelector('.search__label');
const btnMore = Array.from(document.querySelectorAll('.services-p__box-link'));
const mapList = document.querySelectorAll('.services-p__box-inner');

let tabIndex;
if(historyItems) {
  historyItems.forEach( e => {
    e.addEventListener('mouseenter', () => {
      e.childNodes[7].classList.add('active');
    })
    e.addEventListener('mouseleave', () => {
      e.childNodes[7].classList.remove('active');
    })
  })
}

if(searchBtn) {
  searchBtn.addEventListener('click', () => {
    searchBtn.classList.add('active');
    searchLabel.style.display = 'block';
  })
}

if(btnMore) {
  btnMore.forEach(e => {
    e.addEventListener('click', () => {
      e.classList.toggle('active');
      e.previousElementSibling.childNodes[5].classList.toggle('active')
    })
  })
}

mapList.forEach(e => {
  e.addEventListener('click', () => {
    if(e.className.includes('active')) {
      e.parentElement.nextElementSibling.style.display = 'block';
    }
    if(!(e.className.includes('active'))) {
      e.parentElement.nextElementSibling.style.display = 'none';
    }
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

// const aboutDoctors = new Swiper('.about-doctors__slider', {
//   slidesPerView: 3,
//   spaceBetween: rem(4),
//   navigation: {
//     nextEl: '.about-doctors__btn-next',
//     prevEl: '.about-doctors__btn-prev',
//   },
//   pagination: {
//     el: '.about-doctors__slider-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   breakpoints: {
//     768: {
//       spaceBetween: rem(4),
//       slidesPerView: 3,
//     },
//     120: {
//       spaceBetween: rem(8),
//       slidesPerView: 1,
//     },
//   },
// })

let historySlider;
let aboutDoctors;

function historyInit() {
  if (historySlider) {
    historySlider.destroy(true, true);
  }

  if(document.querySelector('.story-swiper')) {
    historySlider = new Swiper('.story-swiper', {
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
            spaceBetween: rem(8),
          }
        },
    })
  }
}

function doctorsInit() {
  if (aboutDoctors) {
    aboutDoctors.destroy(true, true);
  }

  if(document.querySelector('.about-doctors__slider')) {
    aboutDoctors = new Swiper('.about-doctors__slider', {
      slidesPerView: 3,
      spaceBetween: rem(4),
      navigation: {
        nextEl: '.about-doctors__btn-next',
        prevEl: '.about-doctors__btn-prev',
      },
      pagination: {
        el: '.about-doctors__slider-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: rem(4),
          slidesPerView: 3,
        },
        120: {
          spaceBetween: rem(8),
          slidesPerView: 1,
        },
      },
    })
  }
}

const closeBtn = document.querySelector('.modal-licenzia__slider-close');
let slider = document.querySelector('.modal-licenzia__slider')
let index;
if(closeBtn) {
  closeBtn.addEventListener('click', () => {
    slider.classList.remove('active');
  })
}

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
        clickable: true,
      }
    }
  },
})

const licenseModalSlider = new Swiper('.modal-licenzia__swiper', {
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

const licenseSlider = new Swiper('.license-swiper', {
  spaceBetween: rem(3),
  slidesPerGroup: 4,
  slidesPerView: 4,
  watchOverflow: true,

  navigation: {
    nextEl: '.license-btn-next',
    prevEl: '.license-btn-prev',
  },
  pagination: {
    el: '.license-pagination',
    type: 'bullets',
    clickable: true,
  },
  speed: 1000,
  breakpoints: {
    768: {
      spaceBetween: rem(3),
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
        licenseModalSlider.slideTo(index, 0);
        licenseModalSlider.update();
      }
    },
    resize: function(licenseSlider) {
      licenseSlider.update();
    }
  },
})

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 768) {
    historyInit();
    doctorsInit()
  } else if(width > 768) {
    historyInit();
    doctorsInit();
    if (aboutDoctors.slides.length <= 3) {
      aboutDoctors.destroy(false, false);
    }
    if(document.querySelector('.story-swiper')) {
      historySlider.destroy(false, false);
    }
  }
})

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width < 768) {
    historyInit()
    doctorsInit();
    if(document.querySelector('.license-swiper')) {
      licenseSlider.update();
    }
   } else if(width > 768) {
    historyInit()
    doctorsInit();
    if (aboutDoctors.slides.length <= 3) {
      aboutDoctors.destroy(false, false);
    }
    if(document.querySelector('.story-swiper')) {
      historySlider.destroy(false, false);
    }
    if(document.querySelector('.license-swiper')) {
      licenseSlider.update();
    }
  }
})

document.addEventListener('click', (el) => {
  const licenseModal = document.querySelector('.modal-licenzia__wrapper');
  const notSlider = el.composedPath().includes(licenseModal);
  const notModal = el.composedPath().includes(slider);
    if(slider.className.includes('active')) {
      if(notModal && !notSlider){
        slider.classList.remove('active');
      }
    }
});

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