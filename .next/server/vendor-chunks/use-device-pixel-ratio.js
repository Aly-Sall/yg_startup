"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-device-pixel-ratio";
exports.ids = ["vendor-chunks/use-device-pixel-ratio"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-device-pixel-ratio/dist/index.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/use-device-pixel-ratio/dist/index.module.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDevicePixelRatio: () => (/* binding */ getDevicePixelRatio),\n/* harmony export */   useDevicePixelRatio: () => (/* binding */ useDevicePixelRatio)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * Get the device pixel ratio, potentially rounded and capped.\r\n * Will emit new values if it changes.\r\n *\r\n * @param options\r\n * @returns The current device pixel ratio, or the default if none can be resolved\r\n */\n\nfunction useDevicePixelRatio(options) {\n  const dpr = getDevicePixelRatio(options);\n  const [currentDpr, setCurrentDpr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dpr);\n  const {\n    defaultDpr,\n    maxDpr,\n    round\n  } = options || {};\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const canListen = typeof window !== 'undefined' && 'matchMedia' in window;\n\n    if (!canListen) {\n      return;\n    }\n\n    const updateDpr = () => setCurrentDpr(getDevicePixelRatio({\n      defaultDpr,\n      maxDpr,\n      round\n    }));\n\n    const mediaMatcher = window.matchMedia(`screen and (resolution: ${currentDpr}dppx)`); // Safari 13.1 does not have `addEventListener`, but does have `addListener`\n\n    if (mediaMatcher.addEventListener) {\n      mediaMatcher.addEventListener('change', updateDpr);\n    } else {\n      mediaMatcher.addListener(updateDpr);\n    }\n\n    return () => {\n      if (mediaMatcher.removeEventListener) {\n        mediaMatcher.removeEventListener('change', updateDpr);\n      } else {\n        mediaMatcher.removeListener(updateDpr);\n      }\n    };\n  }, [currentDpr, defaultDpr, maxDpr, round]);\n  return currentDpr;\n}\n/**\r\n * Returns the current device pixel ratio (DPR) given the passed options\r\n *\r\n * @param options\r\n * @returns current device pixel ratio\r\n */\n\nfunction getDevicePixelRatio(options) {\n  const {\n    defaultDpr = 1,\n    maxDpr = 3,\n    round = true\n  } = options || {};\n  const hasDprProp = typeof window !== 'undefined' && typeof window.devicePixelRatio === 'number';\n  const dpr = hasDprProp ? window.devicePixelRatio : defaultDpr;\n  const rounded = Math.min(Math.max(1, round ? Math.floor(dpr) : dpr), maxDpr);\n  return rounded;\n}\n\n\n//# sourceMappingURL=index.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWRldmljZS1waXhlbC1yYXRpby9kaXN0L2luZGV4Lm1vZHVsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLCtDQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUUsZ0RBQVM7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNFQUFzRSxXQUFXLFNBQVM7O0FBRTFGO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvRDtBQUNwRCIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvQ3JhY2tlZC9Gcm9udC1lbmQvc3RhcnR1cC9ub2RlX21vZHVsZXMvdXNlLWRldmljZS1waXhlbC1yYXRpby9kaXN0L2luZGV4Lm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcclxuICogR2V0IHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8sIHBvdGVudGlhbGx5IHJvdW5kZWQgYW5kIGNhcHBlZC5cclxuICogV2lsbCBlbWl0IG5ldyB2YWx1ZXMgaWYgaXQgY2hhbmdlcy5cclxuICpcclxuICogQHBhcmFtIG9wdGlvbnNcclxuICogQHJldHVybnMgVGhlIGN1cnJlbnQgZGV2aWNlIHBpeGVsIHJhdGlvLCBvciB0aGUgZGVmYXVsdCBpZiBub25lIGNhbiBiZSByZXNvbHZlZFxyXG4gKi9cblxuZnVuY3Rpb24gdXNlRGV2aWNlUGl4ZWxSYXRpbyhvcHRpb25zKSB7XG4gIGNvbnN0IGRwciA9IGdldERldmljZVBpeGVsUmF0aW8ob3B0aW9ucyk7XG4gIGNvbnN0IFtjdXJyZW50RHByLCBzZXRDdXJyZW50RHByXSA9IHVzZVN0YXRlKGRwcik7XG4gIGNvbnN0IHtcbiAgICBkZWZhdWx0RHByLFxuICAgIG1heERwcixcbiAgICByb3VuZFxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW5MaXN0ZW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnbWF0Y2hNZWRpYScgaW4gd2luZG93O1xuXG4gICAgaWYgKCFjYW5MaXN0ZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVEcHIgPSAoKSA9PiBzZXRDdXJyZW50RHByKGdldERldmljZVBpeGVsUmF0aW8oe1xuICAgICAgZGVmYXVsdERwcixcbiAgICAgIG1heERwcixcbiAgICAgIHJvdW5kXG4gICAgfSkpO1xuXG4gICAgY29uc3QgbWVkaWFNYXRjaGVyID0gd2luZG93Lm1hdGNoTWVkaWEoYHNjcmVlbiBhbmQgKHJlc29sdXRpb246ICR7Y3VycmVudERwcn1kcHB4KWApOyAvLyBTYWZhcmkgMTMuMSBkb2VzIG5vdCBoYXZlIGBhZGRFdmVudExpc3RlbmVyYCwgYnV0IGRvZXMgaGF2ZSBgYWRkTGlzdGVuZXJgXG5cbiAgICBpZiAobWVkaWFNYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIG1lZGlhTWF0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVEcHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZWRpYU1hdGNoZXIuYWRkTGlzdGVuZXIodXBkYXRlRHByKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1lZGlhTWF0Y2hlci5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG1lZGlhTWF0Y2hlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVEcHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVkaWFNYXRjaGVyLnJlbW92ZUxpc3RlbmVyKHVwZGF0ZURwcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2N1cnJlbnREcHIsIGRlZmF1bHREcHIsIG1heERwciwgcm91bmRdKTtcbiAgcmV0dXJuIGN1cnJlbnREcHI7XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgY3VycmVudCBkZXZpY2UgcGl4ZWwgcmF0aW8gKERQUikgZ2l2ZW4gdGhlIHBhc3NlZCBvcHRpb25zXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIGN1cnJlbnQgZGV2aWNlIHBpeGVsIHJhdGlvXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXREZXZpY2VQaXhlbFJhdGlvKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRlZmF1bHREcHIgPSAxLFxuICAgIG1heERwciA9IDMsXG4gICAgcm91bmQgPSB0cnVlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBoYXNEcHJQcm9wID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID09PSAnbnVtYmVyJztcbiAgY29uc3QgZHByID0gaGFzRHByUHJvcCA/IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDogZGVmYXVsdERwcjtcbiAgY29uc3Qgcm91bmRlZCA9IE1hdGgubWluKE1hdGgubWF4KDEsIHJvdW5kID8gTWF0aC5mbG9vcihkcHIpIDogZHByKSwgbWF4RHByKTtcbiAgcmV0dXJuIHJvdW5kZWQ7XG59XG5cbmV4cG9ydCB7IGdldERldmljZVBpeGVsUmF0aW8sIHVzZURldmljZVBpeGVsUmF0aW8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-device-pixel-ratio/dist/index.module.js\n");

/***/ })

};
;