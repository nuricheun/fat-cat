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
___CSS_LOADER_EXPORT___.push([module.i, ".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n\n  font-family: \"Lalezar cursive\";\n  font-size: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#game-over {\n  display: none;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n#win {\n  display: flex;\n  /* background-image: url(\"../image/cat/lose.png\"); */\n}\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;;EAEnB,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,oDAAoD;AACtD","sourcesContent":[".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n\n  font-family: \"Lalezar cursive\";\n  font-size: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#game-over {\n  display: none;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.myCanvas {\n  display: none;\n  width: 100%;\n  margin: 0 auto;\n}\n\n#win {\n  display: flex;\n  /* background-image: url(\"../image/cat/lose.png\"); */\n}\n"],"sourceRoot":""}]);
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

  _defineProperty(this, "initItems", function (round) {
    return new Promise(function (resolve, reject) {
      _this.miss = false;
      _this.pass = false;
      _this.cat = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, "./image/fatcat.png", 63, 335, _this.frameX, _this.frameY);
      _this.foods = Object(_util_randomGeneration__WEBPACK_IMPORTED_MODULE_4__["generateRandomProps"])(round, _util_data__WEBPACK_IMPORTED_MODULE_3__["foodUrls"]);
      _this.obstacle = Object(_util_generateObstacle__WEBPACK_IMPORTED_MODULE_5__["generateObstacle"])(round + 2, Object.keys(_this.foods));
      resolve(1);
    });
  });

  _defineProperty(this, "drawBoard", function () {
    // this.canvas.drawCanvas("yellow");
    _this.canvas.drawProps(_this.foods);
  });

  _defineProperty(this, "gameOver", function () {
    _this.canvas.clear();
  });

  _defineProperty(this, "beforeGameStart", function (round) {
    return new Promise(function (resolve, reject) {
      var start = Date.now();

      var backgroundLoop = function backgroundLoop() {
        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(round);

        if (Date.now() - start < 1200) {
          requestAnimationFrame(backgroundLoop);
        } else {
          resolve();
        }
      };

      backgroundLoop();
    });
  });

  _defineProperty(this, "showObstacle", function (round) {
    return new Promise(function (resolve, reject) {
      var idx = 0;
      var keys = Array.from(_this.obstacle);
      var end = keys.length;
      var start = Date.now();

      var obstacleLoop = function obstacleLoop() {
        _this.canvas.clear();

        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(round);

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


var Game = function Game(level) {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "board", new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]());

  _defineProperty(this, "done", document.getElementById("game-over"));

  _defineProperty(this, "obstacles", new Set());

  _defineProperty(this, "round", 1);

  _defineProperty(this, "tries", 3);

  _defineProperty(this, "currentScore", 0);

  _defineProperty(this, "play", function () {
    if (_this.tries <= 0) {
      // this.board.drawGameResult(this.tries ? "win" : "lose");
      _this.board.gameOver();

      _this.done.style.display = "flex";
      return;
    } else if (_this.round === 5) {
      _this.introPage.win.style.display = "flex";
      return;
    }

    _this.board.initItems(_this.round).then(function (res) {
      return _this.board.beforeGameStart(_this.round);
    }).then(function (res) {
      return _this.board.showObstacle(_this.round);
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

  this.level = level;
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

    _this.gameIntro.style.display = "none";
    _this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();

    _this.game.play(1);
  });

  _defineProperty(this, "backButtonHandler", function () {
    _this.about.style.display = "none";
    _this.gameIntro.style.display = "";
  });

  _defineProperty(this, "backToMainButtonHandler", function () {
    _this.gameIntro.style.display = "flex";
    _this.gameover.style.display = "none";
  });

  this.main = document.getElementById("main");
  this.about = document.getElementById("about-page");
  this.gameover = document.getElementById("game-over");
  this.gameIntro = document.getElementById("game-intro");
  this.startButton = document.getElementById("start");
  this.aboutButton = document.getElementById("about");
  this.backButton = document.getElementById("back");
  this.backToMainButton = document.getElementById("back-to-main");
  main.style.display = "flex";
  this.gameStart = false;
  this.game;
  this.aboutButton.addEventListener("click", this.aboutButtonHandler);
  this.startButton.addEventListener("click", this.startButtonHandler);
  this.backButton.addEventListener("click", this.backButtonHandler);
  this.backToMainButton.addEventListener("click", this.backToMainButtonHandler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRyb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BJbWFnZVVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZU9ic3RhY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlUmVzdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbUdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiQm9hcmQiLCJDYW52YXMiLCJQcm9wIiwiZ2VuZXJhdGVSZXN1bHRQcm9wcyIsIlNldCIsInJvdW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtaXNzIiwicGFzcyIsImNhdCIsImZyYW1lWCIsImZyYW1lWSIsImZvb2RzIiwiZ2VuZXJhdGVSYW5kb21Qcm9wcyIsImZvb2RVcmxzIiwib2JzdGFjbGUiLCJnZW5lcmF0ZU9ic3RhY2xlIiwiT2JqZWN0Iiwia2V5cyIsImNhbnZhcyIsImRyYXdQcm9wcyIsImNsZWFyIiwic3RhcnQiLCJEYXRlIiwibm93IiwiYmFja2dyb3VuZExvb3AiLCJkcmF3Q2FudmFzIiwiZHJhd1RleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpZHgiLCJBcnJheSIsImZyb20iLCJlbmQiLCJsZW5ndGgiLCJvYnN0YWNsZUxvb3AiLCJkcmF3T2JzIiwicmVuZGVyIiwibG9vcCIsImRyYXdNaXNzVGV4dCIsInJlc3VsdENhdCIsImRyYXciLCJyZXN1bHQiLCJmb29kWCIsImZvb2RZIiwia2V5IiwiZm9vZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFjZVByZXNzZWQiLCJoYXMiLCJhbmltYXRlTG9vcCIsImJhY2tncm91bmQiLCJkcmF3Qm9hcmQiLCJwb3NpdGlvbkNoYW5nZSIsInNwcml0ZVBvc2l0aW9uVXBkYXRlIiwiZGVsZXRlSXRlbSIsImlzRXF1YWwiLCJlIiwia2V5Q29kZSIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwidXBQcmVzc2VkIiwiZG93blByZXNzZWQiLCJtb3ZlIiwicHJvcCIsImNoYW5nZUZyYW1lIiwib2JzdGFjbGVTZXQiLCJzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjb2xvciIsImN0eCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaSIsImRyYXdJbWFnZSIsImltYWdlIiwicHJvcHMiLCJsZXZlbCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsIm1pc3NMZWZ0IiwiR2FtZSIsInRyaWVzIiwiYm9hcmQiLCJnYW1lT3ZlciIsImRvbmUiLCJzdHlsZSIsImRpc3BsYXkiLCJpbnRyb1BhZ2UiLCJ3aW4iLCJpbml0SXRlbXMiLCJ0aGVuIiwicmVzIiwiYmVmb3JlR2FtZVN0YXJ0Iiwic2hvd09ic3RhY2xlIiwiYW5pbWF0ZSIsInJvdW5kUmVzdWx0IiwicGxheSIsIm9ubG9hZCIsIkludHJvUGFnZSIsImFib3V0IiwiZ2FtZUludHJvIiwibWFpbiIsImdhbWUiLCJnYW1lb3ZlciIsInN0YXJ0QnV0dG9uIiwiYWJvdXRCdXR0b24iLCJiYWNrQnV0dG9uIiwiYmFja1RvTWFpbkJ1dHRvbiIsImdhbWVTdGFydCIsImFib3V0QnV0dG9uSGFuZGxlciIsInN0YXJ0QnV0dG9uSGFuZGxlciIsImJhY2tCdXR0b25IYW5kbGVyIiwiYmFja1RvTWFpbkJ1dHRvbkhhbmRsZXIiLCJpbWFnZVVybCIsIkltYWdlIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInNyYyIsInBsYW50VXJscyIsImdhbWVSZXN1bHRJbWdVcmxzIiwibG9zZSIsInBvc2l0aW9uQXJyYXkiLCJjdXJyZW50TGV2ZWwiLCJmb29kS2V5cyIsIm9ic3RhY2xlS2V5cyIsInJhbmRvbUtleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZCIsImdhbWVSZXN1bHRQcm9wcyIsImZvckVhY2giLCJwdXNoIiwicG9zaXRpb25BcnJHZW5lcmF0b3IiLCJmaXJzdFgiLCJmaXJzdFkiLCJwYW50cnlMZXZlbCIsImoiLCJpbWFnZVVybHMiLCJyYW5kb21JbWFnZVVybHMiLCJyYW5kb21Qb3NpdGlvblNldCIsImVsZW1lbnRDb3VudCIsImltZ0FyciIsInBvc0FyciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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eUJtRixZQUFoQyxFQUE4QztBQUM1QzNILE9BQUcsR0FBRzRHLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLGFBQWEsQ0FBQ25HLE1BQXpDLENBQU47QUFDQXNILHFCQUFpQixDQUFDWCxHQUFsQixDQUFzQi9HLEdBQXRCO0FBQ0Q7O0FBRUQsTUFBSTRILE1BQU0sR0FBRzNILEtBQUssQ0FBQ0MsSUFBTixDQUFXdUgsZUFBWCxDQUFiO0FBQ0EsTUFBSUksTUFBTSxHQUFHNUgsS0FBSyxDQUFDQyxJQUFOLENBQVd3SCxpQkFBWCxDQUFiOztBQUVBLE9BQUssSUFBSXJFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1RSxNQUFNLENBQUN4SCxNQUEzQixFQUFtQ2lELENBQUMsRUFBcEMsRUFBd0M7QUFDdEN6QyxVQUFNLENBQUN5QyxDQUFELENBQU4sR0FBWSxJQUFJbEYsMENBQUosQ0FDVixFQURVLEVBRVYsRUFGVSxFQUdWcUosU0FBUyxDQUFDSSxNQUFNLENBQUN2RSxDQUFELENBQVAsQ0FIQyxFQUlWa0QsYUFBYSxDQUFDc0IsTUFBTSxDQUFDeEUsQ0FBRCxDQUFQLENBQWIsQ0FBeUIsQ0FBekIsQ0FKVSxFQUtWa0QsYUFBYSxDQUFDc0IsTUFBTSxDQUFDeEUsQ0FBRCxDQUFQLENBQWIsQ0FBeUIsQ0FBekIsQ0FMVSxDQUFaO0FBT0Q7O0FBRUQsU0FBT3pDLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYWxlemFyIGN1cnNpdmVcXFwiO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51cCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLmRvd24ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMnB4IDA7XFxufVxcblxcbi5yaWdodCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDY0cHggMDtcXG59XFxuXFxuLmxlZnQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2ZhdGNhdGludHJvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uZXhwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uZXhwOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNhdGltZy1kaXYge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2Fib3V0LXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBmb250LXNpemU6IDE3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbiNpbnRyby1kaXYge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubXlDYW52YXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiN3aW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2UvY2F0L2xvc2UucG5nXFxcIik7ICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1COztFQUVuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvREFBb0Q7QUFDdERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYWxlemFyIGN1cnNpdmVcXFwiO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1vdmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51cCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLmRvd24ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMnB4IDA7XFxufVxcblxcbi5yaWdodCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDY0cHggMDtcXG59XFxuXFxuLmxlZnQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAwO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2ZhdGNhdGludHJvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uZXhwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uZXhwOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNhdGltZy1kaXYge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2Fib3V0LXBhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBmb250LXNpemU6IDE3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbiNpbnRyby1kaXYge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubXlDYW52YXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiN3aW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2UvY2F0L2xvc2UucG5nXFxcIik7ICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi9wcm9wXCI7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IHBsYW50VXJscyB9IGZyb20gXCIuL3Byb3BJbWFnZVVybHNcIjtcbmltcG9ydCB7IGZvb2RVcmxzIH0gZnJvbSBcIi4vdXRpbC9kYXRhXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbVByb3BzIH0gZnJvbSBcIi4vdXRpbC9yYW5kb21HZW5lcmF0aW9uXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU9ic3RhY2xlIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZU9ic3RhY2xlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJlc3VsdFByb3BzIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZVJlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgZnJhbWVYID0gMDtcbiAgZnJhbWVZID0gMDtcblxuICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuXG4gIGNhdDtcbiAgYmFja2dyb3VuZCA9IG5ldyBQcm9wKDAsIDAsIFwiLi9pbWFnZS9jYXQvcGFudHJ5LnBuZ1wiLCAwLCAwKTtcblxuICByZXN1bHRDYXQgPSBnZW5lcmF0ZVJlc3VsdFByb3BzKCk7XG4gIGZvb2RzID0ge307XG4gIG9ic3RhY2xlID0gbmV3IFNldCgpO1xuXG4gIG1pc3MgPSBmYWxzZTtcbiAgcGFzcyA9IGZhbHNlO1xuXG4gIGluaXRJdGVtcyA9IChyb3VuZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLm1pc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXQgPSBuZXcgUHJvcChcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICBcIi4vaW1hZ2UvZmF0Y2F0LnBuZ1wiLFxuICAgICAgICA2MyxcbiAgICAgICAgMzM1LFxuICAgICAgICB0aGlzLmZyYW1lWCxcbiAgICAgICAgdGhpcy5mcmFtZVlcbiAgICAgICk7XG4gICAgICB0aGlzLmZvb2RzID0gZ2VuZXJhdGVSYW5kb21Qcm9wcyhyb3VuZCwgZm9vZFVybHMpO1xuICAgICAgdGhpcy5vYnN0YWNsZSA9IGdlbmVyYXRlT2JzdGFjbGUocm91bmQgKyAyLCBPYmplY3Qua2V5cyh0aGlzLmZvb2RzKSk7XG5cbiAgICAgIHJlc29sdmUoMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZHJhd0JvYXJkID0gKCkgPT4ge1xuICAgIC8vIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ5ZWxsb3dcIik7XG4gICAgdGhpcy5jYW52YXMuZHJhd1Byb3BzKHRoaXMuZm9vZHMpO1xuICB9O1xuXG4gIGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gIH07XG5cbiAgYmVmb3JlR2FtZVN0YXJ0ID0gKHJvdW5kKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kTG9vcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcImdyZWVuXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3VGV4dChyb3VuZCk7XG5cbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA8IDEyMDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmFja2dyb3VuZExvb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGJhY2tncm91bmRMb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc2hvd09ic3RhY2xlID0gKHJvdW5kKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBpZHggPSAwO1xuICAgICAgbGV0IGtleXMgPSBBcnJheS5mcm9tKHRoaXMub2JzdGFjbGUpO1xuICAgICAgbGV0IGVuZCA9IGtleXMubGVuZ3RoO1xuICAgICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IG9ic3RhY2xlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcImdyZWVuXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3VGV4dChyb3VuZCk7XG4gICAgICAgIHRoaXMuZm9vZHNba2V5c1tpZHhdXS5kcmF3T2JzKCk7XG5cbiAgICAgICAgaWYgKGlkeCA8IGVuZCAmJiBEYXRlLm5vdygpIC0gc3RhcnQgPCA4MDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzdGFjbGVMb29wKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPCBlbmQgLSAxKSB7XG4gICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShvYnN0YWNsZUxvb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG9ic3RhY2xlTG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJvdW5kUmVzdWx0ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcmVuZGVyO1xuXG4gICAgICBpZiAodGhpcy5taXNzKSB7XG4gICAgICAgIHJlbmRlciA9IFwibWlzc1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyID0gXCJwYXNzXCI7XG4gICAgICB9XG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcIndoaXRlXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3TWlzc1RleHQodGhpcy5taXNzKTtcblxuICAgICAgICB0aGlzLnJlc3VsdENhdFtyZW5kZXJdWzBdLmRyYXcoKTtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA8IDE1MDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IG1pc3M6IHJlbmRlciA9PT0gXCJtaXNzXCIgPyAtMSA6IDAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBsb29wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZHJhd0dhbWVSZXN1bHQgPSAocmVzdWx0KSA9PiB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwid2hpdGVcIik7XG4gICAgdGhpcy5yZXN1bHRDYXRbcmVzdWx0XVswXS5kcmF3KCk7XG4gIH07XG5cbiAgZGVsZXRlSXRlbSA9ICgpID0+IHtcbiAgICBsZXQgZm9vZFg7XG4gICAgbGV0IGZvb2RZO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZm9vZHMpIHtcbiAgICAgIGxldCBmb29kID0gdGhpcy5mb29kc1trZXldO1xuICAgICAgZm9vZFggPSBmb29kLng7XG4gICAgICBmb29kWSA9IGZvb2QueTtcbiAgICAgIGlmIChcbiAgICAgICAgZm9vZFggLSAyMCA8PSB0aGlzLmNhdC54ICsgMyAmJlxuICAgICAgICBmb29kWCArIGZvb2Qud2lkdGggPj0gdGhpcy5jYXQueCArIHRoaXMuY2F0LndpZHRoIC0gMyAmJlxuICAgICAgICBmb29kWSAtIDIwIDw9IHRoaXMuY2F0LnkgKyAzICYmXG4gICAgICAgIGZvb2RZICsgZm9vZC5oZWlnaHQgPj0gdGhpcy5jYXQueSArIHRoaXMuY2F0LmhlaWdodCAtIDMgJiZcbiAgICAgICAgdGhpcy5zcGFjZVByZXNzZWRcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5vYnN0YWNsZS5oYXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmZvb2RzW2tleV07XG4gICAgICAgICAgdGhpcy5vYnN0YWNsZS5kZWxldGUoa2V5KTtcbiAgICAgICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWlzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0ZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0JvYXJkKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25DaGFuZ2UodGhpcy5jYXQpO1xuICAgICAgICB0aGlzLnNwcml0ZVBvc2l0aW9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbSgpO1xuICAgICAgICB0aGlzLmlzRXF1YWwodGhpcy5vYnN0YWNsZSk7XG4gICAgICAgIHRoaXMuY2F0LmRyYXcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm1pc3MgJiYgIXRoaXMucGFzcykge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShcIjNcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhbmltYXRlTG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGtleVVwSGFuZGxlciA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgdGhpcy5zcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGxldCB5ID0gMDtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICB0aGlzLnVwUHJlc3NlZCA9IHRydWU7XG4gICAgICB5IC09IDc0O1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IHRydWU7XG5cbiAgICAgIHkgKz0gNzQ7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jYXQubW92ZSgwLCB5KTtcbiAgfTtcblxuICBwb3NpdGlvbkNoYW5nZSA9IChwcm9wKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIC8vIGxldCB5ID0gMDtcblxuICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCAmJiBwcm9wLnggPCB0aGlzLmNhbnZhcy53aWR0aCAtIHByb3Aud2lkdGgpIHtcbiAgICAgIHggKz0gMztcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQgJiYgcHJvcC54ID4gMCkge1xuICAgICAgeCAtPSAzO1xuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnVwUHJlc3NlZCAmJiBwcm9wLnkgPiB0aGlzLndhbGwud2lkdGggLSA5KSB7XG4gICAgLy8gICB5IC09IDM7XG4gICAgLy8gfSBlbHNlIGlmIChcbiAgICAvLyAgIHRoaXMuZG93blByZXNzZWQgJiZcbiAgICAvLyAgIHkgPCB0aGlzLmNhbnZhcy5oZWlnaHQgLSBwcm9wLndpZHRoIC0gdGhpcy53YWxsLndpZHRoIC0gNVxuICAgIC8vICkge1xuICAgIC8vICAgeSArPSAzO1xuICAgIC8vIH1cblxuICAgIHByb3AubW92ZSh4LCAwKTtcbiAgfTtcblxuICBzcHJpdGVQb3NpdGlvblVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5yaWdodFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSA4KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPj0gOCkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lWCArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy51cFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSAyKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmRvd25QcmVzc2VkKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPj0gMikge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lWCArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhdC5jaGFuZ2VGcmFtZSh0aGlzLmZyYW1lWCwgMCk7XG4gIH07XG5cbiAgaXNFcXVhbCA9IChvYnN0YWNsZVNldCkgPT4ge1xuICAgIGlmIChvYnN0YWNsZVNldC5zaXplID09PSAwKSB7XG4gICAgICB0aGlzLnBhc3MgPSB0cnVlO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDYW52YXMge1xuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgXG5cbiAgZHJhd0NhbnZhcyA9IChjb2xvcikgPT4ge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfTtcblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgZGVjb3JhdGVDYW52YXMgPSAocHJvcCkgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgIGkgKiBwcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICBpICogcHJvcC53aWR0aCxcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC5oZWlnaHQsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICApO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBkcmF3UHJvcHMgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBsZXQgcHJvcCA9IHByb3BzW2tleXNbaV1dO1xuICAgICAgcHJvcC5kcmF3KCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdUZXh0ID0gKGxldmVsLCBjb2xvciA9IFwiI2ZmZlwiKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBMYWxlemFyLCBjdXJzaXZlXCI7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgUm91bmQgJHtsZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDExMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFlPVSBDQU4gRUFUYCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxNTApO1xuICB9O1xuXG4gIGRyYXdNaXNzVGV4dCA9IChtaXNzTGVmdCwgY29sb3IgPSBcIiNmZmZcIikgPT4ge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggTGFsZXphciwgY3Vyc2l2ZVwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIk9vcHNcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAqICR7bWlzc0xlZnR9IExlZnQqYCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBZT1UgQ0FOIEVBVGAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTUwKTtcbiAgfTtcblxuICAvLyBkcmF3UGxhbnRzKHByb3BMaXN0KSB7XG4gIC8vICAgLy8gd2hpbGUgKChjYW52YXMuaGVpZ2h0IC0gMiAqIHdhbGwud2lkdGgpIC8gd2FsbC53aWR0aCA+PSBqKSB7XG4gIC8vICAgbGV0IGlkeCA9IGogJSBwcm9wTGlzdC5sZW5ndGg7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgY2FudmFzLndpZHRoIC0gcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgaisrO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgfVxuICBib2FyZCA9IG5ldyBCb2FyZCgpO1xuICBkb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW92ZXJcIik7XG4gIG9ic3RhY2xlcyA9IG5ldyBTZXQoKTtcbiAgcm91bmQgPSAxO1xuICB0cmllcyA9IDM7XG4gIGN1cnJlbnRTY29yZSA9IDA7XG5cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50cmllcyA8PSAwKSB7XG4gICAgICAvLyB0aGlzLmJvYXJkLmRyYXdHYW1lUmVzdWx0KHRoaXMudHJpZXMgPyBcIndpblwiIDogXCJsb3NlXCIpO1xuICAgICAgdGhpcy5ib2FyZC5nYW1lT3ZlcigpO1xuICAgICAgdGhpcy5kb25lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm91bmQgPT09IDUpIHtcbiAgICAgIHRoaXMuaW50cm9QYWdlLndpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ib2FyZFxuICAgICAgLmluaXRJdGVtcyh0aGlzLnJvdW5kKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5ib2FyZC5iZWZvcmVHYW1lU3RhcnQodGhpcy5yb3VuZCkpXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLmJvYXJkLnNob3dPYnN0YWNsZSh0aGlzLnJvdW5kKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQuYW5pbWF0ZSgpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5ib2FyZC5yb3VuZFJlc3VsdCgpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnRyaWVzICs9IHJlcy5taXNzO1xuICAgICAgICB0aGlzLmxldmVsICs9IHJlcy5taXNzICsgMTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4vY3NzL21haW4uY3NzXCI7XG5cbmltcG9ydCB7IEludHJvUGFnZSB9IGZyb20gXCIuL2ludHJvUGFnZVwiO1xuXG53aW5kb3cub25sb2FkID0gKGUpID0+IHtcbiAgY29uc3QgaW50cm9QYWdlID0gbmV3IEludHJvUGFnZSgpO1xufTtcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRyb1BhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgdGhpcy5hYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtcGFnZVwiKTtcbiAgICB0aGlzLmdhbWVvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW92ZXJcIik7XG4gICAgdGhpcy5nYW1lSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW50cm9cIik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgdGhpcy5hYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuICAgIHRoaXMuYmFja1RvTWFpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjay10by1tYWluXCIpO1xuXG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5nYW1lU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWU7XG5cbiAgICB0aGlzLmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFib3V0QnV0dG9uSGFuZGxlcik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdGFydEJ1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5iYWNrQnV0dG9uSGFuZGxlcik7XG4gICAgdGhpcy5iYWNrVG9NYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICB0aGlzLmJhY2tUb01haW5CdXR0b25IYW5kbGVyXG4gICAgKTtcbiAgfVxuXG4gIGFib3V0QnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmFib3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG5cbiAgc3RhcnRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICB0aGlzLmdhbWUucGxheSgxKTtcbiAgfTtcblxuICBiYWNrQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfTtcblxuICBiYWNrVG9NYWluQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGhpcy5nYW1lb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvcCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltYWdlVXJsLCB4LCB5LCBmcmFtZVggPSAwLCBmcmFtZVkgPSAwKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZyYW1lWCA9IGZyYW1lWDtcbiAgICB0aGlzLmZyYW1lWSA9IGZyYW1lWTtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGxldCBuYXR1cmFsV2lkdGggPSB0aGlzLmltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICAgIGxldCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy5pbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoID4gMCA/IHdpZHRoIDogbmF0dXJhbFdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPiAwID8gaGVpZ2h0IDogbmF0dXJhbEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdPYnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlVXJsO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCA/IHRoaXMuY2FudmFzLndpZHRoIDogdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0ID8gdGhpcy5jYW52YXMuaGVpZ2h0IDogdGhpcy5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIGRyYXdPYnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVYLFxuICAgICAgdGhpcy5mcmFtZVksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSAyMCxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDIsXG4gICAgICB0aGlzLndpZHRoICogMS4yLFxuICAgICAgdGhpcy5oZWlnaHQgKiAxLjJcbiAgICApO1xuICB9O1xuXG4gIG1vdmUgPSAoeCwgeSkgPT4ge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuICB9O1xuXG4gIGNoYW5nZUZyYW1lID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLmZyYW1lWCA9IHggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMuZnJhbWVZID0geSAqIHRoaXMuaGVpZ2h0O1xuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IHBsYW50VXJscyA9IFtcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvY2FjdHVzLnBuZ1wiLFxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9oZXJiLnBuZ1wiLFxuICBcIi4vaW1hZ2UvcGxhbnQvbWFuZ290cmVlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvcGxhbnQvcGFsbS5wbmdcIixcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvc3VuZmxvd2VyLnBuZ1wiXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L3R1bGlwLnBuZ1wiXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGZvb2RVcmxzID0gW1xuICBcIi4vaW1hZ2UvZm9vZC9hcHBsZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYmFuYW5hLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9iZWVyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9idXJnZXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nha2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2NoZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY29ybi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY3JvaXNzYW50LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jdXN0YXJkLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9kYW5nby5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZG9udXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ZyaWVzLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9ncmFwZXMucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2ljZV9jcmVhbS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvbGVtb24ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL21lYXQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL29yYW5nZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGVhY2gucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BlYXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BpZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGluZWFwcGxlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waXNoYS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcmFtZW4ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NoYXZlZF9pY2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3NwYWdoZXR0aS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3RyYXdiZXJyeS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3VzaGkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N3ZWV0X3BvdGF0by5wbmdcIixcbl07XG5cbmV4cG9ydCBjb25zdCBnYW1lUmVzdWx0SW1nVXJscyA9IHtcbiAgbWlzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvbWlzc09uZS5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L21pc3NUd28ucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9taXNzVGhyZWUucG5nXCIsXG4gIF0sXG4gIHBhc3M6IFtcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NPbmUucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzVHdvLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc1RocmVlLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvcGFzc0ZvdXIucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzRml2ZS5wbmdcIixcbiAgXSxcbiAgd2luOiBbXCIuL2ltYWdlL2NhdC93aW5uZXIucG5nXCJdLFxuICBsb3NlOiBbXCIuL2ltYWdlL2NhdC9sb3NlLnBuZ1wiXSxcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NpdGlvbkFycmF5ID0gW1xuICBbNzMsIDQ2XSxcbiAgWzczICsgNDcsIDQ2XSxcbiAgWzczICsgNDcgKiAyLCA0Nl0sXG4gIFs3MyArIDQ3ICogMywgNDZdLFxuICBbNzMgKyA0NyAqIDQsIDQ2XSxcbiAgWzczICsgNDcgKiA1LCA0Nl0sXG4gIFs3MyArIDQ3ICogNiwgNDZdLFxuICBbNzMgKyAzMTAsIDQ2XSxcbl07XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50TGV2ZWxcbiAqIEBwYXJhbSB7Kn0gZm9vZEtleXNcbiAqXG4gKiByYW5kb21seSBjaG9vc2Ugb2JzdGFjbGVzIG91dCBvZiB0aGUga2V5cyBvZiBjaG9zZW4gZm9vZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2JzdGFjbGUoY3VycmVudExldmVsLCBmb29kS2V5cykge1xuICBsZXQgb2JzdGFjbGVLZXlzID0gbmV3IFNldCgpO1xuXG4gIHdoaWxlIChvYnN0YWNsZUtleXMuc2l6ZSA8IGN1cnJlbnRMZXZlbCkge1xuICAgIGxldCByYW5kb21LZXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kS2V5cy5sZW5ndGgpO1xuICAgIG9ic3RhY2xlS2V5cy5hZGQoZm9vZEtleXNbcmFuZG9tS2V5XSk7XG4gIH1cbiAgcmV0dXJuIG9ic3RhY2xlS2V5cztcbn1cbiIsImltcG9ydCB7IGdhbWVSZXN1bHRJbWdVcmxzIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHsgUHJvcCB9IGZyb20gXCIuLi9wcm9wXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJlc3VsdFByb3BzID0gKCkgPT4ge1xuICBsZXQgZ2FtZVJlc3VsdFByb3BzID0ge307XG4gIGZvciAobGV0IGtleSBpbiBnYW1lUmVzdWx0SW1nVXJscykge1xuICAgIGlmICghKGtleSBpbiBnYW1lUmVzdWx0UHJvcHMpKSB7XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XSA9IFtdO1xuICAgIH1cbiAgICBnYW1lUmVzdWx0SW1nVXJsc1trZXldLmZvckVhY2goKGUpID0+XG4gICAgICBnYW1lUmVzdWx0UHJvcHNba2V5XS5wdXNoKG5ldyBQcm9wKDAsIDAsIGUsIDAsIDApKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZ2FtZVJlc3VsdFByb3BzO1xufTtcbiIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi4vcHJvcFwiO1xuXG5jb25zdCBwb3NpdGlvbkFyckdlbmVyYXRvciA9IChcbiAgZmlyc3RYID0gNjMsXG4gIGZpcnN0WSA9IDQ1LFxuICBoZWlnaHQgPSA3MixcbiAgd2lkdGggPSA0NixcbiAgcGFudHJ5TGV2ZWwgPSA1XG4pID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA2OyBqKyspIHtcbiAgICAgIGlmICgoaSA9PT0gNCAmJiBqID09PSAwKSB8fCAoaSA9PT0gNCAmJiBqID09PSAxKSkgY29udGludWU7XG4gICAgICByZXN1bHQucHVzaChbZmlyc3RYICsgd2lkdGggKiBqLCBmaXJzdFkgKyBoZWlnaHQgKiBpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVByb3BzKGN1cnJlbnRMZXZlbCwgaW1hZ2VVcmxzKSB7XG4gIGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBwb3NpdGlvbkFyckdlbmVyYXRvcigpO1xuICBsZXQgaWR4ID0gMDtcblxuICBsZXQgcmFuZG9tSW1hZ2VVcmxzID0gbmV3IFNldCgpO1xuICBsZXQgcmFuZG9tUG9zaXRpb25TZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBlbGVtZW50Q291bnQgPSBjdXJyZW50TGV2ZWwgKyAxMjtcbiAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gIHdoaWxlIChyYW5kb21JbWFnZVVybHMuc2l6ZSA8IGVsZW1lbnRDb3VudCkge1xuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlVXJscy5sZW5ndGgpO1xuICAgIHJhbmRvbUltYWdlVXJscy5hZGQoaWR4KTtcbiAgfVxuXG4gIHdoaWxlIChyYW5kb21Qb3NpdGlvblNldC5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25BcnJheS5sZW5ndGgpO1xuICAgIHJhbmRvbVBvc2l0aW9uU2V0LmFkZChpZHgpO1xuICB9XG5cbiAgbGV0IGltZ0FyciA9IEFycmF5LmZyb20ocmFuZG9tSW1hZ2VVcmxzKTtcbiAgbGV0IHBvc0FyciA9IEFycmF5LmZyb20ocmFuZG9tUG9zaXRpb25TZXQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0W2ldID0gbmV3IFByb3AoXG4gICAgICAzMixcbiAgICAgIDMyLFxuICAgICAgaW1hZ2VVcmxzW2ltZ0FycltpXV0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMF0sXG4gICAgICBwb3NpdGlvbkFycmF5W3Bvc0FycltpXV1bMV1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=