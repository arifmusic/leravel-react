(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/pages/ClientPage/dashboard.js":
/*!**********************************************!*\
  !*** ./client/pages/ClientPage/dashboard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Button_buttonLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Button/buttonLogin */ "./client/components/Button/buttonLogin.js");
/* harmony import */ var _static_images_open_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/static/images/open.png */ "./client/static/images/open.png");
/* harmony import */ var _static_images_open_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_open_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_closed_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/static/images/closed.png */ "./client/static/images/closed.png");
/* harmony import */ var _static_images_closed_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_closed_png__WEBPACK_IMPORTED_MODULE_6__);


function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tcolor: #ccc;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tpadding: 1rem;\n\tcolor: blue;\n\tborder-radius: 0 0 7px 7px;\n\tborder-bottom: 1px solid #c6c6c6;\n\tborder-right: 1px solid #c6c6c6;\n\tborder-left: 1px solid #c6c6c6;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\twidth: 15%;\n\theight: auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tmargin-right: 1.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tborder: 1px solid #c6c6c6;\n\tpadding: 2rem;\n\tdisplay: flex;\n\tborder-radius: 7px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 180px;\n\tcursor: pointer;\n\tborder: 2px dashed rgba(0, 0, 0, 0.12);\n\t&:hover {\n\t\tbackground-color: rgba(26, 115, 232, 0.039);\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tcolor: #1a73e8;\n\tfont-weight: bold;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tborder: 1px solid #c6c6c6;\n\tpadding: 2rem;\n\tdisplay: flex;\n\tborder-radius: 7px 7px 0 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\twidth: 100%;\n\tmargin: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardBox, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewDetail, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Privacy & personalization"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "See the data in your Google Account and choose what activity is saved to personalize your Google experience")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewIcon, {
    src: _static_images_open_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "open tiket"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BotomLink, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(One, null, "Detail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Status, null, "closed"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CardBox, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/client-open-tiket"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card3, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(One, null, "+ Open Tiket")))));
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CardBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var One = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject4());
var Card3 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var PreviewDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var PreviewIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject7());
var BotomLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
var Status = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h4(_templateObject9());

/***/ }),

/***/ "./client/static/images/closed.png":
/*!*****************************************!*\
  !*** ./client/static/images/closed.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/closed.png";

/***/ }),

