(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./client/components/Fild/fild.js":
/*!****************************************!*\
  !*** ./client/components/Fild/fild.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    id: name,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label));
});

/***/ }),

/***/ "./client/components/Fild/fildTextArea.js":
/*!************************************************!*\
  !*** ./client/components/Fild/fildTextArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var name = _ref.name,
      label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "base-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    id: name,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label));
});

/***/ }),

/***/ "./client/components/Modal/index.js":
/*!******************************************!*\
  !*** ./client/components/Modal/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tposition: fixed;\n\tbackground: white;\n\twidth: 60%;\n\theight: 300px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tbox-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px;\n\toverflow: hidden;\n\tbackground: rgb(255, 255, 255);\n\tborder: 1px solid rgb(190, 190, 190);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: hsla(360, 100%, 100%, 0.54);\n\tz-index: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Modal, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalMain, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", null, "Close")));
});
var Modal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ModalMain = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main(_templateObject2());

/***/ }),

/***/ "./client/pages/ClientPage/OpenTiket.js":
/*!**********************************************!*\
  !*** ./client/pages/ClientPage/OpenTiket.js ***!
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
/* harmony import */ var _components_Button_buttonLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/components/Button/buttonLogin */ "./client/components/Button/buttonLogin.js");
/* harmony import */ var _components_Fild_fild__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/Fild/fild */ "./client/components/Fild/fild.js");
/* harmony import */ var _components_Fild_fildTextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/Fild/fildTextArea */ "./client/components/Fild/fildTextArea.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/Modal */ "./client/components/Modal/index.js");
/* harmony import */ var _static_images_flex_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/static/images/flex.jpg */ "./client/static/images/flex.jpg");
/* harmony import */ var _static_images_flex_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_flex_jpg__WEBPACK_IMPORTED_MODULE_7__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\twidth: 70px;\n\thight: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tfloat: right;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\tpadding: 2rem 2.4rem;\n\tborder-radius: 8px;\n\tborder: none;\n\tmargin-bottom: 2rem;\n\tbox-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),\n\t\t0 1px 3px 1px rgba(60, 64, 67, 0.15);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fild_fild__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "a",
    label: "Perusahaan"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fild_fild__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "b",
    label: "Aplikasi"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "0"
  }, "Select car:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "1"
  }, "Audi"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "2"
  }, "BMW")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Fild_fildTextArea__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "d",
    label: "Deskription"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Asdf, {
    src: _static_images_flex_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BtnBox, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button_buttonLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tittle: "input"
  })));
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var BtnBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Asdf = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());

/***/ }),

