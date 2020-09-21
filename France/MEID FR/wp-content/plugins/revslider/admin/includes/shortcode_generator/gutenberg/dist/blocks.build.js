/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! exports provided: RevSlider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export RevSlider */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * Block dependencies\n */\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    Button = _wp$components.Button,\n    ToggleControl = _wp$components.ToggleControl,\n    PanelBody = _wp$components.PanelBody;\nvar Component = wp.element.Component;\nvar InspectorControls = wp.blockEditor.InspectorControls;\n\n/**\n * RevSlider Editor Element\n */\n\nvar RevSlider = function (_Component) {\n  _inherits(RevSlider, _Component);\n\n  function RevSlider() {\n    _classCallCheck(this, RevSlider);\n\n    var _this = _possibleConstructorReturn(this, (RevSlider.__proto__ || Object.getPrototypeOf(RevSlider)).apply(this, arguments));\n\n    _this.openDialog = function () {\n      window.revslider_react = _this;\n      RS_SC_WIZARD.openTemplateLibrary();\n    };\n\n    _this.openSliderEditor = function () {\n      window.revslider_react = _this;\n      RS_SC_WIZARD.openSliderEditor();\n    };\n\n    _this.openOptimizer = function () {\n      window.revslider_react = _this;\n      RS_SC_WIZARD.openOptimizer();\n    };\n\n    _this.setSliderAttributes = function (alias) {\n      setAttributes({ text: alias });\n      setAttributes({ sliderImage: _this.state.sliderImage });\n    };\n\n    _this.hideSliderImagePreview = function () {\n      window.revslider_react = _this;\n      window.revslider_react.props.setAttributes({ hideSliderImage: _this.state.hideSliderImage ? false : true });\n      _this.state.hideSliderImage = _this.state.hideSliderImage ? false : true;\n    };\n\n    _this.refreshSliderImage = function () {\n      window.revslider_react = _this;\n      var alias_array = _this.state.text.split('\"');\n      var data;\n\n      RVS.F.ajaxRequest('getSliderImage', { alias: alias_array[1] }, function (response) {\n        if (response.success) {\n          try {\n            data = JSON.stringify(response.image);\n            data = JSON.parse(data);\n          } catch (e) {\n            data = false;\n          }\n\n          if (data) {\n            window.revslider_react.props.setAttributes({ sliderImage: data });\n            window.revslider_react.setState({ sliderImage: data });\n            window.revslider_react.setState({ message: '' });\n            //window.revslider_react.state.sliderImage = window.revslider_react.props.attributes.sliderImage = data;\n            //window.revslider_react.forceUpdate();\n          } else {\n            //console.log('No image');\n            window.revslider_react.setState({ message: __('No Admin Thumb set') });\n            window.setTimeout(function () {\n              window.revslider_react.setState({ message: '' });\n            }, 4000);\n          }\n        } else {\n          window.revslider_react.setState({ message: __('No Admin Thumb set') });\n          window.setTimeout(function () {\n            window.revslider_react.setState({ message: '' });\n          }, 4000);\n        }\n      });\n    };\n\n    var _this$props$attribute = _this.props.attributes,\n        text = _this$props$attribute.text,\n        sliderTitle = _this$props$attribute.sliderTitle,\n        modal = _this$props$attribute.modal,\n        sliderImage = _this$props$attribute.sliderImage,\n        hideSliderImage = _this$props$attribute.hideSliderImage;\n\n    _this.state = {\n      text: text,\n      sliderTitle: sliderTitle,\n      modal: modal,\n      sliderImage: sliderImage,\n      hideSliderImage: hideSliderImage,\n      message: ''\n    };\n    return _this;\n  }\n\n  _createClass(RevSlider, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      if (!this.props.attributes.text && wp.data.select('core/editor').hasChangedContent()) {\n        window.revslider_react = this;\n        //this.props.attributes.checked = true;\n        RS_SC_WIZARD.openTemplateLibrary();\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          _props$attributes = _props.attributes,\n          text = _props$attributes.text,\n          sliderTitle = _props$attributes.sliderTitle,\n          sliderImage = _props$attributes.sliderImage,\n          modal = _props$attributes.modal,\n          setAttributes = _props.setAttributes;\n\n\n      window.revslider_react = this;\n\n      return [wp.element.createElement(\n        InspectorControls,\n        null,\n        wp.element.createElement(\n          PanelBody,\n          { title: __('Admin Thumb'), initialOpen: true },\n          wp.element.createElement(\n            'div',\n            { className: 'showHideButtons' },\n            wp.element.createElement(\n              Button,\n              {\n                isDefault: true,\n                onClick: this.refreshSliderImage,\n                className: 'hideSilderImage'\n              },\n              this.state.sliderImage ? 'cached' : 'insert_photo'\n            ),\n            wp.element.createElement(\n              'span',\n              null,\n              this.state.sliderImage ? __('Refresh Thumb') : __('Load Thumb')\n            )\n          ),\n          wp.element.createElement(\n            'div',\n            { className: 'sliderImageMessage' },\n            this.state.message\n          ),\n          this.state.sliderImage && wp.element.createElement(\n            'div',\n            { className: 'showHideButtons' },\n            wp.element.createElement(\n              Button,\n              {\n                isDefault: true,\n                onClick: this.hideSliderImagePreview,\n                className: 'hideSilderImage'\n              },\n              !this.state.hideSliderImage ? 'visibility_off' : 'visibility'\n            ),\n            wp.element.createElement(\n              'span',\n              null,\n              this.state.hideSliderImage ? __('Show Thumb') : __('Hide Thumb')\n            )\n          )\n        ),\n        wp.element.createElement(\n          PanelBody,\n          { title: __('Optimization'), initialOpen: true },\n          wp.element.createElement(\n            'div',\n            { className: 'optimizerButtons' },\n            wp.element.createElement(\n              Button,\n              {\n                isDefault: true,\n                onClick: this.openOptimizer,\n                className: 'optimizerOpen'\n              },\n              'flash_on'\n            ),\n            wp.element.createElement(\n              'span',\n              null,\n              'Optimize File Sizes'\n            )\n          )\n        )\n      ), wp.element.createElement(\n        'div',\n        { className: 'revslider_block', 'data-modal': this.state.modal },\n        wp.element.createElement(\n          'div',\n          { 'class': 'sliderBar' },\n          wp.element.createElement(\n            'span',\n            null,\n            this.state.sliderTitle,\n            '\\xA0'\n          ),\n          wp.element.createElement(TextControl, {\n            className: 'slider_slug',\n            value: this.state.text,\n            onChange: function onChange(text) {\n              return setSliderAttributes(_this2.state.text);\n            }\n          }),\n          wp.element.createElement(\n            Button,\n            {\n              isDefault: true,\n              onClick: this.openSliderEditor,\n              className: 'slider_editor_button'\n            },\n            'edit'\n          ),\n          wp.element.createElement(\n            Button,\n            {\n              isDefault: true,\n              onClick: this.openDialog,\n              className: 'slider_edit_button'\n            },\n            'Select Module'\n          )\n        ),\n        this.state.sliderImage && !this.state.hideSliderImage && wp.element.createElement(\n          'div',\n          { className: 'sliderImage' },\n          wp.element.createElement('div', { style: { backgroundImage: 'url(' + this.state.sliderImage + ')' } })\n        )\n      )];\n    }\n  }]);\n\n  return RevSlider;\n}(Component);\n\n/**\n * Register block\n */\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('themepunch/revslider', {\n  title: __('Slider Revolution', 'revslider'),\n  description: __('Add your Slider Revolution.', 'revslider'),\n  category: 'themepunch',\n  icon: {\n    src: 'update',\n    background: 'rgb(94, 53, 177)',\n    color: 'white',\n    viewbox: \"0 0 24 24\"\n  },\n  keywords: [__('Banner', 'revslider'), __('CTA', 'revslider'), __('Slider', 'revslider')],\n  attributes: {\n    checked: {\n      type: 'boolean',\n      default: false\n    },\n    modal: {\n      type: 'boolean',\n      default: false\n    },\n    text: {\n      selector: '.revslider',\n      type: 'string',\n      source: 'text'\n    },\n    sliderTitle: {\n      selector: '.revslider',\n      type: 'string',\n      source: 'attribute',\n      attribute: 'data-slidertitle'\n    },\n    sliderImage: {\n      type: 'string'\n    },\n    hideSliderImage: {\n      boolean: false\n    }\n  },\n  edit: function edit(props) {\n    var setAttributes = props.setAttributes;\n\n    return wp.element.createElement(\n      'div',\n      null,\n      wp.element.createElement(RevSlider, Object.assign({ setAttributes: setAttributes }, props))\n    );\n  },\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        text = _props$attributes2.text,\n        sliderTitle = _props$attributes2.sliderTitle,\n        modal = _props$attributes2.modal;\n\n    return wp.element.createElement(\n      'div',\n      { className: 'revslider', 'data-modal': modal, 'data-slidertitle': sliderTitle },\n      text\n    );\n  },\n  deprecated: [{\n    attributes: {\n      checked: {\n        type: 'boolean',\n        default: false\n      },\n      text: {\n        selector: '.revslider',\n        type: 'string',\n        source: 'text'\n      },\n      sliderTitle: {\n        selector: '.revslider',\n        type: 'string',\n        source: 'attribute',\n        attribute: 'data-slidertitle'\n      }\n    },\n    save: function save(props) {\n      return wp.element.createElement(\n        'div',\n        { className: 'revslider', 'data-slidertitle': props.attributes.sliderTitle },\n        props.attributes.text\n      );\n    }\n  }]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBCbG9jayBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgVG9nZ2xlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLlRvZ2dsZUNvbnRyb2wsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5O1xudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50O1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tFZGl0b3IuSW5zcGVjdG9yQ29udHJvbHM7XG5cbi8qKlxuICogUmV2U2xpZGVyIEVkaXRvciBFbGVtZW50XG4gKi9cblxuZXhwb3J0IHZhciBSZXZTbGlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmV2U2xpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXZTbGlkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJldlNsaWRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmV2U2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmV2U2xpZGVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5vcGVuRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdCA9IF90aGlzO1xuICAgICAgUlNfU0NfV0laQVJELm9wZW5UZW1wbGF0ZUxpYnJhcnkoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub3BlblNsaWRlckVkaXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZXZzbGlkZXJfcmVhY3QgPSBfdGhpcztcbiAgICAgIFJTX1NDX1dJWkFSRC5vcGVuU2xpZGVyRWRpdG9yKCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9wZW5PcHRpbWl6ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cucmV2c2xpZGVyX3JlYWN0ID0gX3RoaXM7XG4gICAgICBSU19TQ19XSVpBUkQub3Blbk9wdGltaXplcigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRTbGlkZXJBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgdGV4dDogYWxpYXMgfSk7XG4gICAgICBzZXRBdHRyaWJ1dGVzKHsgc2xpZGVySW1hZ2U6IF90aGlzLnN0YXRlLnNsaWRlckltYWdlIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oaWRlU2xpZGVySW1hZ2VQcmV2aWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdCA9IF90aGlzO1xuICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5wcm9wcy5zZXRBdHRyaWJ1dGVzKHsgaGlkZVNsaWRlckltYWdlOiBfdGhpcy5zdGF0ZS5oaWRlU2xpZGVySW1hZ2UgPyBmYWxzZSA6IHRydWUgfSk7XG4gICAgICBfdGhpcy5zdGF0ZS5oaWRlU2xpZGVySW1hZ2UgPSBfdGhpcy5zdGF0ZS5oaWRlU2xpZGVySW1hZ2UgPyBmYWxzZSA6IHRydWU7XG4gICAgfTtcblxuICAgIF90aGlzLnJlZnJlc2hTbGlkZXJJbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZXZzbGlkZXJfcmVhY3QgPSBfdGhpcztcbiAgICAgIHZhciBhbGlhc19hcnJheSA9IF90aGlzLnN0YXRlLnRleHQuc3BsaXQoJ1wiJyk7XG4gICAgICB2YXIgZGF0YTtcblxuICAgICAgUlZTLkYuYWpheFJlcXVlc3QoJ2dldFNsaWRlckltYWdlJywgeyBhbGlhczogYWxpYXNfYXJyYXlbMV0gfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5pbWFnZSk7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkYXRhID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXZzbGlkZXJfcmVhY3QucHJvcHMuc2V0QXR0cmlidXRlcyh7IHNsaWRlckltYWdlOiBkYXRhIH0pO1xuICAgICAgICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5zZXRTdGF0ZSh7IHNsaWRlckltYWdlOiBkYXRhIH0pO1xuICAgICAgICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5zZXRTdGF0ZSh7IG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAgICAgLy93aW5kb3cucmV2c2xpZGVyX3JlYWN0LnN0YXRlLnNsaWRlckltYWdlID0gd2luZG93LnJldnNsaWRlcl9yZWFjdC5wcm9wcy5hdHRyaWJ1dGVzLnNsaWRlckltYWdlID0gZGF0YTtcbiAgICAgICAgICAgIC8vd2luZG93LnJldnNsaWRlcl9yZWFjdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdObyBpbWFnZScpO1xuICAgICAgICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5zZXRTdGF0ZSh7IG1lc3NhZ2U6IF9fKCdObyBBZG1pbiBUaHVtYiBzZXQnKSB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5zZXRTdGF0ZSh7IG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5yZXZzbGlkZXJfcmVhY3Quc2V0U3RhdGUoeyBtZXNzYWdlOiBfXygnTm8gQWRtaW4gVGh1bWIgc2V0JykgfSk7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93LnJldnNsaWRlcl9yZWFjdC5zZXRTdGF0ZSh7IG1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAgIH0sIDQwMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIF90aGlzJHByb3BzJGF0dHJpYnV0ZSA9IF90aGlzLnByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIHRleHQgPSBfdGhpcyRwcm9wcyRhdHRyaWJ1dGUudGV4dCxcbiAgICAgICAgc2xpZGVyVGl0bGUgPSBfdGhpcyRwcm9wcyRhdHRyaWJ1dGUuc2xpZGVyVGl0bGUsXG4gICAgICAgIG1vZGFsID0gX3RoaXMkcHJvcHMkYXR0cmlidXRlLm1vZGFsLFxuICAgICAgICBzbGlkZXJJbWFnZSA9IF90aGlzJHByb3BzJGF0dHJpYnV0ZS5zbGlkZXJJbWFnZSxcbiAgICAgICAgaGlkZVNsaWRlckltYWdlID0gX3RoaXMkcHJvcHMkYXR0cmlidXRlLmhpZGVTbGlkZXJJbWFnZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dDogdGV4dCxcbiAgICAgIHNsaWRlclRpdGxlOiBzbGlkZXJUaXRsZSxcbiAgICAgIG1vZGFsOiBtb2RhbCxcbiAgICAgIHNsaWRlckltYWdlOiBzbGlkZXJJbWFnZSxcbiAgICAgIGhpZGVTbGlkZXJJbWFnZTogaGlkZVNsaWRlckltYWdlLFxuICAgICAgbWVzc2FnZTogJydcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXZTbGlkZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnRleHQgJiYgd3AuZGF0YS5zZWxlY3QoJ2NvcmUvZWRpdG9yJykuaGFzQ2hhbmdlZENvbnRlbnQoKSkge1xuICAgICAgICB3aW5kb3cucmV2c2xpZGVyX3JlYWN0ID0gdGhpcztcbiAgICAgICAgLy90aGlzLnByb3BzLmF0dHJpYnV0ZXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIFJTX1NDX1dJWkFSRC5vcGVuVGVtcGxhdGVMaWJyYXJ5KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIF9wcm9wcyRhdHRyaWJ1dGVzID0gX3Byb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgdGV4dCA9IF9wcm9wcyRhdHRyaWJ1dGVzLnRleHQsXG4gICAgICAgICAgc2xpZGVyVGl0bGUgPSBfcHJvcHMkYXR0cmlidXRlcy5zbGlkZXJUaXRsZSxcbiAgICAgICAgICBzbGlkZXJJbWFnZSA9IF9wcm9wcyRhdHRyaWJ1dGVzLnNsaWRlckltYWdlLFxuICAgICAgICAgIG1vZGFsID0gX3Byb3BzJGF0dHJpYnV0ZXMubW9kYWwsXG4gICAgICAgICAgc2V0QXR0cmlidXRlcyA9IF9wcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICAgIHdpbmRvdy5yZXZzbGlkZXJfcmVhY3QgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAgeyB0aXRsZTogX18oJ0FkbWluIFRodW1iJyksIGluaXRpYWxPcGVuOiB0cnVlIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3Nob3dIaWRlQnV0dG9ucycgfSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMucmVmcmVzaFNsaWRlckltYWdlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2hpZGVTaWxkZXJJbWFnZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXJJbWFnZSA/ICdjYWNoZWQnIDogJ2luc2VydF9waG90bydcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXJJbWFnZSA/IF9fKCdSZWZyZXNoIFRodW1iJykgOiBfXygnTG9hZCBUaHVtYicpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc2xpZGVySW1hZ2VNZXNzYWdlJyB9LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZXNzYWdlXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlckltYWdlICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzaG93SGlkZUJ1dHRvbnMnIH0sXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhpZGVTbGlkZXJJbWFnZVByZXZpZXcsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnaGlkZVNpbGRlckltYWdlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5oaWRlU2xpZGVySW1hZ2UgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGlkZVNsaWRlckltYWdlID8gX18oJ1Nob3cgVGh1bWInKSA6IF9fKCdIaWRlIFRodW1iJylcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAgeyB0aXRsZTogX18oJ09wdGltaXphdGlvbicpLCBpbml0aWFsT3BlbjogdHJ1ZSB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdvcHRpbWl6ZXJCdXR0b25zJyB9LFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5vcGVuT3B0aW1pemVyLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ29wdGltaXplck9wZW4nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdmbGFzaF9vbidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgJ09wdGltaXplIEZpbGUgU2l6ZXMnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ3JldnNsaWRlcl9ibG9jaycsICdkYXRhLW1vZGFsJzogdGhpcy5zdGF0ZS5tb2RhbCB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiAnc2xpZGVyQmFyJyB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNsaWRlclRpdGxlLFxuICAgICAgICAgICAgJ1xceEEwJ1xuICAgICAgICAgICksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzbGlkZXJfc2x1ZycsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS50ZXh0LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHRleHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNldFNsaWRlckF0dHJpYnV0ZXMoX3RoaXMyLnN0YXRlLnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaXNEZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm9wZW5TbGlkZXJFZGl0b3IsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NsaWRlcl9lZGl0b3JfYnV0dG9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdlZGl0J1xuICAgICAgICAgICksXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub3BlbkRpYWxvZyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc2xpZGVyX2VkaXRfYnV0dG9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdTZWxlY3QgTW9kdWxlJ1xuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5zdGF0ZS5zbGlkZXJJbWFnZSAmJiAhdGhpcy5zdGF0ZS5oaWRlU2xpZGVySW1hZ2UgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnc2xpZGVySW1hZ2UnIH0sXG4gICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiB7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgdGhpcy5zdGF0ZS5zbGlkZXJJbWFnZSArICcpJyB9IH0pXG4gICAgICAgIClcbiAgICAgICldO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZXZTbGlkZXI7XG59KENvbXBvbmVudCk7XG5cbi8qKlxuICogUmVnaXN0ZXIgYmxvY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoJ3RoZW1lcHVuY2gvcmV2c2xpZGVyJywge1xuICB0aXRsZTogX18oJ1NsaWRlciBSZXZvbHV0aW9uJywgJ3JldnNsaWRlcicpLFxuICBkZXNjcmlwdGlvbjogX18oJ0FkZCB5b3VyIFNsaWRlciBSZXZvbHV0aW9uLicsICdyZXZzbGlkZXInKSxcbiAgY2F0ZWdvcnk6ICd0aGVtZXB1bmNoJyxcbiAgaWNvbjoge1xuICAgIHNyYzogJ3VwZGF0ZScsXG4gICAgYmFja2dyb3VuZDogJ3JnYig5NCwgNTMsIDE3NyknLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHZpZXdib3g6IFwiMCAwIDI0IDI0XCJcbiAgfSxcbiAga2V5d29yZHM6IFtfXygnQmFubmVyJywgJ3JldnNsaWRlcicpLCBfXygnQ1RBJywgJ3JldnNsaWRlcicpLCBfXygnU2xpZGVyJywgJ3JldnNsaWRlcicpXSxcbiAgYXR0cmlidXRlczoge1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHNlbGVjdG9yOiAnLnJldnNsaWRlcicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNvdXJjZTogJ3RleHQnXG4gICAgfSxcbiAgICBzbGlkZXJUaXRsZToge1xuICAgICAgc2VsZWN0b3I6ICcucmV2c2xpZGVyJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcbiAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtc2xpZGVydGl0bGUnXG4gICAgfSxcbiAgICBzbGlkZXJJbWFnZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIGhpZGVTbGlkZXJJbWFnZToge1xuICAgICAgYm9vbGVhbjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICB2YXIgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJldlNsaWRlciwgT2JqZWN0LmFzc2lnbih7IHNldEF0dHJpYnV0ZXM6IHNldEF0dHJpYnV0ZXMgfSwgcHJvcHMpKVxuICAgICk7XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgdGV4dCA9IF9wcm9wcyRhdHRyaWJ1dGVzMi50ZXh0LFxuICAgICAgICBzbGlkZXJUaXRsZSA9IF9wcm9wcyRhdHRyaWJ1dGVzMi5zbGlkZXJUaXRsZSxcbiAgICAgICAgbW9kYWwgPSBfcHJvcHMkYXR0cmlidXRlczIubW9kYWw7XG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3JldnNsaWRlcicsICdkYXRhLW1vZGFsJzogbW9kYWwsICdkYXRhLXNsaWRlcnRpdGxlJzogc2xpZGVyVGl0bGUgfSxcbiAgICAgIHRleHRcbiAgICApO1xuICB9LFxuICBkZXByZWNhdGVkOiBbe1xuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgc2VsZWN0b3I6ICcucmV2c2xpZGVyJyxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHNvdXJjZTogJ3RleHQnXG4gICAgICB9LFxuICAgICAgc2xpZGVyVGl0bGU6IHtcbiAgICAgICAgc2VsZWN0b3I6ICcucmV2c2xpZGVyJyxcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHNvdXJjZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGF0dHJpYnV0ZTogJ2RhdGEtc2xpZGVydGl0bGUnXG4gICAgICB9XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG4gICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdyZXZzbGlkZXInLCAnZGF0YS1zbGlkZXJ0aXRsZSc6IHByb3BzLmF0dHJpYnV0ZXMuc2xpZGVyVGl0bGUgfSxcbiAgICAgICAgcHJvcHMuYXR0cmlidXRlcy50ZXh0XG4gICAgICApO1xuICAgIH1cbiAgfV1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);