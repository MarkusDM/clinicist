const proceduresSwiper = new Swiper('.procedures__item-swiper', {
  navigation: {
    nextEl: '.procedures__item-btn-next',
    prevEl: '.procedures__item-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: rem(2.5),
  speed: 1000,
})

const valuesSwiper = new Swiper('.value-swiper', {
  loop: true,
  navigation: {
    nextEl: '.values-btn-next',
    prevEl: '.values-btn-prev',
  },
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1000,
})

let active = document.querySelector('.image-active');
let slides = Array.from(document.querySelector('.quote__inner-left-swiper .swiper-slider'));

const quoteSwiper = new Swiper('.quote-swiper', {
  loop: true,
  navigation: {
    nextEl: '.quote-btn-next',
    prevEl: '.quote-btn-prev',
  },
  slidesPerView: 4,
  spaceBetween: rem(0.5),
  speed: 1000,
  on: {
    slideChange: function (blueBannerSwiper) {
        active.removeClass('image-active');
        active.addClass('image');
        slides[blueBannerSwiper.realIndex % 4 + 1].addClass('image-active');
        slides[blueBannerSwiper.realIndex % 4 + 1].removeClass('image');
    }
  }
})