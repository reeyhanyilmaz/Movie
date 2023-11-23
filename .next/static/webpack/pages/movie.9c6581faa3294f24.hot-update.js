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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction MovieList() {\n    _s();\n    const [topRatedData, setTopRatedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://imdb-top-100-movies.p.rapidapi.com/\", {\n                headers: {\n                    \"X-RapidAPI-Key\": \"52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f\",\n                    \"X-RapidAPI-Host\": \"imdb-top-100-movies.p.rapidapi.com\"\n                }\n            }).then((response)=>{\n                console.log(response.data);\n            }).catch((error)=>{\n                console.error(error);\n            });\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"mobie list\"\n    }, void 0, false, {\n        fileName: \"/Users/reyhanyilmaz/Desktop/Movie/pages/movie.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n_s(MovieList, \"qCEXthhznxgFJqOrzG3T5XtyqKI=\");\n_c = MovieList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieList);\nvar _c;\n$RefreshReg$(_c, \"MovieList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBQ3pCO0FBRTFCLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQTtJQUNoREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxZQUFZO1lBQ2hCLE1BQU1KLDZDQUFLQSxDQUNSSyxHQUFHLENBQUMsK0NBQStDO2dCQUNsREMsU0FBUztvQkFDUCxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtnQkFDckI7WUFDRixHQUNDQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBU0csSUFBSTtZQUMzQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ05KLFFBQVFJLEtBQUssQ0FBQ0E7WUFDaEI7UUFDSjtRQUVBVDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDVTtrQkFBSzs7Ozs7O0FBQ2Y7R0F2QlNiO0tBQUFBO0FBeUJULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllLmpzPzk2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCAsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gTW92aWVMaXN0KCkge1xuICBjb25zdCBbdG9wUmF0ZWREYXRhLCBzZXRUb3BSYXRlZERhdGFdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KFwiaHR0cHM6Ly9pbWRiLXRvcC0xMDAtbW92aWVzLnAucmFwaWRhcGkuY29tL1wiLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcIjUyNDY4ZjJmNTRtc2g5ODVmNjkyOTNhMmViNzBwMTIwMDIyanNuYWMzYWFmZjBiNTBmXCIsXG4gICAgICAgICAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb21cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPG1haW4+bW9iaWUgbGlzdDwvbWFpbj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJNb3ZpZUxpc3QiLCJ0b3BSYXRlZERhdGEiLCJzZXRUb3BSYXRlZERhdGEiLCJmZXRjaERhdGEiLCJnZXQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movie.js\n"));

/***/ })

});