"use strict";

$( document ).ready(function() {

    $('.js-toggle').on('click', function () {
      $('.js-toggle').removeClass('active')
      $(this).toggleClass('active')
    })

    $('.leave-comment__stars-star').each(function() {
      $(this).on('click', function() {
        const star = $(this).attr('data-star-value');
        $(this).parent().attr('data-star-total', star);
      })
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

    const blogArticleSlidder = new Swiper('.blog-desc__desc-slider', {
      spaceBetween: rem(1),
      loop: false,
      autoplay: {
        delay: 4000,
      },
      speed: 1000,
      navigation: {
        nextEl: '.blog-desc__desc-slider .btn-next',
        prevEl: '.blog-desc__desc-slider .btn-prev',
      },
      pagination: {
        el: '.blog-desc__desc-slider .swiper-pagination',
        clickable: true,
      },
    })
})