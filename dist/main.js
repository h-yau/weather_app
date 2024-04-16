/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/components/dataTable.js":
/*!************************************************!*\
  !*** ./src/javascript/components/dataTable.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataTableDiv: () => (/* binding */ dataTableDiv)
/* harmony export */ });
var dataTableDiv = function dataTableDiv() {
  var dataTable = document.createElement('div');
  dataTable.dataset.dataId = 'dataTable';
  return dataTable;
};

/***/ }),

/***/ "./src/javascript/components/layout.js":
/*!*********************************************!*\
  !*** ./src/javascript/components/layout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupPageElements: () => (/* binding */ setupPageElements)
/* harmony export */ });
/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBox */ "./src/javascript/components/searchBox.js");
/* harmony import */ var _submitButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitButton */ "./src/javascript/components/submitButton.js");
/* harmony import */ var _services_getCurrentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getCurrentWeather */ "./src/javascript/services/getCurrentWeather.js");



var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var inputElement = e.target.querySelector('input[type="text"]');
  var inputtedCity = inputElement.value;
  inputElement.value = '';
  (0,_services_getCurrentWeather__WEBPACK_IMPORTED_MODULE_2__.getCurrentWeather)(inputtedCity);
};
var form = function form() {
  var formElement = document.createElement('form');
  formElement.appendChild((0,_searchBox__WEBPACK_IMPORTED_MODULE_0__.searchBox)());
  formElement.appendChild((0,_submitButton__WEBPACK_IMPORTED_MODULE_1__.submitButton)());
  formElement.addEventListener('submit', handleFormSubmit);
  return formElement;
};
var setupPageElements = function setupPageElements() {
  var bodyElement = document.querySelector('body');
  bodyElement.appendChild(form());
};

/***/ }),

/***/ "./src/javascript/components/searchBox.js":
/*!************************************************!*\
  !*** ./src/javascript/components/searchBox.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchBox: () => (/* binding */ searchBox)
/* harmony export */ });
var searchBox = function searchBox() {
  var searchBoxElement = document.createElement('input');
  searchBoxElement.type = 'text';
  searchBoxElement.placeholder = 'Enter location';
  return searchBoxElement;
};

/***/ }),

/***/ "./src/javascript/components/submitButton.js":
/*!***************************************************!*\
  !*** ./src/javascript/components/submitButton.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submitButton: () => (/* binding */ submitButton)
/* harmony export */ });
var submitButton = function submitButton() {
  var buttonElement = document.createElement('button');
  buttonElement.type = 'submit';
  buttonElement.textContent = 'Submit';
  return buttonElement;
};

/***/ }),

/***/ "./src/javascript/services/getCurrentWeather.js":
/*!******************************************************!*\
  !*** ./src/javascript/services/getCurrentWeather.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentWeather: () => (/* binding */ getCurrentWeather)
/* harmony export */ });
/* harmony import */ var _utils_printData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/printData */ "./src/javascript/utils/printData.js");
/* harmony import */ var _utils_apiKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/apiKey */ "./src/javascript/utils/apiKey.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getCurrentWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var url, weatherData, weatherDataJson;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.weatherapi.com/v1/current.json?key=".concat(_utils_apiKey__WEBPACK_IMPORTED_MODULE_1__.apiKey, "&q=").concat(city);
          _context.prev = 1;
          _context.next = 4;
          return fetch(url, {
            mode: 'cors'
          });
        case 4:
          weatherData = _context.sent;
          if (weatherData.ok) {
            _context.next = 7;
            break;
          }
          throw new Error(weatherData.message);
        case 7:
          _context.next = 9;
          return weatherData.json();
        case 9:
          weatherDataJson = _context.sent;
          (0,_utils_printData__WEBPACK_IMPORTED_MODULE_0__.printData)(weatherDataJson);
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error('Error: ', _context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
  }));
  return function getCurrentWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/javascript/utils/apiKey.js":
/*!****************************************!*\
  !*** ./src/javascript/utils/apiKey.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiKey: () => (/* binding */ apiKey)
/* harmony export */ });
var apiKey = 'a4041b9ccd574aa5ac6231619241204';

/***/ }),

/***/ "./src/javascript/utils/clearElement.js":
/*!**********************************************!*\
  !*** ./src/javascript/utils/clearElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearElement: () => (/* binding */ clearElement)
