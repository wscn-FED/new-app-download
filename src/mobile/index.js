import $ from 'jquery'
import 'fullpage.js'
import '../css/mobile.css'

const timers = []

const activePage = (page) => {
  const jpPage = $('.page-'+ page)
  if (page === 2) {
    const timer0 = setTimeout(function() {
      jpPage.find('.page-right-zero').addClass('fade-in-right')
    }, 200)
    timers.push(timer0)
  }
  const timer1 = setTimeout(function() {
    jpPage.find('.page-right-one').addClass('fade-in-right')
  }, 500)
  timers.push(timer1)
  const timer2 = setTimeout(function() {
    jpPage.find('.page-right-two').addClass('fade-in-right')
  }, 650)
  timers.push(timer2)
  const timer3 = setTimeout(function() {
    jpPage.find('.page-right-three').addClass('fade-in-left')
  }, 900)
  timers.push(timer3)
  const timer4 = setTimeout(function() {
    jpPage.find('.mobile-download-trigger').addClass('show')
  }, 1200)
  timers.push(timer4)
  const timer5 = setTimeout(function() {
    jpPage.find('.page-next').addClass('scale-up')
  }, 1500)
  timers.push(timer5)
  jpPage.addClass('active')
  jpPage.find('.page-left img').addClass('slide-in-up')
}

const resetPage = (page) => {
  const jpPage = $('.page-'+ page)
  jpPage.removeClass('active')
  if (timers && timers.length > 0) {
    timers.forEach(item => {
      clearTimeout(item)
    })
  }
  jpPage.find('.page-next').removeClass('scale-up')
  jpPage.find('.mobile-download-trigger').removeClass('show')
  jpPage.find('.page-left img').removeClass('slide-in-up')
  jpPage.find('.page-right-zero').removeClass('fade-in-right')
  jpPage.find('.page-right-one').removeClass('fade-in-right')
  jpPage.find('.page-right-two').removeClass('fade-in-right')
  jpPage.find('.page-right-three').removeClass('fade-in-left')
}
const getDownloadUrl = () => {
  const ua = navigator.userAgent.toLowerCase()
  let dUrl = 'https://itunes.apple.com/cn/app/id738227477?mt=8'
  if (/micromessenger/.test(ua)) {
    dUrl = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wallstreetcn.news'
  } else if (/iphone|ipad|ipod/.test(ua)) {
    dUrl = 'https://itunes.apple.com/cn/app/id738227477?mt=8'
  } else {
    dUrl = 'http://dl.wallstreetcn.com/wallstreetcn_wscn.apk'
  }
  return dUrl
}
const setDownloadUrl = () => {
  const dUrl = getDownloadUrl()
  $('.app-links a').attr('href', dUrl)
}

const isMobile = () => {
  const ua = navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod|android|windows phone/i.test(ua)
}

const isTouchSupported = () => {
  return "ontouchstart" in document.documentElement
}

