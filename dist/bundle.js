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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.game-info {\n  width: 350px;\n  height: 350px;\n  padding: 20px 0;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-color: #add8e6;\n  font-family: \"Lalezar\";\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n}\n\n.goback {\n  color: #fff;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.goback:hover {\n  font-size: 35px;\n}\n\n#game-over {\n  width: 460px;\n  height: 350px;\n  display: none;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.exp:hover {\n  font-size: 17px;\n}\n\n.cat-logo {\n  width: 25px;\n  height: 25px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  align-items: center;\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.gonext {\n  color: #fff;\n  font-size: 22px;\n  cursor: pointer;\n}\n\n.gonext:hover {\n  font-size: 25px;\n}\n\n#win {\n  display: none;\n  width: 450px;\n  background-color: #fff;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;;EAEb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,4BAA4B;EAC5B,wBAAwB;AAC1B","sourcesContent":["body {\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.game-info {\n  width: 350px;\n  height: 350px;\n  padding: 20px 0;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  background-color: #add8e6;\n  font-family: \"Lalezar\";\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n}\n\n.goback {\n  color: #fff;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.goback:hover {\n  font-size: 35px;\n}\n\n#game-over {\n  width: 460px;\n  height: 350px;\n  display: none;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.exp:hover {\n  font-size: 17px;\n}\n\n.cat-logo {\n  width: 25px;\n  height: 25px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  align-items: center;\n  font-size: 30px;\n  margin-bottom: 10px;\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.gonext {\n  color: #fff;\n  font-size: 22px;\n  cursor: pointer;\n}\n\n.gonext:hover {\n  font-size: 25px;\n}\n\n#win {\n  display: none;\n  width: 450px;\n  background-color: #fff;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prop */ "./src/prop.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _util_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/data */ "./src/util/data.js");
/* harmony import */ var _util_randomGeneration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/randomGeneration */ "./src/util/randomGeneration.js");
/* harmony import */ var _util_generateObstacle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/generateObstacle */ "./src/util/generateObstacle.js");
/* harmony import */ var _util_generateResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/generateResult */ "./src/util/generateResult.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Board = function Board() {
  var _this = this;

  _classCallCheck(this, Board);

  _defineProperty(this, "canvas", new _canvas__WEBPACK_IMPORTED_MODULE_1__["Canvas"]());

  _defineProperty(this, "frameX", 0);

  _defineProperty(this, "frameY", 0);

  _defineProperty(this, "rightPressed", false);

  _defineProperty(this, "leftPressed", false);

  _defineProperty(this, "upPressed", false);

  _defineProperty(this, "downPressed", false);

  _defineProperty(this, "spacePressed", false);

  _defineProperty(this, "cat", void 0);

  _defineProperty(this, "background", new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](0, 0, "./image/cat/pantry.png", 0, 0));

  _defineProperty(this, "resultCat", Object(_util_generateResult__WEBPACK_IMPORTED_MODULE_5__["generateResultProps"])());

  _defineProperty(this, "foods", {});

  _defineProperty(this, "obstacle", new Set());

  _defineProperty(this, "miss", false);

  _defineProperty(this, "pass", false);

  _defineProperty(this, "initItems", function (round) {
    return new Promise(function (resolve, reject) {
      _this.miss = false;
      _this.pass = false;
      _this.cat = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, "./image/fatcat.png", 63, 335, _this.frameX, _this.frameY);
      _this.foods = Object(_util_randomGeneration__WEBPACK_IMPORTED_MODULE_3__["generateRandomProps"])(round, _util_data__WEBPACK_IMPORTED_MODULE_2__["foodUrls"]);
      _this.obstacle = Object(_util_generateObstacle__WEBPACK_IMPORTED_MODULE_4__["generateObstacle"])(round + 2, Object.keys(_this.foods));
      resolve(1);
    });
  });

  _defineProperty(this, "drawBoard", function () {
    _this.canvas.drawProps(_this.foods);
  });

  _defineProperty(this, "gameOver", function () {
    _this.canvas.clear();
  });

  _defineProperty(this, "beforeGameStart", function (round, tries, level) {
    return new Promise(function (resolve, reject) {
      var start = Date.now();

      var backgroundLoop = function backgroundLoop() {
        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(round);

        _this.canvas.drawLeftTriesText(tries);

        _this.canvas.drawCurrentLevel(level);

        if (Date.now() - start < 1200) {
          requestAnimationFrame(backgroundLoop);
        } else {
          resolve();
        }
      };

      backgroundLoop();
    });
  });

  _defineProperty(this, "showObstacle", function (round, tries, level) {
    return new Promise(function (resolve, reject) {
      var idx = 0;
      var keys = Array.from(_this.obstacle);
      var end = keys.length;
      var start = Date.now();

      var obstacleLoop = function obstacleLoop() {
        _this.canvas.clear();

        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(round);

        _this.canvas.drawLeftTriesText(tries);

        _this.canvas.drawCurrentLevel(level);

        _this.foods[keys[idx]].drawObs();

        if (idx < end && Date.now() - start < 800 - (level - 1) * 10) {
          requestAnimationFrame(obstacleLoop);
        } else if (idx < end - 1) {
          idx++;
          start = Date.now();
          requestAnimationFrame(obstacleLoop);
        } else {
          resolve();
        }
      };

      obstacleLoop();
    });
  });

  _defineProperty(this, "roundResult", function () {
    return new Promise(function (resolve, reject) {
      var render;

      if (_this.miss) {
        render = "miss";
      } else {
        render = "pass";
      }

      var start = Date.now();

      var loop = function loop() {
        _this.canvas.clear();

        _this.canvas.drawCanvas("white");

        _this.canvas.drawMissText(_this.miss);

        _this.resultCat[render][0].draw();

        if (Date.now() - start < 1500) {
          requestAnimationFrame(loop);
        } else {
          resolve({
            miss: render === "miss" ? -1 : 0
          });
        }
      };

      loop();
    });
  });

  _defineProperty(this, "deleteItem", function () {
    var foodX;
    var foodY;

    for (var key in _this.foods) {
      var food = _this.foods[key];
      foodX = food.x;
      foodY = food.y;

      if (foodX - 20 <= _this.cat.x + 3 && foodX + food.width >= _this.cat.x + _this.cat.width - 3 && foodY - 20 <= _this.cat.y + 3 && foodY + food.height >= _this.cat.y + _this.cat.height - 3 && _this.spacePressed) {
        if (_this.obstacle.has(key)) {
          delete _this.foods[key];

          _this.obstacle["delete"](key);

          _this.spacePressed = false;
        } else {
          _this.miss = true;
        }
      }
    }
  });

  _defineProperty(this, "animate", function () {
    return new Promise(function (resolve, reject) {
      var animateLoop = function animateLoop() {
        _this.canvas.clear();

        _this.background.draw();

        _this.drawBoard();

        _this.positionChange(_this.cat);

        _this.spritePositionUpdate();

        _this.deleteItem();

        _this.isEqual(_this.obstacle);

        _this.cat.draw();

        if (!_this.miss && !_this.pass) {
          requestAnimationFrame(animateLoop);
        } else {
          resolve("3");
        }
      };

      animateLoop();
    });
  });

  _defineProperty(this, "keyUpHandler", function (e) {
    if (e.keyCode === 39) {
      _this.rightPressed = false;
    } else if (e.keyCode === 37) {
      _this.leftPressed = false;
    } else if (e.keyCode === 38) {
      _this.upPressed = false;
    } else if (e.keyCode === 40) {
      _this.downPressed = false;
    } else if (e.keyCode === 32) {
      _this.spacePressed = false;
    }
  });

  _defineProperty(this, "keyDownHandler", function (e) {
    var y = 0;

    if (e.keyCode === 39) {
      _this.rightPressed = true;
    } else if (e.keyCode === 37) {
      _this.leftPressed = true;
    } else if (e.keyCode === 38) {
      _this.upPressed = true;
      y -= 74;
    } else if (e.keyCode === 40) {
      _this.downPressed = true;
      y += 74;
    } else if (e.keyCode === 32) {
      _this.spacePressed = true;
    }

    _this.cat.move(0, y);
  });

  _defineProperty(this, "positionChange", function (prop) {
    var x = 0; // let y = 0;

    if (_this.rightPressed && prop.x < _this.canvas.width - prop.width) {
      x += 3;
    } else if (_this.leftPressed && prop.x > 0) {
      x -= 3;
    } // else if (this.upPressed && prop.y > this.wall.width - 9) {
    //   y -= 3;
    // } else if (
    //   this.downPressed &&
    //   y < this.canvas.height - prop.width - this.wall.width - 5
    // ) {
    //   y += 3;
    // }


    prop.move(x, 0);
  });

  _defineProperty(this, "spritePositionUpdate", function () {
    if (_this.rightPressed) {
      if (_this.frameX >= 8) {
        _this.frameX = 6;
      } else {
        _this.frameX += 1;
      }
    } else if (_this.leftPressed) {
      if (_this.frameX >= 8) {
        _this.frameX = 6;
      } else {
        _this.frameX += 1;
      }
    } else if (_this.upPressed) {
      if (_this.frameX >= 2) {
        _this.frameX = 0;
      } else {
        _this.frameX += 1;
      }
    } else if (_this.downPressed) {
      if (_this.frameX >= 2) {
        _this.frameX = 0;
      } else {
        _this.frameX += 1;
      }
    }

    _this.cat.changeFrame(_this.frameX, 0);
  });

  _defineProperty(this, "isEqual", function (obstacleSet) {
    if (obstacleSet.size === 0) {
      _this.pass = true;
    }
  });

  window.addEventListener("keydown", this.keyDownHandler, false);
  window.addEventListener("keyup", this.keyUpHandler, false);
};

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = function Canvas() {
  var _this = this;

  _classCallCheck(this, Canvas);

  _defineProperty(this, "canvas", document.getElementById("myCanvas"));

  _defineProperty(this, "ctx", this.canvas.getContext("2d"));

  _defineProperty(this, "width", this.canvas.width);

  _defineProperty(this, "height", this.canvas.height);

  _defineProperty(this, "drawCanvas", function (color) {
    _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);

    _this.ctx.fillStyle = color;

    _this.ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);
  });

  _defineProperty(this, "clear", function () {
    _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
  });

  _defineProperty(this, "decorateCanvas", function (prop) {
    var i = 0;

    while (i < 10) {
      _this.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.height, 0, prop.width, prop.height);

      _this.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.width, _this.canvas.height - prop.height, prop.width, prop.height);

      i++;
    }
  });

  _defineProperty(this, "drawProps", function (props) {
    var i = 0;
    var keys = Object.keys(props);

    while (i < keys.length) {
      var prop = props[keys[i]];
      prop.draw();
      i++;
    }
  });

  _defineProperty(this, "drawText", function (level) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "30px Lalezar";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("Round ".concat(level), _this.canvas.width / 2, 110);

    _this.ctx.fillText("YOU CAN EAT", _this.canvas.width / 2, 150);
  });

  _defineProperty(this, "drawLeftTriesText", function (tries) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "28px Lalezar";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("LIFE ".concat(tries), _this.canvas.width / 2 + 120, 50);
  });

  _defineProperty(this, "drawCurrentLevel", function (level) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "28px Lalezar";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("LEVEL ".concat(level), _this.canvas.width / 2 - 120, 50);
  });

  _defineProperty(this, "drawMissText", function (missLeft) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "30px Lalezar";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("Oops", _this.canvas.width / 2, 110);

    _this.ctx.fillText("* ".concat(missLeft, " Left*"), _this.canvas.width / 2, 110);

    _this.ctx.fillText("YOU CAN EAT", _this.canvas.width / 2, 150);
  });
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Game = function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "level", 1);

  _defineProperty(this, "board", new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]());

  _defineProperty(this, "done", document.getElementById("game-over"));

  _defineProperty(this, "win", document.getElementById("win"));

  _defineProperty(this, "obstacles", new Set());

  _defineProperty(this, "round", 1);

  _defineProperty(this, "tries", 3);

  _defineProperty(this, "currentScore", 0);

  _defineProperty(this, "play", function () {
    if (_this.tries <= 0) {
      _this.board.gameOver();

      _this.tries = 3;
      _this.done.style.display = "flex";
      return;
    } else if (_this.round === 2) {
      _this.board.gameOver();

      _this.level++;
      _this.round = 1;
      _this.win.style.display = "flex";
      return;
    }

    _this.board.initItems(_this.round).then(function (res) {
      return _this.board.beforeGameStart(_this.round, _this.tries, _this.level);
    }).then(function (res) {
      return _this.board.showObstacle(_this.round, _this.tries, _this.level);
    }).then(function (res) {
      return _this.board.animate();
    }).then(function (res) {
      return _this.board.roundResult();
    }).then(function (res) {
      _this.tries += res.miss;
      _this.round += res.miss + 1;

      _this.play();
    });
  });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _introPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introPage */ "./src/introPage.js");



