document.addEventListener('DOMContentLoaded', function () {
  $('.tel').mask('+7(999) 999-99-99');
  $('.mail').inputmask('email');

  // DROPDOWN
  if ($(window).width() >= 768) {
    $('.dropdown').mouseenter(function () {
      $(this).find('.dropdown-content').addClass('active');
    });

    $('.dropdown').mouseleave(function () {
      $('.dropdown-content').removeClass('active');
    });
  }

  // КОНЕЦ DROPDOWN

  // ТАБЫ
  $('.tabs__btn').click(function () {
    $('.tabs__btn').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.tabs__content').removeClass('active');
    $('.tabs__content[data-question=' + data + ']').toggleClass('active');
  });

  $('.tabs__btn2').click(function () {
    $('.tabs__btn2').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.tabs__content2').removeClass('active');
    $('.tabs__content2[data-question=' + data + ']').toggleClass('active');
  });

  // $('.tabs__btn3').click(function () {
  //   $('.tabs__btn3').removeClass('active')
  //   $(this).toggleClass('active')
  //   var data = $(this).data('question')
  //   $('.tabs__content3').removeClass('active')
  //   $('.tabs__content3[data-question=' + data + ']').toggleClass('active')
  // })

  $('.tabs__btn4').click(function () {
    $('.tabs__btn4').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.tabs__content4').removeClass('active');
    $('.tabs__content4[data-question=' + data + ']').toggleClass('active');
  });

  $('.tabs__btn5').click(function () {
    $('.tabs__btn5').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.tabs__content5').removeClass('active');
    $('.tabs__content5[data-question=' + data + ']').toggleClass('active');
  });

  $('.tabs__btn6').click(function () {
    $('.tabs__btn6').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('question');
    $('.tabs__content6').removeClass('active');
    $('.tabs__content6[data-question=' + data + ']').toggleClass('active');
  });

  // КОНЕЦ ТАБОВ

  // СЛАЙДЕРЫ

  const rem = function (rem) {
    if ($(window).width() > 768) {
      return 0.005208335 * $(window).width() * rem;
    } else {
      // где 375 это ширина моб версии макета
      return (100 / 375) * (0.05 * $(window).width()) * rem;
    }
  };

  const slider1 = new Swiper('.baner-swiper', {
    spaceBetween: rem(1),
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.baner-btn-next',
      prevEl: '.baner-btn-prev',
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.baner-swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        autoHeight: false,
      },
    },
  });

  const slider2 = new Swiper('.person-swiper', {
    spaceBetween: rem(1),
    speed: 1000,
    pagination: {
      el: '.person-swiper-pagination',
      clickable: true,
    },
  });

  const slider3 = new Swiper('.reviews-swiper', {
    spaceBetween: rem(1),
    speed: 1000,
    navigation: {
      nextEl: '.reviews__slider-control .btn-next',
      prevEl: '.reviews__slider-control .btn-prev',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.reviews__slider-control .swiper-pagination',
      clickable: true,
    },
  });

  const slider4 = new Swiper('.team-swiper', {
    spaceBetween: rem(1),
    speed: 1000,
    navigation: {
      nextEl: '.team-btn-next',
      prevEl: '.team-btn-prev',
    },
    scrollbar: {
      el: '.team-scrollbar',
      draggable: true,
    },
  });

  const slider5 = new Swiper('.procedures__item-content-slider-wrapper', {
    navigation: {
      nextEl: '.proced-btn-next',
      prevEl: '.proced-btn-prev',
    },

    spaceBetween: 10,
  });

  new Swiper('.procedures__item-content-slider-wrapper1', {
    navigation: {
      nextEl: '.proced-btn-next1',
      prevEl: '.proced-btn-prev1',
    },

    spaceBetween: 10,
  });

  new Swiper('.procedures__item-content-slider-wrapper2', {
    navigation: {
      nextEl: '.proced-btn-next2',
      prevEl: '.proced-btn-prev2',
    },

    spaceBetween: 10,
  });

  const slider6 = new Swiper('.offer-swiper', {
    spaceBetween: rem(1),
    loop: true,
    autoplay: {
      delay: 4000,
    },
    speed: 1000,
    navigation: {
      nextEl: '.offer-btn-next',
      prevEl: '.offer-btn-prev',
    },
    pagination: {
      el: '.offer-swiper-pagination',
      clickable: true,
    },
  });

  const slider7 = new Swiper('.complex-program-swiper', {
    navigation: {
      nextEl: '.complex-program-btn-next',
      prevEl: '.complex-program-btn-prev',
    },
    pagination: {
      el: '.complex-program-pagination .total',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let totalRes2 = total >= 10 ? total : `0${total}`;
        return totalRes2;
      },
    },
    slidesPerView: 1,
    spaceBetween: rem(2),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 1,
        spaceBetween: rem(1),
        speed: 1000,
      },
    },
  });
  let curnum2 = document.querySelector('.complex-program-pagination .current');
  slider7.on('slideChange', function () {
    let ind2 = slider7.realIndex + 1,
      indRes2 = ind2 >= 10 ? ind2 : `0${ind2}`;
    curnum2.innerHTML = indRes2;
  });

  const slider8 = new Swiper('.korzina-swiper', {
    spaceBetween: rem(1),
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.korzina-btn-next',
      prevEl: '.korzina-btn-prev',
    },
    speed: 1000,
    pagination: {
      el: '.korzina-swiper-pagination',
      clickable: true,
    },
  });

  const slider9 = new Swiper('.disease-swiper', {
    spaceBetween: rem(1),
    autoplay: {
      delay: 4000,
    },
    loop: true,
    observer: true,
    observeParents: true,
    speed: 1000,
    pagination: {
      el: '.disease-swiper-pagination',
      clickable: true,
    },
  });

  const slider10 = new Swiper('.reviews-un-swiper', {
    spaceBetween: rem(1),
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.reviews-un-btn-next',
      prevEl: '.reviews-un-btn-prev',
    },
    speed: 1000,
    pagination: {
      el: '.reviews-un-swiper-pagination',
      clickable: true,
    },
  });

  const slider11 = new Swiper('.podgotovka-specialnosti-swiper', {
    slidesPerView: 3,
    spaceBetween: rem(3.6),
    speed: 1000,
    navigation: {
      nextEl: '.podgotovka-specialnosti-btn-next',
      prevEl: '.podgotovka-specialnosti-btn-prev',
    },
  });

  const slider12 = new Swiper('.simptomi-swiper', {
    slidesPerView: 2,
    spaceBetween: rem(3.6),
    speed: 1000,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '.simptomi-btn-next',
      prevEl: '.simptomi-btn-prev',
    },
  });

  const slider13 = new Swiper('.info-specialnosti-swiper', {
    slidesPerView: 3.34,
    spaceBetween: rem(3.4),
    speed: 1000,
    navigation: {
      nextEl: '.info-specialnosti-btn-next',
      prevEl: '.info-specialnosti-btn-prev',
    },
  });

  const slider14 = new Swiper('.new-clinic-korporativnie-swiper', {
    spaceBetween: rem(5.5),
    slidesPerView: 3,
    speed: 1000,
    pagination: {
      el: '.new-clinic-korporativnie-swiper-pagination',
      clickable: true,
    },
  });

  const slider15 = new Swiper('.licenzia-swiper', {
    navigation: {
      nextEl: '.licenzia-btn-next',
      prevEl: '.licenzia-btn-prev',
    },
    pagination: {
      el: '.licenzia-pagination .total',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let totalRes3 = total >= 10 ? total : `0${total}`;
        return totalRes3;
      },
    },
    slidesPerView: 2.2,
    spaceBetween: rem(2),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: rem(3),
        speed: 1000,
      },
    },
  });
  let curnum3 = document.querySelector('.licenzia-pagination .current');
  slider15.on('slideChange', function () {
    let ind3 = slider15.realIndex + 1,
      indRes3 = ind3 >= 10 ? ind3 : `0${ind3}`;
    curnum3.innerHTML = indRes3;
  });

  const slider16 = new Swiper('.baner-centri-swiper', {
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1000,
    navigation: {
      nextEl: '.baner-centri-btn-next',
      prevEl: '.baner-centri-btn-prev',
    },
  });

  const slider17 = new Swiper('.procedures-speciality-swiper', {
    navigation: {
      nextEl: '.procedures-speciality-btn-next',
      prevEl: '.procedures-speciality-btn-prev',
    },
    slidesPerView: 2,
    spaceBetween: rem(4),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: rem(4),
        speed: 1000,
      },
    },
  });

  const slider18 = new Swiper('.new-clinic-statia-swiper', {
    spaceBetween: rem(1),
    speed: 1000,
    navigation: {
      nextEl: '.new-clinic-statia-btn-next',
      prevEl: '.new-clinic-statia-btn-prev',
    },
    pagination: {
      el: '.new-clinic-statia-swiper-pagination',
      clickable: true,
    },
  });

  const slider19 = new Swiper('.big-info-swiper', {
    slidesPerView: 3.3,
    spaceBetween: rem(4),
    speed: 1000,
    navigation: {
      nextEl: '.big-info-btn-next',
      prevEl: '.big-info-btn-prev',
    },
  });

  const slider20 = new Swiper('.big-info-swiper2', {
    navigation: {
      nextEl: '.big-info-btn-next2',
      prevEl: '.big-info-btn-prev2',
    },
    pagination: {
      el: '.big-info-pagination2 .total',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let totalRes4 = total >= 10 ? total : `0${total}`;
        return totalRes4;
      },
    },
    slidesPerView: 2.2,
    spaceBetween: rem(2),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: rem(4),
        speed: 1000,
      },
    },
  });

  let curnum4 = document.querySelector('.big-info-pagination2 .current');
  slider20.on('slideChange', function () {
    let ind4 = slider20.realIndex + 1,
      indRes4 = ind4 >= 10 ? ind4 : `0${ind4}`;
    curnum4.innerHTML = indRes4;
  });

  const slider21 = new Swiper('.procedures-simptom-swiper', {
    navigation: {
      nextEl: '.procedures-simptom-btn-next',
      prevEl: '.procedures-simptom-btn-prev',
    },
    pagination: {
      el: '.procedures-simptom-pagination .total',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let totalRes5 = total >= 10 ? total : `0${total}`;
        return totalRes5;
      },
    },
    slidesPerView: 1,
    spaceBetween: rem(2),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: rem(4),
        speed: 1000,
      },
    },
  });
  let curnum5 = document.querySelector(
    '.procedures-simptom-pagination .current'
  );
  slider21.on('slideChange', function () {
    let ind5 = slider21.realIndex + 1,
      indRes5 = ind5 >= 10 ? ind5 : `0${ind5}`;
    curnum5.innerHTML = indRes5;
  });

  const slider22 = new Swiper('.value-swiper', {
    navigation: {
      nextEl: '.values-btn-next',
      prevEl: '.values-btn-prev',
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1000,
  });

  const slider23 = new Swiper('.about-swiper-big', {
    speed: 1000,
    navigation: {
      nextEl: '.about-btn-next',
      prevEl: '.about-btn-prev',
    },
    pagination: {
      el: '.about-swiper-pagination .total',
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let totalRes6 = total >= 10 ? total : ` 0${total}`;
        return totalRes6;
      },
    },
    // allowTouchMove: false,
    thumbs: {
      swiper: {
        el: '.about-swiper-small',
        freeMode: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
      },
    },
  });
  let curnum6 = document.querySelector('.about-swiper-pagination .current2');
  slider23.on('slideChange', function () {
    let ind6 = slider23.realIndex + 1,
      indRes6 = ind6 >= 10 ? ind6 : `0${ind6}`;
    curnum6.innerHTML = indRes6;
  });

  const slider24 = new Swiper('.procedures-swiper', {
    navigation: {
      nextEl: '.procedures-btn-next',
      prevEl: '.procedures-btn-prev',
    },
    pagination: {
      el: '.procedures__bullets',
      type: 'bullets',
    },
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(4),
        speed: 1000,
        pagination: {
          el: '.procedures-pagination .total',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            let totalRes = total >= 10 ? total : `0${total}`;
            return totalRes;
          },
        },
      },
    },
  });

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep track of swiper instances to destroy later
  let slider25 = null;

  if (document.querySelector('.all-news__slider')) {
    if (window.innerWidth < 767.98 && !slider25) {
      slider25 = new Swiper('.all-news__slider', {
        navigation: {
          nextEl: '.slider-control__button_next',
          prevEl: '.slider-control__button_prev',
        },
        pagination: {
          el: '.slider-control__pagination',
          type: 'bullets',
        },
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1000,
        breakpoints: {
          769: {
            slidesPerView: 3,
            spaceBetween: rem(4),
            speed: 1000,
            allowTouchMove: false,
          },
        },
      });
    } else if (window.innerWidth > 767.98 && slider25) {
      slider25.destroy();
      slider25.navigation.destroy();
      slider25 = null;
    }
  }

  /* let curnum = document.querySelector(".procedures-pagination .current");
    slider24.on("slideChange", function () {
    let ind = slider5.realIndex + 1,
    indRes = ind >= 10 ? ind : `0${ind}`;
    curnum.innerHTML = indRes;
  }); */

  // КОНЕЦ СЛАЙДЕРОВ

  //  ЯНДЕКС КАРТА
  ymaps.ready(init);
  function init() {
    let breakpoint = window.matchMedia('(max-width: 48em)');
    let descOptions = {
      iconLayout: 'default#image',
      iconImageHref: 'img/a-image/icons/map-point-blue.png',
      iconImageSize: [60, 82],
      iconImageOffset: [-30, -41],
    };
    if (breakpoint) {
      descOptions.iconImageSize = [60, 82];
      descOptions.iconImageOffset = [-30, -41];
    }

    var myMap = new ymaps.Map('contloc', {
      center: [55.67828318763455, 37.85616280701611],
      zoom: 14,
    });

    window.myObjects = ymaps
      .geoQuery({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [55.68322970927965, 37.85882355835888],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: 'img/a-image/icons/map-point-blue.png',
              iconImageSize: [60, 82],
              iconImageOffset: [-30, -41],
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [55.68322970927965, 37.8477513995454],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: 'img/a-image/icons/map-point-blue.png',
              iconImageSize: [60, 82],
              iconImageOffset: [-30, -41],
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [55.6758581926513, 37.84792306092235],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: 'img/a-image/icons/map-point-blue.png',
              iconImageSize: [60, 82],
              iconImageOffset: [-30, -41],
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [55.67828318763455, 37.85616280701611],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: 'img/a-image/icons/map-point-orange.png',
              iconImageSize: [60, 82],
              iconImageOffset: [-30, -41],
            },
          },
        ],
      })
      .addToMap(myMap);

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('dblClickZoom');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
  }

  // КОНЕЦ ЯНДЕКС КАРТЫ

  // HOVER
  if ($(window).width() >= 768) {
    $('.extra-hover').hover(
      function () {
        $(this).addClass('active');
      },
      function () {
        $(this).removeClass('active');
      }
    );
  }

  //КОНЕЦ HOVER

  // DROPDOWN CLICK

  // $('.dropdown-click2').on('click', function () {
  //   $('.dropdown__content2').fadeToggle(300)
  // })
  // let dropdownClick2 = $('.dropdown-click2')
  // let dropdownContent2 = $('.dropdown__content2')

  // $(document).mouseup(function (e) {
  //   if (
  //     !dropdownClick2.is(e.target) &&
  //     dropdownClick2.has(e.target).length === 0 &&
  //     !dropdownContent2.is(e.target) &&
  //     dropdownContent2.has(e.target).length === 0
  //   ) {
  //     dropdownContent2.fadeOut()
  //   }
  // })

  // $('.dropdown-click3').click(function (event) {
  //   $(this).toggleClass('active').prev().slideToggle(300)
  // })

  // $('.dropdown-click4').click(function (event) {
  //   $(this).toggleClass('active').next().slideToggle(300)
  // })

  // $('.akkar').click(function (event) {
  //   $(this).toggleClass('active').next().slideToggle(300)
  // })

  // $('.dropdown-click5').on('click', function () {
  //   $('.dropdown__content5').fadeToggle(300)
  // })

  // $(document).mouseup(function (e) {
  //   if (
  //     !dropdownClick5.is(e.target) &&
  //     dropdownClick5.has(e.target).length === 0 &&
  //     !dropdownContent5.is(e.target) &&
  //     dropdownContent5.has(e.target).length === 0
  //   ) {
  //     dropdownContent5.fadeOut()
  //   }
  // })
  // $('.close').click(function (e) {
  //   dropdownContent5.fadeOut()
  // })

  // КОНЕЦ DROPDOWN CLICK

  // ДОБАВЛЯТЬ КЛАСС ACTIVE
  $('.click_btn').click(function () {
    $('.click_btn').removeClass('active');
    $(this).toggleClass('active');
  });
  $('.toggle-class-activ').click(function () {
    $(this)
      .closest('.toggle-class-parent')
      .find('.toggle-class-activ')
      .removeClass('active');
    $(this).toggleClass('active');
  });

  //КОНЕЦ ДОБАВЛЯТЬ КЛАСС ACTIVE

  // Ползунок времени в модалке с календарем
  // const behaviourSlider = document.getElementById('r-slider');

  // noUiSlider.create(behaviourSlider, {
  //     start: [3, 22],
  //     tooltips: true,
  //     step: 1,
  //     connect: true,
  //     range: {
  //         'min': 0,
  //         'max': 24
  //     },
  // });

  /************  Звездный Рейтинг *********************** */
  const ratingItemsListTreatment =
    document.querySelectorAll('.item__treatment');
  const ratingItemsArrayTreatment = Array.prototype.slice.call(
    ratingItemsListTreatment
  );
  const ratingItemsListInfo = document.querySelectorAll('.item__info');
  const ratingItemsArrayInfo = Array.prototype.slice.call(ratingItemsListInfo);
  const ratingItemsListRelative = document.querySelectorAll('.item__relative');
  const ratingItemsArrayRelative = Array.prototype.slice.call(
    ratingItemsListRelative
  );
  const ratingItemsListReady = document.querySelectorAll('.item__ready');
  const ratingItemsArrayReady =
    Array.prototype.slice.call(ratingItemsListReady);

  const showTotalCurrentRatingDoctor = document.querySelector(
    '.call__form-rating-number-total'
  );
  let totalCurrentRatingDoctor = 0;
  let totalChoiceCurrRating = 0;
  let prevNumA = 0;
  let prevNumB = 0;
  let prevNumC = 0;
  let prevNumD = 0;
  let currDivider = 0;

  let changeTotalCurrRating = (num, divider) => {
    totalCurrentRatingDoctor += num;
    showTotalCurrentRatingDoctor.innerHTML = (
      totalCurrentRatingDoctor / divider
    ).toFixed(1);
    currDivider = divider;
    return totalCurrentRatingDoctor, currDivider;
  };

  let displayTotalCurrentRating = (prevNum, itemValue) => {
    if (prevNum !== 0) {
      totalCurrentRatingDoctor =
        totalCurrentRatingDoctor + Number(itemValue) - prevNum;
      showTotalCurrentRatingDoctor.innerHTML = (
        totalCurrentRatingDoctor / currDivider
      ).toFixed(1);
    } else {
      totalChoiceCurrRating++;
      changeTotalCurrRating(Number(itemValue), totalChoiceCurrRating);
    }
  };

  ratingItemsArrayTreatment.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;

      displayTotalCurrentRating(prevNumA, itemValue);

      prevNumA = Number(itemValue);
      return prevNumA, totalCurrentRatingDoctor;
      /********
       * itemValue - хранится текущий выбор рейтинга
       *
       * ******* */
    })
  );
  ratingItemsArrayInfo.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;

      displayTotalCurrentRating(prevNumB, itemValue);

      prevNumB = Number(itemValue);
      return prevNumB, totalCurrentRatingDoctor;
    })
  );

  ratingItemsArrayRelative.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;

      displayTotalCurrentRating(prevNumC, itemValue);

      prevNumC = Number(itemValue);
      return prevNumC, totalCurrentRatingDoctor;
    })
  );

  ratingItemsArrayReady.forEach(item =>
    item.addEventListener('click', () => {
      const { itemValue } = item.dataset;
      item.parentNode.dataset.totalValue = itemValue;

      displayTotalCurrentRating(prevNumD, itemValue);

      prevNumD = Number(itemValue);
      return prevNumD, totalCurrentRatingDoctor;
    })
  );
  /********************************************** */

  $(document).on('change', 'input[type=checkbox]', function () {
    var $this = $(this),
      $chks = $(document.getElementsByName(this.name)),
      $all = $chks.filter('.chk-all');

    if ($this.hasClass('chk-all')) {
      $chks.prop('checked', $this.prop('checked'));
    } else
      switch ($chks.filter(':checked').length) {
        case +$all.prop('checked'):
          $all.prop('checked', false).prop('indeterminate', false);
          break;
        case $chks.length - !!$this.prop('checked'):
          $all.prop('checked', true).prop('indeterminate', false);
          break;
        default:
          $all.prop('indeterminate', true);
      }
  });

  // ЯКОРЬ
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
  // КОНЕЦ ЯКОРЯ

  // SELECT
  if ($(window).width() <= 768) {
    $('.select_checked').click(function () {
      $(this).next().slideToggle();
    });

    $('.centers-filter__item').click(function () {
      var value = $(this).attr('data-value');
      $(this)
        .parent()
        .parent()
        .parent()
        .find('.centers-filter__select')
        .val(value);
      $(this)
        .parent()
        .parent()
        .find('.select_checked')
        .find('.select-text')
        .text(value);
      $(this).parent().slideUp();
    });
  }

  const defaultSelect = () => {
    const elements = document.querySelectorAll('.select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
      });
    });
  };
  defaultSelect();

  // КОНЕЦ SELECT
});

