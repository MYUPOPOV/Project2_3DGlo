(()=>{"use strict";var __webpack_modules__={333:()=>{eval("\n;// CONCATENATED MODULE: ./modules/timer.js\nconst timer = (deadline) => {\r\n\tconst timerHours = document.getElementById('timer-hours');\r\n\tconst timerMinutes = document.getElementById('timer-minutes');\r\n\tconst timerSeconds = document.getElementById('timer-seconds');\r\n\tconst timerAction = document.querySelector('.timer-action');\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadline).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet days = Math.floor(timeRemaining / 3600 / 24);\r\n\t\tlet hours = Math.floor((timeRemaining / 3600) % 24);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\treturn { timeRemaining, days, hours, minutes, seconds };\r\n\t};\r\n\r\n\tconst checkTimeFormat = (item) => {\r\n\t\tif (item.toString().length < 2) {\r\n\t\t\titem = '0' + item;\r\n\t\t}\r\n\t\treturn item;\r\n\t};\r\n\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaining();\r\n\t\ttimerAction.textContent = `До конца акции осталось ${getTime.days} дн.`;\r\n\r\n\t\ttimerHours.textContent = checkTimeFormat(getTime.hours);\r\n\t\ttimerMinutes.textContent = checkTimeFormat(getTime.minutes);\r\n\t\ttimerSeconds.textContent = checkTimeFormat(getTime.seconds);\r\n\r\n\t\tif (getTime.timeRemaining > 0) {\r\n\t\t\tsetTimeout(updateClock, 1000);\r\n\t\t} else {\r\n\t\t\ttimerAction.textContent = `До конца акции осталось 0 дн.`;\r\n\t\t\ttimerHours.textContent = '00';\r\n\t\t\ttimerMinutes.textContent = '00';\r\n\t\t\ttimerSeconds.textContent = '00';\r\n\t\t}\r\n\t};\r\n\r\n\tupdateClock();\r\n};\r\n\r\n/* harmony default export */ const modules_timer = (timer);\r\n\n;// CONCATENATED MODULE: ./modules/menu.js\nconst menu = () => {\r\n\tconst menu = document.querySelector('menu');\r\n\tlet positionX = -100;\r\n\tlet idAnimation;\r\n\r\n\tconst handleMenu = () => {\r\n\t\tif (window.screen.width >= 768) {\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t\tif (!menu.style.transform) {\r\n\t\t\t\tmenuAnimationOn();\r\n\t\t\t} else {\r\n\t\t\t\tmenuAnimationOff();\r\n\t\t\t}\r\n\t\t} else if (window.screen.width < 768) {\r\n\t\t\tif (!menu.style.transform) {\r\n\t\t\t\tmenu.style.transform = 'translateX(100%)';\r\n\t\t\t} else {\r\n\t\t\t\tmenu.style.transform = '';\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\r\n\tconst menuAnimationOn = () => {\r\n\t\tidAnimation = requestAnimationFrame(menuAnimationOn);\r\n\t\tif (positionX < 100) {\r\n\t\t\tpositionX += 10;\r\n\t\t\tmenu.style.transform = `translateX(${positionX}%)`;\r\n\t\t}\r\n\t};\r\n\tconst menuAnimationOff = () => {\r\n\t\tpositionX = -100;\r\n\t\tmenu.style.transform = '';\r\n\t};\r\n\r\n\tdocument.addEventListener('click', (e) => {\r\n\t\tif (e.target.closest('.close-btn') || e.target.closest('.menu') || e.target.matches('li>a') || (positionX > 0 && !e.target.matches('menu'))) {\r\n\t\t\te.preventDefault();\r\n\t\t\thandleMenu();\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const modules_menu = (menu);\r\n\n;// CONCATENATED MODULE: ./modules/modal.js\nconst modal = () => {\r\n\tconst popupBtns = document.querySelectorAll('.popup-btn');\r\n\tconst modal = document.querySelector('.popup');\r\n\tlet positionX = -100;\r\n\tlet idAnimation;\r\n\tmodal.style.display = 'block';\r\n\tmodal.style.transform = `translateX(-100%)`;\r\n\r\n\tconst menuAnimationOn = () => {\r\n\t\tidAnimation = requestAnimationFrame(menuAnimationOn);\r\n\t\tif (positionX < 0) {\r\n\t\t\tpositionX += 10;\r\n\t\t\tmodal.style.transform = `translateX(${positionX}%)`;\r\n\t\t}\r\n\t};\r\n\r\n\tpopupBtns.forEach((item) => {\r\n\t\titem.addEventListener('click', menuAnimationOn);\r\n\t});\r\n\r\n\tmodal.addEventListener('click', (e) => {\r\n\t\tif (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t\tmodal.style.transform = `translateX(-100%)`;\r\n\t\t\tpositionX = -200;\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const modules_modal = (modal);\r\n\n;// CONCATENATED MODULE: ./modules/smoothScroll.js\nconst smoothScroll = () => {\r\n\tconst scrollBtn = document.querySelector('[href = \"#service-block\"]');\r\n\tconst serviceBlock = document.getElementById('service-block');\r\n\tconst menuItems = document.querySelectorAll('menu>ul>li>a');\r\n\r\n\tconst scrollUp = function (object) {\r\n\t\tobject.scrollIntoView({ block: 'start', behavior: 'smooth' });\r\n\t};\r\n\r\n\tscrollBtn.addEventListener('click', (event) => {\r\n\t\tevent.preventDefault();\r\n\t\tscrollUp.bind(serviceBlock)(serviceBlock);\r\n\t});\r\n\r\n\tmenuItems.forEach((item) => {\r\n\t\tconst itemLink = document.getElementById(`${item.getAttribute('href').substring(1)}`);\r\n\t\titem.addEventListener('click', (event) => {\r\n\t\t\tevent.preventDefault();\r\n\t\t\tscrollUp.bind(itemLink)(itemLink);\r\n\t\t});\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const modules_smoothScroll = (smoothScroll);\r\n\n;// CONCATENATED MODULE: ./modules/calculator.js\nconst calculator = () => {\r\n\tconst calcSquare = document.querySelector('.calc-square');\r\n\tconst calcCount = document.querySelector('.calc-count');\r\n\tconst calcDay = document.querySelector('.calc-day');\r\n\r\n\t[(calcSquare, calcCount, calcDay)].forEach((item) => {\r\n\t\titem.addEventListener('input', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/\\D+/, '');\r\n\t\t});\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const modules_calculator = (calculator);\r\n\n;// CONCATENATED MODULE: ./modules/textValidation.js\nconst textValidation = () => {\r\n\t/* Главная страница */\r\n\tconst form1Name = document.getElementById('form1-name');\r\n\tconst form1Email = document.getElementById('form1-email');\r\n\tconst form1Phone = document.getElementById('form1-phone');\r\n\r\n\t/* Модальное окно */\r\n\tconst form3Name = document.getElementById('form3-name');\r\n\tconst form3Phone = document.getElementById('form3-phone');\r\n\tconst form3Email = document.getElementById('form3-email');\r\n\r\n\t/* Остались вопросы? */\r\n\tconst form2Name = document.getElementById('form2-name');\r\n\tconst form2Email = document.getElementById('form2-email');\r\n\tconst form2Phone = document.getElementById('form2-phone');\r\n\tconst form2Message = document.getElementById('form2-message');\r\n\r\n\t/* Функция форматирования Полей ввода type=text и placeholder=\"Ваше сообщение\"  */\r\n\tconst textFormFormat = function () {\r\n\t\tthis.addEventListener('input', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^а-яА-Я- ]/, '');\r\n\t\t});\r\n\t\tthis.addEventListener('blur', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^а-яА-Я- ]+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/\\s+/, ' ');\r\n\t\t\te.target.value = e.target.value.replace(/^[-\\s]+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/[-\\s]+$/, '');\r\n\t\t\te.target.value = e.target.value[0].toUpperCase() + e.target.value.substr(1).toLowerCase();\r\n\t\t});\r\n\t};\r\n\t/* Функция форматирования Полей ввода type=email  */\r\n\tconst emailFormFormat = function () {\r\n\t\tthis.addEventListener('input', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^a-zA-Z0-9@\\-_.!~\\*']/, '');\r\n\t\t});\r\n\t\tthis.addEventListener('blur', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^a-zA-Z0-9@\\-_.!~\\*']+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/\\s+/, ' ');\r\n\t\t\te.target.value = e.target.value.replace(/^[-\\s]+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/[-\\s]+$/, '');\r\n\t\t});\r\n\t};\r\n\t/* Функция форматирования Полей ввода type=tel  */\r\n\tconst telFormFormat = function () {\r\n\t\tthis.addEventListener('input', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^0-9()-]/, '');\r\n\t\t});\r\n\t\tthis.addEventListener('blur', (e) => {\r\n\t\t\te.target.value = e.target.value.replace(/[^0-9()-]+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/\\s+/, ' ');\r\n\t\t\te.target.value = e.target.value.replace(/^[-\\s]+/, '');\r\n\t\t\te.target.value = e.target.value.replace(/[-\\s]+$/, '');\r\n\t\t});\r\n\t};\r\n\r\n\t[form1Name, form2Name, form3Name, form2Message].forEach((item) => textFormFormat.bind(item)());\r\n\t[form1Email, form2Email, form3Email].forEach((item) => emailFormFormat.bind(item)());\r\n\t[form1Phone, form2Phone, form3Phone].forEach((item) => telFormFormat.bind(item)());\r\n};\r\n\r\n/* harmony default export */ const modules_textValidation = (textValidation);\r\n\n;// CONCATENATED MODULE: ./modules/tabs.js\nconst tabs = () => {\r\n\tconst tabContent = document.querySelectorAll('.service-tab');\r\n\tconst tabPanel = document.querySelector('.service-header');\r\n\tconst tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n\ttabPanel.addEventListener('click', (e) => {\r\n\t\tif (e.target.closest('.service-header-tab')) {\r\n\t\t\tconst tabBtn = e.target.closest('.service-header-tab');\r\n\t\t\ttabs.forEach((tab, index) => {\r\n\t\t\t\tif (tab === tabBtn) {\r\n\t\t\t\t\ttab.classList.add('active');\r\n\t\t\t\t\ttabContent[index].classList.remove('d-none');\r\n\t\t\t\t} else {\r\n\t\t\t\t\ttab.classList.remove('active');\r\n\t\t\t\t\ttabContent[index].classList.add('d-none');\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const modules_tabs = (tabs);\r\n\n;// CONCATENATED MODULE: ./modules/slider.js\nconst slider = () => {\r\n\tconst sliderBlock = document.querySelector('.portfolio-content');\r\n\tconst slides = document.querySelectorAll('.portfolio-item');\r\n\tlet dots = document.querySelectorAll('.dot');\r\n\tlet currentSlide = 0;\r\n\tlet sliderTimeInterval = 2000;\r\n\tlet intervalId;\r\n\r\n\tconst renderDots = () => {\r\n\t\tslides.forEach((item, index) => {\r\n\t\t\tconst allDots = document.querySelector('.portfolio-dots');\r\n\t\t\tconst newLi = document.createElement('li');\r\n\t\t\tnewLi.classList.add('dot');\r\n\t\t\tif (index === 0) {\r\n\t\t\t\tnewLi.classList.add('dot-active');\r\n\t\t\t}\r\n\t\t\tallDots.append(newLi);\r\n\t\t});\r\n\t\tdots = document.querySelectorAll('.dot');\r\n\t};\r\n\r\n\tconst prevSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.remove(strClass);\r\n\t};\r\n\r\n\tconst nextSlide = (elems, index, strClass) => {\r\n\t\telems[index].classList.add(strClass);\r\n\t};\r\n\r\n\tconst autoSlide = () => {\r\n\t\tprevSlide(slides, currentSlide, 'portfolio-item-active');\r\n\t\tprevSlide(dots, currentSlide, 'dot-active');\r\n\t\tcurrentSlide++;\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tnextSlide(slides, currentSlide, 'portfolio-item-active');\r\n\t\tnextSlide(dots, currentSlide, 'dot-active');\r\n\t};\r\n\r\n\tconst startSlide = (timer = 1000) => {\r\n\t\tintervalId = setInterval(autoSlide, timer);\r\n\t};\r\n\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(intervalId);\r\n\t};\r\n\r\n\tsliderBlock.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\r\n\t\tif (!e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tprevSlide(slides, currentSlide, 'portfolio-item-active');\r\n\t\tprevSlide(dots, currentSlide, 'dot-active');\r\n\r\n\t\tif (e.target.matches('#arrow-right')) {\r\n\t\t\tcurrentSlide++;\r\n\t\t} else if (e.target.matches('#arrow-left')) {\r\n\t\t\tcurrentSlide--;\r\n\t\t} else if (e.target.classList.contains('dot')) {\r\n\t\t\tdots.forEach((dot, index) => {\r\n\t\t\t\tif (e.target === dot) {\r\n\t\t\t\t\tcurrentSlide = index;\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif (currentSlide >= slides.length) {\r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tif (currentSlide < 0) {\r\n\t\t\tcurrentSlide = slides.length - 1;\r\n\t\t}\r\n\r\n\t\tnextSlide(slides, currentSlide, 'portfolio-item-active');\r\n\t\tnextSlide(dots, currentSlide, 'dot-active');\r\n\t});\r\n\r\n\tsliderBlock.addEventListener(\r\n\t\t'mouseenter',\r\n\t\t(e) => {\r\n\t\t\tif (e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\t\tstopSlide();\r\n\t\t\t}\r\n\t\t},\r\n\t\ttrue\r\n\t);\r\n\r\n\tsliderBlock.addEventListener(\r\n\t\t'mouseleave',\r\n\t\t(e) => {\r\n\t\t\tif (e.target.matches('.dot, .portfolio-btn')) {\r\n\t\t\t\tstartSlide(sliderTimeInterval);\r\n\t\t\t}\r\n\t\t},\r\n\t\ttrue\r\n\t);\r\n\r\n\trenderDots();\r\n\tstartSlide(sliderTimeInterval);\r\n};\r\n\r\n/* harmony default export */ const modules_slider = (slider);\r\n\n;// CONCATENATED MODULE: ./index.js\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nmodules_timer('1 january 2022 00:00');\r\nmodules_menu();\r\nmodules_modal();\r\nmodules_smoothScroll();\r\nmodules_calculator();\r\nmodules_textValidation();\r\nmodules_tabs();\r\nmodules_slider();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQWUsTUFBTSxFQUFDOzs7QUN6R1Q7QUFDdUI7QUFDRjtBQUNFO0FBQ2M7QUFDSjtBQUNRO0FBQ3BCO0FBQ0k7QUFDdEM7QUFDQSxhQUFLO0FBQ0wsWUFBSTtBQUNKLGFBQUs7QUFDTCxvQkFBWTtBQUNaLGtCQUFVO0FBQ1Ysc0JBQWM7QUFDZCxZQUFJO0FBQ0osY0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvdGltZXIuanM/ZDE2ZSIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21lbnUuanM/NTI0YiIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL21vZGFsLmpzPzY2ZjMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zbW9vdGhTY3JvbGwuanM/ZjQ5NiIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2NhbGN1bGF0b3IuanM/ODI1MCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RleHRWYWxpZGF0aW9uLmpzPzk0YTMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy90YWJzLmpzPzg4MjQiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9zbGlkZXIuanM/Y2U0YiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWVyID0gKGRlYWRsaW5lKSA9PiB7XHJcblx0Y29uc3QgdGltZXJIb3VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lci1ob3VycycpO1xyXG5cdGNvbnN0IHRpbWVyTWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lci1taW51dGVzJyk7XHJcblx0Y29uc3QgdGltZXJTZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVyLXNlY29uZHMnKTtcclxuXHRjb25zdCB0aW1lckFjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lci1hY3Rpb24nKTtcclxuXHJcblx0Y29uc3QgZ2V0VGltZVJlbWFpbmluZyA9ICgpID0+IHtcclxuXHRcdGxldCBkYXRlU3RvcCA9IG5ldyBEYXRlKGRlYWRsaW5lKS5nZXRUaW1lKCk7XHJcblx0XHRsZXQgZGF0ZU5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0bGV0IHRpbWVSZW1haW5pbmcgPSAoZGF0ZVN0b3AgLSBkYXRlTm93KSAvIDEwMDA7XHJcblx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAvIDM2MDAgLyAyNCk7XHJcblx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nIC8gMzYwMCkgJSAyNCk7XHJcblx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVSZW1haW5pbmcgLyA2MCkgJSA2MCk7XHJcblx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAlIDYwKTtcclxuXHRcdHJldHVybiB7IHRpbWVSZW1haW5pbmcsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2hlY2tUaW1lRm9ybWF0ID0gKGl0ZW0pID0+IHtcclxuXHRcdGlmIChpdGVtLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xyXG5cdFx0XHRpdGVtID0gJzAnICsgaXRlbTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpdGVtO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xyXG5cdFx0bGV0IGdldFRpbWUgPSBnZXRUaW1lUmVtYWluaW5nKCk7XHJcblx0XHR0aW1lckFjdGlvbi50ZXh0Q29udGVudCA9IGDQlNC+INC60L7QvdGG0LAg0LDQutGG0LjQuCDQvtGB0YLQsNC70L7RgdGMICR7Z2V0VGltZS5kYXlzfSDQtNC9LmA7XHJcblxyXG5cdFx0dGltZXJIb3Vycy50ZXh0Q29udGVudCA9IGNoZWNrVGltZUZvcm1hdChnZXRUaW1lLmhvdXJzKTtcclxuXHRcdHRpbWVyTWludXRlcy50ZXh0Q29udGVudCA9IGNoZWNrVGltZUZvcm1hdChnZXRUaW1lLm1pbnV0ZXMpO1xyXG5cdFx0dGltZXJTZWNvbmRzLnRleHRDb250ZW50ID0gY2hlY2tUaW1lRm9ybWF0KGdldFRpbWUuc2Vjb25kcyk7XHJcblxyXG5cdFx0aWYgKGdldFRpbWUudGltZVJlbWFpbmluZyA+IDApIHtcclxuXHRcdFx0c2V0VGltZW91dCh1cGRhdGVDbG9jaywgMTAwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lckFjdGlvbi50ZXh0Q29udGVudCA9IGDQlNC+INC60L7QvdGG0LAg0LDQutGG0LjQuCDQvtGB0YLQsNC70L7RgdGMIDAg0LTQvS5gO1xyXG5cdFx0XHR0aW1lckhvdXJzLnRleHRDb250ZW50ID0gJzAwJztcclxuXHRcdFx0dGltZXJNaW51dGVzLnRleHRDb250ZW50ID0gJzAwJztcclxuXHRcdFx0dGltZXJTZWNvbmRzLnRleHRDb250ZW50ID0gJzAwJztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR1cGRhdGVDbG9jaygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGltZXI7XHJcbiIsImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21lbnUnKTtcclxuXHRsZXQgcG9zaXRpb25YID0gLTEwMDtcclxuXHRsZXQgaWRBbmltYXRpb247XHJcblxyXG5cdGNvbnN0IGhhbmRsZU1lbnUgPSAoKSA9PiB7XHJcblx0XHRpZiAod2luZG93LnNjcmVlbi53aWR0aCA+PSA3NjgpIHtcclxuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoaWRBbmltYXRpb24pO1xyXG5cdFx0XHRpZiAoIW1lbnUuc3R5bGUudHJhbnNmb3JtKSB7XHJcblx0XHRcdFx0bWVudUFuaW1hdGlvbk9uKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bWVudUFuaW1hdGlvbk9mZigpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPCA3NjgpIHtcclxuXHRcdFx0aWYgKCFtZW51LnN0eWxlLnRyYW5zZm9ybSkge1xyXG5cdFx0XHRcdG1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG1lbnUuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBtZW51QW5pbWF0aW9uT24gPSAoKSA9PiB7XHJcblx0XHRpZEFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtZW51QW5pbWF0aW9uT24pO1xyXG5cdFx0aWYgKHBvc2l0aW9uWCA8IDEwMCkge1xyXG5cdFx0XHRwb3NpdGlvblggKz0gMTA7XHJcblx0XHRcdG1lbnUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvblh9JSlgO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Y29uc3QgbWVudUFuaW1hdGlvbk9mZiA9ICgpID0+IHtcclxuXHRcdHBvc2l0aW9uWCA9IC0xMDA7XHJcblx0XHRtZW51LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG5cdH07XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtYnRuJykgfHwgZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUnKSB8fCBlLnRhcmdldC5tYXRjaGVzKCdsaT5hJykgfHwgKHBvc2l0aW9uWCA+IDAgJiYgIWUudGFyZ2V0Lm1hdGNoZXMoJ21lbnUnKSkpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRoYW5kbGVNZW51KCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCJjb25zdCBtb2RhbCA9ICgpID0+IHtcclxuXHRjb25zdCBwb3B1cEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtYnRuJyk7XHJcblx0Y29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcclxuXHRsZXQgcG9zaXRpb25YID0gLTEwMDtcclxuXHRsZXQgaWRBbmltYXRpb247XHJcblx0bW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0bW9kYWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLTEwMCUpYDtcclxuXHJcblx0Y29uc3QgbWVudUFuaW1hdGlvbk9uID0gKCkgPT4ge1xyXG5cdFx0aWRBbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWVudUFuaW1hdGlvbk9uKTtcclxuXHRcdGlmIChwb3NpdGlvblggPCAwKSB7XHJcblx0XHRcdHBvc2l0aW9uWCArPSAxMDtcclxuXHRcdFx0bW9kYWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvblh9JSlgO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHBvcHVwQnRucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUFuaW1hdGlvbk9uKTtcclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0aWYgKCFlLnRhcmdldC5jbG9zZXN0KCcucG9wdXAtY29udGVudCcpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXAtY2xvc2UnKSkge1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShpZEFuaW1hdGlvbik7XHJcblx0XHRcdG1vZGFsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0xMDAlKWA7XHJcblx0XHRcdHBvc2l0aW9uWCA9IC0yMDA7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuIiwiY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNjcm9sbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tocmVmID0gXCIjc2VydmljZS1ibG9ja1wiXScpO1xyXG5cdGNvbnN0IHNlcnZpY2VCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJ2aWNlLWJsb2NrJyk7XHJcblx0Y29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWVudT51bD5saT5hJyk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbFVwID0gZnVuY3Rpb24gKG9iamVjdCkge1xyXG5cdFx0b2JqZWN0LnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHR9O1xyXG5cclxuXHRzY3JvbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRzY3JvbGxVcC5iaW5kKHNlcnZpY2VCbG9jaykoc2VydmljZUJsb2NrKTtcclxuXHR9KTtcclxuXHJcblx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdGNvbnN0IGl0ZW1MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSl9YCk7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHNjcm9sbFVwLmJpbmQoaXRlbUxpbmspKGl0ZW1MaW5rKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc21vb3RoU2Nyb2xsO1xyXG4iLCJjb25zdCBjYWxjdWxhdG9yID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNhbGNTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsYy1zcXVhcmUnKTtcclxuXHRjb25zdCBjYWxjQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsYy1jb3VudCcpO1xyXG5cdGNvbnN0IGNhbGNEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsYy1kYXknKTtcclxuXHJcblx0WyhjYWxjU3F1YXJlLCBjYWxjQ291bnQsIGNhbGNEYXkpXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHRcdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQrLywgJycpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdG9yO1xyXG4iLCJjb25zdCB0ZXh0VmFsaWRhdGlvbiA9ICgpID0+IHtcclxuXHQvKiDQk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwICovXHJcblx0Y29uc3QgZm9ybTFOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xLW5hbWUnKTtcclxuXHRjb25zdCBmb3JtMUVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0xLWVtYWlsJyk7XHJcblx0Y29uc3QgZm9ybTFQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMS1waG9uZScpO1xyXG5cclxuXHQvKiDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4gKi9cclxuXHRjb25zdCBmb3JtM05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTMtbmFtZScpO1xyXG5cdGNvbnN0IGZvcm0zUGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTMtcGhvbmUnKTtcclxuXHRjb25zdCBmb3JtM0VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0zLWVtYWlsJyk7XHJcblxyXG5cdC8qINCe0YHRgtCw0LvQuNGB0Ywg0LLQvtC/0YDQvtGB0Ys/ICovXHJcblx0Y29uc3QgZm9ybTJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0yLW5hbWUnKTtcclxuXHRjb25zdCBmb3JtMkVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0yLWVtYWlsJyk7XHJcblx0Y29uc3QgZm9ybTJQaG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMi1waG9uZScpO1xyXG5cdGNvbnN0IGZvcm0yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMi1tZXNzYWdlJyk7XHJcblxyXG5cdC8qINCk0YPQvdC60YbQuNGPINGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40Y8g0J/QvtC70LXQuSDQstCy0L7QtNCwIHR5cGU9dGV4dCDQuCBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVwiICAqL1xyXG5cdGNvbnN0IHRleHRGb3JtRm9ybWF0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW17QsC3Rj9CQLdCvLSBdLywgJycpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1te0LAt0Y/QkC3Qry0gXSsvLCAnJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy8sICcgJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXlstXFxzXSsvLCAnJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvWy1cXHNdKyQvLCAnJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWVbMF0udG9VcHBlckNhc2UoKSArIGUudGFyZ2V0LnZhbHVlLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHQvKiDQpNGD0L3QutGG0LjRjyDRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNGPINCf0L7Qu9C10Lkg0LLQstC+0LTQsCB0eXBlPWVtYWlsICAqL1xyXG5cdGNvbnN0IGVtYWlsRm9ybUZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teYS16QS1aMC05QFxcLV8uIX5cXConXS8sICcnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcclxuXHRcdFx0ZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXmEtekEtWjAtOUBcXC1fLiF+XFwqJ10rLywgJycpO1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xccysvLCAnICcpO1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL15bLVxcc10rLywgJycpO1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1stXFxzXSskLywgJycpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHQvKiDQpNGD0L3QutGG0LjRjyDRhNC+0YDQvNCw0YLQuNGA0L7QstCw0L3QuNGPINCf0L7Qu9C10Lkg0LLQstC+0LTQsCB0eXBlPXRlbCAgKi9cclxuXHRjb25zdCB0ZWxGb3JtRm9ybWF0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvW14wLTkoKS1dLywgJycpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1teMC05KCktXSsvLCAnJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxzKy8sICcgJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXlstXFxzXSsvLCAnJyk7XHJcblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvWy1cXHNdKyQvLCAnJyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRbZm9ybTFOYW1lLCBmb3JtMk5hbWUsIGZvcm0zTmFtZSwgZm9ybTJNZXNzYWdlXS5mb3JFYWNoKChpdGVtKSA9PiB0ZXh0Rm9ybUZvcm1hdC5iaW5kKGl0ZW0pKCkpO1xyXG5cdFtmb3JtMUVtYWlsLCBmb3JtMkVtYWlsLCBmb3JtM0VtYWlsXS5mb3JFYWNoKChpdGVtKSA9PiBlbWFpbEZvcm1Gb3JtYXQuYmluZChpdGVtKSgpKTtcclxuXHRbZm9ybTFQaG9uZSwgZm9ybTJQaG9uZSwgZm9ybTNQaG9uZV0uZm9yRWFjaCgoaXRlbSkgPT4gdGVsRm9ybUZvcm1hdC5iaW5kKGl0ZW0pKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGV4dFZhbGlkYXRpb247XHJcbiIsImNvbnN0IHRhYnMgPSAoKSA9PiB7XHJcblx0Y29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLXRhYicpO1xyXG5cdGNvbnN0IHRhYlBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtaGVhZGVyJyk7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlLWhlYWRlci10YWInKTtcclxuXHJcblx0dGFiUGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zZXJ2aWNlLWhlYWRlci10YWInKSkge1xyXG5cdFx0XHRjb25zdCB0YWJCdG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuc2VydmljZS1oZWFkZXItdGFiJyk7XHJcblx0XHRcdHRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdGlmICh0YWIgPT09IHRhYkJ0bikge1xyXG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0dGFiQ29udGVudFtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdHRhYkNvbnRlbnRbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xyXG4iLCJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgc2xpZGVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLWNvbnRlbnQnKTtcclxuXHRjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9ydGZvbGlvLWl0ZW0nKTtcclxuXHRsZXQgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kb3QnKTtcclxuXHRsZXQgY3VycmVudFNsaWRlID0gMDtcclxuXHRsZXQgc2xpZGVyVGltZUludGVydmFsID0gMjAwMDtcclxuXHRsZXQgaW50ZXJ2YWxJZDtcclxuXHJcblx0Y29uc3QgcmVuZGVyRG90cyA9ICgpID0+IHtcclxuXHRcdHNsaWRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhbGxEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1kb3RzJyk7XHJcblx0XHRcdGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdFx0bmV3TGkuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XHJcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xyXG5cdFx0XHRcdG5ld0xpLmNsYXNzTGlzdC5hZGQoJ2RvdC1hY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhbGxEb3RzLmFwcGVuZChuZXdMaSk7XHJcblx0XHR9KTtcclxuXHRcdGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcHJldlNsaWRlID0gKGVsZW1zLCBpbmRleCwgc3RyQ2xhc3MpID0+IHtcclxuXHRcdGVsZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKHN0ckNsYXNzKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBuZXh0U2xpZGUgPSAoZWxlbXMsIGluZGV4LCBzdHJDbGFzcykgPT4ge1xyXG5cdFx0ZWxlbXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoc3RyQ2xhc3MpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGF1dG9TbGlkZSA9ICgpID0+IHtcclxuXHRcdHByZXZTbGlkZShzbGlkZXMsIGN1cnJlbnRTbGlkZSwgJ3BvcnRmb2xpby1pdGVtLWFjdGl2ZScpO1xyXG5cdFx0cHJldlNsaWRlKGRvdHMsIGN1cnJlbnRTbGlkZSwgJ2RvdC1hY3RpdmUnKTtcclxuXHRcdGN1cnJlbnRTbGlkZSsrO1xyXG5cdFx0aWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdGN1cnJlbnRTbGlkZSA9IDA7XHJcblx0XHR9XHJcblx0XHRuZXh0U2xpZGUoc2xpZGVzLCBjdXJyZW50U2xpZGUsICdwb3J0Zm9saW8taXRlbS1hY3RpdmUnKTtcclxuXHRcdG5leHRTbGlkZShkb3RzLCBjdXJyZW50U2xpZGUsICdkb3QtYWN0aXZlJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3RhcnRTbGlkZSA9ICh0aW1lciA9IDEwMDApID0+IHtcclxuXHRcdGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChhdXRvU2xpZGUsIHRpbWVyKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcblx0XHRjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cdH07XHJcblxyXG5cdHNsaWRlckJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5kb3QsIC5wb3J0Zm9saW8tYnRuJykpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZXZTbGlkZShzbGlkZXMsIGN1cnJlbnRTbGlkZSwgJ3BvcnRmb2xpby1pdGVtLWFjdGl2ZScpO1xyXG5cdFx0cHJldlNsaWRlKGRvdHMsIGN1cnJlbnRTbGlkZSwgJ2RvdC1hY3RpdmUnKTtcclxuXHJcblx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcygnI2Fycm93LXJpZ2h0JykpIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlKys7XHJcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJyNhcnJvdy1sZWZ0JykpIHtcclxuXHRcdFx0Y3VycmVudFNsaWRlLS07XHJcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZG90JykpIHtcclxuXHRcdFx0ZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0aWYgKGUudGFyZ2V0ID09PSBkb3QpIHtcclxuXHRcdFx0XHRcdGN1cnJlbnRTbGlkZSA9IGluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdGN1cnJlbnRTbGlkZSA9IDA7XHJcblx0XHR9XHJcblx0XHRpZiAoY3VycmVudFNsaWRlIDwgMCkge1xyXG5cdFx0XHRjdXJyZW50U2xpZGUgPSBzbGlkZXMubGVuZ3RoIC0gMTtcclxuXHRcdH1cclxuXHJcblx0XHRuZXh0U2xpZGUoc2xpZGVzLCBjdXJyZW50U2xpZGUsICdwb3J0Zm9saW8taXRlbS1hY3RpdmUnKTtcclxuXHRcdG5leHRTbGlkZShkb3RzLCBjdXJyZW50U2xpZGUsICdkb3QtYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdHNsaWRlckJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnbW91c2VlbnRlcicsXHJcblx0XHQoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRvdCwgLnBvcnRmb2xpby1idG4nKSkge1xyXG5cdFx0XHRcdHN0b3BTbGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dHJ1ZVxyXG5cdCk7XHJcblxyXG5cdHNsaWRlckJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnbW91c2VsZWF2ZScsXHJcblx0XHQoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRvdCwgLnBvcnRmb2xpby1idG4nKSkge1xyXG5cdFx0XHRcdHN0YXJ0U2xpZGUoc2xpZGVyVGltZUludGVydmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRydWVcclxuXHQpO1xyXG5cclxuXHRyZW5kZXJEb3RzKCk7XHJcblx0c3RhcnRTbGlkZShzbGlkZXJUaW1lSW50ZXJ2YWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCB0aW1lciBmcm9tICcuL21vZHVsZXMvdGltZXInO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21vZHVsZXMvbWVudSc7XHJcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xyXG5pbXBvcnQgc21vb3RoU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zbW9vdGhTY3JvbGwnO1xyXG5pbXBvcnQgY2FsY3VsYXRvciBmcm9tICcuL21vZHVsZXMvY2FsY3VsYXRvcic7XHJcbmltcG9ydCB0ZXh0VmFsaWRhdGlvbiBmcm9tICcuL21vZHVsZXMvdGV4dFZhbGlkYXRpb24nO1xyXG5pbXBvcnQgdGFicyBmcm9tICcuL21vZHVsZXMvdGFicyc7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9tb2R1bGVzL3NsaWRlcic7XHJcblxyXG50aW1lcignMSBqYW51YXJ5IDIwMjIgMDA6MDAnKTtcclxubWVudSgpO1xyXG5tb2RhbCgpO1xyXG5zbW9vdGhTY3JvbGwoKTtcclxuY2FsY3VsYXRvcigpO1xyXG50ZXh0VmFsaWRhdGlvbigpO1xyXG50YWJzKCk7XHJcbnNsaWRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///333\n")}},__webpack_exports__={};__webpack_modules__[333]()})();