/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"1 january 2022 00:00\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBb0M7QUFDRjtBQUNsQztBQUNBLDBEQUFLO0FBQ0wseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lciBmcm9tIFwiLi9tb2R1bGVzL3RpbWVyXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5cclxudGltZXIoXCIxIGphbnVhcnkgMjAyMiAwMDowMFwiKTtcclxubWVudSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst menuBtn = document.querySelector(\".menu\");\r\n\tconst menu = document.querySelector(\"menu\");\r\n\tconst closeBtn = menu.querySelector(\".close-btn\");\r\n\tconst menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\tlet positionX = -100;\r\n\tlet idAnimation;\r\n\r\n\tconsole.log(\"~ window.screen\", window.screen);\r\n\tconsole.log(\"~ window.screen.width\", window.screen.width);\r\n\r\n\tconst handleMenu = () => {\r\n\t\tif (window.screen.width >= 768) {\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t\tif (!menu.style.transform) {\r\n\t\t\t\tmenuAnimationOn();\r\n\t\t\t} else {\r\n\t\t\t\tmenuAnimationOff();\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tif (!menu.style.transform) {\r\n\t\t\t\tmenu.style.transform = `translateX(0)`;\r\n\t\t\t} else {\r\n\t\t\t\tmenu.style.transform = ``;\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\tconst menuAnimationOn = () => {\r\n\t\tidAnimation = requestAnimationFrame(menuAnimationOn);\r\n\t\tif (positionX < 100) {\r\n\t\t\tpositionX += 8;\r\n\t\t\tmenu.style.transform = `translateX(${positionX}%)`;\r\n\t\t}\r\n\t};\r\n\tconst menuAnimationOff = () => {\r\n\t\tpositionX = -100;\r\n\t\tmenu.style.transform = \"\";\r\n\t};\r\n\r\n\tmenuBtn.addEventListener(\"click\", handleMenu);\r\n\tcloseBtn.addEventListener(\"click\", handleMenu);\r\n\tmenuItems.forEach((item) => item.addEventListener(\"click\", handleMenu));\r\n\r\n\tconsole.log(\"menu.js is loaded\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL21lbnUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvbWVudS5qcz81MjRiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcblx0Y29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1lbnVcIik7XHJcblx0Y29uc3QgY2xvc2VCdG4gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5cdGNvbnN0IG1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbChcInVsPmxpPmFcIik7XHJcblx0bGV0IHBvc2l0aW9uWCA9IC0xMDA7XHJcblx0bGV0IGlkQW5pbWF0aW9uO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcIn4gd2luZG93LnNjcmVlblwiLCB3aW5kb3cuc2NyZWVuKTtcclxuXHRjb25zb2xlLmxvZyhcIn4gd2luZG93LnNjcmVlbi53aWR0aFwiLCB3aW5kb3cuc2NyZWVuLndpZHRoKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuXHRcdGlmICh3aW5kb3cuc2NyZWVuLndpZHRoID49IDc2OCkge1xyXG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShpZEFuaW1hdGlvbik7XHJcblx0XHRcdGlmICghbWVudS5zdHlsZS50cmFuc2Zvcm0pIHtcclxuXHRcdFx0XHRtZW51QW5pbWF0aW9uT24oKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZW51QW5pbWF0aW9uT2ZmKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghbWVudS5zdHlsZS50cmFuc2Zvcm0pIHtcclxuXHRcdFx0XHRtZW51LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDApYDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZW51LnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBtZW51QW5pbWF0aW9uT24gPSAoKSA9PiB7XHJcblx0XHRpZEFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShtZW51QW5pbWF0aW9uT24pO1xyXG5cdFx0aWYgKHBvc2l0aW9uWCA8IDEwMCkge1xyXG5cdFx0XHRwb3NpdGlvblggKz0gODtcclxuXHRcdFx0bWVudS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uWH0lKWA7XHJcblx0XHR9XHJcblx0fTtcclxuXHRjb25zdCBtZW51QW5pbWF0aW9uT2ZmID0gKCkgPT4ge1xyXG5cdFx0cG9zaXRpb25YID0gLTEwMDtcclxuXHRcdG1lbnUuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcclxuXHR9O1xyXG5cclxuXHRtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNZW51KTtcclxuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTWVudSk7XHJcblx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1lbnUpKTtcclxuXHJcblx0Y29uc29sZS5sb2coXCJtZW51LmpzIGlzIGxvYWRlZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/menu.js\n");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\tconst timerHours = document.getElementById(\"timer-hours\");\r\n\tconst timerMinutes = document.getElementById(\"timer-minutes\");\r\n\tconst timerSeconds = document.getElementById(\"timer-seconds\");\r\n\tconst timerAction = document.querySelector(\".timer-action\");\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadline).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet days = Math.floor(timeRemaining / 3600 / 24);\r\n\t\tlet hours = Math.floor((timeRemaining / 3600) % 24);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\treturn { timeRemaining, days, hours, minutes, seconds };\r\n\t};\r\n\r\n\tconst checkTimeFormat = (item) => {\r\n\t\tif (item.toString().length < 2) {\r\n\t\t\titem = \"0\" + item;\r\n\t\t}\r\n\t\treturn item;\r\n\t};\r\n\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaining();\r\n\t\ttimerAction.textContent = `До конца акции осталось ${getTime.days} дн.`;\r\n\r\n\t\ttimerHours.textContent = checkTimeFormat(getTime.hours);\r\n\t\ttimerMinutes.textContent = checkTimeFormat(getTime.minutes);\r\n\t\ttimerSeconds.textContent = checkTimeFormat(getTime.seconds);\r\n\r\n\t\tif (getTime.timeRemaining > 0) {\r\n\t\t\tsetTimeout(updateClock, 1000);\r\n\t\t} else {\r\n\t\t\ttimerAction.textContent = `До конца акции осталось 0 дн.`;\r\n\t\t\ttimerHours.textContent = \"00\";\r\n\t\t\ttimerMinutes.textContent = \"00\";\r\n\t\t\ttimerSeconds.textContent = \"00\";\r\n\t\t}\r\n\t};\r\n\r\n\tupdateClock();\r\n\r\n\tconsole.log(\"timer.js is loaded\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3RpbWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RpbWVyLmpzP2QxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGltZXIgPSAoZGVhZGxpbmUpID0+IHtcclxuXHRjb25zdCB0aW1lckhvdXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lci1ob3Vyc1wiKTtcclxuXHRjb25zdCB0aW1lck1pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVyLW1pbnV0ZXNcIik7XHJcblx0Y29uc3QgdGltZXJTZWNvbmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lci1zZWNvbmRzXCIpO1xyXG5cdGNvbnN0IHRpbWVyQWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lci1hY3Rpb25cIik7XHJcblxyXG5cdGNvbnN0IGdldFRpbWVSZW1haW5pbmcgPSAoKSA9PiB7XHJcblx0XHRsZXQgZGF0ZVN0b3AgPSBuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpO1xyXG5cdFx0bGV0IGRhdGVOb3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHRcdGxldCB0aW1lUmVtYWluaW5nID0gKGRhdGVTdG9wIC0gZGF0ZU5vdykgLyAxMDAwO1xyXG5cdFx0bGV0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVSZW1haW5pbmcgLyAzNjAwIC8gMjQpO1xyXG5cdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZVJlbWFpbmluZyAvIDM2MDApICUgMjQpO1xyXG5cdFx0bGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nIC8gNjApICUgNjApO1xyXG5cdFx0bGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVSZW1haW5pbmcgJSA2MCk7XHJcblx0XHRyZXR1cm4geyB0aW1lUmVtYWluaW5nLCBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoZWNrVGltZUZvcm1hdCA9IChpdGVtKSA9PiB7XHJcblx0XHRpZiAoaXRlbS50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcclxuXHRcdFx0aXRlbSA9IFwiMFwiICsgaXRlbTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpdGVtO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xyXG5cdFx0bGV0IGdldFRpbWUgPSBnZXRUaW1lUmVtYWluaW5nKCk7XHJcblx0XHR0aW1lckFjdGlvbi50ZXh0Q29udGVudCA9IGDQlNC+INC60L7QvdGG0LAg0LDQutGG0LjQuCDQvtGB0YLQsNC70L7RgdGMICR7Z2V0VGltZS5kYXlzfSDQtNC9LmA7XHJcblxyXG5cdFx0dGltZXJIb3Vycy50ZXh0Q29udGVudCA9IGNoZWNrVGltZUZvcm1hdChnZXRUaW1lLmhvdXJzKTtcclxuXHRcdHRpbWVyTWludXRlcy50ZXh0Q29udGVudCA9IGNoZWNrVGltZUZvcm1hdChnZXRUaW1lLm1pbnV0ZXMpO1xyXG5cdFx0dGltZXJTZWNvbmRzLnRleHRDb250ZW50ID0gY2hlY2tUaW1lRm9ybWF0KGdldFRpbWUuc2Vjb25kcyk7XHJcblxyXG5cdFx0aWYgKGdldFRpbWUudGltZVJlbWFpbmluZyA+IDApIHtcclxuXHRcdFx0c2V0VGltZW91dCh1cGRhdGVDbG9jaywgMTAwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lckFjdGlvbi50ZXh0Q29udGVudCA9IGDQlNC+INC60L7QvdGG0LAg0LDQutGG0LjQuCDQvtGB0YLQsNC70L7RgdGMIDAg0LTQvS5gO1xyXG5cdFx0XHR0aW1lckhvdXJzLnRleHRDb250ZW50ID0gXCIwMFwiO1xyXG5cdFx0XHR0aW1lck1pbnV0ZXMudGV4dENvbnRlbnQgPSBcIjAwXCI7XHJcblx0XHRcdHRpbWVyU2Vjb25kcy50ZXh0Q29udGVudCA9IFwiMDBcIjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR1cGRhdGVDbG9jaygpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcInRpbWVyLmpzIGlzIGxvYWRlZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpbWVyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/timer.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;