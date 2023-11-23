"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movie",{

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                setTopRatedData(response.data);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Top Rated\"\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: topRatedData && topRatedData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: item.rank\n                                }, void 0, false, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: item.image,\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, item.id, true, {\n                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieList, \"qCEXthhznxgFJqOrzG3T5XtyqKI=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDSztBQUUvQixTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUE7SUFDaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sWUFBWTtZQUNoQixNQUFNTCw2Q0FBS0EsQ0FDUk0sR0FBRyxDQUFDLCtDQUErQztnQkFDbERDLFNBQVM7b0JBQ1Asa0JBQWtCO29CQUNsQixtQkFBbUI7Z0JBQ3JCO1lBQ0YsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO2dCQUNMTCxnQkFBZ0JLLFNBQVNDLElBQUk7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUNILFNBQVNDLElBQUk7WUFDM0IsR0FDQ0csS0FBSyxDQUFDLENBQUNDO2dCQUNOSCxRQUFRRyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0o7UUFFQVQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0Q7OEJBQ0ViLGdCQUFnQkEsYUFBYWUsR0FBRyxDQUFDLENBQUNDLHFCQUNqQyw4REFBQ0g7OzhDQUNDLDhEQUFDSTs4Q0FBSUQsS0FBS0UsSUFBSTs7Ozs7OzhDQUNkLDhEQUFDcEIsbURBQUtBO29DQUFDcUIsS0FBS0gsS0FBS0ksS0FBSztvQ0FBRUMsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7OzsyQkFGcENOLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QjtHQXRDU3hCO0tBQUFBO0FBd0NULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllLmpzPzk2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBNb3ZpZUxpc3QoKSB7XG4gIGNvbnN0IFt0b3BSYXRlZERhdGEsIHNldFRvcFJhdGVkRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXCJodHRwczovL2ltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb20vXCIsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiNTI0NjhmMmY1NG1zaDk4NWY2OTI5M2EyZWI3MHAxMjAwMjJqc25hYzNhYWZmMGI1MGZcIixcbiAgICAgICAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiaW1kYi10b3AtMTAwLW1vdmllcy5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFRvcFJhdGVkRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlRvcCBSYXRlZDwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RvcFJhdGVkRGF0YSAmJiB0b3BSYXRlZERhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxoMT57aXRlbS5yYW5rfTwvaDE+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJJbWFnZSIsIk1vdmllTGlzdCIsInRvcFJhdGVkRGF0YSIsInNldFRvcFJhdGVkRGF0YSIsImZldGNoRGF0YSIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJtYWluIiwiZGl2IiwiaDIiLCJtYXAiLCJpdGVtIiwiaDEiLCJyYW5rIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});