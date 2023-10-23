document.addEventListener('DOMContentLoaded', function () {
  // input mask
  $('.tel-mask').inputmask('+7 (999) 999-99-99', {
    clearMaskOnLostFocus: false,
  });

  // is mobile
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  const md = window.matchMedia('(max-width: 768px)').matches;

  // sliders
  const initSliders = () => {
    let awardsSlider = null;
    let imgsSlider = null;
    let navigationTabsSlider = null;
    let ourDoctorsSlider = null;
    let servicesLabelsSlider = null;

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
        });
      } else if (!md && awardsSlider) {
        awardsSlider.destroy();
        awardsSlider = null;
      }
    }
    if (document.querySelector('.doctor__imgs-wrap')) {
      if (md && !imgsSlider) {
        imgsSlider = new Swiper('.doctor__imgs-wrap', {
          spaceBetween: 25,
          slidesPerView: 'auto',
          speed: 1000,
        });
      } else if (!md && imgsSlider) {
        imgsSlider.destroy();
        imgsSlider = null;
      }
    }
    if (document.querySelector('.steps__services-labels')) {
      if (md && !servicesLabelsSlider) {
        servicesLabelsSlider = new Swiper('.steps__services-labels', {
          spaceBetween: 12,
          slidesPerView: 'auto',
          speed: 1000,
          slideToClickedSlide: false,
        });
      } else if (!md && servicesLabelsSlider) {
        servicesLabelsSlider.destroy();
        servicesLabelsSlider = null;
      }
    }
    if (document.querySelector('.offers__slider')) {
      new Swiper('.offers__slider', {
        spaceBetween: 25,
        slidesPerView: 1,
        speed: 1000,

        autoHeight: true,
        navigation: {
          nextEl: '.offers__slider-control .btn-next',
          prevEl: '.offers__slider-control .btn-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.offers__slider-control .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            autoHeight: false,
          },
        },
      });
    }
    if (document.querySelector('.other-programs__slider')) {
      new Swiper('.other-programs__slider', {
        spaceBetween: 25,
        slidesPerView: 1,
        speed: 1000,
        autoHeight: true,
        navigation: {
          nextEl: '.other-programs__slider-control .btn-next',
          prevEl: '.other-programs__slider-control .btn-prev',
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.other-programs__slider-control .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            autoHeight: false,
          },
        },
      });
    }
    if (document.querySelector('.our-doctors__slider')) {
      if (md) {
        ourDoctorsSlider = new Swiper('.our-doctors__slider', {
          spaceBetween: 40,
          slidesPerView: 1,
          speed: 1000,

          autoHeight: true,
          navigation: {
            nextEl: '.our-doctors__slider-control .btn-next',
            prevEl: '.our-doctors__slider-control .btn-prev',
          },
          pagination: {
            el: '.our-doctors__slider-pagination',
            clickable: true,
          },
        });
      } else if (!md) {
        ourDoctorsSlider = new Swiper('.our-doctors__slider', {
          spaceBetween: 40,
          slidesPerView: 3,
          observer: true,
          observeParents: true,
          speed: 1000,
          autoHeight: false,
          navigation: {
            nextEl: '.our-doctors__slider-control .btn-next',
            prevEl: '.our-doctors__slider-control .btn-prev',
          },
          pagination: {
            el: '.our-doctors__slider-fraction',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return (
                '<span>0' +
                current +
                '</span>' +
                '<span>/</span>' +
                '<span>' +
                total +
                '</span>'
              );
            },
          },
        });
      }
    }
    if (document.querySelector('.navigation-block__tabs')) {
      if (md && !navigationTabsSlider) {
        navigationTabsSlider = new Swiper('.navigation-block__tabs', {
          slidesPerView: 'auto',
          speed: 1000,
          slideToClickedSlide: true,
          centeredSlides: true,
          centeredSlidesBounds: true,
        });
      } else if (!md && navigationTabsSlider) {
        navigationTabsSlider.destroy();
        navigationTabsSlider = null;
      }
    }
  };
  initSliders();

  // price list
  const pricelistSearch = document.getElementById('search-form');
  const alphabetIndex = document.getElementById('alphabet-index');
  if (pricelistSearch) {
    pricelistSearch.addEventListener('input', function () {
      document.documentElement.classList.add('_search-box-open');
      if (!pricelistSearch.querySelector('input').value) {
        document.documentElement.classList.remove('_search-box-open');
      }
    });
    pricelistSearch.addEventListener('focusout', function () {
      document.documentElement.classList.remove('_search-box-open');
    });
  }

  // hours
  const hours = document.querySelectorAll('.doctor-card__hours-group');
  const moveItems = (items, target) => {
    items.forEach((item) => {
      target.appendChild(item);
    });
  };
  const initHoursItems = () => {
    if (hours.length) {
      hours.forEach((item) => {
        const btn = item.querySelector('[data-showmore-btn]');
        const showmore = item.querySelector('[data-showmore-hours]');
        const items = item.querySelectorAll('.doctor-card__hours._move');
        const parent = item.querySelector('.doctor-card__hours-row_parent');

        if (window.innerWidth <= 768) {
          moveItems(items, showmore.querySelector('.doctor-card__hours-row'));
        } else if (window.innerWidth > 768) {
          moveItems(items, parent);
        }

        btn.addEventListener('click', function () {
          // item.classList.toggle('_active')
          _slideToggle(showmore);
          setTimeout(() => {
            if (item.classList.contains('_active')) {
              btn.innerHTML = 'Показать все время записи';
              btn.innerHTML = 'Свернуть';
            } else if (!item.classList.contains('_active')) {
              btn.innerHTML = 'Показать все время записи';
            }
          }, 500);
        });
      });
    }
  };
  initHoursItems();

  // sort dropdown
  const sortDropdown = document.querySelector('.sort-dropdown');
  if (
    sortDropdown &&
    !sortDropdown.classList.contains('our-vacancies__sort')
  ) {
    _slideUp(sortDropdown);
  }

  // datepicker
  if (document.getElementById('datepicker')) {
    const picker = datepicker('#datepicker', {
      alwaysShow: true,
      customMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      customDays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ'],
      showAllDates: true,
      disableYearOverlay: true,
      onSelect: function (string, element) {
        // Change month on click on other days

        var day = element.selectedDay;
        var mon = element.selectedMonth;
        var year = element.selectedYear;

        var target = jQuery(element.dpDiv)
          .find('[data-year="' + year + '"][data-month="' + mon + '"]')
          .filter(function () {
            return jQuery(this).text().trim() == day;
          });

        if (target.hasClass('ui-datepicker-other-month')) {
          if (parseInt(target.text().trim()) > 15) {
            jQuery(element.dpDiv).find('.ui-datepicker-prev').click();
          } else {
            jQuery(element.dpDiv).find('.ui-datepicker-next').click();
          }
        }
      },
    });
  }

  // steps datepicker
  if (document.querySelector('.steps #datepicker') && md) {
    document.querySelector('.datepicker-modal__form #datepicker').remove();
    document
      .querySelector('.datepicker-modal__form')
      .appendChild(document.querySelector('.steps #datepicker'));
    document
      .querySelector('.datepicker-modal__form')
      .appendChild(document.querySelector('.steps .qs-datepicker-container'));
  }

  // other programs card (move image)
  const programCards = document.querySelectorAll('.other-programs-card');
  const moveImage = () => {
    if (programCards.length) {
      programCards.forEach((programCard) => {
        const image = programCard.querySelector(
          '.other-programs-card__image-wrap'
        );
        const container = programCard.querySelector(
          '.other-programs-card__text-wrap'
        );

        if (image && container) {
          if (md) {
            container.appendChild(image);
          } else {
            programCard.prepend(image);
          }
        }
      });
    }
  };
  moveImage();

  // show more text
  const toggleText = () => {
    const showmoreTextElements = document.querySelectorAll(
      '[data-showmore-text]'
    );

    if (showmoreTextElements.length) {
      showmoreTextElements.forEach((item) => {
        const points = item.querySelector('[data-points]');
        const showmoreText = item.querySelector('[data-more-text]');
        const buttonText = item.querySelector('[data-showmore-txt-btn]');
        const response = item.querySelector('.review-card__response');

        buttonText.addEventListener('click', function () {
          if (points.style.display === 'none') {
            showmoreText.style.display = 'none';
            points.style.display = 'inline';
            buttonText.innerHTML = 'Весь отзыв';
            buttonText.classList.remove('_active');
            if (md) {
              response.style.display = 'none';
            }
          } else {
            showmoreText.style.display = 'inline';
            points.style.display = 'none';
            buttonText.innerHTML = 'Свернуть отзыв';
            buttonText.classList.add('_active');
            if (md) {
              response.style.display = 'flex';
            }
          }
        });
      });
    }
  };
  toggleText();

  // move elements (all reviews cards)
  const allReviewsModify = () => {
    const allReviewsCards = document.querySelectorAll('.all-reviews-card');
    if (allReviewsCards.length && md) {
      allReviewsCards.forEach((allReviewsCard) => {
        allReviewsCard
          .querySelector('.all-reviews-card__body')
          .appendChild(
            allReviewsCard.querySelector('.review-card__heading-wrap')
          );
        allReviewsCard
          .querySelector('.all-reviews-card__body')
          .appendChild(allReviewsCard.querySelector('.all-reviews-card__info'));
      });
    }
  };
  allReviewsModify();

  // ===========================================================================

  // smooth behaviour
  function _slideUp(target, duration = 500, showmore = 0) {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.hidden = !showmore ? true : false;
        !showmore ? target.style.removeProperty('height') : null;
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        !showmore ? target.style.removeProperty('overflow') : null;
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
        // create event
        document.dispatchEvent(
          new CustomEvent('slideUpDone', {
            detail: {
              target: target,
            },
          })
        );
      }, duration);
      document.addEventListener('slideUpDone', function (e) {
        e.detail.target.parentElement.classList.remove('_active');
      });
    }
  }
  function _slideDown(target, duration = 500, showmore = 0) {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty('height') : null;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
        // create event
        document.dispatchEvent(
          new CustomEvent('slideDownDone', {
            detail: {
              target: target,
            },
          })
        );
      }, duration);
      document.addEventListener('slideDownDone', function (e) {
        e.detail.target.parentElement.classList.add('_active');
      });
    }
  }
  function _slideToggle(target, duration = 500) {
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }

  // spoilers
  function spoilers() {
    const spoilersArray = document.querySelectorAll('[data-spoilers]');
    if (spoilersArray.length > 0) {
      // get regular spoilers
      const spoilersRegular = Array.from(spoilersArray).filter(function (
        item,
        index,
        self
      ) {
        return !item.dataset.spoilers.split(',')[0];
      });
      // regular spoilers initialization
      if (spoilersRegular.length) {
        initSpoilers(spoilersRegular);
      }
      // get spoilers with media queries
      let mdQueriesArray = dataMediaQueries(spoilersArray, 'spoilers');
      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          // event
          mdQueriesItem.matchMedia.addEventListener('change', function () {
            initSpoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
          });
          initSpoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      }
      // initialization
      function initSpoilers(spoilersArray, matchMedia = false) {
        spoilersArray.forEach((spoilersBlock) => {
          spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
          if (matchMedia.matches || !matchMedia) {
            spoilersBlock.classList.add('_spoiler-init');
            initSpoilerBody(spoilersBlock);
            spoilersBlock.addEventListener('click', setSpoilerAction);
          } else {
            spoilersBlock.classList.remove('_spoiler-init');
            initSpoilerBody(spoilersBlock, false);
            spoilersBlock.removeEventListener('click', setSpoilerAction);
          }
        });
      }
      // content
      function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
        let spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
        if (spoilerTitles.length) {
          spoilerTitles = Array.from(spoilerTitles).filter(
            (item) => item.closest('[data-spoilers]') === spoilersBlock
          );
          spoilerTitles.forEach((spoilerTitle) => {
            if (hideSpoilerBody) {
              spoilerTitle.removeAttribute('tabindex');
              if (!spoilerTitle.classList.contains('_spoiler-active')) {
                spoilerTitle.nextElementSibling.hidden = true;
              }
            } else {
              spoilerTitle.setAttribute('tabindex', '-1');
              spoilerTitle.nextElementSibling.hidden = false;
            }
          });
        }
      }
      function setSpoilerAction(e) {
        const el = e.target;
        if (el.closest('[data-spoiler]')) {
          const spoilerTitle = el.closest('[data-spoiler]');
          const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
          const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler');
          const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed
            ? parseInt(spoilersBlock.dataset.spoilersSpeed)
            : 500;
          if (!spoilersBlock.querySelectorAll('._slide').length) {
            if (
              oneSpoiler &&
              !spoilerTitle.classList.contains('_spoiler-active')
            ) {
              hideSpoilersBody(spoilersBlock);
            }
            spoilerTitle.classList.toggle('_spoiler-active');
            _slideToggle(spoilerTitle.nextElementSibling, spoilerSpeed);
          }
          e.preventDefault();
        }
      }
      function hideSpoilersBody(spoilersBlock) {
        const spoilerActiveTitle = spoilersBlock.querySelector(
          '[data-spoiler]._spoiler-active'
        );
        const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed
          ? parseInt(spoilersBlock.dataset.spoilersSpeed)
          : 500;
        if (
          spoilerActiveTitle &&
          !spoilersBlock.querySelectorAll('._slide').length
        ) {
          spoilerActiveTitle.classList.remove('_spoiler-active');
          _slideUp(spoilerActiveTitle.nextElementSibling, spoilerSpeed);
        }
      }
      // closing on click outside the spoiler
      const spoilersClose = document.querySelectorAll('[data-spoiler-close]');
      if (spoilersClose.length) {
        document.addEventListener('click', function (e) {
          const el = e.target;
          if (!el.closest('[data-spoilers]')) {
            spoilersClose.forEach((spoilerClose) => {
              const spoilersBlock = spoilerClose.closest('[data-spoilers]');
              const spoilerSpeed = spollersBlock.dataset.spoilersSpeed
                ? parseInt(spoilersBlock.dataset.spoilersSpeed)
                : 500;
              spoilerClose.classList.remove('_spoiler-active');
              _slideUp(spoilerClose.nextElementSibling, spoilerSpeed);
            });
          }
        });
      }
    }
  }
  spoilers();

  // select
  class SelectConstructor {
    constructor(props, data = null) {
      let defaultConfig = {
        init: true,
        logging: false,
      };
      this.config = Object.assign(defaultConfig, props);
      this.selectClasses = {
        classSelect: 'select',
        classSelectBody: 'select__body',
        classSelectTitle: 'select__title',
        classSelectValue: 'select__value',
        classSelectLabel: 'select__label',
        classSelectInput: 'select__input',
        classSelectText: 'select__text',
        classSelectLink: 'select__link',
        classSelectOptions: 'select__options',
        classSelectOptionsScroll: 'select__scroll',
        classSelectOption: 'select__option',
        classSelectContent: 'select__content',
        classSelectRow: 'select__row',
        classSelectData: 'select__asset',
        classSelectDisabled: '_select-disabled',
        classSelectTag: '_select-tag',
        classSelectOpen: '_select-open',
        classSelectActive: '_select-active',
        classSelectFocus: '_select-focus',
        classSelectMultiple: '_select-multiple',
        classSelectCheckBox: '_select-checkbox',
        classSelectOptionSelected: '_select-selected',
        classSelectPseudoLabel: '_select-pseudo-label',
      };
      this._this = this;
      if (this.config.init) {
        const selectItems = data
          ? document.querySelectorAll(data)
          : document.querySelectorAll('select');
        if (selectItems.length) {
          this.selectsInit(selectItems);
        }
      }
    }
    getSelectClass(className) {
      return `.${className}`;
    }
    getSelectElement(selectItem, className) {
      return {
        originalSelect: selectItem.querySelector('select'),
        selectElement: selectItem.querySelector(this.getSelectClass(className)),
      };
    }
    selectsInit(selectItems) {
      selectItems.forEach((originalSelect, index) => {
        this.selectInit(originalSelect, index + 1);
      });
      document.addEventListener(
        'click',
        function (e) {
          this.selectsActions(e);
        }.bind(this)
      );
      document.addEventListener(
        'keydown',
        function (e) {
          this.selectsActions(e);
        }.bind(this)
      );
      document.addEventListener(
        'focusin',
        function (e) {
          this.selectsActions(e);
        }.bind(this)
      );
      document.addEventListener(
        'focusout',
        function (e) {
          this.selectsActions(e);
        }.bind(this)
      );
    }
    selectInit(originalSelect, index) {
      const _this = this;
      let selectItem = document.createElement('div');
      selectItem.classList.add(this.selectClasses.classSelect);
      originalSelect.parentNode.insertBefore(selectItem, originalSelect);
      selectItem.appendChild(originalSelect);
      originalSelect.hidden = true;
      index ? (originalSelect.dataset.id = index) : null;

      if (this.getSelectPlaceholder(originalSelect)) {
        originalSelect.dataset.placeholder =
          this.getSelectPlaceholder(originalSelect).value;
        if (this.getSelectPlaceholder(originalSelect).label.show) {
          const selectItemTitle = this.getSelectElement(
            selectItem,
            this.selectClasses.classSelectTitle
          ).selectElement;
          selectItemTitle.insertAdjacentHTML(
            'afterbegin',
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(originalSelect).label.text
                ? this.getSelectPlaceholder(originalSelect).label.text
                : this.getSelectPlaceholder(originalSelect).value
            }</span>`
          );
        }
      }
      selectItem.insertAdjacentHTML(
        'beforeend',
        `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
      );
      this.selectBuild(originalSelect);

      originalSelect.dataset.speed = originalSelect.dataset.speed
        ? originalSelect.dataset.speed
        : '150';
      originalSelect.addEventListener('change', function (e) {
        _this.selectChange(e);
      });
    }
    selectBuild(originalSelect) {
      const selectItem = originalSelect.parentElement;
      selectItem.dataset.id = originalSelect.dataset.id;
      originalSelect.dataset.classModif
        ? selectItem.classList.add(
            `select_${originalSelect.dataset.classModif}`
          )
        : null;
      originalSelect.multiple
        ? selectItem.classList.add(this.selectClasses.classSelectMultiple)
        : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
      originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple
        ? selectItem.classList.add(this.selectClasses.classSelectCheckBox)
        : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
      this.setSelectTitleValue(selectItem, originalSelect);
      this.setOptions(selectItem, originalSelect);
      originalSelect.hasAttribute('data-search')
        ? this.searchActions(selectItem)
        : null;
      originalSelect.hasAttribute('data-open')
        ? this.selectAction(selectItem)
        : null;
      this.selectDisabled(selectItem, originalSelect);
    }
    selectsActions(e) {
      const targetElement = e.target;
      const targetType = e.type;
      if (
        targetElement.closest(
          this.getSelectClass(this.selectClasses.classSelect)
        ) ||
        targetElement.closest(
          this.getSelectClass(this.selectClasses.classSelectTag)
        )
      ) {
        const selectItem = targetElement.closest('.select')
          ? targetElement.closest('.select')
          : document.querySelector(
              `.${this.selectClasses.classSelect}[data-id="${
                targetElement.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                ).dataset.selectId
              }"]`
            );
        const originalSelect = this.getSelectElement(selectItem).originalSelect;
        if (targetType === 'click') {
          if (!originalSelect.disabled) {
            if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTag)
              )
            ) {
              const targetTag = targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTag)
              );
              const optionItem = document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`
              );
              this.optionAction(selectItem, originalSelect, optionItem);
            } else if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            ) {
              this.selectAction(selectItem);
            } else if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const optionItem = targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              );
              this.optionAction(selectItem, originalSelect, optionItem);
            }
          }
        } else if (targetType === 'focusin' || targetType === 'focusout') {
          if (
            targetElement.closest(
              this.getSelectClass(this.selectClasses.classSelect)
            )
          ) {
            targetType === 'focusin'
              ? selectItem.classList.add(this.selectClasses.classSelectFocus)
              : selectItem.classList.remove(
                  this.selectClasses.classSelectFocus
                );
          }
        } else if (targetType === 'keydown' && e.code === 'Escape') {
          this.selectsСlose();
        }
      } else {
        this.selectsСlose();
      }
    }
    selectsСlose(selectOneGroup) {
      const selectsGroup = selectOneGroup ? selectOneGroup : document;
      const selectActiveItems = selectsGroup.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      );
      if (selectActiveItems.length) {
        selectActiveItems.forEach((selectActiveItem) => {
          this.selectСlose(selectActiveItem);
        });
      }
    }
    selectСlose(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect;
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement;
      if (!selectOptions.classList.contains('_slide')) {
        selectItem.classList.remove(this.selectClasses.classSelectOpen);
        _slideUp(selectOptions, originalSelect.dataset.speed);
      }
    }
    selectAction(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect;
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement;
      if (originalSelect.closest('[data-one-select]')) {
        const selectOneGroup = originalSelect.closest('[data-one-select]');
        this.selectsСlose(selectOneGroup);
      }

      if (!selectOptions.classList.contains('_slide')) {
        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
        _slideToggle(selectOptions, originalSelect.dataset.speed);
      }
    }
    setSelectTitleValue(selectItem, originalSelect) {
      const selectItemBody = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectBody
      ).selectElement;
      const selectItemTitle = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectTitle
      ).selectElement;
      if (selectItemTitle) selectItemTitle.remove();
      selectItemBody.insertAdjacentHTML(
        'afterbegin',
        this.getSelectTitleValue(selectItem, originalSelect)
      );
    }
    getSelectTitleValue(selectItem, originalSelect) {
      let selectTitleValue = this.getSelectedOptionsData(
        originalSelect,
        2
      ).html;
      if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
        selectTitleValue = this.getSelectedOptionsData(originalSelect)
          .elements.map(
            (option) =>
              `<span role="button" data-select-id="${
                selectItem.dataset.id
              }" data-value="${
                option.value
              }" class="_select-tag">${this.getSelectElementContent(
                option
              )}</span>`
          )
          .join('');
        if (
          originalSelect.dataset.tags &&
          document.querySelector(originalSelect.dataset.tags)
        ) {
          document.querySelector(originalSelect.dataset.tags).innerHTML =
            selectTitleValue;
          if (originalSelect.hasAttribute('data-search'))
            selectTitleValue = false;
        }
      }
      selectTitleValue = selectTitleValue.length
        ? selectTitleValue
        : originalSelect.dataset.placeholder
        ? originalSelect.dataset.placeholder
        : '';
      let pseudoAttribute = '';
      let pseudoAttributeClass = '';
      if (originalSelect.hasAttribute('data-pseudo-label')) {
        pseudoAttribute = originalSelect.dataset.pseudoLabel
          ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"`
          : ` data-pseudo-label="Заполните атрибут"`;
        pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
      }
      this.getSelectedOptionsData(originalSelect).values.length
        ? selectItem.classList.add(this.selectClasses.classSelectActive)
        : selectItem.classList.remove(this.selectClasses.classSelectActive);
      if (originalSelect.hasAttribute('data-search')) {
        return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`;
      } else {
        const customClass =
          this.getSelectedOptionsData(originalSelect).elements.length &&
          this.getSelectedOptionsData(originalSelect).elements[0].dataset.class
            ? ` ${
                this.getSelectedOptionsData(originalSelect).elements[0].dataset
                  .class
              }`
            : '';
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
      }
    }
    getSelectElementContent(selectOption) {
      const selectOptionData = selectOption.dataset.asset
        ? `${selectOption.dataset.asset}`
        : '';
      const selectOptionDataHTML =
        selectOptionData.indexOf('img') >= 0
          ? `<img src="${selectOptionData}" alt="">`
          : selectOptionData;
      let selectOptionContentHTML = ``;
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectRow}">`
        : '';
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectData}">`
        : '';
      selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : '';
      selectOptionContentHTML += selectOptionData ? `</span>` : '';
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectText}">`
        : '';
      selectOptionContentHTML += selectOption.textContent;
      selectOptionContentHTML += selectOptionData ? `</span>` : '';
      selectOptionContentHTML += selectOptionData ? `</span>` : '';
      return selectOptionContentHTML;
    }
    getSelectPlaceholder(originalSelect) {
      const selectPlaceholder = Array.from(originalSelect.options).find(
        (option) => !option.value
      );
      if (selectPlaceholder) {
        return {
          value: selectPlaceholder.textContent,
          show: selectPlaceholder.hasAttribute('data-show'),
          label: {
            show: selectPlaceholder.hasAttribute('data-label'),
            text: selectPlaceholder.dataset.label,
          },
        };
      }
    }
    getSelectedOptionsData(originalSelect, type) {
      let selectedOptions = [];
      if (originalSelect.multiple) {
        selectedOptions = Array.from(originalSelect.options)
          .filter((option) => option.value)
          .filter((option) => option.selected);
      } else {
        selectedOptions.push(
          originalSelect.options[originalSelect.selectedIndex]
        );
      }
      return {
        elements: selectedOptions.map((option) => option),
        values: selectedOptions
          .filter((option) => option.value)
          .map((option) => option.value),
        html: selectedOptions.map((option) =>
          this.getSelectElementContent(option)
        ),
      };
    }
    getOptions(originalSelect) {
      let selectOptionsScroll = originalSelect.hasAttribute('data-scroll')
        ? `data-simplebar`
        : '';
      let selectOptionsScrollHeight = originalSelect.dataset.scroll
        ? `style="max-height:${originalSelect.dataset.scroll}px"`
        : '';
      let selectOptions = Array.from(originalSelect.options);
      if (selectOptions.length > 0) {
        let selectOptionsHTML = ``;
        if (
          (this.getSelectPlaceholder(originalSelect) &&
            !this.getSelectPlaceholder(originalSelect).show) ||
          originalSelect.multiple
        ) {
          selectOptions = selectOptions.filter((option) => option.value);
        }
        selectOptionsHTML += selectOptionsScroll
          ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} data-simplebar-auto-hide="false" class="${this.selectClasses.classSelectOptionsScroll}">`
          : '';
        selectOptions.forEach((selectOption) => {
          selectOptionsHTML += this.getOption(selectOption, originalSelect);
        });
        selectOptionsHTML += selectOptionsScroll ? `</div>` : '';
        return selectOptionsHTML;
      }
    }
    getOption(selectOption, originalSelect) {
      const selectOptionSelected =
        selectOption.selected && originalSelect.multiple
          ? ` ${this.selectClasses.classSelectOptionSelected}`
          : '';
      const selectOptionHide =
        selectOption.selected &&
        !originalSelect.hasAttribute('data-show-selected') &&
        !originalSelect.multiple
          ? `hidden`
          : ``;
      const selectOptionClass = selectOption.dataset.class
        ? ` ${selectOption.dataset.class}`
        : '';
      const selectOptionLink = selectOption.dataset.href
        ? selectOption.dataset.href
        : false;
      const selectOptionLinkTarget = selectOption.hasAttribute(
        'data-href-blank'
      )
        ? `target="_blank"`
        : '';
      let selectOptionHTML = ``;
      selectOptionHTML += selectOptionLink
        ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">`
        : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
      selectOptionHTML += this.getSelectElementContent(selectOption);
      selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
      return selectOptionHTML;
    }
    setOptions(selectItem, originalSelect) {
      const selectItemOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement;
      selectItemOptions.innerHTML = this.getOptions(originalSelect);
    }
    optionAction(selectItem, originalSelect, optionItem) {
      if (originalSelect.multiple) {
        optionItem.classList.toggle(
          this.selectClasses.classSelectOptionSelected
        );
        const originalSelectSelectedItems =
          this.getSelectedOptionsData(originalSelect).elements;
        originalSelectSelectedItems.forEach((originalSelectSelectedItem) => {
          originalSelectSelectedItem.removeAttribute('selected');
        });
        const selectSelectedItems = selectItem.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        );
        selectSelectedItems.forEach((selectSelectedItems) => {
          originalSelect
            .querySelector(
              `option[value="${selectSelectedItems.dataset.value}"]`
            )
            .setAttribute('selected', 'selected');
        });
      } else {
        if (!originalSelect.hasAttribute('data-show-selected')) {
          if (
            selectItem.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            )
          ) {
            selectItem.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ).hidden = false;
          }
          optionItem.hidden = true;
        }
        originalSelect.value = optionItem.hasAttribute('data-value')
          ? optionItem.dataset.value
          : optionItem.textContent;
        this.selectAction(selectItem);
      }
      this.setSelectTitleValue(selectItem, originalSelect);
      this.setSelectChange(originalSelect);
    }
    selectChange(e) {
      const originalSelect = e.target;
      this.selectBuild(originalSelect);
      this.setSelectChange(originalSelect);
    }
    setSelectChange(originalSelect) {
      if (originalSelect.hasAttribute('data-submit') && originalSelect.value) {
        let tempButton = document.createElement('button');
        tempButton.type = 'submit';
        originalSelect.closest('form').append(tempButton);
        tempButton.click();
        tempButton.remove();
      }
      const selectItem = originalSelect.parentElement;
      this.selectCallback(selectItem, originalSelect);
    }
    selectDisabled(selectItem, originalSelect) {
      if (originalSelect.disabled) {
        selectItem.classList.add(this.selectClasses.classSelectDisabled);
        this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectTitle
        ).selectElement.disabled = true;
      } else {
        selectItem.classList.remove(this.selectClasses.classSelectDisabled);
        this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectTitle
        ).selectElement.disabled = false;
      }
    }
    searchActions(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect;
      const selectInput = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectInput
      ).selectElement;
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement;
      const selectOptionsItems = selectOptions.querySelectorAll(
        `.${this.selectClasses.classSelectOption}`
      );
      const _this = this;
      selectInput.addEventListener('input', function () {
        selectOptionsItems.forEach((selectOptionsItem) => {
          if (
            selectOptionsItem.textContent
              .toUpperCase()
              .indexOf(selectInput.value.toUpperCase()) >= 0
          ) {
            selectOptionsItem.hidden = false;
          } else {
            selectOptionsItem.hidden = true;
          }
        });
        selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
      });
    }
    selectCallback(selectItem, originalSelect) {
      document.dispatchEvent(
        new CustomEvent('selectCallback', {
          detail: {
            select: originalSelect,
          },
        })
      );
    }
  }
  new SelectConstructor({});

  // tabs
  function tabs() {
    const tabs = document.querySelectorAll('[data-tabs]');
    let tabsActiveHash = [];

    if (tabs.length > 0) {
      const hash = getHash();
      if (hash && hash.startsWith('tab-')) {
        tabsActiveHash = hash.replace('tab-', '').split('-');
      }
      tabs.forEach((tabsBlock, index) => {
        tabsBlock.classList.add('_tab-init');
        tabsBlock.setAttribute('data-tabs-index', index);
        tabsBlock.addEventListener('click', setTabsAction);
        initTabs(tabsBlock);
      });

      let mdQueriesArray = dataMediaQueries(tabs, 'tabs');
      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          mdQueriesItem.matchMedia.addEventListener('change', function () {
            setTitlePosition(
              mdQueriesItem.itemsArray,
              mdQueriesItem.matchMedia
            );
          });
          setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      }
    }
    function setTitlePosition(tabsMediaArray, matchMedia) {
      tabsMediaArray.forEach((tabsMediaItem) => {
        tabsMediaItem = tabsMediaItem.item;
        let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
        let tabsTitleItems =
          tabsMediaItem.querySelectorAll('[data-tabs-title]');
        let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
        let tabsContentItems =
          tabsMediaItem.querySelectorAll('[data-tabs-item]');
        tabsTitleItems = Array.from(tabsTitleItems).filter(
          (item) => item.closest('[data-tabs]') === tabsMediaItem
        );
        tabsContentItems = Array.from(tabsContentItems).filter(
          (item) => item.closest('[data-tabs]') === tabsMediaItem
        );
        tabsContentItems.forEach((tabsContentItem, index) => {
          if (matchMedia.matches) {
            tabsContent.append(tabsTitleItems[index]);
            tabsContent.append(tabsContentItem);
            tabsMediaItem.classList.add('_tab-spoller');
          } else {
            tabsTitles.append(tabsTitleItems[index]);
            tabsMediaItem.classList.remove('_tab-spoller');
          }
        });
      });
    }
    function initTabs(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
      let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
      const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
      const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

      if (tabsActiveHashBlock) {
        const tabsActiveTitle = tabsBlock.querySelector(
          '[data-tabs-titles]>._tab-active'
        );
        tabsActiveTitle
          ? tabsActiveTitle.classList.remove('_tab-active')
          : null;
      }
      if (tabsContent.length) {
        tabsContent = Array.from(tabsContent).filter(
          (item) => item.closest('[data-tabs]') === tabsBlock
        );
        tabsTitles = Array.from(tabsTitles).filter(
          (item) => item.closest('[data-tabs]') === tabsBlock
        );
        tabsContent.forEach((tabsContentItem, index) => {
          tabsTitles[index].setAttribute('data-tabs-title', '');
          tabsContentItem.setAttribute('data-tabs-item', '');

          if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
            tabsTitles[index].classList.add('_tab-active');
          }
          tabsContentItem.hidden =
            !tabsTitles[index].classList.contains('_tab-active');
        });
      }
    }
    function setTabsStatus(tabsBlock) {
      let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
      let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
      const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
      function isTabsAnamate(tabsBlock) {
        if (tabsBlock.hasAttribute('data-tabs-animate')) {
          return tabsBlock.dataset.tabsAnimate > 0
            ? Number(tabsBlock.dataset.tabsAnimate)
            : 500;
        }
      }
      const tabsBlockAnimate = isTabsAnamate(tabsBlock);
      if (tabsContent.length > 0) {
        const isHash = tabsBlock.hasAttribute('data-tabs-hash');
        tabsContent = Array.from(tabsContent).filter(
          (item) => item.closest('[data-tabs]') === tabsBlock
        );
        tabsTitles = Array.from(tabsTitles).filter(
          (item) => item.closest('[data-tabs]') === tabsBlock
        );
        tabsContent.forEach((tabsContentItem, index) => {
          if (tabsTitles[index].classList.contains('_tab-active')) {
            if (tabsBlockAnimate) {
              _slideDown(tabsContentItem, tabsBlockAnimate);
            } else {
              tabsContentItem.hidden = false;
            }
            if (isHash && !tabsContentItem.closest('.popup')) {
              setHash(`tab-${tabsBlockIndex}-${index}`);
            }
          } else {
            if (tabsBlockAnimate) {
              _slideUp(tabsContentItem, tabsBlockAnimate);
            } else {
              tabsContentItem.hidden = true;
            }
          }
        });
      }
    }
    function setTabsAction(e) {
      const el = e.target;
      if (el.closest('[data-tabs-title]')) {
        const tabTitle = el.closest('[data-tabs-title]');
        const tabsBlock = tabTitle.closest('[data-tabs]');
        if (
          !tabTitle.classList.contains('_tab-active') &&
          !tabsBlock.querySelector('._slide')
        ) {
          let tabActiveTitle = tabsBlock.querySelectorAll(
            '[data-tabs-title]._tab-active'
          );
          tabActiveTitle.length
            ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
                (item) => item.closest('[data-tabs]') === tabsBlock
              ))
            : null;
          tabActiveTitle.length
            ? tabActiveTitle[0].classList.remove('_tab-active')
            : null;
          tabTitle.classList.add('_tab-active');
          setTabsStatus(tabsBlock);
        }
        e.preventDefault();
      }
    }
  }
  tabs();

  // popups
  class Popup {
    constructor(options) {
      let config = {
        logging: false,
        init: true,
        attributeOpenButton: 'data-popup',
        attributeCloseButton: 'data-close',
        fixElementSelector: '[data-lp]',
        youtubeAttribute: 'data-popup-youtube',
        youtubePlaceAttribute: 'data-popup-youtube-place',
        setAutoplayYoutube: true,
        classes: {
          popup: 'popup',
          // popupWrapper: 'popup__wrapper',
          popupContent: 'popup__content',
          popupActive: 'popup_show',
          bodyActive: 'popup-show',
        },
        focusCatch: true,
        closeEsc: true,
        bodyLock: true,
        hashSettings: {
          location: true,
          goHash: true,
        },
        on: {
          beforeOpen: function () {},
          afterOpen: function () {},
          beforeClose: function () {},
          afterClose: function () {},
        },
      };
      this.youTubeCode;
      this.isOpen = false;
      this.targetOpen = {
        selector: false,
        element: false,
      };
      this.previousOpen = {
        selector: false,
        element: false,
      };
      this.lastClosed = {
        selector: false,
        element: false,
      };
      this._dataValue = false;
      this.hash = false;

      this._reopen = false;
      this._selectorOpen = false;

      this.lastFocusEl = false;
      this._focusEl = [
        'a[href]',
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        'button:not([disabled]):not([aria-hidden])',
        'select:not([disabled]):not([aria-hidden])',
        'textarea:not([disabled]):not([aria-hidden])',
        'area[href]',
        'iframe',
        'object',
        'embed',
        '[contenteditable]',
        '[tabindex]:not([tabindex^="-"])',
      ];
      //this.options = Object.assign(config, options);
      this.options = {
        ...config,
        ...options,
        classes: {
          ...config.classes,
          ...options?.classes,
        },
        hashSettings: {
          ...config.hashSettings,
          ...options?.hashSettings,
        },
        on: {
          ...config.on,
          ...options?.on,
        },
      };
      this.bodyLock = false;
      this.options.init ? this.initPopups() : null;
    }
    initPopups() {
      this.eventsPopup();
    }
    eventsPopup() {
      document.addEventListener(
        'click',
        function (e) {
          const buttonOpen = e.target.closest(
            `[${this.options.attributeOpenButton}]`
          );
          if (buttonOpen) {
            e.preventDefault();
            this._dataValue = buttonOpen.getAttribute(
              this.options.attributeOpenButton
            )
              ? buttonOpen.getAttribute(this.options.attributeOpenButton)
              : 'error';
            this.youTubeCode = buttonOpen.getAttribute(
              this.options.youtubeAttribute
            )
              ? buttonOpen.getAttribute(this.options.youtubeAttribute)
              : null;
            if (this._dataValue !== 'error') {
              if (!this.isOpen) this.lastFocusEl = buttonOpen;
              this.targetOpen.selector = `${this._dataValue}`;
              this._selectorOpen = true;
              this.open();
              return;
            } else return;
          }
          const buttonClose = e.target.closest(
            `[${this.options.attributeCloseButton}]`
          );
          if (
            buttonClose ||
            (!e.target.closest(`.${this.options.classes.popupContent}`) &&
              !e.target.closest('.qs-outside-current-month') &&
              !e.target.closest('.qs-controls') &&
              this.isOpen)
          ) {
            e.preventDefault();
            this.close();
            return;
          }
        }.bind(this)
      );
      document.addEventListener(
        'keydown',
        function (e) {
          if (
            this.options.closeEsc &&
            e.which == 27 &&
            e.code === 'Escape' &&
            this.isOpen
          ) {
            e.preventDefault();
            this.close();
            return;
          }
          if (this.options.focusCatch && e.which == 9 && this.isOpen) {
            this._focusCatch(e);
            return;
          }
        }.bind(this)
      );

      if (this.options.hashSettings.goHash) {
        window.addEventListener(
          'hashchange',
          function () {
            if (window.location.hash) {
              this._openToHash();
            } else {
              this.close(this.targetOpen.selector);
            }
          }.bind(this)
        );

        window.addEventListener(
          'load',
          function () {
            if (window.location.hash) {
              this._openToHash();
            }
          }.bind(this)
        );
      }
    }
    open(selectorValue) {
      if (bodyLockStatus) {
        this.bodyLock =
          document.documentElement.classList.contains('lock') && !this.isOpen
            ? true
            : false;

        if (
          selectorValue &&
          typeof selectorValue === 'string' &&
          selectorValue.trim() !== ''
        ) {
          this.targetOpen.selector = selectorValue;
          this._selectorOpen = true;
        }
        if (this.isOpen) {
          this._reopen = true;
          this.close();
        }
        if (!this._selectorOpen)
          this.targetOpen.selector = this.lastClosed.selector;
        if (!this._reopen) this.previousActiveElement = document.activeElement;

        this.targetOpen.element = document.querySelector(
          this.targetOpen.selector
        );

        if (this.targetOpen.element) {
          if (this.youTubeCode) {
            const codeVideo = this.youTubeCode;
            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('allowfullscreen', '');

            const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
            iframe.setAttribute('allow', `${autoplay}; encrypted-media`);

            iframe.setAttribute('src', urlVideo);

            if (
              !this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              )
            ) {
              const youtubePlace = this.targetOpen.element
                .querySelector('.popup__text')
                .setAttribute(`${this.options.youtubePlaceAttribute}`, '');
            }
            this.targetOpen.element
              .querySelector(`[${this.options.youtubePlaceAttribute}]`)
              .appendChild(iframe);
          }
          if (this.options.hashSettings.location) {
            this._getHash();
            this._setHash();
          }

          this.options.on.beforeOpen(this);
          document.dispatchEvent(
            new CustomEvent('beforePopupOpen', {
              detail: {
                popup: this,
              },
            })
          );

          this.targetOpen.element.classList.add(
            this.options.classes.popupActive
          );
          document.documentElement.classList.add(
            this.options.classes.bodyActive
          );

          if (!this._reopen) {
            !this.bodyLock ? bodyLock() : null;
          } else this._reopen = false;

          this.targetOpen.element.setAttribute('aria-hidden', 'false');

          this.previousOpen.selector = this.targetOpen.selector;
          this.previousOpen.element = this.targetOpen.element;

          this._selectorOpen = false;

          this.isOpen = true;

          setTimeout(() => {
            this._focusTrap();
          }, 50);

          this.options.on.afterOpen(this);
          document.dispatchEvent(
            new CustomEvent('afterPopupOpen', {
              detail: {
                popup: this,
              },
            })
          );
        }
      }
    }
    close(selectorValue) {
      if (
        selectorValue &&
        typeof selectorValue === 'string' &&
        selectorValue.trim() !== ''
      ) {
        this.previousOpen.selector = selectorValue;
      }
      if (!this.isOpen || !bodyLockStatus) {
        return;
      }
      this.options.on.beforeClose(this);
      document.dispatchEvent(
        new CustomEvent('beforePopupClose', {
          detail: {
            popup: this,
          },
        })
      );

      if (this.youTubeCode) {
        if (
          this.targetOpen.element.querySelector(
            `[${this.options.youtubePlaceAttribute}]`
          )
        )
          this.targetOpen.element.querySelector(
            `[${this.options.youtubePlaceAttribute}]`
          ).innerHTML = '';
      }
      this.previousOpen.element.classList.remove(
        this.options.classes.popupActive
      );
      // aria-hidden
      this.previousOpen.element.setAttribute('aria-hidden', 'true');
      if (!this._reopen) {
        document.documentElement.classList.remove(
          this.options.classes.bodyActive
        );
        !this.bodyLock ? bodyUnlock() : null;
        this.isOpen = false;
      }
      this._removeHash();
      if (this._selectorOpen) {
        this.lastClosed.selector = this.previousOpen.selector;
        this.lastClosed.element = this.previousOpen.element;
      }
      this.options.on.afterClose(this);
      document.dispatchEvent(
        new CustomEvent('afterPopupClose', {
          detail: {
            popup: this,
          },
        })
      );

      setTimeout(() => {
        this._focusTrap();
      }, 50);
    }
    _getHash() {
      if (this.options.hashSettings.location) {
        this.hash = this.targetOpen.selector.includes('#')
          ? this.targetOpen.selector
          : this.targetOpen.selector.replace('.', '#');
      }
    }
    _openToHash() {
      let classInHash = document.querySelector(
        `.${window.location.hash.replace('#', '')}`
      )
        ? `.${window.location.hash.replace('#', '')}`
        : document.querySelector(`${window.location.hash}`)
        ? `${window.location.hash}`
        : null;

      const buttons = document.querySelector(
        `[${this.options.attributeOpenButton} = "${classInHash}"]`
      )
        ? document.querySelector(
            `[${this.options.attributeOpenButton} = "${classInHash}"]`
          )
        : document.querySelector(
            `[${this.options.attributeOpenButton} = "${classInHash.replace(
              '.',
              '#'
            )}"]`
          );
      if (buttons && classInHash) this.open(classInHash);
    }
    _setHash() {
      history.pushState('', '', this.hash);
    }
    _removeHash() {
      history.pushState('', '', window.location.href.split('#')[0]);
    }
    _focusCatch(e) {
      const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
      const focusArray = Array.prototype.slice.call(focusable);
      const focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }
      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
    }
    _focusTrap() {
      const focusable = this.previousOpen.element.querySelectorAll(
        this._focusEl
      );
      if (!this.isOpen && this.lastFocusEl) {
        this.lastFocusEl.focus();
      } else {
        focusable[0].focus();
      }
    }
  }
  new Popup({});

  // showmore
  function showMore() {
    window.addEventListener('load', function () {
      const showMoreBlocks = document.querySelectorAll('[data-showmore]');
      let showMoreBlocksRegular;
      let mdQueriesArray;
      if (showMoreBlocks.length) {
        // get regular objects
        showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (
          item,
          index,
          self
        ) {
          return !item.dataset.showmoreMedia;
        });
        // regular objects initialization
        showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

        document.addEventListener('click', showMoreActions);
        window.addEventListener('resize', showMoreActions);

        // get objects with media queries
        mdQueriesArray = dataMediaQueries(showMoreBlocks, 'showmoreMedia');
        if (mdQueriesArray && mdQueriesArray.length) {
          mdQueriesArray.forEach((mdQueriesItem) => {
            // event
            mdQueriesItem.matchMedia.addEventListener('change', function () {
              initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
          });
          initItemsMedia(mdQueriesArray);
        }
      }
      function initItemsMedia(mdQueriesArray) {
        mdQueriesArray.forEach((mdQueriesItem) => {
          initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
      }
      function initItems(showMoreBlocks, matchMedia) {
        showMoreBlocks.forEach((showMoreBlock) => {
          initItem(showMoreBlock, matchMedia);
        });
      }
      function initItem(showMoreBlock, matchMedia = false) {
        showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
        let showMoreContent = showMoreBlock.querySelectorAll(
          '[data-showmore-content]'
        );
        let showMoreButton = showMoreBlock.querySelectorAll(
          '[data-showmore-button]'
        );
        showMoreContent = Array.from(showMoreContent).filter(
          (item) => item.closest('[data-showmore]') === showMoreBlock
        )[0];
        showMoreButton = Array.from(showMoreButton).filter(
          (item) => item.closest('[data-showmore]') === showMoreBlock
        )[0];
        const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
        if (matchMedia.matches || !matchMedia) {
          if (hiddenHeight < getOriginalHeight(showMoreContent)) {
            _slideUp(showMoreContent, 0, hiddenHeight);
            showMoreButton.hidden = false;
          } else {
            _slideDown(showMoreContent, 0, hiddenHeight);
            showMoreButton.hidden = true;
          }
        } else {
          _slideDown(showMoreContent, 0, hiddenHeight);
          showMoreButton.hidden = true;
        }
      }
      function getHeight(showMoreBlock, showMoreContent) {
        let hiddenHeight = 0;
        const showMoreType = showMoreBlock.dataset.showmore
          ? showMoreBlock.dataset.showmore
          : 'size';
        if (showMoreType === 'items') {
          const showMoreTypeValue = showMoreContent.dataset.showmoreContent
            ? showMoreContent.dataset.showmoreContent
            : 3;
          const showMoreItems = showMoreContent.children;
          for (let index = 1; index < showMoreItems.length; index++) {
            const showMoreItem = showMoreItems[index - 1];
            hiddenHeight += showMoreItem.offsetHeight;
            if (index == showMoreTypeValue) break;
          }
        } else {
          const showMoreTypeValue = showMoreContent.dataset.showmoreContent
            ? showMoreContent.dataset.showmoreContent
            : 150;
          hiddenHeight = showMoreTypeValue;
        }
        return hiddenHeight;
      }
      function getOriginalHeight(showMoreContent) {
        let parentHidden;
        let hiddenHeight = showMoreContent.offsetHeight;
        showMoreContent.style.removeProperty('height');
        if (showMoreContent.closest(`[hidden]`)) {
          parentHidden = showMoreContent.closest(`[hidden]`);
          parentHidden.hidden = false;
        }
        let originalHeight = showMoreContent.offsetHeight;
        parentHidden ? (parentHidden.hidden = true) : null;
        showMoreContent.style.height = `${hiddenHeight}px`;
        return originalHeight;
      }
      function showMoreActions(e) {
        const targetEvent = e.target;
        const targetType = e.type;
        if (targetType === 'click') {
          if (targetEvent.closest('[data-showmore-button]')) {
            const showMoreButton = targetEvent.closest(
              '[data-showmore-button]'
            );
            const showMoreBlock = showMoreButton.closest('[data-showmore]');
            const showMoreContent = showMoreBlock.querySelector(
              '[data-showmore-content]'
            );
            const showMoreSpeed = showMoreBlock.dataset.showmoreButton
              ? showMoreBlock.dataset.showmoreButton
              : '500';
            const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
            if (!showMoreContent.classList.contains('_slide')) {
              showMoreBlock.classList.contains('_showmore-active')
                ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
                : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
              showMoreBlock.classList.toggle('_showmore-active');
            }
          }
        } else if (targetType === 'resize') {
          showMoreBlocksRegular && showMoreBlocksRegular.length
            ? initItems(showMoreBlocksRegular)
            : null;
          mdQueriesArray && mdQueriesArray.length
            ? initItemsMedia(mdQueriesArray)
            : null;
        }
      }
    });
  }
  showMore();

  // get hash
  function getHash() {
    if (location.hash) {
      return location.hash.replace('#', '');
    }
  }

  // processing media requests from attributes
  function dataMediaQueries(array, dataSetValue) {
    // get objects with media queries
    const media = Array.from(array).filter(function (item, index, self) {
      if (item.dataset[dataSetValue]) {
        return item.dataset[dataSetValue].split(',')[0];
      }
    });
    // objects with media queries initialization
    if (media.length) {
      const breakpointsArray = [];
      media.forEach((item) => {
        const params = item.dataset[dataSetValue];
        const breakpoint = {};
        const paramsArray = params.split(',');
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      });
      // get unique breakpoints
      let mdQueries = breakpointsArray.map(function (item) {
        return (
          '(' +
          item.type +
          '-width: ' +
          item.value +
          'px),' +
          item.value +
          ',' +
          item.type
        );
      });
      mdQueries = uniqArray(mdQueries);
      const mdQueriesArray = [];

      if (mdQueries.length) {
        // work with every breakpoint
        mdQueries.forEach((breakpoint) => {
          const paramsArray = breakpoint.split(',');
          const mediaBreakpoint = paramsArray[1];
          const mediaType = paramsArray[2];
          const matchMedia = window.matchMedia(paramsArray[0]);
          // objects with conditions
          const itemsArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
              return true;
            }
          });
          mdQueriesArray.push({
            itemsArray,
            matchMedia,
          });
        });
        return mdQueriesArray;
      }
    }
  }

  // remove class from all array elements
  function removeClasses(array, className) {
    for (var i = 0; i < array.length; i++) {
      array[i].classList.remove(className);
    }
  }

  // body lock
  let bodyLockStatus = true;
  function bodyLockToggle(delay = 500) {
    if (document.documentElement.classList.contains('lock')) {
      bodyUnlock(delay);
    } else {
      bodyLock(delay);
    }
  }
  function bodyUnlock(delay = 500) {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll('[data-lp]');
      setTimeout(() => {
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index];
          el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        document.documentElement.classList.remove('lock');
      }, delay);
      bodyLockStatus = false;
      setTimeout(function () {
        bodyLockStatus = true;
      }, delay);
    }
  }
  function bodyLock(delay = 500) {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
      let lock_padding = document.querySelectorAll('[data-lp]');
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight =
          window.innerWidth - document.body.offsetWidth + 'px';
      }
      body.style.paddingRight =
        window.innerWidth - document.body.offsetWidth + 'px';
      document.documentElement.classList.add('lock');

      bodyLockStatus = false;
      setTimeout(function () {
        bodyLockStatus = true;
      }, delay);
    }
  }

  // set active class
  function setActiveClass(target, array, className) {
    removeClasses(array, className);
    target.classList.add(className);
  }

  // control window scroll event
  let addWindowScrollEvent = false;

  // sticky block
  function stickyBlock() {
    addWindowScrollEvent = true;
    function stickyBlockInit() {
      const stickyParents = document.querySelectorAll('[data-sticky]');
      if (stickyParents.length) {
        stickyParents.forEach((stickyParent) => {
          let stickyConfig = {
            media: stickyParent.dataset.sticky
              ? parseInt(stickyParent.dataset.sticky)
              : null,
            top: stickyParent.dataset.stickyTop
              ? parseInt(stickyParent.dataset.stickyTop)
              : 0,
            bottom: stickyParent.dataset.stickyBottom
              ? parseInt(stickyParent.dataset.stickyBottom)
              : 0,
            header: stickyParent.hasAttribute('data-sticky-header')
              ? document.querySelector('header.header').offsetHeight
              : 0,
          };
          stickyBlockItem(stickyParent, stickyConfig);
        });
      }
    }
    function stickyBlockItem(stickyParent, stickyConfig) {
      const stickyBlockItem = stickyParent.querySelector('[data-sticky-item]');
      const headerHeight = stickyConfig.header;
      const offsetTop = headerHeight + stickyConfig.top;
      const startPoint =
        stickyBlockItem.getBoundingClientRect().top + scrollY - offsetTop;

      document.addEventListener('windowScroll', stickyBlockActions);
      //window.addEventListener("resize", stickyBlockActions);

      function stickyBlockActions(e) {
        const endPoint =
          stickyParent.offsetHeight +
          stickyParent.getBoundingClientRect().top +
          scrollY -
          (offsetTop + stickyBlockItem.offsetHeight + stickyConfig.bottom);
        let stickyItemValues = {
          position: 'relative',
          top: '0',
          left: '0',
          width: 'auto',
        };
        if (!stickyConfig.media || stickyConfig.media < window.innerWidth) {
          if (
            offsetTop + stickyConfig.bottom + stickyBlockItem.offsetHeight <
            window.innerHeight
          ) {
            if (scrollY >= startPoint && scrollY <= endPoint) {
              stickyItemValues.position = `relative`;
              stickyItemValues.zIndex = `1`;
              stickyItemValues.top = `0`;
              stickyItemValues.left = `0`;
              stickyItemValues.width = `auto`;
            } else if (scrollY >= endPoint) {
              stickyItemValues.position = `fixed`;
              stickyItemValues.zIndex = `200`;
              stickyItemValues.top = `0`;
              stickyItemValues.left = `calc((100vw - 100%) / -2)`;
              stickyItemValues.width = `100vw`;
            }
          }
        }
        stickyBlockType(stickyBlockItem, stickyItemValues);
      }
    }
    function stickyBlockType(stickyBlockItem, stickyItemValues) {
      stickyBlockItem.style.cssText = `position:${stickyItemValues.position};z-index:${stickyItemValues.zIndex};top:${stickyItemValues.top};left:${stickyItemValues.left};width:${stickyItemValues.width};`;
    }
    stickyBlockInit();
  }
  stickyBlock();

  setTimeout(() => {
    if (addWindowScrollEvent) {
      let windowScroll = new Event('windowScroll');
      window.addEventListener('scroll', function (e) {
        document.dispatchEvent(windowScroll);
      });
    }
  }, 0);

  // timer
  function startTimer(duration, display) {
    let timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      if (seconds === 0 && minutes === 0) {
        display.textContent = '00:00';
        return;
      }

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  // ===========================================================================

  const onClickHandler = (e) => {
    const target = e.target;
    if (target.closest('.centers-filter-list__item')) {
      const dropdownTxt = document.querySelector(
        '.centers-filter__dropdown-btn span'
      );
      const currentFilter = target.closest('.centers-filter-list__item');
      const centersFilters = document.querySelectorAll(
        '.centers-filter-list__item'
      );
      const tabsContent = document.querySelectorAll('.tabs__content5');
      for (let i = 0; i < centersFilters.length; i++) {
        centersFilters[i].classList.remove('active');
        tabsContent[i].classList.remove('active');
        if (
          tabsContent[i].dataset.question === currentFilter.dataset.question
        ) {
          tabsContent[i].classList.add('active');
        }
      }
      currentFilter.classList.add('active');
      dropdownTxt.innerHTML = `${
        currentFilter.querySelector('.centers-filter-list__item-text').innerHTML
      }`;
    }
    if (target.closest('.centers-filter__dropdown-btn')) {
      document.documentElement.classList.add('_dropdown-open');
      document.documentElement.style.overflow = 'hidden';
    }
    if (target.closest('.centers-filter__dropdown-close')) {
      document.documentElement.classList.remove('_dropdown-open');
      document.documentElement.style.overflow = 'auto';
    }
    if (target.closest('.alphabet-filter__button')) {
      setActiveClass(
        target.closest('.alphabet-filter__button'),
        document.querySelectorAll('.alphabet-filter__button'),
        '_active'
      );
    }
    if (target.closest('.spoiler-price-list__list-item')) {
      const currentItem = target.closest('.spoiler-price-list__list-item');
      const currentItemParent = currentItem.closest(
        '.spoiler-price-list__group-item'
      );
      const currentLetter = currentItemParent.querySelector(
        '.spoiler-price-list__letter'
      );
      setActiveClass(
        currentItem,
        document.querySelectorAll('.spoiler-price-list__list-item'),
        '_active'
      );
      setActiveClass(
        currentItemParent,
        document.querySelectorAll('.spoiler-price-list__group-item'),
        '_active'
      );

      alphabetIndex.innerHTML = currentLetter.innerHTML;
      document.getElementById('service-name').innerHTML = currentItem.innerHTML;
    }
    if (target.closest('.spoiler-price-list__letters button')) {
      const currentItem = target.closest('.spoiler-price-list__letters button');
      const letterIndex = currentItem.dataset.letterIndex;
      const servicesGroup = document.querySelector(
        '.spoiler-price-list__group'
      );

      setActiveClass(
        currentItem,
        document.querySelectorAll('.spoiler-price-list__letters button'),
        '_active'
      );
      setActiveClass(
        servicesGroup.querySelector(`[data-letter-index="${letterIndex}"]`),
        document.querySelectorAll('.spoiler-price-list__group-item'),
        '_active'
      );

      removeClasses(
        document.querySelectorAll('.spoiler-price-list__list-item'),
        '_active'
      );

      alphabetIndex.innerHTML = currentItem.innerHTML;
    }
    if (
      target.closest('#open-sort-dropdown') &&
      !sortDropdown.classList.contains('_slide') &&
      !sortDropdown.classList.contains('.our-vacancies__sort')
    ) {
      if (!document.documentElement.classList.contains('_sort-dropdown-open')) {
        document.documentElement.classList.add('_sort-dropdown-open');
        _slideDown(sortDropdown);
      } else if (
        document.documentElement.classList.contains('_sort-dropdown-open')
      ) {
        document.documentElement.classList.remove('_sort-dropdown-open');
        _slideUp(sortDropdown);
      }
    }
    if (
      target.closest('#slose-sort-dropdown') &&
      !sortDropdown.classList.contains('_slide')
    ) {
      _slideUp(sortDropdown);
      document.documentElement.classList.remove('_sort-dropdown-open');
    }
    if (target.closest('.date__item')) {
      const targetParent = target.closest('.date__item').parentElement;
      setActiveClass(
        target.closest('.date__item'),
        targetParent.querySelectorAll('.date__item'),
        '_active'
      );
    }
    if (target.closest('.all-services__service-card')) {
      setActiveClass(
        target.closest('.all-services__service-card'),
        document.querySelectorAll('.all-services__service-card'),
        '_active'
      );
    }
    if (target.closest('.hours-item')) {
      const targetParent = target.closest('.hours-item');
      setActiveClass(
        target.closest('.hours-item'),
        targetParent
          .closest('.doctor-card__hours-group')
          .querySelectorAll('.hours-item'),
        '_active'
      );
    }
    if (target.closest('.contact-item')) {
      const targetParent = target.closest('.contact-item').parentElement;
      setActiveClass(
        target.closest('.contact-item'),
        targetParent.querySelectorAll('.contact-item'),
        '_active'
      );
    }
    if (target.closest('.navigation-block__tab')) {
      const targetElement = target.closest('.navigation-block__tab');
      const currentContentBlock = document.querySelector(
        `[data-content-type=${targetElement.dataset.type}]`
      );

      setActiveClass(
        targetElement,
        document.querySelectorAll('.navigation-block__tab'),
        '_active'
      );
      setActiveClass(
        currentContentBlock,
        document.querySelectorAll('.new-clinic__content'),
        '_active'
      );
    }
    if (target.closest('.hint__icon')) {
      target.closest('.hint').classList.toggle('_active');
    }
    if (
      document.querySelector('.hint._active') &&
      !target.closest('.hint__body') &&
      !target.closest('.hint__icon')
    ) {
      document.querySelector('.hint._active').classList.remove('_active');
    }
    if (target.closest('.option')) {
      setActiveClass(
        target.closest('.option'),
        document.querySelectorAll('.option'),
        '_active'
      );
    }
    if (target.closest('.review-card__show_response')) {
      target.closest(
        '.review-card__show_response'
      ).parentElement.nextElementSibling.style.display = 'flex';
      target.closest('.review-card__text-wrap').classList.add('_active');
    }
    if (target.closest('.review-card__hide')) {
      target.closest(
        '.review-card__hide'
      ).parentElement.parentElement.style.display = 'none';
      target.closest('.review-card__text-wrap').classList.remove('_active');
    }
    if (target.closest('[data-showmore-items-btn]')) {
      const btn = target.closest('[data-showmore-items-btn]');
      const parent = btn.previousElementSibling;

      if (!parent.classList.contains('_active')) {
        _slideDown(parent);
        parent.classList.add('_active');
        btn.classList.add('_active');
        btn.innerHTML = 'Скрыть';
      } else {
        _slideUp(parent);
        parent.classList.remove('_active');
        btn.classList.remove('_active');
        btn.innerHTML = 'Загрузить еще';
      }
    }
  };

  // ===========================================================================

  document.addEventListener('click', onClickHandler);
  window.addEventListener('resize', function () {
    initSliders();
    moveImage();
    allReviewsModify();
    initHoursItems();
  });
  const display = document.querySelector('#time');
  if (display) {
    startTimer(72, display);
  }
});
