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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tailwind.css */ \"./tailwind.css\");\n/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tailwind_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [bestofSeriesData, setBestofSeriesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // useEffect(() => {\n    //   const fetchData = async () => {\n    //     await axios\n    //       .get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n    //         headers: {\n    //           \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n    //           \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\",\n    //         },\n    //       })\n    //       .then((response) => {\n    //         setTopRatedData(response.data);\n    //         console.log(\"top of rated\", response.data);\n    //       })\n    //       .catch((error) => {\n    //         console.error(error);\n    //       });\n    //   };\n    //   fetchData();\n    // }, []);\n    // useEffect(() => {\n    //   const fetchData = async () => {\n    //     await axios\n    //       .get(\"https://imdb-top-100-movies.p.rapidapi.com/series/\", {\n    //         headers: {\n    //           \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n    //           \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\",\n    //         },\n    //       })\n    //       .then((response) => {\n    //         setBestofSeriesData(response.data);\n    //         console.log(\"movies series\", response.data);\n    //       })\n    //       .catch((error) => {\n    //         console.error(error);\n    //       });\n    //   };\n    //   fetchData();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"CineMax\"\n                    }, void 0, false, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Movies\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Series\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Animation\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-evenly\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Payment\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Nofitication\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-fuchsia-600\",\n                        children: \"Top Rated\"\n                    }, void 0, false, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: bestofSeriesData && bestofSeriesData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: item.rank\n                                    }, void 0, false, {\n                                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.year\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.rating\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Best of Series\"\n                    }, void 0, false, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: topRatedData && topRatedData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-row\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.rating\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.genre\n                                            }, void 0, false, {\n                                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieList, \"f1skWrjeIZgDm9b4Bi5PM+Q/w28=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ0s7QUFDTjtBQUV6QixTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ELE1BQU0sQ0FBQ00sa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUUzRCxvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQscUJBQXFCO0lBQ3JCLG9GQUFvRjtJQUNwRixxRUFBcUU7SUFDckUsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLHNEQUFzRDtJQUN0RCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osT0FBTztJQUVQLGlCQUFpQjtJQUNqQixVQUFVO0lBRVYsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIscUVBQXFFO0lBQ3JFLHFCQUFxQjtJQUNyQixvRkFBb0Y7SUFDcEYscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5Qyx1REFBdUQ7SUFDdkQsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLE9BQU87SUFFUCxpQkFBaUI7SUFDakIsVUFBVTtJQUVWLHFCQUNFLDhEQUFDUTs7MEJBQ0MsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0M7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDQzswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUdMLDhEQUFDQzt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNFOzBDQUFPOzs7Ozs7MENBQ1IsOERBQUNGOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNDOztrQ0FDQyw4REFBQ0U7d0JBQUdKLFdBQVU7a0NBQW1COzs7Ozs7a0NBRWpDLDhEQUFDRTt3QkFBSUYsV0FBVTtrQ0FDWkosb0JBQ0NBLGlCQUFpQlMsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ0o7Z0NBQWtCRixXQUFVOztrREFDM0IsOERBQUNPO2tEQUFJRCxLQUFLRSxJQUFJOzs7Ozs7a0RBRWQsOERBQUNOOzswREFDQyw4REFBQ0Q7MERBQUdLLEtBQUtHLElBQUk7Ozs7OzswREFDYiw4REFBQ1I7MERBQUdLLEtBQUtJLEtBQUs7Ozs7OzswREFDZCw4REFBQ1Q7MERBQUdLLEtBQUtLLEtBQUs7Ozs7OzswREFDZCw4REFBQ1Y7MERBQUdLLEtBQUtNLE1BQU07Ozs7Ozs7Ozs7Ozs7K0JBUFROLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZXpCLDhEQUFDWDs7a0NBQ0MsOERBQUNFO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNGO3dCQUFJRixXQUFVO2tDQUNaTixnQkFDQ0EsYUFBYVcsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ0o7Z0NBQWtCRixXQUFVOztrREFFM0IsOERBQUNDO2tEQUFHSyxLQUFLSSxLQUFLOzs7Ozs7a0RBQ2QsOERBQUNSO3dDQUFJRixXQUFVOzswREFDYiw4REFBQ0M7MERBQUdLLEtBQUtNLE1BQU07Ozs7OzswREFDZiw4REFBQ1g7MERBQUdLLEtBQUtLLEtBQUs7Ozs7Ozs7Ozs7Ozs7K0JBTFJMLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0I7R0F2R1NwQjtLQUFBQTtBQXlHVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZS5qcz85NjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBcIi4uL3RhaWx3aW5kLmNzc1wiO1xuXG5mdW5jdGlvbiBNb3ZpZUxpc3QoKSB7XG4gIGNvbnN0IFt0b3BSYXRlZERhdGEsIHNldFRvcFJhdGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtiZXN0b2ZTZXJpZXNEYXRhLCBzZXRCZXN0b2ZTZXJpZXNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIGF3YWl0IGF4aW9zXG4gIC8vICAgICAgIC5nZXQoXCJodHRwczovL2ltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb20vXCIsIHtcbiAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiNTI0NjhmMmY1NG1zaDk4NWY2OTI5M2EyZWI3MHAxMjAwMjJqc25hYzNhYWZmMGI1MGZcIixcbiAgLy8gICAgICAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiaW1kYi10b3AtMTAwLW1vdmllcy5wLnJhcGlkYXBpLmNvbVwiLFxuICAvLyAgICAgICAgIH0sXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgICAgIHNldFRvcFJhdGVkRGF0YShyZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRvcCBvZiByYXRlZFwiLCByZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICB9O1xuXG4gIC8vICAgZmV0Y2hEYXRhKCk7XG4gIC8vIH0sIFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIGF3YWl0IGF4aW9zXG4gIC8vICAgICAgIC5nZXQoXCJodHRwczovL2ltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb20vc2VyaWVzL1wiLCB7XG4gIC8vICAgICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcIjUyNDY4ZjJmNTRtc2g5ODVmNjkyOTNhMmViNzBwMTIwMDIyanNuYWMzYWFmZjBiNTBmXCIsXG4gIC8vICAgICAgICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb21cIixcbiAgLy8gICAgICAgICB9LFxuICAvLyAgICAgICB9KVxuICAvLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgLy8gICAgICAgICBzZXRCZXN0b2ZTZXJpZXNEYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibW92aWVzIHNlcmllc1wiLCByZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICB9O1xuXG4gIC8vICAgZmV0Y2hEYXRhKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgIDxwPkNpbmVNYXg8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgICAgIDxwPk1vdmllczwvcD5cbiAgICAgICAgICA8cD5TZXJpZXM8L3A+XG4gICAgICAgICAgPHA+QW5pbWF0aW9uPC9wPlxuICAgICAgICAgIDxwPkdlbnJlczwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5XCI+XG4gICAgICAgICAgPHA+U2VhcmNoPC9wPlxuICAgICAgICAgIDxidXR0b24+UGF5bWVudDwvYnV0dG9uPlxuICAgICAgICAgIDxwPk5vZml0aWNhdGlvbjwvcD5cbiAgICAgICAgICA8cD5Qcm9maWxlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZnVjaHNpYS02MDBcIj5Ub3AgUmF0ZWQ8L2gyPlxuICAgICAgICB7LyogdG9wIHJhdGVkICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICB7YmVzdG9mU2VyaWVzRGF0YSAmJlxuICAgICAgICAgICAgYmVzdG9mU2VyaWVzRGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDE+e2l0ZW0ucmFua308L2gxPlxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtpdGVtLmltYWdlfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ueWVhcn08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5nZW5yZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogbW92aWUgc2VyaWVzICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkJlc3Qgb2YgU2VyaWVzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAge3RvcFJhdGVkRGF0YSAmJlxuICAgICAgICAgICAgdG9wUmF0ZWREYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtpdGVtLmltYWdlfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPiAqL31cbiAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZ2VucmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkltYWdlIiwiTW92aWVMaXN0IiwidG9wUmF0ZWREYXRhIiwic2V0VG9wUmF0ZWREYXRhIiwiYmVzdG9mU2VyaWVzRGF0YSIsInNldEJlc3RvZlNlcmllc0RhdGEiLCJtYWluIiwibmF2IiwiY2xhc3NOYW1lIiwicCIsImRpdiIsImJ1dHRvbiIsImgyIiwibWFwIiwiaXRlbSIsImgxIiwicmFuayIsInllYXIiLCJ0aXRsZSIsImdlbnJlIiwicmF0aW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});