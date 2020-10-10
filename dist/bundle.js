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
___CSS_LOADER_EXPORT___.push([module.i, ".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n#win {\n  display: flex;\n  /* background-image: url(\"../image/cat/lose.png\"); */\n}\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oDAAoD;AACtD","sourcesContent":[".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n#win {\n  display: flex;\n  /* background-image: url(\"../image/cat/lose.png\"); */\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _propImageUrls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propImageUrls */ "./src/propImageUrls.js");
/* harmony import */ var _util_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/data */ "./src/util/data.js");
/* harmony import */ var _util_randomGeneration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/randomGeneration */ "./src/util/randomGeneration.js");
/* harmony import */ var _util_generateObstacle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/generateObstacle */ "./src/util/generateObstacle.js");
/* harmony import */ var _util_generateResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/generateResult */ "./src/util/generateResult.js");
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

  _defineProperty(this, "resultCat", Object(_util_generateResult__WEBPACK_IMPORTED_MODULE_6__["generateResultProps"])());

  _defineProperty(this, "foods", {});

  _defineProperty(this, "obstacle", new Set());

  _defineProperty(this, "miss", false);

  _defineProperty(this, "pass", false);

  _defineProperty(this, "initItems", function (level) {
    return new Promise(function (resolve, reject) {
      _this.miss = false;
      _this.pass = false;
      _this.cat = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, "./image/fatcat.png", 63, 335, _this.frameX, _this.frameY);
      _this.foods = Object(_util_randomGeneration__WEBPACK_IMPORTED_MODULE_4__["generateRandomProps"])(level, _util_data__WEBPACK_IMPORTED_MODULE_3__["foodUrls"]);
      _this.obstacle = Object(_util_generateObstacle__WEBPACK_IMPORTED_MODULE_5__["generateObstacle"])(level + 2, Object.keys(_this.foods));
      resolve(1);
    });
  });

  _defineProperty(this, "drawBoard", function () {
    // this.canvas.drawCanvas("yellow");
    _this.canvas.drawProps(_this.foods);
  });

  _defineProperty(this, "beforeGameStart", function (level) {
    return new Promise(function (resolve, reject) {
      var start = Date.now();

      var backgroundLoop = function backgroundLoop() {
        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(level);

        if (Date.now() - start < 1200) {
          requestAnimationFrame(backgroundLoop);
        } else {
          resolve();
        }
      };

      backgroundLoop();
    });
  });

  _defineProperty(this, "showObstacle", function (level) {
    return new Promise(function (resolve, reject) {
      var idx = 0;
      var keys = Array.from(_this.obstacle);
      var end = keys.length;
      var start = Date.now();

      var obstacleLoop = function obstacleLoop() {
        _this.canvas.clear();

        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(level);

        _this.foods[keys[idx]].drawObs();

        if (idx < end && Date.now() - start < 800) {
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

  _defineProperty(this, "drawGameResult", function (result) {
    _this.canvas.clear();

    _this.canvas.drawCanvas("white");

    _this.resultCat[result][0].draw();
  });

  _defineProperty(this, "deleteItem", function () {
    var foodX;
    var foodY;

    for (var key in _this.foods) {
      var food = _this.foods[key];
      foodX = food.x;
      foodY = food.y;

      if (foodX - 20 <= _this.cat.x + 3 && foodX + food.width >= _this.cat.x + _this.cat.width - 3 && foodY - 20 <= _this.cat.y + 3 && foodY + food.height >= _this.cat.y + _this.cat.height - 3 && _this.spacePressed) {
        console.log(_this.obstacle, key);

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

    console.log(_this.cat.y);

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
    _this.ctx.font = "30px Lalezar, cursive";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("Round ".concat(level), _this.canvas.width / 2, 110);

    _this.ctx.fillText("YOU CAN EAT", _this.canvas.width / 2, 150);
  });

  _defineProperty(this, "drawMissText", function (missLeft) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "30px Lalezar, cursive";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("Oops", _this.canvas.width / 2, 110);

    _this.ctx.fillText("* ".concat(missLeft, " Left*"), _this.canvas.width / 2, 110);

    _this.ctx.fillText("YOU CAN EAT", _this.canvas.width / 2, 150);
  });
} // drawPlants(propList) {
//   // while ((canvas.height - 2 * wall.width) / wall.width >= j) {
//   let idx = j % propList.length;
//   ctx.drawImage(
//     propList[idx].plantImage,
//     0,
//     0,
//     propList[idx].width,
//     propList[idx].height,
//     0,
//     propList[idx].height * j,
//     propList[idx].width * 0.7,
//     propList[idx].height
//   );
//   ctx.drawImage(
//     propList[idx].plantImage,
//     0,
//     0,
//     propList[idx].width,
//     propList[idx].height,
//     canvas.width - propList[idx].width,
//     propList[idx].height * j,
//     propList[idx].width * 0.7,
//     propList[idx].height
//   );
//   j++;
//   // }
// }
;

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

  _defineProperty(this, "board", new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]());

  _defineProperty(this, "obstacles", new Set());

  _defineProperty(this, "tries", 3);

  _defineProperty(this, "currentScore", 0);

  _defineProperty(this, "level", 1);

  _defineProperty(this, "play", function () {
    if (_this.tries <= 0) {
      _this.board.drawGameResult(_this.tries ? "win" : "lose");

      return;
    } else if (_this.round === 5) {
      _this.introPage.win.style.display = flex;
      return;
    }

    _this.board.initItems(_this.level).then(function (res) {
      return _this.board.beforeGameStart(_this.level);
    }).then(function (res) {
      return _this.board.showObstacle(_this.level);
    }).then(function (res) {
      return _this.board.animate();
    }).then(function (res) {
      return _this.board.roundResult();
    }).then(function (res) {
      _this.tries += res.miss;
      _this.level += res.miss + 1;

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
  var introPage = new _introPage__WEBPACK_IMPORTED_MODULE_1__["IntroPage"]();
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
    _this.main.style.display = "flex"; //game start here maybe...

    _this.gameIntro.style.display = "none"; // game(level, life);

    _this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();

    _this.game.play();
  });

  _defineProperty(this, "backButtonHandler", function () {
    _this.about.style.display = "none";
    _this.gameIntro.style.display = "";
  });

  this.main = document.getElementById("main");
  this.win = document.getElementById("win");
  this.lose = document.getElementById("lose");
  this.about = document.getElementById("about-page");
  this.gameIntro = document.getElementById("game-intro");
  this.startButton = document.getElementById("start");
  this.aboutButton = document.getElementById("about");
  this.backButton = document.getElementById("back");
  main.style.display = "flex";
  this.gameStart = false;
  this.game;
  this.aboutButton.addEventListener("click", this.aboutButtonHandler);
  this.startButton.addEventListener("click", this.startButtonHandler);
  this.backButton.addEventListener("click", this.backButtonHandler);
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

/***/ "./src/propImageUrls.js":
/*!******************************!*\
  !*** ./src/propImageUrls.js ***!
  \******************************/
/*! exports provided: plantUrls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plantUrls", function() { return plantUrls; });
var plantUrls = [// "./src/img/plant/cactus.png",
// "./src/img/plant/herb.png",
"./image/plant/mangotree.png", "./image/plant/palm.png" // "./src/img/plant/sunflower.png"
// "./src/img/plant/tulip.png"
];

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

  console.log(result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRyb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BJbWFnZVVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZU9ic3RhY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlUmVzdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbUdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiQm9hcmQiLCJDYW52YXMiLCJQcm9wIiwiZ2VuZXJhdGVSZXN1bHRQcm9wcyIsIlNldCIsImxldmVsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtaXNzIiwicGFzcyIsImNhdCIsImZyYW1lWCIsImZyYW1lWSIsImZvb2RzIiwiZ2VuZXJhdGVSYW5kb21Qcm9wcyIsImZvb2RVcmxzIiwib2JzdGFjbGUiLCJnZW5lcmF0ZU9ic3RhY2xlIiwiT2JqZWN0Iiwia2V5cyIsImNhbnZhcyIsImRyYXdQcm9wcyIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImJhY2tncm91bmRMb29wIiwiZHJhd0NhbnZhcyIsImRyYXdUZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaWR4IiwiQXJyYXkiLCJmcm9tIiwiZW5kIiwibGVuZ3RoIiwib2JzdGFjbGVMb29wIiwiY2xlYXIiLCJkcmF3T2JzIiwicmVuZGVyIiwibG9vcCIsImRyYXdNaXNzVGV4dCIsInJlc3VsdENhdCIsImRyYXciLCJyZXN1bHQiLCJmb29kWCIsImZvb2RZIiwia2V5IiwiZm9vZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFjZVByZXNzZWQiLCJjb25zb2xlIiwibG9nIiwiaGFzIiwiYW5pbWF0ZUxvb3AiLCJiYWNrZ3JvdW5kIiwiZHJhd0JvYXJkIiwicG9zaXRpb25DaGFuZ2UiLCJzcHJpdGVQb3NpdGlvblVwZGF0ZSIsImRlbGV0ZUl0ZW0iLCJpc0VxdWFsIiwiZSIsImtleUNvZGUiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInVwUHJlc3NlZCIsImRvd25QcmVzc2VkIiwibW92ZSIsInByb3AiLCJjaGFuZ2VGcmFtZSIsIm9ic3RhY2xlU2V0Iiwic2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiY29sb3IiLCJjdHgiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImkiLCJkcmF3SW1hZ2UiLCJpbWFnZSIsInByb3BzIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwibWlzc0xlZnQiLCJHYW1lIiwidHJpZXMiLCJib2FyZCIsImRyYXdHYW1lUmVzdWx0Iiwicm91bmQiLCJpbnRyb1BhZ2UiLCJ3aW4iLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4IiwiaW5pdEl0ZW1zIiwidGhlbiIsInJlcyIsImJlZm9yZUdhbWVTdGFydCIsInNob3dPYnN0YWNsZSIsImFuaW1hdGUiLCJyb3VuZFJlc3VsdCIsInBsYXkiLCJvbmxvYWQiLCJJbnRyb1BhZ2UiLCJhYm91dCIsImdhbWVJbnRybyIsIm1haW4iLCJnYW1lIiwibG9zZSIsInN0YXJ0QnV0dG9uIiwiYWJvdXRCdXR0b24iLCJiYWNrQnV0dG9uIiwiZ2FtZVN0YXJ0IiwiYWJvdXRCdXR0b25IYW5kbGVyIiwic3RhcnRCdXR0b25IYW5kbGVyIiwiYmFja0J1dHRvbkhhbmRsZXIiLCJpbWFnZVVybCIsIkltYWdlIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInNyYyIsInBsYW50VXJscyIsImdhbWVSZXN1bHRJbWdVcmxzIiwicG9zaXRpb25BcnJheSIsImN1cnJlbnRMZXZlbCIsImZvb2RLZXlzIiwib2JzdGFjbGVLZXlzIiwicmFuZG9tS2V5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWRkIiwiZ2FtZVJlc3VsdFByb3BzIiwiZm9yRWFjaCIsInB1c2giLCJwb3NpdGlvbkFyckdlbmVyYXRvciIsImZpcnN0WCIsImZpcnN0WSIsInBhbnRyeUxldmVsIiwiaiIsImltYWdlVXJscyIsInJhbmRvbUltYWdlVXJscyIsInJhbmRvbVBvc2l0aW9uU2V0IiwiZWxlbWVudENvdW50IiwiaW1nQXJyIiwicG9zQXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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LElBQUlsRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0UsTUFBTSxDQUFDeEgsTUFBM0IsRUFBbUNvRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDM0MsVUFBTSxDQUFDMkMsQ0FBRCxDQUFOLEdBQVksSUFBSXBGLDBDQUFKLENBQ1YsRUFEVSxFQUVWLEVBRlUsRUFHVm9KLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDcEUsQ0FBRCxDQUFQLENBSEMsRUFJVitDLGFBQWEsQ0FBQ3NCLE1BQU0sQ0FBQ3JFLENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBSlUsRUFLVitDLGFBQWEsQ0FBQ3NCLE1BQU0sQ0FBQ3JFLENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBTFUsQ0FBWjtBQU9EOztBQUVELFNBQU8zQyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udXAge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5kb3duIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzJweCAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2NHB4IDA7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggMDtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmYXRjYXRpbnRybyB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cDpob3ZlciB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jYXRpbWctZGl2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4jaW50cm8tZGl2IHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm15Q2FudmFzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jd2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlL2NhdC9sb3NlLnBuZ1xcXCIpOyAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0RBQW9EO0FBQ3REXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udXAge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5kb3duIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzJweCAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2NHB4IDA7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggMDtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmYXRjYXRpbnRybyB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cDpob3ZlciB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jYXRpbWctZGl2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4jaW50cm8tZGl2IHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm15Q2FudmFzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jd2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltYWdlL2NhdC9sb3NlLnBuZ1xcXCIpOyAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcFwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBwbGFudFVybHMgfSBmcm9tIFwiLi9wcm9wSW1hZ2VVcmxzXCI7XG5pbXBvcnQgeyBmb29kVXJscyB9IGZyb20gXCIuL3V0aWwvZGF0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21Qcm9wcyB9IGZyb20gXCIuL3V0aWwvcmFuZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVPYnN0YWNsZSB9IGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVPYnN0YWNsZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXN1bHRQcm9wcyB9IGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVSZXN1bHRcIjtcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCBmYWxzZSk7XG4gIH1cbiAgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIGZyYW1lWCA9IDA7XG4gIGZyYW1lWSA9IDA7XG5cbiAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gIHVwUHJlc3NlZCA9IGZhbHNlO1xuICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICBzcGFjZVByZXNzZWQgPSBmYWxzZTtcblxuICBjYXQ7XG4gIGJhY2tncm91bmQgPSBuZXcgUHJvcCgwLCAwLCBcIi4vaW1hZ2UvY2F0L3BhbnRyeS5wbmdcIiwgMCwgMCk7XG5cbiAgcmVzdWx0Q2F0ID0gZ2VuZXJhdGVSZXN1bHRQcm9wcygpO1xuICBmb29kcyA9IHt9O1xuICBvYnN0YWNsZSA9IG5ldyBTZXQoKTtcblxuICBtaXNzID0gZmFsc2U7XG4gIHBhc3MgPSBmYWxzZTtcblxuICBpbml0SXRlbXMgPSAobGV2ZWwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5taXNzID0gZmFsc2U7XG4gICAgICB0aGlzLnBhc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2F0ID0gbmV3IFByb3AoXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgXCIuL2ltYWdlL2ZhdGNhdC5wbmdcIixcbiAgICAgICAgNjMsXG4gICAgICAgIDMzNSxcbiAgICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICAgIHRoaXMuZnJhbWVZXG4gICAgICApO1xuICAgICAgdGhpcy5mb29kcyA9IGdlbmVyYXRlUmFuZG9tUHJvcHMobGV2ZWwsIGZvb2RVcmxzKTtcbiAgICAgIHRoaXMub2JzdGFjbGUgPSBnZW5lcmF0ZU9ic3RhY2xlKGxldmVsICsgMiwgT2JqZWN0LmtleXModGhpcy5mb29kcykpO1xuXG4gICAgICByZXNvbHZlKDEpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRyYXdCb2FyZCA9ICgpID0+IHtcbiAgICAvLyB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwieWVsbG93XCIpO1xuICAgIHRoaXMuY2FudmFzLmRyYXdQcm9wcyh0aGlzLmZvb2RzKTtcbiAgfTtcblxuICBiZWZvcmVHYW1lU3RhcnQgPSAobGV2ZWwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRMb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwiZ3JlZW5cIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdUZXh0KGxldmVsKTtcblxuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgMTIwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShiYWNrZ3JvdW5kTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYmFja2dyb3VuZExvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBzaG93T2JzdGFjbGUgPSAobGV2ZWwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICBsZXQga2V5cyA9IEFycmF5LmZyb20odGhpcy5vYnN0YWNsZSk7XG4gICAgICBsZXQgZW5kID0ga2V5cy5sZW5ndGg7XG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3Qgb2JzdGFjbGVMb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwiZ3JlZW5cIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdUZXh0KGxldmVsKTtcbiAgICAgICAgdGhpcy5mb29kc1trZXlzW2lkeF1dLmRyYXdPYnMoKTtcblxuICAgICAgICBpZiAoaWR4IDwgZW5kICYmIERhdGUubm93KCkgLSBzdGFydCA8IDgwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShvYnN0YWNsZUxvb3ApO1xuICAgICAgICB9IGVsc2UgaWYgKGlkeCA8IGVuZCAtIDEpIHtcbiAgICAgICAgICBpZHgrKztcbiAgICAgICAgICBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic3RhY2xlTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgb2JzdGFjbGVMb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcm91bmRSZXN1bHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZW5kZXI7XG5cbiAgICAgIGlmICh0aGlzLm1pc3MpIHtcbiAgICAgICAgcmVuZGVyID0gXCJtaXNzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXIgPSBcInBhc3NcIjtcbiAgICAgIH1cbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwid2hpdGVcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdNaXNzVGV4dCh0aGlzLm1pc3MpO1xuXG4gICAgICAgIHRoaXMucmVzdWx0Q2F0W3JlbmRlcl1bMF0uZHJhdygpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgMTUwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgbWlzczogcmVuZGVyID09PSBcIm1pc3NcIiA/IC0xIDogMCB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBkcmF3R2FtZVJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ3aGl0ZVwiKTtcbiAgICB0aGlzLnJlc3VsdENhdFtyZXN1bHRdWzBdLmRyYXcoKTtcbiAgfTtcblxuICBkZWxldGVJdGVtID0gKCkgPT4ge1xuICAgIGxldCBmb29kWDtcbiAgICBsZXQgZm9vZFk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5mb29kcykge1xuICAgICAgbGV0IGZvb2QgPSB0aGlzLmZvb2RzW2tleV07XG4gICAgICBmb29kWCA9IGZvb2QueDtcbiAgICAgIGZvb2RZID0gZm9vZC55O1xuICAgICAgaWYgKFxuICAgICAgICBmb29kWCAtIDIwIDw9IHRoaXMuY2F0LnggKyAzICYmXG4gICAgICAgIGZvb2RYICsgZm9vZC53aWR0aCA+PSB0aGlzLmNhdC54ICsgdGhpcy5jYXQud2lkdGggLSAzICYmXG4gICAgICAgIGZvb2RZIC0gMjAgPD0gdGhpcy5jYXQueSArIDMgJiZcbiAgICAgICAgZm9vZFkgKyBmb29kLmhlaWdodCA+PSB0aGlzLmNhdC55ICsgdGhpcy5jYXQuaGVpZ2h0IC0gMyAmJlxuICAgICAgICB0aGlzLnNwYWNlUHJlc3NlZFxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JzdGFjbGUsIGtleSk7XG4gICAgICAgIGlmICh0aGlzLm9ic3RhY2xlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuZm9vZHNba2V5XTtcbiAgICAgICAgICB0aGlzLm9ic3RhY2xlLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5taXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhbmltYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkNoYW5nZSh0aGlzLmNhdCk7XG4gICAgICAgIHRoaXMuc3ByaXRlUG9zaXRpb25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKCk7XG4gICAgICAgIHRoaXMuaXNFcXVhbCh0aGlzLm9ic3RhY2xlKTtcbiAgICAgICAgdGhpcy5jYXQuZHJhdygpO1xuICAgICAgICBpZiAoIXRoaXMubWlzcyAmJiAhdGhpcy5wYXNzKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVMb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKFwiM1wiKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFuaW1hdGVMb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAga2V5VXBIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIHRoaXMudXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLmRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBrZXlEb3duSGFuZGxlciA9IChlKSA9PiB7XG4gICAgbGV0IHkgPSAwO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIHRoaXMudXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIHkgLT0gNzQ7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICB0aGlzLmRvd25QcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgeSArPSA3NDtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5jYXQueSk7XG4gICAgdGhpcy5jYXQubW92ZSgwLCB5KTtcbiAgfTtcblxuICBwb3NpdGlvbkNoYW5nZSA9IChwcm9wKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIC8vIGxldCB5ID0gMDtcblxuICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCAmJiBwcm9wLnggPCB0aGlzLmNhbnZhcy53aWR0aCAtIHByb3Aud2lkdGgpIHtcbiAgICAgIHggKz0gMztcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQgJiYgcHJvcC54ID4gMCkge1xuICAgICAgeCAtPSAzO1xuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnVwUHJlc3NlZCAmJiBwcm9wLnkgPiB0aGlzLndhbGwud2lkdGggLSA5KSB7XG4gICAgLy8gICB5IC09IDM7XG4gICAgLy8gfSBlbHNlIGlmIChcbiAgICAvLyAgIHRoaXMuZG93blByZXNzZWQgJiZcbiAgICAvLyAgIHkgPCB0aGlzLmNhbnZhcy5oZWlnaHQgLSBwcm9wLndpZHRoIC0gdGhpcy53YWxsLndpZHRoIC0gNVxuICAgIC8vICkge1xuICAgIC8vICAgeSArPSAzO1xuICAgIC8vIH1cblxuICAgIHByb3AubW92ZSh4LCAwKTtcbiAgfTtcblxuICBzcHJpdGVQb3NpdGlvblVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5yaWdodFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSA4KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPj0gOCkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lWCArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy51cFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSAyKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRvd25QcmVzc2VkKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPj0gMikge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lWCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhdC5jaGFuZ2VGcmFtZSh0aGlzLmZyYW1lWCwgMCk7XG4gIH07XG5cbiAgaXNFcXVhbCA9IChvYnN0YWNsZVNldCkgPT4ge1xuICAgIGlmIChvYnN0YWNsZVNldC5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLnBhc3MgPSB0cnVlO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDYW52YXMge1xuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgXG5cbiAgZHJhd0NhbnZhcyA9IChjb2xvcikgPT4ge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfTtcblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgZGVjb3JhdGVDYW52YXMgPSAocHJvcCkgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgIGkgKiBwcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICBpICogcHJvcC53aWR0aCxcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC5oZWlnaHQsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICApO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBkcmF3UHJvcHMgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBsZXQgcHJvcCA9IHByb3BzW2tleXNbaV1dO1xuICAgICAgcHJvcC5kcmF3KCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdUZXh0ID0gKGxldmVsLCBjb2xvciA9IFwiI2ZmZlwiKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBMYWxlemFyLCBjdXJzaXZlXCI7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgUm91bmQgJHtsZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDExMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFlPVSBDQU4gRUFUYCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxNTApO1xuICB9O1xuXG4gIGRyYXdNaXNzVGV4dCA9IChtaXNzTGVmdCwgY29sb3IgPSBcIiNmZmZcIikgPT4ge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggTGFsZXphciwgY3Vyc2l2ZVwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIk9vcHNcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAqICR7bWlzc0xlZnR9IExlZnQqYCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBZT1UgQ0FOIEVBVGAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTUwKTtcbiAgfTtcblxuICAvLyBkcmF3UGxhbnRzKHByb3BMaXN0KSB7XG4gIC8vICAgLy8gd2hpbGUgKChjYW52YXMuaGVpZ2h0IC0gMiAqIHdhbGwud2lkdGgpIC8gd2FsbC53aWR0aCA+PSBqKSB7XG4gIC8vICAgbGV0IGlkeCA9IGogJSBwcm9wTGlzdC5sZW5ndGg7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgY2FudmFzLndpZHRoIC0gcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgaisrO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBib2FyZCA9IG5ldyBCb2FyZCgpO1xuICBvYnN0YWNsZXMgPSBuZXcgU2V0KCk7XG5cbiAgdHJpZXMgPSAzO1xuICBjdXJyZW50U2NvcmUgPSAwO1xuICBsZXZlbCA9IDE7XG5cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50cmllcyA8PSAwKSB7XG4gICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lUmVzdWx0KHRoaXMudHJpZXMgPyBcIndpblwiIDogXCJsb3NlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yb3VuZCA9PT0gNSkge1xuICAgICAgdGhpcy5pbnRyb1BhZ2Uud2luLnN0eWxlLmRpc3BsYXkgPSBmbGV4O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYm9hcmRcbiAgICAgIC5pbml0SXRlbXModGhpcy5sZXZlbClcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQuYmVmb3JlR2FtZVN0YXJ0KHRoaXMubGV2ZWwpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5ib2FyZC5zaG93T2JzdGFjbGUodGhpcy5sZXZlbCkpXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLmJvYXJkLmFuaW1hdGUoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQucm91bmRSZXN1bHQoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy50cmllcyArPSByZXMubWlzcztcbiAgICAgICAgdGhpcy5sZXZlbCArPSByZXMubWlzcyArIDE7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgXCIuL2Nzcy9tYWluLmNzc1wiO1xuXG5pbXBvcnQgeyBJbnRyb1BhZ2UgfSBmcm9tIFwiLi9pbnRyb1BhZ2VcIjtcblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIGNvbnN0IGludHJvUGFnZSA9IG5ldyBJbnRyb1BhZ2UoKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50cm9QYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHRoaXMud2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5cIik7XG4gICAgdGhpcy5sb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb3NlXCIpO1xuICAgIHRoaXMuYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXBhZ2VcIik7XG4gICAgdGhpcy5nYW1lSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW50cm9cIik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgdGhpcy5hYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lO1xuXG4gICAgdGhpcy5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hYm91dEJ1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3RhcnRCdXR0b25IYW5kbGVyKTtcbiAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja0J1dHRvbkhhbmRsZXIpO1xuICB9XG5cbiAgYWJvdXRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBzdGFydEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAvL2dhbWUgc3RhcnQgaGVyZSBtYXliZS4uLlxuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBnYW1lKGxldmVsLCBsaWZlKTtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIHRoaXMuZ2FtZS5wbGF5KCk7XG4gIH07XG5cbiAgYmFja0J1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5hYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5nYW1lSW50cm8uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH07XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvcCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltYWdlVXJsLCB4LCB5LCBmcmFtZVggPSAwLCBmcmFtZVkgPSAwKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZyYW1lWCA9IGZyYW1lWDtcbiAgICB0aGlzLmZyYW1lWSA9IGZyYW1lWTtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGxldCBuYXR1cmFsV2lkdGggPSB0aGlzLmltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICAgIGxldCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy5pbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoID4gMCA/IHdpZHRoIDogbmF0dXJhbFdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPiAwID8gaGVpZ2h0IDogbmF0dXJhbEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdPYnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlVXJsO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCA/IHRoaXMuY2FudmFzLndpZHRoIDogdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0ID8gdGhpcy5jYW52YXMuaGVpZ2h0IDogdGhpcy5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIGRyYXdPYnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVYLFxuICAgICAgdGhpcy5mcmFtZVksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAyMCxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB0aGlzLndpZHRoICogMS4yLFxuICAgICAgdGhpcy5oZWlnaHQgKiAxLjJcbiAgICApO1xuICB9O1xuXG4gIG1vdmUgPSAoeCwgeSkgPT4ge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuICB9O1xuXG4gIGNoYW5nZUZyYW1lID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLmZyYW1lWCA9IHggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMuZnJhbWVZID0geSAqIHRoaXMuaGVpZ2h0O1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IHBsYW50VXJscyA9IFtcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvY2FjdHVzLnBuZ1wiLFxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9oZXJiLnBuZ1wiLFxuICBcIi4vaW1hZ2UvcGxhbnQvbWFuZ290cmVlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvcGxhbnQvcGFsbS5wbmdcIixcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvc3VuZmxvd2VyLnBuZ1wiXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L3R1bGlwLnBuZ1wiXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGZvb2RVcmxzID0gW1xuICBcIi4vaW1hZ2UvZm9vZC9hcHBsZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYmFuYW5hLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9iZWVyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9idXJnZXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nha2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2NoZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY29ybi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY3JvaXNzYW50LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9kYW5nby5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZG9udXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ZyaWVzLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9ncmFwZXMucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ljZV9jcmVhbS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvbGVtb24ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL21lYXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL29yYW5nZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGVhY2gucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BlYXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BpZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waXNoYS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcmFtZW4ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NwYWdoZXR0aS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3RyYXdiZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3VzaGkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N3ZWV0X3BvdGF0by5wbmdcIixcbl07XG5cbmV4cG9ydCBjb25zdCBnYW1lUmVzdWx0SW1nVXJscyA9IHtcbiAgbWlzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvbWlzc09uZS5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L21pc3NUd28ucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9taXNzVGhyZWUucG5nXCIsXG4gIF0sXG4gIHBhc3M6IFtcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NPbmUucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzVHdvLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc1RocmVlLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc0ZvdXIucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzRml2ZS5wbmdcIixcbiAgXSxcbiAgd2luOiBbXCIuL2ltYWdlL2NhdC93aW5uZXIucG5nXCJdLFxuICBsb3NlOiBbXCIuL2ltYWdlL2NhdC9sb3NlLnBuZ1wiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NpdGlvbkFycmF5ID0gW1xuICBbNzMsIDQ2XSxcbiAgWzczICsgNDcsIDQ2XSxcbiAgWzczICsgNDcgKiAyLCA0Nl0sXG4gIFs3MyArIDQ3ICogMywgNDZdLFxuICBbNzMgKyA0NyAqIDQsIDQ2XSxcbiAgWzczICsgNDcgKiA1LCA0Nl0sXG4gIFs3MyArIDQ3ICogNiwgNDZdLFxuICBbNzMgKyAzMTAsIDQ2XSxcbl07XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50TGV2ZWxcbiAqIEBwYXJhbSB7Kn0gZm9vZEtleXNcbiAqXG4gKiByYW5kb21seSBjaG9vc2Ugb2JzdGFjbGVzIG91dCBvZiB0aGUga2V5cyBvZiBjaG9zZW4gZm9vZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2JzdGFjbGUoY3VycmVudExldmVsLCBmb29kS2V5cykge1xuICBsZXQgb2JzdGFjbGVLZXlzID0gbmV3IFNldCgpO1xuXG4gIHdoaWxlIChvYnN0YWNsZUtleXMuc2l6ZSA8IGN1cnJlbnRMZXZlbCkge1xuICAgIGxldCByYW5kb21LZXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kS2V5cy5sZW5ndGgpO1xuICAgIG9ic3RhY2xlS2V5cy5hZGQoZm9vZEtleXNbcmFuZG9tS2V5XSk7XG4gIH1cbiAgcmV0dXJuIG9ic3RhY2xlS2V5cztcbn1cbiIsImltcG9ydCB7IGdhbWVSZXN1bHRJbWdVcmxzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgUHJvcCB9IGZyb20gXCIuLi9wcm9wXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJlc3VsdFByb3BzID0gKCkgPT4ge1xuICBsZXQgZ2FtZVJlc3VsdFByb3BzID0ge307XG4gIGZvciAobGV0IGtleSBpbiBnYW1lUmVzdWx0SW1nVXJscykge1xuICAgIGlmICghKGtleSBpbiBnYW1lUmVzdWx0UHJvcHMpKSB7XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XSA9IFtdO1xuICAgIH1cbiAgICBnYW1lUmVzdWx0SW1nVXJsc1trZXldLmZvckVhY2goKGUpID0+XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XS5wdXNoKG5ldyBQcm9wKDAsIDAsIGUsIDAsIDApKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZ2FtZVJlc3VsdFByb3BzO1xufTtcbiIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi4vcHJvcFwiO1xuXG5jb25zdCBwb3NpdGlvbkFyckdlbmVyYXRvciA9IChcbiAgZmlyc3RYID0gNjMsXG4gIGZpcnN0WSA9IDQ1LFxuICBoZWlnaHQgPSA3MixcbiAgd2lkdGggPSA0NixcbiAgcGFudHJ5TGV2ZWwgPSA1XG4pID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbiAgICAgIGlmICgoaSA9PT0gNCAmJiBqID09PSAwKSB8fCAoaSA9PT0gNCAmJiBqID09PSAxKSkgY29udGludWU7XG4gICAgICByZXN1bHQucHVzaChbZmlyc3RYICsgd2lkdGggKiBqLCBmaXJzdFkgKyBoZWlnaHQgKiBpXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVByb3BzKGN1cnJlbnRMZXZlbCwgaW1hZ2VVcmxzKSB7XG4gIGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBwb3NpdGlvbkFyckdlbmVyYXRvcigpO1xuICBsZXQgaWR4ID0gMDtcblxuICBsZXQgcmFuZG9tSW1hZ2VVcmxzID0gbmV3IFNldCgpO1xuICBsZXQgcmFuZG9tUG9zaXRpb25TZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBlbGVtZW50Q291bnQgPSBjdXJyZW50TGV2ZWwgKyAxMjtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlIChyYW5kb21JbWFnZVVybHMuc2l6ZSA8IGVsZW1lbnRDb3VudCkge1xuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlVXJscy5sZW5ndGgpO1xuICAgIHJhbmRvbUltYWdlVXJscy5hZGQoaWR4KTtcbiAgfVxuXG4gIHdoaWxlIChyYW5kb21Qb3NpdGlvblNldC5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25BcnJheS5sZW5ndGgpO1xuICAgIHJhbmRvbVBvc2l0aW9uU2V0LmFkZChpZHgpO1xuICB9XG5cbiAgbGV0IGltZ0FyciA9IEFycmF5LmZyb20ocmFuZG9tSW1hZ2VVcmxzKTtcbiAgbGV0IHBvc0FyciA9IEFycmF5LmZyb20ocmFuZG9tUG9zaXRpb25TZXQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gbmV3IFByb3AoXG4gICAgICAzMixcbiAgICAgIDMyLFxuICAgICAgaW1hZ2VVcmxzW2ltZ0FycltpXV0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMF0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMV1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=