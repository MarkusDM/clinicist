"use strict";

$( document ).ready(function() {

    $('.tabs-news__btn').on('click', function () {
      $('.tabs-news__btn').removeClass('active')
      $(this).toggleClass('active')
    })

    $('.js-toggle').on('click', function () {
      $('.js-toggle').removeClass('active')
      $(this).toggleClass('active')
    })

    const newsArticleSlidder = new Swiper('.news-descs__desc-slider', {
      spaceBetween: rem(1),
      loop: false,
      autoplay: {
        delay: 4000,
      },
      speed: 1000,
      navigation: {
        nextEl: '.news-descs__desc-slider .btn-next',
        prevEl: '.news-descs__desc-slider .btn-prev',
      },
      pagination: {
        el: '.news-descs__desc-slider .swiper-pagination',
        clickable: true,
      },
    })
})