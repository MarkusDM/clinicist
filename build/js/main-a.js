document.addEventListener('DOMContentLoaded', function () {
  $('.tel-mask').inputmask('+7 (999) 999-99-99', {
    clearMaskOnLostFocus: false,
  })

  const md = window.matchMedia('(max-width: 768px)').matches
  let awardsSlider = null
  let imgsSlider = null

  if (document.querySelector('.awards__slider')) {
    if (md && !awardsSlider) {
      awardsSlider = new Swiper('.awards__slider', {
        spaceBetween: 16,
        slidesPerView: 1.7,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        speed: 1000,
      })
    } else if (!md && awardsSlider) {
      awardsSlider.destroy()
      awardsSlider = null
    }
  }
  if (document.querySelector('.doctor__imgs-wrap')) {
    if (md && !imgsSlider) {
      imgsSlider = new Swiper('.doctor__imgs-wrap', {
        spaceBetween: 25,
        slidesPerView: 'auto',
        speed: 1000,
      })
    } else if (!md && imgsSlider) {
      imgsSlider.destroy()
      imgsSlider = null
    }
  }

  // ===========================================================================

  const onClickHandler = e => {
    const target = e.target
    if (target.closest('.centers-filter-list__item')) {
      const dropdownTxt = document.querySelector(
        '.centers-filter__dropdown-btn span'
      )
      const currentFilter = target.closest('.centers-filter-list__item')
      const centersFilters = document.querySelectorAll(
        '.centers-filter-list__item'
      )
      const tabsContent = document.querySelectorAll('.tabs__content5')
      for (let i = 0; i < centersFilters.length; i++) {
        centersFilters[i].classList.remove('active')
        tabsContent[i].classList.remove('active')
        if (
          tabsContent[i].dataset.question === currentFilter.dataset.question
        ) {
          tabsContent[i].classList.add('active')
        }
      }
      currentFilter.classList.add('active')
      dropdownTxt.innerHTML = `${
        currentFilter.querySelector('.centers-filter-list__item-text').innerHTML
      }`
    }
    if (target.closest('.centers-filter__dropdown-btn')) {
      document.documentElement.classList.add('_dropdown-open')
      document.documentElement.style.overflow = 'hidden'
    }
    if (target.closest('.centers-filter__dropdown-close')) {
      document.documentElement.classList.remove('_dropdown-open')
      document.documentElement.style.overflow = 'auto'
    }
  }

  // ===========================================================================

  document.addEventListener('click', onClickHandler)
})
