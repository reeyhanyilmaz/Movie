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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestofSeriesData, setBestofSeriesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                setTopRatedData(response.data);\n                console.log(\"top of rated\", response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/series/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                setBestofSeriesData(response.data);\n                console.log(\"movies series\", response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-red\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-fuchsia-600\",\n                    children: \"Top Rated\"\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: topRatedData && topRatedData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row bg-black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: item.rank\n                                }, void 0, false, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.year\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.genre\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.rating\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, item.id, true, {\n                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieList, \"Qohcrvh/I/GAKeWyrwzfQI1WNvE=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDSztBQUUvQixTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUUzREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxZQUFZO1lBQ2hCLE1BQU1QLDZDQUFLQSxDQUNSUSxHQUFHLENBQUMsK0NBQStDO2dCQUNsREMsU0FBUztvQkFDUCxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtnQkFDckI7WUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0xQLGdCQUFnQk8sU0FBU0MsSUFBSTtnQkFDN0JDLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JILFNBQVNDLElBQUk7WUFDM0MsR0FDQ0csS0FBSyxDQUFDLENBQUNDO2dCQUNOSCxRQUFRRyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0o7UUFFQVQ7SUFDRixHQUFHLEVBQUU7SUFFTFQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxZQUFZO1lBQ2hCLE1BQU1QLDZDQUFLQSxDQUNSUSxHQUFHLENBQUMsc0RBQXNEO2dCQUN6REMsU0FBUztvQkFDUCxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtnQkFDckI7WUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0xMLG9CQUFvQkssU0FBU0MsSUFBSTtnQkFDakNDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJILFNBQVNDLElBQUk7WUFDNUMsR0FDQ0csS0FBSyxDQUFDLENBQUNDO2dCQUNOSCxRQUFRRyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0o7UUFFQVQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1U7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7OzhCQUNDLDhEQUFDQztvQkFBR0YsV0FBVTs4QkFBbUI7Ozs7Ozs4QkFFakMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNaZixnQkFDQ0EsYUFBYWtCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNIOzRCQUFrQkQsV0FBVTs7OENBQzNCLDhEQUFDSzs4Q0FBSUQsS0FBS0UsSUFBSTs7Ozs7OzhDQUVkLDhEQUFDTDs7c0RBQ0MsOERBQUNNO3NEQUFHSCxLQUFLSSxJQUFJOzs7Ozs7c0RBQ2IsOERBQUNEO3NEQUFHSCxLQUFLSyxLQUFLOzs7Ozs7c0RBQ2QsOERBQUNGO3NEQUFHSCxLQUFLTSxLQUFLOzs7Ozs7c0RBQ2QsOERBQUNIO3NEQUFHSCxLQUFLTyxNQUFNOzs7Ozs7Ozs7Ozs7OzJCQVBUUCxLQUFLUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlL0I7R0FyRVM1QjtLQUFBQTtBQXVFVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZS5qcz85NjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gTW92aWVMaXN0KCkge1xuICBjb25zdCBbdG9wUmF0ZWREYXRhLCBzZXRUb3BSYXRlZERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYmVzdG9mU2VyaWVzRGF0YSwgc2V0QmVzdG9mU2VyaWVzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9pbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tL1wiLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcIjUyNDY4ZjJmNTRtc2g5ODVmNjkyOTNhMmViNzBwMTIwMDIyanNuYWMzYWFmZjBiNTBmXCIsXG4gICAgICAgICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRUb3BSYXRlZERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b3Agb2YgcmF0ZWRcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9pbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tL3Nlcmllcy9cIiwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCI1MjQ2OGYyZjU0bXNoOTg1ZjY5MjkzYTJlYjcwcDEyMDAyMmpzbmFjM2FhZmYwYjUwZlwiLFxuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJpbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0QmVzdG9mU2VyaWVzRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmllcyBzZXJpZXNcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1yZWRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWZ1Y2hzaWEtNjAwXCI+VG9wIFJhdGVkPC9oMj5cbiAgICAgICAgey8qIHRvcCByYXRlZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAge3RvcFJhdGVkRGF0YSAmJlxuICAgICAgICAgICAgdG9wUmF0ZWREYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy1ibGFja1wiPlxuICAgICAgICAgICAgICAgIDxoMT57aXRlbS5yYW5rfTwvaDE+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS55ZWFyfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmdlbnJlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnJhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW1hZ2UiLCJNb3ZpZUxpc3QiLCJ0b3BSYXRlZERhdGEiLCJzZXRUb3BSYXRlZERhdGEiLCJiZXN0b2ZTZXJpZXNEYXRhIiwic2V0QmVzdG9mU2VyaWVzRGF0YSIsImZldGNoRGF0YSIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJtYXAiLCJpdGVtIiwiaDEiLCJyYW5rIiwicCIsInllYXIiLCJ0aXRsZSIsImdlbnJlIiwicmF0aW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});