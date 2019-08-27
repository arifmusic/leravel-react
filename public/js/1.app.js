(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/pages/SupportPage/auth/signIn.js":
/*!*************************************************!*\
  !*** ./client/pages/SupportPage/auth/signIn.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useHooks_use_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/useHooks/use-form */ "./client/useHooks/use-form.js");
/* harmony import */ var _useHooks_use_auth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/useHooks/use-auth.js */ "./client/useHooks/use-auth.js");





var SignIn = function SignIn(props) {
  var type = "support";
  var asdf = Object(_useHooks_use_auth_js__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();

  var _useForm = Object(_useHooks_use_form__WEBPACK_IMPORTED_MODULE_2__["default"])(type),
      _useForm2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useForm, 3),
      handleSubmit = _useForm2[0],
      handleChange = _useForm2[1],
      error = _useForm2[2];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Support"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, asdf.support ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Sedang Log In Support") : "Sedang Log Out Support"), error && error, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    onChange: handleChange,
    name: "email"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    onChange: handleChange,
    name: "password"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: handleSubmit
  }, "submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./client/useHooks/use-form.js":
/*!*************************************!*\
  !*** ./client/useHooks/use-form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-auth */ "./client/useHooks/use-auth.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  var auth = Object(_use_auth__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  var send = null;

  if (type === "client") {
    send = "clients@gmail.com";
  } else {
    send = "supports@gmail.com";
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: send,
    password: "secret",
    error: ""
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      dataForm = _useState2[0],
      setDataForm = _useState2[1];

  function handleChange(e) {
    setDataForm(_objectSpread({}, dataForm, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, e.target.name, e.target.value)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.signin({
      dataForm: dataForm,
      type: type
    }).then(function (response) {
      if (response) {
        setDataForm(_objectSpread({}, dataForm, {
          error: response.errors[0]
        }));
      }
    });
  }

  var error = dataForm.error;
  return [handleSubmit, handleChange, error];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvU3VwcG9ydFBhZ2UvYXV0aC9zaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3VzZUhvb2tzL3VzZS1mb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInByb3BzIiwidHlwZSIsImFzZGYiLCJ1c2VBdXRoIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9yIiwic3VwcG9ydCIsImF1dGgiLCJzZW5kIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YUZvcm0iLCJzZXREYXRhRm9ybSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25pbiIsInRoZW4iLCJyZXNwb25zZSIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUN2QixNQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUNBLE1BQU1DLElBQUksR0FBR0MscUVBQU8sRUFBcEI7O0FBRnVCLGlCQUdxQkMsa0VBQU8sQ0FBQ0gsSUFBRCxDQUg1QjtBQUFBO0FBQUEsTUFHaEJJLFlBSGdCO0FBQUEsTUFHRkMsWUFIRTtBQUFBLE1BR1lDLEtBSFo7O0FBSXZCLFNBQ0Msd0VBQ0MsaUZBREQsRUFFQyx1RUFDRUwsSUFBSSxDQUFDTSxPQUFMLEdBQ0EsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLGdDQURBLEdBR0Esd0JBSkYsQ0FGRCxFQVNFRCxLQUFLLElBQUlBLEtBVFgsRUFVQyx5RUFDQztBQUFPLFlBQVEsRUFBRUQsWUFBakI7QUFBK0IsUUFBSSxFQUFDO0FBQXBDLElBREQsRUFFQztBQUFPLFlBQVEsRUFBRUEsWUFBakI7QUFBK0IsUUFBSSxFQUFDO0FBQXBDLElBRkQsRUFHQztBQUFRLFdBQU8sRUFBRUQ7QUFBakIsY0FIRCxDQVZELENBREQ7QUFrQkEsQ0F0QkQ7O0FBd0JlTixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFFQTtBQUVlLHlFQUFBRSxJQUFJLEVBQUk7QUFDdEIsTUFBTVEsSUFBSSxHQUFHTix5REFBTyxFQUFwQjtBQUNBLE1BQUlPLElBQUksR0FBRyxJQUFYOztBQUNBLE1BQUlULElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3RCUyxRQUFJLEdBQUcsbUJBQVA7QUFDQSxHQUZELE1BRU87QUFDTkEsUUFBSSxHQUFHLG9CQUFQO0FBQ0E7O0FBUHFCLGtCQVFVQyxzREFBUSxDQUFDO0FBQ3hDQyxTQUFLLEVBQUVGLElBRGlDO0FBRXhDRyxZQUFRLEVBQUUsUUFGOEI7QUFHeENOLFNBQUssRUFBRTtBQUhpQyxHQUFELENBUmxCO0FBQUE7QUFBQSxNQVFmTyxRQVJlO0FBQUEsTUFRTEMsV0FSSzs7QUFhdEIsV0FBU1QsWUFBVCxDQUFzQlUsQ0FBdEIsRUFBeUI7QUFDeEJELGVBQVcsbUJBQU1ELFFBQU4sbUZBQWlCRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBMUIsRUFBaUNGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUExQyxHQUFYO0FBQ0E7O0FBQ0QsV0FBU2QsWUFBVCxDQUFzQlcsQ0FBdEIsRUFBeUI7QUFDeEJBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBWCxRQUFJLENBQUNZLE1BQUwsQ0FBWTtBQUFFUCxjQUFRLEVBQVJBLFFBQUY7QUFBWWIsVUFBSSxFQUFKQTtBQUFaLEtBQVosRUFBZ0NxQixJQUFoQyxDQUFxQyxVQUFBQyxRQUFRLEVBQUk7QUFDaEQsVUFBSUEsUUFBSixFQUFjO0FBQ2JSLG1CQUFXLG1CQUFNRCxRQUFOO0FBQWdCUCxlQUFLLEVBQUVnQixRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsQ0FBaEI7QUFBdkIsV0FBWDtBQUNBO0FBQ0QsS0FKRDtBQUtBOztBQXZCcUIsTUF3QmRqQixLQXhCYyxHQXdCSk8sUUF4QkksQ0F3QmRQLEtBeEJjO0FBeUJ0QixTQUFPLENBQUNGLFlBQUQsRUFBZUMsWUFBZixFQUE2QkMsS0FBN0IsQ0FBUDtBQUNBLENBMUJELEU7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQyIsImZpbGUiOiJqcy8xLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCJ+L3VzZUhvb2tzL3VzZS1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwifi91c2VIb29rcy91c2UtYXV0aC5qc1wiO1xyXG5cclxuY29uc3QgU2lnbkluID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHR5cGUgPSBcInN1cHBvcnRcIjtcclxuXHRjb25zdCBhc2RmID0gdXNlQXV0aCgpO1xyXG5cdGNvbnN0IFtoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgZXJyb3JdID0gdXNlRm9ybSh0eXBlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPlN1cHBvcnQ8L2gyPlxyXG5cdFx0XHQ8aDM+XHJcblx0XHRcdFx0e2FzZGYuc3VwcG9ydCA/IChcclxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5TZWRhbmcgTG9nIEluIFN1cHBvcnQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcIlNlZGFuZyBMb2cgT3V0IFN1cHBvcnRcIlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvaDM+XHJcblx0XHRcdHtlcnJvciAmJiBlcnJvcn1cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJlbWFpbFwiIC8+XHJcblx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PnN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuL3VzZS1hdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0eXBlID0+IHtcclxuXHRjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xyXG5cdGxldCBzZW5kID0gbnVsbDtcclxuXHRpZiAodHlwZSA9PT0gXCJjbGllbnRcIikge1xyXG5cdFx0c2VuZCA9IFwiY2xpZW50c0BnbWFpbC5jb21cIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c2VuZCA9IFwic3VwcG9ydHNAZ21haWwuY29tXCI7XHJcblx0fVxyXG5cdGNvbnN0IFtkYXRhRm9ybSwgc2V0RGF0YUZvcm1dID0gdXNlU3RhdGUoe1xyXG5cdFx0ZW1haWw6IHNlbmQsXHJcblx0XHRwYXNzd29yZDogXCJzZWNyZXRcIixcclxuXHRcdGVycm9yOiBcIlwiXHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuXHRcdHNldERhdGFGb3JtKHsgLi4uZGF0YUZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRhdXRoLnNpZ25pbih7IGRhdGFGb3JtLCB0eXBlIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRzZXREYXRhRm9ybSh7IC4uLmRhdGFGb3JtLCBlcnJvcjogcmVzcG9uc2UuZXJyb3JzWzBdIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y29uc3QgeyBlcnJvciB9ID0gZGF0YUZvcm07XHJcblx0cmV0dXJuIFtoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgZXJyb3JdO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7Il0sInNvdXJjZVJvb3QiOiIifQ==