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