/* harmony export */ });
var clearElement = function clearElement(htmlElement) {
  while (htmlElement.lastElementChild) {
    htmlElement.removeChild(htmlElement.lastElementChild);
  }
};

/***/ }),

/***/ "./src/javascript/utils/dataCell.js":
/*!******************************************!*\
  !*** ./src/javascript/utils/dataCell.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataCell: () => (/* binding */ dataCell)
/* harmony export */ });
var dataCell = function dataCell(weatherDataJsonInnerLayer, key) {
  var value = weatherDataJsonInnerLayer[key];
  var div = document.createElement('div');
  div.textContent = "".concat(key, ": ").concat(value);
  return div;
};

/***/ }),

/***/ "./src/javascript/utils/printData.js":
/*!*******************************************!*\
  !*** ./src/javascript/utils/printData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printData: () => (/* binding */ printData)
/* harmony export */ });
/* harmony import */ var _clearElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearElement */ "./src/javascript/utils/clearElement.js");
/* harmony import */ var _components_dataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataTable */ "./src/javascript/components/dataTable.js");
/* harmony import */ var _processWeatherDataJson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processWeatherDataJson */ "./src/javascript/utils/processWeatherDataJson.js");



var printData = function printData(weatherDataJson) {
  var body = document.querySelector('body');
  var dataTable = document.querySelector('div[data-data-id="dataTable"]');
  if (dataTable == null || dataTable == undefined) {
    dataTable = (0,_components_dataTable__WEBPACK_IMPORTED_MODULE_1__.dataTableDiv)();
    body.appendChild(dataTable);
  } else {
    (0,_clearElement__WEBPACK_IMPORTED_MODULE_0__.clearElement)(dataTable);
  }
  dataTable.appendChild((0,_processWeatherDataJson__WEBPACK_IMPORTED_MODULE_2__.locationInfo)(weatherDataJson));
  dataTable.appendChild((0,_processWeatherDataJson__WEBPACK_IMPORTED_MODULE_2__.weatherInfo)(weatherDataJson));
};

/***/ }),

/***/ "./src/javascript/utils/processWeatherDataJson.js":
/*!********************************************************!*\
  !*** ./src/javascript/utils/processWeatherDataJson.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locationInfo: () => (/* binding */ locationInfo),
/* harmony export */   weatherInfo: () => (/* binding */ weatherInfo)
/* harmony export */ });
/* harmony import */ var _dataCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataCell */ "./src/javascript/utils/dataCell.js");

var locationInfo = function locationInfo(weatherDataJson) {
  var wrapperDiv = document.createElement('div');
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.location, 'name'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.location, 'region'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.location, 'country'));
  return wrapperDiv;
};
var weatherInfo = function weatherInfo(weatherDataJson) {
  var wrapperDiv = document.createElement('div');
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'temp_c'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'temp_f'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'wind_mph'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'wind_kph'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'wind_degree'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'wind_dir'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'humidity'));
  wrapperDiv.appendChild((0,_dataCell__WEBPACK_IMPORTED_MODULE_0__.dataCell)(weatherDataJson.current, 'cloud'));
  return wrapperDiv;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _javascript_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/components/layout */ "./src/javascript/components/layout.js");


