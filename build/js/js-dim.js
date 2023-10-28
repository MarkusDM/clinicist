"use strict";

$( document ).ready(function() {

    $('.input_email input').inputmask('email');

    $('.tel-mask-2').inputmask('+7 (999) 999-99-99');

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

    if($('.news-descs__desc-slider')) {
      const newsArticleSlidder = new Swiper('.news-descs__desc-slider', {
        spaceBetween: 10,
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
    }

    if($('.blog-desc__desc-slider')) {
        const blogArticleSlidder = new Swiper('.blog-desc__desc-slider', {
        spaceBetween: 10,
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
    }
})