document.addEventListener('DOMContentLoaded', function () {
  $('.tel-mask').inputmask('+7 (999) 999-99-99', {
    clearMaskOnLostFocus: false,
  })

  const md = window.matchMedia('(max-width: 768px)').matches

  // sliders
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
    })
  }

  // price list
  const pricelistSearch = document.getElementById('price-list-search')
  const alphabetIndex = document.getElementById('alphabet-index')
  if (pricelistSearch) {
    pricelistSearch.addEventListener('input', function () {
      document.documentElement.classList.add('_search-box-open')
      if (!pricelistSearch.querySelector('input').value) {
        document.documentElement.classList.remove('_search-box-open')
      }
    })
    pricelistSearch.addEventListener('focusout', function () {
      document.documentElement.classList.remove('_search-box-open')
    })
  }

  // ===========================================================================

  // smooth behaviour
  const _slideUp = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = `${target.offsetHeight}px`
      target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = showmore ? `${showmore}px` : `0px`
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      window.setTimeout(() => {
        target.hidden = !showmore ? true : false
        !showmore ? target.style.removeProperty('height') : null
        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-top')
        target.style.removeProperty('margin-bottom')
        !showmore ? target.style.removeProperty('overflow') : null
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.classList.remove('_slide')
        // create event
        document.dispatchEvent(
          new CustomEvent('slideUpDone', {
            detail: {
              target: target,
            },
          })
        )
      }, duration)
    }
  }
  const _slideDown = (target, duration = 500, showmore = 0) => {
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide')
      target.hidden = target.hidden ? false : null
      showmore ? target.style.removeProperty('height') : null
      let height = target.offsetHeight
      target.style.overflow = 'hidden'
      target.style.height = showmore ? `${showmore}px` : `0px`
      target.style.paddingTop = 0
      target.style.paddingBottom = 0
      target.style.marginTop = 0
      target.style.marginBottom = 0
      target.offsetHeight
      target.style.transitionProperty = 'height, margin, padding'
      target.style.transitionDuration = duration + 'ms'
      target.style.height = height + 'px'
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      window.setTimeout(() => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
        target.classList.remove('_slide')
        // create event
        document.dispatchEvent(
          new CustomEvent('slideDownDone', {
            detail: {
              target: target,
            },
          })
        )
      }, duration)
    }
  }
  const _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
      return _slideDown(target, duration)
    } else {
      return _slideUp(target, duration)
    }
  }

  // spoilers
  function spoilers() {
    const spoilersArray = document.querySelectorAll('[data-spoilers]')
    if (spoilersArray.length > 0) {
      // get regular spoilers
      const spoilersRegular = Array.from(spoilersArray).filter(function (
        item,
        index,
        self
      ) {
        return !item.dataset.spoilers.split(',')[0]
      })
      // regular spoilers initialization
      if (spoilersRegular.length) {
        initSpoilers(spoilersRegular)
      }
      // get spoilers with media queries
      let mdQueriesArray = dataMediaQueries(spoilersArray, 'spoilers')
      if (mdQueriesArray && mdQueriesArray.length) {
        mdQueriesArray.forEach(mdQueriesItem => {
          // event
          mdQueriesItem.matchMedia.addEventListener('change', function () {
            initSpoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia)
          })
          initSpoilers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia)
        })
      }
      // initialization
      function initSpoilers(spoilersArray, matchMedia = false) {
        spoilersArray.forEach(spoilersBlock => {
          spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock
          if (matchMedia.matches || !matchMedia) {
            spoilersBlock.classList.add('_spoiler-init')
            initSpoilerBody(spoilersBlock)
            spoilersBlock.addEventListener('click', setSpoilerAction)
          } else {
            spoilersBlock.classList.remove('_spoiler-init')
            initSpoilerBody(spoilersBlock, false)
            spoilersBlock.removeEventListener('click', setSpoilerAction)
          }
        })
      }
      // content
      function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
        let spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]')
        if (spoilerTitles.length) {
          spoilerTitles = Array.from(spoilerTitles).filter(
            item => item.closest('[data-spoilers]') === spoilersBlock
          )
          spoilerTitles.forEach(spoilerTitle => {
            if (hideSpoilerBody) {
              spoilerTitle.removeAttribute('tabindex')
              if (!spoilerTitle.classList.contains('_spoiler-active')) {
                spoilerTitle.nextElementSibling.hidden = true
              }
            } else {
              spoilerTitle.setAttribute('tabindex', '-1')
              spoilerTitle.nextElementSibling.hidden = false
            }
          })
        }
      }
      function setSpoilerAction(e) {
        const el = e.target
        if (el.closest('[data-spoiler]')) {
          const spoilerTitle = el.closest('[data-spoiler]')
          const spoilersBlock = spoilerTitle.closest('[data-spoilers]')
          const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler')
          const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed
            ? parseInt(spoilersBlock.dataset.spoilersSpeed)
            : 500
          if (!spoilersBlock.querySelectorAll('._slide').length) {
            if (
              oneSpoiler &&
              !spoilerTitle.classList.contains('_spoiler-active')
            ) {
              hideSpoilersBody(spoilersBlock)
            }
            spoilerTitle.classList.toggle('_spoiler-active')
            _slideToggle(spoilerTitle.nextElementSibling, spoilerSpeed)
          }
          e.preventDefault()
        }
      }
      function hideSpoilersBody(spoilersBlock) {
        const spoilerActiveTitle = spoilersBlock.querySelector(
          '[data-spoiler]._spoiler-active'
        )
        const spoilerSpeed = spoilersBlock.dataset.spoilersSpeed
          ? parseInt(spoilersBlock.dataset.spoilersSpeed)
          : 500
        if (
          spoilerActiveTitle &&
          !spoilersBlock.querySelectorAll('._slide').length
        ) {
          spoilerActiveTitle.classList.remove('_spoiler-active')
          _slideUp(spoilerActiveTitle.nextElementSibling, spoilerSpeed)
        }
      }
      // closing on click outside the spoiler
      const spoilersClose = document.querySelectorAll('[data-spoiler-close]')
      if (spoilersClose.length) {
        document.addEventListener('click', function (e) {
          const el = e.target
          if (!el.closest('[data-spoilers]')) {
            spoilersClose.forEach(spoilerClose => {
              const spoilersBlock = spoilerClose.closest('[data-spoilers]')
              const spoilerSpeed = spollersBlock.dataset.spoilersSpeed
                ? parseInt(spoilersBlock.dataset.spoilersSpeed)
                : 500
              spoilerClose.classList.remove('_spoiler-active')
              _slideUp(spoilerClose.nextElementSibling, spoilerSpeed)
            })
          }
        })
      }
    }
  }
  spoilers()

  // select
  class SelectConstructor {
    constructor(props, data = null) {
      let defaultConfig = {
        init: true,
        logging: false,
      }
      this.config = Object.assign(defaultConfig, props)
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
      }
      this._this = this
      if (this.config.init) {
        const selectItems = data
          ? document.querySelectorAll(data)
          : document.querySelectorAll('select')
        if (selectItems.length) {
          this.selectsInit(selectItems)
        }
      }
    }
    getSelectClass(className) {
      return `.${className}`
    }
    getSelectElement(selectItem, className) {
      return {
        originalSelect: selectItem.querySelector('select'),
        selectElement: selectItem.querySelector(this.getSelectClass(className)),
      }
    }
    selectsInit(selectItems) {
      selectItems.forEach((originalSelect, index) => {
        this.selectInit(originalSelect, index + 1)
      })
      document.addEventListener(
        'click',
        function (e) {
          this.selectsActions(e)
        }.bind(this)
      )
      document.addEventListener(
        'keydown',
        function (e) {
          this.selectsActions(e)
        }.bind(this)
      )
      document.addEventListener(
        'focusin',
        function (e) {
          this.selectsActions(e)
        }.bind(this)
      )
      document.addEventListener(
        'focusout',
        function (e) {
          this.selectsActions(e)
        }.bind(this)
      )
    }
    selectInit(originalSelect, index) {
      const _this = this
      let selectItem = document.createElement('div')
      selectItem.classList.add(this.selectClasses.classSelect)
      originalSelect.parentNode.insertBefore(selectItem, originalSelect)
      selectItem.appendChild(originalSelect)
      originalSelect.hidden = true
      index ? (originalSelect.dataset.id = index) : null

      if (this.getSelectPlaceholder(originalSelect)) {
        originalSelect.dataset.placeholder =
          this.getSelectPlaceholder(originalSelect).value
        if (this.getSelectPlaceholder(originalSelect).label.show) {
          const selectItemTitle = this.getSelectElement(
            selectItem,
            this.selectClasses.classSelectTitle
          ).selectElement
          selectItemTitle.insertAdjacentHTML(
            'afterbegin',
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(originalSelect).label.text
                ? this.getSelectPlaceholder(originalSelect).label.text
                : this.getSelectPlaceholder(originalSelect).value
            }</span>`
          )
        }
      }
      selectItem.insertAdjacentHTML(
        'beforeend',
        `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
      )
      this.selectBuild(originalSelect)

      originalSelect.dataset.speed = originalSelect.dataset.speed
        ? originalSelect.dataset.speed
        : '150'
      originalSelect.addEventListener('change', function (e) {
        _this.selectChange(e)
      })
    }
    selectBuild(originalSelect) {
      const selectItem = originalSelect.parentElement
      selectItem.dataset.id = originalSelect.dataset.id
      originalSelect.dataset.classModif
        ? selectItem.classList.add(
            `select_${originalSelect.dataset.classModif}`
          )
        : null
      originalSelect.multiple
        ? selectItem.classList.add(this.selectClasses.classSelectMultiple)
        : selectItem.classList.remove(this.selectClasses.classSelectMultiple)
      originalSelect.hasAttribute('data-checkbox') && originalSelect.multiple
        ? selectItem.classList.add(this.selectClasses.classSelectCheckBox)
        : selectItem.classList.remove(this.selectClasses.classSelectCheckBox)
      this.setSelectTitleValue(selectItem, originalSelect)
      this.setOptions(selectItem, originalSelect)
      originalSelect.hasAttribute('data-search')
        ? this.searchActions(selectItem)
        : null
      originalSelect.hasAttribute('data-open')
        ? this.selectAction(selectItem)
        : null
      this.selectDisabled(selectItem, originalSelect)
    }
    selectsActions(e) {
      const targetElement = e.target
      const targetType = e.type
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
            )
        const originalSelect = this.getSelectElement(selectItem).originalSelect
        if (targetType === 'click') {
          if (!originalSelect.disabled) {
            if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTag)
              )
            ) {
              const targetTag = targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTag)
              )
              const optionItem = document.querySelector(
                `.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`
              )
              this.optionAction(selectItem, originalSelect, optionItem)
            } else if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectTitle)
              )
            ) {
              this.selectAction(selectItem)
            } else if (
              targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
            ) {
              const optionItem = targetElement.closest(
                this.getSelectClass(this.selectClasses.classSelectOption)
              )
              this.optionAction(selectItem, originalSelect, optionItem)
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
              : selectItem.classList.remove(this.selectClasses.classSelectFocus)
          }
        } else if (targetType === 'keydown' && e.code === 'Escape') {
          this.selectsСlose()
        }
      } else {
        this.selectsСlose()
      }
    }
    selectsСlose(selectOneGroup) {
      const selectsGroup = selectOneGroup ? selectOneGroup : document
      const selectActiveItems = selectsGroup.querySelectorAll(
        `${this.getSelectClass(
          this.selectClasses.classSelect
        )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
      )
      if (selectActiveItems.length) {
        selectActiveItems.forEach(selectActiveItem => {
          this.selectСlose(selectActiveItem)
        })
      }
    }
    selectСlose(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement
      if (!selectOptions.classList.contains('_slide')) {
        selectItem.classList.remove(this.selectClasses.classSelectOpen)
        _slideUp(selectOptions, originalSelect.dataset.speed)
      }
    }
    selectAction(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement
      if (originalSelect.closest('[data-one-select]')) {
        const selectOneGroup = originalSelect.closest('[data-one-select]')
        this.selectsСlose(selectOneGroup)
      }

      if (!selectOptions.classList.contains('_slide')) {
        selectItem.classList.toggle(this.selectClasses.classSelectOpen)
        _slideToggle(selectOptions, originalSelect.dataset.speed)
      }
    }
    setSelectTitleValue(selectItem, originalSelect) {
      const selectItemBody = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectBody
      ).selectElement
      const selectItemTitle = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectTitle
      ).selectElement
      if (selectItemTitle) selectItemTitle.remove()
      selectItemBody.insertAdjacentHTML(
        'afterbegin',
        this.getSelectTitleValue(selectItem, originalSelect)
      )
    }
    getSelectTitleValue(selectItem, originalSelect) {
      let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html
      if (originalSelect.multiple && originalSelect.hasAttribute('data-tags')) {
        selectTitleValue = this.getSelectedOptionsData(originalSelect)
          .elements.map(
            option =>
              `<span role="button" data-select-id="${
                selectItem.dataset.id
              }" data-value="${
                option.value
              }" class="_select-tag">${this.getSelectElementContent(
                option
              )}</span>`
          )
          .join('')
        if (
          originalSelect.dataset.tags &&
          document.querySelector(originalSelect.dataset.tags)
        ) {
          document.querySelector(originalSelect.dataset.tags).innerHTML =
            selectTitleValue
          if (originalSelect.hasAttribute('data-search'))
            selectTitleValue = false
        }
      }
      selectTitleValue = selectTitleValue.length
        ? selectTitleValue
        : originalSelect.dataset.placeholder
        ? originalSelect.dataset.placeholder
        : ''
      let pseudoAttribute = ''
      let pseudoAttributeClass = ''
      if (originalSelect.hasAttribute('data-pseudo-label')) {
        pseudoAttribute = originalSelect.dataset.pseudoLabel
          ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"`
          : ` data-pseudo-label="Заполните атрибут"`
        pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`
      }
      this.getSelectedOptionsData(originalSelect).values.length
        ? selectItem.classList.add(this.selectClasses.classSelectActive)
        : selectItem.classList.remove(this.selectClasses.classSelectActive)
      if (originalSelect.hasAttribute('data-search')) {
        return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`
      } else {
        const customClass =
          this.getSelectedOptionsData(originalSelect).elements.length &&
          this.getSelectedOptionsData(originalSelect).elements[0].dataset.class
            ? ` ${
                this.getSelectedOptionsData(originalSelect).elements[0].dataset
                  .class
              }`
            : ''
        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`
      }
    }
    getSelectElementContent(selectOption) {
      const selectOptionData = selectOption.dataset.asset
        ? `${selectOption.dataset.asset}`
        : ''
      const selectOptionDataHTML =
        selectOptionData.indexOf('img') >= 0
          ? `<img src="${selectOptionData}" alt="">`
          : selectOptionData
      let selectOptionContentHTML = ``
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectRow}">`
        : ''
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectData}">`
        : ''
      selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : ''
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      selectOptionContentHTML += selectOptionData
        ? `<span class="${this.selectClasses.classSelectText}">`
        : ''
      selectOptionContentHTML += selectOption.textContent
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      selectOptionContentHTML += selectOptionData ? `</span>` : ''
      return selectOptionContentHTML
    }
    getSelectPlaceholder(originalSelect) {
      const selectPlaceholder = Array.from(originalSelect.options).find(
        option => !option.value
      )
      if (selectPlaceholder) {
        return {
          value: selectPlaceholder.textContent,
          show: selectPlaceholder.hasAttribute('data-show'),
          label: {
            show: selectPlaceholder.hasAttribute('data-label'),
            text: selectPlaceholder.dataset.label,
          },
        }
      }
    }
    getSelectedOptionsData(originalSelect, type) {
      let selectedOptions = []
      if (originalSelect.multiple) {
        selectedOptions = Array.from(originalSelect.options)
          .filter(option => option.value)
          .filter(option => option.selected)
      } else {
        selectedOptions.push(
          originalSelect.options[originalSelect.selectedIndex]
        )
      }
      return {
        elements: selectedOptions.map(option => option),
        values: selectedOptions
          .filter(option => option.value)
          .map(option => option.value),
        html: selectedOptions.map(option =>
          this.getSelectElementContent(option)
        ),
      }
    }
    getOptions(originalSelect) {
      let selectOptionsScroll = originalSelect.hasAttribute('data-scroll')
        ? `data-simplebar`
        : ''
      let selectOptionsScrollHeight = originalSelect.dataset.scroll
        ? `style="max-height:${originalSelect.dataset.scroll}px"`
        : ''
      let selectOptions = Array.from(originalSelect.options)
      if (selectOptions.length > 0) {
        let selectOptionsHTML = ``
        if (
          (this.getSelectPlaceholder(originalSelect) &&
            !this.getSelectPlaceholder(originalSelect).show) ||
          originalSelect.multiple
        ) {
          selectOptions = selectOptions.filter(option => option.value)
        }
        selectOptionsHTML += selectOptionsScroll
          ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">`
          : ''
        selectOptions.forEach(selectOption => {
          selectOptionsHTML += this.getOption(selectOption, originalSelect)
        })
        selectOptionsHTML += selectOptionsScroll ? `</div>` : ''
        return selectOptionsHTML
      }
    }
    getOption(selectOption, originalSelect) {
      const selectOptionSelected =
        selectOption.selected && originalSelect.multiple
          ? ` ${this.selectClasses.classSelectOptionSelected}`
          : ''
      const selectOptionHide =
        selectOption.selected &&
        !originalSelect.hasAttribute('data-show-selected') &&
        !originalSelect.multiple
          ? `hidden`
          : ``
      const selectOptionClass = selectOption.dataset.class
        ? ` ${selectOption.dataset.class}`
        : ''
      const selectOptionLink = selectOption.dataset.href
        ? selectOption.dataset.href
        : false
      const selectOptionLinkTarget = selectOption.hasAttribute(
        'data-href-blank'
      )
        ? `target="_blank"`
        : ''
      let selectOptionHTML = ``
      selectOptionHTML += selectOptionLink
        ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">`
        : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`
      selectOptionHTML += this.getSelectElementContent(selectOption)
      selectOptionHTML += selectOptionLink ? `</a>` : `</button>`
      return selectOptionHTML
    }
    setOptions(selectItem, originalSelect) {
      const selectItemOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement
      selectItemOptions.innerHTML = this.getOptions(originalSelect)
    }
    optionAction(selectItem, originalSelect, optionItem) {
      if (originalSelect.multiple) {
        optionItem.classList.toggle(
          this.selectClasses.classSelectOptionSelected
        )
        const originalSelectSelectedItems =
          this.getSelectedOptionsData(originalSelect).elements
        originalSelectSelectedItems.forEach(originalSelectSelectedItem => {
          originalSelectSelectedItem.removeAttribute('selected')
        })
        const selectSelectedItems = selectItem.querySelectorAll(
          this.getSelectClass(this.selectClasses.classSelectOptionSelected)
        )
        selectSelectedItems.forEach(selectSelectedItems => {
          originalSelect
            .querySelector(
              `option[value="${selectSelectedItems.dataset.value}"]`
            )
            .setAttribute('selected', 'selected')
        })
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
            ).hidden = false
          }
          optionItem.hidden = true
        }
        originalSelect.value = optionItem.hasAttribute('data-value')
          ? optionItem.dataset.value
          : optionItem.textContent
        this.selectAction(selectItem)
      }
      this.setSelectTitleValue(selectItem, originalSelect)
      this.setSelectChange(originalSelect)
    }
    selectChange(e) {
      const originalSelect = e.target
      this.selectBuild(originalSelect)
      this.setSelectChange(originalSelect)
    }
    setSelectChange(originalSelect) {
      if (originalSelect.hasAttribute('data-submit') && originalSelect.value) {
        let tempButton = document.createElement('button')
        tempButton.type = 'submit'
        originalSelect.closest('form').append(tempButton)
        tempButton.click()
        tempButton.remove()
      }
      const selectItem = originalSelect.parentElement
      this.selectCallback(selectItem, originalSelect)
    }
    selectDisabled(selectItem, originalSelect) {
      if (originalSelect.disabled) {
        selectItem.classList.add(this.selectClasses.classSelectDisabled)
        this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectTitle
        ).selectElement.disabled = true
      } else {
        selectItem.classList.remove(this.selectClasses.classSelectDisabled)
        this.getSelectElement(
          selectItem,
          this.selectClasses.classSelectTitle
        ).selectElement.disabled = false
      }
    }
    searchActions(selectItem) {
      const originalSelect = this.getSelectElement(selectItem).originalSelect
      const selectInput = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectInput
      ).selectElement
      const selectOptions = this.getSelectElement(
        selectItem,
        this.selectClasses.classSelectOptions
      ).selectElement
      const selectOptionsItems = selectOptions.querySelectorAll(
        `.${this.selectClasses.classSelectOption}`
      )
      const _this = this
      selectInput.addEventListener('input', function () {
        selectOptionsItems.forEach(selectOptionsItem => {
          if (
            selectOptionsItem.textContent
              .toUpperCase()
              .indexOf(selectInput.value.toUpperCase()) >= 0
          ) {
            selectOptionsItem.hidden = false
          } else {
            selectOptionsItem.hidden = true
          }
        })
        selectOptions.hidden === true ? _this.selectAction(selectItem) : null
      })
    }
    selectCallback(selectItem, originalSelect) {
      document.dispatchEvent(
        new CustomEvent('selectCallback', {
          detail: {
            select: originalSelect,
          },
        })
      )
    }
  }
  new SelectConstructor({})

  // processing media requests from attributes
  function dataMediaQueries(array, dataSetValue) {
    // get objects with media queries
    const media = Array.from(array).filter(function (item, index, self) {
      if (item.dataset[dataSetValue]) {
        return item.dataset[dataSetValue].split(',')[0]
      }
    })
    // objects with media queries initialization
    if (media.length) {
      const breakpointsArray = []
      media.forEach(item => {
        const params = item.dataset[dataSetValue]
        const breakpoint = {}
        const paramsArray = params.split(',')
        breakpoint.value = paramsArray[0]
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max'
        breakpoint.item = item
        breakpointsArray.push(breakpoint)
      })
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
        )
      })
      mdQueries = uniqArray(mdQueries)
      const mdQueriesArray = []

      if (mdQueries.length) {
        // work with every breakpoint
        mdQueries.forEach(breakpoint => {
          const paramsArray = breakpoint.split(',')
          const mediaBreakpoint = paramsArray[1]
          const mediaType = paramsArray[2]
          const matchMedia = window.matchMedia(paramsArray[0])
          // objects with conditions
          const itemsArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
              return true
            }
          })
          mdQueriesArray.push({
            itemsArray,
            matchMedia,
          })
        })
        return mdQueriesArray
      }
    }
  }

  // remove class from all array elements
  function removeClasses(array, className) {
    for (var i = 0; i < array.length; i++) {
      array[i].classList.remove(className)
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
    if (target.closest('.alphabet-filter__button')) {
      removeClasses(
        document.querySelectorAll('.alphabet-filter__button'),
        '_active'
      )
      target.closest('.alphabet-filter__button').classList.add('_active')
    }
    if (target.closest('.spoiler-price-list__list-item')) {
      const currentItem = target.closest('.spoiler-price-list__list-item')
      const currentItemParent = currentItem.closest(
        '.spoiler-price-list__group-item'
      )
      const currentLetter = currentItemParent.querySelector(
        '.spoiler-price-list__letter'
      )
      removeClasses(
        document.querySelectorAll('.spoiler-price-list__list-item'),
        '_active'
      )
      removeClasses(
        document.querySelectorAll('.spoiler-price-list__group-item'),
        '_active'
      )
      currentItem.classList.add('_active')
      currentItemParent.classList.add('_active')
      alphabetIndex.innerHTML = currentLetter.innerHTML
      document.getElementById('service-name').innerHTML = currentItem.innerHTML
    }
    if (target.closest('.spoiler-price-list__letters button')) {
      const currentItem = target.closest('.spoiler-price-list__letters button')
      const letterIndex = currentItem.dataset.letterIndex
      const servicesGroup = document.querySelector('.spoiler-price-list__group')
      removeClasses(
        document.querySelectorAll('.spoiler-price-list__letters button'),
        '_active'
      )
      removeClasses(
        document.querySelectorAll('.spoiler-price-list__group-item'),
        '_active'
      )
      removeClasses(
        document.querySelectorAll('.spoiler-price-list__list-item'),
        '_active'
      )
      currentItem.classList.add('_active')
      servicesGroup
        .querySelector(`[data-letter-index="${letterIndex}"]`)
        .classList.add('_active')
      alphabetIndex.innerHTML = currentItem.innerHTML
    }
  }

  // ===========================================================================

  document.addEventListener('click', onClickHandler)
})
