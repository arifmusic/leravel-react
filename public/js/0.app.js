(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/pages/ClientPage/auth/signIn.js":
/*!************************************************!*\
  !*** ./client/pages/ClientPage/auth/signIn.js ***!
  \************************************************/
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
  var type = "client";
  var asdf = Object(_useHooks_use_auth_js__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();

  var _useForm = Object(_useHooks_use_form__WEBPACK_IMPORTED_MODULE_2__["default"])(type),
      _useForm2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useForm, 3),
      handleSubmit = _useForm2[0],
      handleChange = _useForm2[1],
      error = _useForm2[2];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Client"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, asdf.user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Sedang Log In") : "Sedang Log Out"), error && error, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ2xpZW50UGFnZS9hdXRoL3NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdXNlSG9va3MvdXNlLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiXSwibmFtZXMiOlsiU2lnbkluIiwicHJvcHMiLCJ0eXBlIiwiYXNkZiIsInVzZUF1dGgiLCJ1c2VGb3JtIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3IiLCJ1c2VyIiwiYXV0aCIsInNlbmQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJkYXRhRm9ybSIsInNldERhdGFGb3JtIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbmluIiwidGhlbiIsInJlc3BvbnNlIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQ3ZCLE1BQU1DLElBQUksR0FBRyxRQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxxRUFBTyxFQUFwQjs7QUFGdUIsaUJBR3FCQyxrRUFBTyxDQUFDSCxJQUFELENBSDVCO0FBQUE7QUFBQSxNQUdoQkksWUFIZ0I7QUFBQSxNQUdGQyxZQUhFO0FBQUEsTUFHWUMsS0FIWjs7QUFJdkIsU0FDQyx3RUFDQyxnRkFERCxFQUVDLHVFQUNFTCxJQUFJLENBQUNNLElBQUwsR0FDQSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsd0JBREEsR0FHQSxnQkFKRixDQUZELEVBU0VELEtBQUssSUFBSUEsS0FUWCxFQVVDLHlFQUNDO0FBQU8sWUFBUSxFQUFFRCxZQUFqQjtBQUErQixRQUFJLEVBQUM7QUFBcEMsSUFERCxFQUVDO0FBQU8sWUFBUSxFQUFFQSxZQUFqQjtBQUErQixRQUFJLEVBQUM7QUFBcEMsSUFGRCxFQUdDO0FBQVEsV0FBTyxFQUFFRDtBQUFqQixjQUhELENBVkQsQ0FERDtBQWtCQSxDQXRCRDs7QUF3QmVOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBRWUseUVBQUFFLElBQUksRUFBSTtBQUN0QixNQUFNUSxJQUFJLEdBQUdOLHlEQUFPLEVBQXBCO0FBQ0EsTUFBSU8sSUFBSSxHQUFHLElBQVg7O0FBQ0EsTUFBSVQsSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDdEJTLFFBQUksR0FBRyxtQkFBUDtBQUNBLEdBRkQsTUFFTztBQUNOQSxRQUFJLEdBQUcsb0JBQVA7QUFDQTs7QUFQcUIsa0JBUVVDLHNEQUFRLENBQUM7QUFDeENDLFNBQUssRUFBRUYsSUFEaUM7QUFFeENHLFlBQVEsRUFBRSxRQUY4QjtBQUd4Q04sU0FBSyxFQUFFO0FBSGlDLEdBQUQsQ0FSbEI7QUFBQTtBQUFBLE1BUWZPLFFBUmU7QUFBQSxNQVFMQyxXQVJLOztBQWF0QixXQUFTVCxZQUFULENBQXNCVSxDQUF0QixFQUF5QjtBQUN4QkQsZUFBVyxtQkFBTUQsUUFBTixtRkFBaUJFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUExQixFQUFpQ0YsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQTFDLEdBQVg7QUFDQTs7QUFDRCxXQUFTZCxZQUFULENBQXNCVyxDQUF0QixFQUF5QjtBQUN4QkEsS0FBQyxDQUFDSSxjQUFGO0FBQ0FYLFFBQUksQ0FBQ1ksTUFBTCxDQUFZO0FBQUVQLGNBQVEsRUFBUkEsUUFBRjtBQUFZYixVQUFJLEVBQUpBO0FBQVosS0FBWixFQUFnQ3FCLElBQWhDLENBQXFDLFVBQUFDLFFBQVEsRUFBSTtBQUNoRCxVQUFJQSxRQUFKLEVBQWM7QUFDYlIsbUJBQVcsbUJBQU1ELFFBQU47QUFBZ0JQLGVBQUssRUFBRWdCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixDQUFoQjtBQUF2QixXQUFYO0FBQ0E7QUFDRCxLQUpEO0FBS0E7O0FBdkJxQixNQXdCZGpCLEtBeEJjLEdBd0JKTyxRQXhCSSxDQXdCZFAsS0F4QmM7QUF5QnRCLFNBQU8sQ0FBQ0YsWUFBRCxFQUFlQyxZQUFmLEVBQTZCQyxLQUE3QixDQUFQO0FBQ0EsQ0ExQkQsRTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDIiwiZmlsZSI6ImpzLzAuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIn4vdXNlSG9va3MvdXNlLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJ+L3VzZUhvb2tzL3VzZS1hdXRoLmpzXCI7XHJcblxyXG5jb25zdCBTaWduSW4gPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgdHlwZSA9IFwiY2xpZW50XCI7XHJcblx0Y29uc3QgYXNkZiA9IHVzZUF1dGgoKTtcclxuXHRjb25zdCBbaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGVycm9yXSA9IHVzZUZvcm0odHlwZSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMj5DbGllbnQ8L2gyPlxyXG5cdFx0XHQ8aDM+XHJcblx0XHRcdFx0e2FzZGYudXNlciA/IChcclxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5TZWRhbmcgTG9nIEluPC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XCJTZWRhbmcgTG9nIE91dFwiXHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9oMz5cclxuXHRcdFx0e2Vycm9yICYmIGVycm9yfVxyXG5cdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImVtYWlsXCIgLz5cclxuXHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+c3VibWl0PC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4vdXNlLWF1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHR5cGUgPT4ge1xyXG5cdGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XHJcblx0bGV0IHNlbmQgPSBudWxsO1xyXG5cdGlmICh0eXBlID09PSBcImNsaWVudFwiKSB7XHJcblx0XHRzZW5kID0gXCJjbGllbnRzQGdtYWlsLmNvbVwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzZW5kID0gXCJzdXBwb3J0c0BnbWFpbC5jb21cIjtcclxuXHR9XHJcblx0Y29uc3QgW2RhdGFGb3JtLCBzZXREYXRhRm9ybV0gPSB1c2VTdGF0ZSh7XHJcblx0XHRlbWFpbDogc2VuZCxcclxuXHRcdHBhc3N3b3JkOiBcInNlY3JldFwiLFxyXG5cdFx0ZXJyb3I6IFwiXCJcclxuXHR9KTtcclxuXHRmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG5cdFx0c2V0RGF0YUZvcm0oeyAuLi5kYXRhRm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGF1dGguc2lnbmluKHsgZGF0YUZvcm0sIHR5cGUgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdHNldERhdGFGb3JtKHsgLi4uZGF0YUZvcm0sIGVycm9yOiByZXNwb25zZS5lcnJvcnNbMF0gfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjb25zdCB7IGVycm9yIH0gPSBkYXRhRm9ybTtcclxuXHRyZXR1cm4gW2hhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBlcnJvcl07XHJcbn07XHJcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9