// forms

function formFieldsInit(options = { viewPass: true }) {
  const formFields = document.querySelectorAll(
    'input[placeholder],textarea[placeholder]'
  );
  if (formFields.length) {
    formFields.forEach(formField => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
        // formField.addEventListener('input', function() {
        //   const targetElement = e.target
        //   if (!targetElement.parentElement.classList.contains('_form-error') && targetElement.value) {
        //     targetElement.parentElement.classList.add('_filled')
        //   } else if (targetElement.parentElement.classList.contains('_form-error')) {
        //     targetElement.parentElement.classList.remove('_filled')
        //   }
        // })
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === 'INPUT' ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === 'INPUT' ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      console.log(targetElement.value.length);
      if (
        !targetElement.parentElement.classList.contains('_form-error') &&
        targetElement.value.length
      ) {
        targetElement.parentElement.classList.add('_filled');
      } else if (
        targetElement.parentElement.classList.contains('_form-error') ||
        !targetElement.value.length
      ) {
        targetElement.parentElement.classList.remove('_filled');
      }
    }
  });

  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active')
          ? 'password'
          : 'text';
        targetElement.parentElement.parentElement
          .querySelector('input')
          .setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach(formRequiredItem => {
        if (
          (formRequiredItem.offsetParent !== null ||
            formRequiredItem.tagName === 'SELECT') &&
          !formRequiredItem.disabled
        ) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (
      formRequiredItem.type === 'checkbox' &&
      !formRequiredItem.checked
    ) {
      this.addError(formRequiredItem);
      error++;
    } else {
      if (!formRequiredItem.value.trim()) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    let inputError =
      formRequiredItem.parentElement.querySelector('.form__error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class="form__error">${formRequiredItem.dataset.error}</div>`
      );
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    if (formRequiredItem.parentElement.querySelector('.form__error')) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector('.form__error')
      );
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll('input,textarea');
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove('_form-focus');
        el.parentElement.classList.remove('_filled');
        el.classList.remove('_form-focus');
        form.classList.remove('_visible');
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll('.checkbox__input');
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = false;
        }
      }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      formRequiredItem.value
    );
  },
};

