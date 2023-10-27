document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function ($) {
    if (document.querySelector('#accordion-questions')) {
      $('#accordion-questions').accordionjs();
    }
  });

  const ourDoctorsSliderTwo = new Swiper('.diseases-doctors__slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 1000,
    },
    speed: 1000,
    navigation: {
      nextEl: '.diseases-doctors__slider-control .btn-next',
      prevEl: '.diseases-doctors__slider-control .btn-prev',
    },

    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoHeight: false,
      },
    },
  });

  const SymptomsSlider = new Swiper('.swiper-diseases-symptoms', {
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 1000,
    observer: true,
    navigation: {
      nextEl: '.swiper-symptoms-controls .btn-next',
      prevEl: '.swiper-symptoms-controls .btn-prev',
    },
    pagination: {
      el: '.swiper-symptoms-pagination',
      clickable: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 40,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoHeight: false,
      },
    },
  });

  if (document.querySelector('.preparation__breadcrumbs')) {
    document
      .querySelectorAll('.preparation__breadcrumbs button')
      .forEach((el) => {
        el.addEventListener('click', () => {
          document
            .querySelectorAll('.preparation__breadcrumbs button')
            .forEach((el) => {
              el.classList.remove('_active');
            });
          el.classList.add('_active');
        });
      });
  }

  if (document.querySelector('.stocks-slider')) {
    new Swiper('.swiper-stocks', {
      spaceBetween: 40,
      slidesPerView: 1,
      speed: 1000,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-stocks-controls .btn-next',
        prevEl: '.swiper-stocks-controls .btn-prev',
      },
      pagination: {
        el: '.swiper-stocks-pagination',
        clickable: true,
      },
      breakpoints: {
        769: {
          slidesPerView: 3,
        },
      },
    });
  }
});
