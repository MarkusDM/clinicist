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


  
});

