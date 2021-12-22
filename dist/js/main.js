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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/two */ \"./modules/two.js\");\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"25 december 2021\");\r\n(0,_modules_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBb0M7QUFDRjtBQUNsQztBQUNBLDBEQUFLO0FBQ0wsd0RBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lciBmcm9tIFwiLi9tb2R1bGVzL3RpbWVyXCI7XHJcbmltcG9ydCB0d29KUyBmcm9tIFwiLi9tb2R1bGVzL3R3b1wiO1xyXG5cclxudGltZXIoXCIyNSBkZWNlbWJlciAyMDIxXCIpO1xyXG50d29KUygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\tconst timerHours = document.getElementById(\"timer-hours\");\r\n\tconst timerMinutes = document.getElementById(\"timer-minutes\");\r\n\tconst timerSeconds = document.getElementById(\"timer-seconds\");\r\n\tconst timerAction = document.querySelector(\".timer-action\");\r\n\r\n\tconst getTimeRemaining = () => {\r\n\t\tlet dateStop = new Date(deadline).getTime();\r\n\t\tlet dateNow = new Date().getTime();\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet days = Math.floor(timeRemaining / 3600 / 24);\r\n\t\tlet hours = Math.floor((timeRemaining / 3600) % 24);\r\n\t\tlet minutes = Math.floor((timeRemaining / 60) % 60);\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\treturn { timeRemaining, days, hours, minutes, seconds };\r\n\t};\r\n\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaining();\r\n\r\n\t\ttimerAction.textContent = `До конца акции осталось ${getTime.days} дн.`;\r\n\t\ttimerHours.textContent = getTime.hours;\r\n\t\ttimerMinutes.textContent = getTime.minutes;\r\n\t\ttimerSeconds.textContent = getTime.seconds;\r\n\r\n\t\tif (getTime.timeRemaining > 0) {\r\n\t\t\tsetInterval(updateClock, 1000);\r\n\t\t}\r\n\t};\r\n\r\n\t//  \"26 december 2021\");\r\n\r\n\tupdateClock();\r\n\r\n\tconsole.log(\"timer is loaded 1\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3RpbWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvdGltZXIuanM/ZDE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aW1lciA9IChkZWFkbGluZSkgPT4ge1xyXG5cdGNvbnN0IHRpbWVySG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVyLWhvdXJzXCIpO1xyXG5cdGNvbnN0IHRpbWVyTWludXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXItbWludXRlc1wiKTtcclxuXHRjb25zdCB0aW1lclNlY29uZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpbWVyLXNlY29uZHNcIik7XHJcblx0Y29uc3QgdGltZXJBY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyLWFjdGlvblwiKTtcclxuXHJcblx0Y29uc3QgZ2V0VGltZVJlbWFpbmluZyA9ICgpID0+IHtcclxuXHRcdGxldCBkYXRlU3RvcCA9IG5ldyBEYXRlKGRlYWRsaW5lKS5nZXRUaW1lKCk7XHJcblx0XHRsZXQgZGF0ZU5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0bGV0IHRpbWVSZW1haW5pbmcgPSAoZGF0ZVN0b3AgLSBkYXRlTm93KSAvIDEwMDA7XHJcblx0XHRsZXQgZGF5cyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAvIDM2MDAgLyAyNCk7XHJcblx0XHRsZXQgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nIC8gMzYwMCkgJSAyNCk7XHJcblx0XHRsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVSZW1haW5pbmcgLyA2MCkgJSA2MCk7XHJcblx0XHRsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZVJlbWFpbmluZyAlIDYwKTtcclxuXHRcdHJldHVybiB7IHRpbWVSZW1haW5pbmcsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH07XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdXBkYXRlQ2xvY2sgPSAoKSA9PiB7XHJcblx0XHRsZXQgZ2V0VGltZSA9IGdldFRpbWVSZW1haW5pbmcoKTtcclxuXHJcblx0XHR0aW1lckFjdGlvbi50ZXh0Q29udGVudCA9IGDQlNC+INC60L7QvdGG0LAg0LDQutGG0LjQuCDQvtGB0YLQsNC70L7RgdGMICR7Z2V0VGltZS5kYXlzfSDQtNC9LmA7XHJcblx0XHR0aW1lckhvdXJzLnRleHRDb250ZW50ID0gZ2V0VGltZS5ob3VycztcclxuXHRcdHRpbWVyTWludXRlcy50ZXh0Q29udGVudCA9IGdldFRpbWUubWludXRlcztcclxuXHRcdHRpbWVyU2Vjb25kcy50ZXh0Q29udGVudCA9IGdldFRpbWUuc2Vjb25kcztcclxuXHJcblx0XHRpZiAoZ2V0VGltZS50aW1lUmVtYWluaW5nID4gMCkge1xyXG5cdFx0XHRzZXRJbnRlcnZhbCh1cGRhdGVDbG9jaywgMTAwMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gIFwiMjYgZGVjZW1iZXIgMjAyMVwiKTtcclxuXHJcblx0dXBkYXRlQ2xvY2soKTtcclxuXHJcblx0Y29uc29sZS5sb2coXCJ0aW1lciBpcyBsb2FkZWQgMVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRpbWVyO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/timer.js\n");

/***/ }),

/***/ "./modules/two.js":
/*!************************!*\
  !*** ./modules/two.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst twoJS = () => {\r\n\tconsole.log(\"two.js is loaded\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoJS);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL3R3by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3R3by5qcz81ZmM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHR3b0pTID0gKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwidHdvLmpzIGlzIGxvYWRlZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR3b0pTO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/two.js\n");

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