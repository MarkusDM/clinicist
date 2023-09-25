// Модалки
const body = document.querySelector('body')
class Modal {
  constructor(name) {
    this.name = name
    this.modal = document.querySelector(`[data-modal="${name}"]`)
    this.triggers = document.querySelectorAll(`[data-class="${name}"]`)
    this.body = document.querySelector(`body`)
    this.openHendler()
  }
  open() {
    this.modal.classList.remove('success', 'error')
    this.modal.classList.add('active')
    this.body.classList.add('hidden')
    this.modal.addEventListener('click', this.closeHendler)
  }
  close() {
    this.modal.classList.remove('active')
    this.body.classList.remove('hidden')
    this.modal.removeEventListener('click', this.closeHendler)
  }
  success() {
    this.modal.classList.remove('error')
    this.modal.classList.add('success')
  }
  error() {
    this.modal.classList.remove('success')
    this.modal.classList.add('error')
  }
  update() {
    this.modal = document.querySelector(`[data-modal="${this.name}"]`)
    this.triggers = document.querySelectorAll(`[data-class="${this.name}"]`)
    this.openHendler()
  }
  openHendler = e => {
    this.triggers.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault()
        this.open()
      })
    })
  }
  closeHendler = e => {
    if (e.target.classList.contains('close-x')) {
      this.close()
    }
  }
}
let form1 = document.querySelector('[data-modal="form1"]')
  ? new Modal('form1')
  : null
let form3 = document.querySelector('[data-modal="form3"]')
  ? new Modal('form3')
  : null
let breac = document.querySelector('[data-modal="breac"]')
  ? new Modal('breac')
  : null
let bidOk = document.querySelector('[data-modal="bid-ok"]')
  ? new Modal('bid-ok')
  : null
let burger = document.querySelector('[data-modal="burger"]')
  ? new Modal('burger')
  : null
let menu = document.querySelector('[data-modal="menu"]')
  ? new Modal('menu')
  : null
let centers = document.querySelector('[data-modal="centers"]')
  ? new Modal('centers')
  : null
let newSletter = document.querySelector('[data-modal="new-sletter"]')
  ? new Modal('new-sletter')
  : null
let vopros = document.querySelector('[data-modal="vopros"]')
  ? new Modal('vopros')
  : null
let vacansia = document.querySelector('[data-modal="vacansia"]')
  ? new Modal('vacansia')
  : null
let applicationOk = document.querySelector('[data-modal="application-ok"]')
  ? new Modal('application-ok')
  : null
let applicationNo = document.querySelector('[data-modal="application-no"]')
  ? new Modal('application-no')
  : null
let reviewOk = document.querySelector('[data-modal="review-ok"]')
  ? new Modal('review-ok')
  : null
let review = document.querySelector('[data-modal="review"]')
  ? new Modal('review')
  : null
let box = document.querySelector('[data-modal="box"]') ? new Modal('box') : null
let reception = document.querySelector('[data-modal="reception"]')
  ? new Modal('reception')
  : null
let services = document.querySelector('[data-modal="services"]')
  ? new Modal('services')
  : null
let calendar = document.querySelector('[data-modal="calendar"]')
  ? new Modal('calendar')
  : null

/***********   Вызов модалок  ****************************** */
const callFeedbak = document.querySelector('.baner__content-btn')
const askQuestion = document.querySelector('.solution__top-left-btn')
const advertisment = document.querySelector('.services__header-btn')
const modalBurger = document.querySelector('.header__top-burger')

if (callFeedbak) {
  callFeedbak.addEventListener('click', () => {
    new Modal('review').open()
  })
}

if (askQuestion) {
  askQuestion.addEventListener('click', () => {
    new Modal('vopros').open()
  })
}

if (advertisment) {
  advertisment.addEventListener('click', () => {
    new Modal('new-sletter').open()
  })
}

if (modalBurger) {
  modalBurger.addEventListener('click', () => {
    new Modal('burger').open()
  })
}
