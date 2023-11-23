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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(\"topRatedData :>> \", topRatedData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                setTopRatedData(response.data);\n                console.log(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"mobie list\"\n    }, void 0, false, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n_s(MovieList, \"qCEXthhznxgFJqOrzG3T5XtyqKI=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQTtJQUNoREssUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkg7SUFDakNKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWTtZQUNoQixNQUFNTiw2Q0FBS0EsQ0FDUk8sR0FBRyxDQUFDLCtDQUErQztnQkFDbERDLFNBQVM7b0JBQ1Asa0JBQWtCO29CQUNsQixtQkFBbUI7Z0JBQ3JCO1lBQ0YsR0FDQ0MsSUFBSSxDQUFDLENBQUNDO2dCQUNMUCxnQkFBZ0JPLFNBQVNDLElBQUk7Z0JBQzdCUCxRQUFRQyxHQUFHLENBQUNLLFNBQVNDLElBQUk7WUFDM0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO2dCQUNOVCxRQUFRUyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0o7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ1E7a0JBQUs7Ozs7OztBQUNmO0dBekJTYjtLQUFBQTtBQTJCVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZS5qcz85NjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIE1vdmllTGlzdCgpIHtcbiAgY29uc3QgW3RvcFJhdGVkRGF0YSwgc2V0VG9wUmF0ZWREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnNvbGUubG9nKCd0b3BSYXRlZERhdGEgOj4+ICcsIHRvcFJhdGVkRGF0YSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcImh0dHBzOi8vaW1kYi10b3AtMTAwLW1vdmllcy5wLnJhcGlkYXBpLmNvbS9cIiwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCI1MjQ2OGYyZjU0bXNoOTg1ZjY5MjkzYTJlYjcwcDEyMDAyMmpzbmFjM2FhZmYwYjUwZlwiLFxuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJpbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0VG9wUmF0ZWREYXRhKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8bWFpbj5tb2JpZSBsaXN0PC9tYWluPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIk1vdmllTGlzdCIsInRvcFJhdGVkRGF0YSIsInNldFRvcFJhdGVkRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});