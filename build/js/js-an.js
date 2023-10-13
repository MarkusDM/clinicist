const proceduresSwiper = new Swiper('.procedures__item-swiper', {
  navigation: {
    nextEl: '.procedures__item-btn-next',
    prevEl: '.procedures__item-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: rem(3),
  speed: 1000,
})

const valueslider = new Swiper('.values-swiper', {
  direction: 'vertical',
  navigation: {
    nextEl: '.values-btn-next',
    prevEl: '.values-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1000,
})



const quoteSlider = new Swiper('.quote-swiper', {
  navigation: {
    nextEl: '.quote-btn-next',
    prevEl: '.quote-btn-prev',
  },
  slidesPerView: 4,
  spaceBetween: rem(0.5),
  speed: 1000,
})
