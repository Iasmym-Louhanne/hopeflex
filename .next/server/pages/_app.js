/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/cartContext.js":
/*!***********************************!*\
  !*** ./components/cartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction CartProvider({ children }) {\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCartItems((prev)=>[\n                ...prev,\n                product\n            ]);\n    };\n    const removeFromCart = (id)=>{\n        setCartItems((prev)=>prev.filter((item)=>item.id !== id));\n    };\n    const clearCart = ()=>setCartItems([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Engemedical\\\\hopeflex\\\\components\\\\cartContext.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvY2FydENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFFekMsTUFBTUUsNEJBQWNGLG9EQUFhQSxHQUFHO0FBRXBDLFNBQVNHLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1NLFlBQVksQ0FBQ0M7UUFDakJGLGFBQWEsQ0FBQ0csT0FBUzttQkFBSUE7Z0JBQU1EO2FBQVE7SUFDM0M7SUFFQSxNQUFNRSxpQkFBaUIsQ0FBQ0M7UUFDdEJMLGFBQWEsQ0FBQ0csT0FBU0EsS0FBS0csTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtGLEVBQUUsS0FBS0E7SUFDM0Q7SUFFQSxNQUFNRyxZQUFZLElBQU1SLGFBQWEsRUFBRTtJQUV2QyxxQkFDRSw4REFBQ0osWUFBWWEsUUFBUTtRQUFDQyxPQUFPO1lBQUVYO1lBQVdFO1lBQVdHO1lBQWdCSTtRQUFVO2tCQUM1RVY7Ozs7OztBQUdQIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVuZ2VtZWRpY2FsXFxob3BlZmxleFxcY29tcG9uZW50c1xcY2FydENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXMoKHByZXYpID0+IFsuLi5wcmV2LCBwcm9kdWN0XSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQpID0+IHtcclxuICAgIHNldENhcnRJdGVtcygocHJldikgPT4gcHJldi5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4gc2V0Q2FydEl0ZW1zKFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0SXRlbXMsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIGNsZWFyQ2FydCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXYiLCJyZW1vdmVGcm9tQ2FydCIsImlkIiwiZmlsdGVyIiwiaXRlbSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/cartContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _components_cartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cartContext */ \"(pages-dir-node)/./components/cartContext.js\");\n/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/style.css */ \"(pages-dir-node)/./public/style.css\");\n\n // Verifique se o caminho está correto\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartContext__WEBPACK_IMPORTED_MODULE_1__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Engemedical\\\\hopeflex\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Engemedical\\\\hopeflex\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUQsQ0FBQyxzQ0FBc0M7QUFDbkU7QUFHZCxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCxpRUFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRW5nZW1lZGljYWxcXGhvcGVmbGV4XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NhcnRDb250ZXh0JzsgLy8gVmVyaWZpcXVlIHNlIG8gY2FtaW5obyBlc3TDoSBjb3JyZXRvXHJcbmltcG9ydCAnLi4vcHVibGljL3N0eWxlLmNzcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NhcnRQcm92aWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkNhcnRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.js"));
module.exports = __webpack_exports__;

})();