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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                setTopRatedData(response.data);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Top Rated\"\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: topRatedData && topRatedData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row bg-black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: item.rank\n                                }, void 0, false, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.genre\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.rating\n                                        }, void 0, false, {\n                                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, item.id, true, {\n                            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieList, \"xMs17wKDt0BFi41zx57zX+6w2us=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDSztBQUUvQixTQUFTSzs7SUFDUCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25ERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLFlBQVk7WUFDaEIsTUFBTUwsNkNBQUtBLENBQ1JNLEdBQUcsQ0FBQywrQ0FBK0M7Z0JBQ2xEQyxTQUFTO29CQUNQLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2dCQUNyQjtZQUNGLEdBQ0NDLElBQUksQ0FBQyxDQUFDQztnQkFDTEwsZ0JBQWdCSyxTQUFTQyxJQUFJO2dCQUM3QkMsUUFBUUMsR0FBRyxDQUFDSCxTQUFTQyxJQUFJO1lBQzNCLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQztnQkFDTkgsUUFBUUcsS0FBSyxDQUFDQTtZQUNoQjtRQUNKO1FBRUFUO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO2tCQUNDLDRFQUFDQzs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNEOzhCQUNFYixnQkFDQ0EsYUFBYWUsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQ0g7NEJBQWtCSSxXQUFVOzs4Q0FDM0IsOERBQUNDOzhDQUFJRixLQUFLRyxJQUFJOzs7Ozs7OENBRWQsOERBQUNOOztzREFDQyw4REFBQ087c0RBQUdKLEtBQUtLLEtBQUs7Ozs7OztzREFDZCw4REFBQ0Q7c0RBQUdKLEtBQUtNLEtBQUs7Ozs7OztzREFDZCw4REFBQ0Y7c0RBQUdKLEtBQUtPLE1BQU07Ozs7Ozs7Ozs7Ozs7MkJBTlRQLEtBQUtRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWMvQjtHQTVDU3pCO0tBQUFBO0FBOENULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllLmpzPzk2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiBNb3ZpZUxpc3QoKSB7XG4gIGNvbnN0IFt0b3BSYXRlZERhdGEsIHNldFRvcFJhdGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcImh0dHBzOi8vaW1kYi10b3AtMTAwLW1vdmllcy5wLnJhcGlkYXBpLmNvbS9cIiwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCI1MjQ2OGYyZjU0bXNoOTg1ZjY5MjkzYTJlYjcwcDEyMDAyMmpzbmFjM2FhZmYwYjUwZlwiLFxuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJpbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0VG9wUmF0ZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+VG9wIFJhdGVkPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dG9wUmF0ZWREYXRhICYmXG4gICAgICAgICAgICB0b3BSYXRlZERhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPGgxPntpdGVtLnJhbmt9PC9oMT5cbiAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17aXRlbS5pbWFnZX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9Lz4gKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmdlbnJlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnJhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiSW1hZ2UiLCJNb3ZpZUxpc3QiLCJ0b3BSYXRlZERhdGEiLCJzZXRUb3BSYXRlZERhdGEiLCJmZXRjaERhdGEiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwibWFpbiIsImRpdiIsImgyIiwibWFwIiwiaXRlbSIsImNsYXNzTmFtZSIsImgxIiwicmFuayIsInAiLCJ0aXRsZSIsImdlbnJlIiwicmF0aW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});