window.onload = function (e) {
  new _introPage__WEBPACK_IMPORTED_MODULE_1__["IntroPage"]();
};

/***/ }),

/***/ "./src/introPage.js":
/*!**************************!*\
  !*** ./src/introPage.js ***!
  \**************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var IntroPage = function IntroPage() {
  var _this = this;

  _classCallCheck(this, IntroPage);

  _defineProperty(this, "aboutButtonHandler", function () {
    _this.about.style.display = "flex";
    _this.gameIntro.style.display = "none";
  });

  _defineProperty(this, "startButtonHandler", function () {
    _this.main.style.display = "flex";
    _this.gameIntro.style.display = "none";
    _this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();

    _this.game.play();
  });

  _defineProperty(this, "backButtonHandler", function () {
    _this.about.style.display = "none";
    _this.gameIntro.style.display = "";
  });

  _defineProperty(this, "backToMainButtonHandler", function () {
    _this.gameIntro.style.display = "flex";
    _this.gameover.style.display = "none";
  });

  _defineProperty(this, "nextButtonHandler", function () {
    _this.main.style.display = "flex";
    _this.win.style.display = "none";

    _this.game.play();
  });

  this.game = null;
  this.main = document.getElementById("main");
  this.about = document.getElementById("about-page");
  this.gameover = document.getElementById("game-over");
  this.win = document.getElementById("win");
  this.gameIntro = document.getElementById("game-intro");
  this.startButton = document.getElementById("start");
  this.aboutButton = document.getElementById("about");
  this.backButton = document.getElementById("back");
  this.backToMainButton = document.getElementById("back-to-main");
  this.nextLevelButton = document.getElementById("next-level");
  main.style.display = "flex";
  this.gameStart = false;
  this.gameover.style.backgroundImage = "url('./image/cat/lose.png')";
  this.win.style.backgroundImage = "url('./image/cat/winner.png')";
  this.aboutButton.addEventListener("click", this.aboutButtonHandler);
  this.startButton.addEventListener("click", this.startButtonHandler);
  this.backButton.addEventListener("click", this.backButtonHandler);
  this.backToMainButton.addEventListener("click", this.backToMainButtonHandler);
  this.nextLevelButton.addEventListener("click", this.nextButtonHandler);
};

/***/ }),

