document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function ($) {
    if (document.querySelector('#accordion-questions')) {
      $('#accordion-questions').accordionjs();
    }
  });

  if (document.querySelector('.diseases-doctors__slide')) {
    if (md) {
      ourDoctorsSlider = new Swiper('.diseases-doctors__slider', {
        spaceBetween: 40,
        slidesPerView: 1,
        speed: 1000,
        autoHeight: true,
        navigation: {
          nextEl: '.diseases-doctors__slider-control .btn-next',
          prevEl: '.diseases-doctors__slider-control .btn-prev',
        },
        pagination: {
          el: '.diseases-doctors__slider-pagination',
          clickable: true,
        },
      });
    } else if (!md) {
      ourDoctorsSlider = new Swiper('.diseases-doctors__slider', {
        spaceBetween: 40,
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        speed: 1000,
        autoHeight: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.diseases-doctors__slider-control .btn-next',
          prevEl: '.diseases-doctors__slider-control .btn-prev',
        },
      });
    }
  }

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
});
