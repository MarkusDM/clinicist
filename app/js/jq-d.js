"use strict";

$( document ).ready(function() {
    $('.header__top-form-down-block-data-item-link').each(function() {
        var text = $(this).text();
        text =
          '<span >' +
            text.substr(0, 4) +
          '</span>' +
          text.substr(4, text.length);
        $(this).html(text);
    });


    $('.header__top').each(function () {
		let more = $(this).find('.header__top-form');
		let hide = $(this).find('.header__top-form-down');
		hide.hide(0);
		more.click(function () {
			hide.fadeIn(300);
			
		});
	});


    $('.header__top-form-down').each(function () {
		let more = $(this).find('.header__top-form-down-inner');
        let searchInput = $(this).find('.header__top-form-down-inner');
		let hide = $(this).find('.header__top-form-down-block');
		hide.hide(300);
		more.click(function () {
			hide.slideToggle(100);
			searchInput.toggleClass('active');
		});
	});

    $('.header__top-form-down-inner-close').click( function() {
        $('.header__top-form-down').hide(100);
    });


    $('.header__top-form-down-block-lists-item').click(function () {
		

		$('.header__top-form-down-block-lists-item').removeClass('active'); // 1
		$(this).addClass('active'); // 2

	
	});


    $(document).mouseup(function (e) {
        var container = $(".header__top-form-down");
        if (container.has(e.target).length === 0){
            container.hide();
        }
    });




    $('.header__top-btn-block').hover(function () {
        $('.header__top-btn-drop').slideToggle(200);
    });


    $(".header__burger").on('click', function() {
        $(".header__nav-mob").toggleClass("open-nav");
        $(".header").toggleClass("header--active");
        // $("main").toggleClass("main-none")
    });
    
    $(".header__burger").on('click', function() {
        $(".header__burger").toggleClass("open");
        // $("main").toggleClass("main-none")
    });


    $('.header__mob-bottom-search-close').click( function() {
        $('.header__mob-bottom-hide').hide(100);
    });


    $('.header__mob-bottom').each(function () {
		let more = $(this).find('.header__mob-bottom-search-btn');
		let hide = $(this).find('.header__mob-bottom-hide');
		hide.hide(0);
		more.click(function () {
			hide.fadeIn(300);
			
		});
	});


    $('.header__mob-bottom-hide').each(function () {
		let more = $(this).find('.header__mob-bottom-hide-input');
        let searchInput = $(this).find('.header__mob-bottom-search');
		let hide = $(this).find('.header__mob-bottom-hide-nav');
		hide.hide(300);
		more.click(function () {
			hide.slideToggle(100);
			searchInput.toggleClass('active');
		});
	});


    $('.header__mob-bottom-hide-nav-tab-item').click(function () {
		

		$('.header__mob-bottom-hide-nav-tab-item').removeClass('active'); // 1
		$(this).addClass('active'); // 2

	
	});

    $('.header__mob-bottom-hide-nav-lists-item').each(function() {
        var text = $(this).text();
        text =
          '<span >' +
            text.substr(0, 4) +
          '</span>' +
          text.substr(4, text.length);
        $(this).html(text);
    });

    
    $('.header__mob-navigation-lists').accordion({
        heightStyle: 'content',
        active: true,
        header: '> .header__mob-navigation-lists-item-c > .header__mob-navigation-lists-item-span'
    });



    $('.header__mob').each(function () {
		let more = $(this).find('.header__burger');
		let hide = $(this).find('.header__mob-navigation');
		hide.hide(0);
		more.click(function () {
			hide.slideToggle(300);
			
		});
	  });



var initFooter = false;

function footerAccord() {
  if (window.innerWidth <= 768) {
    if (!initFooter) {
        initFooter = true;
        $('.footer__lists').accordion({
            heightStyle: 'content',
            active: true,
            header: '> .footer__list > .footer__list-title'
        });
    }
  } else if (initFooter) {
    mainAboutSlider.destroy();
    initFooter = false;
  }
}
footerAccord();
window.addEventListener("resize", footerAccord);


$('.search-page__search-down-lists-item').each(function() {
    var text = $(this).text();
    text =
      '<span >' +
        text.substr(0, 4) +
      '</span>' +
      text.substr(4, text.length);
    $(this).html(text);
});


$('.services-p__form-alphabet-wrapper').each(function () {
  let more = $(this).find('.services-p__alphabet-btn');
  let hide = $(this).find('.services-p__form-alphabet-inner');
  hide.hide(0);
  more.click(function () {
    hide.slideToggle(300);
  });
});



$('.services-p__search').each(function () {
  let more = $(this).find('.services-p__search-filter');
  let searchInput = $(this).find('.services-p__search-input');
  let hide = $(this).find('.services-p__search-wrap');
  hide.hide(0);
  more.click(function () {
    hide.slideToggle(300);
    searchInput.toggleClass('active');
  });
});


$('.services-p__search-wrap-select').each(function () {
  let more = $(this).find('.services-p__search-wrap-select-head');
  let hide = $(this).find('.services-p__search-wrap-select-down');
  hide.hide(0);
  more.click(function () {
    hide.slideToggle(300);
    more.toggleClass('active');
  });
});


  
});