/***/ "./src/prop.js":
/*!*********************!*\
  !*** ./src/prop.js ***!
  \*********************/
/*! exports provided: Prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prop", function() { return Prop; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prop = function Prop(width, height, imageUrl, _x, _y) {
  var _this = this;

  var frameX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var frameY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  _classCallCheck(this, Prop);

  _defineProperty(this, "draw", function () {
    _this.ctx.drawImage(_this.image, _this.frameX, _this.frameY, _this.width, _this.height, _this.x, _this.y, _this.width > _this.canvas.width ? _this.canvas.width : _this.width, _this.height > _this.canvas.height ? _this.canvas.height : _this.height);
  });

  _defineProperty(this, "drawObs", function () {
    _this.ctx.drawImage(_this.image, _this.frameX, _this.frameY, _this.width, _this.height, _this.canvas.width / 2 - 20, _this.canvas.height / 2, _this.width * 1.2, _this.height * 1.2);
  });

  _defineProperty(this, "move", function (x, y) {
    _this.x += x;
    _this.y += y;
  });

  _defineProperty(this, "changeFrame", function (x, y) {
    _this.frameX = x * _this.width;
    _this.frameY = y * _this.height;
  });

  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.x = _x;
  this.y = _y;
  this.frameX = frameX;
  this.frameY = frameY;
  this.image = new Image();
  this.image.addEventListener("load", function () {
    var naturalWidth = _this.image.naturalWidth;
    var naturalHeight = _this.image.naturalHeight;
    _this.width = width > 0 ? width : naturalWidth;
    _this.height = height > 0 ? height : naturalHeight;

    _this.draw();

    _this.drawObs();
  });
  this.image.src = imageUrl;
};

/***/ }),

/***/ "./src/util/data.js":
/*!**************************!*\
  !*** ./src/util/data.js ***!
  \**************************/
/*! exports provided: foodUrls, gameResultImgUrls, positionArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodUrls", function() { return foodUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameResultImgUrls", function() { return gameResultImgUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionArray", function() { return positionArray; });
var foodUrls = ["./image/food/apple.png", "./image/food/banana.png", "./image/food/beer.png", "./image/food/burger.png", "./image/food/cake.png", "./image/food/cherry.png", "./image/food/corn.png", "./image/food/croissant.png", "./image/food/custard.png", "./image/food/dango.png", "./image/food/donut.png", "./image/food/fries.png", "./image/food/grapes.png", "./image/food/ice_cream.png", "./image/food/lemon.png", "./image/food/meat.png", "./image/food/orange.png", "./image/food/peach.png", "./image/food/pear.png", "./image/food/pie.png", "./image/food/pineapple.png", "./image/food/pisha.png", "./image/food/ramen.png", "./image/food/shaved_ice.png", "./image/food/spaghetti.png", "./image/food/strawberry.png", "./image/food/sushi.png", "./image/food/sweet_potato.png"];
var gameResultImgUrls = {
  miss: ["./image/cat/missOne.png", "./image/cat/missTwo.png", "./image/cat/missThree.png"],
  pass: ["./image/cat/passOne.png", "./image/cat/passTwo.png", "./image/cat/passThree.png", "./image/cat/passFour.png", "./image/cat/passFive.png"],
  win: ["./image/cat/winner.png"],
  lose: ["./image/cat/lose.png"]
};
var positionArray = [[73, 46], [73 + 47, 46], [73 + 47 * 2, 46], [73 + 47 * 3, 46], [73 + 47 * 4, 46], [73 + 47 * 5, 46], [73 + 47 * 6, 46], [73 + 310, 46]];

/***/ }),

/***/ "./src/util/generateObstacle.js":
/*!**************************************!*\
  !*** ./src/util/generateObstacle.js ***!
  \**************************************/
/*! exports provided: generateObstacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateObstacle", function() { return generateObstacle; });
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prop */ "./src/prop.js");

/**
 *
 * @param {*} currentLevel
 * @param {*} foodKeys
 *
 * randomly choose obstacles out of the keys of chosen food object
 */

function generateObstacle(currentLevel, foodKeys) {
  var obstacleKeys = new Set();

  while (obstacleKeys.size < currentLevel) {
    var randomKey = Math.floor(Math.random() * foodKeys.length);
    obstacleKeys.add(foodKeys[randomKey]);
  }

  return obstacleKeys;
}