(0,_javascript_components_layout__WEBPACK_IMPORTED_MODULE_1__.setupPageElements)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhDO0FBRW5FeEosZ0ZBQWlCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvZGF0YVRhYmxlLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9zZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvc3VibWl0QnV0dG9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvamF2YXNjcmlwdC9zZXJ2aWNlcy9nZXRDdXJyZW50V2VhdGhlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL2phdmFzY3JpcHQvdXRpbHMvYXBpS2V5LmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvamF2YXNjcmlwdC91dGlscy9jbGVhckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9qYXZhc2NyaXB0L3V0aWxzL2RhdGFDZWxsLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvamF2YXNjcmlwdC91dGlscy9wcmludERhdGEuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9qYXZhc2NyaXB0L3V0aWxzL3Byb2Nlc3NXZWF0aGVyRGF0YUpzb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGVfcmVwby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlX3JlcG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZV9yZXBvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkYXRhVGFibGVEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkYXRhVGFibGUuZGF0YXNldC5kYXRhSWQgPSAnZGF0YVRhYmxlJztcbiAgcmV0dXJuIGRhdGFUYWJsZTtcbn07XG4iLCJpbXBvcnQgeyBzZWFyY2hCb3ggfSBmcm9tICcuL3NlYXJjaEJveCc7XG5pbXBvcnQgeyBzdWJtaXRCdXR0b24gfSBmcm9tICcuL3N1Ym1pdEJ1dHRvbic7XG5pbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciB9IGZyb20gJy4uL3NlcnZpY2VzL2dldEN1cnJlbnRXZWF0aGVyJztcblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcbiAgY29uc3QgaW5wdXR0ZWRDaXR5ID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICBpbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcblxuICBnZXRDdXJyZW50V2VhdGhlcihpbnB1dHRlZENpdHkpO1xufTtcblxuY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKHNlYXJjaEJveCgpKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKCkpO1xuICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcbiAgcmV0dXJuIGZvcm1FbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwUGFnZUVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKCkpO1xufTtcbiIsImV4cG9ydCBjb25zdCBzZWFyY2hCb3ggPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hCb3hFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaEJveEVsZW1lbnQucGxhY2Vob2xkZXIgPSAnRW50ZXIgbG9jYXRpb24nO1xuICByZXR1cm4gc2VhcmNoQm94RWxlbWVudDtcbn07XG4iLCJleHBvcnQgY29uc3Qgc3VibWl0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbkVsZW1lbnQudHlwZSA9ICdzdWJtaXQnO1xuICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gIHJldHVybiBidXR0b25FbGVtZW50O1xufTtcbiIsImltcG9ydCB7IHByaW50RGF0YSB9IGZyb20gJy4uL3V0aWxzL3ByaW50RGF0YSc7XG5pbXBvcnQgeyBhcGlLZXkgfSBmcm9tICcuLi91dGlscy9hcGlLZXknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFdlYXRoZXIgPSBhc3luYyAoY2l0eSkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHl9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgIGlmICghd2VhdGhlckRhdGEub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih3ZWF0aGVyRGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3Qgd2VhdGhlckRhdGFKc29uID0gYXdhaXQgd2VhdGhlckRhdGEuanNvbigpO1xuICAgIHByaW50RGF0YSh3ZWF0aGVyRGF0YUpzb24pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnJvcik7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgYXBpS2V5ID0gJ2E0MDQxYjljY2Q1NzRhYTVhYzYyMzE2MTkyNDEyMDQnO1xuIiwiZXhwb3J0IGNvbnN0IGNsZWFyRWxlbWVudCA9IChodG1sRWxlbWVudCkgPT4ge1xuICB3aGlsZSAoaHRtbEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGh0bWxFbGVtZW50LnJlbW92ZUNoaWxkKGh0bWxFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGRhdGFDZWxsID0gKHdlYXRoZXJEYXRhSnNvbklubmVyTGF5ZXIsIGtleSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IHdlYXRoZXJEYXRhSnNvbklubmVyTGF5ZXJba2V5XTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi50ZXh0Q29udGVudCA9IGAke2tleX06ICR7dmFsdWV9YDtcbiAgcmV0dXJuIGRpdjtcbn07XG4iLCJpbXBvcnQgeyBjbGVhckVsZW1lbnQgfSBmcm9tICcuL2NsZWFyRWxlbWVudCc7XG5pbXBvcnQgeyBkYXRhVGFibGVEaXYgfSBmcm9tICcuLi9jb21wb25lbnRzL2RhdGFUYWJsZSc7XG5pbXBvcnQgeyBsb2NhdGlvbkluZm8sIHdlYXRoZXJJbmZvIH0gZnJvbSAnLi9wcm9jZXNzV2VhdGhlckRhdGFKc29uJztcblxuZXhwb3J0IGNvbnN0IHByaW50RGF0YSA9ICh3ZWF0aGVyRGF0YUpzb24pID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBsZXQgZGF0YVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtZGF0YS1pZD1cImRhdGFUYWJsZVwiXScpO1xuXG4gIGlmIChkYXRhVGFibGUgPT0gbnVsbCB8fCBkYXRhVGFibGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgZGF0YVRhYmxlID0gZGF0YVRhYmxlRGl2KCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkYXRhVGFibGUpO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyRWxlbWVudChkYXRhVGFibGUpO1xuICB9XG5cbiAgZGF0YVRhYmxlLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mbyh3ZWF0aGVyRGF0YUpzb24pKTtcbiAgZGF0YVRhYmxlLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvKHdlYXRoZXJEYXRhSnNvbikpO1xufTtcbiIsImltcG9ydCB7IGRhdGFDZWxsIH0gZnJvbSAnLi9kYXRhQ2VsbCc7XG5cbmNvbnN0IGxvY2F0aW9uSW5mbyA9ICh3ZWF0aGVyRGF0YUpzb24pID0+IHtcbiAgY29uc3Qgd3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKGRhdGFDZWxsKHdlYXRoZXJEYXRhSnNvbi5sb2NhdGlvbiwgJ25hbWUnKSk7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGF0YUNlbGwod2VhdGhlckRhdGFKc29uLmxvY2F0aW9uLCAncmVnaW9uJykpO1xuICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKGRhdGFDZWxsKHdlYXRoZXJEYXRhSnNvbi5sb2NhdGlvbiwgJ2NvdW50cnknKSk7XG4gIHJldHVybiB3cmFwcGVyRGl2O1xufTtcblxuY29uc3Qgd2VhdGhlckluZm8gPSAod2VhdGhlckRhdGFKc29uKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZChkYXRhQ2VsbCh3ZWF0aGVyRGF0YUpzb24uY3VycmVudCwgJ3RlbXBfYycpKTtcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZChkYXRhQ2VsbCh3ZWF0aGVyRGF0YUpzb24uY3VycmVudCwgJ3RlbXBfZicpKTtcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZChkYXRhQ2VsbCh3ZWF0aGVyRGF0YUpzb24uY3VycmVudCwgJ3dpbmRfbXBoJykpO1xuICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKGRhdGFDZWxsKHdlYXRoZXJEYXRhSnNvbi5jdXJyZW50LCAnd2luZF9rcGgnKSk7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGF0YUNlbGwod2VhdGhlckRhdGFKc29uLmN1cnJlbnQsICd3aW5kX2RlZ3JlZScpKTtcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZChkYXRhQ2VsbCh3ZWF0aGVyRGF0YUpzb24uY3VycmVudCwgJ3dpbmRfZGlyJykpO1xuICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKGRhdGFDZWxsKHdlYXRoZXJEYXRhSnNvbi5jdXJyZW50LCAnaHVtaWRpdHknKSk7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQoZGF0YUNlbGwod2VhdGhlckRhdGFKc29uLmN1cnJlbnQsICdjbG91ZCcpKTtcbiAgcmV0dXJuIHdyYXBwZXJEaXY7XG59O1xuXG5leHBvcnQgeyBsb2NhdGlvbkluZm8sIHdlYXRoZXJJbmZvIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgc2V0dXBQYWdlRWxlbWVudHMgfSBmcm9tICcuL2phdmFzY3JpcHQvY29tcG9uZW50cy9sYXlvdXQnO1xuXG5zZXR1cFBhZ2VFbGVtZW50cygpO1xuIl0sIm5hbWVzIjpbImRhdGFUYWJsZURpdiIsImRhdGFUYWJsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJkYXRhSWQiLCJzZWFyY2hCb3giLCJzdWJtaXRCdXR0b24iLCJnZXRDdXJyZW50V2VhdGhlciIsImhhbmRsZUZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEVsZW1lbnQiLCJ0YXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXR0ZWRDaXR5IiwidmFsdWUiLCJmb3JtIiwiZm9ybUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXR1cFBhZ2VFbGVtZW50cyIsImJvZHlFbGVtZW50Iiwic2VhcmNoQm94RWxlbWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbkVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJwcmludERhdGEiLCJhcGlLZXkiLCJfcmVmIiwiX2NhbGxlZSIsImNpdHkiLCJ1cmwiLCJ3ZWF0aGVyRGF0YSIsIndlYXRoZXJEYXRhSnNvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjb25jYXQiLCJmZXRjaCIsIm1vZGUiLCJvayIsIm1lc3NhZ2UiLCJqc29uIiwidDAiLCJjb25zb2xlIiwiX3giLCJjbGVhckVsZW1lbnQiLCJodG1sRWxlbWVudCIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImRhdGFDZWxsIiwid2VhdGhlckRhdGFKc29uSW5uZXJMYXllciIsImRpdiIsImxvY2F0aW9uSW5mbyIsIndlYXRoZXJJbmZvIiwiYm9keSIsIndyYXBwZXJEaXYiLCJsb2NhdGlvbiIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9