const handleDownload = (ngsem) => {
  const ua = navigator.userAgent.toLowerCase()
  if ([71, 75].indexOf(ngsem) === -1) {
    $('body').removeClass('hide')
  }

  const yybArr = {
    "71": "CK1350996263860",
    "72": "CK1350996703279",
    "73": "CK1350996703281",
    "74": "CK1350996703282",
    "75": "CK1350996703283",
    "76": "CK1350996703284",
    "77": "CK1350996703285",
    "78": "CK1350996703286",
    "79": "CK1350996703287",
    "80": "CK1350996703288",
    "81": "CK1362684241709",
    "82": "CK1362684168228",
    "83": "CK1362683639646",
    "84": "CK1362683628963",
    "85": "CK1362683660433",
    "86": "CK1362683619910",
    "87": "CK1362683619909",
    "88": "CK1362683471651",
    "89": "CK1362683273339",
    "90": "CK1362683081096"
  }

  const umengArr = {
    "31": "zuyy4r?cid=5484&keywordid={keywordid}&creative={creative}",
    "32": "5PPbGf?cid=5484&keywordid={keywordid}&creative={creative}",
    "33": "0Hj0XD?cid=5484&keywordid={keywordid}&creative={creative}",
    "34": "jOvqqe?cid=5484&keywordid={keywordid}&creative={creative}",
    "35": "WnimKr?cid=5484&keywordid={keywordid}&creative={creative}",
    "36": "yOHzqq?cid=472",
    "37": "yKHDWD?cid=472",
    "38": "9TbyqC",
    "39": "895nui",
    "40": "bqSfui",
    "41": "Tjm0ni",
    "42": "XDe8bu",
    "43": "rmGPvm",
    "44": "L9z45z",
    "45": "GjeyKb",
    "46": "jiu8Lz",
    "47": "5DOXfi",
    "48": "4LDuqy",
    "49": "niOfeq",
    "50": "SDiyay",
    "51": "5DmKry?cid=5",
    "52": "maKfOr?cid=5",
    "53": "CS9naq?cid=5",
    "54": "nOfiGb?cid=5",
    "55": "bSra4D?cid=5",
    "71": "uSLHTv",
    "72": "Pza8rq",
    "73": "SPfmOf",
    "74": "8v4z0b",
    "75": "DKH51b",
    "76": "LnqK5z",
    "77": "TvaGHD",
    "78": "ymOH5b",
    "79": "iWfGju",
    "80": "ryqGLv",
    "81": "XPDiiC",
    "82": "WPr09f",
    "83": "0Lrqia",
    "84": "CiWTvq",
    "85": "Obqmiq",
    "86": "n41Hvm",
    "87": "H55LvC",
    "88": "imyiWv",
    "89": "n85nua",
    "90": "SfCaOj"
  }

  //不自动弹包
  const noAutoArr = [48, 49, 78, 77]
  let url = 'https://itunes.apple.com/app/apple-store/id738227477?pt=10694800&ct=tuiguang10&mt=8'
  if (31 <= ngsem && ngsem <= 90) {
    if (71 <= ngsem && ngsem <= 90 || [46, 50].indexOf(ngsem) !== -1) {

      if (ua.indexOf('micromessenger') != -1) {
        if (/iphone|ipad|ipod/.test(ua)) {
          url = "https://itunes.apple.com/app/apple-store/id738227477?pt=10694800&ct=tuiguang10&mt=8"
        } else {
          var ckey = yybArr[ngsem]
          url = "http://a.app.qq.com/o/simple.jsp?pkgname=com.wallstreetcn.news&ckey=" + ckey
        }
      } else if (/iphone|ipad|ipod/.test(ua)) {
        url = "https://at.umeng.com/" + umengArr[ngsem]
      } else {
        url = "http://dl.wallstreetcn.com/wallstreetcn_" + ngsem + ".apk"
      }

      if ([75, 71].indexOf(ngsem) !== -1) {
        window.location.href = url
      }
      $('.app-download-link').attr('href', url)

    } else {

      if (/iphone|ipad|ipod/.test(ua)) {
        if (ngsem === 47 && ua.indexOf('micromessenger') < 0) {
          url = 'https://itunes.apple.com/app/apple-store/id738227477?pt=10694800&ct=tuiguang1&mt=8'
        } else {
          url = "https://at.umeng.com/" + umengArr[ngsem]
        }
      } else {
        url = "http://dl.wallstreetcn.com/wallstreetcn_" + ngsem + ".apk"
      }

      $('.app-download-link').attr('href', url)

      if (noAutoArr.indexOf(ngsem) === -1) {
        setTimeout(function () {
          window.location.href = url
        }, 1000)
      }
    }
  } else {

    if (/iphone|ipad|ipod/.test(ua)) {
      url = 'https://itunes.apple.com/cn/app/hua-er-jie-jian-wen/id738227477?mt=8'
    } else {
      url = 'http://wscn-download.qiniudn.com/wallstreetcn_wscn.apk'
    }

    $('.app-download-link').attr('href', url)

    if (noAutoArr.indexOf(ngsem) === -1) {
      setTimeout(function () {
        window.location.href = url
      }, 1000)
    }
  }
}

$(function() {
  const params = {}
  const search = window.location.search.slice(1)
  const hash = search.split('&')
  for (let i = 0; i < hash.length; i++) {
    const h = hash[i].split("=")
    params[h[0]] = h[1]
  }
  if (params['ngsem']) {
    const ngsem = parseInt(params['ngsem'])
    handleDownload(ngsem)
  } else {
    $('body').removeClass('hide')
    const dUrl = getDownloadUrl()
    setDownloadUrl()
    noneActionTimer = setTimeout(() => {
      location.href = dUrl
    }, 7000)
    if (isTouchSupported()) {
      document.addEventListener('touchstart', function() {
        if (noneActionTimer) {
          clearTimeout(noneActionTimer)
        }
      })
    }
  }
  let noneActionTimer = null
  $('.page-next').on('click', function() {
    $.fn.fullpage.moveSectionDown()
  })

  $('.mobile-download-trigger').on('click', function() {
    const parent = $(this).data('parent')
    const jpParent = $('.' + parent)
    jpParent.find('.mobile-modal').addClass('show')
    $(this).removeClass('show')
  })

  $('.modal-close').on('click', function() {
    const jpSelf = $(this)
    jpSelf.parent().removeClass('show')
    setTimeout(function(){
      jpSelf.parents('.page').find('.mobile-download-trigger').addClass('show')
    }, 800)
  })
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'left',
    showActiveTooltip: true,
    sectionSelector: '.page',
    afterLoad: function(anchor, index) {
      activePage(index)
    },
    onLeave: function(index, nextIndex, direction){
      if (noneActionTimer) {
        clearTimeout(noneActionTimer)
      }
      resetPage(index)
    }
  })
})