/***/ "./client/static/images/flex.jpg":
/*!***************************************!*\
  !*** ./client/static/images/flex.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/flex.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9GaWxkL2ZpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRmlsZC9maWxkVGV4dEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL0NsaWVudFBhZ2UvT3BlblRpa2V0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9zdGF0aWMvaW1hZ2VzL2ZsZXguanBnIl0sIm5hbWVzIjpbIm5hbWUiLCJsYWJlbCIsIk1vZGFsIiwic3R5bGVkIiwiZGl2IiwiTW9kYWxNYWluIiwibWFpbiIsImxvZ28iLCJCb3giLCJCdG5Cb3giLCJBc2RmIiwiaW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSwrRUFBbUI7QUFBQSxNQUFqQkEsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2pDLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFFRCxJQUF2QjtBQUE2QixZQUFRO0FBQXJDLElBREQsRUFFQztBQUFPLFdBQU8sRUFBRUE7QUFBaEIsS0FBd0JDLEtBQXhCLENBRkQsQ0FERDtBQU1BLENBUEQsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFZSwrRUFBbUI7QUFBQSxNQUFqQkQsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2pDLFNBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNDO0FBQVUsUUFBSSxFQUFDLE1BQWY7QUFBc0IsTUFBRSxFQUFFRCxJQUExQjtBQUFnQyxZQUFRO0FBQXhDLElBREQsRUFFQztBQUFPLFdBQU8sRUFBRUE7QUFBaEIsS0FBd0JDLEtBQXhCLENBRkQsQ0FERDtBQU1BLENBUEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFZSwyRUFBTTtBQUNwQixTQUNDLDJEQUFDLEtBQUQsUUFDQywyREFBQyxTQUFELFFBQ0MsbUZBREQsQ0FERCxDQUREO0FBT0EsQ0FSRDtBQVVBLElBQU1DLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBWDtBQVVBLElBQU1DLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0csSUFBVixvQkFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsMkVBQU07QUFDcEIsU0FDQyx3RUFDQywyREFBQyxHQUFELFFBQ0MseUVBQ0MsMkRBQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUssRUFBQztBQUFyQixJQURELEVBRUMsMkRBQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUssRUFBQztBQUFyQixJQUZELEVBR0MsMkVBQ0M7QUFBUSxTQUFLLEVBQUM7QUFBZCxtQkFERCxFQUVDO0FBQVEsU0FBSyxFQUFDO0FBQWQsWUFGRCxFQUdDO0FBQVEsU0FBSyxFQUFDO0FBQWQsV0FIRCxDQUhELEVBUUMsMkRBQUMscUVBQUQ7QUFBVSxRQUFJLEVBQUMsR0FBZjtBQUFtQixTQUFLLEVBQUM7QUFBekIsSUFSRCxDQURELEVBV0MsMkRBQUMsSUFBRDtBQUFNLE9BQUcsRUFBRUMsOERBQUlBO0FBQWYsSUFYRCxDQURELEVBY0MsMkRBQUMsTUFBRCxRQUNDLDJEQUFDLHNFQUFEO0FBQUssVUFBTSxFQUFDO0FBQVosSUFERCxDQWRELENBREQ7QUFvQkEsQ0FyQkQ7QUF1QkEsSUFBTUMsR0FBRyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG1CQUFUO0FBU0EsSUFBTUssTUFBTSxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO0FBR0EsSUFBTU0sSUFBSSxHQUFHUCx5REFBTSxDQUFDUSxHQUFWLG9CQUFWLEM7Ozs7Ozs7Ozs7O0FDOUNBLG1DIiwiZmlsZSI6ImpzLzEuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtuYW1lLCBsYWJlbH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiYXNlLWZpZWxkXCI+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPXtuYW1lfSByZXF1aXJlZCAvPlxyXG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj17bmFtZX0gPntsYWJlbH08L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtuYW1lLCBsYWJlbH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiYXNlLWZpZWxkXCI+XHJcblx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGlkPXtuYW1lfSByZXF1aXJlZC8+XHJcblx0XHRcdDxsYWJlbCBodG1sRm9yPXtuYW1lfSA+e2xhYmVsfTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1vZGFsPlxyXG5cdFx0XHQ8TW9kYWxNYWluPlxyXG5cdFx0XHRcdDxidXR0b24+Q2xvc2U8L2J1dHRvbj5cclxuXHRcdFx0PC9Nb2RhbE1haW4+XHJcblx0XHQ8L01vZGFsPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBNb2RhbCA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDM2MCwgMTAwJSwgMTAwJSwgMC41NCk7XHJcblx0ei1pbmRleDogMTAwMDtcclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsTWFpbiA9IHN0eWxlZC5tYWluYFxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHR3aWR0aDogNjAlO1xyXG5cdGhlaWdodDogMzAwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNHB4IDE2cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbkxvZ2luXCI7XHJcbmltcG9ydCBGaWxkIGZyb20gXCJ+L2NvbXBvbmVudHMvRmlsZC9maWxkXCI7XHJcbmltcG9ydCBGaWxkVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbGQvZmlsZFRleHRBcmVhXCI7XHJcbmltcG9ydCBCdG4gZnJvbSBcIn4vY29tcG9uZW50cy9CdXR0b24vYnV0dG9uTG9naW5cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJ+L2NvbXBvbmVudHMvTW9kYWxcIjtcclxuXHJcbmltcG9ydCBsb2dvIGZyb20gXCJ+L3N0YXRpYy9pbWFnZXMvZmxleC5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdDxGaWxkIG5hbWU9XCJhXCIgbGFiZWw9XCJQZXJ1c2FoYWFuXCIgLz5cclxuXHRcdFx0XHRcdDxGaWxkIG5hbWU9XCJiXCIgbGFiZWw9XCJBcGxpa2FzaVwiIC8+XHJcblx0XHRcdFx0XHQ8c2VsZWN0PlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMFwiPlNlbGVjdCBjYXI6PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCIxXCI+QXVkaTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiMlwiPkJNVzwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0XHQ8RmlsZFRleHQgbmFtZT1cImRcIiBsYWJlbD1cIkRlc2tyaXB0aW9uXCIgLz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0PEFzZGYgc3JjPXtsb2dvfSAvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdFx0PEJ0bkJveD5cclxuXHRcdFx0XHQ8QnRuIHRpdHRsZT1cImlucHV0XCIgLz5cclxuXHRcdFx0PC9CdG5Cb3g+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuXHRwYWRkaW5nOiAycmVtIDIuNHJlbTtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMpLFxyXG5cdFx0MCAxcHggM3B4IDFweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG5gO1xyXG5cclxuY29uc3QgQnRuQm94ID0gc3R5bGVkLmRpdmBcclxuXHRmbG9hdDogcmlnaHQ7XHJcbmA7XHJcbmNvbnN0IEFzZGYgPSBzdHlsZWQuaW1nYFxyXG5cdHdpZHRoOiA3MHB4O1xyXG5cdGhpZ2h0OiBhdXRvO1xyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2ZsZXguanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==