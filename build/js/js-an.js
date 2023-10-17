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

function updatePaginationType() {
  let newPaginationType = window.innerWidth < 768 ? 'bullets' : 'fraction';

  mySwiper.pagination.destroy();
  mySwiper.pagination.init();
  mySwiper.pagination.render();
  mySwiper.pagination.update({ type: newPaginationType });
}

const proceduresSwiper = new Swiper('.procedures__item-swiper', {
  navigation: {
    nextEl: '.procedures__item-btn-next',
    prevEl: '.procedures__item-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: rem(3),
  speed: 1000,
})

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
  // thumbs: {
  //   swiper: valueThumbs
  // },
  speed: 1000,
})

valueslider.controller.control = valueThumbs;
valueThumbs.controller.control = valueslider;


const quoteSlider = new Swiper('.licenzia-swiper', {
  //loop: true,
  navigation: {
    nextEl: '.licenzia-btn-next',
    prevEl: '.licenzia-btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 4,
  spaceBetween: rem(2.1),
  speed: 1000,
  breakpoints: {
    375: {
      spaceBetween: rem(4.2),
      slidesPerView: 2,
      slidesPerColumn: 2,
      // grid: {
      //   fill: "row",
      //   rows: 2,
      // },
    },
  }
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
    el: '.swiper-pagination',
    type: 'fraction',
  },
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1000,
})

window.addEventListener('resize', function () {
  updatePaginationType();
});

updatePaginationTypeForSlider();