/***/ "./client/static/images/open.png":
/*!***************************************!*\
  !*** ./client/static/images/open.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/open.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvQ2xpZW50UGFnZS9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRpYy9pbWFnZXMvY2xvc2VkLnBuZyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGljL2ltYWdlcy9vcGVuLnBuZyJdLCJuYW1lcyI6WyJvcGVuIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZEJveCIsIkNhcmQiLCJPbmUiLCJhIiwiQ2FyZDMiLCJQcmV2aWV3RGV0YWlsIiwiUHJldmlld0ljb24iLCJpbWciLCJCb3RvbUxpbmsiLCJTdGF0dXMiLCJoNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsMkVBQU07QUFDcEIsU0FDQywyREFBQyxTQUFELFFBQ0MsMkRBQUMsT0FBRCxRQUNDLDJEQUFDLElBQUQsUUFDQywyREFBQyxhQUFELFFBQ0MsbUdBREQsRUFDbUMsc0VBRG5DLEVBRUMsb0xBRkQsQ0FERCxFQVNDLDJEQUFDLFdBQUQ7QUFBYSxPQUFHLEVBQUVBLDhEQUFsQjtBQUF3QixPQUFHLEVBQUM7QUFBNUIsSUFURCxDQURELEVBWUMsMkRBQUMsU0FBRCxRQUNDLDJEQUFDLEdBQUQsaUJBREQsRUFFQywyREFBQyxNQUFELGlCQUZELENBWkQsQ0FERCxFQWtCQywyREFBQyxPQUFELFFBQ0MsMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxLQUNDLDJEQUFDLEtBQUQsUUFDQywyREFBQyxHQUFELHVCQURELENBREQsQ0FERCxDQWxCRCxDQUREO0FBNEJBLENBN0JEO0FBK0JBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQU1BLElBQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtBQUlBLElBQU1FLElBQUksR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBVjtBQU9BLElBQU1HLEdBQUcsR0FBR0oseURBQU0sQ0FBQ0ssQ0FBVixvQkFBVDtBQUtBLElBQU1DLEtBQUssR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtBQWdCQSxJQUFNTSxhQUFhLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO0FBSUEsSUFBTU8sV0FBVyxHQUFHUix5REFBTSxDQUFDUyxHQUFWLG9CQUFqQjtBQUtBLElBQU1DLFNBQVMsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtBQVlBLElBQU1VLE1BQU0sR0FBR1gseURBQU0sQ0FBQ1ksRUFBVixvQkFBWixDOzs7Ozs7Ozs7OztBQ25HQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJqcy8wLmFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbkxvZ2luXCI7XHJcblxyXG5pbXBvcnQgb3BlbiBmcm9tIFwifi9zdGF0aWMvaW1hZ2VzL29wZW4ucG5nXCI7XHJcbmltcG9ydCBjbG9zZWQgZnJvbSBcIn4vc3RhdGljL2ltYWdlcy9jbG9zZWQucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250YWluZXI+XHJcblx0XHRcdDxDYXJkQm94PlxyXG5cdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0PFByZXZpZXdEZXRhaWw+XHJcblx0XHRcdFx0XHRcdDxoMz5Qcml2YWN5ICYgcGVyc29uYWxpemF0aW9uPC9oMz48YnIvPlxyXG5cdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRTZWUgdGhlIGRhdGEgaW4geW91ciBHb29nbGUgQWNjb3VudCBhbmQgY2hvb3NlIHdoYXRcclxuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eSBpcyBzYXZlZCB0byBwZXJzb25hbGl6ZSB5b3VyIEdvb2dsZVxyXG5cdFx0XHRcdFx0XHRcdGV4cGVyaWVuY2VcclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PC9QcmV2aWV3RGV0YWlsPlxyXG5cdFx0XHRcdFx0PFByZXZpZXdJY29uIHNyYz17b3Blbn0gYWx0PVwib3BlbiB0aWtldFwiIC8+XHJcblx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdDxCb3RvbUxpbms+XHJcblx0XHRcdFx0XHQ8T25lPkRldGFpbDwvT25lPlxyXG5cdFx0XHRcdFx0PFN0YXR1cz5jbG9zZWQ8L1N0YXR1cz5cclxuXHRcdFx0XHQ8L0JvdG9tTGluaz5cclxuXHRcdFx0PC9DYXJkQm94PlxyXG5cdFx0XHQ8Q2FyZEJveD5cclxuXHRcdFx0XHQ8TGluayB0bz1cIi9jbGllbnQtb3Blbi10aWtldFwiPlxyXG5cdFx0XHRcdFx0PENhcmQzPlxyXG5cdFx0XHRcdFx0XHQ8T25lPisgT3BlbiBUaWtldDwvT25lPlxyXG5cdFx0XHRcdFx0PC9DYXJkMz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvQ2FyZEJveD5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRCb3ggPSBzdHlsZWQuZGl2YFxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMXJlbTtcclxuYDtcclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcclxuXHRwYWRkaW5nOiAycmVtO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Ym9yZGVyLXJhZGl1czogN3B4IDdweCAwIDA7XHJcbmA7XHJcblxyXG5jb25zdCBPbmUgPSBzdHlsZWQuYWBcclxuXHRjb2xvcjogIzFhNzNlODtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmNvbnN0IENhcmQzID0gc3R5bGVkLmRpdmBcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTgwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cdCY6aG92ZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTE1LCAyMzIsIDAuMDM5KTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBQcmV2aWV3RGV0YWlsID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFByZXZpZXdJY29uID0gc3R5bGVkLmltZ2BcclxuXHR3aWR0aDogMTUlO1xyXG5cdGhlaWdodDogYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IEJvdG9tTGluayA9IHN0eWxlZC5kaXZgXHJcblx0cGFkZGluZzogMXJlbTtcclxuXHRjb2xvcjogYmx1ZTtcclxuXHRib3JkZXItcmFkaXVzOiAwIDAgN3B4IDdweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M2YzZjNjtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2M2YzZjNjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3RhdHVzID0gc3R5bGVkLmg0YFxyXG5cdGNvbG9yOiAjY2NjO1xyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2Nsb3NlZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL29wZW4ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==