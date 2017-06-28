import $ from 'jquery'
import 'fullpage.js'
import '../css/pc.css'

const timers = []

const activePage = (page) => {
  const jpPage = $('.page-' + page)
  const timer1 = setTimeout(function () {
    jpPage.find('.qrcode').addClass('slide-in-up')
  }, 200)
  timers.push(timer1)

  const timer2 = setTimeout(function () {
    jpPage.find('.title').addClass('slide-in-down')
  }, 700)
  timers.push(timer2)

  const timer3 = setTimeout(function () {
    jpPage.find('.page-next').addClass('scale-up')
  }, 1000)
  timers.push(timer3)

}

const resetPage = (page) => {
  const jpPage = $('.page-' + page)
  if (timers && timers.length > 0) {
    timers.forEach(item => {
      clearTimeout(item)
    })
  }
  jpPage.find('.page-next').removeClass('scale-up')
  jpPage.find('.title').removeClass('slide-in-down')
  jpPage.find('.qrcode').removeClass('slide-in-up')

}


$(function () {
  $('.page-next').on('click', function () {
    $.fn.fullpage.moveSectionDown()
  })
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'left',
    showActiveTooltip: true,
    sectionSelector: '.page',
    afterLoad: function (anchor, index) {
      activePage(index)
    },
    onLeave: function (index, nextIndex, direction) {
      resetPage(index)
    }
  })
})