/***/ }),

/***/ "./src/util/generateResult.js":
/*!************************************!*\
  !*** ./src/util/generateResult.js ***!
  \************************************/
/*! exports provided: generateResultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResultProps", function() { return generateResultProps; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/util/data.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prop */ "./src/prop.js");


var generateResultProps = function generateResultProps() {
  var gameResultProps = {};

  var _loop = function _loop(key) {
    if (!(key in gameResultProps)) {
      gameResultProps[key] = [];
    }

    _data__WEBPACK_IMPORTED_MODULE_0__["gameResultImgUrls"][key].forEach(function (e) {
      return gameResultProps[key].push(new _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"](0, 0, e, 0, 0));
    });
  };

  for (var key in _data__WEBPACK_IMPORTED_MODULE_0__["gameResultImgUrls"]) {
    _loop(key);
  }

  return gameResultProps;
};

/***/ }),

/***/ "./src/util/randomGeneration.js":
/*!**************************************!*\
  !*** ./src/util/randomGeneration.js ***!
  \**************************************/
/*! exports provided: generateRandomProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomProps", function() { return generateRandomProps; });
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prop */ "./src/prop.js");


var positionArrGenerator = function positionArrGenerator() {
  var firstX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 63;
  var firstY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 45;
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 72;
  var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 46;
  var pantryLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
  var result = [];

  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 6; j++) {
      if (i === 4 && j === 0 || i === 4 && j === 1) continue;
      result.push([firstX + width * j, firstY + height * i]);
    }
  }

  return result;
};

