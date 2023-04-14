(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\n__webpack_require__(/*! @dcloudio/uni-stat/dist/uni-cloud-stat.es.js */ 57);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 80));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 87));\nvar _commBnsConfig = _interopRequireDefault(__webpack_require__(/*! ./commBns/commBnsConfig.js */ 23));\nvar _commBnsUniHttpRequest = _interopRequireDefault(__webpack_require__(/*! commBns/commBnsUniHttpRequest.js */ 22));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 60));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$store = _store.default;\n_vue.default.prototype.$adpid = \"1111111111\";\n_vue.default.prototype.$backgroundAudioData = {\n  playing: false,\n  playTime: 0,\n  formatedPlayTime: '00:00:00'\n};\n_vue.default.prototype.commBnsConfig = _commBnsConfig.default;\n_vue.default.prototype.commBnsUniHttpRequest = _commBnsUniHttpRequest.default;\n_vue.default.prototype.$token = {\n  'value': ''\n};\n_vue.default.prototype.$uid = {\n  'value': ''\n};\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({\n  store: _store.default\n}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwicHJvdG90eXBlIiwiJHN0b3JlIiwic3RvcmUiLCIkYWRwaWQiLCIkYmFja2dyb3VuZEF1ZGlvRGF0YSIsInBsYXlpbmciLCJwbGF5VGltZSIsImZvcm1hdGVkUGxheVRpbWUiLCJjb21tQm5zQ29uZmlnIiwiY29tbUJuc1VuaUh0dHBSZXF1ZXN0IiwiJHRva2VuIiwiJHVpZCIsIkFwcCIsIm1wVHlwZSIsImFwcCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQW1CO0FBQXNEO0FBQ3pFO0FBQ0E7QUFDQTtBQUdBO0FBQXFCO0FBQUE7QUFDckJBLFlBQUcsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsS0FBSztBQUNoQ0YsWUFBRyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sR0FBR0MsY0FBSztBQUM1QkwsWUFBRyxDQUFDRyxTQUFTLENBQUNHLE1BQU0sR0FBRyxZQUFZO0FBQ25DTixZQUFHLENBQUNHLFNBQVMsQ0FBQ0ksb0JBQW9CLEdBQUc7RUFDcENDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLGdCQUFnQixFQUFFO0FBQ25CLENBQUM7QUFDRFYsWUFBRyxDQUFDRyxTQUFTLENBQUNRLGFBQWEsR0FBR0Esc0JBQWE7QUFDM0NYLFlBQUcsQ0FBQ0csU0FBUyxDQUFDUyxxQkFBcUIsR0FBQ0EsOEJBQXFCO0FBQ3pEWixZQUFHLENBQUNHLFNBQVMsQ0FBQ1UsTUFBTSxHQUFFO0VBQUMsT0FBTyxFQUFDO0FBQUUsQ0FBQztBQUNsQ2IsWUFBRyxDQUFDRyxTQUFTLENBQUNXLElBQUksR0FBRTtFQUFDLE9BQU8sRUFBQztBQUFFLENBQUM7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlqQixZQUFHO0VBQ2xCSyxLQUFLLEVBQUxBO0FBQUssR0FDRlUsWUFBRyxFQUNMO0FBQ0ZFLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC91bmktY2xvdWQtc3RhdC5lcy5qcyc7aW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBjb21tQm5zQ29uZmlnIGZyb20gXCIuL2NvbW1CbnMvY29tbUJuc0NvbmZpZy5qc1wiO1xyXG5pbXBvcnQgY29tbUJuc1VuaUh0dHBSZXF1ZXN0IGZyb20gJ2NvbW1CbnMvY29tbUJuc1VuaUh0dHBSZXF1ZXN0LmpzJ1xyXG5cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlXHJcblZ1ZS5wcm90b3R5cGUuJGFkcGlkID0gXCIxMTExMTExMTExXCJcclxuVnVlLnByb3RvdHlwZS4kYmFja2dyb3VuZEF1ZGlvRGF0YSA9IHtcclxuXHRwbGF5aW5nOiBmYWxzZSxcclxuXHRwbGF5VGltZTogMCxcclxuXHRmb3JtYXRlZFBsYXlUaW1lOiAnMDA6MDA6MDAnXHJcbn1cclxuVnVlLnByb3RvdHlwZS5jb21tQm5zQ29uZmlnID0gY29tbUJuc0NvbmZpZztcclxuVnVlLnByb3RvdHlwZS5jb21tQm5zVW5pSHR0cFJlcXVlc3Q9Y29tbUJuc1VuaUh0dHBSZXF1ZXN0O1xyXG5WdWUucHJvdG90eXBlLiR0b2tlbj0geyd2YWx1ZSc6Jyd9O1xyXG5WdWUucHJvdG90eXBlLiR1aWQ9IHsndmFsdWUnOicnfTtcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdHN0b3JlLFxyXG5cdC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!*************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/login/login', function () {
  return Vue.extend(__webpack_require__(/*! pages/login/login/login.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!******************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages/login/login/login.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=75789578&mpType=page */ 8);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 56);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/login/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1Nzg5NTc4Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW4vbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages/login/login/login.vue?vue&type=template&id=75789578&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=75789578&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_75789578_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages/login/login/login.vue?vue&type=template&id=75789578&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", {
      staticClass: _vm._$s(1, "sc", "background1"),
      attrs: { _i: 1 },
    }),
    _c("view", {
      staticClass: _vm._$s(2, "sc", "background2"),
      attrs: { _i: 2 },
    }),
    _c("view", {
      staticClass: _vm._$s(3, "sc", "background3"),
      attrs: { _i: 3 },
    }),
    _c("view", {
      staticClass: _vm._$s(4, "sc", "background4"),
      attrs: { _i: 4 },
    }),
    _c("view", {
      staticClass: _vm._$s(5, "sc", "background5"),
      attrs: { _i: 5 },
    }),
    _c("view", { staticClass: _vm._$s(6, "sc", "content"), attrs: { _i: 6 } }, [
      _c("view", [
        _c("image", {
          staticClass: _vm._$s(8, "sc", "logo"),
          attrs: { _i: 8 },
        }),
      ]),
      _c("view", { staticClass: _vm._$s(9, "sc", "title"), attrs: { _i: 9 } }, [
        _c("text"),
      ]),
    ]),
    _c(
      "view",
      { staticClass: _vm._$s(11, "sc", "uni-row"), attrs: { _i: 11 } },
      [
        _c(
          "view",
          { staticClass: _vm._$s(12, "sc", "bottom-right"), attrs: { _i: 12 } },
          [
            _c("text", {
              class: _vm._$s(13, "c", [_vm.wayOfLogin ? "txt" : "txt-active"]),
              attrs: { _i: 13 },
              on: {
                click: function ($event) {
                  return _vm.toLogin()
                },
              },
            }),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(14, "sc", "bottom-left"), attrs: { _i: 14 } },
          [
            _c("text", {
              class: _vm._$s(15, "c", [_vm.wayOfLogin ? "txt-active" : "txt"]),
              attrs: { _i: 15 },
              on: {
                click: function ($event) {
                  return _vm.toLoginCaptcha()
                },
              },
            }),
          ]
        ),
      ]
    ),
    _c(
      "view",
      { staticClass: _vm._$s(16, "sc", "content-input"), attrs: { _i: 16 } },
      [
        _c(
          "view",
          { staticClass: _vm._$s(17, "sc", "user-input"), attrs: { _i: 17 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(18, "sc", "icon-input"),
                attrs: { _i: 18 },
              },
              [_c("image", { attrs: { _i: 19 } })]
            ),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.phone,
                  expression: "phone",
                },
              ],
              staticClass: _vm._$s(20, "sc", "placeholder"),
              attrs: { _i: 20 },
              domProps: { value: _vm._$s(20, "v-model", _vm.phone) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.phone = $event.target.value
                },
              },
            }),
          ]
        ),
        _vm._$s(21, "i", _vm.wayOfLogin == false)
          ? _c(
              "view",
              {
                staticClass: _vm._$s(21, "sc", "password-input"),
                attrs: { _i: 21 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(22, "sc", "icon-input"),
                    attrs: { _i: 22 },
                  },
                  [_c("image", { attrs: { _i: 23 } })]
                ),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password",
                    },
                  ],
                  staticClass: _vm._$s(24, "sc", "placeholder"),
                  attrs: {
                    password: _vm._$s(24, "a-password", _vm.showPassword),
                    _i: 24,
                  },
                  domProps: { value: _vm._$s(24, "v-model", _vm.password) },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    },
                  },
                }),
                _c("image", {
                  staticClass: _vm._$s(25, "sc", "icon-eye"),
                  attrs: { src: _vm._$s(25, "a-src", _vm.showEye), _i: 25 },
                  on: { click: _vm.changePassword },
                }),
              ]
            )
          : _c(
              "view",
              {
                staticClass: _vm._$s(26, "sc", "message-send"),
                attrs: { _i: 26 },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(27, "sc", "message-input"),
                    attrs: { _i: 27 },
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(28, "sc", "icon-input-message"),
                        attrs: { _i: 28 },
                      },
                      [_c("image", { attrs: { _i: 29 } })]
                    ),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.captcha,
                          expression: "captcha",
                        },
                      ],
                      staticClass: _vm._$s(30, "sc", "placeholder-message"),
                      attrs: { _i: 30 },
                      domProps: { value: _vm._$s(30, "v-model", _vm.captcha) },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.captcha = $event.target.value
                        },
                      },
                    }),
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(31, "sc", "message-btn"),
                    attrs: { _i: 31 },
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: _vm._$s(32, "sc", "message-sender"),
                        attrs: {
                          disabled: _vm._$s(32, "a-disabled", _vm.disabled),
                          _i: 32,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.getVerify()
                          },
                        },
                      },
                      [_vm._v(_vm._$s(32, "t0-0", _vm._s(_vm.send)))]
                    ),
                  ]
                ),
              ]
            ),
      ]
    ),
    _c(
      "view",
      { staticClass: _vm._$s(33, "sc", "uni-row"), attrs: { _i: 33 } },
      [
        _c(
          "view",
          { staticClass: _vm._$s(34, "sc", "bottom-right"), attrs: { _i: 34 } },
          [
            _c("switch", {
              attrs: { _i: 35 },
              on: { change: _vm.switchChange },
            }),
            _c("text"),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(37, "sc", "bottom-left"), attrs: { _i: 37 } },
          [
            _c("text", {
              staticClass: _vm._$s(38, "sc", "txt2"),
              attrs: { _i: 38 },
              on: {
                click: function ($event) {
                  return _vm.pswforget()
                },
              },
            }),
            _c("text", {
              staticClass: _vm._$s(39, "sc", "txt2"),
              attrs: { _i: 39 },
              on: {
                click: function ($event) {
                  return _vm.toRegister()
                },
              },
            }),
          ]
        ),
      ]
    ),
    _c("view", [
      _c("button", {
        staticClass: _vm._$s(41, "sc", "btn"),
        attrs: { _i: 41 },
        on: { click: _vm.bindLogin },
      }),
    ]),
    _c("view", { staticClass: _vm._$s(42, "sc", "yinsi"), attrs: { _i: 42 } }, [
      _c(
        "checkbox-group",
        { attrs: { _i: 43 }, on: { change: _vm.checkboxChange } },
        [
          _c("label", [
            _c(
              "checkbox",
              {
                attrs: {
                  checked: _vm._$s(45, "a-checked", _vm.checkFlag),
                  _i: 45,
                },
              },
              [
                _c("span", {
                  attrs: { _i: 46 },
                  on: { click: _vm.goToPrivacy },
                }),
              ]
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages/login/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4a0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages/login/login/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 15));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _commBnsUniHttpRequest = _interopRequireDefault(__webpack_require__(/*! @/commBns/commBnsUniHttpRequest.js */ 22));\nvar _commBnsConfig = _interopRequireDefault(__webpack_require__(/*! @/commBns/commBnsConfig.js */ 23));\nvar _UserApi = _interopRequireDefault(__webpack_require__(/*! @/api/UserApi.js */ 49));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n//针对当前Http请求公共方法调用\n\n//环境配置变量\n\n// 引入登录api\n\nvar curEnvirCfg = _commBnsConfig.default.funcGetCurEnvirCfg();\nvar _default = {\n  data: function data() {\n    return {\n      showPassword: true,\n      wayOfLogin: false,\n      //false:密码登录,true:验证码登录\n      phone: '',\n      password: '',\n      captcha: '',\n      //用于接收response信息\n      code: 0,\n      message: '',\n      success: 0,\n      successful: false,\n      uid: 0,\n      send: '发送验证码',\n      smsId: '55896351646',\n      disabled: false,\n      rememberFlag: true,\n      checkFlag: true,\n      showEye: '../../../static/image/login/eye.svg'\n    };\n  },\n  mounted: function mounted() {\n    var that = this;\n    var usertel = uni.getStorageSync('usertel');\n    if (usertel) {\n      that.phone = usertel;\n    } else {\n      that.phone = '';\n    }\n  },\n  methods: {\n    getuserinfo: function getuserinfo() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var that, strWebServicePath, _yield$commBnsUniHttp, _yield$commBnsUniHttp2, res, err;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                //localhost\n                that = _this;\n                strWebServicePath = '/user/' + that.uid + '/info'; //采用简易的方式进行处理\n                _context.next = 4;\n                return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(strWebServicePath, {}, {});\n              case 4:\n                _yield$commBnsUniHttp = _context.sent;\n                _yield$commBnsUniHttp2 = (0, _slicedToArray2.default)(_yield$commBnsUniHttp, 2);\n                res = _yield$commBnsUniHttp2[0];\n                err = _yield$commBnsUniHttp2[1];\n                getApp().globalData.globaType = res.data.data.type;\n                __f__(\"log\", getApp().globalData.globaType, \" at pages/login/login/login.vue:136\");\n                _commBnsConfig.default.FunSetPersistentData('userType', res.data.data.type); //保存用户角色信息\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    changePassword: function changePassword() {\n      this.showPassword = !this.showPassword;\n      if (!this.showPassword) {\n        this.showEye = '/static/image/login/eye_open.svg';\n      } else {\n        this.showEye = '/static/image/login/eye.svg';\n      }\n    },\n    getVerify: function getVerify() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var that, strWebServicePath, _yield$commBnsUniHttp3, _yield$commBnsUniHttp4, res, err, self, time, timer, fun;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                fun = function _fun() {\n                  time--;\n                  if (time >= 0) {\n                    self.send = time + 's后重新发送';\n                  } else if (time < 0) {\n                    self.send = '重新发送验证码';\n                    self.disabled = false; //倒计时结束能够重新点击发送的按钮 \n                    clearInterval(timer); //清除定时器 \n                    time = 60; //设置循环重新开始条件 \n                  }\n                };\n                if (!(_this2.phone <= 0)) {\n                  _context2.next = 4;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '请输入手机号'\n                });\n                return _context2.abrupt(\"return\");\n              case 4:\n                if (/^1[3456789]\\d{9}$/.test(_this2.phone)) {\n                  _context2.next = 7;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '手机号格式错误'\n                });\n                return _context2.abrupt(\"return\");\n              case 7:\n                //post获取验证码\n                that = _this2;\n                strWebServicePath = '/sms/captcha?phone=' + _this2.phone + '&appKey=128safa12-1bs18w1c-12bd81js';\n                _context2.next = 11;\n                return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(strWebServicePath, {}, {\n                  'Authorization': 'Basic YXBwOnBhc3N3b3Jk'\n                });\n              case 11:\n                _yield$commBnsUniHttp3 = _context2.sent;\n                _yield$commBnsUniHttp4 = (0, _slicedToArray2.default)(_yield$commBnsUniHttp3, 2);\n                res = _yield$commBnsUniHttp4[0];\n                err = _yield$commBnsUniHttp4[1];\n                __f__(\"log\", res, \" at pages/login/login/login.vue:171\");\n                if (res.data.success === 1) {\n                  that.smsId = res.data.data.smsId;\n                  uni.showToast({\n                    icon: 'none',\n                    title: '已发送',\n                    duration: 2000\n                  });\n                } else {\n                  uni.showToast({\n                    icon: 'none',\n                    title: res.data.message,\n                    duration: 2000\n                  });\n                }\n                //发送验证码\n                self = _this2; //验证码\n                self.disabled = true;\n                time = 60; //时间为60s，可以按情况更改 \n                timer = setInterval(fun, 1000); //设置定时器 \n              case 21:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    pswforget: function pswforget() {\n      uni.navigateTo({\n        url: '../password/password'\n      });\n    },\n    toLogin: function toLogin() {\n      this.wayOfLogin = false;\n    },\n    toLoginCaptcha: function toLoginCaptcha() {\n      this.wayOfLogin = true;\n      // uni.navigateTo({\n      // \turl:'./login-captcha/login-captcha'\n      // });\n    },\n\n    checkboxChange: function checkboxChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/login/login/login.vue:217\");\n      if (e.detail.value == '') {\n        this.checkFlag = false;\n      } else {\n        this.checkFlag = true;\n      }\n      __f__(\"log\", this.checkFlag, \" at pages/login/login/login.vue:223\");\n    },\n    goToPrivacy: function goToPrivacy() {\n      __f__(\"log\", '跳转', \" at pages/login/login/login.vue:226\");\n      plus.runtime.openURL('https://www.smartlab.vip/privacypolicy/index.html');\n    },\n    switchChange: function switchChange(e) {\n      this.rememberFlag = e.detail.value;\n    },\n    //登陆函数(验证码)\n    bindLoginWithCode: function bindLoginWithCode() {\n      var _this3 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        var that, _yield$UserApi$signIn, _yield$UserApi$signIn2, res, err;\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (!(_this3.phone <= 0)) {\n                  _context3.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '请输入手机号'\n                });\n                return _context3.abrupt(\"return\");\n              case 3:\n                if (!(_this3.checkFlag !== true)) {\n                  _context3.next = 6;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '未勾选隐私政策'\n                });\n                return _context3.abrupt(\"return\");\n              case 6:\n                if (!(_this3.captcha <= 0)) {\n                  _context3.next = 9;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '请输入验证码'\n                });\n                return _context3.abrupt(\"return\");\n              case 9:\n                //post信息到后端\n                that = _this3;\n                __f__(\"log\", _this3.phone + '' + _this3.captcha + '' + _this3.smsId, \" at pages/login/login/login.vue:258\");\n                _context3.next = 13;\n                return _UserApi.default.signInWithCaptcha(_this3.phone, _this3.captcha, _this3.smsId);\n              case 13:\n                _yield$UserApi$signIn = _context3.sent;\n                _yield$UserApi$signIn2 = (0, _slicedToArray2.default)(_yield$UserApi$signIn, 2);\n                res = _yield$UserApi$signIn2[0];\n                err = _yield$UserApi$signIn2[1];\n                __f__(\"log\", res, \" at pages/login/login/login.vue:260\");\n                __f__(\"log\", res.data.data.success, \" at pages/login/login/login.vue:261\");\n                if (!(res.data.success == 1)) {\n                  _context3.next = 32;\n                  break;\n                }\n                uni.showTabBar();\n                __f__(\"log\", res.data.data.uid, \" at pages/login/login/login.vue:264\");\n                that.uid = res.data.data.uid;\n                _commBnsConfig.default.FunSetPersistentData('signinData', res.data.data); //保存会话信息\n                // 绑定uniapp cid和uid 用于消息推送\n                __f__(\"log\", plus.push.getClientInfo().clientid, \" at pages/login/login/login.vue:268\");\n                _commBnsUniHttpRequest.default.bindAlias(res.data.data.uid.toString());\n                _context3.next = 28;\n                return that.getuserinfo();\n              case 28:\n                if (_this3.rememberFlag) {\n                  uni.setStorageSync('usertel', that.phone); //记住上次登录账号\n                }\n\n                uni.reLaunch({\n                  url: '../../project-list/ProjectList'\n                });\n                _context3.next = 33;\n                break;\n              case 32:\n                uni.showToast({\n                  icon: 'none',\n                  title: res.data.message\n                });\n              case 33:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    bindLogin: function bindLogin() {\n      var _this4 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n        var that, _yield$UserApi$signIn3, _yield$UserApi$signIn4, res, err;\n        return _regenerator.default.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                if (!_this4.wayOfLogin) {\n                  _context4.next = 4;\n                  break;\n                }\n                _this4.bindLoginWithCode();\n                _context4.next = 41;\n                break;\n              case 4:\n                if (!(_this4.phone <= 0)) {\n                  _context4.next = 7;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '请输入手机号'\n                });\n                return _context4.abrupt(\"return\");\n              case 7:\n                if (/^1[3456789]\\d{9}$/.test(_this4.phone)) {\n                  _context4.next = 11;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '手机号格式错误'\n                });\n                flag = false;\n                return _context4.abrupt(\"return\");\n              case 11:\n                if (!(_this4.password <= 0)) {\n                  _context4.next = 14;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '请输入密码'\n                });\n                return _context4.abrupt(\"return\");\n              case 14:\n                if (!(_this4.checkFlag !== true)) {\n                  _context4.next = 17;\n                  break;\n                }\n                uni.showToast({\n                  icon: 'none',\n                  title: '未勾选隐私政策'\n                });\n                return _context4.abrupt(\"return\");\n              case 17:\n                _this4.password = _this4.password.trim();\n                //post 获取信息\n                that = _this4;\n                _context4.next = 21;\n                return _UserApi.default.signInWithPassword(that.phone, that.password);\n              case 21:\n                _yield$UserApi$signIn3 = _context4.sent;\n                _yield$UserApi$signIn4 = (0, _slicedToArray2.default)(_yield$UserApi$signIn3, 2);\n                res = _yield$UserApi$signIn4[0];\n                err = _yield$UserApi$signIn4[1];\n                __f__(\"log\", res, \" at pages/login/login/login.vue:326\");\n                if (err) {\n                  __f__(\"log\", err, \" at pages/login/login/login.vue:328\");\n                }\n                if (!(res.data.success === 0)) {\n                  _context4.next = 31;\n                  break;\n                }\n                if (res.data.message === 'Bad credentials') {\n                  uni.showToast({\n                    icon: 'none',\n                    title: '用户名或密码错误'\n                  });\n                } else if (res.data.message === 'User is disabled') {\n                  uni.showToast({\n                    icon: 'none',\n                    title: '用户被禁止'\n                  });\n                } else {\n                  uni.showToast({\n                    icon: 'none',\n                    title: res.data.message\n                  });\n                }\n                _context4.next = 41;\n                break;\n              case 31:\n                if (!(res.data.success === 1)) {\n                  _context4.next = 41;\n                  break;\n                }\n                __f__(\"log\", res, \" at pages/login/login/login.vue:348\");\n                _commBnsConfig.default.FunSetPersistentData('signinData', res.data.data); //保存会话信息\n                // 绑定uniapp cid和uid 用于消息推送\n                _commBnsUniHttpRequest.default.bindAlias(res.data.data.uid.toString());\n                //记住我\n                __f__(\"log\", _this4.rememberFlag, \" at pages/login/login/login.vue:353\");\n                if (_this4.rememberFlag) {\n                  uni.setStorageSync('usertel', that.phone); //记住上次登录账号\n                }\n\n                that.uid = res.data.data.uid;\n                _context4.next = 40;\n                return that.getuserinfo();\n              case 40:\n                uni.reLaunch({\n                  url: '../../project-list/ProjectList'\n                });\n              case 41:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }))();\n    },\n    // 注册，暂时\n    toRegister: function toRegister() {\n      uni.navigateTo({\n        url: '../register/register'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4vbG9naW4udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzaG93UGFzc3dvcmQiLCJ3YXlPZkxvZ2luIiwicGhvbmUiLCJwYXNzd29yZCIsImNhcHRjaGEiLCJjb2RlIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJzdWNjZXNzZnVsIiwidWlkIiwic2VuZCIsInNtc0lkIiwiZGlzYWJsZWQiLCJyZW1lbWJlckZsYWciLCJjaGVja0ZsYWciLCJzaG93RXllIiwibW91bnRlZCIsInRoYXQiLCJtZXRob2RzIiwiZ2V0dXNlcmluZm8iLCJzdHJXZWJTZXJ2aWNlUGF0aCIsImNvbW1CbnNVbmlIdHRwUmVxdWVzdCIsInJlcyIsImVyciIsImdldEFwcCIsImNvbW1CbnNDb25maWciLCJjaGFuZ2VQYXNzd29yZCIsImdldFZlcmlmeSIsImZ1biIsInRpbWUiLCJzZWxmIiwiY2xlYXJJbnRlcnZhbCIsInVuaSIsImljb24iLCJ0aXRsZSIsImR1cmF0aW9uIiwidGltZXIiLCJwc3dmb3JnZXQiLCJ1cmwiLCJ0b0xvZ2luIiwidG9Mb2dpbkNhcHRjaGEiLCJjaGVja2JveENoYW5nZSIsImdvVG9Qcml2YWN5IiwicGx1cyIsInN3aXRjaENoYW5nZSIsImJpbmRMb2dpbldpdGhDb2RlIiwiVXNlckFwaSIsImJpbmRMb2dpbiIsImZsYWciLCJ0b1JlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBdUZBO0FBR0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUEE7O0FBR0E7O0FBR0E7O0FBR0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01B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QUFBO2dCQUFBO2dCQUNBaEI7a0JBQ0FDO2tCQUNBQztnQkFDQTtnQkFBQTtjQUFBO2dCQUFBLE1BR0E7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ0FGO2tCQUNBQztrQkFDQUM7Z0JBQ0E7Z0JBQUE7Y0FBQTtnQkFHQTtnQkFDQTtnQkFDQWpCO2dCQUFBO2dCQUFBLE9BQ0E2QixvQ0FDQTdCLFlBQ0FBO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBRkFLO2dCQUFBQztnQkFHQTtnQkFDQTtrQkFDQTtnQkFDQTtnQkFBQSxNQUNBRDtrQkFBQTtrQkFBQTtnQkFBQTtnQkFDQTtrQkFDQVU7b0JBQ0FDO29CQUNBQztrQkFDQTtnQkFDQTtrQkFDQUY7b0JBQ0FDO29CQUNBQztrQkFDQTtnQkFDQTtrQkFDQUY7b0JBQ0FDO29CQUNBQztrQkFDQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBLE1BQ0FaO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUNBO2dCQUNBRztnQkFDQTtnQkFDQUo7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7a0JBQ0FXO2dCQUNBOztnQkFDQWY7Z0JBQUE7Z0JBQUEsT0FDQUE7Y0FBQTtnQkFDQWU7a0JBQUFNO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBR0E7SUFFQTtJQUNBVztNQUNBakI7UUFBQU07TUFBQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG4gKiDlrp7njrDlip/og73vvJrnmbvlvZXpobXpnaLkvJjljJZcclxuICog5YibICAgIOW7uu+8mumZiOmfrOWuhyAgIDIwMjLlubQwNOaciDAx5pelXHJcbiAqIOebuOWFs+ivtOaYju+8mlxyXG4gKiDpmYTms6jor7TmmI7vvJpcclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8dmlldz5cclxuICAgIDwhLS0g6IOM5pmv5aGr5YWF54mpIC0tPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJiYWNrZ3JvdW5kMVwiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmFja2dyb3VuZDJcIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImJhY2tncm91bmQzXCI+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJiYWNrZ3JvdW5kNFwiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmFja2dyb3VuZDVcIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXc+XHJcbiAgICAgICAgPGltYWdlIG1vZGU9XCJ3aWR0aEZpeFwiIGNsYXNzPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvbG9naW4vbG9nby5zdmdcIj48L2ltYWdlPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICA8dGV4dD7mmbrog73li5jmjqLnrqHnkIbns7vnu588L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwidW5pLXJvd1wiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cImJvdHRvbS1yaWdodFwiPlxyXG4gICAgICAgIDx0ZXh0IDpjbGFzcz1cIlt3YXlPZkxvZ2luID8gJ3R4dCcgOiAndHh0LWFjdGl2ZScgXVwiIEBjbGljaz1cInRvTG9naW4oKVwiPuWvhueggeeZu+W9lTwvdGV4dD5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImJvdHRvbS1sZWZ0XCI+XHJcbiAgICAgICAgPHRleHQgOmNsYXNzPVwiW3dheU9mTG9naW4gPyAndHh0LWFjdGl2ZScgOiAndHh0JyBdXCIgQGNsaWNrPVwidG9Mb2dpbkNhcHRjaGEoKVwiPumqjOivgeeggeeZu+W9lTwvdGV4dD5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJjb250ZW50LWlucHV0XCI+XHJcbiAgICAgIDwhLS0g6LSm5Y+36L6T5YWlIC0tPlxyXG4gICAgICA8dmlldyBjbGFzcz1cInVzZXItaW5wdXRcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImljb24taW5wdXRcIj5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlL2xvZ2luL3VzZXIuc3ZnXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwicGxhY2Vob2xkZXJcIiB2LW1vZGVsPVwicGhvbmVcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXotKblj7dcIiAvPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDwhLS0g5a+G56CB6L6T5YWlIC0tPlxyXG4gICAgICA8dmlldyB2LWlmPVwid2F5T2ZMb2dpbj09ZmFsc2VcIiBjbGFzcz1cInBhc3N3b3JkLWlucHV0XCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uLWlucHV0XCI+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZS9sb2dpbi9sb2NrLnN2Z1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInBsYWNlaG9sZGVyXCIgY3Vyc29yLXNwYWNpbmc9XCIxMFwiIDpwYXNzd29yZD1cInNob3dQYXNzd29yZFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi5a+G56CBXCIgLz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uLWV5ZVwiIDpzcmM9XCJzaG93RXllXCIgIEBjbGljaz1cImNoYW5nZVBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8IS0tIOmqjOivgeeggei+k+WFpSAtLT5cclxuICAgICAgPHZpZXcgdi1lbHNlIGNsYXNzPVwibWVzc2FnZS1zZW5kXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJtZXNzYWdlLWlucHV0XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImljb24taW5wdXQtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZS9sb2dpbi9tYWlsLnN2Z1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwbGFjZWhvbGRlci1tZXNzYWdlXCIgdi1tb2RlbD1cImNhcHRjaGFcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiIC8+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwibWVzc2FnZS1idG5cIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZXNzYWdlLXNlbmRlclwiIEBjbGljaz1cImdldFZlcmlmeSgpXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIj57e3NlbmR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJ1bmktcm93XCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiYm90dG9tLXJpZ2h0XCI+XHJcbiAgICAgICAgPHN3aXRjaCBAY2hhbmdlPVwic3dpdGNoQ2hhbmdlXCIgY2hlY2tlZD1cInRydWVcIiBjb2xvcj1cIiM1NjY5RkZcIj48L3N3aXRjaD5cclxuICAgICAgICA8dGV4dD7orrDkvY/miJE8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJib3R0b20tbGVmdFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidHh0MlwiIEBjbGljaz1cInBzd2ZvcmdldCgpXCI+5b+Y6K6w5a+G56CBPC90ZXh0PlxyXG4gICAgICAgIDwhLS0g5rOo5YaMIC0tPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidHh0MlwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDQwcnB4XCIgQGNsaWNrPVwidG9SZWdpc3RlcigpXCI+5rOo5YaMPC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldz5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiIEB0YXA9XCJiaW5kTG9naW5cIj7nmbsg5b2VPC9idXR0b24+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInlpbnNpXCI+XHJcbiAgICAgIDxjaGVja2JveC1ncm91cCBAY2hhbmdlPVwiY2hlY2tib3hDaGFuZ2VcIj5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICA8Y2hlY2tib3ggdmFsdWU9XCIxXCIgOmNoZWNrZWQ9XCJjaGVja0ZsYWdcIiBjb2xvcj1cIiNGRkNDMzNcIiBzdHlsZT1cInRyYW5zZm9ybTpzY2FsZSgwLjcpXCI+PHNwYW5cclxuICAgICAgICAgICAgICBAY2xpY2s9XCJnb1RvUHJpdmFjeVwiPuaIkeW3suWQjOaEj+aZuuiDveWLmOaOoumakOengeaUv+etljwvc3Bhbj48L2NoZWNrYm94PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvY2hlY2tib3gtZ3JvdXA+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvL+mSiOWvueW9k+WJjUh0dHDor7fmsYLlhazlhbHmlrnms5XosIPnlKhcclxuICBpbXBvcnQgY29tbUJuc1VuaUh0dHBSZXF1ZXN0IGZyb20gJ0AvY29tbUJucy9jb21tQm5zVW5pSHR0cFJlcXVlc3QuanMnXHJcblxyXG4gIC8v546v5aKD6YWN572u5Y+Y6YePXHJcbiAgaW1wb3J0IGNvbW1CbnNDb25maWcgZnJvbSAnQC9jb21tQm5zL2NvbW1CbnNDb25maWcuanMnXHJcblxyXG4gIC8vIOW8leWFpeeZu+W9lWFwaVxyXG4gIGltcG9ydCBVc2VyQXBpIGZyb20gJ0AvYXBpL1VzZXJBcGkuanMnXHJcblxyXG4gIHZhciBjdXJFbnZpckNmZyA9IGNvbW1CbnNDb25maWcuZnVuY0dldEN1ckVudmlyQ2ZnKClcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dQYXNzd29yZDogdHJ1ZSxcclxuICAgICAgICB3YXlPZkxvZ2luOiBmYWxzZSwgLy9mYWxzZTrlr4bnoIHnmbvlvZUsdHJ1ZTrpqozor4HnoIHnmbvlvZVcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGNhcHRjaGE6ICcnLFxyXG4gICAgICAgIC8v55So5LqO5o6l5pS2cmVzcG9uc2Xkv6Hmga9cclxuICAgICAgICBjb2RlOiAwLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IDAsXHJcbiAgICAgICAgc3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgdWlkOiAwLFxyXG4gICAgICAgIHNlbmQ6ICflj5HpgIHpqozor4HnoIEnLFxyXG4gICAgICAgIHNtc0lkOiAnNTU4OTYzNTE2NDYnLFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgICByZW1lbWJlckZsYWc6IHRydWUsXHJcbiAgICAgICAgY2hlY2tGbGFnOiB0cnVlLFxyXG4gICAgICAgIHNob3dFeWU6ICcuLi8uLi8uLi9zdGF0aWMvaW1hZ2UvbG9naW4vZXllLnN2ZydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICBjb25zdCB1c2VydGVsID0gdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VydGVsJylcclxuICAgICAgaWYgKHVzZXJ0ZWwpIHtcclxuICAgICAgICB0aGF0LnBob25lID0gdXNlcnRlbFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQucGhvbmUgPSAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBhc3luYyBnZXR1c2VyaW5mbygpIHtcclxuICAgICAgICAvL2xvY2FsaG9zdFxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGxldCBzdHJXZWJTZXJ2aWNlUGF0aCA9ICcvdXNlci8nICsgdGhhdC51aWQgKyAnL2luZm8nXHJcbiAgICAgICAgLy/ph4fnlKjnroDmmJPnmoTmlrnlvI/ov5vooYzlpITnkIZcclxuICAgICAgICBsZXQgW3JlcywgZXJyXSA9IGF3YWl0IGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KHN0cldlYlNlcnZpY2VQYXRoLCB7fSwge30pXHJcbiAgICAgICAgZ2V0QXBwKCkuZ2xvYmFsRGF0YS5nbG9iYVR5cGUgPSByZXMuZGF0YS5kYXRhLnR5cGVcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRBcHAoKS5nbG9iYWxEYXRhLmdsb2JhVHlwZSk7XHJcbiAgICAgICAgY29tbUJuc0NvbmZpZy5GdW5TZXRQZXJzaXN0ZW50RGF0YSgndXNlclR5cGUnLCByZXMuZGF0YS5kYXRhLnR5cGUpIC8v5L+d5a2Y55So5oi36KeS6Imy5L+h5oGvXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZCAgICBcclxuICAgICAgICBpZiAoIXRoaXMuc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0V5ZSA9ICcvc3RhdGljL2ltYWdlL2xvZ2luL2V5ZV9vcGVuLnN2ZydcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0V5ZSA9ICcvc3RhdGljL2ltYWdlL2xvZ2luL2V5ZS5zdmcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBnZXRWZXJpZnkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGhvbmUgPD0gMCkge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKSB7XHJcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+aJi+acuuWPt+agvOW8j+mUmeivrydcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wb3N06I635Y+W6aqM6K+B56CBXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgdmFyIHN0cldlYlNlcnZpY2VQYXRoID0gJy9zbXMvY2FwdGNoYT9waG9uZT0nICsgdGhpcy5waG9uZSArICcmYXBwS2V5PTEyOHNhZmExMi0xYnMxOHcxYy0xMmJkODFqcydcclxuICAgICAgICBsZXQgW3JlcywgZXJyXSA9IGF3YWl0IGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICAgc3RyV2ViU2VydmljZVBhdGgsIHt9LCB7ICdBdXRob3JpemF0aW9uJzogJ0Jhc2ljIFlYQndPbkJoYzNOM2IzSmsnIH1cclxuICAgICAgICApXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzID09PSAxKSB7XHJcbiAgICAgICAgICB0aGF0LnNtc0lkID0gcmVzLmRhdGEuZGF0YS5zbXNJZFxyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICflt7Llj5HpgIEnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPkemAgemqjOivgeeggVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIC8v6aqM6K+B56CBXHJcbiAgICAgICAgc2VsZi5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgICB2YXIgdGltZSA9IDYwIC8v5pe26Ze05Li6NjBz77yM5Y+v5Lul5oyJ5oOF5Ya15pu05pS5IFxyXG4gICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1biwgMTAwMCkgLy/orr7nva7lrprml7blmaggXHJcbiAgICAgICAgZnVuY3Rpb24gZnVuKCkge1xyXG4gICAgICAgICAgdGltZS0tXHJcbiAgICAgICAgICBpZiAodGltZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2VuZCA9IHRpbWUgKyAnc+WQjumHjeaWsOWPkemAgSdcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGltZSA8IDApIHtcclxuICAgICAgICAgICAgc2VsZi5zZW5kID0gJ+mHjeaWsOWPkemAgemqjOivgeeggSdcclxuICAgICAgICAgICAgc2VsZi5kaXNhYmxlZCA9IGZhbHNlIC8v5YCS6K6h5pe257uT5p2f6IO95aSf6YeN5paw54K55Ye75Y+R6YCB55qE5oyJ6ZKuIFxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKSAvL+a4hemZpOWumuaXtuWZqCBcclxuICAgICAgICAgICAgdGltZSA9IDYwIC8v6K6+572u5b6q546v6YeN5paw5byA5aeL5p2h5Lu2IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHN3Zm9yZ2V0KCkge1xyXG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiAnLi4vcGFzc3dvcmQvcGFzc3dvcmQnIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy53YXlPZkxvZ2luID0gZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgdG9Mb2dpbkNhcHRjaGEoKSB7XHJcbiAgICAgICAgdGhpcy53YXlPZkxvZ2luID0gdHJ1ZVxyXG4gICAgICAgIC8vIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAvLyBcdHVybDonLi9sb2dpbi1jYXB0Y2hhL2xvZ2luLWNhcHRjaGEnXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrRmxhZyA9IGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tGbGFnID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoZWNrRmxhZylcclxuICAgICAgfSxcclxuICAgICAgZ29Ub1ByaXZhY3koKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+i3s+i9rCcpXHJcbiAgICAgICAgcGx1cy5ydW50aW1lLm9wZW5VUkwoJ2h0dHBzOi8vd3d3LnNtYXJ0bGFiLnZpcC9wcml2YWN5cG9saWN5L2luZGV4Lmh0bWwnKVxyXG4gICAgICB9LFxyXG4gICAgICBzd2l0Y2hDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMucmVtZW1iZXJGbGFnID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8v55m76ZmG5Ye95pWwKOmqjOivgeeggSlcclxuICAgICAgYXN5bmMgYmluZExvZ2luV2l0aENvZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGhvbmUgPD0gMCkge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmiYvmnLrlj7cnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrRmxhZyAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmnKrli77pgInpmpDnp4HmlL/nrZYnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhcHRjaGEgPD0gMCkge1xyXG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXpqozor4HnoIEnXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcG9zdOS/oeaBr+WIsOWQjuerr1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGhvbmUgKyAnJyArIHRoaXMuY2FwdGNoYSArICcnICsgdGhpcy5zbXNJZClcclxuICAgICAgICBsZXQgW3JlcywgZXJyXSA9IGF3YWl0IFVzZXJBcGkuc2lnbkluV2l0aENhcHRjaGEodGhpcy5waG9uZSwgdGhpcy5jYXB0Y2hhLCB0aGlzLnNtc0lkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kYXRhLnN1Y2Nlc3MpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT0gMSkge1xyXG4gICAgICAgICAgdW5pLnNob3dUYWJCYXIoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0YS51aWQpXHJcbiAgICAgICAgICB0aGF0LnVpZCA9IHJlcy5kYXRhLmRhdGEudWlkXHJcbiAgICAgICAgICBjb21tQm5zQ29uZmlnLkZ1blNldFBlcnNpc3RlbnREYXRhKCdzaWduaW5EYXRhJywgcmVzLmRhdGEuZGF0YSkgLy/kv53lrZjkvJror53kv6Hmga9cclxuICAgICAgICAgIC8vIOe7keWumnVuaWFwcCBjaWTlkox1aWQg55So5LqO5raI5oGv5o6o6YCBXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbHVzLnB1c2guZ2V0Q2xpZW50SW5mbygpLmNsaWVudGlkKVxyXG4gICAgICAgICAgY29tbUJuc1VuaUh0dHBSZXF1ZXN0LmJpbmRBbGlhcyhyZXMuZGF0YS5kYXRhLnVpZC50b1N0cmluZygpKTtcclxuICAgICAgICAgIGF3YWl0IHRoYXQuZ2V0dXNlcmluZm8oKVxyXG4gICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXJGbGFnKSB7XHJcbiAgICAgICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygndXNlcnRlbCcsIHRoYXQucGhvbmUpIC8v6K6w5L2P5LiK5qyh55m75b2V6LSm5Y+3XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bmkucmVMYXVuY2goeyB1cmw6ICcuLi8uLi9wcm9qZWN0LWxpc3QvUHJvamVjdExpc3QnIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYmluZExvZ2luKCkge1xyXG4gICAgICAgIC8vIHBsdXMucHVzaC5nZXRDbGllbnRJbmZvQXN5bmMoKGluZm8pID0+IHsgIFxyXG4gICAgICAgIC8vICAgICAgbGV0IGNpZCA9IGluZm9bXCJjbGllbnRpZFwiXTsgIFxyXG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coY2lkKVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLndheU9mTG9naW4pIHtcclxuICAgICAgICAgIHRoaXMuYmluZExvZ2luV2l0aENvZGUoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5waG9uZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeaJi+acuuWPtydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xyXG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fmoLzlvI/plJnor68nLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeWvhueggSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGVja0ZsYWcgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5pyq5Yu+6YCJ6ZqQ56eB5pS/562WJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkLnRyaW0oKVxyXG4gICAgICAgICAgLy9wb3N0IOiOt+WPluS/oeaBr1xyXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICBsZXQgW3JlcywgZXJyXSA9IGF3YWl0IFVzZXJBcGkuc2lnbkluV2l0aFBhc3N3b3JkKFxyXG4gICAgICAgICAgICB0aGF0LnBob25lLFxyXG4gICAgICAgICAgICB0aGF0LnBhc3N3b3JkKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ0JhZCBjcmVkZW50aWFscycpIHtcclxuICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJ1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1VzZXIgaXMgZGlzYWJsZWQnKSB7XHJcbiAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eUqOaIt+iiq+emgeatoidcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBjb21tQm5zQ29uZmlnLkZ1blNldFBlcnNpc3RlbnREYXRhKCdzaWduaW5EYXRhJywgcmVzLmRhdGEuZGF0YSkgLy/kv53lrZjkvJror53kv6Hmga9cclxuICAgICAgICAgICAgLy8g57uR5a6adW5pYXBwIGNpZOWSjHVpZCDnlKjkuo7mtojmga/mjqjpgIFcclxuICAgICAgICAgICAgY29tbUJuc1VuaUh0dHBSZXF1ZXN0LmJpbmRBbGlhcyhyZXMuZGF0YS5kYXRhLnVpZC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAvL+iusOS9j+aIkVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlbWVtYmVyRmxhZylcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVtZW1iZXJGbGFnKSB7XHJcbiAgICAgICAgICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCd1c2VydGVsJywgdGhhdC5waG9uZSkgLy/orrDkvY/kuIrmrKHnmbvlvZXotKblj7dcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LnVpZCA9IHJlcy5kYXRhLmRhdGEudWlkXHJcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuZ2V0dXNlcmluZm8oKVxyXG4gICAgICAgICAgICB1bmkucmVMYXVuY2goeyB1cmw6ICcuLi8uLi9wcm9qZWN0LWxpc3QvUHJvamVjdExpc3QnIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5rOo5YaM77yM5pqC5pe2XHJcbiAgICAgIHRvUmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgdW5pLm5hdmlnYXRlVG8oeyB1cmw6ICcuLi9yZWdpc3Rlci9yZWdpc3RlcicgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgcGFnZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogODB1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50LWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDV1cHg7XHJcbiAgICBoZWlnaHQ6IDM4MHVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjB1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5kMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gICAgd2lkdGg6IDQwMHVweDtcclxuICAgIGhlaWdodDogNDAwdXB4O1xyXG4gICAgbGVmdDogNDAwdXB4O1xyXG4gICAgdG9wOiAtMTUwdXB4O1xyXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgNTAlIDUwJSwgI0I5REFGQiAwZGVnLCAjOTg5NUVFIDAuMDRkZWcsICNDNTU0OTIgMC4wN2RlZywgI0VDQUNBRCA5NS45OWRlZywgI0I5REFGQiAzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZmlsdGVyOiBibHVyKDIwMHVweCk7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZDIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIHdpZHRoOiAzODB1cHg7XHJcbiAgICBoZWlnaHQ6IDM4MHVweDtcclxuICAgIGxlZnQ6IC0xMDh1cHg7XHJcbiAgICB0b3A6IDB1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLCAjQjlEQUZCIDBkZWcsICM5ODk1RUUgMjg1ZGVnLCAjRUNBQ0FEIDM1OS45NmRlZywgI0M1NTQ5MiAzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgZmlsdGVyOiBibHVyKDIwMHVweCk7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZDMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIHdpZHRoOiA0ODB1cHg7XHJcbiAgICBoZWlnaHQ6IDQwMHVweDtcclxuICAgIGxlZnQ6IDM0MHVweDtcclxuICAgIHRvcDogNjgwdXB4O1xyXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgNTAlIDUwJSwgI0I5REFGQiAwZGVnLCAjOTg5NUVFIDAuMDRkZWcsICNDNTU0OTIgMC4wN2RlZywgI0VDQUNBRCA5NS45OWRlZywgI0I5REFGQiAzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZmlsdGVyOiBibHVyKDIwMHVweCk7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZDQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICAgIHdpZHRoOiA3MDB1cHg7XHJcbiAgICBoZWlnaHQ6IDY0NHVweDtcclxuICAgIGxlZnQ6IDcyMHVweDtcclxuICAgIHRvcDogMTAwMHVweDtcclxuICAgIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsICNCOURBRkIgMGRlZywgI0VDQUNBRCA5NS45OWRlZywgIzk4OTVFRSAyMDYuMjVkZWcsICM5MEEyRjggMjkyLjVkZWcsICNDNTU0OTIgMzYwZGVnKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGZpbHRlcjogYmx1cigyMDB1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoLTEsIDAsIDAsIDEsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmQ1IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgICB3aWR0aDogMzYwdXB4O1xyXG4gICAgaGVpZ2h0OiAzNDB1cHg7XHJcbiAgICBsZWZ0OiAtMjAwdXB4O1xyXG4gICAgdG9wOiAxNDAwdXB4O1xyXG4gICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoZnJvbSAxODBkZWcgYXQgNTAlIDUwJSwgI0I5Q0JGQiAwZGVnLCAjRUNBQ0FEIDk1Ljk5ZGVnLCAjOTg5NUVFIDExMi41ZGVnLCAjQzU1NDkyIDE5Ni44N2RlZywgIzkwQTJGOCAyOTIuNWRlZywgI0I5Q0JGQiAzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgZmlsdGVyOiBibHVyKDIwMHVweCk7XHJcbiAgfVxyXG5cclxuICAudHh0LWFjdGl2ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BpbmdGYW5nIEhLJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDQ4dXB4O1xyXG4gICAgY29sb3I6ICMxMjBEMjY7XHJcbiAgICBjb2xvcjogIzEyMEQyNjtcclxuICAgIGJvcmRlci1ib3R0b206ICM1NjY5RkYgMTB1cHggc29saWQ7XHJcbiAgfVxyXG5cclxuICAudHh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGluZ0ZhbmcgSEsnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzh1cHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbi1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwdXB4O1xyXG4gICAgaGVpZ2h0OiAxMDB1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNjB1cHg7XHJcbiAgICBjb2xvcjogIzc0NzY4ODtcclxuICB9XHJcblxyXG4gIC5pY29uLWlucHV0IGltYWdlIHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIC5pY29uLWlucHV0LW1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDgwdXB4O1xyXG4gICAgaGVpZ2h0OiA2MHVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHVweDtcclxuICAgIGNvbG9yOiAjNzQ3Njg4O1xyXG4gIH1cclxuXHJcbiAgLmljb24taW5wdXQtbWVzc2FnZSBpbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGluZ0ZhbmcgU0MnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJ1cHg7XHJcbiAgfVxyXG5cclxuICAucGxhY2Vob2xkZXItbWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BpbmdGYW5nIFNDJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwdXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0M3VweDtcclxuICB9XHJcblxyXG4gIC51c2VyLWlucHV0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHVweDtcclxuICAgIGhlaWdodDogMTIwdXB4O1xyXG4gICAgYm9yZGVyOiA0dXB4ICNFNERGREYgc29saWQ7XHJcbiAgfVxyXG5cclxuICAucGFzc3dvcmQtaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0dXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwdXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwdXB4O1xyXG4gICAgaGVpZ2h0OiAxMjB1cHg7XHJcbiAgICBib3JkZXI6IDR1cHggI0U0REZERiBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlLXNlbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZS1zZW5kZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQaW5nRmFuZyBISyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHVweDtcclxuICAgIGZvbnQtc2l6ZTogMzJ1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZDogIzU2NjlGRjtcclxuICAgIGJveC1zaGFkb3c6IDB1cHggMjB1cHggNzB1cHggcmdiYSgxMTEsIDEyNiwgMjAxLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwdXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtaW5wdXQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0dXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1dXB4O1xyXG4gICAgd2lkdGg6IDQwMHVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwdXB4O1xyXG4gICAgaGVpZ2h0OiAxMjB1cHg7XHJcbiAgICBib3JkZXI6IDR1cHggI0U0REZERiBzb2xpZDtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDM4MHVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHVweDtcclxuICAgIG1hcmdpbi10b3A6IDUwdXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uLWV5ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHVweDtcclxuICAgIHdpZHRoOiA2MHVweDtcclxuICAgIGhlaWdodDogNjB1cHg7XHJcbiAgICBmb250LXNpemU6IDQwdXB4O1xyXG4gICAgY29sb3I6ICM3NDc2ODg7XHJcbiAgfVxyXG5cclxuICAueWluc2kge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHVweDtcclxuICAgIHdpZHRoOiAyNDB1cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA1MHJweDtcclxuICAgIGNvbG9yOiAjMzczNjRBO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQaW5nRmFuZyBTQyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBycHg7XHJcbiAgfVxyXG5cclxuICAudW5pLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjBycHg7XHJcbiAgICBoZWlnaHQ6IDgwcnB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogODB1cHg7ICovXHJcbiAgfVxyXG5cclxuICAudW5pLWV5ZS1hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdBRkY7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5pLXByaW1hcnk7XHJcbiAgICBtYXJnaW4tbGVmdDogOTBycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkwcnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwdXB4IDIwdXB4IDcwdXB4IHJnYmEoMTExLCAxMjYsIDIwMSwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHVweDtcclxuICAgIGZvbnQtc2l6ZTogMzBycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTAwcnB4O1xyXG4gIH1cclxuXHJcbiAgLnR4dDIge1xyXG4gICAgZm9udC1zaXplOiAzMHJweDtcclxuICAgIGNvbG9yOiAjNTY2OUZGO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tbGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 14)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 16);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 17);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 18);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 20);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 19);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!***********************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/commBns/commBnsUniHttpRequest.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _commBnsConfig = _interopRequireDefault(__webpack_require__(/*! ./commBnsConfig.js */ 23));\nvar _utilUniHttpRequest = _interopRequireDefault(__webpack_require__(/*! ../commFrmk/commApp/uniHttpRequestUtil/utilUniHttpRequest.js */ 24));\nvar _utilSignBaseSHA = _interopRequireDefault(__webpack_require__(/*! ../commFrmk/commApp/commAppHashUtil/utilSignBaseSHA1.js */ 25));\nvar _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ 27));\nvar _qs = _interopRequireDefault(__webpack_require__(/*! qs */ 33));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar commBnsUniHttpRequest = {\n  hasStartRefresh: false\n};\n\n//获得当的环境配置\nvar curEnvirCfg = _commBnsConfig.default.funcGetCurEnvirCfg();\n\n/**\r\n * @param {Object}   objReqParam 业务请求的参数\r\n * @param {boolean}  isFirst     是否是第一次调用\r\n * @param {String}   objReqParam.strWebServiceUrl        提供Web服务站点地址(不提供则自动从环境中获取:仅用于非代理模式)\r\n * @param {String}   objReqParam.strWebServicePath        提供服务的路径\r\n * @param {String}   objReqParam.strHttpMethod            请求的方法（目前先考GET和POST两种方法,缺省为POST）\r\n * @param {Object}   objReqParam.objData              请求的数据(POST为请求Body，如果是GET由为网址参数)\r\n * @param {Object}   objReqParam.dictHeader            请求的头部数据(头部数据，可不提供)\r\n * @param {Object}   objReqParam.dictHeader.appid        请求的头部数据(头部数据，可不提供).AppID\r\n * @param {Object}   objReqParam.dictHeader.appkey        请求的头部数据(头部数据，可不提供).AppKey\r\n * @param {Object}   objReqParam.dictHeader.ticket        请求的头部数据(头部数据，可不提供).Token\r\n * @param {Object}   objReqParam.dictHeader.sign        请求的头部数据(头部数据，可不提供).API接口签名\r\n * @param {Object}   objReqParam.dictHeader.ts          请求的头部数据(头部数据，可不提供).时间戳\r\n */\ncommBnsUniHttpRequest.FuncBnsHttpRequest = function () {\n  var objReqParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var isFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  objReqParam.objData = objReqParam.objData || {};\n  objReqParam.dictHeader = objReqParam.dictHeader || {};\n  objReqParam.strWebServiceUrl = objReqParam.strWebServiceUrl || curEnvirCfg.defaultUrl;\n  objReqParam.strHttpMethod = objReqParam.strHttpMethod.toUpperCase() || \"POST\";\n  objReqParam.dictHeader = removeExtraContentType(objReqParam.dictHeader);\n  // 根据请求方式对请求参数进行合并转化，同时提取出计算sign需要的参数\n  objReqParam.objData = cleanObject(objReqParam.objData);\n  var strUriPath = \"\";\n  var strUriParams = \"\";\n  var strSignBody = \"\";\n  if (objReqParam.strHttpMethod.toUpperCase() === \"GET\") {\n    // GET请求，把URL上的参数提取出来，和objData合并，如果有重复，以objData中的为准\n    // uniapp不会在URL放数组参数，这是uniapp的问题，所以改为自己手动设置\n    var uri = getUri(objReqParam.strWebServicePath);\n    var newUrlParams = convertObjectToUrl(_objectSpread(_objectSpread({}, objReqParam.objData), uri.query));\n    // 直接将参数拼接到url后面\n    objReqParam.strWebServicePath = uri.path + newUrlParams;\n    // 清除掉请求参数\n    objReqParam.objData = {};\n    strUriPath = uri.path;\n    strUriParams = newUrlParams.substring(1);\n    strSignBody = \"\";\n  } else {\n    // 其余请求，不做变化\n    var _uri = getUri(objReqParam.strWebServicePath);\n    strUriPath = _uri.path;\n    strUriParams = _uri.strQuery;\n    strSignBody = signStringifyBodyParams(objReqParam.objData, objReqParam.dictHeader);\n  }\n\n  // 对请求头部公共处理\n  // 主要是要做签名和认证，先获取登陆信息\n  var signinData = _commBnsConfig.default.FunGetPersistentData(\"signinData\");\n  var dictCurHeader = objReqParam.dictHeader;\n\n  //设置TS\n  dictCurHeader[\"ts\"] = Date.now().toString();\n\n  //设置sign\n  if (signinData !== \"\") {\n    var strAppKey = signinData.appKey;\n    dictCurHeader[\"sign\"] = _utilSignBaseSHA.default.FuncGetCurSignData(strAppKey, strUriPath, dictCurHeader[\"ts\"], strUriParams, strSignBody);\n  }\n  objReqParam.dictHeader = dictCurHeader;\n  if (!dictCurHeader.hasOwnProperty(\"Authorization\") || !dictCurHeader[\"Authorization\"].startsWith(\"Basic\")) {\n    dictCurHeader[\"Authorization\"] = signinData.tokenType + \" \" + signinData.token;\n  }\n  function logout(message) {\n    uni.showModal({\n      title: '登录过期',\n      content: message,\n      showCancel: false,\n      complete: function complete() {\n        commBnsUniHttpRequest.FuncLogOut();\n        uni.reLaunch({\n          url: '/pages/login/login/login'\n        });\n      }\n    });\n  }\n\n  // 尝试发出请求\n  return new Promise(function (resove, reject) {\n    _utilUniHttpRequest.default.FuncHttpRequest({\n      strUrl: objReqParam.strWebServiceUrl + objReqParam.strWebServicePath,\n      strHttpMethod: objReqParam.strHttpMethod,\n      objData: objReqParam.objData,\n      dictHeader: objReqParam.dictHeader\n    }).then(function (res) {\n      // token可能失效\n      if (res.data.code === 40101 || res.data.code === 40103 || res.data.code === 40105) {\n        if (isFirst) {\n          // 如果已经有refresh的请求了，则这个请求无效\n          if (commBnsUniHttpRequest.hasStartRefresh === false) {\n            commBnsUniHttpRequest.hasStartRefresh = true;\n            // 重新获取token \n            funcRefreshToken(signinData.refreshToken || \"\").then(function (res) {\n              if (res.data.success === 1) {\n                // 重新发起请求\n                return commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam, false);\n              } else {\n                // 获取token失败，退出登陆\n                commBnsUniHttpRequest.hasStartRefresh = false;\n                logout(\"长时间未登录设备，登录失效\");\n              }\n            }).catch(function (err) {\n              // 退出登陆\n              commBnsUniHttpRequest.hasStartRefresh = false;\n              logout(\"连接服务器异常\");\n            });\n          }\n        } else {\n          // 退出登陆\n          logout(\"用户在其他设备登录\");\n        }\n      }\n      // 请求成功，返回结果\n      else {\n        resove([res]);\n      }\n    }).catch(function (err) {\n      resove([null, err]);\n    });\n  });\n};\n\n/**\r\n * 登出执行的请求操作\r\n */\ncommBnsUniHttpRequest.FuncLogOut = function () {\n  var signinData = _commBnsConfig.default.FunGetPersistentData(\"signinData\");\n  unbindAlias(signinData.uid.toString());\n  _commBnsConfig.default.FunRemovePersistentData(\"signinData\");\n};\ncommBnsUniHttpRequest.FuncBnsHttpRequestWithGet = function (strWebServicePath) {\n  var objData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var dictHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return this.FuncBnsHttpRequest({\n    strWebServicePath: strWebServicePath,\n    objData: objData,\n    dictHeader: dictHeader,\n    strHttpMethod: 'GET'\n  });\n};\ncommBnsUniHttpRequest.FuncBnsHttpRequestWithPost = function (strWebServicePath) {\n  var objData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var dictHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var isJson = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  return this.FuncBnsHttpRequest({\n    strWebServicePath: strWebServicePath,\n    objData: objData,\n    dictHeader: _objectSpread(_objectSpread({}, dictHeader), {}, {\n      \"Content-Type\": isJson ? \"application/json\" : \"application/x-www-form-urlencoded\"\n    }),\n    strHttpMethod: 'POST'\n  });\n};\ncommBnsUniHttpRequest.FuncBnsHttpRequestWithPut = function (strWebServicePath) {\n  var objData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var dictHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var isJson = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  return this.FuncBnsHttpRequest({\n    strWebServicePath: strWebServicePath,\n    objData: objData,\n    dictHeader: _objectSpread(_objectSpread({}, dictHeader), {}, {\n      \"Content-Type\": isJson ? \"application/json\" : \"application/x-www-form-urlencoded\"\n    }),\n    strHttpMethod: 'PUT'\n  });\n};\ncommBnsUniHttpRequest.FuncBnsHttpRequestWithDelete = function (strWebServicePath) {\n  var objData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var dictHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var isJson = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  return this.FuncBnsHttpRequest({\n    strWebServicePath: strWebServicePath,\n    objData: objData,\n    dictHeader: _objectSpread(_objectSpread({}, dictHeader), {}, {\n      \"Content-Type\": isJson ? \"application/json\" : \"application/x-www-form-urlencoded\"\n    }),\n    strHttpMethod: 'DELETE'\n  });\n};\n\n/* 刷新token */\nfunction funcRefreshToken(refreshToken) {\n  var objReqParam = {\n    strWebServicePath: '/user/signin/refresh',\n    strHttpMethod: 'POST',\n    objData: {\n      refreshToken: refreshToken,\n      appKey: _uuid.default.v4()\n    },\n    dictHeader: {\n      \"Content-Type\": \"application/x-www-form-urlencoded\",\n      \"Authorization\": \"Basic YXBwOnBhc3N3b3Jk\"\n    }\n  };\n  return commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam).then(function (res) {\n    if (res.data.success === 1) {\n      _commBnsConfig.default.FunSetPersistentData(\"signinData\", res.data.data);\n    }\n  });\n}\n\n/* 忘记密码 */\ncommBnsUniHttpRequest.FuncForgetPassword = /*#__PURE__*/function () {\n  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(phone, password, captcha, smsId) {\n    var objReqParam;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            objReqParam = {\n              strWebServicePath: '/user/signin/forget',\n              strHttpMethod: 'POST',\n              objData: {\n                phone: phone,\n                password: password,\n                captcha: captcha,\n                smsId: smsId\n              },\n              dictHeader: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\",\n                \"Authorization\": \"Basic YXBwOnBhc3N3b3Jk\"\n              }\n            };\n            return _context.abrupt(\"return\", commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam));\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return function (_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* 分离开请求路径和请求路径上的参数，参数如果键有重复的，取最后一个的值 */\nfunction getUri(strPath) {\n  var uri = {};\n  strPath = strPath.trim();\n  var lastPos = strPath.lastIndexOf(\"?\");\n  if (lastPos < 0) {\n    uri.path = strPath;\n    uri.strQuery = \"\";\n    uri.query = {};\n    return uri;\n  }\n  uri.path = strPath.substring(0, lastPos);\n  var queryStr = lastPos === strPath.length ? \"\" : strPath.substring(lastPos + 1);\n  uri.strQuery = queryStr;\n  uri.query = {};\n  while (queryStr.length !== 0) {\n    var index = queryStr.indexOf(\"&\");\n    if (index < 0) {\n      index = queryStr.length;\n    }\n    var oneQueryStr = queryStr.substring(0, index);\n    var splitIndex = oneQueryStr.indexOf(\"=\");\n    if (splitIndex > 0 && splitIndex < oneQueryStr.length - 1) {\n      var k = oneQueryStr.substring(0, splitIndex);\n      var v = oneQueryStr.substring(splitIndex + 1);\n      if (k.endsWith(\"[]\") && k.length > 2) {\n        var k1 = k.substring(0, k.length - 2);\n        if (Object.prototype.toString.call(uri.query[k1]) === \"[object Array]\") {\n          uri.query[k1].push(v);\n        } else {\n          uri.query[k1] = [v];\n        }\n      } else {\n        uri.query[k] = v;\n      }\n    }\n    queryStr = queryStr.substring(index + 1);\n  }\n  return uri;\n}\n\n/* 去除对象中值为null，undefined的属性 */\nfunction cleanObject(objData) {\n  objData = objData || {};\n  var keys = Object.keys(objData);\n  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {\n    var key = _keys[_i];\n    if (objData[key] === null || typeof objData[key] === \"undefined\") {\n      delete objData[key];\n    }\n  }\n  return objData;\n}\n\n/* 将object类型转化为url字符串参数 */\nfunction convertObjectToUrl(objParams) {\n  var strParams = _qs.default.stringify(objParams, {\n    encode: true\n  });\n  if (strParams !== \"\") {\n    return \"?\" + strParams;\n  }\n  return \"\";\n}\n\n/* 除去多余的Content-Type */\nfunction removeExtraContentType(objHeader) {\n  objHeader = objHeader || {};\n  var keys = Object.keys(objHeader);\n  var type = \"\";\n  for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {\n    var key = _keys2[_i2];\n    if (key.toLowerCase() === \"content-type\") {\n      if (type !== \"\") {\n        // 协议规定，不能有多个Content-Type\n        delete objHeader[key];\n      } else {\n        type = objHeader[key];\n      }\n    }\n  }\n  // 名称标准化\n  if (type !== \"\") {\n    objHeader[\"Content-Type\"] = type;\n  }\n  return objHeader;\n}\n\n/**\r\n * 根据请求类型获取body中的需要加密的结果\r\n * @param {Object} objBodyParams    body的参数\r\n * @param {Object} objHeader        请求头\r\n * @return {String} 应该是请求中body的数据\r\n */\nfunction signStringifyBodyParams(objBodyParams, objHeader) {\n  objBodyParams = objBodyParams || {};\n  objHeader = objHeader || {};\n  var keys = Object.keys(objHeader);\n  var type;\n  for (var _i3 = 0, _keys3 = keys; _i3 < _keys3.length; _i3++) {\n    var key = _keys3[_i3];\n    if (key.toLowerCase() === \"content-type\") {\n      type = objHeader[key];\n    }\n  }\n  keys = null;\n  if (type === \"application/json\") {\n    return JSON.stringify(objBodyParams, null, 0);\n  } else if (type === \"application/x-www-form-urlencoded\") {\n    return _qs.default.stringify(objBodyParams, {\n      encode: false\n    });\n  } else {\n    return \"\";\n  }\n}\ncommBnsUniHttpRequest.bindAlias = function bindAlias(alias) {\n  var isAndroid = plus && plus.os.name === 'Android';\n  if (isAndroid) {\n    var PushManager = plus.android.importClass(\"com.igexin.sdk.PushManager\");\n    var context = plus.android.runtimeMainActivity().getContext();\n    var Instance = PushManager.getInstance();\n    Instance.bindAlias(context, alias);\n    __f__(\"log\", context, \" at commBns/commBnsUniHttpRequest.js:389\");\n  } else {\n    var GeTuiSdk = plus.ios.importClass(\"GeTuiSdk\");\n    GeTuiSdk.bindAliasandSequenceNum(alias, alias);\n  }\n};\nfunction unbindAlias(alias) {\n  var isAndroid = plus && plus.os.name === 'Android';\n  if (isAndroid) {\n    var PushManager = plus.android.importClass(\"com.igexin.sdk.PushManager\");\n    var context = plus.android.runtimeMainActivity().getContext();\n    var Instance = PushManager.getInstance();\n    Instance.unBindAlias(context, alias, true);\n  } else {\n    var GeTuiSdk = plus.ios.importClass(\"GeTuiSdk\");\n    GeTuiSdk.unbindAliasandSequenceNumandIsSelf(alias, alias, true);\n  }\n}\nvar _default = commBnsUniHttpRequest;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbUJucy9jb21tQm5zVW5pSHR0cFJlcXVlc3QuanMiXSwibmFtZXMiOlsiY29tbUJuc1VuaUh0dHBSZXF1ZXN0IiwiaGFzU3RhcnRSZWZyZXNoIiwiY3VyRW52aXJDZmciLCJjb21tQm5zQ29uZmlnIiwiZnVuY0dldEN1ckVudmlyQ2ZnIiwiRnVuY0Juc0h0dHBSZXF1ZXN0Iiwib2JqUmVxUGFyYW0iLCJpc0ZpcnN0Iiwib2JqRGF0YSIsImRpY3RIZWFkZXIiLCJzdHJXZWJTZXJ2aWNlVXJsIiwiZGVmYXVsdFVybCIsInN0ckh0dHBNZXRob2QiLCJ0b1VwcGVyQ2FzZSIsInJlbW92ZUV4dHJhQ29udGVudFR5cGUiLCJjbGVhbk9iamVjdCIsInN0clVyaVBhdGgiLCJzdHJVcmlQYXJhbXMiLCJzdHJTaWduQm9keSIsInVyaSIsImdldFVyaSIsInN0cldlYlNlcnZpY2VQYXRoIiwibmV3VXJsUGFyYW1zIiwiY29udmVydE9iamVjdFRvVXJsIiwicXVlcnkiLCJwYXRoIiwic3Vic3RyaW5nIiwic3RyUXVlcnkiLCJzaWduU3RyaW5naWZ5Qm9keVBhcmFtcyIsInNpZ25pbkRhdGEiLCJGdW5HZXRQZXJzaXN0ZW50RGF0YSIsImRpY3RDdXJIZWFkZXIiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzdHJBcHBLZXkiLCJhcHBLZXkiLCJ1dGlsU2lnbkJhc2VTSEExIiwiRnVuY0dldEN1clNpZ25EYXRhIiwiaGFzT3duUHJvcGVydHkiLCJzdGFydHNXaXRoIiwidG9rZW5UeXBlIiwidG9rZW4iLCJsb2dvdXQiLCJtZXNzYWdlIiwidW5pIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbXBsZXRlIiwiRnVuY0xvZ091dCIsInJlTGF1bmNoIiwidXJsIiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsImh0dHBSZXF1ZXN0IiwiRnVuY0h0dHBSZXF1ZXN0Iiwic3RyVXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb2RlIiwiZnVuY1JlZnJlc2hUb2tlbiIsInJlZnJlc2hUb2tlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsInVuYmluZEFsaWFzIiwidWlkIiwiRnVuUmVtb3ZlUGVyc2lzdGVudERhdGEiLCJGdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0IiwiRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aFBvc3QiLCJpc0pzb24iLCJGdW5jQm5zSHR0cFJlcXVlc3RXaXRoUHV0IiwiRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aERlbGV0ZSIsInV1aWQiLCJ2NCIsIkZ1blNldFBlcnNpc3RlbnREYXRhIiwiRnVuY0ZvcmdldFBhc3N3b3JkIiwicGhvbmUiLCJwYXNzd29yZCIsImNhcHRjaGEiLCJzbXNJZCIsInN0clBhdGgiLCJ0cmltIiwibGFzdFBvcyIsImxhc3RJbmRleE9mIiwicXVlcnlTdHIiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJvbmVRdWVyeVN0ciIsInNwbGl0SW5kZXgiLCJrIiwidiIsImVuZHNXaXRoIiwiazEiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwicHVzaCIsImtleXMiLCJrZXkiLCJvYmpQYXJhbXMiLCJzdHJQYXJhbXMiLCJxcyIsInN0cmluZ2lmeSIsImVuY29kZSIsIm9iakhlYWRlciIsInR5cGUiLCJ0b0xvd2VyQ2FzZSIsIm9iakJvZHlQYXJhbXMiLCJKU09OIiwiYmluZEFsaWFzIiwiYWxpYXMiLCJpc0FuZHJvaWQiLCJwbHVzIiwib3MiLCJuYW1lIiwiUHVzaE1hbmFnZXIiLCJhbmRyb2lkIiwiaW1wb3J0Q2xhc3MiLCJjb250ZXh0IiwicnVudGltZU1haW5BY3Rpdml0eSIsImdldENvbnRleHQiLCJJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiR2VUdWlTZGsiLCJpb3MiLCJiaW5kQWxpYXNhbmRTZXF1ZW5jZU51bSIsInVuQmluZEFsaWFzIiwidW5iaW5kQWxpYXNhbmRTZXF1ZW5jZU51bWFuZElzU2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVNBO0FB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V0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNqRE0sUUFBUSxDQUFDRSx1QkFBdUIsQ0FBQ2YsS0FBSyxFQUFFQSxLQUFLLENBQUM7RUFDaEQ7QUFDRixDQUFDO0FBRUQsU0FBUy9DLFdBQVcsQ0FBQytDLEtBQUssRUFBRTtFQUMxQixJQUFNQyxTQUFTLEdBQUdDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFFLENBQUNDLElBQUksS0FBSyxTQUFTO0VBQ3BELElBQUlILFNBQVMsRUFBRTtJQUNiLElBQU1JLFdBQVcsR0FBR0gsSUFBSSxDQUFDSSxPQUFPLENBQUNDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztJQUMxRSxJQUFNQyxPQUFPLEdBQUdOLElBQUksQ0FBQ0ksT0FBTyxDQUFDRyxtQkFBbUIsRUFBRSxDQUFDQyxVQUFVLEVBQUU7SUFDL0QsSUFBTUMsUUFBUSxHQUFHTixXQUFXLENBQUNPLFdBQVcsRUFBRTtJQUMxQ0QsUUFBUSxDQUFDSyxXQUFXLENBQUNSLE9BQU8sRUFBRVIsS0FBSyxFQUFFLElBQUksQ0FBQztFQUM1QyxDQUFDLE1BQU07SUFDTCxJQUFNYSxRQUFRLEdBQUdYLElBQUksQ0FBQ1ksR0FBRyxDQUFDUCxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ2pETSxRQUFRLENBQUNJLGtDQUFrQyxDQUFDakIsS0FBSyxFQUFFQSxLQUFLLEVBQUUsSUFBSSxDQUFDO0VBQ2pFO0FBQ0Y7QUFBQyxlQUVjcEgscUJBQXFCO0FBQUEsMkIiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWunueOsOWKn+iDve+8mumSiOWvueS4muWKoeS4rUh0dHDnmoTor7fmsYJcclxuICog5YibICAgIOW7uu+8muW8oOa0quazoiAgIDIwMjDlubQwNeaciDI15pelXHJcbiAqIOacgOi/keabtOaWsDog5byg5rSq5rOiICAgMjAyMOW5tDA15pyIMjbml6VcclxuICog55u45YWz6K+05piO77yaXHJcbiAqIOmZhOazqOivtOaYju+8mlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8v5a+85YWl57O757uf546v5aKDXHJcbmltcG9ydCBjb21tQm5zQ29uZmlnIGZyb20gXCIuL2NvbW1CbnNDb25maWcuanNcIjtcclxuXHJcbi8v5a+85YWlVW5pSHR0cHnor7fmsYLnmoTlt6XlhbdcclxuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9jb21tRnJtay9jb21tQXBwL3VuaUh0dHBSZXF1ZXN0VXRpbC91dGlsVW5pSHR0cFJlcXVlc3QuanNcIjtcclxuXHJcbi8v6ZKI5a+5SGFzaOetvuWQjeeul+azleeahOW3peWFt+exu1xyXG5pbXBvcnQgdXRpbFNpZ25CYXNlU0hBMSBmcm9tIFwiLi4vY29tbUZybWsvY29tbUFwcC9jb21tQXBwSGFzaFV0aWwvdXRpbFNpZ25CYXNlU0hBMS5qc1wiO1xyXG5cclxuXHJcbi8vIOmaj+acuuaVsOW3peWFt1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xyXG5pbXBvcnQgcXMgZnJvbSBcInFzXCI7XHJcblxyXG52YXIgY29tbUJuc1VuaUh0dHBSZXF1ZXN0ID0ge1xyXG4gIGhhc1N0YXJ0UmVmcmVzaDogZmFsc2UsXHJcbn07XHJcblxyXG4vL+iOt+W+l+W9k+eahOeOr+Wig+mFjee9rlxyXG52YXIgY3VyRW52aXJDZmcgPSBjb21tQm5zQ29uZmlnLmZ1bmNHZXRDdXJFbnZpckNmZygpO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIG9ialJlcVBhcmFtIOS4muWKoeivt+axgueahOWPguaVsFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59ICBpc0ZpcnN0ICAgICDmmK/lkKbmmK/nrKzkuIDmrKHosIPnlKhcclxuICogQHBhcmFtIHtTdHJpbmd9ICAgb2JqUmVxUGFyYW0uc3RyV2ViU2VydmljZVVybCAgICAgICAg5o+Q5L6bV2Vi5pyN5Yqh56uZ54K55Zyw5Z2AKOS4jeaPkOS+m+WImeiHquWKqOS7jueOr+Wig+S4reiOt+WPljrku4XnlKjkuo7pnZ7ku6PnkIbmqKHlvI8pXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSAgIG9ialJlcVBhcmFtLnN0cldlYlNlcnZpY2VQYXRoICAgICAgICDmj5DkvpvmnI3liqHnmoTot6/lvoRcclxuICogQHBhcmFtIHtTdHJpbmd9ICAgb2JqUmVxUGFyYW0uc3RySHR0cE1ldGhvZCAgICAgICAgICAgIOivt+axgueahOaWueazle+8iOebruWJjeWFiOiAg0dFVOWSjFBPU1TkuKTnp43mlrnms5Us57y655yB5Li6UE9TVO+8iVxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBvYmpSZXFQYXJhbS5vYmpEYXRhICAgICAgICAgICAgICDor7fmsYLnmoTmlbDmja4oUE9TVOS4uuivt+axgkJvZHnvvIzlpoLmnpzmmK9HRVTnlLHkuLrnvZHlnYDlj4LmlbApXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIG9ialJlcVBhcmFtLmRpY3RIZWFkZXIgICAgICAgICAgICDor7fmsYLnmoTlpLTpg6jmlbDmja4o5aS06YOo5pWw5o2u77yM5Y+v5LiN5o+Q5L6bKVxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyLmFwcGlkICAgICAgICDor7fmsYLnmoTlpLTpg6jmlbDmja4o5aS06YOo5pWw5o2u77yM5Y+v5LiN5o+Q5L6bKS5BcHBJRFxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyLmFwcGtleSAgICAgICAg6K+35rGC55qE5aS06YOo5pWw5o2uKOWktOmDqOaVsOaNru+8jOWPr+S4jeaPkOS+mykuQXBwS2V5XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSAgIG9ialJlcVBhcmFtLmRpY3RIZWFkZXIudGlja2V0ICAgICAgICDor7fmsYLnmoTlpLTpg6jmlbDmja4o5aS06YOo5pWw5o2u77yM5Y+v5LiN5o+Q5L6bKS5Ub2tlblxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyLnNpZ24gICAgICAgIOivt+axgueahOWktOmDqOaVsOaNrijlpLTpg6jmlbDmja7vvIzlj6/kuI3mj5DkvpspLkFQSeaOpeWPo+etvuWQjVxyXG4gKiBAcGFyYW0ge09iamVjdH0gICBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyLnRzICAgICAgICAgIOivt+axgueahOWktOmDqOaVsOaNrijlpLTpg6jmlbDmja7vvIzlj6/kuI3mj5DkvpspLuaXtumXtOaIs1xyXG4gKi9cclxuY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKG9ialJlcVBhcmFtID0ge30sIGlzRmlyc3QgPSB0cnVlKSB7XHJcbiAgb2JqUmVxUGFyYW0ub2JqRGF0YSA9IG9ialJlcVBhcmFtLm9iakRhdGEgfHwge307XHJcbiAgb2JqUmVxUGFyYW0uZGljdEhlYWRlciA9IG9ialJlcVBhcmFtLmRpY3RIZWFkZXIgfHwge307XHJcbiAgb2JqUmVxUGFyYW0uc3RyV2ViU2VydmljZVVybCA9IG9ialJlcVBhcmFtLnN0cldlYlNlcnZpY2VVcmwgfHwgY3VyRW52aXJDZmcuZGVmYXVsdFVybDtcclxuXHJcbiAgb2JqUmVxUGFyYW0uc3RySHR0cE1ldGhvZCA9IG9ialJlcVBhcmFtLnN0ckh0dHBNZXRob2QudG9VcHBlckNhc2UoKSB8fCBcIlBPU1RcIjtcclxuXHJcbiAgb2JqUmVxUGFyYW0uZGljdEhlYWRlciA9IHJlbW92ZUV4dHJhQ29udGVudFR5cGUob2JqUmVxUGFyYW0uZGljdEhlYWRlcik7XHJcbiAgLy8g5qC55o2u6K+35rGC5pa55byP5a+56K+35rGC5Y+C5pWw6L+b6KGM5ZCI5bm26L2s5YyW77yM5ZCM5pe25o+Q5Y+W5Ye66K6h566Xc2lnbumcgOimgeeahOWPguaVsFxyXG4gIG9ialJlcVBhcmFtLm9iakRhdGEgPSBjbGVhbk9iamVjdChvYmpSZXFQYXJhbS5vYmpEYXRhKTtcclxuICBsZXQgc3RyVXJpUGF0aCA9IFwiXCI7XHJcbiAgbGV0IHN0clVyaVBhcmFtcyA9IFwiXCI7XHJcbiAgbGV0IHN0clNpZ25Cb2R5ID0gXCJcIjtcclxuICBpZiAob2JqUmVxUGFyYW0uc3RySHR0cE1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBcIkdFVFwiKSB7XHJcbiAgICAvLyBHRVTor7fmsYLvvIzmiopVUkzkuIrnmoTlj4LmlbDmj5Dlj5blh7rmnaXvvIzlkoxvYmpEYXRh5ZCI5bm277yM5aaC5p6c5pyJ6YeN5aSN77yM5Lulb2JqRGF0YeS4reeahOS4uuWHhlxyXG4gICAgLy8gdW5pYXBw5LiN5Lya5ZyoVVJM5pS+5pWw57uE5Y+C5pWw77yM6L+Z5pivdW5pYXBw55qE6Zeu6aKY77yM5omA5Lul5pS55Li66Ieq5bex5omL5Yqo6K6+572uXHJcbiAgICBsZXQgdXJpID0gZ2V0VXJpKG9ialJlcVBhcmFtLnN0cldlYlNlcnZpY2VQYXRoKTtcclxuICAgIGxldCBuZXdVcmxQYXJhbXMgPSBjb252ZXJ0T2JqZWN0VG9Vcmwoe1xyXG4gICAgICAuLi5vYmpSZXFQYXJhbS5vYmpEYXRhLFxyXG4gICAgICAuLi51cmkucXVlcnlcclxuICAgIH0pO1xyXG4gICAgLy8g55u05o6l5bCG5Y+C5pWw5ou85o6l5YiwdXJs5ZCO6Z2iXHJcbiAgICBvYmpSZXFQYXJhbS5zdHJXZWJTZXJ2aWNlUGF0aCA9IHVyaS5wYXRoICsgbmV3VXJsUGFyYW1zO1xyXG4gICAgLy8g5riF6Zmk5o6J6K+35rGC5Y+C5pWwXHJcbiAgICBvYmpSZXFQYXJhbS5vYmpEYXRhID0ge307XHJcbiAgICBzdHJVcmlQYXRoID0gdXJpLnBhdGg7XHJcbiAgICBzdHJVcmlQYXJhbXMgPSBuZXdVcmxQYXJhbXMuc3Vic3RyaW5nKDEpO1xyXG4gICAgc3RyU2lnbkJvZHkgPSBcIlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDlhbbkvZnor7fmsYLvvIzkuI3lgZrlj5jljJZcclxuICAgIGxldCB1cmkgPSBnZXRVcmkob2JqUmVxUGFyYW0uc3RyV2ViU2VydmljZVBhdGgpO1xyXG4gICAgc3RyVXJpUGF0aCA9IHVyaS5wYXRoO1xyXG4gICAgc3RyVXJpUGFyYW1zID0gdXJpLnN0clF1ZXJ5O1xyXG4gICAgc3RyU2lnbkJvZHkgPSBzaWduU3RyaW5naWZ5Qm9keVBhcmFtcyhvYmpSZXFQYXJhbS5vYmpEYXRhLCBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyKTtcclxuICB9XHJcblxyXG4gIC8vIOWvueivt+axguWktOmDqOWFrOWFseWkhOeQhlxyXG4gIC8vIOS4u+imgeaYr+imgeWBmuetvuWQjeWSjOiupOivge+8jOWFiOiOt+WPlueZu+mZhuS/oeaBr1xyXG4gIGxldCBzaWduaW5EYXRhID0gY29tbUJuc0NvbmZpZy5GdW5HZXRQZXJzaXN0ZW50RGF0YShcInNpZ25pbkRhdGFcIik7XHJcbiAgbGV0IGRpY3RDdXJIZWFkZXIgPSBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyO1xyXG5cclxuICAvL+iuvue9rlRTXHJcbiAgZGljdEN1ckhlYWRlcltcInRzXCJdID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xyXG5cclxuICAvL+iuvue9rnNpZ25cclxuICBpZiAoc2lnbmluRGF0YSAhPT0gXCJcIikge1xyXG4gICAgbGV0IHN0ckFwcEtleSA9IHNpZ25pbkRhdGEuYXBwS2V5O1xyXG4gICAgZGljdEN1ckhlYWRlcltcInNpZ25cIl0gPVxyXG4gICAgICB1dGlsU2lnbkJhc2VTSEExLkZ1bmNHZXRDdXJTaWduRGF0YShcclxuICAgICAgICBzdHJBcHBLZXksXHJcbiAgICAgICAgc3RyVXJpUGF0aCxcclxuICAgICAgICBkaWN0Q3VySGVhZGVyW1widHNcIl0sXHJcbiAgICAgICAgc3RyVXJpUGFyYW1zLFxyXG4gICAgICAgIHN0clNpZ25Cb2R5KTtcclxuICB9XHJcbiAgb2JqUmVxUGFyYW0uZGljdEhlYWRlciA9IGRpY3RDdXJIZWFkZXI7XHJcblxyXG4gIGlmICghZGljdEN1ckhlYWRlci5oYXNPd25Qcm9wZXJ0eShcIkF1dGhvcml6YXRpb25cIikgfHwgIWRpY3RDdXJIZWFkZXJbXCJBdXRob3JpemF0aW9uXCJdLnN0YXJ0c1dpdGgoXCJCYXNpY1wiKSkge1xyXG4gICAgZGljdEN1ckhlYWRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBzaWduaW5EYXRhLnRva2VuVHlwZSArIFwiIFwiICsgc2lnbmluRGF0YS50b2tlbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dChtZXNzYWdlKSB7XHJcbiAgICB1bmkuc2hvd01vZGFsKHtcclxuICAgICAgdGl0bGU6ICfnmbvlvZXov4fmnJ8nLFxyXG4gICAgICBjb250ZW50OiBtZXNzYWdlLFxyXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jTG9nT3V0KCk7XHJcbiAgICAgICAgdW5pLnJlTGF1bmNoKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbi9sb2dpbidcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDlsJ3or5Xlj5Hlh7ror7fmsYJcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb3ZlLCByZWplY3QpIHtcclxuICAgIGh0dHBSZXF1ZXN0LkZ1bmNIdHRwUmVxdWVzdCh7XHJcbiAgICAgIHN0clVybDogb2JqUmVxUGFyYW0uc3RyV2ViU2VydmljZVVybCArIG9ialJlcVBhcmFtLnN0cldlYlNlcnZpY2VQYXRoLFxyXG4gICAgICBzdHJIdHRwTWV0aG9kOiBvYmpSZXFQYXJhbS5zdHJIdHRwTWV0aG9kLFxyXG4gICAgICBvYmpEYXRhOiBvYmpSZXFQYXJhbS5vYmpEYXRhLFxyXG4gICAgICBkaWN0SGVhZGVyOiBvYmpSZXFQYXJhbS5kaWN0SGVhZGVyXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAvLyB0b2tlbuWPr+iDveWkseaViFxyXG4gICAgICBpZiAocmVzLmRhdGEuY29kZSA9PT0gNDAxMDEgfHwgcmVzLmRhdGEuY29kZSA9PT0gNDAxMDMgfHwgcmVzLmRhdGEuY29kZSA9PT0gNDAxMDUpIHtcclxuICAgICAgICBpZiAoaXNGaXJzdCkge1xyXG4gICAgICAgICAgLy8g5aaC5p6c5bey57uP5pyJcmVmcmVzaOeahOivt+axguS6hu+8jOWImei/meS4quivt+axguaXoOaViFxyXG4gICAgICAgICAgaWYgKGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5oYXNTdGFydFJlZnJlc2ggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5oYXNTdGFydFJlZnJlc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgIC8vIOmHjeaWsOiOt+WPlnRva2VuIFxyXG4gICAgICAgICAgICAgIGZ1bmNSZWZyZXNoVG9rZW4oc2lnbmluRGF0YS5yZWZyZXNoVG9rZW4gfHwgXCJcIikudGhlbihcclxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgLy8g6YeN5paw5Y+R6LW36K+35rGCXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0KG9ialJlcVBhcmFtLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyDojrflj5Z0b2tlbuWksei0pe+8jOmAgOWHuueZu+mZhlxyXG4gICAgICAgICAgICAgICAgICBjb21tQm5zVW5pSHR0cFJlcXVlc3QuaGFzU3RhcnRSZWZyZXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGxvZ291dChcIumVv+aXtumXtOacqueZu+W9leiuvuWkh++8jOeZu+W9leWkseaViFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgICAgICAgICAgIC8vIOmAgOWHuueZu+mZhlxyXG4gICAgICAgICAgICAgICAgY29tbUJuc1VuaUh0dHBSZXF1ZXN0Lmhhc1N0YXJ0UmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbG9nb3V0KFwi6L+e5o6l5pyN5Yqh5Zmo5byC5bi4XCIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyDpgIDlh7rnmbvpmYZcclxuICAgICAgICAgIGxvZ291dChcIueUqOaIt+WcqOWFtuS7luiuvuWkh+eZu+W9lVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8g6K+35rGC5oiQ5Yqf77yM6L+U5Zue57uT5p6cXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc292ZShbcmVzXSk7XHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHJlc292ZShbbnVsbCwgZXJyXSk7XHJcbiAgfSk7XHJcbn0pO1xyXG59XHJcblxyXG4vKipcclxuICog55m75Ye65omn6KGM55qE6K+35rGC5pON5L2cXHJcbiAqL1xyXG5jb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0xvZ091dCA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCBzaWduaW5EYXRhID0gY29tbUJuc0NvbmZpZy5GdW5HZXRQZXJzaXN0ZW50RGF0YShcInNpZ25pbkRhdGFcIik7XHJcbiAgdW5iaW5kQWxpYXMoc2lnbmluRGF0YS51aWQudG9TdHJpbmcoKSk7XHJcbiAgY29tbUJuc0NvbmZpZy5GdW5SZW1vdmVQZXJzaXN0ZW50RGF0YShcInNpZ25pbkRhdGFcIik7XHJcbn1cclxuXHJcblxyXG5cclxuY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhHZXQgPSBmdW5jdGlvbihzdHJXZWJTZXJ2aWNlUGF0aCwgb2JqRGF0YSA9IHt9LCBkaWN0SGVhZGVyID0ge30pIHtcclxuICByZXR1cm4gdGhpcy5GdW5jQm5zSHR0cFJlcXVlc3Qoe1xyXG4gICAgc3RyV2ViU2VydmljZVBhdGgsXHJcbiAgICBvYmpEYXRhLFxyXG4gICAgZGljdEhlYWRlcixcclxuICAgIHN0ckh0dHBNZXRob2Q6ICdHRVQnLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0ID0gZnVuY3Rpb24oc3RyV2ViU2VydmljZVBhdGgsIG9iakRhdGEgPSB7fSwgZGljdEhlYWRlciA9IHt9LCBpc0pzb24gPVxyXG4gIGZhbHNlKSB7XHJcbiAgcmV0dXJuIHRoaXMuRnVuY0Juc0h0dHBSZXF1ZXN0KHtcclxuICAgIHN0cldlYlNlcnZpY2VQYXRoLFxyXG4gICAgb2JqRGF0YSxcclxuICAgIGRpY3RIZWFkZXI6IHtcclxuICAgICAgLi4uZGljdEhlYWRlcixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogaXNKc29uID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgfSxcclxuICAgIHN0ckh0dHBNZXRob2Q6ICdQT1NUJyxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUHV0ID0gZnVuY3Rpb24oc3RyV2ViU2VydmljZVBhdGgsIG9iakRhdGEgPSB7fSwgZGljdEhlYWRlciA9IHt9LCBpc0pzb24gPVxyXG4gIGZhbHNlKSB7XHJcbiAgcmV0dXJuIHRoaXMuRnVuY0Juc0h0dHBSZXF1ZXN0KHtcclxuICAgIHN0cldlYlNlcnZpY2VQYXRoLFxyXG4gICAgb2JqRGF0YSxcclxuICAgIGRpY3RIZWFkZXI6IHtcclxuICAgICAgLi4uZGljdEhlYWRlcixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogaXNKc29uID8gXCJhcHBsaWNhdGlvbi9qc29uXCIgOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgfSxcclxuICAgIHN0ckh0dHBNZXRob2Q6ICdQVVQnLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhEZWxldGUgPSBmdW5jdGlvbihzdHJXZWJTZXJ2aWNlUGF0aCwgb2JqRGF0YSA9IHt9LCBkaWN0SGVhZGVyID0ge30sIGlzSnNvbiA9XHJcbiAgZmFsc2UpIHtcclxuICByZXR1cm4gdGhpcy5GdW5jQm5zSHR0cFJlcXVlc3Qoe1xyXG4gICAgc3RyV2ViU2VydmljZVBhdGgsXHJcbiAgICBvYmpEYXRhLFxyXG4gICAgZGljdEhlYWRlcjoge1xyXG4gICAgICAuLi5kaWN0SGVhZGVyLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBpc0pzb24gPyBcImFwcGxpY2F0aW9uL2pzb25cIiA6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICB9LFxyXG4gICAgc3RySHR0cE1ldGhvZDogJ0RFTEVURScsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuLyog5Yi35pawdG9rZW4gKi9cclxuZnVuY3Rpb24gZnVuY1JlZnJlc2hUb2tlbihyZWZyZXNoVG9rZW4pIHtcclxuICBsZXQgb2JqUmVxUGFyYW0gPSB7XHJcbiAgICBzdHJXZWJTZXJ2aWNlUGF0aDogJy91c2VyL3NpZ25pbi9yZWZyZXNoJyxcclxuICAgIHN0ckh0dHBNZXRob2Q6ICdQT1NUJyxcclxuICAgIG9iakRhdGE6IHtcclxuICAgICAgcmVmcmVzaFRva2VuLFxyXG4gICAgICBhcHBLZXk6IHV1aWQudjQoKSxcclxuICAgIH0sXHJcbiAgICBkaWN0SGVhZGVyOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFlYQndPbkJoYzNOM2IzSmtcIlxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdChvYmpSZXFQYXJhbSkudGhlbihmdW5jdGlvbihyZXMpe1xyXG4gICBpZiAocmVzLmRhdGEuc3VjY2VzcyA9PT0gMSkge1xyXG4gICAgIGNvbW1CbnNDb25maWcuRnVuU2V0UGVyc2lzdGVudERhdGEoXCJzaWduaW5EYXRhXCIsIHJlcy5kYXRhLmRhdGEpO1xyXG4gICB9IFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKiDlv5jorrDlr4bnoIEgKi9cclxuY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNGb3JnZXRQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uKHBob25lLCBwYXNzd29yZCwgY2FwdGNoYSwgc21zSWQpIHtcclxuICBsZXQgb2JqUmVxUGFyYW0gPSB7XHJcbiAgICBzdHJXZWJTZXJ2aWNlUGF0aDogJy91c2VyL3NpZ25pbi9mb3JnZXQnLFxyXG4gICAgc3RySHR0cE1ldGhvZDogJ1BPU1QnLFxyXG4gICAgb2JqRGF0YToge1xyXG4gICAgICBwaG9uZSxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIGNhcHRjaGEsXHJcbiAgICAgIHNtc0lkLFxyXG4gICAgfSxcclxuICAgIGRpY3RIZWFkZXI6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgWVhCd09uQmhjM04zYjNKa1wiXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3Qob2JqUmVxUGFyYW0pO1xyXG59XHJcblxyXG4vKiDliIbnprvlvIDor7fmsYLot6/lvoTlkozor7fmsYLot6/lvoTkuIrnmoTlj4LmlbDvvIzlj4LmlbDlpoLmnpzplK7mnInph43lpI3nmoTvvIzlj5bmnIDlkI7kuIDkuKrnmoTlgLwgKi9cclxuZnVuY3Rpb24gZ2V0VXJpKHN0clBhdGgpIHtcclxuICBsZXQgdXJpID0ge307XHJcbiAgc3RyUGF0aCA9IHN0clBhdGgudHJpbSgpO1xyXG4gIGxldCBsYXN0UG9zID0gc3RyUGF0aC5sYXN0SW5kZXhPZihcIj9cIik7XHJcblxyXG4gIGlmIChsYXN0UG9zIDwgMCkge1xyXG4gICAgdXJpLnBhdGggPSBzdHJQYXRoO1xyXG4gICAgdXJpLnN0clF1ZXJ5ID0gXCJcIjtcclxuICAgIHVyaS5xdWVyeSA9IHt9O1xyXG4gICAgcmV0dXJuIHVyaTtcclxuICB9XHJcbiAgdXJpLnBhdGggPSBzdHJQYXRoLnN1YnN0cmluZygwLCBsYXN0UG9zKTtcclxuICBsZXQgcXVlcnlTdHIgPSBsYXN0UG9zID09PSBzdHJQYXRoLmxlbmd0aCA/IFwiXCIgOiBzdHJQYXRoLnN1YnN0cmluZyhsYXN0UG9zICsgMSk7XHJcbiAgdXJpLnN0clF1ZXJ5ID0gcXVlcnlTdHI7XHJcbiAgdXJpLnF1ZXJ5ID0ge307XHJcbiAgd2hpbGUgKHF1ZXJ5U3RyLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbGV0IGluZGV4ID0gcXVlcnlTdHIuaW5kZXhPZihcIiZcIik7XHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIGluZGV4ID0gcXVlcnlTdHIubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgbGV0IG9uZVF1ZXJ5U3RyID0gcXVlcnlTdHIuc3Vic3RyaW5nKDAsIGluZGV4KTtcclxuICAgIGxldCBzcGxpdEluZGV4ID0gb25lUXVlcnlTdHIuaW5kZXhPZihcIj1cIik7XHJcbiAgICBpZiAoc3BsaXRJbmRleCA+IDAgJiYgc3BsaXRJbmRleCA8IG9uZVF1ZXJ5U3RyLmxlbmd0aCAtIDEpIHtcclxuICAgICAgbGV0IGsgPSBvbmVRdWVyeVN0ci5zdWJzdHJpbmcoMCwgc3BsaXRJbmRleCk7XHJcbiAgICAgIGxldCB2ID0gb25lUXVlcnlTdHIuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcclxuICAgICAgaWYgKGsuZW5kc1dpdGgoXCJbXVwiKSAmJiBrLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICBsZXQgazEgPSBrLnN1YnN0cmluZygwLCBrLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodXJpLnF1ZXJ5W2sxXSkgPT09IFwiW29iamVjdCBBcnJheV1cIikge1xyXG4gICAgICAgICAgdXJpLnF1ZXJ5W2sxXS5wdXNoKHYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmkucXVlcnlbazFdID0gW3ZdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cmkucXVlcnlba10gPSB2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBxdWVyeVN0ciA9IHF1ZXJ5U3RyLnN1YnN0cmluZyhpbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVyaTtcclxufVxyXG5cclxuLyog5Y676Zmk5a+56LGh5Lit5YC85Li6bnVsbO+8jHVuZGVmaW5lZOeahOWxnuaApyAqL1xyXG5mdW5jdGlvbiBjbGVhbk9iamVjdChvYmpEYXRhKSB7XHJcbiAgb2JqRGF0YSA9IG9iakRhdGEgfHwge307XHJcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpEYXRhKTtcclxuICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgaWYgKG9iakRhdGFba2V5XSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqRGF0YVtrZXldID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGRlbGV0ZSBvYmpEYXRhW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmpEYXRhO1xyXG59XHJcblxyXG4vKiDlsIZvYmplY3TnsbvlnovovazljJbkuLp1cmzlrZfnrKbkuLLlj4LmlbAgKi9cclxuZnVuY3Rpb24gY29udmVydE9iamVjdFRvVXJsKG9ialBhcmFtcykge1xyXG4gIGxldCBzdHJQYXJhbXMgPSBxcy5zdHJpbmdpZnkob2JqUGFyYW1zLCB7XHJcbiAgICBlbmNvZGU6IHRydWVcclxuICB9KTtcclxuICBpZiAoc3RyUGFyYW1zICE9PSBcIlwiKSB7XHJcbiAgICByZXR1cm4gXCI/XCIgKyBzdHJQYXJhbXM7XHJcbiAgfVxyXG4gIHJldHVybiBcIlwiO1xyXG59XHJcblxyXG4vKiDpmaTljrvlpJrkvZnnmoRDb250ZW50LVR5cGUgKi9cclxuZnVuY3Rpb24gcmVtb3ZlRXh0cmFDb250ZW50VHlwZShvYmpIZWFkZXIpIHtcclxuICBvYmpIZWFkZXIgPSBvYmpIZWFkZXIgfHwge307XHJcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpIZWFkZXIpO1xyXG4gIGxldCB0eXBlID0gXCJcIjtcclxuICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBcImNvbnRlbnQtdHlwZVwiKSB7XHJcbiAgICAgIGlmICh0eXBlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgLy8g5Y2P6K6u6KeE5a6a77yM5LiN6IO95pyJ5aSa5LiqQ29udGVudC1UeXBlXHJcbiAgICAgICAgZGVsZXRlIG9iakhlYWRlcltrZXldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHR5cGUgPSBvYmpIZWFkZXJba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyDlkI3np7DmoIflh4bljJZcclxuICBpZiAodHlwZSAhPT0gXCJcIikge1xyXG4gICAgb2JqSGVhZGVyW1wiQ29udGVudC1UeXBlXCJdID0gdHlwZTtcclxuICB9XHJcbiAgcmV0dXJuIG9iakhlYWRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOagueaNruivt+axguexu+Wei+iOt+WPlmJvZHnkuK3nmoTpnIDopoHliqDlr4bnmoTnu5PmnpxcclxuICogQHBhcmFtIHtPYmplY3R9IG9iakJvZHlQYXJhbXMgICAgYm9keeeahOWPguaVsFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqSGVhZGVyICAgICAgICDor7fmsYLlpLRcclxuICogQHJldHVybiB7U3RyaW5nfSDlupTor6XmmK/or7fmsYLkuK1ib2R555qE5pWw5o2uXHJcbiAqL1xyXG5mdW5jdGlvbiBzaWduU3RyaW5naWZ5Qm9keVBhcmFtcyhvYmpCb2R5UGFyYW1zLCBvYmpIZWFkZXIpIHtcclxuICBvYmpCb2R5UGFyYW1zID0gb2JqQm9keVBhcmFtcyB8fCB7fTtcclxuICBvYmpIZWFkZXIgPSBvYmpIZWFkZXIgfHwge307XHJcbiAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhvYmpIZWFkZXIpO1xyXG4gIGxldCB0eXBlO1xyXG4gIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGVudC10eXBlXCIpIHtcclxuICAgICAgdHlwZSA9IG9iakhlYWRlcltrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICBrZXlzID0gbnVsbDtcclxuICBpZiAodHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmpCb2R5UGFyYW1zLCBudWxsLCAwKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpIHtcclxuICAgIHJldHVybiBxcy5zdHJpbmdpZnkob2JqQm9keVBhcmFtcywge1xyXG4gICAgICBlbmNvZGU6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG5jb21tQm5zVW5pSHR0cFJlcXVlc3QuYmluZEFsaWFzID0gZnVuY3Rpb24gYmluZEFsaWFzKGFsaWFzKSB7XHJcbiAgY29uc3QgaXNBbmRyb2lkID0gcGx1cyAmJiBwbHVzLm9zLm5hbWUgPT09ICdBbmRyb2lkJztcclxuICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICBjb25zdCBQdXNoTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImNvbS5pZ2V4aW4uc2RrLlB1c2hNYW5hZ2VyXCIpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCkuZ2V0Q29udGV4dCgpO1xyXG4gICAgY29uc3QgSW5zdGFuY2UgPSBQdXNoTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgSW5zdGFuY2UuYmluZEFsaWFzKGNvbnRleHQsIGFsaWFzKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IEdlVHVpU2RrID0gcGx1cy5pb3MuaW1wb3J0Q2xhc3MoXCJHZVR1aVNka1wiKTtcclxuICAgIEdlVHVpU2RrLmJpbmRBbGlhc2FuZFNlcXVlbmNlTnVtKGFsaWFzLCBhbGlhcyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmJpbmRBbGlhcyhhbGlhcykge1xyXG4gIGNvbnN0IGlzQW5kcm9pZCA9IHBsdXMgJiYgcGx1cy5vcy5uYW1lID09PSAnQW5kcm9pZCc7XHJcbiAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgY29uc3QgUHVzaE1hbmFnZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJjb20uaWdleGluLnNkay5QdXNoTWFuYWdlclwiKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpLmdldENvbnRleHQoKTtcclxuICAgIGNvbnN0IEluc3RhbmNlID0gUHVzaE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIEluc3RhbmNlLnVuQmluZEFsaWFzKGNvbnRleHQsIGFsaWFzLCB0cnVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgR2VUdWlTZGsgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcyhcIkdlVHVpU2RrXCIpO1xyXG4gICAgR2VUdWlTZGsudW5iaW5kQWxpYXNhbmRTZXF1ZW5jZU51bWFuZElzU2VsZihhbGlhcywgYWxpYXMsIHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbUJuc1VuaUh0dHBSZXF1ZXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!***************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/commBns/commBnsConfig.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/************************************************************************************************************\r\n * 实现功能：针对系统中公共配置\r\n * 创    建：张洪波   2020年05月20日\r\n * 最近更新: 张洪波   2020年05月20日\r\n * 相关说明：\r\n * 附注说明：\r\n *************************************************************************************************************/\n\n//针对业务的公共配置\nvar commBnsConfig = {\n  // 当前环境基本配置\n  baseCfg: {\n    // 当前环境基本配置.环境类型:Product:生产环境,Dvlp:开发环境,Test:测试环境\n    envirType: 'Product',\n    // 当前环境中:默认strDefaultWebServerHost地址\n    // strDefaultWebServerHost: 'api.pro.smartlab.vip',\n    strDefaultWebServerHost: 'api.dev.smartlab.vip',\n    //头像url\n    // pictureUrl: 'https://dianzikancha-dev-user-avatar.obs.cn-south-1.myhuaweicloud.com/'\n    pictureUrl: 'https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/'\n  }\n};\n\n/**\r\n * 设置持久化数据到配置中，会自动保存到本地\r\n * @param {string} key 保存使用的键\r\n * @param {type} value 保存的值\r\n * @param {Boolean} override 如果原来有值，是否覆写原来的值，如果不覆写会返回失败\r\n * @return {Boolean} 保存是否成功\r\n */\ncommBnsConfig.FunSetPersistentData = function (key, value) {\n  try {\n    uni.setStorageSync(key, value);\n  } catch (e) {\n    return false;\n  }\n  return true;\n};\n\n/**\r\n * 获取持久化数据到配置中，先从配置中找，再从本地找并加到配置中\r\n * @param {string} key 键\r\n * @return {type} 对应的值，如果没有找到，模仿uni的，返回\"\"\r\n */\ncommBnsConfig.FunGetPersistentData = function (key) {\n  try {\n    return uni.getStorageSync(key);\n  } catch (e) {\n    return \"\";\n  }\n};\n\n/**\r\n * 移除一个持久化数据\r\n * @param {string} key 键\r\n */\ncommBnsConfig.FunRemovePersistentData = function (key) {\n  try {\n    uni.removeStorageSync(key);\n  } catch (e) {}\n};\ncommBnsConfig.funcGetCurEnvirCfg = function () {\n  var envType = this.baseCfg.envirType;\n  var config = {};\n  envType = envType == null ? \"Dvlp\" : envType;\n  // 当前Web请求配置\n  var host = commBnsConfig.baseCfg.strDefaultWebServerHost || \"localhost\";\n  switch (envType) {\n    default:\n    case \"Dvlp\":\n      config.defaultUrl = \"http://\".concat(host, \":9036\");\n      break;\n    case \"Product\":\n      config.defaultUrl = \"http://localhost:9527\";\n      break;\n    case \"Test\":\n      config.defaultUrl = \"http://\".concat(host);\n      break;\n  }\n  return config;\n};\nvar _default = commBnsConfig;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbUJucy9jb21tQm5zQ29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbW1CbnNDb25maWciLCJiYXNlQ2ZnIiwiZW52aXJUeXBlIiwic3RyRGVmYXVsdFdlYlNlcnZlckhvc3QiLCJwaWN0dXJlVXJsIiwiRnVuU2V0UGVyc2lzdGVudERhdGEiLCJrZXkiLCJ2YWx1ZSIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwiZSIsIkZ1bkdldFBlcnNpc3RlbnREYXRhIiwiZ2V0U3RvcmFnZVN5bmMiLCJGdW5SZW1vdmVQZXJzaXN0ZW50RGF0YSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZnVuY0dldEN1ckVudmlyQ2ZnIiwiZW52VHlwZSIsImNvbmZpZyIsImhvc3QiLCJkZWZhdWx0VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUlBLGFBQWEsR0FBRztFQUNsQjtFQUNBQyxPQUFPLEVBQUU7SUFDUDtJQUNBQyxTQUFTLEVBQUUsU0FBUztJQUNwQjtJQUNBO0lBQ0FDLHVCQUF1QixFQUFFLHNCQUFzQjtJQUUvQztJQUNBO0lBQ0FDLFVBQVUsRUFBRTtFQUNkO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSixhQUFhLENBQUNLLG9CQUFvQixHQUFHLFVBQVVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0VBQ3pELElBQUk7SUFDRkMsR0FBRyxDQUFDQyxjQUFjLENBQUNILEdBQUcsRUFBRUMsS0FBSyxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7SUFDVixPQUFPLEtBQUs7RUFDZDtFQUNBLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBVixhQUFhLENBQUNXLG9CQUFvQixHQUFHLFVBQVVMLEdBQUcsRUFBRTtFQUNsRCxJQUFJO0lBQ0YsT0FBT0UsR0FBRyxDQUFDSSxjQUFjLENBQUNOLEdBQUcsQ0FBQztFQUNoQyxDQUFDLENBQUMsT0FBT0ksQ0FBQyxFQUFFO0lBQ1YsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FWLGFBQWEsQ0FBQ2EsdUJBQXVCLEdBQUcsVUFBVVAsR0FBRyxFQUFFO0VBQ3JELElBQUk7SUFDRkUsR0FBRyxDQUFDTSxpQkFBaUIsQ0FBQ1IsR0FBRyxDQUFDO0VBQzVCLENBQUMsQ0FBQyxPQUFPSSxDQUFDLEVBQUUsQ0FDWjtBQUNGLENBQUM7QUFFRFYsYUFBYSxDQUFDZSxrQkFBa0IsR0FBRyxZQUFZO0VBQzdDLElBQUlDLE9BQU8sR0FBRyxJQUFJLENBQUNmLE9BQU8sQ0FBQ0MsU0FBUztFQUNwQyxJQUFNZSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ2pCRCxPQUFPLEdBQUdBLE9BQU8sSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHQSxPQUFPO0VBQzVDO0VBQ0EsSUFBTUUsSUFBSSxHQUFHbEIsYUFBYSxDQUFDQyxPQUFPLENBQUNFLHVCQUF1QixJQUFJLFdBQVc7RUFDekUsUUFBUWEsT0FBTztJQUNiO0lBQ0EsS0FBSyxNQUFNO01BQ1RDLE1BQU0sQ0FBQ0UsVUFBVSxvQkFBYUQsSUFBSSxVQUFPO01BQ3pDO0lBQ0YsS0FBSyxTQUFTO01BQ1pELE1BQU0sQ0FBQ0UsVUFBVSwwQkFBMEI7TUFDM0M7SUFDRixLQUFLLE1BQU07TUFDVEYsTUFBTSxDQUFDRSxVQUFVLG9CQUFhRCxJQUFJLENBQUU7TUFDcEM7RUFBTTtFQUVWLE9BQU9ELE1BQU07QUFDZixDQUFDO0FBQUMsZUFFYWpCLGFBQWE7QUFBQSIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICog5a6e546w5Yqf6IO977ya6ZKI5a+557O757uf5Lit5YWs5YWx6YWN572uXHJcbiAqIOWImyAgICDlu7rvvJrlvKDmtKrms6IgICAyMDIw5bm0MDXmnIgyMOaXpVxyXG4gKiDmnIDov5Hmm7TmlrA6IOW8oOa0quazoiAgIDIwMjDlubQwNeaciDIw5pelXHJcbiAqIOebuOWFs+ivtOaYju+8mlxyXG4gKiDpmYTms6jor7TmmI7vvJpcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL+mSiOWvueS4muWKoeeahOWFrOWFsemFjee9rlxyXG52YXIgY29tbUJuc0NvbmZpZyA9IHtcclxuICAvLyDlvZPliY3njq/looPln7rmnKzphY3nva5cclxuICBiYXNlQ2ZnOiB7XHJcbiAgICAvLyDlvZPliY3njq/looPln7rmnKzphY3nva4u546v5aKD57G75Z6LOlByb2R1Y3Q655Sf5Lqn546v5aKDLER2bHA65byA5Y+R546v5aKDLFRlc3Q65rWL6K+V546v5aKDXHJcbiAgICBlbnZpclR5cGU6ICdQcm9kdWN0JyxcclxuICAgIC8vIOW9k+WJjeeOr+Wig+S4rTrpu5jorqRzdHJEZWZhdWx0V2ViU2VydmVySG9zdOWcsOWdgFxyXG4gICAgLy8gc3RyRGVmYXVsdFdlYlNlcnZlckhvc3Q6ICdhcGkucHJvLnNtYXJ0bGFiLnZpcCcsXHJcbiAgICBzdHJEZWZhdWx0V2ViU2VydmVySG9zdDogJ2FwaS5kZXYuc21hcnRsYWIudmlwJyxcclxuICAgIFxyXG4gICAgLy/lpLTlg491cmxcclxuICAgIC8vIHBpY3R1cmVVcmw6ICdodHRwczovL2RpYW56aWthbmNoYS1kZXYtdXNlci1hdmF0YXIub2JzLmNuLXNvdXRoLTEubXlodWF3ZWljbG91ZC5jb20vJ1xyXG4gICAgcGljdHVyZVVybDogJ2h0dHBzOi8vZGlhbnppa2FuY2hhLXVzZXItYXZhdGFyLm9icy5jbi1zb3V0aC0xLm15aHVhd2VpY2xvdWQuY29tLydcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOiuvue9ruaMgeS5heWMluaVsOaNruWIsOmFjee9ruS4re+8jOS8muiHquWKqOS/neWtmOWIsOacrOWcsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IOS/neWtmOS9v+eUqOeahOmUrlxyXG4gKiBAcGFyYW0ge3R5cGV9IHZhbHVlIOS/neWtmOeahOWAvFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJyaWRlIOWmguaenOWOn+adpeacieWAvO+8jOaYr+WQpuimhuWGmeWOn+adpeeahOWAvO+8jOWmguaenOS4jeimhuWGmeS8mui/lOWbnuWksei0pVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDkv53lrZjmmK/lkKbmiJDlip9cclxuICovXHJcbmNvbW1CbnNDb25maWcuRnVuU2V0UGVyc2lzdGVudERhdGEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gIHRyeSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoa2V5LCB2YWx1ZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaMgeS5heWMluaVsOaNruWIsOmFjee9ruS4re+8jOWFiOS7jumFjee9ruS4reaJvu+8jOWGjeS7juacrOWcsOaJvuW5tuWKoOWIsOmFjee9ruS4rVxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IOmUrlxyXG4gKiBAcmV0dXJuIHt0eXBlfSDlr7nlupTnmoTlgLzvvIzlpoLmnpzmsqHmnInmib7liLDvvIzmqKHku791bmnnmoTvvIzov5Tlm55cIlwiXHJcbiAqL1xyXG5jb21tQm5zQ29uZmlnLkZ1bkdldFBlcnNpc3RlbnREYXRhID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gdW5pLmdldFN0b3JhZ2VTeW5jKGtleSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog56e76Zmk5LiA5Liq5oyB5LmF5YyW5pWw5o2uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkg6ZSuXHJcbiAqL1xyXG5jb21tQm5zQ29uZmlnLkZ1blJlbW92ZVBlcnNpc3RlbnREYXRhID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHRyeSB7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgfVxyXG59XHJcblxyXG5jb21tQm5zQ29uZmlnLmZ1bmNHZXRDdXJFbnZpckNmZyA9IGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZW52VHlwZSA9IHRoaXMuYmFzZUNmZy5lbnZpclR5cGU7XHJcbiAgY29uc3QgY29uZmlnID0ge307XHJcbiAgZW52VHlwZSA9IGVudlR5cGUgPT0gbnVsbCA/IFwiRHZscFwiIDogZW52VHlwZTtcclxuICAvLyDlvZPliY1XZWLor7fmsYLphY3nva5cclxuICBjb25zdCBob3N0ID0gY29tbUJuc0NvbmZpZy5iYXNlQ2ZnLnN0ckRlZmF1bHRXZWJTZXJ2ZXJIb3N0IHx8IFwibG9jYWxob3N0XCI7XHJcbiAgc3dpdGNoIChlbnZUeXBlKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgY2FzZSBcIkR2bHBcIjpcclxuICAgICAgY29uZmlnLmRlZmF1bHRVcmwgPSBgaHR0cDovLyR7aG9zdH06OTAzNmA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlByb2R1Y3RcIjpcclxuICAgICAgY29uZmlnLmRlZmF1bHRVcmwgPSBgaHR0cDovL2xvY2FsaG9zdDo5NTI3YDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiVGVzdFwiOlxyXG4gICAgICBjb25maWcuZGVmYXVsdFVybCA9IGBodHRwOi8vJHtob3N0fWA7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbUJuc0NvbmZpZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!************************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/commFrmk/commApp/uniHttpRequestUtil/utilUniHttpRequest.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));\n/************************************************************************************************************\r\n * 实现功能：基于Uni.Request的封装应用\r\n * 创    建：张洪波   2020年05月25日\r\n * 最近更新: 张洪波   2020年05月25日\r\n * 相关说明：\r\n * 附注说明：(1)该应用应用于UniApp中应用\r\n *************************************************************************************************************/\n\nvar utilUniHttpRequest = {};\n\n/**\r\n * 实现功能:针对UniHttp 的业务处理\r\n * @param {Object/String} strUrl\r\n * @param {String} strHttpMethod\r\n * @param {Object} objData\r\n * @param {Object} dictHeader\r\n */\nutilUniHttpRequest.FuncHttpRequest = function (strUrl, strHttpMethod, objData, dictHeader) {\n  if ((0, _typeof2.default)(strUrl) == \"object\" && strUrl.strUrl) {\n    strHttpMethod = strUrl.strHttpMethod;\n    objData = strUrl.objData;\n    dictHeader = strUrl.dictHeader;\n    strUrl = strUrl.strUrl;\n  }\n\n  //初始化请求地址\n  strUrl = strUrl || \"\";\n  //初始化方法\n  strHttpMethod = (strHttpMethod || \"POST\").toUpperCase();\n  //初始化请求数据\n  objData = objData || {};\n  //初始化头部数据\n  dictHeader = dictHeader || {};\n  var objCurPromise = new Promise(function (funcResovle, funcReject) {\n    //如果没有提供失败处理的话，则这里提供默认值\n    funcReject = funcReject || function (err) {\n      __f__(\"log\", err, \" at commFrmk/commApp/uniHttpRequestUtil/utilUniHttpRequest.js:39\");\n    };\n    uni.request({\n      url: strUrl,\n      method: strHttpMethod,\n      data: objData,\n      header: dictHeader,\n      success: function success(res) {\n        funcResovle(res);\n      },\n      fail: function fail(err) {\n        funcReject(err);\n      }\n    });\n  });\n  return objCurPromise;\n};\nvar _default = utilUniHttpRequest;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbUZybWsvY29tbUFwcC91bmlIdHRwUmVxdWVzdFV0aWwvdXRpbFVuaUh0dHBSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbInV0aWxVbmlIdHRwUmVxdWVzdCIsIkZ1bmNIdHRwUmVxdWVzdCIsInN0clVybCIsInN0ckh0dHBNZXRob2QiLCJvYmpEYXRhIiwiZGljdEhlYWRlciIsInRvVXBwZXJDYXNlIiwib2JqQ3VyUHJvbWlzZSIsIlByb21pc2UiLCJmdW5jUmVzb3ZsZSIsImZ1bmNSZWplY3QiLCJlcnIiLCJ1bmkiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGtCQUFrQixHQUFHLENBQUMsQ0FBQzs7QUFHM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsa0JBQWtCLENBQUNDLGVBQWUsR0FBRyxVQUFVQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7RUFDekYsSUFBSSxzQkFBUUgsTUFBTSxLQUFLLFFBQVEsSUFBSUEsTUFBTSxDQUFDQSxNQUFNLEVBQUU7SUFDaERDLGFBQWEsR0FBR0QsTUFBTSxDQUFDQyxhQUFhO0lBQ3BDQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBTztJQUN4QkMsVUFBVSxHQUFHSCxNQUFNLENBQUNHLFVBQVU7SUFDOUJILE1BQU0sR0FBR0EsTUFBTSxDQUFDQSxNQUFNO0VBQ3hCOztFQUVBO0VBQ0FBLE1BQU0sR0FBR0EsTUFBTSxJQUFJLEVBQUU7RUFDckI7RUFDQUMsYUFBYSxHQUFHLENBQUNBLGFBQWEsSUFBSSxNQUFNLEVBQUVHLFdBQVcsRUFBRTtFQUN2RDtFQUNBRixPQUFPLEdBQUdBLE9BQU8sSUFBSSxDQUFDLENBQUM7RUFDdkI7RUFDQUMsVUFBVSxHQUFHQSxVQUFVLElBQUksQ0FBQyxDQUFDO0VBRTdCLElBQUlFLGFBQWEsR0FBRyxJQUFJQyxPQUFPLENBQUMsVUFBVUMsV0FBVyxFQUFFQyxVQUFVLEVBQUU7SUFDakU7SUFDQUEsVUFBVSxHQUFHQSxVQUFVLElBQUksVUFBVUMsR0FBRyxFQUFFO01BQ3hDLGFBQVlBLEdBQUc7SUFDakIsQ0FBQztJQUVEQyxHQUFHLENBQUNDLE9BQU8sQ0FDVjtNQUNDQyxHQUFHLEVBQUVaLE1BQU07TUFDWGEsTUFBTSxFQUFFWixhQUFhO01BQ3JCYSxJQUFJLEVBQUVaLE9BQU87TUFDYmEsTUFBTSxFQUFFWixVQUFVO01BQ2xCYSxPQUFPLEVBQUUsaUJBQVVDLEdBQUcsRUFBRTtRQUN0QlYsV0FBVyxDQUFDVSxHQUFHLENBQUM7TUFDbEIsQ0FBQztNQUNEQyxJQUFJLEVBQUUsY0FBVVQsR0FBRyxFQUFFO1FBQ25CRCxVQUFVLENBQUNDLEdBQUcsQ0FBQztNQUNqQjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztFQUVGLE9BQU9KLGFBQWE7QUFDdEIsQ0FBQztBQUFDLGVBRWFQLGtCQUFrQjtBQUFBLDJCIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDlrp7njrDlip/og73vvJrln7rkuo5VbmkuUmVxdWVzdOeahOWwgeijheW6lOeUqFxyXG4gKiDliJsgICAg5bu677ya5byg5rSq5rOiICAgMjAyMOW5tDA15pyIMjXml6VcclxuICog5pyA6L+R5pu05pawOiDlvKDmtKrms6IgICAyMDIw5bm0MDXmnIgyNeaXpVxyXG4gKiDnm7jlhbPor7TmmI7vvJpcclxuICog6ZmE5rOo6K+05piO77yaKDEp6K+l5bqU55So5bqU55So5LqOVW5pQXBw5Lit5bqU55SoXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxudmFyIHV0aWxVbmlIdHRwUmVxdWVzdCA9IHt9O1xyXG5cclxuXHJcbi8qKlxyXG4gKiDlrp7njrDlip/og7066ZKI5a+5VW5pSHR0cCDnmoTkuJrliqHlpITnkIZcclxuICogQHBhcmFtIHtPYmplY3QvU3RyaW5nfSBzdHJVcmxcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ckh0dHBNZXRob2RcclxuICogQHBhcmFtIHtPYmplY3R9IG9iakRhdGFcclxuICogQHBhcmFtIHtPYmplY3R9IGRpY3RIZWFkZXJcclxuICovXHJcbnV0aWxVbmlIdHRwUmVxdWVzdC5GdW5jSHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoc3RyVXJsLCBzdHJIdHRwTWV0aG9kLCBvYmpEYXRhLCBkaWN0SGVhZGVyKSB7XHJcbiAgaWYgKHR5cGVvZiAoc3RyVXJsKSA9PSBcIm9iamVjdFwiICYmIHN0clVybC5zdHJVcmwpIHtcclxuICAgIHN0ckh0dHBNZXRob2QgPSBzdHJVcmwuc3RySHR0cE1ldGhvZDtcclxuICAgIG9iakRhdGEgPSBzdHJVcmwub2JqRGF0YTtcclxuICAgIGRpY3RIZWFkZXIgPSBzdHJVcmwuZGljdEhlYWRlcjtcclxuICAgIHN0clVybCA9IHN0clVybC5zdHJVcmw7XHJcbiAgfVxyXG5cclxuICAvL+WIneWni+WMluivt+axguWcsOWdgFxyXG4gIHN0clVybCA9IHN0clVybCB8fCBcIlwiO1xyXG4gIC8v5Yid5aeL5YyW5pa55rOVXHJcbiAgc3RySHR0cE1ldGhvZCA9IChzdHJIdHRwTWV0aG9kIHx8IFwiUE9TVFwiKS50b1VwcGVyQ2FzZSgpO1xyXG4gIC8v5Yid5aeL5YyW6K+35rGC5pWw5o2uXHJcbiAgb2JqRGF0YSA9IG9iakRhdGEgfHwge307XHJcbiAgLy/liJ3lp4vljJblpLTpg6jmlbDmja5cclxuICBkaWN0SGVhZGVyID0gZGljdEhlYWRlciB8fCB7fTtcclxuXHJcbiAgdmFyIG9iakN1clByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVuY1Jlc292bGUsIGZ1bmNSZWplY3QpIHtcclxuICAgIC8v5aaC5p6c5rKh5pyJ5o+Q5L6b5aSx6LSl5aSE55CG55qE6K+d77yM5YiZ6L+Z6YeM5o+Q5L6b6buY6K6k5YC8XHJcbiAgICBmdW5jUmVqZWN0ID0gZnVuY1JlamVjdCB8fCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9O1xyXG5cclxuICAgIHVuaS5yZXF1ZXN0XHJcbiAgICAoe1xyXG4gICAgICB1cmw6IHN0clVybCxcclxuICAgICAgbWV0aG9kOiBzdHJIdHRwTWV0aG9kLFxyXG4gICAgICBkYXRhOiBvYmpEYXRhLFxyXG4gICAgICBoZWFkZXI6IGRpY3RIZWFkZXIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBmdW5jUmVzb3ZsZShyZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgZnVuY1JlamVjdChlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG9iakN1clByb21pc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsVW5pSHR0cFJlcXVlc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*******************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/commFrmk/commApp/commAppHashUtil/utilSignBaseSHA1.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _utilSHA = _interopRequireDefault(__webpack_require__(/*! ./utilSHA1.js */ 26));\n/************************************************************************************************************\r\n * 实现功能:基于SHA1的API签名算法\r\n * 创    建:张洪波   2020年05月20日\r\n * 最近更新: 张洪波   2020年05月20日\r\n * 相关说明:\r\n * 附注说明:附注说明:这里的签名指的并不是数字证书中的非对称签名算法，是一般的签名，例如：为API接口签名\r\n*************************************************************************************************************/\n\n//引入的SHA1的数据\n\n//本模块导出的对象\nvar utilSignBaseSHA1 = {};\n\n/**\r\n * 实现功能:得到要签名的字符串\r\n * @param {Object} arrData       数组的内容\r\n * @param {Object} strSplitChar  之间的分隔符,默认为:&\r\n * @param {Object} sortWay  \t 数组中的数据排序方式:NoSotr:不排序，Asc:升序排序，Desc:降序排序,默认为不排序\r\n * \r\n */\nutilSignBaseSHA1.FuncGetToSignStr = function (arrData, strSplitChar, sortWay) {\n  var strRetVal = \"\";\n  strSplitChar = !strSplitChar ? \"&\" : strSplitChar;\n  sortWay = !sortWay ? \"NoSotr\" : sortWay;\n  if (arrData == null || arrData.length <= 0) {\n    strRetVal = \"\";\n  } else {\n    if (sortWay == \"Desc\") {\n      arrData = arrData.reverse();\n    }\n    strRetVal = arrData.join(strSplitChar);\n  }\n  return strRetVal;\n};\n\n/**\r\n * 实现功能:基于HexSHA1的签名算法\r\n * @param {Object} arrData       数组的内容\r\n * @param {Object} strSplitChar  之间的分隔符,默认为:&\r\n * @param {Object} sortWay  \t 数组中的数据排序方式:NoSotr:不排序，Asc:升序排序，Desc:降序排序,默认为不排序\r\n * \r\n */\nutilSignBaseSHA1.FuncHexSHA1SignBase = function (arrData, strSplitChar, sortWay) {\n  var strRetVal = \"\",\n    strData = \"\";\n  strData = this.FuncGetToSignStr(arrData, strSplitChar, sortWay);\n  strRetVal = _utilSHA.default.FuncHexSa1(strData);\n  return strRetVal;\n};\n\n/**\r\n * 实现功能:基于Base64Sha1的签名算法\r\n * @param {Object} arrData       数组的内容\r\n * @param {Object} strSplitChar  之间的分隔符,默认为:&\r\n * @param {Object} sortWay  \t 数组中的数据排序方式:NoSotr:不排序，Asc:升序排序，Desc:降序排序,默认为不排序\r\n * \r\n */\nutilSignBaseSHA1.FuncBase64Sha1SignBase = function (arrData, strSplitChar, sortWay) {\n  var strRetVal = \"\",\n    strData = \"\";\n  strData = this.FuncGetToSignStr(arrData, strSplitChar, sortWay);\n  strRetVal = _utilSHA.default.FuncBase64Sha1(strData);\n  return strRetVal;\n};\n\n/**\r\n * 实现功能:基于StrSHA1的签名算法\r\n * @param {Object} arrData       数组的内容\r\n * @param {Object} strSplitChar  之间的分隔符,默认为:&\r\n * @param {Object} sortWay  \t 数组中的数据排序方式:NoSotr:不排序，Asc:升序排序，Desc:降序排序,默认为不排序\r\n * \r\n */\nutilSignBaseSHA1.FuncStrSHA1SignBase = function (arrData, strSplitChar, sortWay) {\n  var strRetVal = \"\",\n    strData = \"\";\n  strData = this.FuncGetToSignStr(arrData, strSplitChar, sortWay);\n  strRetVal = _utilSHA.default.FuncStrSha1(strData);\n  return strRetVal;\n};\n\n/**\r\n * 实现功能:获得当前API接口签名数据\r\n * @param {String} strAppKey   当前AppKey\r\n * @param {String} strPath     当前路径\r\n * @param {String} strCurTimie 当前时间戳\r\n * @param {String} strUrlParam 请求的路径上的参数\r\n * @param {String} strBodyData 请求body中的参数(已转化为String)\r\n */\nutilSignBaseSHA1.FuncGetCurSignData = function (strAppKey, strPath, strCurTimie, strUrlParams, strBodyData) {\n  var strSignResult = \"\";\n  strSignResult = this.FuncHexSHA1SignBase([strAppKey, strPath, strCurTimie, strUrlParams, strBodyData], \",\", \"NoSort\");\n  return strSignResult;\n};\nvar _default = utilSignBaseSHA1;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbUZybWsvY29tbUFwcC9jb21tQXBwSGFzaFV0aWwvdXRpbFNpZ25CYXNlU0hBMS5qcyJdLCJuYW1lcyI6WyJ1dGlsU2lnbkJhc2VTSEExIiwiRnVuY0dldFRvU2lnblN0ciIsImFyckRhdGEiLCJzdHJTcGxpdENoYXIiLCJzb3J0V2F5Iiwic3RyUmV0VmFsIiwibGVuZ3RoIiwicmV2ZXJzZSIsImpvaW4iLCJGdW5jSGV4U0hBMVNpZ25CYXNlIiwic3RyRGF0YSIsInV0aWxTSEExIiwiRnVuY0hleFNhMSIsIkZ1bmNCYXNlNjRTaGExU2lnbkJhc2UiLCJGdW5jQmFzZTY0U2hhMSIsIkZ1bmNTdHJTSEExU2lnbkJhc2UiLCJGdW5jU3RyU2hhMSIsIkZ1bmNHZXRDdXJTaWduRGF0YSIsInN0ckFwcEtleSIsInN0clBhdGgiLCJzdHJDdXJUaW1pZSIsInN0clVybFBhcmFtcyIsInN0ckJvZHlEYXRhIiwic3RyU2lnblJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVVBO0FBVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLGdCQUFnQixDQUFDQyxnQkFBZ0IsR0FBRyxVQUFTQyxPQUFPLEVBQUNDLFlBQVksRUFBQ0MsT0FBTyxFQUN6RTtFQUNDLElBQUlDLFNBQVMsR0FBRyxFQUFFO0VBRWxCRixZQUFZLEdBQUcsQ0FBQ0EsWUFBWSxHQUFDLEdBQUcsR0FBQ0EsWUFBWTtFQUM3Q0MsT0FBTyxHQUFHLENBQUNBLE9BQU8sR0FBQyxRQUFRLEdBQUNBLE9BQU87RUFFbkMsSUFBSUYsT0FBTyxJQUFJLElBQUksSUFBSUEsT0FBTyxDQUFDSSxNQUFNLElBQUksQ0FBQyxFQUMxQztJQUNDRCxTQUFTLEdBQUcsRUFBRTtFQUNmLENBQUMsTUFFRDtJQUNDLElBQUlELE9BQU8sSUFBSSxNQUFNLEVBQ3JCO01BQ0NGLE9BQU8sR0FBR0EsT0FBTyxDQUFDSyxPQUFPLEVBQUU7SUFDNUI7SUFFQUYsU0FBUyxHQUFHSCxPQUFPLENBQUNNLElBQUksQ0FBQ0wsWUFBWSxDQUFDO0VBQ3ZDO0VBRUEsT0FBT0UsU0FBUztBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FMLGdCQUFnQixDQUFDUyxtQkFBbUIsR0FBRyxVQUFTUCxPQUFPLEVBQUNDLFlBQVksRUFBQ0MsT0FBTyxFQUM1RTtFQUNDLElBQUlDLFNBQVMsR0FBRyxFQUFFO0lBQUNLLE9BQU8sR0FBRyxFQUFFO0VBRS9CQSxPQUFPLEdBQUcsSUFBSSxDQUFDVCxnQkFBZ0IsQ0FBQ0MsT0FBTyxFQUFDQyxZQUFZLEVBQUNDLE9BQU8sQ0FBQztFQUU3REMsU0FBUyxHQUFHTSxnQkFBUSxDQUFDQyxVQUFVLENBQUNGLE9BQU8sQ0FBQztFQUV4QyxPQUFPTCxTQUFTO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsZ0JBQWdCLENBQUNhLHNCQUFzQixHQUFHLFVBQVNYLE9BQU8sRUFBQ0MsWUFBWSxFQUFDQyxPQUFPLEVBQy9FO0VBQ0MsSUFBSUMsU0FBUyxHQUFHLEVBQUU7SUFBQ0ssT0FBTyxHQUFHLEVBQUU7RUFFL0JBLE9BQU8sR0FBRyxJQUFJLENBQUNULGdCQUFnQixDQUFDQyxPQUFPLEVBQUNDLFlBQVksRUFBQ0MsT0FBTyxDQUFDO0VBRTdEQyxTQUFTLEdBQUdNLGdCQUFRLENBQUNHLGNBQWMsQ0FBQ0osT0FBTyxDQUFDO0VBRTVDLE9BQU9MLFNBQVM7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTCxnQkFBZ0IsQ0FBQ2UsbUJBQW1CLEdBQUcsVUFBU2IsT0FBTyxFQUFDQyxZQUFZLEVBQUNDLE9BQU8sRUFDNUU7RUFDQyxJQUFJQyxTQUFTLEdBQUcsRUFBRTtJQUFDSyxPQUFPLEdBQUcsRUFBRTtFQUUvQkEsT0FBTyxHQUFHLElBQUksQ0FBQ1QsZ0JBQWdCLENBQUNDLE9BQU8sRUFBQ0MsWUFBWSxFQUFDQyxPQUFPLENBQUM7RUFFN0RDLFNBQVMsR0FBR00sZ0JBQVEsQ0FBQ0ssV0FBVyxDQUFDTixPQUFPLENBQUM7RUFFekMsT0FBT0wsU0FBUztBQUNqQixDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUwsZ0JBQWdCLENBQUNpQixrQkFBa0IsR0FBRyxVQUFTQyxTQUFTLEVBQUNDLE9BQU8sRUFBQ0MsV0FBVyxFQUFDQyxZQUFZLEVBQUNDLFdBQVcsRUFDckc7RUFDQyxJQUFJQyxhQUFhLEdBQUcsRUFBRTtFQUV0QkEsYUFBYSxHQUFHLElBQUksQ0FBQ2QsbUJBQW1CLENBQUMsQ0FBQ1MsU0FBUyxFQUFDQyxPQUFPLEVBQUNDLFdBQVcsRUFBQ0MsWUFBWSxFQUFDQyxXQUFXLENBQUMsRUFBQyxHQUFHLEVBQUMsUUFBUSxDQUFDO0VBRS9HLE9BQU9DLGFBQWE7QUFDckIsQ0FBQztBQUFDLGVBR2F2QixnQkFBZ0I7QUFBQSIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWunueOsOWKn+iDvTrln7rkuo5TSEEx55qEQVBJ562+5ZCN566X5rOVXHJcbiAqIOWImyAgICDlu7o65byg5rSq5rOiICAgMjAyMOW5tDA15pyIMjDml6VcclxuICog5pyA6L+R5pu05pawOiDlvKDmtKrms6IgICAyMDIw5bm0MDXmnIgyMOaXpVxyXG4gKiDnm7jlhbPor7TmmI46XHJcbiAqIOmZhOazqOivtOaYjjrpmYTms6jor7TmmI466L+Z6YeM55qE562+5ZCN5oyH55qE5bm25LiN5piv5pWw5a2X6K+B5Lmm5Lit55qE6Z2e5a+556ew562+5ZCN566X5rOV77yM5piv5LiA6Iis55qE562+5ZCN77yM5L6L5aaC77ya5Li6QVBJ5o6l5Y+j562+5ZCNXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vL+W8leWFpeeahFNIQTHnmoTmlbDmja5cclxuaW1wb3J0IHV0aWxTSEExIGZyb20gXCIuL3V0aWxTSEExLmpzXCI7XHJcblxyXG4vL+acrOaooeWdl+WvvOWHuueahOWvueixoVxyXG52YXIgdXRpbFNpZ25CYXNlU0hBMSA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIOWunueOsOWKn+iDvTrlvpfliLDopoHnrb7lkI3nmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHtPYmplY3R9IGFyckRhdGEgICAgICAg5pWw57uE55qE5YaF5a65XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHJTcGxpdENoYXIgIOS5i+mXtOeahOWIhumalOespizpu5jorqTkuLo6JlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc29ydFdheSAgXHQg5pWw57uE5Lit55qE5pWw5o2u5o6S5bqP5pa55byPOk5vU290cjrkuI3mjpLluo/vvIxBc2M65Y2H5bqP5o6S5bqP77yMRGVzYzrpmY3luo/mjpLluo8s6buY6K6k5Li65LiN5o6S5bqPXHJcbiAqIFxyXG4gKi9cclxudXRpbFNpZ25CYXNlU0hBMS5GdW5jR2V0VG9TaWduU3RyID0gZnVuY3Rpb24oYXJyRGF0YSxzdHJTcGxpdENoYXIsc29ydFdheSlcclxue1xyXG5cdHZhciBzdHJSZXRWYWwgPSBcIlwiO1xyXG5cdFx0XHJcblx0c3RyU3BsaXRDaGFyID0gIXN0clNwbGl0Q2hhcj9cIiZcIjpzdHJTcGxpdENoYXI7XHJcblx0c29ydFdheSA9ICFzb3J0V2F5P1wiTm9Tb3RyXCI6c29ydFdheTtcclxuXHRcclxuXHRpZiAoYXJyRGF0YSA9PSBudWxsIHx8IGFyckRhdGEubGVuZ3RoIDw9IDApXHJcblx0e1xyXG5cdFx0c3RyUmV0VmFsID0gXCJcIjtcdFx0XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRpZiAoc29ydFdheSA9PSBcIkRlc2NcIilcclxuXHRcdHtcclxuXHRcdFx0YXJyRGF0YSA9IGFyckRhdGEucmV2ZXJzZSgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzdHJSZXRWYWwgPSBhcnJEYXRhLmpvaW4oc3RyU3BsaXRDaGFyKTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHN0clJldFZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDlrp7njrDlip/og7065Z+65LqOSGV4U0hBMeeahOetvuWQjeeul+azlVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyRGF0YSAgICAgICDmlbDnu4TnmoTlhoXlrrlcclxuICogQHBhcmFtIHtPYmplY3R9IHN0clNwbGl0Q2hhciAg5LmL6Ze055qE5YiG6ZqU56ymLOm7mOiupOS4ujomXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3J0V2F5ICBcdCDmlbDnu4TkuK3nmoTmlbDmja7mjpLluo/mlrnlvI86Tm9Tb3RyOuS4jeaOkuW6j++8jEFzYzrljYfluo/mjpLluo/vvIxEZXNjOumZjeW6j+aOkuW6jyzpu5jorqTkuLrkuI3mjpLluo9cclxuICogXHJcbiAqL1xyXG51dGlsU2lnbkJhc2VTSEExLkZ1bmNIZXhTSEExU2lnbkJhc2UgPSBmdW5jdGlvbihhcnJEYXRhLHN0clNwbGl0Q2hhcixzb3J0V2F5KVxyXG57XHJcblx0dmFyIHN0clJldFZhbCA9IFwiXCIsc3RyRGF0YSA9IFwiXCI7XHJcblx0XHRcclxuXHRzdHJEYXRhID0gdGhpcy5GdW5jR2V0VG9TaWduU3RyKGFyckRhdGEsc3RyU3BsaXRDaGFyLHNvcnRXYXkpO1xyXG5cdFxyXG5cdHN0clJldFZhbCA9IHV0aWxTSEExLkZ1bmNIZXhTYTEoc3RyRGF0YSk7XHJcblx0XHJcblx0cmV0dXJuIHN0clJldFZhbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDlrp7njrDlip/og7065Z+65LqOQmFzZTY0U2hhMeeahOetvuWQjeeul+azlVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyRGF0YSAgICAgICDmlbDnu4TnmoTlhoXlrrlcclxuICogQHBhcmFtIHtPYmplY3R9IHN0clNwbGl0Q2hhciAg5LmL6Ze055qE5YiG6ZqU56ymLOm7mOiupOS4ujomXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3J0V2F5ICBcdCDmlbDnu4TkuK3nmoTmlbDmja7mjpLluo/mlrnlvI86Tm9Tb3RyOuS4jeaOkuW6j++8jEFzYzrljYfluo/mjpLluo/vvIxEZXNjOumZjeW6j+aOkuW6jyzpu5jorqTkuLrkuI3mjpLluo9cclxuICogXHJcbiAqL1xyXG51dGlsU2lnbkJhc2VTSEExLkZ1bmNCYXNlNjRTaGExU2lnbkJhc2UgPSBmdW5jdGlvbihhcnJEYXRhLHN0clNwbGl0Q2hhcixzb3J0V2F5KVxyXG57XHJcblx0dmFyIHN0clJldFZhbCA9IFwiXCIsc3RyRGF0YSA9IFwiXCI7XHJcblx0XHRcclxuXHRzdHJEYXRhID0gdGhpcy5GdW5jR2V0VG9TaWduU3RyKGFyckRhdGEsc3RyU3BsaXRDaGFyLHNvcnRXYXkpO1xyXG5cdFxyXG5cdHN0clJldFZhbCA9IHV0aWxTSEExLkZ1bmNCYXNlNjRTaGExKHN0ckRhdGEpO1xyXG5cdFxyXG5cdHJldHVybiBzdHJSZXRWYWw7XHJcbn07XHJcblxyXG4vKipcclxuICog5a6e546w5Yqf6IO9OuWfuuS6jlN0clNIQTHnmoTnrb7lkI3nrpfms5VcclxuICogQHBhcmFtIHtPYmplY3R9IGFyckRhdGEgICAgICAg5pWw57uE55qE5YaF5a65XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHJTcGxpdENoYXIgIOS5i+mXtOeahOWIhumalOespizpu5jorqTkuLo6JlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc29ydFdheSAgXHQg5pWw57uE5Lit55qE5pWw5o2u5o6S5bqP5pa55byPOk5vU290cjrkuI3mjpLluo/vvIxBc2M65Y2H5bqP5o6S5bqP77yMRGVzYzrpmY3luo/mjpLluo8s6buY6K6k5Li65LiN5o6S5bqPXHJcbiAqIFxyXG4gKi9cclxudXRpbFNpZ25CYXNlU0hBMS5GdW5jU3RyU0hBMVNpZ25CYXNlID0gZnVuY3Rpb24oYXJyRGF0YSxzdHJTcGxpdENoYXIsc29ydFdheSlcclxue1xyXG5cdHZhciBzdHJSZXRWYWwgPSBcIlwiLHN0ckRhdGEgPSBcIlwiO1xyXG5cdFx0XHJcblx0c3RyRGF0YSA9IHRoaXMuRnVuY0dldFRvU2lnblN0cihhcnJEYXRhLHN0clNwbGl0Q2hhcixzb3J0V2F5KTtcclxuXHRcclxuXHRzdHJSZXRWYWwgPSB1dGlsU0hBMS5GdW5jU3RyU2hhMShzdHJEYXRhKTtcclxuXHRcclxuXHRyZXR1cm4gc3RyUmV0VmFsO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiDlrp7njrDlip/og7066I635b6X5b2T5YmNQVBJ5o6l5Y+j562+5ZCN5pWw5o2uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJBcHBLZXkgICDlvZPliY1BcHBLZXlcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0clBhdGggICAgIOW9k+WJjei3r+W+hFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyQ3VyVGltaWUg5b2T5YmN5pe26Ze05oizXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJVcmxQYXJhbSDor7fmsYLnmoTot6/lvoTkuIrnmoTlj4LmlbBcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ckJvZHlEYXRhIOivt+axgmJvZHnkuK3nmoTlj4LmlbAo5bey6L2s5YyW5Li6U3RyaW5nKVxyXG4gKi9cclxudXRpbFNpZ25CYXNlU0hBMS5GdW5jR2V0Q3VyU2lnbkRhdGEgPSBmdW5jdGlvbihzdHJBcHBLZXksc3RyUGF0aCxzdHJDdXJUaW1pZSxzdHJVcmxQYXJhbXMsc3RyQm9keURhdGEpXHJcbntcclxuXHR2YXIgc3RyU2lnblJlc3VsdCA9IFwiXCI7XHJcbiAgXHJcblx0c3RyU2lnblJlc3VsdCA9IHRoaXMuRnVuY0hleFNIQTFTaWduQmFzZShbc3RyQXBwS2V5LHN0clBhdGgsc3RyQ3VyVGltaWUsc3RyVXJsUGFyYW1zLHN0ckJvZHlEYXRhXSxcIixcIixcIk5vU29ydFwiKTtcclxuXHRcclxuXHRyZXR1cm4gc3RyU2lnblJlc3VsdDtcdFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxTaWduQmFzZVNIQTE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!***********************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/commFrmk/commApp/commAppHashUtil/utilSHA1.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n/************************************************************************************************************\r\n * 实现功能：实现SHA1散列加密算法\r\n * 创    建：张洪波   2020年05月20日\r\n * 最近更新: 张洪波   2020年05月20日\r\n * 相关说明：\r\n * 附注说明：\r\n*************************************************************************************************************/\n\n/* 十六进制输出格式。0 -小写；1 -大写 */\nvar hexcase = 0;\n\n/* base- 64填充字符。“=”表示严格的RFC合规性 */\nvar b64pad = \"\";\n\n/* 每个输入字符的位数。8 - ASCII；16 -统一码 */\nvar chrsz = 8;\nfunction hex_hmac_sha1(key, data) {\n  return binb2hex(core_hmac_sha1(key, data));\n}\n;\nfunction b64_hmac_sha1(key, data) {\n  return binb2b64(core_hmac_sha1(key, data));\n}\n;\nfunction str_hmac_sha1(key, data) {\n  return binb2str(core_hmac_sha1(key, data));\n}\n;\nfunction sha1_vm_test() {\n  return hex_sha1(\"abc\") == \"a9993e364706816aba3e25717850c26c9cd0d89d\";\n}\n;\nfunction core_sha1(x, len) {\n  x[len >> 5] |= 0x80 << 24 - len % 32;\n  x[(len + 64 >> 9 << 4) + 15] = len;\n  var w = Array(80);\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n  var e = -1009589776;\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    var olde = e;\n    for (var j = 0; j < 80; j++) {\n      if (j < 16) w[j] = x[i + j];else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);\n      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));\n      e = d;\n      d = c;\n      c = rol(b, 30);\n      b = a;\n      a = t;\n    }\n    a = safe_add(a, olda);\n    b = safe_add(b, oldb);\n    c = safe_add(c, oldc);\n    d = safe_add(d, oldd);\n    e = safe_add(e, olde);\n  }\n  return Array(a, b, c, d, e);\n}\n;\nfunction sha1_ft(t, b, c, d) {\n  if (t < 20) return b & c | ~b & d;\n  if (t < 40) return b ^ c ^ d;\n  if (t < 60) return b & c | b & d | c & d;\n  return b ^ c ^ d;\n}\n;\nfunction sha1_kt(t) {\n  return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;\n}\n;\nfunction core_hmac_sha1(key, data) {\n  var bkey = str2binb(key);\n  if (bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);\n  var ipad = Array(16),\n    opad = Array(16);\n  for (var i = 0; i < 16; i++) {\n    ipad[i] = bkey[i] ^ 0x36363636;\n    opad[i] = bkey[i] ^ 0x5C5C5C5C;\n  }\n  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);\n  return core_sha1(opad.concat(hash), 512 + 160);\n}\n;\nfunction safe_add(x, y) {\n  var lsw = (x & 0xFFFF) + (y & 0xFFFF);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xFFFF;\n}\n;\nfunction rol(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n;\nfunction str2binb(str) {\n  var bin = Array();\n  var mask = (1 << chrsz) - 1;\n  for (var i = 0; i < str.length * chrsz; i += chrsz) {\n    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;\n  }\n  return bin;\n}\n;\nfunction bytes2binb(byteArray) {\n  var bin = Array();\n  var mask = (1 << chrsz) - 1;\n  for (var i = 0; i < byteArray.length * chrsz; i += chrsz) {\n    bin[i >> 5] |= (byteArray[i / chrsz] & mask) << 24 - i % 32;\n  }\n  return bin;\n}\nfunction binb2str(bin) {\n  var str = \"\";\n  var mask = (1 << chrsz) - 1;\n  for (var i = 0; i < bin.length * 32; i += chrsz) {\n    str += String.fromCharCode(bin[i >> 5] >>> 24 - i % 32 & mask);\n  }\n  return str;\n}\n;\nfunction binb2hex(binarray) {\n  var hex_tab = hexcase ? \"0123456789ABCDEF\" : \"0123456789abcdef\";\n  var str = \"\";\n  for (var i = 0; i < binarray.length * 4; i++) {\n    str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 0xF);\n  }\n  return str;\n}\n;\nfunction binb2b64(binarray) {\n  var tab = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\";\n  var str = \"\";\n  for (var i = 0; i < binarray.length * 4; i += 3) {\n    var triplet = (binarray[i >> 2] >> 8 * (3 - i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4) & 0xFF;\n    for (var j = 0; j < 4; j++) {\n      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);\n    }\n  }\n  return str;\n}\n;\n\n/* 获取字符串的UTF-8编码的字节数组 */\nfunction stringToUtf8Byte(str) {\n  var bytes = new Array();\n  var len, c;\n  len = str.length;\n  for (var i = 0; i < len; i++) {\n    c = str.charCodeAt(i);\n    1000;\n    if (!(c & 0xFFFF80)) {\n      bytes.push(c & 0xFF);\n    } else if (!(c & 0xFFF800)) {\n      bytes.push(c >> 6 & 0x1F | 0xC0);\n      bytes.push(c & 0x3F | 0x80);\n    } else if (!(c >= 0xFF0000)) {\n      bytes.push(c >> 12 & 0x0F | 0xE0);\n      bytes.push(c >> 6 & 0x3F | 0x80);\n      bytes.push(c & 0x3F | 0x80);\n    } else {\n      bytes.push(c >> 18 & 0x07 | 0xF0);\n      bytes.push(c >> 12 & 0x3F | 0x80);\n      bytes.push(c >> 6 & 0x3F | 0x80);\n      bytes.push(c & 0x3F | 0x80);\n    }\n  }\n  return bytes;\n}\nvar hex_sha1 = function hex_sha1(s) {\n  var byteArray = stringToUtf8Byte(s);\n  return binb2hex(core_sha1(bytes2binb(byteArray), byteArray.length * chrsz));\n};\nvar b64_sha1 = function b64_sha1(s) {\n  return binb2b64(core_sha1(str2binb(s), s.length * chrsz));\n};\nvar str_sha1 = function str_sha1(s) {\n  return binb2str(core_sha1(str2binb(s), s.length * chrsz));\n};\n\n/**\r\n * 实现功能:模块导出的对象\r\n */\nvar utilSHA1 = {\n  FuncHexSa1: hex_sha1,\n  FuncBase64Sha1: b64_sha1,\n  FuncStrSha1: str_sha1\n};\nvar _default = utilSHA1;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbUZybWsvY29tbUFwcC9jb21tQXBwSGFzaFV0aWwvdXRpbFNIQTEuanMiXSwibmFtZXMiOlsiaGV4Y2FzZSIsImI2NHBhZCIsImNocnN6IiwiaGV4X2htYWNfc2hhMSIsImtleSIsImRhdGEiLCJiaW5iMmhleCIsImNvcmVfaG1hY19zaGExIiwiYjY0X2htYWNfc2hhMSIsImJpbmIyYjY0Iiwic3RyX2htYWNfc2hhMSIsImJpbmIyc3RyIiwic2hhMV92bV90ZXN0IiwiaGV4X3NoYTEiLCJjb3JlX3NoYTEiLCJ4IiwibGVuIiwidyIsIkFycmF5IiwiYSIsImIiLCJjIiwiZCIsImUiLCJpIiwibGVuZ3RoIiwib2xkYSIsIm9sZGIiLCJvbGRjIiwib2xkZCIsIm9sZGUiLCJqIiwicm9sIiwidCIsInNhZmVfYWRkIiwic2hhMV9mdCIsInNoYTFfa3QiLCJia2V5Iiwic3RyMmJpbmIiLCJpcGFkIiwib3BhZCIsImhhc2giLCJjb25jYXQiLCJ5IiwibHN3IiwibXN3IiwibnVtIiwiY250Iiwic3RyIiwiYmluIiwibWFzayIsImNoYXJDb2RlQXQiLCJieXRlczJiaW5iIiwiYnl0ZUFycmF5IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmluYXJyYXkiLCJoZXhfdGFiIiwiY2hhckF0IiwidGFiIiwidHJpcGxldCIsInN0cmluZ1RvVXRmOEJ5dGUiLCJieXRlcyIsInB1c2giLCJzIiwiYjY0X3NoYTEiLCJzdHJfc2hhMSIsInV0aWxTSEExIiwiRnVuY0hleFNhMSIsIkZ1bmNCYXNlNjRTaGExIiwiRnVuY1N0clNoYTEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSUEsT0FBTyxHQUFHLENBQUM7O0FBRWY7QUFDQSxJQUFJQyxNQUFNLEdBQUcsRUFBRTs7QUFFZjtBQUNBLElBQUlDLEtBQUssR0FBRyxDQUFDO0FBRWIsU0FBU0MsYUFBYSxDQUFDQyxHQUFHLEVB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RVlDLFFBQVE7QUFBQSIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIOWunueOsOWKn+iDve+8muWunueOsFNIQTHmlaPliJfliqDlr4bnrpfms5VcclxuICog5YibICAgIOW7uu+8muW8oOa0quazoiAgIDIwMjDlubQwNeaciDIw5pelXHJcbiAqIOacgOi/keabtOaWsDog5byg5rSq5rOiICAgMjAyMOW5tDA15pyIMjDml6VcclxuICog55u45YWz6K+05piO77yaXHJcbiAqIOmZhOazqOivtOaYju+8mlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyog5Y2B5YWt6L+b5Yi26L6T5Ye65qC85byP44CCMCAt5bCP5YaZ77ybMSAt5aSn5YaZICovXHJcbnZhciBoZXhjYXNlID0gMDsgXHJcblxyXG4vKiBiYXNlLSA2NOWhq+WFheWtl+espuOAguKAnD3igJ3ooajnpLrkuKXmoLznmoRSRkPlkIjop4TmgKcgKi9cclxudmFyIGI2NHBhZCA9IFwiXCI7IFxyXG5cclxuLyog5q+P5Liq6L6T5YWl5a2X56ym55qE5L2N5pWw44CCOCAtIEFTQ0lJ77ybMTYgLee7n+S4gOeggSAqL1xyXG52YXIgY2hyc3ogPSA4OyBcclxuXHJcbmZ1bmN0aW9uIGhleF9obWFjX3NoYTEoa2V5LCBkYXRhKVxyXG57XHJcblx0cmV0dXJuIGJpbmIyaGV4KGNvcmVfaG1hY19zaGExKGtleSwgZGF0YSkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYjY0X2htYWNfc2hhMShrZXksIGRhdGEpXHJcbntcclxuXHRyZXR1cm4gYmluYjJiNjQoY29yZV9obWFjX3NoYTEoa2V5LCBkYXRhKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdHJfaG1hY19zaGExKGtleSwgZGF0YSlcclxue1xyXG5cdHJldHVybiBiaW5iMnN0cihjb3JlX2htYWNfc2hhMShrZXksIGRhdGEpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNoYTFfdm1fdGVzdCgpXHJcbntcclxuXHRyZXR1cm4gaGV4X3NoYTEoXCJhYmNcIikgPT0gXCJhOTk5M2UzNjQ3MDY4MTZhYmEzZTI1NzE3ODUwYzI2YzljZDBkODlkXCI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb3JlX3NoYTEoeCwgbGVuKVxyXG57XHJcblx0eFtsZW4gPj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBsZW4gJSAzMik7XHJcblx0eFsoKGxlbiArIDY0ID4+IDkpIDw8IDQpICsgMTVdID0gbGVuO1xyXG5cclxuXHR2YXIgdyA9IEFycmF5KDgwKTtcclxuXHR2YXIgYSA9IDE3MzI1ODQxOTM7XHJcblx0dmFyIGIgPSAtMjcxNzMzODc5O1xyXG5cdHZhciBjID0gLTE3MzI1ODQxOTQ7XHJcblx0dmFyIGQgPSAyNzE3MzM4Nzg7XHJcblx0dmFyIGUgPSAtMTAwOTU4OTc3NjtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNilcclxuXHR7XHJcblx0XHR2YXIgb2xkYSA9IGE7XHJcblx0XHR2YXIgb2xkYiA9IGI7XHJcblx0XHR2YXIgb2xkYyA9IGM7XHJcblx0XHR2YXIgb2xkZCA9IGQ7XHJcblx0XHR2YXIgb2xkZSA9IGU7XHJcblxyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCA4MDsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoaiA8IDE2KSB3W2pdID0geFtpICsgal07XHJcblx0XHRcdGVsc2Ugd1tqXSA9IHJvbCh3W2ogLSAzXSBeIHdbaiAtIDhdIF4gd1tqIC0gMTRdIF4gd1tqIC0gMTZdLCAxKTtcclxuXHRcdFx0dmFyIHQgPSBzYWZlX2FkZChzYWZlX2FkZChyb2woYSwgNSksIHNoYTFfZnQoaiwgYiwgYywgZCkpLCBzYWZlX2FkZChzYWZlX2FkZChlLCB3W2pdKSwgc2hhMV9rdChqKSkpO1xyXG5cdFx0XHRlID0gZDtcclxuXHRcdFx0ZCA9IGM7XHJcblx0XHRcdGMgPSByb2woYiwgMzApO1xyXG5cdFx0XHRiID0gYTtcclxuXHRcdFx0YSA9IHQ7XHJcblx0XHR9XHJcblxyXG5cdFx0YSA9IHNhZmVfYWRkKGEsIG9sZGEpO1xyXG5cdFx0YiA9IHNhZmVfYWRkKGIsIG9sZGIpO1xyXG5cdFx0YyA9IHNhZmVfYWRkKGMsIG9sZGMpO1xyXG5cdFx0ZCA9IHNhZmVfYWRkKGQsIG9sZGQpO1xyXG5cdFx0ZSA9IHNhZmVfYWRkKGUsIG9sZGUpO1xyXG5cdH1cclxuXHRyZXR1cm4gQXJyYXkoYSwgYiwgYywgZCwgZSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2hhMV9mdCh0LCBiLCBjLCBkKVxyXG57XHJcblx0aWYgKHQgPCAyMCkgcmV0dXJuIChiICYgYykgfCAoKH5iKSAmIGQpO1xyXG5cdGlmICh0IDwgNDApIHJldHVybiBiIF4gYyBeIGQ7XHJcblx0aWYgKHQgPCA2MCkgcmV0dXJuIChiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKTtcclxuXHRyZXR1cm4gYiBeIGMgXiBkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2hhMV9rdCh0KVxyXG57XHJcblx0cmV0dXJuICh0IDwgMjApID8gMTUxODUwMDI0OSA6ICh0IDwgNDApID8gMTg1OTc3NTM5MyA6ICh0IDwgNjApID8gLTE4OTQwMDc1ODggOiAtODk5NDk3NTE0O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY29yZV9obWFjX3NoYTEoa2V5LCBkYXRhKVxyXG57XHJcblx0dmFyIGJrZXkgPSBzdHIyYmluYihrZXkpO1xyXG5cdGlmIChia2V5Lmxlbmd0aCA+IDE2KSBia2V5ID0gY29yZV9zaGExKGJrZXksIGtleS5sZW5ndGggKiBjaHJzeik7XHJcblxyXG5cdHZhciBpcGFkID0gQXJyYXkoMTYpLFxyXG5cdFx0b3BhZCA9IEFycmF5KDE2KTtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspXHJcblx0e1xyXG5cdFx0aXBhZFtpXSA9IGJrZXlbaV0gXiAweDM2MzYzNjM2O1xyXG5cdFx0b3BhZFtpXSA9IGJrZXlbaV0gXiAweDVDNUM1QzVDO1xyXG5cdH1cclxuXHJcblx0dmFyIGhhc2ggPSBjb3JlX3NoYTEoaXBhZC5jb25jYXQoc3RyMmJpbmIoZGF0YSkpLCA1MTIgKyBkYXRhLmxlbmd0aCAqIGNocnN6KTtcclxuXHRyZXR1cm4gY29yZV9zaGExKG9wYWQuY29uY2F0KGhhc2gpLCA1MTIgKyAxNjApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2FmZV9hZGQoeCwgeSlcclxue1xyXG5cdHZhciBsc3cgPSAoeCAmIDB4RkZGRikgKyAoeSAmIDB4RkZGRik7XHJcblx0dmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xyXG5cdHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9sKG51bSwgY250KVxyXG57XHJcblx0cmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc3RyMmJpbmIoc3RyKVxyXG57XHJcblx0dmFyIGJpbiA9IEFycmF5KCk7XHJcblx0dmFyIG1hc2sgPSAoMSA8PCBjaHJzeikgLSAxO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aCAqIGNocnN6OyBpICs9IGNocnN6KVxyXG5cdFx0YmluW2kgPj4gNV0gfD0gKHN0ci5jaGFyQ29kZUF0KGkgLyBjaHJzeikgJiBtYXNrKSA8PCAoMjQgLSBpICUgMzIpO1xyXG5cdHJldHVybiBiaW47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBieXRlczJiaW5iKGJ5dGVBcnJheSlcclxue1xyXG5cdHZhciBiaW4gPSBBcnJheSgpO1xyXG4gIHZhciBtYXNrID0gKDEgPDwgY2hyc3opIC0gMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVBcnJheS5sZW5ndGggKiBjaHJzejsgaSArPSBjaHJzeilcclxuICBcdGJpbltpID4+IDVdIHw9IChieXRlQXJyYXlbaSAvIGNocnN6XSAmIG1hc2spIDw8ICgyNCAtIGkgJSAzMik7XHJcbiAgcmV0dXJuIGJpbjtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluYjJzdHIoYmluKVxyXG57XHJcblx0dmFyIHN0ciA9IFwiXCI7XHJcblx0dmFyIG1hc2sgPSAoMSA8PCBjaHJzeikgLSAxO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYmluLmxlbmd0aCAqIDMyOyBpICs9IGNocnN6KVxyXG5cdFx0c3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGJpbltpID4+IDVdID4+PiAoMjQgLSBpICUgMzIpKSAmIG1hc2spO1xyXG5cdHJldHVybiBzdHI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBiaW5iMmhleChiaW5hcnJheSlcclxue1xyXG5cdHZhciBoZXhfdGFiID0gaGV4Y2FzZSA/IFwiMDEyMzQ1Njc4OUFCQ0RFRlwiIDogXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XHJcblx0dmFyIHN0ciA9IFwiXCI7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiaW5hcnJheS5sZW5ndGggKiA0OyBpKyspXHJcblx0e1xyXG5cdFx0c3RyICs9IGhleF90YWIuY2hhckF0KChiaW5hcnJheVtpID4+IDJdID4+ICgoMyAtIGkgJSA0KSAqIDggKyA0KSkgJiAweEYpICsgaGV4X3RhYi5jaGFyQXQoKGJpbmFycmF5W2kgPj4gMl0gPj4gKCgzIC1cclxuXHRcdFx0aSAlIDQpICogOCkpICYgMHhGKTtcclxuXHR9XHJcblx0cmV0dXJuIHN0cjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJpbmIyYjY0KGJpbmFycmF5KVxyXG57XHJcblx0dmFyIHRhYiA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xyXG5cdHZhciBzdHIgPSBcIlwiO1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJyYXkubGVuZ3RoICogNDsgaSArPSAzKVxyXG5cdHtcclxuXHRcdHZhciB0cmlwbGV0ID0gKCgoYmluYXJyYXlbaSA+PiAyXSA+PiA4ICogKDMgLSBpICUgNCkpICYgMHhGRikgPDwgMTYpIHwgKCgoYmluYXJyYXlbaSArIDEgPj4gMl0gPj4gOCAqICgzIC0gKGkgKyAxKSAlXHJcblx0XHRcdDQpKSAmIDB4RkYpIDw8IDgpIHwgKChiaW5hcnJheVtpICsgMiA+PiAyXSA+PiA4ICogKDMgLSAoaSArIDIpICUgNCkpICYgMHhGRik7XHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKylcclxuXHRcdHtcclxuXHRcdFx0aWYgKGkgKiA4ICsgaiAqIDYgPiBiaW5hcnJheS5sZW5ndGggKiAzMikgc3RyICs9IGI2NHBhZDtcclxuXHRcdFx0ZWxzZSBzdHIgKz0gdGFiLmNoYXJBdCgodHJpcGxldCA+PiA2ICogKDMgLSBqKSkgJiAweDNGKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHN0cjtcclxufTtcclxuXHJcbi8qIOiOt+WPluWtl+espuS4sueahFVURi0457yW56CB55qE5a2X6IqC5pWw57uEICovXHJcbmZ1bmN0aW9uIHN0cmluZ1RvVXRmOEJ5dGUoc3RyKSB7XHJcblx0XHR2YXIgYnl0ZXMgPSBuZXcgQXJyYXkoKTtcclxuXHRcdHZhciBsZW4sIGM7XHJcblx0XHRsZW4gPSBzdHIubGVuZ3RoO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdGMgPSBzdHIuY2hhckNvZGVBdChpKTsxMDAwXHJcblx0XHRcdGlmICghKGMgJiAweEZGRkY4MCkpIHtcclxuXHRcdFx0XHRieXRlcy5wdXNoKGMgJiAweEZGKTtcclxuXHRcdFx0fSBlbHNlIGlmICghKGMgJiAweEZGRjgwMCkpIHtcclxuXHRcdFx0XHRieXRlcy5wdXNoKCgoYyA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XHJcblx0XHRcdFx0Ynl0ZXMucHVzaCgoYyAmIDB4M0YpIHwgMHg4MCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoIShjID49IDB4RkYwMDAwKSkge1xyXG5cdFx0XHRcdGJ5dGVzLnB1c2goKChjID4+IDEyKSAmIDB4MEYpIHwgMHhFMCk7XHJcblx0XHRcdFx0Ynl0ZXMucHVzaCgoKGMgPj4gNikgJiAweDNGKSB8IDB4ODApO1xyXG5cdFx0XHRcdGJ5dGVzLnB1c2goKGMgJiAweDNGKSB8IDB4ODApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJ5dGVzLnB1c2goKChjID4+IDE4KSAmIDB4MDcpIHwgMHhGMCk7XHJcblx0XHRcdFx0Ynl0ZXMucHVzaCgoKGMgPj4gMTIpICYgMHgzRikgfCAweDgwKTtcclxuXHRcdFx0XHRieXRlcy5wdXNoKCgoYyA+PiA2KSAmIDB4M0YpIHwgMHg4MCk7XHJcblx0XHRcdFx0Ynl0ZXMucHVzaCgoYyAmIDB4M0YpIHwgMHg4MCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBieXRlcztcclxufVxyXG5cclxuXHJcbnZhciBoZXhfc2hhMSA9IGZ1bmN0aW9uIChzKVxyXG57XHJcbiAgdmFyIGJ5dGVBcnJheSA9IHN0cmluZ1RvVXRmOEJ5dGUocyk7XHJcblx0cmV0dXJuIGJpbmIyaGV4KGNvcmVfc2hhMShieXRlczJiaW5iKGJ5dGVBcnJheSksIGJ5dGVBcnJheS5sZW5ndGggKiBjaHJzeikpO1xyXG59O1xyXG5cclxudmFyIGI2NF9zaGExID0gZnVuY3Rpb24gYjY0X3NoYTEocylcclxue1xyXG5cdHJldHVybiBiaW5iMmI2NChjb3JlX3NoYTEoc3RyMmJpbmIocyksIHMubGVuZ3RoICogY2hyc3opKTtcclxufTtcclxuXHJcbnZhciAgc3RyX3NoYTEgPSBmdW5jdGlvbiBzdHJfc2hhMShzKVxyXG57XHJcblx0cmV0dXJuIGJpbmIyc3RyKGNvcmVfc2hhMShzdHIyYmluYihzKSwgcy5sZW5ndGggKiBjaHJzeikpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOWunueOsOWKn+iDvTrmqKHlnZflr7zlh7rnmoTlr7nosaFcclxuICovXHJcbnZhciB1dGlsU0hBMSA9XHJcbiB7XHJcblx0RnVuY0hleFNhMTpoZXhfc2hhMSxcclxuICBGdW5jQmFzZTY0U2hhMTpiNjRfc2hhMSxcclxuXHRGdW5jU3RyU2hhMTpzdHJfc2hhMVx0IFxyXG4gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWxTSEExOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ 28);
var v4 = __webpack_require__(/*! ./v4 */ 32);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 28 */
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 29);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 31);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 29 */
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(crypto) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/crypto.js */ 30)["default"]))

/***/ }),
/* 30 */
/*!*****************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/crypto.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lookup = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
]

function base64Decode (source, target) {
  var sourceLength = source.length
  var paddingLength = (source[sourceLength - 2] === '=' ? 2 : (source[sourceLength - 1] === '=' ? 1
    : 0))

  var tmp
  var byteIndex = 0
  var baseLength = (sourceLength - paddingLength) & 0xfffffffc

  for (var i = 0; i < baseLength; i += 4) {
    tmp = (lookup[source.charCodeAt(i)] << 18) |
      (lookup[source.charCodeAt(i + 1)] << 12) |
      (lookup[source.charCodeAt(i + 2)] << 6) |
      (lookup[source.charCodeAt(i + 3)])

    target[byteIndex++] = (tmp >> 16) & 0xFF
    target[byteIndex++] = (tmp >> 8) & 0xFF
    target[byteIndex++] = (tmp) & 0xFF
  }

  if (paddingLength === 1) {
    tmp = (lookup[source.charCodeAt(i)] << 10) |
      (lookup[source.charCodeAt(i + 1)] << 4) |
      (lookup[source.charCodeAt(i + 2)] >> 2)

    target[byteIndex++] = (tmp >> 8) & 0xFF
    target[byteIndex++] = tmp & 0xFF
  }

  if (paddingLength === 2) {
    tmp = (lookup[source.charCodeAt(i)] << 2) | (lookup[source.charCodeAt(i + 1)] >> 4)

    target[byteIndex++] = tmp & 0xFF
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getRandomValues (arr) {
    if (!(
      arr instanceof Int8Array ||
        arr instanceof Uint8Array ||
        arr instanceof Int16Array ||
        arr instanceof Uint16Array ||
        arr instanceof Int32Array ||
        arr instanceof Uint32Array ||
        arr instanceof Uint8ClampedArray
    )) {
      throw new Error('Expected an integer array')
    }
    if (arr.byteLength > 65536) {
      throw new Error('Can only request a maximum of 65536 bytes')
    }
    var crypto = uni.requireNativePlugin('DCloud-Crypto')
    base64Decode(crypto.getRandomValues(arr.byteLength), new Uint8Array(arr.buffer, arr.byteOffset,
      arr.byteLength))
    return arr
  }
});


/***/ }),
/* 31 */
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 32 */
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 29);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 31);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 33 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 34);
var parse = __webpack_require__(/*! ./parse */ 48);
var formats = __webpack_require__(/*! ./formats */ 47);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 34 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ 35);
var utils = __webpack_require__(/*! ./utils */ 46);
var formats = __webpack_require__(/*! ./formats */ 47);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 35 */
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 36);
var callBound = __webpack_require__(/*! call-bind/callBound */ 42);
var inspect = __webpack_require__(/*! object-inspect */ 44);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),
/* 36 */
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ 37)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ 39);
var hasOwn = __webpack_require__(/*! has */ 41);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),
/* 37 */
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ 38);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),
/* 38 */
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 39 */
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 40);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 40 */
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 41 */
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 39);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 42 */
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 36);

var callBind = __webpack_require__(/*! ./ */ 43);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),
/* 43 */
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 39);
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 36);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),
/* 44 */
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(/*! ./util.inspect */ 45);
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),
/* 45 */
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 46 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ 47);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),
/* 47 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),
/* 48 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 46);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),
/* 49 */
/*!*****************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/api/UserApi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _commBnsUniHttpRequest = _interopRequireDefault(__webpack_require__(/*! @/commBns/commBnsUniHttpRequest */ 22));\nvar _commBnsConfig = _interopRequireDefault(__webpack_require__(/*! @/commBns/commBnsConfig.js */ 23));\nvar _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ 27));\n/**\r\n * @description: 用户模块Api\r\n * @author     : orangeboy\r\n * @author     : 彭坤(修改接口3.1.10，3.1.12)\r\n * @date       : 2021/7/2 18:06\r\n */\n\nvar Base64 = __webpack_require__(/*! js-base64 */ 50).Base64;\n\n/**\r\n * 3.1.1.1 电话号码密码登陆\r\n * @param {string} phone 已注册手机号\r\n * @param {string} password 密码\r\n * @param {string} appKey appKey\r\n * @returns {Promise}\r\n */\nfunction signInWithPassword(phone, password) {\n  var appKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _uuid.default.v4();\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/signin/password', {\n    appKey: appKey,\n    phone: phone,\n    password: password\n  }, {\n    Authorization: \"Basic\" + \" \" + Base64.encode('app' + ':' + 'password')\n  });\n}\n\n/**\r\n * 3.1.1.2 电话号码验证码登陆\r\n * @param {string} phone 已注册手机号\r\n * @param {string} captcha 验证码\r\n * @param {string} smsId 验证码id\r\n * @param {string} appKey appKey\r\n * @returns {Promise}\r\n */\nfunction signInWithCaptcha(phone, captcha, smsId) {\n  var appKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _uuid.default.v4();\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/signin/captcha', {\n    phone: phone,\n    captcha: captcha,\n    smsId: smsId,\n    appKey: appKey\n  }, {\n    Authorization: \"Basic\" + \" \" + Base64.encode('app' + ':' + 'password')\n  });\n}\n\n/**\r\n * 3.1.1.3 使用refreshToken重新登陆\r\n * @param {string} refreshToken refresh_token\r\n * @param {string} appKey appKey\r\n * @returns {Promise}\r\n */\nfunction signInWithRefreshToken(refreshToken, appKey) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/signin/refresh', {\n    refreshToken: refreshToken,\n    appKey: appKey\n  });\n}\n\n/**\r\n * 注册用户，不需要token\r\n * @param {*} name \r\n * @param {*} phone \r\n * @param {*} captcha \r\n * @param {*} smsId \r\n * @returns \r\n */\nfunction addUser(name, phone, captcha, smsId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/signin/addUser', {\n    name: name,\n    phone: phone,\n    captcha: captcha,\n    smsId: smsId\n  });\n}\n\n/**\r\n * 3.1.2 重置密码\r\n * @param {string} phone 已注册手机号\r\n * @param {string} password 新密码\r\n * @param {string} captcha 验证码\r\n * @param {string} smsId 验证码ID\r\n * @returns {Promise}\r\n */\nfunction forgetPassword(phone, password, captcha, smsId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/signin/forget', {\n    phone: phone,\n    password: password,\n    captcha: captcha,\n    smsId: smsId\n  });\n}\n\n/**\r\n * 3.1.3 获取验证码\r\n * @param {string} phone 手机号\r\n * @returns {Promise}\r\n */\nfunction getCaptcha(email) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/uaa/signup/send/emailcode?email=${email}\");\n}\n\n/**\r\n * 3.1.3.1 新手机号获取验证码\r\n * @param {string} phone 手机号\r\n * @returns {Promise}\r\n */\nfunction getCaptchaToNewPhone(phone) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/sms/captchaToNewPhone\", {\n    phone: phone\n  }, {\n    'Content-Type': 'application/json',\n    Authorization: 'Basic' + ' ' + Base64.encode('app' + ':' + 'password')\n  });\n}\n\n/**\r\n * 3.1.4 本人修改密码\r\n * @param {string} oldPassword 原始密码\r\n * @param {string} newPassword 新密码\r\n * @returns {Promise}\r\n */\nfunction modifyPassword(oldPassword, newPassword) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPut('/user/info/password', {\n    oldPassword: oldPassword,\n    newPassword: newPassword\n  });\n}\n\n/**\r\n * 3.1.4.1 超级管理员重置密码\r\n * @param {string} userId 用户id\r\n * @returns {Promise}\r\n */\nfunction forgetPsdByAdmin(userId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/info/forgetByAdmin', {\n    userId: userId\n  });\n}\n/**\r\n * 3.1.1.4 注销账号\r\n * @param {string} userId 用户id\r\n * @returns {Promise}\r\n */\nfunction deleteUser(userId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost(\"/user/signin/logout/\".concat(userId));\n}\n/**\r\n * 3.1.5 本人修改手机号码\r\n * @param {string} password 密码\r\n * @param {string} newPhone 新手机号\r\n * @param {string} captcha 新手机号验证码\r\n * @param {string} smsId 验证码id\r\n * @returns {Promise}\r\n */\nfunction modifyPhone(password, newPhone, captcha, smsId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/info/phoneChange', {\n    password: password,\n    newPhone: newPhone,\n    captcha: captcha,\n    smsId: smsId\n  });\n}\n\n/**\r\n * 3.1.5.1 超级管理员修改手机号码\r\n * @param {number} userId 用户id\r\n * @param {string} newPhone 新手机号\r\n * @returns {Promise}\r\n */\nfunction modifyPhoneByAdmin(userId, newPhone) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/info/phoneByAdmin', {\n    userId: userId,\n    newPhone: newPhone\n  });\n}\n\n/**\r\n * 3.1.6 查询用户详细信息\r\n * @param {number} uid 查询的用户id\r\n * @returns {Promise}\r\n */\nfunction getUserInfo(uid) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/user/\".concat(uid, \"/info\"));\n}\n\n/**\r\n * 3.1.6.1 通过电话号码与姓名来查询用户详细信息\r\n * @param {string} phoneNum 查询的用户的电话号码\r\n * @param {string} name 查询用户的姓名\r\n * @param {number} projectId 项目id\r\n * @returns {Promise}\r\n */\nfunction getInfoByPhone(phoneNum, name, projectId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/getInfoByPhone', {\n    phone_num: phoneNum,\n    name: name,\n    project_id: projectId\n  });\n}\n\n/**\r\n * 3.1.7 查询用户拥有角色\r\n * @param {number} uid 查询的用户id\r\n * @returns {Promise}\r\n */\nfunction getUserRoles(uid) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/user/\".concat(uid, \"/roles\"));\n}\n\n/**\r\n * 3.1.9 禁用/启用成员\r\n * @param {number} uid 成员ID\r\n * @param {number} operation 0：禁用 1：启用\r\n * @returns {Promise}\r\n */\nfunction enableOrDisableUser(uid, operation) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPut(\"/user/\".concat(uid, \"/ban?operation=\").concat(operation));\n}\n\n/**\r\n * 3.1.10 增加用户\r\n * @param {string} name 姓名\r\n * @param {string} phone 电话\r\n * @param {number} role 角色id，不给默认为普通角色\r\n * @param {number} type 用户类型0：甲方 1：乙方 2:丙方\r\n * @param {string} affiliation 用户单位\r\n * @param {number} projectId 乙方用户创建用户必须携带当前项目id，用来判断交给谁审核用户\r\n * @returns {Promise}\r\n */\nfunction createUser(name, phone, role, type, affiliation, projectId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/', {\n    name: name,\n    phone: phone,\n    role: role,\n    type: type,\n    affiliation: affiliation,\n    projectId: projectId\n  }, {}, true);\n}\n\n/**\r\n * 3.1.11 本人修改姓名\r\n * @param {string} name 新的姓名\r\n * @returns {Promise}\r\n */\nfunction modifyName(name) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPut('/user/info/name', {\n    name: name\n  });\n}\n\n/**\r\n * 3.1.12 条件查询用户\r\n * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)\r\n * @param {string} affiliation 用户单位，模糊查询\r\n * @param {number} type 用户类型 0：甲方1：乙方 2：丙方\r\n * @param {number} banned 用户是否离职 0：否1：是\r\n * @param {number} roleId 用户角色id，有值表示需要限制查询的用户的角色\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction queryUser(keyword, affiliation, type, banned, roleId, pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/query', {\n    keyword: keyword,\n    affiliation: affiliation,\n    type: type,\n    banned: banned,\n    roleId: roleId,\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 3.1.13 查询角色id和角色名字对应关系\r\n * @returns {Promise}\r\n */\nfunction getRoleList() {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/rolelist');\n}\n\n/**\r\n * 3.1.14 修改他人信息\r\n * @param {number} userId 被修改的用户的id\r\n * @param {string} name 新的姓名\r\n * @param {string} affiliation 新的单位\r\n * @param {number} type 新的用户类型0：甲方 1：乙方\r\n * @returns {Promise}\r\n */\nfunction modifyOthersInfo(userId, name, affiliation, type) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPut(\"/user/\".concat(userId, \"/info\"), {\n    name: name,\n    affiliation: affiliation,\n    type: type\n  }, {}, true);\n}\n\n/**\r\n * 3.1.15 获取用户头像\r\n * 用户头像会保存到华为云上，使用固定格式的url就可以获取到用户头像数据,图片都是在上传时后端转成了jpg格式。\r\n * @param {number} uid 用户id\r\n * @param {boolean} isOriginal 是否获取原图，选择false则返回缩略图地址\r\n * @returns {string} 对应的头像地址\r\n */\nfunction getUserAvatarUrl(uid) {\n  var isOriginal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  // return isOriginal ? `https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/${uid}.jpg` :\n  //     `https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/${uid}.jpg?x-image-process=style/thumbnail`;\n  return isOriginal ? _commBnsConfig.default.baseCfg.pictureUrl + \"\".concat(uid, \".jpg\") : _commBnsConfig.default.baseCfg.pictureUrl + \"\".concat(uid, \".jpg?x-image-process=style/thumbnail\");\n}\n\n/**\r\n * 3.1.16 设置用户头像\r\n * @param {number} userId 用户id\r\n * @param {Blob} avatar 头像二进制数据，如果不传值或者不设置这个参数，就会删除头像数据\r\n * @returns {Promise}\r\n */\nfunction setUserAvatar(userId, avatar) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPostFormDataAndUrlParams(\"/user/\".concat(userId, \"/avatar\"), {}, {\n    avatar: avatar\n  });\n}\n\n/**\r\n * 3.1.17 移除用户角色\r\n * @param {number} userId 用户id\r\n * @param {number} role 新的角色的id\r\n * @returns {Promise}\r\n */\nfunction removeUserRole(userId, role) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithDelete(\"/user/\".concat(userId, \"/role\"), {\n    role: role\n  });\n}\n\n/**\r\n * 3.1.18 增加用户角色\r\n * @param {number} userId 用户id\r\n * @param {number} role 新的角色的id\r\n * @returns {Promise}\r\n */\nfunction createUserRole(userId, role) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPut(\"/user/\".concat(userId, \"/role\"), {\n    role: role\n  });\n}\n\n/**\r\n * 3.1.19 查询所有自己创建角色能分配的单位\r\n * @param {string} keyword 关键字，乙方用户查无效\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction getAffiliationList(keyword, pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/affiliationlist', {\n    keyword: keyword,\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 3.1.20 审核用户创建\r\n * @param {number} reviewId 用户审核id\r\n * @param {number} pass 是否通过0：不通过，删除用户，1：通过\r\n * @returns {Promise}\r\n */\nfunction reviewNewUser(reviewId, pass) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/user/review', {\n    reviewId: reviewId,\n    pass: pass\n  });\n}\n\n/**\r\n * 3.1.21 查询等待审核的用户\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction getReviewList(pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/reviewlist', {\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 3.1.22 获取通知详情\r\n * @param {number} noticeId 通知id\r\n * @returns {Promise}\r\n */\nfunction getNoticeDetail(noticeId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/notice/\".concat(noticeId, \"/info\"));\n}\n\n/**\r\n * 3.1.23 获取所有通知\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction getAllNotice(pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/notice/all', {\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 删除通知\r\n * @param {number} noticeId  \r\n */\nfunction deleteNotice(noticeId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/notice/delete', {\n    noticeId: noticeId\n  });\n}\n\n/**\r\n * 3.1.24 获取没有看过的通知的数量\r\n * @returns {Promise}\r\n */\nfunction getUnreadNoticeCount() {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/notice/count');\n}\n\n/**\r\n * 3.1.24.1 一键读取所有通知(清除小红点)\r\n * @returns {Promise}\r\n */\nfunction readAllNotice() {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPost('/notice/readAll');\n}\n\n/**\r\n * 3.1.25 查询用户的审核状态\r\n * @param {number} reviewId 用户审核id\r\n * @returns {Promise}\r\n */\nfunction getReviewStatus(reviewId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/user/review/\".concat(reviewId, \"/status\"));\n}\n\n/**\r\n * 3.1.26 查询可以被选择的项目成员/项目经理(甲方)\r\n * @param {number} projectId 项目id\r\n * @param {number} job 0:查询经理1:查询成员，默认为1\r\n * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction queryAlternativeProjectMember(projectId, job, keyword, pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/query/projectmember', {\n    projectId: projectId,\n    job: job,\n    keyword: keyword,\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 3.1.27 查询可以被选择的钻探编录/钻探负责人(乙方)\r\n * @param {number} drillId 钻孔id\r\n * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)\r\n * @param {number} job 0:查询负责人1:查询编录，默认为1\r\n * @param {number} pageNum 要获取的页\r\n * @param {number} pageSize 每页最大个数\r\n * @returns {Promise}\r\n */\nfunction queryAlternativeDrillMember(drillId, keyword, job, pageNum, pageSize) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/query/drillmember', {\n    drillId: drillId,\n    keyword: keyword,\n    job: job,\n    pageNum: pageNum,\n    pageSize: pageSize\n  });\n}\n\n/**\r\n * 3.1.28 导入用户\r\n * @param {Blob} excel 导入信息，只有第一个sheet有效\r\n * @returns {Promise}\r\n */\nfunction importUser(excel) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPostFormDataAndUrlParams('/user/import', {}, {\n    excel: excel\n  });\n}\n\n/**\r\n * 3.1.29 获取导入/创建结果\r\n * @param {string} resultCode 导入用户之后返回的结果码\r\n * @returns {Promise}\r\n */\nfunction getImportResult(resultCode) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet('/user/import/result', {\n    resultCode: resultCode\n  });\n}\n\n/**\r\n * 3.1.30 设置用户个人电子签名\r\n * @param {Blob} image 电子签名图片\r\n * @returns {Promise}\r\n */\nfunction setSignature(image) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithPostFormDataAndUrlParams('/user/signature', {}, {\n    image: image\n  });\n}\n\n/**\r\n * 3.1.31 获取用户个人电子签名的url\r\n * @param {number} userId 用户id\r\n * @returns {Promise}\r\n */\nfunction getSignatureUrl(userId) {\n  return _commBnsUniHttpRequest.default.FuncBnsHttpRequestWithGet(\"/user/\".concat(userId, \"/signature\"));\n}\nvar _default = {\n  signInWithPassword: signInWithPassword,\n  signInWithCaptcha: signInWithCaptcha,\n  signInWithRefreshToken: signInWithRefreshToken,\n  addUser: addUser,\n  forgetPassword: forgetPassword,\n  getCaptcha: getCaptcha,\n  getCaptchaToNewPhone: getCaptchaToNewPhone,\n  modifyPassword: modifyPassword,\n  forgetPsdByAdmin: forgetPsdByAdmin,\n  modifyPhone: modifyPhone,\n  modifyPhoneByAdmin: modifyPhoneByAdmin,\n  getUserInfo: getUserInfo,\n  getInfoByPhone: getInfoByPhone,\n  getUserRoles: getUserRoles,\n  enableOrDisableUser: enableOrDisableUser,\n  createUser: createUser,\n  modifyName: modifyName,\n  queryUser: queryUser,\n  getRoleList: getRoleList,\n  modifyOthersInfo: modifyOthersInfo,\n  getUserAvatarUrl: getUserAvatarUrl,\n  setUserAvatar: setUserAvatar,\n  removeUserRole: removeUserRole,\n  createUserRole: createUserRole,\n  getAffiliationList: getAffiliationList,\n  reviewNewUser: reviewNewUser,\n  getReviewList: getReviewList,\n  getNoticeDetail: getNoticeDetail,\n  getAllNotice: getAllNotice,\n  getUnreadNoticeCount: getUnreadNoticeCount,\n  readAllNotice: readAllNotice,\n  getReviewStatus: getReviewStatus,\n  queryAlternativeProjectMember: queryAlternativeProjectMember,\n  queryAlternativeDrillMember: queryAlternativeDrillMember,\n  importUser: importUser,\n  getImportResult: getImportResult,\n  setSignature: setSignature,\n  getSignatureUrl: getSignatureUrl,\n  deleteNotice: deleteNotice,\n  deleteUser: deleteUser\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL1VzZXJBcGkuanMiXSwibmFtZXMiOlsiQmFzZTY0IiwicmVxdWlyZSIsInNpZ25JbldpdGhQYXNzd29yZCIsInBob25lIiwicGFzc3dvcmQiLCJhcHBLZXkiLCJ1dWlkIiwidjQiLCJjb21tQm5zVW5pSHR0cFJlcXVlc3QiLCJGdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdCIsIkF1dGhvcml6YXRpb24iLCJlbmNvZGUiLCJzaWduSW5XaXRoQ2FwdGNoYSIsImNhcHRjaGEiLCJzbXNJZCIsInNpZ25JbldpdGhSZWZyZXNoVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJhZGRVc2VyIiwibmFtZSIsImZvcmdldFBhc3N3b3JkIiwiZ2V0Q2FwdGNoYSIsImVtYWlsIiwiRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aEdldCIsImdldENhcHRjaGFUb05ld1Bob25lIiwibW9kaWZ5UGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aFB1dCIsImZvcmdldFBzZEJ5QWRtaW4iLCJ1c2VySWQiLCJkZWxldGVVc2VyIiwibW9kaWZ5UGhvbmUiLCJuZXdQaG9uZSIsIm1vZGlmeVBob25lQnlBZG1pbiIsImdldFVzZXJJbmZvIiwidWlkIiwiZ2V0SW5mb0J5UGhvbmUiLCJwaG9uZU51bSIsInByb2plY3RJZCIsInBob25lX251bSIsInByb2plY3RfaWQiLCJnZXRVc2VyUm9sZXMiLCJlbmFibGVPckRpc2FibGVVc2VyIiwib3BlcmF0aW9uIiwiY3JlYXRlVXNlciIsInJvbGUiLCJ0eXBlIiwiYWZmaWxpYXRpb24iLCJtb2RpZnlOYW1lIiwicXVlcnlVc2VyIiwia2V5d29yZCIsImJhbm5lZCIsInJvbGVJZCIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsImdldFJvbGVMaXN0IiwibW9kaWZ5T3RoZXJzSW5mbyIsImdldFVzZXJBdmF0YXJVcmwiLCJpc09yaWdpbmFsIiwiY29tbUJuc0NvbmZpZyIsImJhc2VDZmciLCJwaWN0dXJlVXJsIiwic2V0VXNlckF2YXRhciIsImF2YXRhciIsIkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0Rm9ybURhdGFBbmRVcmxQYXJhbXMiLCJyZW1vdmVVc2VyUm9sZSIsIkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhEZWxldGUiLCJjcmVhdGVVc2VyUm9sZSIsImdldEFmZmlsaWF0aW9uTGlzdCIsInJldmlld05ld1VzZXIiLCJyZXZpZXdJZCIsInBhc3MiLCJnZXRSZXZpZXdMaXN0IiwiZ2V0Tm90aWNlRGV0YWlsIiwibm90aWNlSWQiLCJnZXRBbGxOb3RpY2UiLCJkZWxldGVOb3RpY2UiLCJnZXRVbnJlYWROb3RpY2VDb3VudCIsInJlYWRBbGxOb3RpY2UiLCJnZXRSZXZpZXdTdGF0dXMiLCJxdWVyeUFsdGVybmF0aXZlUHJvamVjdE1lbWJlciIsImpvYiIsInF1ZXJ5QWx0ZXJuYXRpdmVEcmlsbE1lbWJlciIsImRyaWxsSWQiLCJpbXBvcnRVc2VyIiwiZXhjZWwiLCJnZXRJbXBvcnRSZXN1bHQiLCJyZXN1bHRDb2RlIiwic2V0U2lnbmF0dXJlIiwiaW1hZ2UiLCJnZXRTaWduYXR1cmVVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG1CQUFXLENBQUMsQ0FBQ0QsTUFBTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTRSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQW9CO0VBQUEsSUFBbEJDLE1BQU0sdUVBQUNDLGFBQUksQ0FBQ0MsRUFBRSxFQUFFO0VBQ3pELE9BQU9DLDhCQUFxQixDQUN2QkMsMEJBQTBCLENBQ3ZCLHVCQUF1QixFQUN2QjtJQUNJSixNQUFNLEVBQU5BLE1BQU07SUFDTkYsS0FBSyxFQUFMQSxLQUFLO0lBQ0xDLFFBQVEsRUFBUkE7RUFDSixDQUFDLEVBQ0Q7SUFDSU0sYUFB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QUNWQyxTQUFTLEVBQVRBLFNBQVM7RUFDVE0sV0FBVyxFQUFYQSxXQUFXO0VBQ1hDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0VBQ2hCQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtFQUNoQkssYUFBYSxFQUFiQSxhQUFhO0VBQ2JHLGNBQWMsRUFBZEEsY0FBYztFQUNkRSxjQUFjLEVBQWRBLGNBQWM7RUFDZEMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7RUFDbEJDLGFBQWEsRUFBYkEsYUFBYTtFQUNiRyxhQUFhLEVBQWJBLGFBQWE7RUFDYkMsZUFBZSxFQUFmQSxlQUFlO0VBQ2ZFLFlBQVksRUFBWkEsWUFBWTtFQUNaRSxvQkFBb0IsRUFBcEJBLG9CQUFvQjtFQUNwQkMsYUFBYSxFQUFiQSxhQUFhO0VBQ2JDLGVBQWUsRUFBZkEsZUFBZTtFQUNmQyw2QkFBNkIsRUFBN0JBLDZCQUE2QjtFQUM3QkUsMkJBQTJCLEVBQTNCQSwyQkFBMkI7RUFDM0JFLFVBQVUsRUFBVkEsVUFBVTtFQUNWRSxlQUFlLEVBQWZBLGVBQWU7RUFDZkUsWUFBWSxFQUFaQSxZQUFZO0VBQ1pFLGVBQWUsRUFBZkEsZUFBZTtFQUNmZCxZQUFZLEVBQVpBLFlBQVk7RUFDWjlDLFVBQVUsRUFBVkE7QUFDSixDQUFDO0FBQUEiLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRlc2NyaXB0aW9uOiDnlKjmiLfmqKHlnZdBcGlcclxuICogQGF1dGhvciAgICAgOiBvcmFuZ2Vib3lcclxuICogQGF1dGhvciAgICAgOiDlva3lnaQo5L+u5pS55o6l5Y+jMy4xLjEw77yMMy4xLjEyKVxyXG4gKiBAZGF0ZSAgICAgICA6IDIwMjEvNy8yIDE4OjA2XHJcbiAqL1xyXG5cclxuaW1wb3J0IGNvbW1CbnNVbmlIdHRwUmVxdWVzdCBmcm9tIFwiQC9jb21tQm5zL2NvbW1CbnNVbmlIdHRwUmVxdWVzdFwiO1xyXG5pbXBvcnQgY29tbUJuc0NvbmZpZyBmcm9tIFwiQC9jb21tQm5zL2NvbW1CbnNDb25maWcuanNcIlxyXG5cclxuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIlxyXG5jb25zdCBCYXNlNjQgPSByZXF1aXJlKFwianMtYmFzZTY0XCIpLkJhc2U2NDtcclxuXHJcbi8qKlxyXG4gKiAzLjEuMS4xIOeUteivneWPt+eggeWvhueggeeZu+mZhlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGhvbmUg5bey5rOo5YaM5omL5py65Y+3XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCDlr4bnoIFcclxuICogQHBhcmFtIHtzdHJpbmd9IGFwcEtleSBhcHBLZXlcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBzaWduSW5XaXRoUGFzc3dvcmQocGhvbmUsIHBhc3N3b3JkLCBhcHBLZXk9dXVpZC52NCgpKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0XHJcbiAgICAgICAgLkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0KFxyXG4gICAgICAgICAgICAnL3VzZXIvc2lnbmluL3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXBwS2V5LFxyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmFzaWNcIiArIFwiIFwiICsgQmFzZTY0LmVuY29kZSgnYXBwJyArICc6JyArICdwYXNzd29yZCcpLFxyXG4gICAgICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS4xLjIg55S16K+d5Y+356CB6aqM6K+B56CB55m76ZmGXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZSDlt7Lms6jlhozmiYvmnLrlj7dcclxuICogQHBhcmFtIHtzdHJpbmd9IGNhcHRjaGEg6aqM6K+B56CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzbXNJZCDpqozor4HnoIFpZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwS2V5IGFwcEtleVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIHNpZ25JbldpdGhDYXB0Y2hhKHBob25lLCBjYXB0Y2hhLCBzbXNJZCwgYXBwS2V5PXV1aWQudjQoKSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdFxyXG4gICAgICAgIC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdChcclxuICAgICAgICAgICAgJy91c2VyL3NpZ25pbi9jYXB0Y2hhJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBjYXB0Y2hhLFxyXG4gICAgICAgICAgICAgICAgc21zSWQsXHJcbiAgICAgICAgICAgICAgICBhcHBLZXlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICBcIkJhc2ljXCIgKyBcIiBcIiArIEJhc2U2NC5lbmNvZGUoJ2FwcCcgKyAnOicgKyAncGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMS4zIOS9v+eUqHJlZnJlc2hUb2tlbumHjeaWsOeZu+mZhlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmcmVzaFRva2VuIHJlZnJlc2hfdG9rZW5cclxuICogQHBhcmFtIHtzdHJpbmd9IGFwcEtleSBhcHBLZXlcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBzaWduSW5XaXRoUmVmcmVzaFRva2VuKHJlZnJlc2hUb2tlbiwgYXBwS2V5KSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0KFxyXG4gICAgICAgICcvdXNlci9zaWduaW4vcmVmcmVzaCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgIGFwcEtleVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDms6jlhoznlKjmiLfvvIzkuI3pnIDopoF0b2tlblxyXG4gKiBAcGFyYW0geyp9IG5hbWUgXHJcbiAqIEBwYXJhbSB7Kn0gcGhvbmUgXHJcbiAqIEBwYXJhbSB7Kn0gY2FwdGNoYSBcclxuICogQHBhcmFtIHsqfSBzbXNJZCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRVc2VyKG5hbWUsIHBob25lLCBjYXB0Y2hhLCBzbXNJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdFxyXG4gICAgICAgIC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdCgnL3VzZXIvc2lnbmluL2FkZFVzZXInLCB7XHJcbiAgICAgICAgICAgIG5hbWUsIHBob25lLCBjYXB0Y2hhLCBzbXNJZFxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjIg6YeN572u5a+G56CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZSDlt7Lms6jlhozmiYvmnLrlj7dcclxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIOaWsOWvhueggVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FwdGNoYSDpqozor4HnoIFcclxuICogQHBhcmFtIHtzdHJpbmd9IHNtc0lkIOmqjOivgeeggUlEXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gZm9yZ2V0UGFzc3dvcmQocGhvbmUsIHBhc3N3b3JkLCBjYXB0Y2hhLCBzbXNJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdFxyXG4gICAgICAgIC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdCgnL3VzZXIvc2lnbmluL2ZvcmdldCcsIHtcclxuICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBjYXB0Y2hhLFxyXG4gICAgICAgICAgICBzbXNJZFxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjMg6I635Y+W6aqM6K+B56CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaG9uZSDmiYvmnLrlj7dcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRDYXB0Y2hhKGVtYWlsKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0XHJcbiAgICAgICAgLkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhHZXQoXHJcbiAgICAgICAgICAgIFwiL3VhYS9zaWdudXAvc2VuZC9lbWFpbGNvZGU/ZW1haWw9JHtlbWFpbH1cIlxyXG4gICAgICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMy4xIOaWsOaJi+acuuWPt+iOt+WPlumqjOivgeeggVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGhvbmUg5omL5py65Y+3XHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuIGZ1bmN0aW9uIGdldENhcHRjaGFUb05ld1Bob25lKHBob25lKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0XHJcbiAgICAgICAgLkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhHZXQoXHJcbiAgICAgICAgICAgIFwiL3Ntcy9jYXB0Y2hhVG9OZXdQaG9uZVwiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAnQmFzaWMnICsgJyAnICsgQmFzZTY0LmVuY29kZSgnYXBwJyArICc6JyArICdwYXNzd29yZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjQg5pys5Lq65L+u5pS55a+G56CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBvbGRQYXNzd29yZCDljp/lp4vlr4bnoIFcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1Bhc3N3b3JkIOaWsOWvhueggVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIG1vZGlmeVBhc3N3b3JkKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCl7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQdXQoXHJcbiAgICAgICAgJy91c2VyL2luZm8vcGFzc3dvcmQnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2xkUGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS40LjEg6LaF57qn566h55CG5ZGY6YeN572u5a+G56CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQg55So5oi3aWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG4gZnVuY3Rpb24gZm9yZ2V0UHNkQnlBZG1pbih1c2VySWQpe1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdChcclxuICAgICAgICAnL3VzZXIvaW5mby9mb3JnZXRCeUFkbWluJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuLyoqXHJcbiAqIDMuMS4xLjQg5rOo6ZSA6LSm5Y+3XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQg55So5oi3aWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG4gZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQpe1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdChcclxuICAgICAgICAgYC91c2VyL3NpZ25pbi9sb2dvdXQvJHt1c2VySWR9YFxyXG4gICAgKTtcclxufVxyXG4vKipcclxuICogMy4xLjUg5pys5Lq65L+u5pS55omL5py65Y+356CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCDlr4bnoIFcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1Bob25lIOaWsOaJi+acuuWPt1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FwdGNoYSDmlrDmiYvmnLrlj7fpqozor4HnoIFcclxuICogQHBhcmFtIHtzdHJpbmd9IHNtc0lkIOmqjOivgeeggWlkXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gbW9kaWZ5UGhvbmUocGFzc3dvcmQsIG5ld1Bob25lLCBjYXB0Y2hhLCBzbXNJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdChcclxuICAgICAgICAnL3VzZXIvaW5mby9waG9uZUNoYW5nZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgbmV3UGhvbmUsXHJcbiAgICAgICAgICAgIGNhcHRjaGEsXHJcbiAgICAgICAgICAgIHNtc0lkXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS41LjEg6LaF57qn566h55CG5ZGY5L+u5pS55omL5py65Y+356CBXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQg55So5oi3aWRcclxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1Bob25lIOaWsOaJi+acuuWPt1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbiBmdW5jdGlvbiBtb2RpZnlQaG9uZUJ5QWRtaW4odXNlcklkLCBuZXdQaG9uZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdChcclxuICAgICAgICAnL3VzZXIvaW5mby9waG9uZUJ5QWRtaW4nLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICBuZXdQaG9uZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuNiDmn6Xor6LnlKjmiLfor6bnu4bkv6Hmga9cclxuICogQHBhcmFtIHtudW1iZXJ9IHVpZCDmn6Xor6LnmoTnlKjmiLdpZFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFVzZXJJbmZvKHVpZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgIGAvdXNlci8ke3VpZH0vaW5mb2BcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuNi4xIOmAmui/h+eUteivneWPt+eggeS4juWnk+WQjeadpeafpeivoueUqOaIt+ivpue7huS/oeaBr1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGhvbmVOdW0g5p+l6K+i55qE55So5oi355qE55S16K+d5Y+356CBXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOafpeivoueUqOaIt+eahOWnk+WQjVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvamVjdElkIOmhueebrmlkXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW5mb0J5UGhvbmUocGhvbmVOdW0sIG5hbWUsIHByb2plY3RJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvdXNlci9nZXRJbmZvQnlQaG9uZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwaG9uZV9udW06IHBob25lTnVtLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBwcm9qZWN0X2lkOiBwcm9qZWN0SWRcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjcg5p+l6K+i55So5oi35oul5pyJ6KeS6ImyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1aWQg5p+l6K+i55qE55So5oi3aWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVc2VyUm9sZXModWlkKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhHZXQoXHJcbiAgICAgICAgYC91c2VyLyR7dWlkfS9yb2xlc2BcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuOSDnpoHnlKgv5ZCv55So5oiQ5ZGYXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1aWQg5oiQ5ZGYSURcclxuICogQHBhcmFtIHtudW1iZXJ9IG9wZXJhdGlvbiAw77ya56aB55SoIDHvvJrlkK/nlKhcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBlbmFibGVPckRpc2FibGVVc2VyKHVpZCwgb3BlcmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQdXQoXHJcbiAgICAgICAgYC91c2VyLyR7dWlkfS9iYW4/b3BlcmF0aW9uPSR7b3BlcmF0aW9ufWBcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTAg5aKe5Yqg55So5oi3XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOWnk+WQjVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcGhvbmUg55S16K+dXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByb2xlIOinkuiJsmlk77yM5LiN57uZ6buY6K6k5Li65pmu6YCa6KeS6ImyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIOeUqOaIt+exu+WeizDvvJrnlLLmlrkgMe+8muS5meaWuSAyOuS4meaWuVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWZmaWxpYXRpb24g55So5oi35Y2V5L2NXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9qZWN0SWQg5LmZ5pa555So5oi35Yib5bu655So5oi35b+F6aG75pC65bim5b2T5YmN6aG555uuaWTvvIznlKjmnaXliKTmlq3kuqTnu5nosIHlrqHmoLjnlKjmiLdcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVVc2VyKG5hbWUsIHBob25lLCByb2xlLCB0eXBlLCBhZmZpbGlhdGlvbiwgcHJvamVjdElkKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0KFxyXG4gICAgICAgICcvdXNlci8nLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGFmZmlsaWF0aW9uLFxyXG4gICAgICAgICAgICBwcm9qZWN0SWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHRydWVcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTEg5pys5Lq65L+u5pS55aeT5ZCNXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOaWsOeahOWnk+WQjVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIG1vZGlmeU5hbWUobmFtZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUHV0KFxyXG4gICAgICAgICcvdXNlci9pbmZvL25hbWUnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogMy4xLjEyIOadoeS7tuafpeivoueUqOaIt1xyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZCDmn6Xor6LlhbPplK7or43vvIzlkIzml7bljLnphY0g55So5oi35aeT5ZCNKOaooeeziuWMuemFjSkg55So5oi355S16K+d5Y+356CBKOaooeeziuWMuemFjSlcclxuICogQHBhcmFtIHtzdHJpbmd9IGFmZmlsaWF0aW9uIOeUqOaIt+WNleS9je+8jOaooeeziuafpeivolxyXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSDnlKjmiLfnsbvlnosgMO+8mueUsuaWuTHvvJrkuZnmlrkgMu+8muS4meaWuVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYmFubmVkIOeUqOaIt+aYr+WQpuemu+iBjCAw77ya5ZCmMe+8muaYr1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcm9sZUlkIOeUqOaIt+inkuiJsmlk77yM5pyJ5YC86KGo56S66ZyA6KaB6ZmQ5Yi25p+l6K+i55qE55So5oi355qE6KeS6ImyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtIOimgeiOt+WPlueahOmhtVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZVNpemUg5q+P6aG15pyA5aSn5Liq5pWwXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlVc2VyKGtleXdvcmQsIGFmZmlsaWF0aW9uLCB0eXBlLCBiYW5uZWQsIHJvbGVJZCwgcGFnZU51bSwgcGFnZVNpemUpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aEdldChcclxuICAgICAgICAnL3VzZXIvcXVlcnknLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5d29yZCxcclxuICAgICAgICAgICAgYWZmaWxpYXRpb24sXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIGJhbm5lZCxcclxuICAgICAgICAgICAgcm9sZUlkLFxyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTMg5p+l6K+i6KeS6ImyaWTlkozop5LoibLlkI3lrZflr7nlupTlhbPns7tcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSb2xlTGlzdCgpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aEdldChcclxuICAgICAgICAnL3VzZXIvcm9sZWxpc3QnXHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjE0IOS/ruaUueS7luS6uuS/oeaBr1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdXNlcklkIOiiq+S/ruaUueeahOeUqOaIt+eahGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIOaWsOeahOWnk+WQjVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWZmaWxpYXRpb24g5paw55qE5Y2V5L2NXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIOaWsOeahOeUqOaIt+exu+WeizDvvJrnlLLmlrkgMe+8muS5meaWuVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIG1vZGlmeU90aGVyc0luZm8odXNlcklkLCBuYW1lLCBhZmZpbGlhdGlvbiwgdHlwZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUHV0KFxyXG4gICAgICAgIGAvdXNlci8ke3VzZXJJZH0vaW5mb2AsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICBhZmZpbGlhdGlvbixcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS4xNSDojrflj5bnlKjmiLflpLTlg49cclxuICog55So5oi35aS05YOP5Lya5L+d5a2Y5Yiw5Y2O5Li65LqR5LiK77yM5L2/55So5Zu65a6a5qC85byP55qEdXJs5bCx5Y+v5Lul6I635Y+W5Yiw55So5oi35aS05YOP5pWw5o2uLOWbvueJh+mDveaYr+WcqOS4iuS8oOaXtuWQjuerr+i9rOaIkOS6hmpwZ+agvOW8j+OAglxyXG4gKiBAcGFyYW0ge251bWJlcn0gdWlkIOeUqOaIt2lkXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPcmlnaW5hbCDmmK/lkKbojrflj5bljp/lm77vvIzpgInmi6lmYWxzZeWImei/lOWbnue8qeeVpeWbvuWcsOWdgFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSDlr7nlupTnmoTlpLTlg4/lnLDlnYBcclxuICovXHJcbmZ1bmN0aW9uIGdldFVzZXJBdmF0YXJVcmwodWlkLCBpc09yaWdpbmFsID0gdHJ1ZSkge1xyXG4gICAgLy8gcmV0dXJuIGlzT3JpZ2luYWwgPyBgaHR0cHM6Ly9kaWFuemlrYW5jaGEtdXNlci1hdmF0YXIub2JzLmNuLXNvdXRoLTEubXlodWF3ZWljbG91ZC5jb20vJHt1aWR9LmpwZ2AgOlxyXG4gICAgLy8gICAgIGBodHRwczovL2RpYW56aWthbmNoYS11c2VyLWF2YXRhci5vYnMuY24tc291dGgtMS5teWh1YXdlaWNsb3VkLmNvbS8ke3VpZH0uanBnP3gtaW1hZ2UtcHJvY2Vzcz1zdHlsZS90aHVtYm5haWxgO1xyXG4gICAgcmV0dXJuIGlzT3JpZ2luYWwgPyBjb21tQm5zQ29uZmlnLmJhc2VDZmcucGljdHVyZVVybCArIGAke3VpZH0uanBnYCA6IGNvbW1CbnNDb25maWcuYmFzZUNmZy5waWN0dXJlVXJsICsgYCR7dWlkfS5qcGc/eC1pbWFnZS1wcm9jZXNzPXN0eWxlL3RodW1ibmFpbGA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTYg6K6+572u55So5oi35aS05YOPXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQg55So5oi3aWRcclxuICogQHBhcmFtIHtCbG9ifSBhdmF0YXIg5aS05YOP5LqM6L+b5Yi25pWw5o2u77yM5aaC5p6c5LiN5Lyg5YC85oiW6ICF5LiN6K6+572u6L+Z5Liq5Y+C5pWw77yM5bCx5Lya5Yig6Zmk5aS05YOP5pWw5o2uXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0VXNlckF2YXRhcih1c2VySWQsIGF2YXRhcikge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoUG9zdEZvcm1EYXRhQW5kVXJsUGFyYW1zKFxyXG4gICAgICAgIGAvdXNlci8ke3VzZXJJZH0vYXZhdGFyYCxcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2YXRhclxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTcg56e76Zmk55So5oi36KeS6ImyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQg55So5oi3aWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvbGUg5paw55qE6KeS6Imy55qEaWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiByZW1vdmVVc2VyUm9sZSh1c2VySWQsIHJvbGUpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aERlbGV0ZShcclxuICAgICAgICBgL3VzZXIvJHt1c2VySWR9L3JvbGVgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm9sZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTgg5aKe5Yqg55So5oi36KeS6ImyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQg55So5oi3aWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHJvbGUg5paw55qE6KeS6Imy55qEaWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVVc2VyUm9sZSh1c2VySWQsIHJvbGUpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aFB1dChcclxuICAgICAgICBgL3VzZXIvJHt1c2VySWR9L3JvbGVgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm9sZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMTkg5p+l6K+i5omA5pyJ6Ieq5bex5Yib5bu66KeS6Imy6IO95YiG6YWN55qE5Y2V5L2NXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkIOWFs+mUruWtl++8jOS5meaWueeUqOaIt+afpeaXoOaViFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bSDopoHojrflj5bnmoTpobVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplIOavj+mhteacgOWkp+S4quaVsFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldEFmZmlsaWF0aW9uTGlzdChrZXl3b3JkLCBwYWdlTnVtLCBwYWdlU2l6ZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvdXNlci9hZmZpbGlhdGlvbmxpc3QnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5d29yZCxcclxuICAgICAgICAgICAgcGFnZU51bSxcclxuICAgICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjIwIOWuoeaguOeUqOaIt+WIm+W7ulxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmV2aWV3SWQg55So5oi35a6h5qC4aWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhc3Mg5piv5ZCm6YCa6L+HMO+8muS4jemAmui/h++8jOWIoOmZpOeUqOaIt++8jDHvvJrpgJrov4dcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiByZXZpZXdOZXdVc2VyKHJldmlld0lkLCBwYXNzKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0KFxyXG4gICAgICAgICcvdXNlci9yZXZpZXcnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV2aWV3SWQsXHJcbiAgICAgICAgICAgIHBhc3NcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjIxIOafpeivouetieW+heWuoeaguOeahOeUqOaIt1xyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bSDopoHojrflj5bnmoTpobVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplIOavj+mhteacgOWkp+S4quaVsFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJldmlld0xpc3QocGFnZU51bSwgcGFnZVNpemUpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aEdldChcclxuICAgICAgICAnL3VzZXIvcmV2aWV3bGlzdCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMjIg6I635Y+W6YCa55+l6K+m5oOFXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBub3RpY2VJZCDpgJrnn6VpZFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldE5vdGljZURldGFpbChub3RpY2VJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgIGAvbm90aWNlLyR7bm90aWNlSWR9L2luZm9gXHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjIzIOiOt+WPluaJgOaciemAmuefpVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bSDopoHojrflj5bnmoTpobVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplIOavj+mhteacgOWkp+S4quaVsFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldEFsbE5vdGljZShwYWdlTnVtLCBwYWdlU2l6ZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvbm90aWNlL2FsbCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKDpmaTpgJrnn6VcclxuICogQHBhcmFtIHtudW1iZXJ9IG5vdGljZUlkICBcclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZU5vdGljZShub3RpY2VJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgJy9ub3RpY2UvZGVsZXRlJyxcclxuICAgICAgIHtcclxuICAgICAgICAgbm90aWNlSWRcclxuICAgICAgIH1cclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogMy4xLjI0IOiOt+WPluayoeacieeci+i/h+eahOmAmuefpeeahOaVsOmHj1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFVucmVhZE5vdGljZUNvdW50KCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvbm90aWNlL2NvdW50J1xyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS4yNC4xIOS4gOmUruivu+WPluaJgOaciemAmuefpSjmuIXpmaTlsI/nuqLngrkpXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gcmVhZEFsbE5vdGljZSgpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aFBvc3QoXHJcbiAgICAgICAgJy9ub3RpY2UvcmVhZEFsbCdcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMjUg5p+l6K+i55So5oi355qE5a6h5qC454q25oCBXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByZXZpZXdJZCDnlKjmiLflrqHmoLhpZFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJldmlld1N0YXR1cyhyZXZpZXdJZCkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgIGAvdXNlci9yZXZpZXcvJHtyZXZpZXdJZH0vc3RhdHVzYFxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDMuMS4yNiDmn6Xor6Llj6/ku6XooqvpgInmi6nnmoTpobnnm67miJDlkZgv6aG555uu57uP55CGKOeUsuaWuSlcclxuICogQHBhcmFtIHtudW1iZXJ9IHByb2plY3RJZCDpobnnm65pZFxyXG4gKiBAcGFyYW0ge251bWJlcn0gam9iIDA65p+l6K+i57uP55CGMTrmn6Xor6LmiJDlkZjvvIzpu5jorqTkuLoxXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkIOafpeivouWFs+mUruivje+8jOWQjOaXtuWMuemFjSDnlKjmiLflp5PlkI0o5qih57OK5Yy56YWNKSDnlKjmiLfnlLXor53lj7fnoIEo5qih57OK5Yy56YWNKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZU51bSDopoHojrflj5bnmoTpobVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplIOavj+mhteacgOWkp+S4quaVsFxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5QWx0ZXJuYXRpdmVQcm9qZWN0TWVtYmVyKHByb2plY3RJZCwgam9iLCBrZXl3b3JkLCBwYWdlTnVtLCBwYWdlU2l6ZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvdXNlci9xdWVyeS9wcm9qZWN0bWVtYmVyJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb2plY3RJZCxcclxuICAgICAgICAgICAgam9iLFxyXG4gICAgICAgICAgICBrZXl3b3JkLFxyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMjcg5p+l6K+i5Y+v5Lul6KKr6YCJ5oup55qE6ZK75o6i57yW5b2VL+mSu+aOoui0n+i0o+S6uijkuZnmlrkpXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkcmlsbElkIOmSu+WtlGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkIOafpeivouWFs+mUruivje+8jOWQjOaXtuWMuemFjSDnlKjmiLflp5PlkI0o5qih57OK5Yy56YWNKSDnlKjmiLfnlLXor53lj7fnoIEo5qih57OK5Yy56YWNKVxyXG4gKiBAcGFyYW0ge251bWJlcn0gam9iIDA65p+l6K+i6LSf6LSj5Lq6MTrmn6Xor6LnvJblvZXvvIzpu5jorqTkuLoxXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlTnVtIOimgeiOt+WPlueahOmhtVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcGFnZVNpemUg5q+P6aG15pyA5aSn5Liq5pWwXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlBbHRlcm5hdGl2ZURyaWxsTWVtYmVyKGRyaWxsSWQsIGtleXdvcmQsIGpvYiwgcGFnZU51bSwgcGFnZVNpemUpIHtcclxuICAgIHJldHVybiBjb21tQm5zVW5pSHR0cFJlcXVlc3QuRnVuY0Juc0h0dHBSZXF1ZXN0V2l0aEdldChcclxuICAgICAgICAnL3VzZXIvcXVlcnkvZHJpbGxtZW1iZXInLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZHJpbGxJZCxcclxuICAgICAgICAgICAga2V5d29yZCxcclxuICAgICAgICAgICAgam9iLFxyXG4gICAgICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMjgg5a+85YWl55So5oi3XHJcbiAqIEBwYXJhbSB7QmxvYn0gZXhjZWwg5a+85YWl5L+h5oGv77yM5Y+q5pyJ56ys5LiA5Liqc2hlZXTmnInmlYhcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBpbXBvcnRVc2VyKGV4Y2VsKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0Rm9ybURhdGFBbmRVcmxQYXJhbXMoXHJcbiAgICAgICAgJy91c2VyL2ltcG9ydCcsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBleGNlbFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMjkg6I635Y+W5a+85YWlL+WIm+W7uue7k+aenFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzdWx0Q29kZSDlr7zlhaXnlKjmiLfkuYvlkI7ov5Tlm57nmoTnu5PmnpznoIFcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbXBvcnRSZXN1bHQocmVzdWx0Q29kZSkge1xyXG4gICAgcmV0dXJuIGNvbW1CbnNVbmlIdHRwUmVxdWVzdC5GdW5jQm5zSHR0cFJlcXVlc3RXaXRoR2V0KFxyXG4gICAgICAgICcvdXNlci9pbXBvcnQvcmVzdWx0JyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlc3VsdENvZGVcclxuICAgICAgICB9XHJcbiAgICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMzAg6K6+572u55So5oi35Liq5Lq655S15a2Q562+5ZCNXHJcbiAqIEBwYXJhbSB7QmxvYn0gaW1hZ2Ug55S15a2Q562+5ZCN5Zu+54mHXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0U2lnbmF0dXJlKGltYWdlKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhQb3N0Rm9ybURhdGFBbmRVcmxQYXJhbXMoXHJcbiAgICAgICAgJy91c2VyL3NpZ25hdHVyZScsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAzLjEuMzEg6I635Y+W55So5oi35Liq5Lq655S15a2Q562+5ZCN55qEdXJsXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB1c2VySWQg55So5oi3aWRcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTaWduYXR1cmVVcmwodXNlcklkKSB7XHJcbiAgICByZXR1cm4gY29tbUJuc1VuaUh0dHBSZXF1ZXN0LkZ1bmNCbnNIdHRwUmVxdWVzdFdpdGhHZXQoXHJcbiAgICAgICAgYC91c2VyLyR7dXNlcklkfS9zaWduYXR1cmVgXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2lnbkluV2l0aFBhc3N3b3JkLFxyXG4gICAgc2lnbkluV2l0aENhcHRjaGEsXHJcbiAgICBzaWduSW5XaXRoUmVmcmVzaFRva2VuLFxyXG4gICAgYWRkVXNlcixcclxuICAgIGZvcmdldFBhc3N3b3JkLFxyXG4gICAgZ2V0Q2FwdGNoYSxcclxuICAgIGdldENhcHRjaGFUb05ld1Bob25lLFxyXG4gICAgbW9kaWZ5UGFzc3dvcmQsXHJcbiAgICBmb3JnZXRQc2RCeUFkbWluLFxyXG4gICAgbW9kaWZ5UGhvbmUsXHJcbiAgICBtb2RpZnlQaG9uZUJ5QWRtaW4sXHJcbiAgICBnZXRVc2VySW5mbyxcclxuICAgIGdldEluZm9CeVBob25lLFxyXG4gICAgZ2V0VXNlclJvbGVzLFxyXG4gICAgZW5hYmxlT3JEaXNhYmxlVXNlcixcclxuICAgIGNyZWF0ZVVzZXIsXHJcbiAgICBtb2RpZnlOYW1lLFxyXG4gICAgcXVlcnlVc2VyLFxyXG4gICAgZ2V0Um9sZUxpc3QsXHJcbiAgICBtb2RpZnlPdGhlcnNJbmZvLFxyXG4gICAgZ2V0VXNlckF2YXRhclVybCxcclxuICAgIHNldFVzZXJBdmF0YXIsXHJcbiAgICByZW1vdmVVc2VyUm9sZSxcclxuICAgIGNyZWF0ZVVzZXJSb2xlLFxyXG4gICAgZ2V0QWZmaWxpYXRpb25MaXN0LFxyXG4gICAgcmV2aWV3TmV3VXNlcixcclxuICAgIGdldFJldmlld0xpc3QsXHJcbiAgICBnZXROb3RpY2VEZXRhaWwsXHJcbiAgICBnZXRBbGxOb3RpY2UsXHJcbiAgICBnZXRVbnJlYWROb3RpY2VDb3VudCxcclxuICAgIHJlYWRBbGxOb3RpY2UsXHJcbiAgICBnZXRSZXZpZXdTdGF0dXMsXHJcbiAgICBxdWVyeUFsdGVybmF0aXZlUHJvamVjdE1lbWJlcixcclxuICAgIHF1ZXJ5QWx0ZXJuYXRpdmVEcmlsbE1lbWJlcixcclxuICAgIGltcG9ydFVzZXIsXHJcbiAgICBnZXRJbXBvcnRSZXN1bHQsXHJcbiAgICBzZXRTaWduYXR1cmUsXHJcbiAgICBnZXRTaWduYXR1cmVVcmwsXHJcbiAgICBkZWxldGVOb3RpY2UsXHJcbiAgICBkZWxldGVVc2VyXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/node_modules/js-base64/base64.mjs ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.utob = exports.toUint8Array = exports.toBase64 = exports.isValid = exports.fromUint8Array = exports.fromBase64 = exports.extendUint8Array = exports.extendString = exports.extendBuiltins = exports.encodeURL = exports.encodeURI = exports.encode = exports.decode = exports.btou = exports.btoaPolyfill = exports.btoa = exports.atobPolyfill = exports.atob = exports.VERSION = exports.Base64 = void 0;
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
var version = '3.7.5';
/**
 * @deprecated use lowercase `version`.
 */
exports.version = version;
var VERSION = version;
exports.VERSION = VERSION;
var _hasatob = typeof atob === 'function';
var _hasbtoa = typeof btoa === 'function';
var _hasBuffer = typeof Buffer === 'function';
var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = function (a) {
  var tab = {};
  a.forEach(function (c, i) {
    return tab[c] = i;
  });
  return tab;
}(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === 'function' ? Uint8Array.from.bind(Uint8Array) : function (it) {
  return new Uint8Array(Array.prototype.slice.call(it, 0));
};
var _mkUriSafe = function _mkUriSafe(src) {
  return src.replace(/=/g, '').replace(/[+\/]/g, function (m0) {
    return m0 == '+' ? '-' : '_';
  });
};
var _tidyB64 = function _tidyB64(s) {
  return s.replace(/[^A-Za-z0-9\+\/]/g, '');
};
/**
 * polyfill version of `btoa`
 */
var btoaPolyfill = function btoaPolyfill(bin) {
  // console.log('polyfilled');
  var u32,
    c0,
    c1,
    c2,
    asc = '';
  var pad = bin.length % 3;
  for (var i = 0; i < bin.length;) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError('invalid character found');
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
exports.btoaPolyfill = btoaPolyfill;
var _btoa = _hasbtoa ? function (bin) {
  return btoa(bin);
} : _hasBuffer ? function (bin) {
  return Buffer.from(bin, 'binary').toString('base64');
} : btoaPolyfill;
exports.btoa = _btoa;
var _fromUint8Array = _hasBuffer ? function (u8a) {
  return Buffer.from(u8a).toString('base64');
} : function (u8a) {
  // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
  var maxargs = 0x1000;
  var strs = [];
  for (var i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(''));
};
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
var fromUint8Array = function fromUint8Array(u8a) {
  var urlsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
};
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
exports.fromUint8Array = fromUint8Array;
var cb_utob = function cb_utob(c) {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 0x80 ? c : cc < 0x800 ? _fromCC(0xc0 | cc >>> 6) + _fromCC(0x80 | cc & 0x3f) : _fromCC(0xe0 | cc >>> 12 & 0x0f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
  } else {
    var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
    return _fromCC(0xf0 | cc >>> 18 & 0x07) + _fromCC(0x80 | cc >>> 12 & 0x3f) + _fromCC(0x80 | cc >>> 6 & 0x3f) + _fromCC(0x80 | cc & 0x3f);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
var utob = function utob(u) {
  return u.replace(re_utob, cb_utob);
};
//
exports.utob = utob;
var _encode = _hasBuffer ? function (s) {
  return Buffer.from(s, 'utf8').toString('base64');
} : _TE ? function (s) {
  return _fromUint8Array(_TE.encode(s));
} : function (s) {
  return _btoa(utob(s));
};
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
var encode = function encode(src) {
  var urlsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
};
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
exports.encode = exports.toBase64 = encode;
var encodeURI = function encodeURI(src) {
  return encode(src, true);
};
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
exports.encodeURL = exports.encodeURI = encodeURI;
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = function cb_btou(cccc) {
  switch (cccc.length) {
    case 4:
      var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
        offset = cp - 0x10000;
      return _fromCC((offset >>> 10) + 0xD800) + _fromCC((offset & 0x3FF) + 0xDC00);
    case 3:
      return _fromCC((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
    default:
      return _fromCC((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
  }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
var btou = function btou(b) {
  return b.replace(re_btou, cb_btou);
};
/**
 * polyfill version of `atob`
 */
exports.btou = btou;
var atobPolyfill = function atobPolyfill(asc) {
  // console.log('polyfilled');
  asc = asc.replace(/\s+/g, '');
  if (!b64re.test(asc)) throw new TypeError('malformed base64.');
  asc += '=='.slice(2 - (asc.length & 3));
  var u24,
    bin = '',
    r1,
    r2;
  for (var i = 0; i < asc.length;) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
exports.atobPolyfill = atobPolyfill;
var _atob = _hasatob ? function (asc) {
  return atob(_tidyB64(asc));
} : _hasBuffer ? function (asc) {
  return Buffer.from(asc, 'base64').toString('binary');
} : atobPolyfill;
//
exports.atob = _atob;
var _toUint8Array = _hasBuffer ? function (a) {
  return _U8Afrom(Buffer.from(a, 'base64'));
} : function (a) {
  return _U8Afrom(_atob(a).split('').map(function (c) {
    return c.charCodeAt(0);
  }));
};
/**
 * converts a Base64 string to a Uint8Array.
 */
var toUint8Array = function toUint8Array(a) {
  return _toUint8Array(_unURI(a));
};
//
exports.toUint8Array = toUint8Array;
var _decode = _hasBuffer ? function (a) {
  return Buffer.from(a, 'base64').toString('utf8');
} : _TD ? function (a) {
  return _TD.decode(_toUint8Array(a));
} : function (a) {
  return btou(_atob(a));
};
var _unURI = function _unURI(a) {
  return _tidyB64(a.replace(/[-_]/g, function (m0) {
    return m0 == '-' ? '+' : '/';
  }));
};
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
var decode = function decode(src) {
  return _decode(_unURI(src));
};
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
exports.decode = exports.fromBase64 = decode;
var isValid = function isValid(src) {
  if (typeof src !== 'string') return false;
  var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
  return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
exports.isValid = isValid;
var _noEnum = function _noEnum(v) {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true
  };
};
/**
 * extend String.prototype with relevant methods
 */
var extendString = function extendString() {
  var _add = function _add(name, body) {
    return Object.defineProperty(String.prototype, name, _noEnum(body));
  };
  _add('fromBase64', function () {
    return decode(this);
  });
  _add('toBase64', function (urlsafe) {
    return encode(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return encode(this, true);
  });
  _add('toBase64URL', function () {
    return encode(this, true);
  });
  _add('toUint8Array', function () {
    return toUint8Array(this);
  });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
exports.extendString = extendString;
var extendUint8Array = function extendUint8Array() {
  var _add = function _add(name, body) {
    return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  };
  _add('toBase64', function (urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return fromUint8Array(this, true);
  });
  _add('toBase64URL', function () {
    return fromUint8Array(this, true);
  });
};
/**
 * extend Builtin prototypes with relevant methods
 */
exports.extendUint8Array = extendUint8Array;
var extendBuiltins = function extendBuiltins() {
  extendString();
  extendUint8Array();
};
exports.extendBuiltins = extendBuiltins;
var gBase64 = {
  version: version,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  utob: utob,
  btou: btou,
  decode: decode,
  isValid: isValid,
  fromUint8Array: fromUint8Array,
  toUint8Array: toUint8Array,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  extendBuiltins: extendBuiltins
};
// makecjs:CUT //
exports.Base64 = gBase64;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ 51).Buffer))

/***/ }),
/* 51 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 53)
var ieee754 = __webpack_require__(/*! ieee754 */ 54)
var isArray = __webpack_require__(/*! isarray */ 55)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 52)))

/***/ }),
/* 52 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 53 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 54 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 55 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 56 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 57 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/uni-cloud-stat.es.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uniCloud) {var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 65);
var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 67);
var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 69);
var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 74);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 75);
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2);
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * 获取系统信息
 */
var sys = uni.getSystemInfoSync();

// 访问开始即启动小程序，访问结束结分为：进入后台超过5min、在前台无任何操作超过30min、在新的来源打开小程序；
var STAT_VERSION = "3.7.9";
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800; // 页面在前台无操作结束访问时间 单位s
var APP_PVER_TIME = 300; // 应用在后台结束访问时间 单位s
var OPERATING_TIME = 10; // 数据上报时间 单位s
var DIFF_TIME = 60 * 1000 * 60 * 24;
var appid = "__UNI__05B3C20"; // 做应用隔离
var dbSet = function dbSet(name, value) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (!data) {
    data = {};
  }
  data[name] = value;
  uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
};
var dbGet = function dbGet(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (!data[name]) {
    var dbdata = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (!dbdata) {
      dbdata = {};
    }
    if (!dbdata[name]) {
      return undefined;
    }
    data[name] = dbdata[name];
  }
  return data[name];
};
var dbRemove = function dbRemove(name) {
  var data = uni.getStorageSync('$$STAT__DBDATA:' + appid) || {};
  if (data[name]) {
    delete data[name];
    uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
  } else {
    data = uni.getStorageSync('$$STAT__DBDATA:' + appid);
    if (data[name]) {
      delete data[name];
      uni.setStorageSync('$$STAT__DBDATA:' + appid, data);
    }
  }
};

// 获取 manifest.json 中统计配置
var uniStatisticsConfig = {"version":"2","enable":true};
var statConfig = {
  appid: "__UNI__05B3C20"
};
var titleJsons = {};
var debug =  false || false;

// eslint-disable-next-line no-restricted-globals
var pagesTitle = __webpack_require__(/*! uni-pages?{"type":"style"} */ 79).default;
var pagesData = pagesTitle.pages;
for (var i in pagesData) {
  var _style$navigationBar;
  var style = pagesData[i];
  var titleText =
  // MP
  style.navigationBarTitleText ||
  // ali
  style.defaultTitle || ( // H5 || App
  (_style$navigationBar = style.navigationBar) === null || _style$navigationBar === void 0 ? void 0 : _style$navigationBar.titleText) || '';
  if (titleText) {
    titleJsons[i] = titleText;
  }
}

// TODO 在云函数中获取，暂时注释
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';
function getUuid() {
  var uuid = '';
  if (get_platform_name() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }
  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }
  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}
var get_uuid = function get_uuid(statData) {
  // 有可能不存在 deviceId（一般不存在就是出bug了），就自己生成一个
  return sys.deviceId || getUuid();
};

/**
 * 获取老版的 deviceid ,兼容以前的错误 deviceid
 * @param {*} statData 
 * @returns 
 */
var get_odid = function get_odid(statData) {
  var odid = '';
  if (get_platform_name() === 'n') {
    try {
      odid = plus.device.uuid;
    } catch (e) {
      odid = '';
    }
    return odid;
  }
  return sys.deviceId || getUuid();
};

/**
 * 获取配置信息 如 appid
 */
var stat_config = statConfig;
var get_sgin = function get_sgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1)
  };
};
var get_encodeURIComponent_options = function get_encodeURIComponent_options(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

/**
 * 获取当前平台
 * 移动端  : 'n',
 * h5	  : 'h5',
 * 微信	  : 'wx',
 * 阿里	  : 'ali',
 * 百度	  : 'bd',
 * 头条	  : 'tt',
 * qq	  : 'qq',
 * 快应用  : 'qn',
 * 快手	  : 'ks',
 * 飞书	  : 'lark',
 * 快应用  : 'qw',
 * 钉钉	  : 'dt'
 */
var get_platform_name = function get_platform_name() {
  var _platformList;
  // 苹果审核代码中禁止出现 alipay 字样 ，需要特殊处理一下
  var aliArr = ['y', 'a', 'p', 'mp-ali'];
  var platformList = (_platformList = {
    app: 'n',
    'app-plus': 'n',
    h5: 'h5',
    'mp-weixin': 'wx'
  }, _defineProperty(_platformList, aliArr.reverse().join(''), 'ali'), _defineProperty(_platformList, 'mp-baidu', 'bd'), _defineProperty(_platformList, 'mp-toutiao', 'tt'), _defineProperty(_platformList, 'mp-qq', 'qq'), _defineProperty(_platformList, 'quickapp-native', 'qn'), _defineProperty(_platformList, 'mp-kuaishou', 'ks'), _defineProperty(_platformList, 'mp-lark', 'lark'), _defineProperty(_platformList, 'quickapp-webview', 'qw'), _platformList);
  if (platformList["app-plus"] === 'ali') {
    if (my && my.env) {
      var clientName = my.env.clientName;
      if (clientName === 'ap') return 'ali';
      if (clientName === 'dingtalk') return 'dt';
      // TODO 缺少 ali 下的其他平台
    }
  }

  return platformList["app-plus"];
};

/**
 * 获取小程序 appid
 */
var get_pack_name = function get_pack_name() {
  var packName = '';
  if (get_platform_name() === 'wx' || get_platform_name() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  if (get_platform_name() === 'n') ;
  return packName;
};

/**
 * 应用版本
 */
var get_version = function get_version() {
  return get_platform_name() === 'n' ? plus.runtime.version : '';
};

/**
 * 获取渠道
 */
var get_channel = function get_channel() {
  var platformName = get_platform_name();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

/**
 * 获取小程序场景值
 * @param {Object} options 页面信息
 */
var get_scene = function get_scene(options) {
  var platformName = get_platform_name();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};

/**
 * 获取页面url，不包含参数
 */
var get_route$1 = function get_route$1(pageVm) {
  var _self = pageVm || get_page_vm();
  if (get_platform_name() === 'bd') {
    var mp_route = _self.$mp && _self.$mp.page && _self.$mp.page.is;
    var scope_route = _self.$scope && _self.$scope.is;
    return mp_route || scope_route || '';
  } else {
    return _self.route || _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

/**
 * 获取页面url, 包含参数
 */
var get_page_route = function get_page_route(pageVm) {
  // 从 app 进入应用 ，没有 $page ,获取不到路由 ，需要获取页面 尝试从 getCurrentPages 获取也页面实例
  // FIXME 尽量不使用 getCurrentPages ，大部分获取路由是从 onHide 获取 ，这时可以获取到，如果是 onload ,则可能获取不到，比如 百度

  var page = pageVm && (pageVm.$page || pageVm.$scope && pageVm.$scope.$page);
  var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
  if (!page) return lastPageRoute || '';
  // 如果找不到 fullPath 就取 route 的值
  return page.fullPath === '/' ? page.route : page.fullPath || page.route;
};

/**
 * 获取页面实例
 */
var get_page_vm = function get_page_vm() {
  var pages = getCurrentPages();
  var $page = pages[pages.length - 1];
  if (!$page) return null;
  return $page.$vm;
};

/**
 * 获取页面类型
 */
var get_page_types = function get_page_types(self) {
  // XXX 百度有问题 ，获取的都是 componet ,等待修复
  if (self.mpType === 'page' || self.$mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return 'page';
  }
  if (self.mpType === 'app' || self.$mpType === 'app' || self.$mp && self.$mp.mpType === 'app' || self.$options.mpType === 'app') {
    return 'app';
  }
  return null;
};

/**
 * 处理上报参数
 * @param {Object}  需要处理的数据
 */
var handle_data = function handle_data(statData) {
  var firstArr = [];
  var contentArr = [];
  var lastArr = [];
  var _loop = function _loop(_i) {
    var rd = statData[_i];
    rd.forEach(function (elm) {
      var newData = '';
      {
        newData = elm;
      }
      if (_i === 0) {
        firstArr.push(newData);
      } else if (_i === 3) {
        lastArr.push(newData);
      } else {
        contentArr.push(newData);
      }
    });
  };
  for (var _i in statData) {
    _loop(_i);
  }
  firstArr.push.apply(firstArr, contentArr.concat(lastArr));
  // 参数需要处理成字符串，方便上传
  return JSON.stringify(firstArr);
};

/**
 * 自定义事件参数校验
 */
var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report Missing [eventName] parameter");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] Parameter type error, it can only be of type String");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] Parameter length cannot be greater than 255");
    return true;
  }
  if (typeof options !== 'string' && _typeof(options) !== 'object') {
    console.error('uni.report [options] Parameter type error, Only supports String or Object type');
    return true;
  }
  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] Parameter length cannot be greater than 255");
    return true;
  }
  if (eventName === 'title' && typeof options !== 'string') {
    console.error("uni.report [eventName] When the parameter is title, the [options] parameter can only be of type String");
    return true;
  }
};
var get_page_name = function get_page_name(routepath) {
  return titleJsons && titleJsons[routepath] || '';
};
var Report_Data_Time = 'Report_Data_Time';
var Report_Status = 'Report_Status';
var is_report_data = function is_report_data() {
  return new Promise(function (resolve, reject) {
    var start_time = '';
    var end_time = new Date().getTime();
    var diff_time = DIFF_TIME;
    var report_status = 1;
    try {
      start_time = uni.getStorageSync(Report_Data_Time);
      report_status = uni.getStorageSync(Report_Status);
    } catch (e) {
      start_time = '';
      report_status = 1;
    }
    if (report_status === '') {
      requestData(function (_ref) {
        var enable = _ref.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
        if (enable === 1) {
          resolve();
        }
      });
      return;
    }
    if (report_status === 1) {
      resolve();
    }
    if (!start_time) {
      uni.setStorageSync(Report_Data_Time, end_time);
      start_time = end_time;
    }
    if (end_time - start_time > diff_time) {
      requestData(function (_ref2) {
        var enable = _ref2.enable;
        uni.setStorageSync(Report_Data_Time, end_time);
        uni.setStorageSync(Report_Status, enable);
      });
    }
  });
};
var requestData = function requestData(done) {
  var appid = "__UNI__05B3C20";
  var formData = {
    usv: STAT_VERSION,
    conf: JSON.stringify({
      ak: appid
    })
  };
  uni.request({
    url: STAT_URL,
    method: 'GET',
    data: formData,
    success: function success(res) {
      var data = res.data;
      if (data.ret === 0) {
        typeof done === 'function' && done({
          enable: data.enable
        });
      }
    },
    fail: function fail(e) {
      var report_status_code = 1;
      try {
        report_status_code = uni.getStorageSync(Report_Status);
      } catch (e) {
        report_status_code = 1;
      }
      if (report_status_code === '') {
        report_status_code = 1;
      }
      typeof done === 'function' && done({
        enable: report_status_code
      });
    }
  });
};

/**
 * 获取uniCloud服务空间配置
 * @returns {Object}
 */
var uni_cloud_config = function uni_cloud_config() {
  return {} || {};
};

/**
 * 获取服务空间
 * @param {*} config
 * @returns
 */
var get_space = function get_space(config) {
  var uniCloudConfig = uni_cloud_config();
  var spaceId = uniCloudConfig.spaceId,
    provider = uniCloudConfig.provider,
    clientSecret = uniCloudConfig.clientSecret;
  var space_type = ['tcb', 'tencent', 'aliyun'];
  var is_provider = space_type.indexOf(provider) !== -1;
  var is_aliyun = provider === 'aliyun' && spaceId && clientSecret;
  var is_tcb = (provider === 'tcb' || provider === 'tencent') && spaceId;
  if (is_provider && (is_aliyun || is_tcb)) {
    return uniCloudConfig;
  } else {
    if (config && config.spaceId) {
      return config;
    }
  }
  return null;
};

/**
 * 是否开启 debug 模式
 */
var is_debug = debug;

/**
 * 日志输出
 * @param {*} data
 */
var log = function log(data, type) {
  var msg_type = '';
  switch (data.lt) {
    case '1':
      msg_type = '应用启动';
      break;
    case '3':
      msg_type = '应用进入后台';
      break;
    case '11':
      msg_type = '页面切换';
      break;
    case '21':
      msg_type = '事件触发';
      break;
    case '31':
      msg_type = '应用错误';
      break;
    case '101':
      msg_type = 'PUSH';
      break;
  }

  // 在 app 中，日志转为 字符串
  if (_typeof(data) === 'object') {
    data = JSON.stringify(data);
  }
  if (type) {
    console.log("=== \u7EDF\u8BA1\u961F\u5217\u6570\u636E\u4E0A\u62A5 ===");
    console.log(data);
    console.log("=== \u4E0A\u62A5\u7ED3\u675F ===");
    return;
  }
  if (msg_type) {
    console.log("=== \u7EDF\u8BA1\u6570\u636E\u91C7\u96C6\uFF1A".concat(msg_type, " ==="));
    console.log(data);
    console.log("=== \u91C7\u96C6\u7ED3\u675F ===");
  }
};

/**
 * 获取上报时间间隔
 * @param {*} defaultTime 默认上报间隔时间 单位s
 */
var get_report_Interval = function get_report_Interval(defaultTime) {
  var time = uniStatisticsConfig.reportInterval;
  // 如果上报时间配置为0 相当于立即上报
  if (Number(time) === 0) return 0;
  time = time || defaultTime;
  var reg = /(^[1-9]\d*$)/;
  // 如果不是整数，则默认为上报间隔时间
  if (!reg.test(time)) return defaultTime;
  return Number(time);
};

/**
 * 获取隐私协议配置
 */
var is_push_clientid = function is_push_clientid() {
  if (uniStatisticsConfig.collectItems) {
    var ClientID = uniStatisticsConfig.collectItems.uniPushClientID;
    return typeof ClientID === 'boolean' ? ClientID : false;
  }
  return false;
};

/**
 * 是否已处理设备 DeviceId
 * 如果值为 1 则表示已处理
 */
var IS_HANDLE_DEVECE_ID = 'is_handle_device_id';
var is_handle_device = function is_handle_device() {
  var isHandleDevice = dbGet(IS_HANDLE_DEVECE_ID) || '';
  dbSet(IS_HANDLE_DEVECE_ID, '1');
  return isHandleDevice === '1';
};

// 首次访问时间
var FIRST_VISIT_TIME_KEY = '__first__visit__time';
// 最后访问时间
var LAST_VISIT_TIME_KEY = '__last__visit__time';
/**
 * 获取当前时间
 */
var get_time = function get_time() {
  return parseInt(new Date().getTime() / 1000);
};

/**
 * 获取首次访问时间
 */
var get_first_visit_time = function get_first_visit_time() {
  var timeStorge = dbGet(FIRST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = get_time();
    dbSet(FIRST_VISIT_TIME_KEY, time);
    // 首次访问需要 将最后访问时间置 0
    dbRemove(LAST_VISIT_TIME_KEY);
  }
  return time;
};

/**
 * 最后访问时间
 */
var get_last_visit_time = function get_last_visit_time() {
  var timeStorge = dbGet(LAST_VISIT_TIME_KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  }
  dbSet(LAST_VISIT_TIME_KEY, get_time());
  return time;
};

// 页面停留时间记录key
var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_Residence_Time = 0;
var Last_Page_Residence_Time = 0;

/**
 * 设置页面停留时间
 */
var set_page_residence_time = function set_page_residence_time() {
  First_Page_Residence_Time = get_time();
  dbSet(PAGE_RESIDENCE_TIME, First_Page_Residence_Time);
  return First_Page_Residence_Time;
};

/**
 * 获取页面停留时间
 */
var get_page_residence_time = function get_page_residence_time() {
  Last_Page_Residence_Time = get_time();
  First_Page_Residence_Time = dbGet(PAGE_RESIDENCE_TIME);
  return Last_Page_Residence_Time - First_Page_Residence_Time;
};

/**
 * 获取总访问次数
 */
var TOTAL_VISIT_COUNT = '__total__visit__count';
var get_total_visit_count = function get_total_visit_count() {
  var timeStorge = dbGet(TOTAL_VISIT_COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  dbSet(TOTAL_VISIT_COUNT, count);
  return count;
};
var FIRST_TIME = '__first_time';
/**
 * 设置页面首次访问时间，用户获取页面/应用停留时常
 */
var set_first_time = function set_first_time() {
  // 获取当前时间 ，以下代码获取到是毫秒级时间戳 ，实际上用到是秒级时间戳，所以需要除以1000
  // const time = new Date().getTime()
  var time = get_time();
  var timeStorge = dbSet(FIRST_TIME, time);
  return timeStorge;
};

/**
 * 获取最后一次时间 ，暂时用不到，直接获取当前时间即可
 */
// export const get_last_time = () => {
// 	let time = new Date().getTime()
// 	Set__Last__Time = time
// 	return time
// }

/**
 * 获取页面 \ 应用停留时间
 */
var get_residence_time = function get_residence_time(type) {
  var residenceTime = 0;
  var first_time = dbGet(FIRST_TIME);
  var last_time = get_time();
  if (first_time !== 0) {
    residenceTime = last_time - first_time;
  }
  // 将毫秒级时间戳转换为秒级时间戳，因为直接获取的是秒级时间戳，所以不需要转换
  // residenceTime = parseInt(residenceTime / 1000)
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime
    };
  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime
    };
  }
  return {
    residenceTime: residenceTime
  };
};
var eport_Interval = get_report_Interval(OPERATING_TIME);
// 统计数据默认值
var statData = {
  uuid: get_uuid(),
  // 设备标识
  ak: stat_config.appid,
  // uni-app 应用 Appid
  p: sys.platform === 'android' ? 'a' : 'i',
  // 手机系统
  ut: get_platform_name(),
  // 平台类型
  mpn: get_pack_name(),
  // 原生平台包名、小程序 appid
  usv: STAT_VERSION,
  // 统计 sdk 版本
  v: get_version(),
  // 应用版本，仅app
  ch: get_channel(),
  // 渠道信息
  cn: '',
  // 国家
  pn: '',
  // 省份
  ct: '',
  // 城市
  t: get_time(),
  // 上报数据时的时间戳
  tt: '',
  brand: sys.brand || '',
  // 手机品牌
  md: sys.model,
  // 手机型号
  sv: sys.system.replace(/(Android|iOS)\s/, ''),
  // 手机系统版本
  mpsdk: sys.SDKVersion || '',
  // x程序 sdk version
  mpv: sys.version || '',
  // 小程序平台版本 ，如微信、支付宝
  lang: sys.language,
  // 语言
  pr: sys.pixelRatio,
  // pixelRatio 设备像素比
  ww: sys.windowWidth,
  // windowWidth 可使用窗口宽度
  wh: sys.windowHeight,
  // windowHeight 可使用窗口高度
  sw: sys.screenWidth,
  // screenWidth 屏幕宽度
  sh: sys.screenHeight // screenHeight 屏幕高度
};
var Report = /*#__PURE__*/function () {
  "use strict";

  function Report() {
    _classCallCheck(this, Report);
    // 页面实例
    this.self = '';
    // 进入应用标识
    this.__licationShow = false;
    // 离开应用标识
    this.__licationHide = false;
    // 统计默认值
    this.statData = statData;
    // 标题默认值
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: ''
    };

    // 页面参数
    this._query = {};
    // 页面最后停留页面的 url
    // this._lastPageRoute = ''

    // 注册拦截器
    var registerInterceptor = typeof uni.addInterceptor === 'function';
    if (registerInterceptor) {
      this.addInterceptorInit();
      this.interceptLogin();
      this.interceptShare(true);
      this.interceptRequestPayment();
    }
  }
  _createClass(Report, [{
    key: "addInterceptorInit",
    value: function addInterceptorInit() {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        }
      });
    }
  }, {
    key: "interceptLogin",
    value: function interceptLogin() {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        }
      });
    }
  }, {
    key: "interceptShare",
    value: function interceptShare(type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        }
      });
    }
  }, {
    key: "interceptRequestPayment",
    value: function interceptRequestPayment() {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        }
      });
    }
  }, {
    key: "_login",
    value: function _login() {
      this.sendEventRequest({
        key: 'login'
      }, 0);
    }
  }, {
    key: "_share",
    value: function _share() {
      this.sendEventRequest({
        key: 'share'
      }, 0);
    }
  }, {
    key: "_payment",
    value: function _payment(key) {
      this.sendEventRequest({
        key: key
      }, 0);
    }

    /**
     * 进入应用触发
     */
  }, {
    key: "applicationShow",
    value: function applicationShow() {
      // 通过 __licationHide 判断保证是进入后台后在次进入应用，避免重复上报数据
      if (this.__licationHide) {
        var time = get_residence_time('app');
        // 需要判断进入后台是否超过时限 ，默认是 30min ，是的话需要执行进入应用的上报
        if (time.overtime) {
          var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
          var options = {
            path: lastPageRoute,
            scene: this.statData.sc,
            cst: 2
          };
          this.sendReportRequest(options);
        }
        // 状态重置
        this.__licationHide = false;
      }
    }

    /**
     * 离开应用触发
     * @param {Object} self
     * @param {Object} type
     */
  }, {
    key: "applicationHide",
    value: function applicationHide(self, type) {
      if (!self) {
        // 表示应用切换到后台 ，此时需要从页面栈获取页面实例
        self = get_page_vm();
      }
      // 进入应用后台保存状态，方便进入前台后判断是否上报应用数据
      this.__licationHide = true;
      var time = get_residence_time();
      var route = get_page_route(self);
      uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
      this.sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime
      }, type);
      // 更新页面首次访问时间
      set_first_time();
    }

    /**
     * 进入页面触发
     */
  }, {
    key: "pageShow",
    value: function pageShow(self) {
      // 清空值 ，初始化 ，避免污染后面的上报数据
      this._navigationBarTitle = {
        config: '',
        page: '',
        report: '',
        lt: ''
      };
      var route = get_page_route(self);
      var routepath = get_route$1(self);
      this._navigationBarTitle.config = get_page_name(routepath);
      // 表示应用触发 ，页面切换不触发之后的逻辑
      if (this.__licationShow) {
        // 更新页面首次访问时间
        set_first_time();
        // this._lastPageRoute = route
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.__licationShow = false;
        return;
      }
      var time = get_residence_time('page');
      // 停留时间
      if (time.overtime) {
        var options = {
          path: route,
          scene: this.statData.sc,
          cst: 3
        };
        this.sendReportRequest(options);
      }
      // 更新页面首次访问时间
      set_first_time();
    }

    /**
     * 离开页面触发
     */
  }, {
    key: "pageHide",
    value: function pageHide(self) {
      if (!this.__licationHide) {
        var time = get_residence_time('page');
        var route = get_page_route(self);
        var lastPageRoute = uni.getStorageSync('_STAT_LAST_PAGE_ROUTE');
        if (!lastPageRoute) {
          lastPageRoute = route;
        }
        uni.setStorageSync('_STAT_LAST_PAGE_ROUTE', route);
        this.sendPageRequest({
          url: route,
          urlref: lastPageRoute,
          urlref_ts: time.residenceTime
        });
        // this._lastPageRoute = route
        return;
      }
    }

    /**
     * 发送请求,应用维度上报
     * @param {Object} options 页面信息
     * @param {Boolean} type 是否立即上报
     */
  }, {
    key: "sendReportRequest",
    value: function sendReportRequest(options, type) {
      this._navigationBarTitle.lt = '1';
      this._navigationBarTitle.config = get_page_name(options.path);
      var is_opt = options.query && JSON.stringify(options.query) !== '{}';
      var query = is_opt ? '?' + JSON.stringify(options.query) : '';
      var last_time = get_last_visit_time();
      // 非老用户
      if (last_time !== 0 || !last_time) {
        var odid = get_odid();

        // 2.0 处理规则
        {
          var have_device = is_handle_device();
          // 如果没有上报过设备信息 ，则需要上报设备信息
          if (!have_device) {
            this.statData.odid = odid;
          }
        }
      }
      Object.assign(this.statData, {
        lt: '1',
        url: options.path + query || '',
        t: get_time(),
        sc: get_scene(options.scene),
        fvts: get_first_visit_time(),
        lvts: last_time,
        tvc: get_total_visit_count(),
        // create session type  上报类型 ，1 应用进入 2.后台30min进入 3.页面30min进入
        cst: options.cst || 1
      });
      if (get_platform_name() === 'n') {
        this.getProperty(type);
      } else {
        this.getNetworkInfo(type);
      }
    }

    /**
     * 发送请求,页面维度上报
     * @param {Object} opt
     */
  }, {
    key: "sendPageRequest",
    value: function sendPageRequest(opt) {
      var url = opt.url,
        urlref = opt.urlref,
        urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options);
    }

    /**
     * 进入后台上报数据
     * @param {Object} opt
     * @param {Object} type
     */
  }, {
    key: "sendHideRequest",
    value: function sendHideRequest(opt, type) {
      var urlref = opt.urlref,
        urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options, type);
    }

    /**
     * 自定义事件上报
     */
  }, {
    key: "sendEventRequest",
    value: function sendEventRequest() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$key = _ref3.key,
        key = _ref3$key === void 0 ? '' : _ref3$key,
        _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? '' : _ref3$value;
      var routepath = '';
      try {
        routepath = get_route$1();
      } catch (error) {
        var launch_options = dbGet('__launch_options');
        routepath = launch_options.path;
      }
      this._navigationBarTitle.config = get_page_name(routepath);
      this._navigationBarTitle.lt = '21';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '21',
        ut: this.statData.ut,
        url: routepath,
        ch: this.statData.ch,
        e_n: key,
        e_v: _typeof(value) === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: get_time()
      };
      this.request(options);
    }
  }, {
    key: "sendPushRequest",
    value: function sendPushRequest(options, cid) {
      var _this = this;
      var time = get_time();
      var statData = {
        lt: '101',
        cid: cid,
        t: time,
        ut: this.statData.ut
      };

      // debug 打印打点信息
      if (is_debug) {
        log(statData);
      }
      var stat_data = handle_data({
        101: [statData]
      });
      var optionsData = {
        usv: STAT_VERSION,
        //统计 SDK 版本号
        t: time,
        //发送请求时的时间戮
        requests: stat_data
      };

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this.sendRequest(optionsData);
        }, 200);
        return;
      }
      this.sendRequest(optionsData);
    }

    /**
     * 获取wgt资源版本
     */
  }, {
    key: "getProperty",
    value: function getProperty(type) {
      var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo(type);
      });
    }

    /**
     * 获取网络信息
     */
  }, {
    key: "getNetworkInfo",
    value: function getNetworkInfo(type) {
      var _this3 = this;
      uni.getNetworkType({
        success: function success(result) {
          _this3.statData.net = result.networkType;
          _this3.getLocation(type);
        }
      });
    }

    /**
     * 获取位置信息
     */
  }, {
    key: "getLocation",
    value: function getLocation(type) {
      var _this4 = this;
      if (stat_config.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this4.statData.cn = result.address.country;
              _this4.statData.pn = result.address.province;
              _this4.statData.ct = result.address.city;
            }
            _this4.statData.lat = result.latitude;
            _this4.statData.lng = result.longitude;
            _this4.request(_this4.statData, type);
          }
        });
      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData, type);
      }
    }

    /**
     * 发送请求
     * @param {Object} data 上报数据
     * @param {Object} type 类型
     */
  }, {
    key: "request",
    value: function request(data, type) {
      var _this5 = this;
      var time = get_time();
      var title = this._navigationBarTitle;
      Object.assign(data, {
        ttn: title.page,
        ttpj: title.config,
        ttc: title.report
      });
      var uniStatData = dbGet('__UNI__STAT__DATA') || {};
      if (!uniStatData[data.lt]) {
        uniStatData[data.lt] = [];
      }
      // 加入队列
      uniStatData[data.lt].push(data);
      dbSet('__UNI__STAT__DATA', uniStatData);
      var page_residence_time = get_page_residence_time();
      // debug 打印打点信息
      if (is_debug) {
        log(data);
      }
      // 判断时候到达上报时间 ，默认 10 秒上报
      if (page_residence_time < eport_Interval && !type) return;

      // 时间超过，重新获取时间戳
      set_page_residence_time();
      var stat_data = handle_data(uniStatData);
      var optionsData = {
        usv: STAT_VERSION,
        //统计 SDK 版本号
        t: time,
        //发送请求时的时间戮
        requests: stat_data
      };

      // 重置队列
      dbRemove('__UNI__STAT__DATA');

      // XXX 安卓需要延迟上报 ，否则会有未知错误，需要验证处理
      if (get_platform_name() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this5.sendRequest(optionsData);
        }, 200);
        return;
      }
      this.sendRequest(optionsData);
    }
  }, {
    key: "getIsReportData",
    value: function getIsReportData() {
      return is_report_data();
    }

    /**
     * 数据上报
     * @param {Object} optionsData 需要上报的数据
     */
  }, {
    key: "sendRequest",
    value: function sendRequest(optionsData) {
      {
        if (!uni.__stat_uniCloud_space) {
          console.error('应用未关联服务空间，统计上报失败，请在uniCloud目录右键关联服务空间.');
          return;
        }
        var uniCloudObj = uni.__stat_uniCloud_space.importObject('uni-stat-receiver', {
          customUI: true
        });
        uniCloudObj.report(optionsData).then(function () {
          if (is_debug) {
            log(optionsData, true);
          }
        }).catch(function (err) {
          if (is_debug) {
            console.warn('=== 统计上报错误');
            console.error(err);
          }
        });
      }
    }

    /**
     * h5 请求
     */
  }, {
    key: "imageRequest",
    value: function imageRequest(data) {
      this.getIsReportData().then(function () {
        var image = new Image();
        var options = get_sgin(get_encodeURIComponent_options(data)).options;
        image.src = STAT_H5_URL + '?' + options;
        if (is_debug) {
          log(data, true);
        }
      });
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;
      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this.sendEventRequest({
        key: key,
        value: _typeof(value) === 'object' ? JSON.stringify(value) : value
      }, 1);
    }
  }]);
  return Report;
}();
var Stat = /*#__PURE__*/function (_Report) {
  "use strict";

  _inherits(Stat, _Report);
  var _super = _createSuper(Stat);
  function Stat() {
    _classCallCheck(this, Stat);
    return _super.call(this);
  }

  /**
   * 获取推送id
   */
  _createClass(Stat, [{
    key: "pushEvent",
    value: function pushEvent(options) {
      var _this6 = this;
      var ClientID = is_push_clientid();
      if (uni.getPushClientId && ClientID) {
        uni.getPushClientId({
          success: function success(res) {
            var cid = res.cid || false;
            //  只有获取到才会上传
            if (cid) {
              _this6.sendPushRequest(options, cid);
            }
          }
        });
      }
    }

    /**
     * 进入应用
     * @param {Object} options 页面参数
     * @param {Object} self	当前页面实例
     */
  }, {
    key: "launch",
    value: function launch(options, self) {
      // 初始化页面停留时间  start
      set_page_residence_time();
      this.__licationShow = true;
      dbSet('__launch_options', options);
      // 应用初始上报参数为1
      options.cst = 1;
      this.sendReportRequest(options, true);
    }
  }, {
    key: "load",
    value: function load(options, self) {
      this.self = self;
      this._query = options;
    }
  }, {
    key: "appHide",
    value: function appHide(self) {
      this.applicationHide(self, true);
    }
  }, {
    key: "appShow",
    value: function appShow(self) {
      this.applicationShow(self);
    }
  }, {
    key: "show",
    value: function show(self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageShow(self);
      }
      if (get_page_types(self) === 'app') {
        this.appShow();
      }
    }
  }, {
    key: "hide",
    value: function hide(self) {
      this.self = self;
      if (get_page_types(self) === 'page') {
        this.pageHide(self);
      }
      if (get_page_types(self) === 'app') {
        this.appHide();
      }
    }
  }, {
    key: "error",
    value: function error(em) {
      // 开发工具内不上报错误
      // if (this._platform === 'devtools') {
      //   if (process.env.NODE_ENV === 'development') {
      //     console.info('当前运行环境为开发者工具，不上报数据。')
      //     return
      //   }
      // }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var route = '';
      try {
        route = get_route();
      } catch (e) {
        // 未获取到页面路径
        route = '';
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        p: this.statData.p,
        lt: '31',
        url: route,
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: parseInt(new Date().getTime() / 1000)
      };
      this.request(options);
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!uni.__stat_instance) {
        uni.__stat_instance = new Stat();
      }

      // 2.0 init 服务空间
      {
        var space = get_space(uniCloud.config);
        if (!uni.__stat_uniCloud_space) {
          //   判断不为空对象
          if (space && Object.keys(space).length !== 0) {
            var spaceData = {
              provider: space.provider,
              spaceId: space.spaceId,
              clientSecret: space.clientSecret
            };
            if (space.endpoint) {
              spaceData.endpoint = space.endpoint;
            }
            uni.__stat_uniCloud_space = uniCloud.init(spaceData);
            // console.log(
            //   '=== 当前绑定的统计服务空间spaceId：' +
            //     uni.__stat_uniCloud_space.config.spaceId
            // )
          } else {
            console.error('应用未关联服务空间，请在uniCloud目录右键关联服务空间');
          }
        }
      }
      return uni.__stat_instance;
    }
  }]);
  return Stat;
}(Report);
var Stat$1 = Stat;
var stat = Stat$1.getInstance();

// 用于判断是隐藏页面还是卸载页面
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    // 进入应用上报数据
    stat.launch(options, this);
    // 上报push推送id
    stat.pushEvent(options);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  }
};

// 加载统计代码
function load_stat() {
  // eslint-disable-next-line no-restricted-globals
  var Vue = __webpack_require__(/*! vue */ 60);
  (Vue.default || Vue).mixin(lifecycle);
  uni.report = function (type, options) {
    stat.sendEvent(type, options);
  };
}
function main() {
  if (is_debug) {
    {
      console.log('=== uni统计开启,version:2.0 ===');
    }
    load_stat();
  } else {
    if (true) {
      uni.report = function (type, options) {};
    } else {}
  }
}
main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 58)["default"]))

/***/ }),
/* 58 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 15));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 61));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 65));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 67));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 69));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 70));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 74));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 75));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 76);
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 77));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e33) { throw _e33; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e34) { didErr = true; err = _e34; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function s(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var r = s(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) {
                this._doProcessBlock(s, l);
              }
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  i = r,
  o = (s(function (e, t) {
    var n;
    e.exports = (n = i, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            b = e[t + 10],
            S = e[t + 11],
            k = e[t + 12],
            I = e[t + 13],
            T = e[t + 14],
            C = e[t + 15],
            A = i[0],
            P = i[1],
            E = i[2],
            O = i[3];
          A = u(A, P, E, O, o, 7, a[0]), O = u(O, A, P, E, c, 12, a[1]), E = u(E, O, A, P, p, 17, a[2]), P = u(P, E, O, A, f, 22, a[3]), A = u(A, P, E, O, g, 7, a[4]), O = u(O, A, P, E, m, 12, a[5]), E = u(E, O, A, P, y, 17, a[6]), P = u(P, E, O, A, _, 22, a[7]), A = u(A, P, E, O, w, 7, a[8]), O = u(O, A, P, E, v, 12, a[9]), E = u(E, O, A, P, b, 17, a[10]), P = u(P, E, O, A, S, 22, a[11]), A = u(A, P, E, O, k, 7, a[12]), O = u(O, A, P, E, I, 12, a[13]), E = u(E, O, A, P, T, 17, a[14]), A = l(A, P = u(P, E, O, A, C, 22, a[15]), E, O, c, 5, a[16]), O = l(O, A, P, E, y, 9, a[17]), E = l(E, O, A, P, S, 14, a[18]), P = l(P, E, O, A, o, 20, a[19]), A = l(A, P, E, O, m, 5, a[20]), O = l(O, A, P, E, b, 9, a[21]), E = l(E, O, A, P, C, 14, a[22]), P = l(P, E, O, A, g, 20, a[23]), A = l(A, P, E, O, v, 5, a[24]), O = l(O, A, P, E, T, 9, a[25]), E = l(E, O, A, P, f, 14, a[26]), P = l(P, E, O, A, w, 20, a[27]), A = l(A, P, E, O, I, 5, a[28]), O = l(O, A, P, E, p, 9, a[29]), E = l(E, O, A, P, _, 14, a[30]), A = h(A, P = l(P, E, O, A, k, 20, a[31]), E, O, m, 4, a[32]), O = h(O, A, P, E, w, 11, a[33]), E = h(E, O, A, P, S, 16, a[34]), P = h(P, E, O, A, T, 23, a[35]), A = h(A, P, E, O, c, 4, a[36]), O = h(O, A, P, E, g, 11, a[37]), E = h(E, O, A, P, _, 16, a[38]), P = h(P, E, O, A, b, 23, a[39]), A = h(A, P, E, O, I, 4, a[40]), O = h(O, A, P, E, o, 11, a[41]), E = h(E, O, A, P, f, 16, a[42]), P = h(P, E, O, A, y, 23, a[43]), A = h(A, P, E, O, v, 4, a[44]), O = h(O, A, P, E, k, 11, a[45]), E = h(E, O, A, P, C, 16, a[46]), A = d(A, P = h(P, E, O, A, p, 23, a[47]), E, O, o, 6, a[48]), O = d(O, A, P, E, _, 10, a[49]), E = d(E, O, A, P, T, 15, a[50]), P = d(P, E, O, A, m, 21, a[51]), A = d(A, P, E, O, k, 6, a[52]), O = d(O, A, P, E, f, 10, a[53]), E = d(E, O, A, P, b, 15, a[54]), P = d(P, E, O, A, c, 21, a[55]), A = d(A, P, E, O, w, 6, a[56]), O = d(O, A, P, E, C, 10, a[57]), E = d(E, O, A, P, y, 15, a[58]), P = d(P, E, O, A, I, 21, a[59]), A = d(A, P, E, O, g, 6, a[60]), O = d(O, A, P, E, S, 10, a[61]), E = d(E, O, A, P, p, 15, a[62]), P = d(P, E, O, A, v, 21, a[63]), i[0] = i[0] + A | 0, i[1] = i[1] + P | 0, i[2] = i[2] + E | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), s(function (e, t) {
    var n;
    e.exports = (n = i, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), s(function (e, t) {
    e.exports = i.HmacMD5;
  })),
  a = s(function (e, t) {
    e.exports = i.enc.Utf8;
  }),
  c = s(function (e, t) {
    var n;
    e.exports = (n = i, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var u = "FUNCTION",
  l = "OBJECT",
  h = "CLIENT_DB",
  d = "pending",
  p = "fullfilled",
  f = "rejected";
function g(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function m(e) {
  return "object" === g(e);
}
function y(e) {
  return "function" == typeof e;
}
function _(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var w = "REJECTED",
  v = "NOT_PENDING";
var b = /*#__PURE__*/function () {
  function b() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? w : _ref$retryRule;
    (0, _classCallCheck2.default)(this, b);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(b, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== d;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then(function (e) {
        return _this.status = p, Promise.resolve(e);
      }, function (e) {
        return _this.status = f, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return b;
}();
function S(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var k = "development" === "development",
  I = "app-plus",
  T = "true" === false || !0 === false,
  C = S([]),
  A = "h5" === I ? "web" : "app-plus" === I ? "app" : I,
  P = S(undefined),
  E = S([]) || [],
  O = true;
var x = "";
try {
  x = (__webpack_require__(/*! uni-stat-config */ 78).default || __webpack_require__(/*! uni-stat-config */ 78)).appid;
} catch (e) {}
var R = {};
function U(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = R, s = e, Object.prototype.hasOwnProperty.call(n, s) || (R[e] = t), R[e];
}
"app" === A && (R = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var L = ["invoke", "success", "fail", "complete"],
  N = U("_globalUniCloudInterceptor");
function D(e, t) {
  N[e] || (N[e] = {}), m(t) && Object.keys(t).forEach(function (n) {
    L.indexOf(n) > -1 && function (e, t, n) {
      var s = N[e][t];
      s || (s = N[e][t] = []), -1 === s.indexOf(n) && y(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function F(e, t) {
  N[e] || (N[e] = {}), m(t) ? Object.keys(t).forEach(function (n) {
    L.indexOf(n) > -1 && function (e, t, n) {
      var s = N[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete N[e];
}
function q(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function K(e, t) {
  return N[e] && N[e][t] || [];
}
function M(e) {
  D("callObject", e);
}
var j = U("_globalUniCloudListener"),
  B = "response",
  $ = "needLogin",
  W = "refreshToken",
  z = "clientdb",
  J = "cloudfunction",
  H = "cloudobject";
function G(e) {
  return j[e] || (j[e] = []), j[e];
}
function V(e, t) {
  var n = G(e);
  n.includes(t) || n.push(t);
}
function Y(e, t) {
  var n = G(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Q(e, t) {
  var n = G(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var X,
  Z = !1;
function ee() {
  return X || (X = new Promise(function (e) {
    Z && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (Z = !0, e());
      }
      Z || setTimeout(function () {
        t();
      }, 30);
    }();
  }), X);
}
function te(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    y(_s2) && (t[_n2] = _(_s2));
  }
  return t;
}
var ne = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(ne, _Error);
  var _super = _createSuper(ne);
  function ne(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, ne);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(ne, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return ne;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var se = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function re() {
  return {
    token: se.getStorageSync("uni_id_token") || se.getStorageSync("uniIdToken"),
    tokenExpired: se.getStorageSync("uni_id_token_expired")
  };
}
function ie() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && se.setStorageSync("uni_id_token", e), t && se.setStorageSync("uni_id_token_expired", t);
}
var oe, ae;
function ce() {
  return oe || (oe = uni.getSystemInfoSync()), oe;
}
function ue() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function le() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (ae) return _objectSpread(_objectSpread({}, ae), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ce(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return ae = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ue()), t), _objectSpread(_objectSpread({}, ae), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
    sign: function sign(e, t) {
      var n = "";
      return Object.keys(e).sort().forEach(function (t) {
        e[t] && (n = n + "&" + t + "=" + e[t]);
      }), n = n.slice(1), o(n, t).toString();
    },
    wrappedRequest: function wrappedRequest(e, t) {
      return new Promise(function (n, s) {
        t(Object.assign(e, {
          complete: function complete(e) {
            e || (e = {}), k && "web" === A && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
            var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
            if (!e.statusCode || e.statusCode >= 400) return s(new ne({
              code: "SYS_ERR",
              message: e.errMsg || "request:fail",
              requestId: t
            }));
            var r = e.data;
            if (r.error) return s(new ne({
              code: r.error.code,
              message: r.error.message,
              requestId: t
            }));
            r.result = r.data, r.requestId = t, delete r.data, n(r);
          }
        }));
      });
    },
    toBase64: function toBase64(e) {
      return c.stringify(a.parse(e));
    }
  },
  de = {
    "uniCloud.init.paramRequired": "{param} required",
    "uniCloud.uploadFile.fileError": "filePath should be instance of File"
  };
var _e4 = (0, _uniI18n.initVueI18n)({
    "zh-Hans": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    "zh-Hant": {
      "uniCloud.init.paramRequired": "缺少参数：{param}",
      "uniCloud.uploadFile.fileError": "filePath应为File对象"
    },
    en: de,
    fr: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    es: {
      "uniCloud.init.paramRequired": "{param} required",
      "uniCloud.uploadFile.fileError": "filePath should be instance of File"
    },
    ja: de
  }, "zh-Hans"),
  pe = _e4.t;
var fe = /*#__PURE__*/function () {
  function fe(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, fe);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(pe("uniCloud.init.paramRequired", {
        param: t
      }));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = se, this._getAccessTokenPromiseHub = new b({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new ne({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: v
    });
  }
  (0, _createClass2.default)(fe, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new ne({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new ne({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, s, r, i, o, a, c, u, l, h, d, p, f, m, y, _e5, _;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, s = _ref4.onUploadProgress, r = _ref4.config;
                if (!("string" !== g(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new ne({
                  code: "CLOUDPATH_REQUIRED",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                i = r && r.envType || this.config.envType;
                _context2.next = 10;
                return this.getOSSUploadOptionsFromPath({
                  env: i,
                  filename: t
                });
              case 10:
                o = _context2.sent.result;
                a = "https://" + o.cdnDomain + "/" + o.ossPath;
                c = o.securityToken;
                u = o.accessKeyId;
                l = o.signature;
                h = o.host;
                d = o.ossPath;
                p = o.id;
                f = o.policy;
                m = o.ossCallbackUrl;
                y = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: u,
                  Signature: l,
                  host: h,
                  id: p,
                  key: d,
                  policy: f,
                  success_action_status: 200
                };
                if (c && (y["x-oss-security-token"] = c), m) {
                  _e5 = JSON.stringify({
                    callbackUrl: m,
                    callbackBody: JSON.stringify({
                      fileId: p,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  y.callback = he.toBase64(_e5);
                }
                _ = {
                  url: "https://" + o.host,
                  formData: y,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 25;
                return this.uploadFileToOSS(Object.assign({}, _, {
                  onUploadProgress: s
                }));
              case 25:
                if (!m) {
                  _context2.next = 27;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 27:
                _context2.next = 29;
                return this.reportOSSUpload({
                  id: p
                });
              case 29:
                if (!_context2.sent.success) {
                  _context2.next = 31;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: a
                });
              case 31:
                throw new ne({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new ne({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new ne({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return fe;
}();
var ge = {
  init: function init(e) {
    var t = new fe(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var me = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var ye;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(ye || (ye = {}));
var _e = function _e() {};
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new ne({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e6, s) {
      return _e6 ? n(_e6) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function be(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function ke(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e7 = _step.value;
      var _t4 = _e7.isMatch,
        _n4 = _e7.genAdapter,
        _s4 = _e7.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var Ie = {
    adapter: null,
    runtime: void 0
  },
  Te = ["anonymousUuidKey"];
var Ce = /*#__PURE__*/function (_e8) {
  (0, _inherits2.default)(Ce, _e8);
  var _super2 = _createSuper(Ce);
  function Ce() {
    var _this6;
    (0, _classCallCheck2.default)(this, Ce);
    _this6 = _super2.call(this), Ie.adapter.root.tcbObject || (Ie.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Ce, [{
    key: "setItem",
    value: function setItem(e, t) {
      Ie.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return Ie.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete Ie.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete Ie.adapter.root.tcbObject;
    }
  }]);
  return Ce;
}(_e);
function Ae(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Ce();
    case "none":
      return new Ce();
    default:
      return t.sessionStorage || new Ce();
  }
}
var Pe = /*#__PURE__*/function () {
  function Pe(e) {
    (0, _classCallCheck2.default)(this, Pe);
    if (!this._storage) {
      this._persistence = Ie.adapter.primaryStorage || e.persistence, this._storage = Ae(this._persistence, Ie.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Pe, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ae(e, Ie.adapter);
      for (var _e9 in this.keys) {
        var _s6 = this.keys[_e9];
        if (t && Te.includes(_e9)) continue;
        var _r2 = this._storage.getItem(_s6);
        ve(_r2) || be(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Pe;
}();
var Ee = {},
  Oe = {};
function xe(e) {
  return Ee[e];
}
var Re = /*#__PURE__*/(0, _createClass2.default)(function Re(e, t) {
  (0, _classCallCheck2.default)(this, Re);
  this.data = t || null, this.name = e;
});
var Ue = /*#__PURE__*/function (_Re) {
  (0, _inherits2.default)(Ue, _Re);
  var _super3 = _createSuper(Ue);
  function Ue(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Ue);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Ue);
}(Re);
var Le = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Ue) return console.error(e.error), this;
      var n = "string" == typeof e ? new Re(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e10 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e10),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Le.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Le.fire(e, t);
}
function Fe(e, t) {
  Le.off(e, t);
}
var qe = "loginStateChanged",
  Ke = "loginStateExpire",
  Me = "loginTypeChanged",
  je = "anonymousConverted",
  Be = "refreshAccessToken";
var $e;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}($e || ($e = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  ze = {
    "X-SDK-Version": "1.3.5"
  };
function Je(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e11 in r) {
        o.append(_e11, r[_e11]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function He() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, ze), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new Ie.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = xe(this.config.env), this._localCache = (t = this.config.env, Oe[t]), Je(this._reqClass, "post", [He]), Je(this._reqClass, "upload", [He]), Je(this._reqClass, "download", [He]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e12, _e13, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new ne({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e12 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e12 || "REFRESH_TOKEN_EXPIRED" === _e12 || "INVALID_REFRESH_TOKEN" === _e12)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === $e.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e12)) {
                  _context8.next = 19;
                  break;
                }
                _e13 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e13,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Ke), this._cache.removeStore(n);
              case 20:
                throw new ne({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De(Be), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new ne({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e14, o, _e15, _e16, a, c, u, l, h, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e14 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e14);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e15 in o) {
                    o.hasOwnProperty(_e15) && void 0 !== o[_e15] && o.append(_e15, i[_e15]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e16 in i) {
                    void 0 !== i[_e16] && (o[_e16] = i[_e16]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, l = t.inQuery, h = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e17 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e17, "=").concat(encodeURIComponent(n[_e17]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(me, "//tcb-api.tencentcloudapi.com/web", d);
                h && (p += h);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new ne({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n6,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context11.sent;
                if (!_n6.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new ne({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context11.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new ne({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = xe(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new ne({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = xe(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new ne({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new ne({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new ne({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = xe(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === $e.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === $e.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === $e.WECHAT || this.loginType === $e.WECHAT_OPEN || this.loginType === $e.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e18;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.ANONYMOUS,
                  persistence: "local"
                });
                _e18 = new Ze(this.config.env);
                _context16.next = 19;
                return _e18.user.refresh();
              case 19:
                return _context16.abrupt("return", _e18);
              case 20:
                throw new ne({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Me, {
                  loginType: $e.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new ne({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, $e.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new ne({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new ne({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new ne({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: $e.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Me, {
                  env: this.config.env,
                  loginType: $e.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new ne({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new ne({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = xe(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Me, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === $e.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new ne({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Me, {
                  env: this.config.env,
                  loginType: $e.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Ke, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne(Be, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Me, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new ne({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new ne({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  lt = function lt(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new ne({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new ne({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  ht = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (Ie.adapter || (this.requestClient = new Ie.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, ht), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || Ie.adapter.primaryStorage || ht.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Ee[t] = new Pe(e), Oe[t] = new Pe(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Fe.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return lt.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new ne({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = ke(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (Ie.adapter = t), n && (Ie.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        se.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = se.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    se.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return se.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    se.removeStorageSync(e);
  },
  clear: function clear() {
    se.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _te = te(e),
          t = _te.success,
          s = _te.fail,
          r = _te.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var bt = wt;
var St = /*#__PURE__*/function (_fe) {
  (0, _inherits2.default)(St, _fe);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = le();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _re = re(),
        i = _re.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new ne({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new ne({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new ne({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new ne({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new ne({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList;
      if (!Array.isArray(e) || 0 === e.length) throw new ne({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var t = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new ne({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(fe);
var kt = {
  init: function init(e) {
    var t = new St(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
function It(_ref18) {
  var e = _ref18.data;
  var t;
  t = le();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _re2 = re(),
      _e19 = _re2.token;
    _e19 && (n.uniIdToken = _e19);
  }
  return n;
}
function Tt() {
  return _Tt.apply(this, arguments);
}
function _Tt() {
  _Tt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
    var _this23 = this;
    var _ref55,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args5 = arguments;
    return _regenerator.default.wrap(function _callee53$(_context53) {
      while (1) {
        switch (_context53.prev = _context53.next) {
          case 0:
            _ref55 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, e = _ref55.name, t = _ref55.data;
            _context53.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context53.abrupt("return", new Promise(function (t, n) {
              se.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: A,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref56.data;
              var _ref57 = e || {},
                t = _ref57.code,
                n = _ref57.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref58) {
              var n = _ref58.code,
                s = _ref58.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e29 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e29), new Error(_e29);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e30 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e30), new Error(_e30);
                    }
                }
                return _this23._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = It.call(_this23, {
                  data: t
                });
                se.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: A,
                    param: s
                  },
                  success: function success() {
                    var _ref59 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref59.statusCode,
                      s = _ref59.data;
                    return !t || t >= 400 ? n(new ne({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new ne({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context53.stop();
        }
      }
    }, _callee53, this);
  }));
  return _Tt.apply(this, arguments);
}
var Ct = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var At = /[\\^$.*+?()[\]{}|]/g,
  Pt = RegExp(At.source);
function Et(e, t, n) {
  return e.replace(new RegExp((s = t) && Pt.test(s) ? s.replace(At, "\\$&") : s, "g"), n);
  var s;
}
var Ot = "none",
  xt = "request",
  Rt = "response",
  Ut = "both";
var Lt = /*#__PURE__*/function () {
  function Lt() {
    var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref19.secretType,
      t = _ref19.uniCloudIns;
    (0, _classCallCheck2.default)(this, Lt);
    this.clientType = "", this.secretType = e || Ot, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(Lt, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ce()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(e) {
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                return _context34.abrupt("return", this.secretType === Ot ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function encryptData(_x31) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(e) {
        var _ref20, t, n;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(this.secretType === Ot)) {
                  _context35.next = 2;
                  break;
                }
                return _context35.abrupt("return", e);
              case 2:
                _ref20 = e || {}, t = _ref20.errCode, n = _ref20.content;
                return _context35.abrupt("return", t || !n ? e : this.secretType === xt ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
      function decryptResult(_x32) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36() {
        var _ref22,
          n,
          _ref22$data,
          s,
          r,
          _args36 = arguments;
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _ref22 = _args36.length > 0 && _args36[0] !== undefined ? _args36[0] : {}, n = _ref22.name, _ref22$data = _ref22.data, s = _ref22$data === void 0 ? {} : _ref22$data;
                _context36.next = 3;
                return t.prepare();
              case 3:
                _context36.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context36.sent;
                _context36.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context36.sent;
                _context36.t0 = t.isClientKeyNotFound(r);
                if (!_context36.t0) {
                  _context36.next = 19;
                  break;
                }
                _context36.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context36.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context36.sent;
                _context36.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context36.sent;
              case 19:
                return _context36.abrupt("return", r);
              case 20:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37() {
        var _ref24,
          n,
          _ref24$data,
          s,
          r,
          i,
          _r3,
          _args37 = arguments;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _ref24 = _args37.length > 0 && _args37[0] !== undefined ? _args37[0] : {}, n = _ref24.name, _ref24$data = _ref24.data, s = _ref24$data === void 0 ? {} : _ref24$data;
                _context37.next = 3;
                return t.prepare();
              case 3:
                _context37.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context37.sent;
                _context37.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context37.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context37.next = 21;
                  break;
                }
                _context37.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context37.next = 14;
                return t.encryptData(s);
              case 14:
                _r3 = _context37.sent;
                _context37.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context37.sent;
                _context37.next = 20;
                return e({
                  name: n,
                  data: _r3
                });
              case 20:
                i = _context37.sent;
              case 21:
                _context37.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context37.sent;
                return _context37.abrupt("return", i);
              case 25:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37);
      }));
    }
  }]);
  return Lt;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Nt(e) {
  return parseInt(e) === e;
}
function Dt(e) {
  if (!Nt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Nt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ft(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Dt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Nt(e.length) && Dt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function qt(e) {
  return new Uint8Array(e);
}
function Kt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Mt,
  jt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ft(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Bt = (Mt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Mt[(240 & s) >> 4] + Mt[15 & s]);
      }
      return t.join("");
    }
  }),
  $t = {
    16: 10,
    24: 12,
    32: 14
  },
  Wt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  Jt = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  Ht = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Gt = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  Vt = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Yt = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Qt = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Xt = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Zt = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  en = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  tn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  nn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  sn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  rn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function on(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var an = /*#__PURE__*/function () {
  function an(e) {
    (0, _classCallCheck2.default)(this, an);
    if (!(this instanceof an)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ft(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(an, [{
    key: "_prepare",
    value: function _prepare() {
      var e = $t[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = on(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= zt[o >> 16 & 255] << 24 ^ zt[o >> 8 & 255] << 16 ^ zt[255 & o] << 8 ^ zt[o >> 24 & 255] ^ Wt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= zt[255 & o] ^ zt[o >> 8 & 255] << 8 ^ zt[o >> 16 & 255] << 16 ^ zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var l = 0; l < 4; l++) {
          o = this._Kd[u][l], this._Kd[u][l] = tn[o >> 24 & 255] ^ nn[o >> 16 & 255] ^ sn[o >> 8 & 255] ^ rn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = on(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Ht[s[r] >> 24 & 255] ^ Gt[s[(r + 1) % 4] >> 16 & 255] ^ Vt[s[(r + 2) % 4] >> 8 & 255] ^ Yt[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = qt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = on(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Qt[s[r] >> 24 & 255] ^ Xt[s[(r + 3) % 4] >> 16 & 255] ^ Zt[s[(r + 2) % 4] >> 8 & 255] ^ en[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = qt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (Jt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Jt[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Jt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Jt[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return an;
}();
var cn = /*#__PURE__*/function () {
  function cn(e) {
    (0, _classCallCheck2.default)(this, cn);
    if (!(this instanceof cn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new an(e);
  }
  (0, _createClass2.default)(cn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), Kt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), Kt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return cn;
}();
var un = /*#__PURE__*/function () {
  function un(e, t) {
    (0, _classCallCheck2.default)(this, un);
    if (!(this instanceof un)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = qt(16);
    this._lastCipherblock = Ft(t, !0), this._aes = new an(e);
  }
  (0, _createClass2.default)(un, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Kt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ft(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = qt(e.length), n = qt(16), s = 0; s < e.length; s += 16) {
        Kt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Kt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return un;
}();
var ln = /*#__PURE__*/function () {
  function ln(e, t, n) {
    (0, _classCallCheck2.default)(this, ln);
    if (!(this instanceof ln)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = qt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ft(t, !0), this._aes = new an(e);
  }
  (0, _createClass2.default)(ln, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ft(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Kt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Kt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ft(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Kt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Kt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return ln;
}();
var hn = /*#__PURE__*/function () {
  function hn(e, t) {
    (0, _classCallCheck2.default)(this, hn);
    if (!(this instanceof hn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = qt(16);
    this._lastPrecipher = Ft(t, !0), this._lastPrecipherIndex = 16, this._aes = new an(e);
  }
  (0, _createClass2.default)(hn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ft(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return hn;
}();
var dn = /*#__PURE__*/function () {
  function dn(e) {
    (0, _classCallCheck2.default)(this, dn);
    if (!(this instanceof dn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = qt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(dn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ft(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return dn;
}();
var pn = /*#__PURE__*/function () {
  function pn(e, t) {
    (0, _classCallCheck2.default)(this, pn);
    if (!(this instanceof pn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof dn || (t = new dn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new an(e);
  }
  (0, _createClass2.default)(pn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ft(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return pn;
}();
var fn = {
  AES: an,
  Counter: dn,
  ModeOfOperation: {
    ecb: cn,
    cbc: un,
    cfb: ln,
    ofb: hn,
    ctr: pn
  },
  utils: {
    hex: Bt,
    utf8: jt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ft(e, !0)).length % 16,
          n = qt(e.length + t);
        Kt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ft(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = qt(n);
        return Kt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ft,
    createArray: qt,
    copyArray: Kt
  }
};
function gn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = fn.utils.utf8.toBytes(n),
    i = fn.utils.utf8.toBytes(e),
    o = new fn.ModeOfOperation.cbc(s, r),
    a = fn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var mn = {
    code: 2e4,
    message: "System error"
  },
  yn = {
    code: 20101,
    message: "Invalid client"
  },
  _n = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  wn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function vn(e) {
  var _ref25 = e || {},
    t = _ref25.errSubject,
    n = _ref25.subject,
    s = _ref25.errCode,
    r = _ref25.errMsg,
    i = _ref25.code,
    o = _ref25.message,
    a = _ref25.cause;
  return new ne({
    subject: t || n || "uni-secure-network",
    code: s || i || mn.code,
    message: r || o,
    cause: a
  });
}
var bn,
  Sn,
  kn = null;
var In = /*#__PURE__*/function (_Lt) {
  (0, _inherits2.default)(In, _Lt);
  var _super9 = _createSuper(In);
  function In(e) {
    var _this14;
    (0, _classCallCheck2.default)(this, In);
    _this14 = _super9.call(this, e), _this14.clientType = "mp-weixin", _this14.userEncryptKey = null;
    return _this14;
  }
  (0, _createClass2.default)(In, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                if (this.isLogin()) {
                  _context38.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context38.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context38.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context38.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _this15 = this;
        var e;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context39.next = 2;
                  break;
                }
                return _context39.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(kn && kn.expireTime)) {
                  _context39.next = 6;
                  break;
                }
                e = Date.now();
                if (!(kn.expireTime - e > 0)) {
                  _context39.next = 6;
                  break;
                }
                return _context39.abrupt("return", (this.userEncryptKey = kn, this.userEncryptKey));
              case 6:
                return _context39.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      kn = t, _this15.userEncryptKey = t, e(_this15.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(vn(_objectSpread(_objectSpread({}, _n), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context40.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context40.abrupt("return", {
                  verifyClientSign: gn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ce().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context41.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context41.abrupt("return", this.secretType === Rt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: gn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ce().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function platformEncryptData(_x33) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                t = e.content;
                _context42.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context42.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context42.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = fn.utils.utf8.toBytes(n),
                    o = new fn.ModeOfOperation.cbc(r, i),
                    a = fn.padding.pkcs7.strip(o.decrypt(s));
                  return fn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformDecryptResult(_x34) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return In;
}(Lt);
function Tn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s10) {
    var r = t[_s10];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref26.type,
            t = _ref26.data,
            r = _ref26.errCode,
            i = _ref26.errMsg,
            o = _ref26.errSubject,
            a = _ref26.message;
          "success" === e ? n(t) : s(vn({
            errCode: r,
            errMsg: wn[r] || i || a,
            errSubject: o
          }));
        }])) : s(vn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s10 = 0; _s10 < t.length; _s10++) {
    _loop(_s10);
  }
  return n;
}
var Cn = /*#__PURE__*/function (_Lt2) {
  (0, _inherits2.default)(Cn, _Lt2);
  var _super10 = _createSuper(Cn);
  function Cn(e) {
    var _this16;
    (0, _classCallCheck2.default)(this, Cn);
    _this16 = _super10.call(this, e), _this16.clientType = "app", _this16.appUtils = _objectSpread({}, Tn(uni.requireNativePlugin("plus"))), _this16.systemInfo = bn || (bn = ce());
    return _this16;
  }
  (0, _createClass2.default)(Cn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43() {
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context43.sent;
                return _context43.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context44.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context44.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context44.t0 = _context44.sent.result;
                if (_context44.t0) {
                  _context44.next = 10;
                  break;
                }
                _context44.t0 = {};
              case 10:
                n = _context44.t0;
                if (!(0 !== n.errCode)) {
                  _context44.next = 13;
                  break;
                }
                throw function (e) {
                  return new ne({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || mn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context44.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        var _this17 = this;
        var _ref27,
          _ref27$forceUpdate,
          e,
          _args45 = arguments;
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _ref27 = _args45.length > 0 && _args45[0] !== undefined ? _args45[0] : {}, _ref27$forceUpdate = _ref27.forceUpdate, e = _ref27$forceUpdate === void 0 ? !1 : _ref27$forceUpdate;
                _context45.t1 = !0;
                _context45.next = 4;
                return this.hasClientKey();
              case 4:
                _context45.t2 = _context45.sent;
                _context45.t0 = _context45.t1 !== _context45.t2;
                if (_context45.t0) {
                  _context45.next = 8;
                  break;
                }
                _context45.t0 = e;
              case 8:
                if (!_context45.t0) {
                  _context45.next = 10;
                  break;
                }
                return _context45.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === d || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== f || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this17.scopedGlobalCache.initStatus = p;
                }).catch(function (e) {
                  throw _this17.scopedGlobalCache.initStatus = f, e;
                }), this.scopedGlobalCache.initStatus = d), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _ref28,
          _ref28$forceUpdate,
          e,
          _args46 = arguments;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _ref28 = _args46.length > 0 && _args46[0] !== undefined ? _args46[0] : {}, _ref28$forceUpdate = _ref28.forceUpdate, e = _ref28$forceUpdate === void 0 ? !1 : _ref28$forceUpdate;
                _context46.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context47.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context47.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context48.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context48.abrupt("return", this.secretType === Rt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context49.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context49.sent;
                return _context49.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Cn;
}(Lt);
function An() {
  var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref29.secretType;
  return e === xt || e === Rt || e === Ut;
}
function Pn() {
  var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref30.name,
    _ref30$data = _ref30.data,
    t = _ref30$data === void 0 ? {} : _ref30$data;
  return "app" === A && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function En() {
  var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref31.provider,
    t = _ref31.spaceId,
    n = _ref31.functionName;
  var _ce = ce(),
    s = _ce.appId,
    r = _ce.uniPlatform,
    i = _ce.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref32 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref32.provider,
      t = _ref32.spaceId;
    var n = C;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), vn(yn);
}
function On(_ref33) {
  var e = _ref33.functionName,
    t = _ref33.result,
    n = _ref33.logPvd;
  if (k && this.__dev__.debugLog && t && t.requestId) {
    var _s11 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s11, "[/").concat(n, "-request]"));
  }
}
function xn(e) {
  var t = e.callFunction,
    n = function n(_n7) {
      var _this18 = this;
      var s = _n7.name;
      _n7.data = It.call(e, {
        data: _n7.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb"
        }[this.config.provider],
        i = An(_n7),
        o = Pn(_n7),
        a = i || o;
      return t.call(this, _n7).then(function (e) {
        return e.errCode = 0, !a && On.call(_this18, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && On.call(_this18, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref34$message = _ref34.message,
            e = _ref34$message === void 0 ? "" : _ref34$message,
            _ref34$extraInfo = _ref34.extraInfo,
            t = _ref34$extraInfo === void 0 ? {} : _ref34$extraInfo,
            _ref34$formatter = _ref34.formatter,
            n = _ref34$formatter === void 0 ? [] : _ref34$formatter;
          for (var _s12 = 0; _s12 < n.length; _s12++) {
            var _n$_s = n[_s12],
              _r4 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r4);
            if (!_a) continue;
            var _c = _i3;
            for (var _e20 = 1; _e20 < _a.length; _e20++) {
              _c = Et(_c, "{$".concat(_e20, "}"), _a[_e20]);
            }
            for (var _e21 in t) {
              _c = Et(_c, "{".concat(_e21, "}"), t[_e21]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n7.name, "]: ").concat(e.message),
          formatter: Ct,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, k && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && E ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Tt), o = Tt) : o = n, o = o.bind(e), Pn(t)) a = n.call(e, t);else if (function (_ref35) {
      var e = _ref35.name,
        _ref35$data = _ref35.data,
        t = _ref35$data === void 0 ? {} : _ref35$data;
      return "mp-weixin" === A && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (An(t)) {
      a = new Sn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (En({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new Sn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
Sn = "mp-weixin" !== A && "app" !== A ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw vn({
      message: "Platform ".concat(A, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : T ? "mp-weixin" === A ? In : Cn : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw vn({
      message: "Platform ".concat(A, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Rn = Symbol("CLIENT_DB_INTERNAL");
function Un(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Rn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t10 = e[n];
        return "function" == typeof _t10 ? _t10.bind(e) : _t10;
      }
      return t.get(e, n, s);
    }
  });
}
function Ln(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Nn = ["db.Geo", "db.command", "command.aggregate"];
function Dn(e, t) {
  return Nn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Fn(e) {
  switch (g(e)) {
    case "array":
      return e.map(function (e) {
        return Fn(e);
      });
    case "object":
      return e._internalType === Rn || Object.keys(e).forEach(function (t) {
        e[t] = Fn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function qn(e) {
  return e && e.content && e.content.$method;
}
var Kn = /*#__PURE__*/function () {
  function Kn(e, t, n) {
    (0, _classCallCheck2.default)(this, Kn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Kn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Fn(e.$param)
          };
        })
      };
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = qn(e),
          _n8 = qn(e.prevStage);
        if ("aggregate" === t && "collection" === _n8 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === qn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = qn(e),
          _n9 = qn(e.prevStage);
        if ("aggregate" === t && "command" === _n9) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Mn({
          $method: e,
          $param: Fn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Fn(t)
      }), k) {
        var _e22 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t11 = _e22 && _e22.$param;
        _t11 && 1 === _t11.length && "string" == typeof _e22.$param[0] && _e22.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Kn;
}();
function Mn(e, t, n) {
  return Un(new Kn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Dn(s, t) ? Mn({
        $method: t
      }, e, n) : function () {
        return Mn({
          $method: t,
          $param: Fn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function jn(_ref36) {
  var e = _ref36.path,
    t = _ref36.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }]);
    return _class4;
  }();
}
function Bn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Un(new e(t), {
    get: function get(e, t) {
      return Dn("db", t) ? Mn({
        $method: t
      }, null, e) : function () {
        return Mn({
          $method: t,
          $param: Fn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var $n = /*#__PURE__*/function (_ref37) {
  (0, _inherits2.default)($n, _ref37);
  var _super11 = _createSuper($n);
  function $n() {
    (0, _classCallCheck2.default)(this, $n);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)($n, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref38) {
      var _this19 = this;
      var e = _ref38.action,
        t = _ref38.command,
        n = _ref38.multiCommand,
        s = _ref38.queryList;
      function r(e, t) {
        if (n && s) for (var _n10 = 0; _n10 < s.length; _n10++) {
          var _r5 = s[_n10];
          _r5.udb && "function" == typeof _r5.udb.setResult && (t ? _r5.udb.setResult(t) : _r5.udb.setResult(e.result.dataList[_n10]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), q(K(o, "fail"), e).then(function () {
          return q(K(o, "complete"), e);
        }).then(function () {
          return r(null, e), Q(B, {
            type: z,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = q(K(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e23 = 0; _e23 < u.length; _e23++) {
          var _u$_e = u[_e23],
            _t12 = _u$_e.level,
            _n11 = _u$_e.message,
            _s13 = _u$_e.detail,
            _r6 = console["app" === A && "warn" === _t12 ? "error" : _t12] || console.log;
          var _i4 = "[System Info]" + _n11;
          _s13 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s13)), _r6(_i4);
        }
        if (t) {
          return a(new ne({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ie({
          token: s,
          tokenExpired: c
        }), _this19._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this19._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Q(W, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t13) {
          var _l$_t = l[_t13],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t14 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t14;
              }
            });
          }
        };
        for (var _t13 = 0; _t13 < l.length; _t13++) {
          _loop2(_t13);
        }
        return function (e) {
          return q(K(o, "success"), e).then(function () {
            return q(K(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Q(B, {
              type: z,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new ne({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return $n;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref39$uniClient = _ref39.uniClient,
      e = _ref39$uniClient === void 0 ? {} : _ref39$uniClient,
      _ref39$isJQL = _ref39.isJQL,
      t = _ref39$isJQL === void 0 ? !1 : _ref39$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t || (this.auth = Ln(this._authCallBacks)), this._isJQL = t, Object.assign(this, Ln(this._dbCallBacks)), this.env = Un({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = Un({}, {
      get: function get(e, t) {
        return jn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = jn({
      path: [],
      method: "serverDate"
    }), this.RegExp = jn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Wn = "token无效，跳转登录页面",
  zn = "token过期，跳转登录页面",
  Jn = {
    TOKEN_INVALID_TOKEN_EXPIRED: zn,
    TOKEN_INVALID_INVALID_CLIENTID: Wn,
    TOKEN_INVALID: Wn,
    TOKEN_INVALID_WRONG_TOKEN: Wn,
    TOKEN_INVALID_ANONYMOUS_USER: Wn
  },
  Hn = {
    "uni-id-token-expired": zn,
    "uni-id-check-token-failed": Wn,
    "uni-id-token-not-exist": Wn,
    "uni-id-check-device-feature-failed": Wn
  };
function Gn(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function Vn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Gn(t, e.path)) : !1 === e.needLogin && s.push(Gn(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Yn(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Qn() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function Xn() {
  return Yn(Qn());
}
function Zn() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Yn(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var es = !!_pages.default.uniIdRouter;
var _ref40 = function () {
    var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref21$pages = _ref21.pages,
      e = _ref21$pages === void 0 ? [] : _ref21$pages,
      _ref21$subPackages = _ref21.subPackages,
      n = _ref21$subPackages === void 0 ? [] : _ref21$subPackages,
      _ref21$uniIdRouter = _ref21.uniIdRouter,
      s = _ref21$uniIdRouter === void 0 ? {} : _ref21$uniIdRouter,
      _ref21$tabBar = _ref21.tabBar,
      r = _ref21$tabBar === void 0 ? {} : _ref21$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _Vn = Vn(e),
      c = _Vn.needLoginPage,
      u = _Vn.notNeedLoginPage,
      _ref23 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _Vn2 = Vn(r, s),
            i = _Vn2.needLoginPage,
            o = _Vn2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref23.needLoginPage,
      h = _ref23.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Zn(i, r)
    };
  }(),
  ts = _ref40.loginPage,
  ns = _ref40.routerNeedLogin,
  ss = _ref40.resToLogin,
  rs = _ref40.needLoginPage,
  is = _ref40.notNeedLoginPage,
  os = _ref40.loginPageInTabBar;
if (rs.indexOf(ts) > -1) throw new Error("Login page [".concat(ts, "] should not be \"needLogin\", please check your pages.json"));
function as(e) {
  var t = Xn();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e24 = 0; _e24 < r.length; _e24++) {
    var _t15 = r[_e24];
    ".." === _t15 ? i.pop() : "." !== _t15 && i.push(_t15);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function cs(e) {
  var t = Yn(as(e));
  return !(is.indexOf(t) > -1) && (rs.indexOf(t) > -1 || ns.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function us(_ref41) {
  var e = _ref41.redirect;
  var t = Yn(e),
    n = Yn(ts);
  return Xn() !== n && t !== n;
}
function ls() {
  var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref42.api,
    t = _ref42.redirect;
  if (!t || !us({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(ts, t);
  os ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function hs() {
  var _ref43 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref43.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _re3 = re(),
        e = _re3.token,
        t = _re3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e25 = "uni-id-token-expired";
          n = {
            errCode: _e25,
            errMsg: Hn[_e25]
          };
        }
      } else {
        var _e26 = "uni-id-check-token-failed";
        n = {
          errCode: _e26,
          errMsg: Hn[_e26]
        };
      }
      return n;
    }();
  if (cs(e) && n) {
    n.uniIdRedirectUrl = e;
    if (G($).length > 0) return setTimeout(function () {
      Q($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function ds() {
  !function () {
    var e = Qn(),
      _hs = hs({
        url: e
      }),
      t = _hs.abortLoginPageJump,
      n = _hs.autoToLoginPage;
    t || n && ls({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t16) {
    var n = e[_t16];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _hs2 = hs({
            url: e.url
          }),
          t = _hs2.abortLoginPageJump,
          s = _hs2.autoToLoginPage;
        return t ? e : s ? (ls({
          api: n,
          redirect: as(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t16 = 0; _t16 < e.length; _t16++) {
    _loop3(_t16);
  }
}
function ps() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref44 = e || {},
            t = _ref44.errCode;
          return t in Hn;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref45 = e || {},
            t = _ref45.errCode;
          return t in Jn;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = G($);
      ee().then(function () {
        var n = Qn();
        if (n && us({
          redirect: n
        })) return t.length > 0 ? Q($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (ts && ls({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function fs(e) {
  !function (e) {
    e.onResponse = function (e) {
      V(B, e);
    }, e.offResponse = function (e) {
      Y(B, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      V($, e);
    }, e.offNeedLogin = function (e) {
      Y($, e);
    }, es && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = !0, ee().then(function () {
      ds.call(e);
    }), ss && ps.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      V(W, e);
    }, e.offRefreshToken = function (e) {
      Y(W, e);
    };
  }(e);
}
var gs;
var ms = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  ys = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function _s() {
  var e = re().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(gs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
gs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !ys.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ms.indexOf(e.charAt(i++)) << 18 | ms.indexOf(e.charAt(i++)) << 12 | (n = ms.indexOf(e.charAt(i++))) << 6 | (s = ms.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var ws = s(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref46) {
      var s = _ref46.onChooseFile,
        r = _ref46.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t17 = s(e);
          if (void 0 !== _t17) return Promise.resolve(_t17).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  vs = n(ws);
var bs = "manual";
function Ss(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this20 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this20[t]);
        }), e;
      }, function (e, t) {
        if (_this20.loadtime === bs) return;
        var n = !1;
        var s = [];
        for (var _r7 = 2; _r7 < e.length; _r7++) {
          e[_r7] !== t[_r7] && (s.push(e[_r7]), n = !0);
        }
        e[0] !== t[0] && (_this20.mixinDatacomPage.current = _this20.pageCurrent), _this20.mixinDatacomPage.size = _this20.pageSize, _this20.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this21 = this;
        var _ref47 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref47$getone = _ref47.getone,
          e = _ref47$getone === void 0 ? !1 : _ref47$getone,
          t = _ref47.success,
          n = _ref47.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this21.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this21.getcount && (_this21.mixinDatacomPage.count = r), _this21.mixinDatacomHasMore = s.length < _this21.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this21.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this21.mixinDatacomLoading = !1, _this21.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n12;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n12 = n).collection.apply(_n12, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ks(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n13 = n,
      s = _n13.customUI,
      r = _n13.loadingOptions,
      i = _n13.errorOptions,
      o = _n13.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        return function () {
          var _ref48 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref48.fn,
            t = _ref48.interceptorName,
            n = _ref48.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context50.prev = 2;
                    _context50.next = 5;
                    return q(K(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context50.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context50.sent;
                    _context50.next = 10;
                    return q(K(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context50.abrupt("return", i);
                  case 13:
                    _context50.prev = 13;
                    _context50.t0 = _context50["catch"](2);
                    o = _context50.t0;
                    _context50.next = 18;
                    return q(K(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context50.prev = 19;
                    _context50.next = 22;
                    return q(K(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context50.finish(19);
                  case 23:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s14 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
              var h,
                _len3,
                u,
                _key3,
                d,
                p,
                _ref50,
                f,
                g,
                m,
                y,
                _e27,
                _yield,
                _t18,
                _n14,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, u = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        u[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: l,
                        data: {
                          method: c,
                          params: u
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context52.prev = 5;
                      _context52.next = 8;
                      return e.callFunction(d);
                    case 8:
                      h = _context52.sent;
                      _context52.next = 14;
                      break;
                    case 11:
                      _context52.prev = 11;
                      _context52.t0 = _context52["catch"](5);
                      p = !0, h = {
                        result: new ne(_context52.t0)
                      };
                    case 14:
                      _ref50 = h.result || {}, f = _ref50.errSubject, g = _ref50.errCode, m = _ref50.errMsg, y = _ref50.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ie(y), Q(W, _objectSpread({}, y))), g)) {
                        _context52.next = 39;
                        break;
                      }
                      _e27 = m;
                      if (!(p && o)) {
                        _context52.next = 24;
                        break;
                      }
                      _context52.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: u,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context52.t1 = _context52.sent.errMsg;
                      if (_context52.t1) {
                        _context52.next = 23;
                        break;
                      }
                      _context52.t1 = m;
                    case 23:
                      _e27 = _context52.t1;
                    case 24:
                      if (!a) {
                        _context52.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context52.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e27,
                        icon: "none"
                      });
                      _context52.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context52.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context52.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51() {
                        var _ref52,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee51$(_context51) {
                          while (1) {
                            switch (_context51.prev = _context51.next) {
                              case 0:
                                _ref52 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref52.title, t = _ref52.content, n = _ref52.showCancel, s = _ref52.cancelText, r = _ref52.confirmText;
                                return _context51.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context51.stop();
                            }
                          }
                        }, _callee51);
                      }))({
                        title: "提示",
                        content: _e27,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context52.sent;
                      _t18 = _yield.confirm;
                      if (!(i.retry && _t18)) {
                        _context52.next = 37;
                        break;
                      }
                      return _context52.abrupt("return", s.apply(void 0, u));
                    case 37:
                      _n14 = new ne({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: h.requestId
                      });
                      throw _n14.detail = h.result, Q(B, {
                        type: H,
                        content: _n14
                      }), _n14;
                    case 39:
                      return _context52.abrupt("return", (Q(B, {
                        type: H,
                        content: h.result
                      }), h.result));
                    case 40:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, null, [[5, 11]]);
            }));
            function s() {
              return _s14.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref53 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref53.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Is(e) {
  return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ts() {
  return _Ts.apply(this, arguments);
}
function _Ts() {
  _Ts = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
    var _ref60,
      e,
      _ref60$callLoginByWei,
      t,
      n,
      s,
      r,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee54$(_context54) {
      while (1) {
        switch (_context54.prev = _context54.next) {
          case 0:
            _ref60 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref60.openid, _ref60$callLoginByWei = _ref60.callLoginByWeixin, t = _ref60$callLoginByWei === void 0 ? !1 : _ref60$callLoginByWei;
            n = Is(this);
            if (!("mp-weixin" !== A)) {
              _context54.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(A, "`"));
          case 4:
            if (!(e && t)) {
              _context54.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context54.next = 8;
              break;
            }
            return _context54.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context54.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context54.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context54.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context54.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context54.stop();
        }
      }
    }, _callee54, this);
  }));
  return _Ts.apply(this, arguments);
}
function Cs(_x37) {
  return _Cs.apply(this, arguments);
}
function _Cs() {
  _Cs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55(e) {
    var t;
    return _regenerator.default.wrap(function _callee55$(_context55) {
      while (1) {
        switch (_context55.prev = _context55.next) {
          case 0:
            t = Is(this);
            return _context55.abrupt("return", (t.initPromise || (t.initPromise = Ts.call(this, e)), t.initPromise));
          case 2:
          case "end":
            return _context55.stop();
        }
      }
    }, _callee55, this);
  }));
  return _Cs.apply(this, arguments);
}
function As(e) {
  return function () {
    var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref54.openid,
      _ref54$callLoginByWei = _ref54.callLoginByWeixin,
      n = _ref54$callLoginByWei === void 0 ? !1 : _ref54$callLoginByWei;
    return Cs.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ps(_x38, _x39) {
  return _Ps.apply(this, arguments);
}
function _Ps() {
  _Ps = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56(e, t) {
    var n, _e31, s;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context56.prev = 1;
            _context56.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              se.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e31 = _context56.sent;
            return _context56.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));
          case 8:
            _context56.prev = 8;
            _context56.t0 = _context56["catch"](1);
            return _context56.abrupt("return", !1);
          case 11:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, null, [[1, 8]]);
  }));
  return _Ps.apply(this, arguments);
}
function Es(_x40) {
  return _Es.apply(this, arguments);
}
function _Es() {
  _Es = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var _ce2, _e32, _t20, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            if (k) {
              _context58.next = 2;
              break;
            }
            return _context58.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === A) {
              _ce2 = ce(), _e32 = _ce2.osName, _t20 = _ce2.osVersion;
              "ios" === _e32 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t20) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context58.next = 6;
              break;
            }
            return _context58.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context58.next = 11;
            return function () {
              var _ref61 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57(e, t) {
                var n, _s15, _r8;
                return _regenerator.default.wrap(function _callee57$(_context57) {
                  while (1) {
                    switch (_context57.prev = _context57.next) {
                      case 0:
                        _s15 = 0;
                      case 1:
                        if (!(_s15 < e.length)) {
                          _context57.next = 11;
                          break;
                        }
                        _r8 = e[_s15];
                        _context57.next = 5;
                        return Ps(_r8, t);
                      case 5:
                        if (!_context57.sent) {
                          _context57.next = 8;
                          break;
                        }
                        n = _r8;
                        return _context57.abrupt("break", 11);
                      case 8:
                        _s15++;
                        _context57.next = 1;
                        break;
                      case 11:
                        return _context57.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context57.stop();
                    }
                  }
                }, _callee57);
              }));
              return function (_x41, _x42) {
                return _ref61.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context58.sent;
            r = _yield2.address;
            if (!r) {
              _context58.next = 15;
              break;
            }
            return _context58.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === A ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === A && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === A.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context58.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58);
  }));
  return _Es.apply(this, arguments);
}
function Os(e) {
  e._initPromiseHub || (e._initPromiseHub = new b({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var xs = {
  tcb: bt,
  tencent: bt,
  aliyun: ge,
  private: kt
};
var Rs = new ( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
  }
  (0, _createClass2.default)(_class6, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = xs[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), k && function (e) {
        if (!k) return;
        var t = {};
        e.__dev__ = t, t.debugLog = k && ("web" === A && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === A);
        var n = P;
        n && !n.code && (t.debugInfo = n);
        var s = new b({
          createPromise: function createPromise() {
            return Es(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Os(t), xn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Bn($n, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Bn($n, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = _s, e.chooseAndUploadFile = vs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Ss(e);
          }
        }), e.importObject = ks(e), e.initSecureNetworkByWeixin = As(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this22 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e28 = n && n.type || u;
              s = _e28 !== u;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _te2 = te(n),
              o = _te2.success,
              a = _te2.fail,
              c = _te2.complete,
              l = i.then(function () {
                return s ? Promise.resolve() : q(K(t, "invoke"), n);
              }).then(function () {
                return e.call(_this22, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : q(K(t, "success"), e).then(function () {
                  return q(K(t, "complete"), e);
                }).then(function () {
                  return r && Q(B, {
                    type: J,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : q(K(t, "fail"), e).then(function () {
                  return q(K(t, "complete"), e);
                }).then(function () {
                  return Q(B, {
                    type: J,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || c)) return l;
            l.then(function (e) {
              o && o(e), c && c(e), r && Q(B, {
                type: J,
                content: e
              });
            }, function (e) {
              a && a(e), c && c(e), r && Q(B, {
                type: J,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class6;
}())();
(function () {
  var e = E;
  var t = {};
  if (e && 1 === e.length) t = e[0], Rs = Rs.init(t), Rs._isDefault = !0;else {
    var _t19 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n15;
    _n15 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : O ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t19.forEach(function (e) {
      Rs[e] = function () {
        return console.error(_n15), Promise.reject(new ne({
          code: "SYS_ERR",
          message: _n15
        }));
      };
    });
  }
  Object.assign(Rs, {
    get mixinDatacom() {
      return Ss(Rs);
    }
  }), fs(Rs), Rs.addInterceptor = D, Rs.removeInterceptor = F, Rs.interceptObject = M, k && "web" === A && (window.uniCloud = Rs);
})();
var Us = Rs;
exports.default = Us;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 52), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 59)["default"]))

/***/ }),
/* 59 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 15));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 60));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 52)))

/***/ }),
/* 60 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 61 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 62);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 63);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 18);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 64);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 62 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 19);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 63 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 64 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 65 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 66);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 66 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 67 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 68);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 68 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 69 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 70 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 69);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 66);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 71);
var construct = __webpack_require__(/*! ./construct.js */ 72);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 71 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 72 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 66);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 73);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 73 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 74 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 75 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 76 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 15));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 74));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 75));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 4));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 52)))

/***/ }),
/* 77 */
/*!******************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages.json?{"type":"origin-pages-json"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/login/login/login",
    "style": {
      "app-plus": {
        "titleNView": false,
        "bounce": "none",
        "scrollIndicator": "none",
        "softinputMode": "adjustResize"
      }
    }
  }],
  "globalStyle": {
    "pageOrientation": "portrait",
    "navigationBarTitleText": "Hello uniapp",
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#007AFF",
    "backgroundColor": "#F8F8F8",
    "backgroundColorTop": "#F4F5F6",
    "backgroundColorBottom": "#F4F5F6",
    "mp-360": {
      "navigationStyle": "custom"
    },
    "h5": {
      "maxWidth": 1190,
      "navigationBarTextStyle": "black",
      "navigationBarBackgroundColor": "#F1F1F1"
    }
  }
};
exports.default = _default;

/***/ }),
/* 78 */
/*!*****************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages.json?{"type":"stat"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__05B3C20"
};
exports.default = _default;

/***/ }),
/* 79 */
/*!******************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/pages.json?{"type":"style"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": {},
  "globalStyle": {}
};
exports.default = _default;

/***/ }),
/* 80 */
/*!**********************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/App.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 81);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 56);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///80\n");

/***/ }),
/* 81 */
/*!***********************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 82);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThoQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI4MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///81\n");

/***/ }),
/* 82 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\nvar _commBnsConfig = _interopRequireDefault(__webpack_require__(/*! @/commBns/commBnsConfig.js */ 23));\nvar _vuex = __webpack_require__(/*! vuex */ 83);\nvar _package = __webpack_require__(/*! ./package.json */ 84);\nvar _checkUpdate = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/uni-upgrade-center-app/utils/check-update */ 85));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  onLaunch: function onLaunch() {\n    var _this = this;\n    // 线上示例使用\n    // console.log('%c uni-app官方团队诚邀优秀前端工程师加盟，一起打造更卓越的uni-app & uniCloud，欢迎投递简历到 hr2013@dcloud.io', 'color: red');\n    __f__(\"log\", 'App Launch', \" at App.vue:21\");\n\n    // App平台检测升级，服务端代码是通过uniCloud的云函数实现的，详情可参考：https://ext.dcloud.net.cn/plugin?id=4542\n    if (plus.runtime.appid !== 'HBuilder') {\n      // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid\n      (0, _checkUpdate.default)();\n    }\n\n    // 一键登录预登陆，可以显著提高登录速度\n    uni.preLogin({\n      provider: 'univerify',\n      success: function success(res) {\n        // 成功\n        _this.setUniverifyErrorMsg();\n        __f__(\"log\", \"preLogin success: \", res, \" at App.vue:34\");\n      },\n      fail: function fail(res) {\n        _this.setUniverifyLogin(false);\n        _this.setUniverifyErrorMsg(res.errMsg);\n        // 失败\n        __f__(\"log\", \"preLogin fail res: \", res, \" at App.vue:40\");\n      }\n    });\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:46\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:49\");\n  },\n  globalData: {\n    isEnd: false,\n    globaType: 0\n  },\n  methods: _objectSpread({}, (0, _vuex.mapMutations)(['setUniverifyErrorMsg', 'setUniverifyLogin']))\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInBsdXMiLCJydW50aW1lIiwiYXBwaWQiLCJjaGVja1VwZGF0ZSIsInVuaSIsInByZUxvZ2luIiwicHJvdmlkZXIiLCJzdWNjZXNzIiwicmVzIiwic2V0VW5pdmVyaWZ5RXJyb3JNc2ciLCJmYWlsIiwic2V0VW5pdmVyaWZ5TG9naW4iLCJlcnJNc2ciLCJvblNob3ciLCJvbkhpZGUiLCJnbG9iYWxEYXRhIiwiaXNFbmQiLCJnbG9iYVR5cGUiLCJtZXRob2RzIiwibWFwTXV0YXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQWtGO0FBQUE7QUFBQSxlQUVuRTtFQUNkQSxRQUFRLEVBQUUsb0JBQVc7SUFBQTtJQVVwQjtJQUNBO0lBQ0EsYUFBWSxZQUFZOztJQUV4QjtJQUNBLElBQUlDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLEtBQUssVUFBVSxFQUFFO01BQUU7TUFDeEMsSUFBQUMsb0JBQVcsR0FBRTtJQUNkOztJQUVBO0lBQ0FDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO01BQ1pDLFFBQVEsRUFBRSxXQUFXO01BQ3JCQyxPQUFPLEVBQUUsaUJBQUNDLEdBQUcsRUFBSztRQUNqQjtRQUNBLEtBQUksQ0FBQ0Msb0JBQW9CLEVBQUU7UUFDM0IsYUFBWSxvQkFBb0IsRUFBRUQsR0FBRztNQUN0QyxDQUFDO01BQ0RFLElBQUksRUFBRSxjQUFDRixHQUFHLEVBQUs7UUFDZCxLQUFJLENBQUNHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUM3QixLQUFJLENBQUNGLG9CQUFvQixDQUFDRCxHQUFHLENBQUNJLE1BQU0sQ0FBQztRQUNyQztRQUNBLGFBQVkscUJBQXFCLEVBQUVKLEdBQUc7TUFDdkM7SUFDRCxDQUFDLENBQUM7RUFFSCxDQUFDO0VBQ0RLLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCLENBQUM7RUFDREMsVUFBVSxFQUFFO0lBQ1hDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLFNBQVMsRUFBRTtFQUNaLENBQUM7RUFDREMsT0FBTyxvQkFDSCxJQUFBQyxrQkFBWSxFQUFDLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUVoRSxDQUFDO0FBQUEsMkIiLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjb21tQm5zQ29uZmlnIGZyb20gXCJAL2NvbW1CbnMvY29tbUJuc0NvbmZpZy5qc1wiO1xuXG5pbXBvcnQge21hcE11dGF0aW9uc30gZnJvbSAndnVleCdcbmltcG9ydCB7dmVyc2lvbn0gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgY2hlY2tVcGRhdGUgZnJvbSAnQC91bmlfbW9kdWxlcy91bmktdXBncmFkZS1jZW50ZXItYXBwL3V0aWxzL2NoZWNrLXVwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdFxuXHRcdFxuXG5cblxuXG5cblxuXG5cdFx0Ly8g57q/5LiK56S65L6L5L2/55SoXG5cdFx0Ly8gY29uc29sZS5sb2coJyVjIHVuaS1hcHDlrpjmlrnlm6LpmJ/or5rpgoDkvJjnp4DliY3nq6/lt6XnqIvluIjliqDnm5/vvIzkuIDotbfmiZPpgKDmm7TljZPotornmoR1bmktYXBwICYgdW5pQ2xvdWTvvIzmrKLov47mipXpgJLnroDljobliLAgaHIyMDEzQGRjbG91ZC5pbycsICdjb2xvcjogcmVkJyk7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKTtcblxuXHRcdC8vIEFwcOW5s+WPsOajgOa1i+WNh+e6p++8jOacjeWKoeerr+S7o+eggeaYr+mAmui/h3VuaUNsb3Vk55qE5LqR5Ye95pWw5a6e546w55qE77yM6K+m5oOF5Y+v5Y+C6ICD77yaaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9NDU0MlxuXHRcdGlmIChwbHVzLnJ1bnRpbWUuYXBwaWQgIT09ICdIQnVpbGRlcicpIHsgLy8g55yf5py66L+Q6KGM5LiN6ZyA6KaB5qOA5p+l5pu05paw77yM55yf5py66L+Q6KGM5pe2YXBwaWTlm7rlrprkuLonSEJ1aWxkZXIn77yM6L+Z5piv6LCD6K+V5Z+65bqn55qEYXBwaWRcblx0XHRcdGNoZWNrVXBkYXRlKClcblx0XHR9XG5cblx0XHQvLyDkuIDplK7nmbvlvZXpooTnmbvpmYbvvIzlj6/ku6XmmL7okZfmj5Dpq5jnmbvlvZXpgJ/luqZcblx0XHR1bmkucHJlTG9naW4oe1xuXHRcdFx0cHJvdmlkZXI6ICd1bml2ZXJpZnknLFxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHQvLyDmiJDlip9cblx0XHRcdFx0dGhpcy5zZXRVbml2ZXJpZnlFcnJvck1zZygpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcInByZUxvZ2luIHN1Y2Nlc3M6IFwiLCByZXMpO1xuXHRcdFx0fSxcblx0XHRcdGZhaWw6IChyZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zZXRVbml2ZXJpZnlMb2dpbihmYWxzZSk7XG5cdFx0XHRcdHRoaXMuc2V0VW5pdmVyaWZ5RXJyb3JNc2cocmVzLmVyck1zZyk7XG5cdFx0XHRcdC8vIOWksei0pVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInByZUxvZ2luIGZhaWwgcmVzOiBcIiwgcmVzKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9LFxuXHRnbG9iYWxEYXRhOiB7XG5cdFx0aXNFbmQ6IGZhbHNlLFxuXHRcdGdsb2JhVHlwZTogMCxcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdC4uLm1hcE11dGF0aW9ucyhbJ3NldFVuaXZlcmlmeUVycm9yTXNnJywgJ3NldFVuaXZlcmlmeUxvZ2luJ10pXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///82\n");

/***/ }),
/* 83 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 52)))

/***/ }),
/* 84 */
/*!***************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/package.json ***!
  \***************************************************************/
/*! exports provided: id, name, version, description, scripts, repository, keywords, author, license, bugs, homepage, dependencies, dcloudext, uni_modules, uni-app, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"id\\\":\\\"hello-uniapp\\\",\\\"name\\\":\\\"hello-uniapp\\\",\\\"version\\\":\\\"1.0.0\\\",\\\"description\\\":\\\"\\\",\\\"scripts\\\":{\\\"test\\\":\\\"echo \\\\\\\"Error: no test specified\\\\\\\" && exit 1\\\"},\\\"repository\\\":\\\"https://github.com/dcloudio/hello-uniapp.git\\\",\\\"keywords\\\":[],\\\"author\\\":\\\"\\\",\\\"license\\\":\\\"MIT\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/dcloudio/hello-uniapp/issues\\\"},\\\"homepage\\\":\\\"https://github.com/dcloudio/hello-uniapp#readme\\\",\\\"dependencies\\\":{\\\"js-base64\\\":\\\"^3.7.5\\\",\\\"uuid\\\":\\\"^9.0.0\\\"},\\\"dcloudext\\\":{\\\"category\\\":[\\\"前端页面模板\\\",\\\"uni-app前端项目模板\\\"],\\\"sale\\\":{\\\"regular\\\":{\\\"price\\\":\\\"0.00\\\"},\\\"sourcecode\\\":{\\\"price\\\":\\\"0.00\\\"}},\\\"contact\\\":{\\\"qq\\\":\\\"\\\"},\\\"declaration\\\":{\\\"ads\\\":\\\"无\\\",\\\"data\\\":\\\"无\\\",\\\"permissions\\\":\\\"无\\\"},\\\"npmurl\\\":\\\"\\\"},\\\"uni_modules\\\":{\\\"dependencies\\\":[],\\\"encrypt\\\":[],\\\"platforms\\\":{\\\"cloud\\\":{\\\"tcb\\\":\\\"y\\\",\\\"aliyun\\\":\\\"y\\\"},\\\"client\\\":{\\\"App\\\":{\\\"app-vue\\\":\\\"y\\\",\\\"app-nvue\\\":\\\"y\\\"},\\\"H5-mobile\\\":{\\\"Safari\\\":\\\"y\\\",\\\"Android Browser\\\":\\\"y\\\",\\\"微信浏览器(Android)\\\":\\\"y\\\",\\\"QQ浏览器(Android)\\\":\\\"y\\\"},\\\"H5-pc\\\":{\\\"Chrome\\\":\\\"y\\\",\\\"IE\\\":\\\"y\\\",\\\"Edge\\\":\\\"y\\\",\\\"Firefox\\\":\\\"y\\\",\\\"Safari\\\":\\\"y\\\"},\\\"小程序\\\":{\\\"微信\\\":\\\"y\\\",\\\"阿里\\\":\\\"y\\\",\\\"百度\\\":\\\"y\\\",\\\"字节跳动\\\":\\\"y\\\",\\\"QQ\\\":\\\"y\\\",\\\"京东\\\":\\\"y\\\"},\\\"快应用\\\":{\\\"华为\\\":\\\"u\\\",\\\"联盟\\\":\\\"u\\\"},\\\"Vue\\\":{\\\"vue2\\\":\\\"y\\\",\\\"vue3\\\":\\\"y\\\"}}}},\\\"uni-app\\\":{\\\"scripts\\\":{\\\"mp-dingtalk\\\":{\\\"title\\\":\\\"钉钉小程序\\\",\\\"env\\\":{\\\"UNI_PLATFORM\\\":\\\"mp-alipay\\\"},\\\"define\\\":{\\\"MP-DINGTALK\\\":true}}}}}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI4NC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///84\n");

/***/ }),
/* 85 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/uni_modules/uni-upgrade-center-app/utils/check-update.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _callCheckVersion = _interopRequireDefault(__webpack_require__(/*! ./call-check-version */ 86));\n// 推荐再App.vue中使用\nvar PACKAGE_INFO_KEY = '__package_info__';\nfunction _default() {\n  return new Promise(function (resolve, reject) {\n    (0, _callCheckVersion.default)().then( /*#__PURE__*/function () {\n      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {\n        var _e$result, code, message, is_silently, url, platform, type, _yield$uniCloud$getTe, fileList;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (e.result) {\n                  _context.next = 2;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 2:\n                _e$result = e.result, code = _e$result.code, message = _e$result.message, is_silently = _e$result.is_silently, url = _e$result.url, platform = _e$result.platform, type = _e$result.type; // 此处逻辑仅为实例，可自行编写\n                if (!(code > 0)) {\n                  _context.next = 18;\n                  break;\n                }\n                _context.next = 6;\n                return uniCloud.getTempFileURL({\n                  fileList: [url]\n                });\n              case 6:\n                _yield$uniCloud$getTe = _context.sent;\n                fileList = _yield$uniCloud$getTe.fileList;\n                if (fileList[0].tempFileURL) e.result.url = fileList[0].tempFileURL;\n                resolve(e);\n\n                // 静默更新，只有wgt有\n                if (!is_silently) {\n                  _context.next = 13;\n                  break;\n                }\n                uni.downloadFile({\n                  url: e.result.url,\n                  success: function success(res) {\n                    if (res.statusCode == 200) {\n                      // 下载好直接安装，下次启动生效\n                      plus.runtime.install(res.tempFilePath, {\n                        force: false\n                      });\n                    }\n                  }\n                });\n                return _context.abrupt(\"return\");\n              case 13:\n                /**\r\n                 * 提示升级一\r\n                 * 使用 uni.showModal\r\n                 */\n                // return updateUseModal(e.result)\n\n                /**\r\n                 * 提示升级二\r\n                 * 官方适配的升级弹窗，可自行替换资源适配UI风格\r\n                 */\n                uni.setStorageSync(PACKAGE_INFO_KEY, e.result);\n                uni.navigateTo({\n                  url: \"/uni_modules/uni-upgrade-center-app/pages/upgrade-popup?local_storage_key=\".concat(PACKAGE_INFO_KEY),\n                  fail: function fail(err) {\n                    __f__(\"error\", '更新弹框跳转失败', err, \" at uni_modules/uni-upgrade-center-app/utils/check-update.js:63\");\n                    uni.removeStorageSync(PACKAGE_INFO_KEY);\n                  }\n                });\n                return _context.abrupt(\"return\");\n              case 18:\n                if (!(code < 0)) {\n                  _context.next = 21;\n                  break;\n                }\n                // TODO 云函数报错处理\n                __f__(\"error\", message, \" at uni_modules/uni-upgrade-center-app/utils/check-update.js:71\");\n                return _context.abrupt(\"return\", reject(e));\n              case 21:\n                return _context.abrupt(\"return\", resolve(e));\n              case 22:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()).catch(function (err) {\n      // TODO 云函数报错处理\n      __f__(\"error\", err.message, \" at uni_modules/uni-upgrade-center-app/utils/check-update.js:77\");\n      reject(err);\n    });\n  });\n}\n\n/**\r\n * 使用 uni.showModal 升级\r\n */\nfunction updateUseModal(packageInfo) {\n  var title = packageInfo.title,\n    contents = packageInfo.contents,\n    is_mandatory = packageInfo.is_mandatory,\n    url = packageInfo.url,\n    platform = packageInfo.platform,\n    type = packageInfo.type;\n  var isWGT = type === 'wgt';\n  var isiOS = !isWGT ? platform.includes('iOS') : false;\n  var confirmText = isiOS ? '立即跳转更新' : '立即下载更新';\n  return uni.showModal({\n    title: title,\n    content: contents,\n    showCancel: !is_mandatory,\n    confirmText: confirmText,\n    success: function success(res) {\n      if (res.cancel) return;\n\n      // 安装包下载\n      if (isiOS) {\n        plus.runtime.openURL(url);\n        return;\n      }\n      uni.showToast({\n        title: '后台下载中……',\n        duration: 1000\n      });\n\n      // wgt 和 安卓下载更新\n      downloadTask = uni.downloadFile({\n        url: url,\n        success: function success(res) {\n          if (res.statusCode !== 200) {\n            __f__(\"error\", '下载安装包失败', err, \" at uni_modules/uni-upgrade-center-app/utils/check-update.js:125\");\n            return;\n          }\n          // 下载好直接安装，下次启动生效\n          plus.runtime.install(res.tempFilePath, {\n            force: false\n          }, function () {\n            if (is_mandatory) {\n              //更新完重启app\n              plus.runtime.restart();\n              return;\n            }\n            uni.showModal({\n              title: '安装成功是否重启？',\n              success: function success(res) {\n                if (res.confirm) {\n                  //更新完重启app\n                  plus.runtime.restart();\n                }\n              }\n            });\n          }, function (err) {\n            uni.showModal({\n              title: '更新失败',\n              content: err.message,\n              showCancel: false\n            });\n          });\n        }\n      });\n    }\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 58)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXVwZ3JhZGUtY2VudGVyLWFwcC91dGlscy9jaGVjay11cGRhdGUuanMiXSwibmFtZXMiOlsiUEFDS0FHRV9JTkZPX0tFWSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2FsbENoZWNrVmVyc2lvbiIsInRoZW4iLCJlIiwicmVzdWx0IiwiY29kZSIsIm1lc3NhZ2UiLCJpc19zaWxlbnRseSIsInVybCIsInBsYXRmb3JtIiwidHlwZSIsInVuaUNsb3VkIiwiZ2V0VGVtcEZpbGVVUkwiLCJmaWxlTGlzdCIsInRlbXBGaWxlVVJMIiwidW5pIiwiZG93bmxvYWRGaWxlIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJwbHVzIiwicnVudGltZSIsImluc3RhbGwiLCJ0ZW1wRmlsZVBhdGgiLCJmb3JjZSIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsImZhaWwiLCJlcnIiLCJyZW1vdmVTdG9yYWdlU3luYyIsImNhdGNoIiwidXBkYXRlVXNlTW9kYWwiLCJwYWNrYWdlSW5mbyIsInRpdGxlIiwiY29udGVudHMiLCJpc19tYW5kYXRvcnkiLCJpc1dHVCIsImlzaU9TIiwiaW5jbHVkZXMiLCJjb25maXJtVGV4dCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY2FuY2VsIiwib3BlblVSTCIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwiZG93bmxvYWRUYXNrIiwicmVzdGFydCIsImNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFFNUIsb0JBQVc7RUFFekIsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7SUFDdkMsSUFBQUMseUJBQWdCLEdBQUUsQ0FBQ0MsSUFBSTtNQUFBLG1GQUFDLGlCQUFPQyxDQUFDO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtn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UyxDQUFDO2NBQ2JQLEtBQUssRUFBRSxXQUFXO2NBQ2xCaEIsT0FBTyxFQUFFLGlCQUFBQyxHQUFHLEVBQUk7Z0JBQ2YsSUFBSUEsR0FBRyxDQUFDK0IsT0FBTyxFQUFFO2tCQUNoQjtrQkFDQTdCLElBQUksQ0FBQ0MsT0FBTyxDQUFDMkIsT0FBTyxFQUFFO2dCQUN2QjtjQUNEO1lBQ0QsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxFQUFFLFVBQUFwQixHQUFHLEVBQUk7WUFDVGIsR0FBRyxDQUFDeUIsU0FBUyxDQUFDO2NBQ2JQLEtBQUssRUFBRSxNQUFNO2NBQ2JRLE9BQU8sRUFBRWIsR0FBRyxDQUNWdEIsT0FBTztjQUNUb0MsVUFBVSxFQUFFO1lBQ2IsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxDQUFDO1FBQ0g7TUFDRCxDQUFDLENBQUM7SUFDSDtFQUNELENBQUMsQ0FBQztBQUNILEMiLCJmaWxlIjoiODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2FsbENoZWNrVmVyc2lvbiBmcm9tICcuL2NhbGwtY2hlY2stdmVyc2lvbidcclxuXHJcbi8vIOaOqOiNkOWGjUFwcC52dWXkuK3kvb/nlKhcclxuY29uc3QgUEFDS0FHRV9JTkZPX0tFWSA9ICdfX3BhY2thZ2VfaW5mb19fJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjYWxsQ2hlY2tWZXJzaW9uKCkudGhlbihhc3luYyAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoIWUucmVzdWx0KSByZXR1cm47XHJcblx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRjb2RlLFxyXG5cdFx0XHRcdG1lc3NhZ2UsXHJcblx0XHRcdFx0aXNfc2lsZW50bHksIC8vIOaYr+WQpumdmem7mOabtOaWsFxyXG5cdFx0XHRcdHVybCwgLy8g5a6J6KOF5YyF5LiL6L295Zyw5Z2AXHJcblx0XHRcdFx0cGxhdGZvcm0sIC8vIOWuieijheWMheW5s+WPsFxyXG5cdFx0XHRcdHR5cGUgLy8g5a6J6KOF5YyF57G75Z6LXHJcblx0XHRcdH0gPSBlLnJlc3VsdDtcclxuXHJcblx0XHRcdC8vIOatpOWkhOmAu+i+keS7heS4uuWunuS+i++8jOWPr+iHquihjOe8luWGmVxyXG5cdFx0XHRpZiAoY29kZSA+IDApIHtcclxuXHRcdFx0XHQvLyDohb7orq/kupHlkozpmL/ph4zkupHkuIvovb3pk77mjqXkuI3lkIzvvIzpnIDopoHlpITnkIbkuIDkuIvvvIzpmL/ph4zkupHkvJrljp/moLfov5Tlm55cclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRmaWxlTGlzdFxyXG5cdFx0XHRcdH0gPSBhd2FpdCB1bmlDbG91ZC5nZXRUZW1wRmlsZVVSTCh7XHJcblx0XHRcdFx0XHRmaWxlTGlzdDogW3VybF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoZmlsZUxpc3RbMF0udGVtcEZpbGVVUkwpXHJcblx0XHRcdFx0XHRlLnJlc3VsdC51cmwgPSBmaWxlTGlzdFswXS50ZW1wRmlsZVVSTDtcclxuXHJcblx0XHRcdFx0cmVzb2x2ZShlKVxyXG5cclxuXHRcdFx0XHQvLyDpnZnpu5jmm7TmlrDvvIzlj6rmnIl3Z3TmnIlcclxuXHRcdFx0XHRpZiAoaXNfc2lsZW50bHkpIHtcclxuXHRcdFx0XHRcdHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IGUucmVzdWx0LnVybCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDkuIvovb3lpb3nm7TmjqXlronoo4XvvIzkuIvmrKHlkK/liqjnlJ/mlYhcclxuXHRcdFx0XHRcdFx0XHRcdHBsdXMucnVudGltZS5pbnN0YWxsKHJlcy50ZW1wRmlsZVBhdGgsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yY2U6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICog5o+Q56S65Y2H57qn5LiAXHJcblx0XHRcdFx0ICog5L2/55SoIHVuaS5zaG93TW9kYWxcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHQvLyByZXR1cm4gdXBkYXRlVXNlTW9kYWwoZS5yZXN1bHQpXHJcblxyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIOaPkOekuuWNh+e6p+S6jFxyXG5cdFx0XHRcdCAqIOWumOaWuemAgumFjeeahOWNh+e6p+W8ueeql++8jOWPr+iHquihjOabv+aNoui1hOa6kOmAgumFjVVJ6aOO5qC8XHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFBBQ0tBR0VfSU5GT19LRVksIGUucmVzdWx0KVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC91bmlfbW9kdWxlcy91bmktdXBncmFkZS1jZW50ZXItYXBwL3BhZ2VzL3VwZ3JhZGUtcG9wdXA/bG9jYWxfc3RvcmFnZV9rZXk9JHtQQUNLQUdFX0lORk9fS0VZfWAsXHJcblx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+abtOaWsOW8ueahhui3s+i9rOWksei0pScsIGVycilcclxuXHRcdFx0XHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKFBBQ0tBR0VfSU5GT19LRVkpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fSBlbHNlIGlmIChjb2RlIDwgMCkge1xyXG5cdFx0XHRcdC8vIFRPRE8g5LqR5Ye95pWw5oql6ZSZ5aSE55CGXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKVxyXG5cdFx0XHRcdHJldHVybiByZWplY3QoZSlcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzb2x2ZShlKVxyXG5cdFx0fSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0Ly8gVE9ETyDkupHlh73mlbDmiqXplJnlpITnkIZcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcclxuXHRcdFx0cmVqZWN0KGVycilcclxuXHRcdH0pXHJcblx0fSk7XHJcblxyXG59XHJcblxyXG4vKipcclxuICog5L2/55SoIHVuaS5zaG93TW9kYWwg5Y2H57qnXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVVc2VNb2RhbChwYWNrYWdlSW5mbykge1xyXG5cdGNvbnN0IHtcclxuXHRcdHRpdGxlLCAvLyDmoIfpophcclxuXHRcdGNvbnRlbnRzLCAvLyDljYfnuqflhoXlrrlcclxuXHRcdGlzX21hbmRhdG9yeSwgLy8g5piv5ZCm5by65Yi25pu05pawXHJcblx0XHR1cmwsIC8vIOWuieijheWMheS4i+i9veWcsOWdgFxyXG5cdFx0cGxhdGZvcm0sIC8vIOWuieijheWMheW5s+WPsFxyXG5cdFx0dHlwZSAvLyDlronoo4XljIXnsbvlnotcclxuXHR9ID0gcGFja2FnZUluZm87XHJcblxyXG5cdGxldCBpc1dHVCA9IHR5cGUgPT09ICd3Z3QnXHJcblx0bGV0IGlzaU9TID0gIWlzV0dUID8gcGxhdGZvcm0uaW5jbHVkZXMoJ2lPUycpIDogZmFsc2U7XHJcblx0bGV0IGNvbmZpcm1UZXh0ID0gaXNpT1MgPyAn56uL5Y2z6Lez6L2s5pu05pawJyA6ICfnq4vljbPkuIvovb3mm7TmlrAnXHJcblxyXG5cdHJldHVybiB1bmkuc2hvd01vZGFsKHtcclxuXHRcdHRpdGxlLFxyXG5cdFx0Y29udGVudDogY29udGVudHMsXHJcblx0XHRzaG93Q2FuY2VsOiAhaXNfbWFuZGF0b3J5LFxyXG5cdFx0Y29uZmlybVRleHQsXHJcblx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRpZiAocmVzLmNhbmNlbCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Ly8g5a6J6KOF5YyF5LiL6L29XHJcblx0XHRcdGlmIChpc2lPUykge1xyXG5cdFx0XHRcdHBsdXMucnVudGltZS5vcGVuVVJMKHVybCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHR0aXRsZTogJ+WQjuWPsOS4i+i9veS4reKApuKApicsXHJcblx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyB3Z3Qg5ZKMIOWuieWNk+S4i+i9veabtOaWsFxyXG5cdFx0XHRkb3dubG9hZFRhc2sgPSB1bmkuZG93bmxvYWRGaWxlKHtcclxuXHRcdFx0XHR1cmwsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+S4i+i9veWuieijheWMheWksei0pScsIGVycik7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIOS4i+i9veWlveebtOaOpeWuieijhe+8jOS4i+asoeWQr+WKqOeUn+aViFxyXG5cdFx0XHRcdFx0cGx1cy5ydW50aW1lLmluc3RhbGwocmVzLnRlbXBGaWxlUGF0aCwge1xyXG5cdFx0XHRcdFx0XHRmb3JjZTogZmFsc2VcclxuXHRcdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGlzX21hbmRhdG9yeSkge1xyXG5cdFx0XHRcdFx0XHRcdC8v5pu05paw5a6M6YeN5ZCvYXBwXHJcblx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLnJlc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflronoo4XmiJDlip/mmK/lkKbph43lkK/vvJ8nLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly/mm7TmlrDlrozph43lkK9hcHBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLnJlc3RhcnQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSwgZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmm7TmlrDlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGVyclxyXG5cdFx0XHRcdFx0XHRcdFx0Lm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///85\n");

/***/ }),
/* 86 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/uni_modules/uni-upgrade-center-app/utils/call-check-version.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\nfunction _default() {\n  return new Promise(function (resolve, reject) {\n    plus.runtime.getProperty(plus.runtime.appid, function (widgetInfo) {\n      var data = {\n        action: 'checkVersion',\n        appid: plus.runtime.appid,\n        appVersion: plus.runtime.version,\n        wgtVersion: widgetInfo.version\n      };\n      __f__(\"log\", \"data: \", data, \" at uni_modules/uni-upgrade-center-app/utils/call-check-version.js:11\");\n      uniCloud.callFunction({\n        name: 'uni-upgrade-center',\n        data: data,\n        success: function success(e) {\n          __f__(\"log\", \"e: \", e, \" at uni_modules/uni-upgrade-center-app/utils/call-check-version.js:16\");\n          resolve(e);\n        },\n        fail: function fail(error) {\n          reject(error);\n        }\n      });\n    });\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 58)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXVwZ3JhZGUtY2VudGVyLWFwcC91dGlscy9jYWxsLWNoZWNrLXZlcnNpb24uanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwbHVzIiwicnVudGltZSIsImdldFByb3BlcnR5IiwiYXBwaWQiLCJ3aWRnZXRJbmZvIiwiZGF0YSIsImFjdGlvbiIsImFwcFZlcnNpb24iLCJ2ZXJzaW9uIiwid2d0VmVyc2lvbiIsInVuaUNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwibmFtZSIsInN1Y2Nlc3MiLCJlIiwiZmFpbCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxvQkFBVztFQUV6QixPQUFPLElBQUlBLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUN2Q0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDQyxPQUFPLENBQUNFLEtBQUssRUFBRSxVQUFTQyxVQUFVLEVBQUU7TUFDakUsSUFBTUMsSUFBSSxHQUFHO1FBQ1pDLE1BQU0sRUFBRSxjQUFjO1FBQ3RCSCxLQUFLLEVBQUVILElBQUksQ0FBQ0MsT0FBTyxDQUFDRSxLQUFLO1FBQ3pCSSxVQUFVLEVBQUVQLElBQUksQ0FBQ0MsT0FBTyxDQUFDTyxPQUFPO1FBQ2hDQyxVQUFVLEVBQUVMLFVBQVUsQ0FBQ0k7TUFDeEIsQ0FBQztNQUNELGFBQVksUUFBUSxFQUFDSCxJQUFJO01BQ3pCSyxRQUFRLENBQUNDLFlBQVksQ0FBQztRQUNyQkMsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQlAsSUFBSSxFQUFKQSxJQUFJO1FBQ0pRLE9BQU8sRUFBRSxpQkFBQ0MsQ0FBQyxFQUFLO1VBQ2YsYUFBWSxLQUFLLEVBQUVBLENBQUM7VUFDcEJoQixPQUFPLENBQUNnQixDQUFDLENBQUM7UUFDWCxDQUFDO1FBQ0RDLElBQUksRUFBRSxjQUFDQyxLQUFLLEVBQUs7VUFDaEJqQixNQUFNLENBQUNpQixLQUFLLENBQUM7UUFDZDtNQUNELENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQVNILEMiLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsIGZ1bmN0aW9uKHdpZGdldEluZm8pIHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdFx0XHRhY3Rpb246ICdjaGVja1ZlcnNpb24nLFxyXG5cdFx0XHRcdGFwcGlkOiBwbHVzLnJ1bnRpbWUuYXBwaWQsXHJcblx0XHRcdFx0YXBwVmVyc2lvbjogcGx1cy5ydW50aW1lLnZlcnNpb24sXHJcblx0XHRcdFx0d2d0VmVyc2lvbjogd2lkZ2V0SW5mby52ZXJzaW9uXHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coXCJkYXRhOiBcIixkYXRhKTtcclxuXHRcdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0XHRuYW1lOiAndW5pLXVwZ3JhZGUtY2VudGVyJyxcclxuXHRcdFx0XHRkYXRhLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IChlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImU6IFwiLCBlKTtcclxuXHRcdFx0XHRcdHJlc29sdmUoZSlcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///86\n");

/***/ }),
/* 87 */
/*!*****************************************************************!*\
  !*** C:/Users/LENOVO/Desktop/智能监理/v-monitor-app/store/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 21));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 60));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 83));\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    hasLogin: false,\n    isUniverifyLogin: false,\n    loginProvider: \"\",\n    openid: null,\n    testvuex: false,\n    colorIndex: 0,\n    colorList: ['#FF0000', '#00FF00', '#0000FF'],\n    noMatchLeftWindow: true,\n    active: 'componentPage',\n    leftWinActive: '/pages/component/view/view',\n    activeOpen: '',\n    menu: [],\n    univerifyErrorMsg: ''\n  },\n  mutations: {\n    login: function login(state, provider) {\n      state.hasLogin = true;\n      state.loginProvider = provider;\n    },\n    logout: function logout(state) {\n      state.hasLogin = false;\n      state.openid = null;\n    },\n    setOpenid: function setOpenid(state, openid) {\n      state.openid = openid;\n    },\n    setTestTrue: function setTestTrue(state) {\n      state.testvuex = true;\n    },\n    setTestFalse: function setTestFalse(state) {\n      state.testvuex = false;\n    },\n    setColorIndex: function setColorIndex(state, index) {\n      state.colorIndex = index;\n    },\n    setMatchLeftWindow: function setMatchLeftWindow(state, matchLeftWindow) {\n      state.noMatchLeftWindow = !matchLeftWindow;\n    },\n    setActive: function setActive(state, tabPage) {\n      state.active = tabPage;\n    },\n    setLeftWinActive: function setLeftWinActive(state, leftWinActive) {\n      state.leftWinActive = leftWinActive;\n    },\n    setActiveOpen: function setActiveOpen(state, activeOpen) {\n      state.activeOpen = activeOpen;\n    },\n    setMenu: function setMenu(state, menu) {\n      state.menu = menu;\n    },\n    setUniverifyLogin: function setUniverifyLogin(state, payload) {\n      typeof payload !== 'boolean' ? payload = !!payload : '';\n      state.isUniverifyLogin = payload;\n    },\n    setUniverifyErrorMsg: function setUniverifyErrorMsg(state) {\n      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      state.univerifyErrorMsg = payload;\n    }\n  },\n  getters: {\n    currentColor: function currentColor(state) {\n      return state.colorList[state.colorIndex];\n    }\n  },\n  actions: {\n    // lazy loading openid\n    getUserOpenId: function () {\n      var _getUserOpenId = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {\n        var commit, state;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                commit = _ref.commit, state = _ref.state;\n                _context.next = 3;\n                return new Promise(function (resolve, reject) {\n                  if (state.openid) {\n                    resolve(state.openid);\n                  } else {\n                    uni.login({\n                      success: function success(data) {\n                        commit('login');\n                        setTimeout(function () {\n                          //模拟异步请求服务器获取 openid\n                          var openid = '123456789';\n                          __f__(\"log\", 'uni.request mock openid[' + openid + ']', \" at store/index.js:91\");\n                          commit('setOpenid', openid);\n                          resolve(openid);\n                        }, 1000);\n                      },\n                      fail: function fail(err) {\n                        __f__(\"log\", 'uni.login 接口调用失败，将无法正常使用开放接口等服务', err, \" at store/index.js:97\");\n                        reject(err);\n                      }\n                    });\n                  }\n                });\n              case 3:\n                return _context.abrupt(\"return\", _context.sent);\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      function getUserOpenId(_x) {\n        return _getUserOpenId.apply(this, arguments);\n      }\n      return getUserOpenId;\n    }(),\n    getPhoneNumber: function getPhoneNumber(_ref2, univerifyInfo) {\n      var commit = _ref2.commit;\n      return new Promise(function (resolve, reject) {\n        uni.request({\n          url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',\n          method: 'POST',\n          data: univerifyInfo,\n          success: function success(res) {\n            var data = res.data;\n            if (data.success) {\n              resolve(data.phoneNumber);\n            } else {\n              reject(res);\n            }\n          },\n          fail: function fail(err) {\n            reject(res);\n          }\n        });\n      });\n    }\n  }\n});\nvar _default = store;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImhhc0xvZ2luIiwiaXNVbml2ZXJpZnlMb2dpbiIsImxvZ2luUHJvdmlkZXIiLCJvcGVuaWQiLCJ0ZXN0dnVleCIsImNvbG9ySW5kZXgiLCJjb2xvckxpc3QiLCJub01hdGNoTGVmdFdpbmRvdyIsImFjdGl2ZSIsImxlZnRXaW5BY3RpdmUiLCJhY3RpdmVPcGVuIiwibWVudSIsInVuaXZlcmlmeUVycm9yTXNnIiwibXV0YXRpb25zIiwibG9naW4iLCJwcm92aWRlciIsImxvZ291dCIsInNldE9wZW5pZCIsInNldFRlc3RUcnVlIiwic2V0VGVzdEZhbHNlIiwic2V0Q29sb3JJbmRleCIsImluZGV4Iiwic2V0TWF0Y2hMZWZ0V2luZG93IiwibWF0Y2hMZWZ0V2luZG93Iiwic2V0QWN0aXZlIiwidGFiUGFnZSIsInNldExlZnRXaW5BY3RpdmUiLCJzZXRBY3RpdmVPcGVuIiwic2V0TWVudSIsInNldFVuaXZlcmlmeUxvZ2luIiwicGF5bG9hZCIsInNldFVuaXZlcmlmeUVycm9yTXNnIiwiZ2V0dGVycyIsImN1cnJlbnRDb2xvciIsImFjdGlvbnMiLCJnZXRVc2VyT3BlbklkIiwiY29tbWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bmkiLCJzdWNjZXNzIiwiZGF0YSIsInNldFRpbWVvdXQiLCJmYWlsIiwiZXJyIiwiZ2V0UGhvbmVOdW1iZXIiLCJ1bml2ZXJpZnlJbmZvIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInJlcyIsInBob25lTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0FBLFlBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxhQUFJLENBQUM7QUFDYixJQUFNQyxLQUFLLEdBQUcsSUFBSUQsYUFBSSxDQUFDRSxLQUFLLENBQUM7RUFPNUJDLEtBQUssRUFBRTtJQUNO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LGFBQWE7VUFDbkJOLE9BQU8sRUFBRSxpQkFBQ1UsR0FBRyxFQUFLO1lBQ2pCLElBQU1ULElBQUksR0FBR1MsR0FBRyxDQUFDVCxJQUFJO1lBQ3JCLElBQUlBLElBQUksQ0FBQ0QsT0FBTyxFQUFFO2NBQ2pCSCxPQUFPLENBQUNJLElBQUksQ0FBQ1UsV0FBVyxDQUFDO1lBQzFCLENBQUMsTUFBTTtjQUNOYixNQUFNLENBQUNZLEdBQUcsQ0FBQztZQUNaO1VBRUQsQ0FBQztVQUNEUCxJQUFJLEVBQUUsY0FBQ0MsR0FBRyxFQUFLO1lBQ2ROLE1BQU0sQ0FBQ1ksR0FBRyxDQUFDO1VBQ1o7UUFDRCxDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7SUFDSDtFQUNEO0FBQ0QsQ0FBQyxDQUFDO0FBQUEsZUFFYXRELEtBQUs7QUFBQSwyQiIsImZpbGUiOiI4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuVnVlLnVzZShWdWV4KVxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRzdGF0ZToge1xyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0aXNVbml2ZXJpZnlMb2dpbjogZmFsc2UsXHJcblx0XHRsb2dpblByb3ZpZGVyOiBcIlwiLFxyXG5cdFx0b3BlbmlkOiBudWxsLFxyXG5cdFx0dGVzdHZ1ZXg6IGZhbHNlLFxyXG5cdFx0Y29sb3JJbmRleDogMCxcclxuXHRcdGNvbG9yTGlzdDogWycjRkYwMDAwJywgJyMwMEZGMDAnLCAnIzAwMDBGRiddLFxyXG5cdFx0bm9NYXRjaExlZnRXaW5kb3c6IHRydWUsXHJcblx0XHRhY3RpdmU6ICdjb21wb25lbnRQYWdlJyxcclxuXHRcdGxlZnRXaW5BY3RpdmU6ICcvcGFnZXMvY29tcG9uZW50L3ZpZXcvdmlldycsXHJcblx0XHRhY3RpdmVPcGVuOiAnJyxcclxuXHRcdG1lbnU6IFtdLFxyXG5cdFx0dW5pdmVyaWZ5RXJyb3JNc2c6ICcnXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdGxvZ2luKHN0YXRlLCBwcm92aWRlcikge1xyXG5cdFx0XHRzdGF0ZS5oYXNMb2dpbiA9IHRydWU7XHJcblx0XHRcdHN0YXRlLmxvZ2luUHJvdmlkZXIgPSBwcm92aWRlcjtcclxuXHRcdH0sXHJcblx0XHRsb2dvdXQoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUuaGFzTG9naW4gPSBmYWxzZVxyXG5cdFx0XHRzdGF0ZS5vcGVuaWQgPSBudWxsXHJcblx0XHR9LFxyXG5cdFx0c2V0T3BlbmlkKHN0YXRlLCBvcGVuaWQpIHtcclxuXHRcdFx0c3RhdGUub3BlbmlkID0gb3BlbmlkXHJcblx0XHR9LFxyXG5cdFx0c2V0VGVzdFRydWUoc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUudGVzdHZ1ZXggPSB0cnVlXHJcblx0XHR9LFxyXG5cdFx0c2V0VGVzdEZhbHNlKHN0YXRlKSB7XHJcblx0XHRcdHN0YXRlLnRlc3R2dWV4ID0gZmFsc2VcclxuXHRcdH0sXHJcblx0XHRzZXRDb2xvckluZGV4KHN0YXRlLCBpbmRleCkge1xyXG5cdFx0XHRzdGF0ZS5jb2xvckluZGV4ID0gaW5kZXhcclxuXHRcdH0sXHJcblx0XHRzZXRNYXRjaExlZnRXaW5kb3coc3RhdGUsIG1hdGNoTGVmdFdpbmRvdykge1xyXG5cdFx0XHRzdGF0ZS5ub01hdGNoTGVmdFdpbmRvdyA9ICFtYXRjaExlZnRXaW5kb3dcclxuXHRcdH0sXHJcblx0XHRzZXRBY3RpdmUoc3RhdGUsIHRhYlBhZ2UpIHtcclxuXHRcdFx0c3RhdGUuYWN0aXZlID0gdGFiUGFnZVxyXG5cdFx0fSxcclxuXHRcdHNldExlZnRXaW5BY3RpdmUoc3RhdGUsIGxlZnRXaW5BY3RpdmUpIHtcclxuXHRcdFx0c3RhdGUubGVmdFdpbkFjdGl2ZSA9IGxlZnRXaW5BY3RpdmVcclxuXHRcdH0sXHJcblx0XHRzZXRBY3RpdmVPcGVuKHN0YXRlLCBhY3RpdmVPcGVuKSB7XHJcblx0XHRcdHN0YXRlLmFjdGl2ZU9wZW4gPSBhY3RpdmVPcGVuXHJcblx0XHR9LFxyXG5cdFx0c2V0TWVudShzdGF0ZSwgbWVudSkge1xyXG5cdFx0XHRzdGF0ZS5tZW51ID0gbWVudVxyXG5cdFx0fSxcclxuXHRcdHNldFVuaXZlcmlmeUxvZ2luKHN0YXRlLCBwYXlsb2FkKSB7XHJcblx0XHRcdHR5cGVvZiBwYXlsb2FkICE9PSAnYm9vbGVhbicgPyBwYXlsb2FkID0gISFwYXlsb2FkIDogJyc7XHJcblx0XHRcdHN0YXRlLmlzVW5pdmVyaWZ5TG9naW4gPSBwYXlsb2FkO1xyXG5cdFx0fSxcclxuXHRcdHNldFVuaXZlcmlmeUVycm9yTXNnKHN0YXRlLHBheWxvYWQgPSAnJyl7XHJcblx0XHRcdHN0YXRlLnVuaXZlcmlmeUVycm9yTXNnID0gcGF5bG9hZFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2V0dGVyczoge1xyXG5cdFx0Y3VycmVudENvbG9yKHN0YXRlKSB7XHJcblx0XHRcdHJldHVybiBzdGF0ZS5jb2xvckxpc3Rbc3RhdGUuY29sb3JJbmRleF1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6IHtcclxuXHRcdC8vIGxhenkgbG9hZGluZyBvcGVuaWRcclxuXHRcdGdldFVzZXJPcGVuSWQ6IGFzeW5jIGZ1bmN0aW9uKHtcclxuXHRcdFx0Y29tbWl0LFxyXG5cdFx0XHRzdGF0ZVxyXG5cdFx0fSkge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChzdGF0ZS5vcGVuaWQpIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoc3RhdGUub3BlbmlkKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkubG9naW4oe1xyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbW1pdCgnbG9naW4nKVxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IC8v5qih5ouf5byC5q2l6K+35rGC5pyN5Yqh5Zmo6I635Y+WIG9wZW5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgb3BlbmlkID0gJzEyMzQ1Njc4OSdcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd1bmkucmVxdWVzdCBtb2NrIG9wZW5pZFsnICsgb3BlbmlkICsgJ10nKTtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1pdCgnc2V0T3BlbmlkJywgb3BlbmlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZShvcGVuaWQpXHJcblx0XHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd1bmkubG9naW4g5o6l5Y+j6LCD55So5aSx6LSl77yM5bCG5peg5rOV5q2j5bi45L2/55So5byA5pS+5o6l5Y+j562J5pyN5YqhJywgZXJyKVxyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChlcnIpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGdldFBob25lTnVtYmVyOiBmdW5jdGlvbih7XHJcblx0XHRcdGNvbW1pdFxyXG5cdFx0fSwgdW5pdmVyaWZ5SW5mbykge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vOTdmY2E5ZjItNDFmNi00NDlmLWEzNWUtM2YxMzVkNGMzODc1LmJzcGFwcC5jb20vaHR0cC91bml2ZXJpZnktbG9naW4nLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiB1bml2ZXJpZnlJbmZvLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkYXRhID0gcmVzLmRhdGFcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YS5waG9uZU51bWJlcilcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3QocmVzKVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHJlcylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///87\n");

/***/ })
],[[0,"app-config"]]]);