function formSubmit(options = { validate: true }) {
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate')
      ? formValidate.getErrors(form)
      : 0;
    if (error === 0) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action')
          ? form.getAttribute('action').trim()
          : '#';
        const formMethod = form.getAttribute('method')
          ? form.getAttribute('method').trim()
          : 'GET';
        const formData = new FormData(form);

        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData,
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  function formSent(form, responseResult = ``) {
    document.dispatchEvent(
      new CustomEvent('formSent', {
        detail: {
          form: form,
        },
      })
    );
    formValidate.formClean(form);
  }
}

function formQuantity() {
  document.addEventListener('click', function (e) {
    let targetElement = e.target;
    if (targetElement.closest('.quantity__button')) {
      let value = parseInt(
        targetElement.closest('.quantity').querySelector('input').value
      );
      if (targetElement.classList.contains('quantity__button_plus')) {
        value++;
      } else {
        --value;
        if (value < 1) value = 1;
      }
      targetElement.closest('.quantity').querySelector('input').value = value;
    }
  });
}

function formRating() {
  const ratings = document.querySelectorAll('.rating');
  if (ratings.length > 0) {
    initRatings();
  }
  function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
    }
    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      if (rating.classList.contains('rating_set')) {
        setRating(rating);
      }
    }
    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');
      for (let index = 0; index < ratingItems.length; index++) {
        const ratingItem = ratingItems[index];
        ratingItem.addEventListener('mouseenter', function (e) {
          initRatingVars(rating);
          setRatingActiveWidth(ratingItem.value);
        });
        ratingItem.addEventListener('mouseleave', function (e) {
          setRatingActiveWidth();
        });
        ratingItem.addEventListener('click', function (e) {
          initRatingVars(rating);

          if (rating.dataset.ajax) {
            setRatingValue(ratingItem.value, rating);
          } else {
            ratingValue.innerHTML = index + 1;
            setRatingActiveWidth();
          }
        });
      }
    }
    async function setRatingValue(value, rating) {
      if (!rating.classList.contains('rating_sending')) {
        rating.classList.add('rating_sending');

        let response = await fetch('rating.json', {
          method: 'GET',

          //body: JSON.stringify({
          //	userRating: value
          //}),
          //headers: {
          //	'content-type': 'application/json'
          //}
        });
        if (response.ok) {
          const result = await response.json();

          const newRating = result.newRating;

          ratingValue.innerHTML = newRating;

          setRatingActiveWidth();

          rating.classList.remove('rating_sending');
        } else {
          alert('error');

          rating.classList.remove('rating_sending');
        }
      }
    }
  }
}
formFieldsInit();
formSubmit();

