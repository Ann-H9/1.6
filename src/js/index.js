import '../scss/style.scss'

console.log('Works!')

import Swiper from 'swiper'

import { Navigation, Pagination } from '../../node_modules/swiper/modules'
Swiper.use([Navigation, Pagination])

//tut sliders

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.slider-1', {
    loop: true,
    spaceBetween: 35,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.slider-2', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 768px)', '.slider-3', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})

//knopochka 1

const buttons = document.querySelectorAll('.desktop__brands-button')
const contents = document.querySelectorAll('.desktop__brands__item--hidden')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => btnClick(btn))
})

function btnClick(btn) {
  contents.forEach((content) => {
    console.log(content.classList)

    if (content.classList.contains('desktop__brands__item--hidden')) {
      btn.textContent = 'Скрыть'
    } else {
      btn.textContent = 'Показать все'
    }

    content.classList.toggle('desktop__brands__item--hidden')
  })
}

//knopochka2

const button = document.querySelectorAll('.desktop__brands-button--second')
const content = document.querySelectorAll('.desktop__item--hidden')

button.forEach((btn) => {
  btn.addEventListener('click', () => btn2Click(btn))
})

function btn2Click(btn) {
  content.forEach((content) => {
    console.log(content.classList)

    if (content.classList.contains('desktop__item--hidden')) {
      btn.textContent = 'Скрыть'
    } else {
      btn.textContent = 'Показать все'
    }

    content.classList.toggle('desktop__item--hidden')
  })
}

//function menushecki

const headerIcon = document.querySelector('.header__icon')
const asideMenu = document.querySelector('.aside')
const closeButton = document.querySelector('.aside__header--button-burger')
const overlay = document.querySelector('.main')

function toggleMenu() {
  if (window.innerWidth < 1120) {
    const isMenuOpen = asideMenu.style.display === 'block'
    asideMenu.style.display = isMenuOpen ? 'none' : 'block'
    toggleBlur(!isMenuOpen)
  }
}

function closeMenu() {
  if (window.innerWidth < 1120) {
    asideMenu.style.display = 'none'
    toggleBlur(false)
  }
}

function toggleBlur(isBlurred) {
  const mainElement = document.querySelector('main')
  const headerElement = document.querySelector('header')
  mainElement.classList.toggle('blurred', isBlurred)
  headerElement.classList.toggle('blurred', isBlurred)
}

headerIcon.addEventListener('click', toggleMenu)
closeButton.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1120) {
    asideMenu.style.display = 'block'
    toggleBlur(false)
  } else {
    closeMenu()
  }
})

function openModal(modal) {
  modal.style.display = 'flex'
  toggleBlur(true)
}

function closeModal(modal) {
  modal.style.display = 'none'
  toggleBlur(false)
}

function setupModal(buttons, modal, closeButton, overlay) {
  buttons.forEach((button) =>
    button.addEventListener('click', () => openModal(modal))
  )

  closeButton.addEventListener('click', () => closeModal(modal))

  overlay.addEventListener('click', () => closeModal(modal))
}

const feedbackBtns = document.querySelectorAll('.button-feedback')
const modalFeedback = document.querySelector('.modal__feedback')
const closeFeedbackBtn = document.querySelector('.modal__close')

setupModal(feedbackBtns, modalFeedback, closeFeedbackBtn, overlay)

const callBtns = document.querySelectorAll('.button-call')
const modalCall = document.querySelector('.modal__call')
const closeCallBtn = document.querySelector('.close__button')

setupModal(callBtns, modalCall, closeCallBtn, overlay)