var initBox = false;

function initBoxDown() {
  if (window.innerWidth <= 768) {
    if (!initBox) {
      initBox = true;
      $('.services-p__box').each(function () {
        let more = $(this).find('.services-p__box-inner');
        let hide = $(this).find('.services-p__box-down');
        hide.hide(0);
        more.click(function () {
          hide.slideToggle(300);
          more.toggleClass('active');
        });
      });
    }
  } else if (initBox) {
    
    initBox = false;
  }
}
initBoxDown();
window.addEventListener("resize", initBoxDown);

$('.updates__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.updates__wrap[data-tab="' + id + '"]');

	$('.updates__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.updates__wrap.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});



$('.about-the-s__item').click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.about-the-s__content[data-tab="' + id + '"]');

	$('.about-the-s__item.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.about-the-s__content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
});



//  JS






const offerBannerSwiper = new Swiper('.offer-banner__swiper', {
  spaceBetween: rem(1),
  slidesPerView: 1.4,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,

  breakpoints: {
		769: {
			slidesPerView: 1,
		},
		
	},
  navigation: {
    nextEl: '.offer-banner__next',
    prevEl: '.offer-banner__prev',
  },
  
});



const blueBannerSwiper = new Swiper('.blue-banner__swiper', {
  spaceBetween: rem(1),
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  on: {
    slideChange: function (blueBannerSwiper) {
        $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
        $('.swiper-pagination-bullet:nth-child('+ (blueBannerSwiper.realIndex % 4 + 1) +')').addClass('swiper-pagination-bullet-active');
    }
  },
  
});


const slReviews = new Swiper('.sl-reviews__swiper', {
  spaceBetween: rem(1),
  slidesPerView: 1,
  autoplay: {
    delay: 1000,
  },
  speed: 1000,
  navigation: {
    nextEl: '.sl-reviews__next',
    prevEl: '.sl-reviews__prev',
  },

  on: {
    slideChange: function (slReviews) {
        $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
        $('.swiper-pagination-bullet:nth-child('+ (slReviews.realIndex % 4 + 1) +')').addClass('swiper-pagination-bullet-active');
    }
  },
  
});



const similarServicesSwiper = new Swiper('.similar-services__swiper', {
  spaceBetween: rem(3.6),
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.similar-services__next',
    prevEl: '.similar-services__prev',
  },
  breakpoints: {
		769: {
			slidesPerView: 3,
			spaceBetween: rem(1),
		},
		
	},
  on: {
    slideChange: function (similarServicesSwiper) {
        $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
        $('.swiper-pagination-bullet:nth-child('+ (similarServicesSwiper.realIndex % 4 + 1) +')').addClass('swiper-pagination-bullet-active');
    }
  },
  
});