// init timer function
const initTimer = remaining => {
  if (document.getElementById('codeTimer')) {
    const timer = document.getElementById('codeTimer');
    let timerOn = true;
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    timer.innerHTML = m + ':' + s;
    remaining -= 1;

    if (remaining >= 0 && timerOn) {
      setTimeout(function () {
        initTimer(remaining);
      }, 1000);
      return;
    }
  }
};
initTimer(120);
('use strict');
function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  this.оbjects = [];
  this.daClassname = '_dynamic_adapt_';
  this.nodes = document.querySelectorAll('[data-da]');
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(',');
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
    оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);
  this.mediaQueries = Array.prototype.map.call(
    this.оbjects,
    function (item) {
      return (
        '(' +
        this.type +
        '-width: ' +
        item.breakpoint +
        'px),' +
        item.breakpoint
      );
    },
    this
  );
  this.mediaQueries = Array.prototype.filter.call(
    this.mediaQueries,
    function (item, index, self) {
      return Array.prototype.indexOf.call(self, item) === index;
    }
  );
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];
    const оbjectsFilter = Array.prototype.filter.call(
      this.оbjects,
      function (item) {
        return item.breakpoint === mediaBreakpoint;
      }
    );
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    //for (let i = 0; i < оbjects.length; i++) {
    for (let i = оbjects.length - 1; i >= 0; i--) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
};
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
};
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === 'min') {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === 'first' || b.place === 'last') {
          return -1;
        }

        if (a.place === 'last' || b.place === 'first') {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === 'first' || b.place === 'last') {
          return 1;
        }

        if (a.place === 'last' || b.place === 'first') {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt('max');
da.init();

// let text = document.querySelectorAll("header__top-form-down-block-data-item-link").textContent;
// let modifiedText = text.replace(/(^[а-яa-z]{3})/i, "<span style='color:blue'>$1</span>");
// document.querySelectorAll(".header__top-form-down-block-data-item-link").innerHTML = modifiedText;

// $(function() {
//   var text,
//       textBefore,
//       textAfter;

//   $('.header__top-form-down-block-data-item-link').each(function() {
//     text = $(this).text();

//     textAfter = text.substring(3);
//     textBefore = text.substring(0,3);

//     $(this).empty().append('<span>' + textBefore + '</span>').append(textAfter);
//   });
// });