function generateRandomProps(currentLevel, imageUrls) {
  var positionArray = positionArrGenerator();
  var idx = 0;
  var randomImageUrls = new Set();
  var randomPositionSet = new Set();
  var elementCount = currentLevel + 12;
  var result = {};

  while (randomImageUrls.size < elementCount) {
    idx = Math.floor(Math.random() * imageUrls.length);
    randomImageUrls.add(idx);
  }

  while (randomPositionSet.size < elementCount) {
    idx = Math.floor(Math.random() * positionArray.length);
    randomPositionSet.add(idx);
  }

  var imgArr = Array.from(randomImageUrls);
  var posArr = Array.from(randomPositionSet);

  for (var i = 0; i < imgArr.length; i++) {
    result[i] = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, imageUrls[imgArr[i]], positionArray[posArr[i]][0], positionArray[posArr[i]][1]);
  }

  return result;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRyb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZU9ic3RhY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlUmVzdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbUdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiQm9hcmQiLCJDYW52YXMiLCJQcm9wIiwiZ2VuZXJhdGVSZXN1bHRQcm9wcyIsIlNldCIsInJvdW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtaXNzIiwicGFzcyIsImNhdCIsImZyYW1lWCIsImZyYW1lWSIsImZvb2RzIiwiZ2VuZXJhdGVSYW5kb21Qcm9wcyIsImZvb2RVcmxzIiwib2JzdGFjbGUiLCJnZW5lcmF0ZU9ic3RhY2xlIiwiT2JqZWN0Iiwia2V5cyIsImNhbnZhcyIsImRyYXdQcm9wcyIsImNsZWFyIiwidHJpZXMiLCJsZXZlbCIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImJhY2tncm91bmRMb29wIiwiZHJhd0NhbnZhcyIsImRyYXdUZXh0IiwiZHJhd0xlZnRUcmllc1RleHQiLCJkcmF3Q3VycmVudExldmVsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaWR4IiwiQXJyYXkiLCJmcm9tIiwiZW5kIiwibGVuZ3RoIiwib2JzdGFjbGVMb29wIiwiZHJhd09icyIsInJlbmRlciIsImxvb3AiLCJkcmF3TWlzc1RleHQiLCJyZXN1bHRDYXQiLCJkcmF3IiwiZm9vZFgiLCJmb29kWSIsImtleSIsImZvb2QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhY2VQcmVzc2VkIiwiaGFzIiwiYW5pbWF0ZUxvb3AiLCJiYWNrZ3JvdW5kIiwiZHJhd0JvYXJkIiwicG9zaXRpb25DaGFuZ2UiLCJzcHJpdGVQb3NpdGlvblVwZGF0ZSIsImRlbGV0ZUl0ZW0iLCJpc0VxdWFsIiwiZSIsImtleUNvZGUiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwibW92ZSIsInByb3AiLCJjaGFuZ2VGcmFtZSIsIm9ic3RhY2xlU2V0Iiwic2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29sb3IiLCJjdHgiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImkiLCJkcmF3SW1hZ2UiLCJpbWFnZSIsInByb3BzIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwibWlzc0xlZnQiLCJHYW1lIiwiYm9hcmQiLCJnYW1lT3ZlciIsImRvbmUiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW4iLCJpbml0SXRlbXMiLCJ0aGVuIiwicmVzIiwiYmVmb3JlR2FtZVN0YXJ0Iiwic2hvd09ic3RhY2xlIiwiYW5pbWF0ZSIsInJvdW5kUmVzdWx0IiwicGxheSIsIm9ubG9hZCIsIkludHJvUGFnZSIsImFib3V0IiwiZ2FtZUludHJvIiwibWFpbiIsImdhbWUiLCJnYW1lb3ZlciIsInN0YXJ0QnV0dG9uIiwiYWJvdXRCdXR0b24iLCJiYWNrQnV0dG9uIiwiYmFja1RvTWFpbkJ1dHRvbiIsIm5leHRMZXZlbEJ1dHRvbiIsImdhbWVTdGFydCIsImJhY2tncm91bmRJbWFnZSIsImFib3V0QnV0dG9uSGFuZGxlciIsInN0YXJ0QnV0dG9uSGFuZGxlciIsImJhY2tCdXR0b25IYW5kbGVyIiwiYmFja1RvTWFpbkJ1dHRvbkhhbmRsZXIiLCJuZXh0QnV0dG9uSGFuZGxlciIsImltYWdlVXJsIiwiSW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwic3JjIiwiZ2FtZVJlc3VsdEltZ1VybHMiLCJsb3NlIiwicG9zaXRpb25BcnJheSIsImN1cnJlbnRMZXZlbCIsImZvb2RLZXlzIiwib2JzdGFjbGVLZXlzIiwicmFuZG9tS2V5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWRkIiwiZ2FtZVJlc3VsdFByb3BzIiwiZm9yRWFjaCIsInB1c2giLCJwb3NpdGlvbkFyckdlbmVyYXRvciIsImZpcnN0WCIsImZpcnN0WSIsInBhbnRyeUxldmVsIiwicmVzdWx0IiwiaiIsImltYWdlVXJscyIsInJhbmRvbUltYWdlVXJscyIsInJhbmRvbVBvc2l0aW9uU2V0IiwiZWxlbWVudENvdW50IiwiaW1nQXJyIiwicG9zQXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q25ILE1BQXJDLENBQU47QUFDQW9ILG1CQUFlLENBQUNYLEdBQWhCLENBQW9CN0csR0FBcEI7QUFDRDs7QUFFRCxTQUFPeUgsaUJBQWlCLENBQUNsRixJQUFsQixHQUF5Qm1GLFlBQWhDLEVBQThDO0FBQzVDMUgsT0FBRyxHQUFHMEcsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlAsYUFBYSxDQUFDakcsTUFBekMsQ0FBTjtBQUNBcUgscUJBQWlCLENBQUNaLEdBQWxCLENBQXNCN0csR0FBdEI7QUFDRDs7QUFFRCxNQUFJMkgsTUFBTSxHQUFHMUgsS0FBSyxDQUFDQyxJQUFOLENBQVdzSCxlQUFYLENBQWI7QUFDQSxNQUFJSSxNQUFNLEdBQUczSCxLQUFLLENBQUNDLElBQU4sQ0FBV3VILGlCQUFYLENBQWI7O0FBRUEsT0FBSyxJQUFJckUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VFLE1BQU0sQ0FBQ3ZILE1BQTNCLEVBQW1DZ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q2lFLFVBQU0sQ0FBQ2pFLENBQUQsQ0FBTixHQUFZLElBQUlyRiwwQ0FBSixDQUNWLEVBRFUsRUFFVixFQUZVLEVBR1Z3SixTQUFTLENBQUNJLE1BQU0sQ0FBQ3ZFLENBQUQsQ0FBUCxDQUhDLEVBSVZpRCxhQUFhLENBQUN1QixNQUFNLENBQUN4RSxDQUFELENBQVAsQ0FBYixDQUF5QixDQUF6QixDQUpVLEVBS1ZpRCxhQUFhLENBQUN1QixNQUFNLENBQUN4RSxDQUFELENBQVAsQ0FBYixDQUF5QixDQUF6QixDQUxVLENBQVo7QUFPRDs7QUFFRCxTQUFPaUUsTUFBUDtBQUNELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nLXRvcDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRkOGU2O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYWxlemFyXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdvYmFjayB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdvYmFjazpob3ZlciB7XFxuICBmb250LXNpemU6IDM1cHg7XFxufVxcblxcbiNnYW1lLW92ZXIge1xcbiAgd2lkdGg6IDQ2MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLnVwIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4uZG93biB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMycHggMDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjRweCAwO1xcbn1cXG5cXG4ubGVmdCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NXB4IDA7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZXhwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmV4cDpob3ZlciB7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5jYXQtbG9nbyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLmNhdGltZy1kaXYge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2Fib3V0LXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2ludHJvLWRpdiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5teUNhbnZhcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdvbmV4dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdvbmV4dDpob3ZlciB7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbiN3aW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixhQUFhOztFQUViLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkZDhlNjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFsZXphclxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nb2JhY2sge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nb2JhY2s6aG92ZXIge1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIHdpZHRoOiA0NjBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi51cCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLmRvd24ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMnB4IDA7XFxufVxcblxcbi5yaWdodCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDY0cHggMDtcXG59XFxuXFxuLmxlZnQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmV4cCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5leHA6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4uY2F0LWxvZ28ge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi5jYXRpbWctZGl2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNpbnRyby1kaXYge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubXlDYW52YXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5nb25leHQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nb25leHQ6aG92ZXIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4jd2luIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi9wcm9wXCI7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcblxuaW1wb3J0IHsgZm9vZFVybHMgfSBmcm9tIFwiLi91dGlsL2RhdGFcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tUHJvcHMgfSBmcm9tIFwiLi91dGlsL3JhbmRvbUdlbmVyYXRpb25cIjtcbmltcG9ydCB7IGdlbmVyYXRlT2JzdGFjbGUgfSBmcm9tIFwiLi91dGlsL2dlbmVyYXRlT2JzdGFjbGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmVzdWx0UHJvcHMgfSBmcm9tIFwiLi91dGlsL2dlbmVyYXRlUmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlciwgZmFsc2UpO1xuICB9XG4gIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBmcmFtZVggPSAwO1xuICBmcmFtZVkgPSAwO1xuXG4gIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5cbiAgY2F0O1xuICBiYWNrZ3JvdW5kID0gbmV3IFByb3AoMCwgMCwgXCIuL2ltYWdlL2NhdC9wYW50cnkucG5nXCIsIDAsIDApO1xuXG4gIHJlc3VsdENhdCA9IGdlbmVyYXRlUmVzdWx0UHJvcHMoKTtcbiAgZm9vZHMgPSB7fTtcbiAgb2JzdGFjbGUgPSBuZXcgU2V0KCk7XG5cbiAgbWlzcyA9IGZhbHNlO1xuICBwYXNzID0gZmFsc2U7XG5cbiAgaW5pdEl0ZW1zID0gKHJvdW5kKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubWlzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXNzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhdCA9IG5ldyBQcm9wKFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIFwiLi9pbWFnZS9mYXRjYXQucG5nXCIsXG4gICAgICAgIDYzLFxuICAgICAgICAzMzUsXG4gICAgICAgIHRoaXMuZnJhbWVYLFxuICAgICAgICB0aGlzLmZyYW1lWVxuICAgICAgKTtcbiAgICAgIHRoaXMuZm9vZHMgPSBnZW5lcmF0ZVJhbmRvbVByb3BzKHJvdW5kLCBmb29kVXJscyk7XG4gICAgICB0aGlzLm9ic3RhY2xlID0gZ2VuZXJhdGVPYnN0YWNsZShyb3VuZCArIDIsIE9iamVjdC5rZXlzKHRoaXMuZm9vZHMpKTtcblxuICAgICAgcmVzb2x2ZSgxKTtcbiAgICB9KTtcbiAgfTtcblxuICBkcmF3Qm9hcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW52YXMuZHJhd1Byb3BzKHRoaXMuZm9vZHMpO1xuICB9O1xuXG4gIGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gIH07XG5cbiAgYmVmb3JlR2FtZVN0YXJ0ID0gKHJvdW5kLCB0cmllcywgbGV2ZWwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRMb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwiZ3JlZW5cIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdUZXh0KHJvdW5kKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0xlZnRUcmllc1RleHQodHJpZXMpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q3VycmVudExldmVsKGxldmVsKTtcblxuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgMTIwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShiYWNrZ3JvdW5kTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYmFja2dyb3VuZExvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93T2JzdGFjbGUgPSAocm91bmQsIHRyaWVzLCBsZXZlbCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgaWR4ID0gMDtcbiAgICAgIGxldCBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLm9ic3RhY2xlKTtcbiAgICAgIGxldCBlbmQgPSBrZXlzLmxlbmd0aDtcbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBvYnN0YWNsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJncmVlblwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd1RleHQocm91bmQpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3TGVmdFRyaWVzVGV4dCh0cmllcyk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdDdXJyZW50TGV2ZWwobGV2ZWwpO1xuICAgICAgICB0aGlzLmZvb2RzW2tleXNbaWR4XV0uZHJhd09icygpO1xuXG4gICAgICAgIGlmIChpZHggPCBlbmQgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0IDwgODAwIC0gKGxldmVsIC0gMSkgKiAxMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShvYnN0YWNsZUxvb3ApO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IGVuZCAtIDEpIHtcbiAgICAgICAgICBpZHgrKztcbiAgICAgICAgICBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic3RhY2xlTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgb2JzdGFjbGVMb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcm91bmRSZXN1bHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZW5kZXI7XG5cbiAgICAgIGlmICh0aGlzLm1pc3MpIHtcbiAgICAgICAgcmVuZGVyID0gXCJtaXNzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXIgPSBcInBhc3NcIjtcbiAgICAgIH1cbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwid2hpdGVcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdNaXNzVGV4dCh0aGlzLm1pc3MpO1xuXG4gICAgICAgIHRoaXMucmVzdWx0Q2F0W3JlbmRlcl1bMF0uZHJhdygpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgMTUwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgbWlzczogcmVuZGVyID09PSBcIm1pc3NcIiA/IC0xIDogMCB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBkZWxldGVJdGVtID0gKCkgPT4ge1xuICAgIGxldCBmb29kWDtcbiAgICBsZXQgZm9vZFk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5mb29kcykge1xuICAgICAgbGV0IGZvb2QgPSB0aGlzLmZvb2RzW2tleV07XG4gICAgICBmb29kWCA9IGZvb2QueDtcbiAgICAgIGZvb2RZID0gZm9vZC55O1xuICAgICAgaWYgKFxuICAgICAgICBmb29kWCAtIDIwIDw9IHRoaXMuY2F0LnggKyAzICYmXG4gICAgICAgIGZvb2RYICsgZm9vZC53aWR0aCA+PSB0aGlzLmNhdC54ICsgdGhpcy5jYXQud2lkdGggLSAzICYmXG4gICAgICAgIGZvb2RZIC0gMjAgPD0gdGhpcy5jYXQueSArIDMgJiZcbiAgICAgICAgZm9vZFkgKyBmb29kLmhlaWdodCA+PSB0aGlzLmNhdC55ICsgdGhpcy5jYXQuaGVpZ2h0IC0gMyAmJlxuICAgICAgICB0aGlzLnNwYWNlUHJlc3NlZFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic3RhY2xlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZm9vZHNba2V5XTtcbiAgICAgICAgICB0aGlzLm9ic3RhY2xlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5taXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhbmltYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZSh0aGlzLmNhdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlUG9zaXRpb25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKCk7XG4gICAgICAgIHRoaXMuaXNFcXVhbCh0aGlzLm9ic3RhY2xlKTtcbiAgICAgICAgdGhpcy5jYXQuZHJhdygpO1xuICAgICAgICBpZiAoIXRoaXMubWlzcyAmJiAhdGhpcy5wYXNzKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKFwiM1wiKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFuaW1hdGVMb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAga2V5VXBIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIHRoaXMudXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLmRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBrZXlEb3duSGFuZGxlciA9IChlKSA9PiB7XG4gICAgbGV0IHkgPSAwO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIHRoaXMudXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHkgLT0gNzQ7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLmRvd25QcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgeSArPSA3NDtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhdC5tb3ZlKDAsIHkpO1xuICB9O1xuXG4gIHBvc2l0aW9uQ2hhbmdlID0gKHByb3ApID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgLy8gbGV0IHkgPSAwO1xuXG4gICAgaWYgKHRoaXMucmlnaHRQcmVzc2VkICYmIHByb3AueCA8IHRoaXMuY2FudmFzLndpZHRoIC0gcHJvcC53aWR0aCkge1xuICAgICAgeCArPSAzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0UHJlc3NlZCAmJiBwcm9wLnggPiAwKSB7XG4gICAgICB4IC09IDM7XG4gICAgfVxuICAgIC8vIGVsc2UgaWYgKHRoaXMudXBQcmVzc2VkICYmIHByb3AueSA+IHRoaXMud2FsbC53aWR0aCAtIDkpIHtcbiAgICAvLyAgIHkgLT0gMztcbiAgICAvLyB9IGVsc2UgaWYgKFxuICAgIC8vICAgdGhpcy5kb3duUHJlc3NlZCAmJlxuICAgIC8vICAgeSA8IHRoaXMuY2FudmFzLmhlaWdodCAtIHByb3Aud2lkdGggLSB0aGlzLndhbGwud2lkdGggLSA1XG4gICAgLy8gKSB7XG4gICAgLy8gICB5ICs9IDM7XG4gICAgLy8gfVxuXG4gICAgcHJvcC5tb3ZlKHgsIDApO1xuICB9O1xuXG4gIHNwcml0ZVBvc2l0aW9uVXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID49IDgpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZVggKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSA4KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwUHJlc3NlZCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID49IDIpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZVggKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZG93blByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSAyKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2F0LmNoYW5nZUZyYW1lKHRoaXMuZnJhbWVYLCAwKTtcbiAgfTtcblxuICBpc0VxdWFsID0gKG9ic3RhY2xlU2V0KSA9PiB7XG4gICAgaWYgKG9ic3RhY2xlU2V0LnNpemUgPT09IDApIHtcbiAgICAgIHRoaXMucGFzcyA9IHRydWU7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuXG4gIGRyYXdDYW52YXMgPSAoY29sb3IpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9O1xuXG4gIGRlY29yYXRlQ2FudmFzID0gKHByb3ApID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICBpICogcHJvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICBwcm9wLmltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICBwcm9wLmhlaWdodCxcbiAgICAgICAgaSAqIHByb3Aud2lkdGgsXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAtIHByb3AuaGVpZ2h0LFxuICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICBwcm9wLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH07XG5cbiAgZHJhd1Byb3BzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgd2hpbGUgKGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgbGV0IHByb3AgPSBwcm9wc1trZXlzW2ldXTtcbiAgICAgIHByb3AuZHJhdygpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBkcmF3VGV4dCA9IChsZXZlbCwgY29sb3IgPSBcIiNmZmZcIikgPT4ge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggTGFsZXphclwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFJvdW5kICR7bGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBZT1UgQ0FOIEVBVGAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTUwKTtcbiAgfTtcblxuICBkcmF3TGVmdFRyaWVzVGV4dCA9ICh0cmllcywgY29sb3IgPSBcIiNmZmZcIikgPT4ge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjI4cHggTGFsZXphclwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYExJRkUgJHt0cmllc31gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAxMjAsIDUwKTtcbiAgfTtcblxuICBkcmF3Q3VycmVudExldmVsID0gKGxldmVsLCBjb2xvciA9IFwiI2ZmZlwiKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMjhweCBMYWxlemFyXCI7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgTEVWRUwgJHtsZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAxMjAsIDUwKTtcbiAgfTtcblxuICBkcmF3TWlzc1RleHQgPSAobWlzc0xlZnQsIGNvbG9yID0gXCIjZmZmXCIpID0+IHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IExhbGV6YXJcIjtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJPb3BzXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgKiAke21pc3NMZWZ0fSBMZWZ0KmAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgWU9VIENBTiBFQVRgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDE1MCk7XG4gIH07XG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIGxldmVsID0gMTtcbiAgYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgZG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1vdmVyXCIpO1xuICB3aW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpblwiKTtcbiAgb2JzdGFjbGVzID0gbmV3IFNldCgpO1xuICByb3VuZCA9IDE7XG4gIHRyaWVzID0gMztcbiAgY3VycmVudFNjb3JlID0gMDtcblxuICBwbGF5ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRyaWVzIDw9IDApIHtcbiAgICAgIHRoaXMuYm9hcmQuZ2FtZU92ZXIoKTtcbiAgICAgIHRoaXMudHJpZXMgPSAzO1xuICAgICAgdGhpcy5kb25lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm91bmQgPT09IDIpIHtcbiAgICAgIHRoaXMuYm9hcmQuZ2FtZU92ZXIoKTtcblxuICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgdGhpcy5yb3VuZCA9IDE7XG4gICAgICB0aGlzLndpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZFxuICAgICAgLmluaXRJdGVtcyh0aGlzLnJvdW5kKVxuICAgICAgLnRoZW4oKHJlcykgPT5cbiAgICAgICAgdGhpcy5ib2FyZC5iZWZvcmVHYW1lU3RhcnQodGhpcy5yb3VuZCwgdGhpcy50cmllcywgdGhpcy5sZXZlbClcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+XG4gICAgICAgIHRoaXMuYm9hcmQuc2hvd09ic3RhY2xlKHRoaXMucm91bmQsIHRoaXMudHJpZXMsIHRoaXMubGV2ZWwpXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLmJvYXJkLmFuaW1hdGUoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQucm91bmRSZXN1bHQoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy50cmllcyArPSByZXMubWlzcztcbiAgICAgICAgdGhpcy5yb3VuZCArPSByZXMubWlzcyArIDE7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgXCIuL2Nzcy9tYWluLmNzc1wiO1xuXG5pbXBvcnQgeyBJbnRyb1BhZ2UgfSBmcm9tIFwiLi9pbnRyb1BhZ2VcIjtcblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIG5ldyBJbnRyb1BhZ2UoKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50cm9QYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lID0gbnVsbDtcblxuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICB0aGlzLmFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1wYWdlXCIpO1xuICAgIHRoaXMuZ2FtZW92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtb3ZlclwiKTtcbiAgICB0aGlzLndpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luXCIpO1xuXG4gICAgdGhpcy5nYW1lSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW50cm9cIik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgdGhpcy5hYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuICAgIHRoaXMuYmFja1RvTWFpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjay10by1tYWluXCIpO1xuICAgIHRoaXMubmV4dExldmVsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LWxldmVsXCIpO1xuXG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5nYW1lU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlL2NhdC9sb3NlLnBuZycpXCI7XG4gICAgdGhpcy53aW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2UvY2F0L3dpbm5lci5wbmcnKVwiO1xuXG4gICAgdGhpcy5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hYm91dEJ1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3RhcnRCdXR0b25IYW5kbGVyKTtcbiAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja0J1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuYmFja1RvTWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgdGhpcy5iYWNrVG9NYWluQnV0dG9uSGFuZGxlclxuICAgICk7XG4gICAgdGhpcy5uZXh0TGV2ZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dEJ1dHRvbkhhbmRsZXIpO1xuICB9XG5cbiAgYWJvdXRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBzdGFydEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICB0aGlzLmdhbWUucGxheSgpO1xuICB9O1xuXG4gIGJhY2tCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9O1xuXG4gIGJhY2tUb01haW5CdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLmdhbWVvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBuZXh0QnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgdGhpcy53aW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRoaXMuZ2FtZS5wbGF5KCk7XG4gIH07XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvcCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltYWdlVXJsLCB4LCB5LCBmcmFtZVggPSAwLCBmcmFtZVkgPSAwKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZyYW1lWCA9IGZyYW1lWDtcbiAgICB0aGlzLmZyYW1lWSA9IGZyYW1lWTtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGxldCBuYXR1cmFsV2lkdGggPSB0aGlzLmltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICAgIGxldCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy5pbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoID4gMCA/IHdpZHRoIDogbmF0dXJhbFdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPiAwID8gaGVpZ2h0IDogbmF0dXJhbEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdPYnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlVXJsO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCA/IHRoaXMuY2FudmFzLndpZHRoIDogdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0ID8gdGhpcy5jYW52YXMuaGVpZ2h0IDogdGhpcy5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIGRyYXdPYnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVYLFxuICAgICAgdGhpcy5mcmFtZVksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAyMCxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB0aGlzLndpZHRoICogMS4yLFxuICAgICAgdGhpcy5oZWlnaHQgKiAxLjJcbiAgICApO1xuICB9O1xuXG4gIG1vdmUgPSAoeCwgeSkgPT4ge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuICB9O1xuXG4gIGNoYW5nZUZyYW1lID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLmZyYW1lWCA9IHggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMuZnJhbWVZID0geSAqIHRoaXMuaGVpZ2h0O1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGZvb2RVcmxzID0gW1xuICBcIi4vaW1hZ2UvZm9vZC9hcHBsZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYmFuYW5hLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9iZWVyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9idXJnZXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nha2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2NoZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY29ybi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY3JvaXNzYW50LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9kYW5nby5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZG9udXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ZyaWVzLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9ncmFwZXMucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ljZV9jcmVhbS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvbGVtb24ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL21lYXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL29yYW5nZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGVhY2gucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BlYXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BpZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waXNoYS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcmFtZW4ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NwYWdoZXR0aS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3RyYXdiZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3VzaGkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N3ZWV0X3BvdGF0by5wbmdcIixcbl07XG5cbmV4cG9ydCBjb25zdCBnYW1lUmVzdWx0SW1nVXJscyA9IHtcbiAgbWlzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvbWlzc09uZS5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L21pc3NUd28ucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9taXNzVGhyZWUucG5nXCIsXG4gIF0sXG4gIHBhc3M6IFtcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NPbmUucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzVHdvLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc1RocmVlLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc0ZvdXIucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzRml2ZS5wbmdcIixcbiAgXSxcbiAgd2luOiBbXCIuL2ltYWdlL2NhdC93aW5uZXIucG5nXCJdLFxuICBsb3NlOiBbXCIuL2ltYWdlL2NhdC9sb3NlLnBuZ1wiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NpdGlvbkFycmF5ID0gW1xuICBbNzMsIDQ2XSxcbiAgWzczICsgNDcsIDQ2XSxcbiAgWzczICsgNDcgKiAyLCA0Nl0sXG4gIFs3MyArIDQ3ICogMywgNDZdLFxuICBbNzMgKyA0NyAqIDQsIDQ2XSxcbiAgWzczICsgNDcgKiA1LCA0Nl0sXG4gIFs3MyArIDQ3ICogNiwgNDZdLFxuICBbNzMgKyAzMTAsIDQ2XSxcbl07XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50TGV2ZWxcbiAqIEBwYXJhbSB7Kn0gZm9vZEtleXNcbiAqXG4gKiByYW5kb21seSBjaG9vc2Ugb2JzdGFjbGVzIG91dCBvZiB0aGUga2V5cyBvZiBjaG9zZW4gZm9vZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2JzdGFjbGUoY3VycmVudExldmVsLCBmb29kS2V5cykge1xuICBsZXQgb2JzdGFjbGVLZXlzID0gbmV3IFNldCgpO1xuXG4gIHdoaWxlIChvYnN0YWNsZUtleXMuc2l6ZSA8IGN1cnJlbnRMZXZlbCkge1xuICAgIGxldCByYW5kb21LZXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kS2V5cy5sZW5ndGgpO1xuICAgIG9ic3RhY2xlS2V5cy5hZGQoZm9vZEtleXNbcmFuZG9tS2V5XSk7XG4gIH1cbiAgcmV0dXJuIG9ic3RhY2xlS2V5cztcbn1cbiIsImltcG9ydCB7IGdhbWVSZXN1bHRJbWdVcmxzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgUHJvcCB9IGZyb20gXCIuLi9wcm9wXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJlc3VsdFByb3BzID0gKCkgPT4ge1xuICBsZXQgZ2FtZVJlc3VsdFByb3BzID0ge307XG4gIGZvciAobGV0IGtleSBpbiBnYW1lUmVzdWx0SW1nVXJscykge1xuICAgIGlmICghKGtleSBpbiBnYW1lUmVzdWx0UHJvcHMpKSB7XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XSA9IFtdO1xuICAgIH1cbiAgICBnYW1lUmVzdWx0SW1nVXJsc1trZXldLmZvckVhY2goKGUpID0+XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XS5wdXNoKG5ldyBQcm9wKDAsIDAsIGUsIDAsIDApKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZ2FtZVJlc3VsdFByb3BzO1xufTtcbiIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi4vcHJvcFwiO1xuXG5jb25zdCBwb3NpdGlvbkFyckdlbmVyYXRvciA9IChcbiAgZmlyc3RYID0gNjMsXG4gIGZpcnN0WSA9IDQ1LFxuICBoZWlnaHQgPSA3MixcbiAgd2lkdGggPSA0NixcbiAgcGFudHJ5TGV2ZWwgPSA1XG4pID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbiAgICAgIGlmICgoaSA9PT0gNCAmJiBqID09PSAwKSB8fCAoaSA9PT0gNCAmJiBqID09PSAxKSkgY29udGludWU7XG4gICAgICByZXN1bHQucHVzaChbZmlyc3RYICsgd2lkdGggKiBqLCBmaXJzdFkgKyBoZWlnaHQgKiBpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVByb3BzKGN1cnJlbnRMZXZlbCwgaW1hZ2VVcmxzKSB7XG4gIGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBwb3NpdGlvbkFyckdlbmVyYXRvcigpO1xuICBsZXQgaWR4ID0gMDtcblxuICBsZXQgcmFuZG9tSW1hZ2VVcmxzID0gbmV3IFNldCgpO1xuICBsZXQgcmFuZG9tUG9zaXRpb25TZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBlbGVtZW50Q291bnQgPSBjdXJyZW50TGV2ZWwgKyAxMjtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlIChyYW5kb21JbWFnZVVybHMuc2l6ZSA8IGVsZW1lbnRDb3VudCkge1xuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlVXJscy5sZW5ndGgpO1xuICAgIHJhbmRvbUltYWdlVXJscy5hZGQoaWR4KTtcbiAgfVxuXG4gIHdoaWxlIChyYW5kb21Qb3NpdGlvblNldC5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25BcnJheS5sZW5ndGgpO1xuICAgIHJhbmRvbVBvc2l0aW9uU2V0LmFkZChpZHgpO1xuICB9XG5cbiAgbGV0IGltZ0FyciA9IEFycmF5LmZyb20ocmFuZG9tSW1hZ2VVcmxzKTtcbiAgbGV0IHBvc0FyciA9IEFycmF5LmZyb20ocmFuZG9tUG9zaXRpb25TZXQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gbmV3IFByb3AoXG4gICAgICAzMixcbiAgICAgIDMyLFxuICAgICAgaW1hZ2VVcmxzW2ltZ0FycltpXV0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMF0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMV1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=