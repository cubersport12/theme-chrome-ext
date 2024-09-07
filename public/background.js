/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/app/background.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);

/* chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    chrome.scripting.executeScript({
        target: {
            tabId: data.tabId
        },
        func: () => {
            const theming = new MirTheming(document, false);
            theming.applyPalettes(data.palettes);
        }
    });
    sendResponse(true);
}) */ 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNMQSxPQUFPLENBQUMsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFFN0QsQ0FBQyxHQUFHLEVBQUU7SUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLEVBQUU7O0FBRUo7Ozs7Ozs7Ozs7O0tBV0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdGhlbWUtY2hyb21lLWV4dC9zb3VyY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHRoZW1lLWNocm9tZS1leHQvc291cmNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHRoZW1lLWNocm9tZS1leHQvc291cmNlLy4vc3JjL2FwcC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBNaXJUaGVtaW5nLCBQYWxldHRlcyB9IGZyb20gXCIuL3RoZW1pbmdcIjtcclxuY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPicpO1xyXG5cclxuKCgpID0+IHtcclxuICAgIGNvbnNvbGUuaW5mbygnYXNkYXNkamFza2w7ZGpzbGRrZnNma2xkcycpO1xyXG59KSgpXHJcblxyXG4vKiBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKGRhdGEsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICB0YWJJZDogZGF0YS50YWJJZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuYzogKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aGVtaW5nID0gbmV3IE1pclRoZW1pbmcoZG9jdW1lbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhlbWluZy5hcHBseVBhbGV0dGVzKGRhdGEucGFsZXR0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2VuZFJlc3BvbnNlKHRydWUpO1xyXG59KSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==