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
___CSS_LOADER_EXPORT___.push([module.i, ".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  width: 100%;\n  margin: 0 auto;\n}\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB","sourcesContent":[".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  width: 100%;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
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

  _defineProperty(this, "cat", void 0);

  _defineProperty(this, "wall", new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, "./image/fence.png", 0, 0));

  _defineProperty(this, "resultCat", Object(_util_generateResult__WEBPACK_IMPORTED_MODULE_6__["generateResult"])());

  _defineProperty(this, "foods", {});

  _defineProperty(this, "obstacle", new Set());

  _defineProperty(this, "miss", false);

  _defineProperty(this, "pass", false);

  _defineProperty(this, "initItems", function (level) {
    return new Promise(function (resolve, reject) {
      _this.miss = false;
      _this.pass = false;
      _this.cat = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, "./image/fatcat.png", _this.canvas.width / 2, _this.canvas.width / 2, _this.frameX, _this.frameY);
      _this.foods = Object(_util_randomGeneration__WEBPACK_IMPORTED_MODULE_4__["generateRandomProps"])(level, _util_data__WEBPACK_IMPORTED_MODULE_3__["foodUrls"], _util_data__WEBPACK_IMPORTED_MODULE_3__["positionSetArray"]);
      _this.obstacle = Object(_util_generateObstacle__WEBPACK_IMPORTED_MODULE_5__["generateObstacle"])(level, Object.keys(_this.foods));
      resolve(1);
    });
  });

  _defineProperty(this, "drawBoard", function () {
    _this.canvas.drawCanvas("yellow"); // this.canvas.decorateCanvas(this.wall);


    _this.canvas.drawProps(_this.foods);
  });

  _defineProperty(this, "showObstacle", function (level) {
    return new Promise(function (resolve, reject) {
      var idx = 0;
      var keys = Array.from(_this.obstacle);
      var end = keys.length;
      var start = Date.now();

      var obstacleLoop = function obstacleLoop() {
        // console.log(idx);
        _this.canvas.drawCanvas("green");

        _this.canvas.drawText(level);

        _this.foods[keys[idx]].drawObs();

        if (idx < end && Date.now() - start < 1200) {
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

  _defineProperty(this, "gameResult", function () {
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

        if (Date.now() - start < 3000) {
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

  _defineProperty(this, "drawLose", function () {
    _this.canvas.clear();

    _this.canvas.drawCanvas("white");

    _this.canvas.drawMissText(_this.miss);

    _this.resultCat.miss[2].draw();
  });

  _defineProperty(this, "drawWin", function () {
    _this.canvas.clear();

    _this.canvas.drawCanvas("white");

    _this.canvas.drawMissText(_this.miss);

    _this.resultCat.miss[2].draw();
  });

  _defineProperty(this, "deleteItem", function () {
    var foodX;
    var foodY;

    for (var key in _this.foods) {
      var food = _this.foods[key];
      foodX = food.x;
      foodY = food.y;

      if (foodX - 20 <= _this.cat.x + 3 && foodX + food.width >= _this.cat.x + _this.cat.width - 3 && foodY - 20 <= _this.cat.y + 3 && foodY + food.height >= _this.cat.y + _this.cat.height - 3) {
        if (_this.obstacle.has(key)) {
          _this.miss = true;
        }

        delete _this.foods[key];
      }
    }
  });

  _defineProperty(this, "animate", function () {
    return new Promise(function (resolve, reject) {
      var animateLoop = function animateLoop() {
        _this.canvas.clear();

        _this.drawBoard();

        _this.positionChange(_this.cat);

        _this.deleteItem(3);

        _this.isEqual(_this.foods, _this.obstacle);

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
    if (e.keyCode == 39) {
      _this.rightPressed = false;
    } else if (e.keyCode == 37) {
      _this.leftPressed = false;
    } else if (e.keyCode == 38) {
      _this.upPressed = false;
    } else if (e.keyCode == 40) {
      _this.downPressed = false;
    }
  });

  _defineProperty(this, "keyDownHandler", function (e) {
    if (e.keyCode == 39) {
      _this.rightPressed = true;

      if (_this.frameX >= 8) {
        _this.frameX = 6;
      } else {
        _this.frameX += 1;
      }

      _this.frameY = 2;
    } else if (e.keyCode == 37) {
      _this.leftPressed = true;

      if (_this.frameX >= 8) {
        _this.frameX = 6;
      } else {
        _this.frameX += 1;
      }

      _this.frameY = 1;
    } else if (e.keyCode == 38) {
      _this.upPressed = true;

      if (_this.frameX >= 2) {
        _this.frameX = 0;
      } else {
        _this.frameX += 1;
      }

      _this.frameY = 3;
    } else if (e.keyCode == 40) {
      _this.downPressed = true;

      if (_this.frameX >= 2) {
        _this.frameX = 0;
      } else {
        _this.frameX += 1;
      }

      _this.frameY = 0;
    }

    _this.cat.changeFrame(_this.frameX, _this.frameY);
  });

  _defineProperty(this, "positionChange", function (prop) {
    var x = 0;
    var y = 0;

    if (_this.rightPressed && prop.x < _this.canvas.width - prop.width - _this.wall.width) {
      x += 2;
    } else if (_this.leftPressed && prop.x > _this.wall.width) {
      x -= 2;
    } else if (_this.upPressed && prop.y > _this.wall.width - 9) {
      y -= 2;
    } else if (_this.downPressed && y < _this.canvas.height - prop.width - _this.wall.width - 5) {
      y += 2;
    }

    prop.move(x, y);
  });

  _defineProperty(this, "isEqual", function (obj, set) {
    if (Object.keys(obj).length !== set.size) return;

    for (var a in obj) {
      if (!set.has(a)) return;
    }

    _this.pass = true;
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
    _this.ctx.font = "30px Helvetica, sans";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("* Level ".concat(level, " *"), _this.canvas.width / 2, 110);

    _this.ctx.fillText("Do not eat", _this.canvas.width / 2, 150);
  });

  _defineProperty(this, "drawMissText", function (missLeft) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#fff";
    _this.ctx.fillStyle = color;
    _this.ctx.font = "30px Helvetica, sans";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("Oops", _this.canvas.width / 2, 110);

    _this.ctx.fillText("* ".concat(missLeft, " Left*"), _this.canvas.width / 2, 110);

    _this.ctx.fillText("Do not eat", _this.canvas.width / 2, 150);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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
/* harmony import */ var _introPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introPage */ "./src/introPage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Game = function Game() {
  var _this = this;

  _classCallCheck(this, Game);

  _defineProperty(this, "introPage", new _introPage__WEBPACK_IMPORTED_MODULE_1__["IntroPage"]());

  _defineProperty(this, "board", new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]());

  _defineProperty(this, "obstacles", new Set());

  _defineProperty(this, "tries", 3);

  _defineProperty(this, "currentLevel", 1);

  _defineProperty(this, "currentScore", 0);

  _defineProperty(this, "level", 1);

  _defineProperty(this, "win", false);

  _defineProperty(this, "lose", false);

  _defineProperty(this, "miss", false);

  _defineProperty(this, "pass", false);

  _defineProperty(this, "play", function () {
    if (_this.tries <= 0) {
      _this.board.drawLose();

      return;
    } else if (_this.level === 4) {
      return;
    }

    _this.board.initItems(_this.level).then(function (res) {
      return _this.board.showObstacle(_this.level);
    }).then(function (res) {
      return _this.board.animate();
    }).then(function (res) {
      return _this.board.gameResult();
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
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



window.onload = function (e) {
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"]();
  game.play();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IntroPage = function IntroPage() {
  var _this = this;

  _classCallCheck(this, IntroPage);

  _defineProperty(this, "aboutButtonHandler", function () {
    _this.about.style.display = "flex";
    gameIntro.style.display = "none";
  });

  _defineProperty(this, "startButtonHandler", function () {
    _this.main.style.display = "flex"; //game start here maybe...

    _this.gameIntro.style.display = "none"; // game(level, life);
  });

  _defineProperty(this, "backButtonHandler", function () {
    _this.about.style.display = "none";
    _this.gameIntro.style.display = "";
  });

  this.main = document.getElementById("main");
  this.about = document.getElementById("about-page");
  this.gameIntro = document.getElementById("game-intro");
  this.startButton = document.getElementById("start");
  this.aboutButton = document.getElementById("about");
  this.backButton = document.getElementById("back");
  main.style.display = "flex";
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
    _this.ctx.drawImage(_this.image, _this.frameX, _this.frameY, _this.width, _this.height, _this.canvas.width / 2, _this.canvas.height / 2, _this.width, _this.height);
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
/*! exports provided: foodUrls, results, positionSetArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodUrls", function() { return foodUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "results", function() { return results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionSetArray", function() { return positionSetArray; });
var foodUrls = ["./image/food/apple.png", "./image/food/banana.png", "./image/food/beer.png", "./image/food/burger.png", "./image/food/cake.png", "./image/food/cherry.png", "./image/food/corn.png", "./image/food/croissant.png", "./image/food/custard.png", "./image/food/dango.png", "./image/food/donut.png", "./image/food/fries.png", "./image/food/grapes.png", "./image/food/ice_cream.png", "./image/food/lemon.png", "./image/food/meat.png", "./image/food/orange.png", "./image/food/peach.png", "./image/food/pear.png", "./image/food/pie.png", "./image/food/pineapple.png", "./image/food/pisha.png", "./image/food/ramen.png", "./image/food/shaved_ice.png", "./image/food/spaghetti.png", "./image/food/strawberry.png", "./image/food/sushi.png", "./image/food/sweet_potato.png"];
var results = {
  miss: ["./image/cat/miss.jpeg", "./image/cat/missTwo.jpg", "./image/cat/youlose.jpg"],
  pass: ["./image/cat/passOne.jpeg", "./image/cat/passTwo.jpeg", "./image/cat/passThree.jpeg", "./image/cat/passFour.png"]
};
var positionSetArray = [[[-28, -25], [+55, +30], [-50, +60], [+30, -65], [+60, -40], [+15, +75], [-75, +2], [-37, -75], [+95, -30], [-100, -80], [+100, +70], [+80, -100], [-50, +100], [-110, +50], [-10, -110]], [[-48, -55], [+57, +20], [-30, +60], [+35, -35], [-14, -30], [+19, +55], [-50, +2], [+67, -75], [+95, -30], [-100, -80], [+70, +80], [+10, -90], [-80, +30], [-10, +100], [+110, +30]], [[-8, -35], [+57, +20], [-30, +60], [+35, -40], [-44, +18], [+19, +65], [-80, +45], [+67, -90], [+95, -30], [-60, -90], [+73, +90], [-40, -60], [-70, +85], [-10, +100], [+110, +30]]];

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

  console.log(obstacleKeys);
  return obstacleKeys;
}

/***/ }),

/***/ "./src/util/generateResult.js":
/*!************************************!*\
  !*** ./src/util/generateResult.js ***!
  \************************************/
/*! exports provided: generateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResult", function() { return generateResult; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/util/data.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prop */ "./src/prop.js");


var generateResult = function generateResult() {
  var result = {
    miss: [],
    pass: []
  };
  _data__WEBPACK_IMPORTED_MODULE_0__["results"].miss.forEach(function (e) {
    result.miss.push(new _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"](0, 0, e, 0, 0));
  });
  _data__WEBPACK_IMPORTED_MODULE_0__["results"].pass.forEach(function (e) {
    result.pass.push(new _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"](0, 0, e, 0, 0));
  });
  return result;
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

function generateRandomProps(currentLevel, imageUrls, posArraySet) {
  var idx = 0;
  var positionArray = posArraySet[Math.floor(Math.random() * posArraySet.length)];
  var randomImageUrls = new Set();
  var randomPositionSet = new Set();
  var elementCount = currentLevel < 4 ? 8 : elementCount + 6;
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
    result[i] = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, imageUrls[imgArr[i]], 250 + positionArray[posArr[i]][0], 250 + positionArray[posArr[i]][1]);
  }

  return result;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRyb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BJbWFnZVVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZU9ic3RhY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlUmVzdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbUdlbmVyYXRpb24uanMiXSwibmFtZXMiOlsiQm9hcmQiLCJDYW52YXMiLCJQcm9wIiwiZ2VuZXJhdGVSZXN1bHQiLCJTZXQiLCJsZXZlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWlzcyIsInBhc3MiLCJjYXQiLCJjYW52YXMiLCJ3aWR0aCIsImZyYW1lWCIsImZyYW1lWSIsImZvb2RzIiwiZ2VuZXJhdGVSYW5kb21Qcm9wcyIsImZvb2RVcmxzIiwicG9zaXRpb25TZXRBcnJheSIsIm9ic3RhY2xlIiwiZ2VuZXJhdGVPYnN0YWNsZSIsIk9iamVjdCIsImtleXMiLCJkcmF3Q2FudmFzIiwiZHJhd1Byb3BzIiwiaWR4IiwiQXJyYXkiLCJmcm9tIiwiZW5kIiwibGVuZ3RoIiwic3RhcnQiLCJEYXRlIiwibm93Iiwib2JzdGFjbGVMb29wIiwiZHJhd1RleHQiLCJkcmF3T2JzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyIiwibG9vcCIsImNsZWFyIiwiZHJhd01pc3NUZXh0IiwicmVzdWx0Q2F0IiwiZHJhdyIsImZvb2RYIiwiZm9vZFkiLCJrZXkiLCJmb29kIiwieCIsInkiLCJoZWlnaHQiLCJoYXMiLCJhbmltYXRlTG9vcCIsImRyYXdCb2FyZCIsInBvc2l0aW9uQ2hhbmdlIiwiZGVsZXRlSXRlbSIsImlzRXF1YWwiLCJlIiwia2V5Q29kZSIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwidXBQcmVzc2VkIiwiZG93blByZXNzZWQiLCJjaGFuZ2VGcmFtZSIsInByb3AiLCJ3YWxsIiwibW92ZSIsIm9iaiIsInNldCIsInNpemUiLCJhIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJjb2xvciIsImN0eCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaSIsImRyYXdJbWFnZSIsImltYWdlIiwicHJvcHMiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJtaXNzTGVmdCIsIkdhbWUiLCJJbnRyb1BhZ2UiLCJ0cmllcyIsImJvYXJkIiwiZHJhd0xvc2UiLCJpbml0SXRlbXMiLCJ0aGVuIiwicmVzIiwic2hvd09ic3RhY2xlIiwiYW5pbWF0ZSIsImdhbWVSZXN1bHQiLCJwbGF5Iiwib25sb2FkIiwiZ2FtZSIsImFib3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2FtZUludHJvIiwibWFpbiIsInN0YXJ0QnV0dG9uIiwiYWJvdXRCdXR0b24iLCJiYWNrQnV0dG9uIiwiYWJvdXRCdXR0b25IYW5kbGVyIiwic3RhcnRCdXR0b25IYW5kbGVyIiwiYmFja0J1dHRvbkhhbmRsZXIiLCJpbWFnZVVybCIsIkltYWdlIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInNyYyIsInBsYW50VXJscyIsInJlc3VsdHMiLCJjdXJyZW50TGV2ZWwiLCJmb29kS2V5cyIsIm9ic3RhY2xlS2V5cyIsInJhbmRvbUtleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJmb3JFYWNoIiwicHVzaCIsImltYWdlVXJscyIsInBvc0FycmF5U2V0IiwicG9zaXRpb25BcnJheSIsInJhbmRvbUltYWdlVXJscyIsInJhbmRvbVBvc2l0aW9uU2V0IiwiZWxlbWVudENvdW50IiwiaW1nQXJyIiwicG9zQXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFB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RSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQURGLEVBRUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FGRixFQUdFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBSEYsRUFJRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQUpGLEVBS0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FMRixFQU1FLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBTkYsRUFPRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsQ0FBUCxDQVBGLEVBUUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FSRixFQVNFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBVEYsRUFVRSxDQUFDLENBQUMsR0FBRixFQUFPLENBQUMsRUFBUixDQVZGLEVBV0UsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEVBQVIsQ0FYRixFQVlFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxHQUFQLENBWkYsRUFhRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsR0FBUCxDQWJGLEVBY0UsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEVBQVIsQ0FkRixFQWVFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxHQUFQLENBZkYsQ0FEOEIsRUFtQjlCLENBQ0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FERixFQUVFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBRkYsRUFHRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQUhGLEVBSUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FKRixFQUtFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBTEYsRUFNRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQU5GLEVBT0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLENBQVAsQ0FQRixFQVFFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBUkYsRUFTRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQVRGLEVBVUUsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEVBQVIsQ0FWRixFQVdFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBWEYsRUFZRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQVpGLEVBYUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FiRixFQWNFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxHQUFQLENBZEYsRUFlRSxDQUFDLENBQUMsR0FBRixFQUFPLENBQUMsRUFBUixDQWZGLENBbkI4QixFQW9DOUIsQ0FDRSxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsRUFBTixDQURGLEVBRUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FGRixFQUdFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBSEYsRUFJRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQUpGLEVBS0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FMRixFQU1FLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBTkYsRUFPRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQVBGLEVBUUUsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FSRixFQVNFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBVEYsRUFVRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQVZGLEVBV0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsQ0FYRixFQVlFLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBWkYsRUFhRSxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQWJGLEVBY0UsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEdBQVAsQ0FkRixFQWVFLENBQUMsQ0FBQyxHQUFGLEVBQU8sQ0FBQyxFQUFSLENBZkYsQ0FwQzhCLENBQXpCLEM7Ozs7Ozs7Ozs7OztBQzdDUDtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7OztBQU9PLFNBQVNFLGdCQUFULENBQTBCc0csWUFBMUIsRUFBd0NDLFFBQXhDLEVBQWtEO0FBQ3ZELE1BQUlDLFlBQVksR0FBRyxJQUFJekgsR0FBSixFQUFuQjs7QUFFQSxTQUFPeUgsWUFBWSxDQUFDeEQsSUFBYixHQUFvQnNELFlBQTNCLEVBQXlDO0FBQ3ZDLFFBQUlHLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsUUFBUSxDQUFDOUYsTUFBcEMsQ0FBaEI7QUFDQStGLGdCQUFZLENBQUNLLEdBQWIsQ0FBaUJOLFFBQVEsQ0FBQ0UsU0FBRCxDQUF6QjtBQUNEOztBQUNESyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsWUFBWjtBQUNBLFNBQU9BLFlBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTTFILGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUNsQyxNQUFJa0ksTUFBTSxHQUFHO0FBQUU1SCxRQUFJLEVBQUUsRUFBUjtBQUFZQyxRQUFJLEVBQUU7QUFBbEIsR0FBYjtBQUVBZ0gsK0NBQU8sQ0FBQ2pILElBQVIsQ0FBYTZILE9BQWIsQ0FBcUIsVUFBQzdFLENBQUQsRUFBTztBQUMxQjRFLFVBQU0sQ0FBQzVILElBQVAsQ0FBWThILElBQVosQ0FBaUIsSUFBSXJJLDBDQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZXVELENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBakI7QUFDRCxHQUZEO0FBSUFpRSwrQ0FBTyxDQUFDaEgsSUFBUixDQUFhNEgsT0FBYixDQUFxQixVQUFDN0UsQ0FBRCxFQUFPO0FBQzFCNEUsVUFBTSxDQUFDM0gsSUFBUCxDQUFZNkgsSUFBWixDQUFpQixJQUFJckksMENBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFldUQsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFqQjtBQUNELEdBRkQ7QUFJQSxTQUFPNEUsTUFBUDtBQUNELENBWk0sQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTcEgsbUJBQVQsQ0FBNkIwRyxZQUE3QixFQUEyQ2EsU0FBM0MsRUFBc0RDLFdBQXRELEVBQW1FO0FBQ3hFLE1BQUkvRyxHQUFHLEdBQUcsQ0FBVjtBQUVBLE1BQUlnSCxhQUFhLEdBQ2ZELFdBQVcsQ0FBQ1YsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlEsV0FBVyxDQUFDM0csTUFBdkMsQ0FBRCxDQURiO0FBRUEsTUFBSTZHLGVBQWUsR0FBRyxJQUFJdkksR0FBSixFQUF0QjtBQUNBLE1BQUl3SSxpQkFBaUIsR0FBRyxJQUFJeEksR0FBSixFQUF4QjtBQUNBLE1BQUl5SSxZQUFZLEdBQUdsQixZQUFZLEdBQUcsQ0FBZixHQUFtQixDQUFuQixHQUF1QmtCLFlBQVksR0FBRyxDQUF6RDtBQUNBLE1BQUlSLE1BQU0sR0FBRyxFQUFiOztBQUVBLFNBQU9NLGVBQWUsQ0FBQ3RFLElBQWhCLEdBQXVCd0UsWUFBOUIsRUFBNEM7QUFDMUNuSCxPQUFHLEdBQUdxRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTyxTQUFTLENBQUMxRyxNQUFyQyxDQUFOO0FBQ0E2RyxtQkFBZSxDQUFDVCxHQUFoQixDQUFvQnhHLEdBQXBCO0FBQ0Q7O0FBRUQsU0FBT2tILGlCQUFpQixDQUFDdkUsSUFBbEIsR0FBeUJ3RSxZQUFoQyxFQUE4QztBQUM1Q25ILE9BQUcsR0FBR3FHLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JTLGFBQWEsQ0FBQzVHLE1BQXpDLENBQU47QUFDQThHLHFCQUFpQixDQUFDVixHQUFsQixDQUFzQnhHLEdBQXRCO0FBQ0Q7O0FBRUQsTUFBSW9ILE1BQU0sR0FBR25ILEtBQUssQ0FBQ0MsSUFBTixDQUFXK0csZUFBWCxDQUFiO0FBQ0EsTUFBSUksTUFBTSxHQUFHcEgsS0FBSyxDQUFDQyxJQUFOLENBQVdnSCxpQkFBWCxDQUFiOztBQUVBLE9BQUssSUFBSXpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyRCxNQUFNLENBQUNoSCxNQUEzQixFQUFtQ3FELENBQUMsRUFBcEMsRUFBd0M7QUFDdENrRCxVQUFNLENBQUNsRCxDQUFELENBQU4sR0FBWSxJQUFJakYsMENBQUosQ0FDVixFQURVLEVBRVYsRUFGVSxFQUdWc0ksU0FBUyxDQUFDTSxNQUFNLENBQUMzRCxDQUFELENBQVAsQ0FIQyxFQUlWLE1BQU11RCxhQUFhLENBQUNLLE1BQU0sQ0FBQzVELENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBSkksRUFLVixNQUFNdUQsYUFBYSxDQUFDSyxNQUFNLENBQUM1RCxDQUFELENBQVAsQ0FBYixDQUF5QixDQUF6QixDQUxJLENBQVo7QUFPRDs7QUFFRCxTQUFPa0QsTUFBUDtBQUNELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZS1pbmZvIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnVwIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4uZG93biB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMycHggMDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjRweCAwO1xcbn1cXG5cXG4ubGVmdCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NXB4IDA7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZmF0Y2F0aW50cm8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5leHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5leHA6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY2F0aW1nLWRpdiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWJvdXQtcGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuI2ludHJvLWRpdiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5teUNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZS1pbmZvIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnVwIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4uZG93biB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDMycHggMDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjRweCAwO1xcbn1cXG5cXG4ubGVmdCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NXB4IDA7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZmF0Y2F0aW50cm8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5leHAge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5leHA6aG92ZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY2F0aW1nLWRpdiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWJvdXQtcGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuI2ludHJvLWRpdiB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5teUNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcFwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBwbGFudFVybHMgfSBmcm9tIFwiLi9wcm9wSW1hZ2VVcmxzXCI7XG5pbXBvcnQgeyBmb29kVXJscywgcG9zaXRpb25TZXRBcnJheSB9IGZyb20gXCIuL3V0aWwvZGF0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21Qcm9wcyB9IGZyb20gXCIuL3V0aWwvcmFuZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVPYnN0YWNsZSB9IGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVPYnN0YWNsZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSZXN1bHQgfSBmcm9tIFwiLi91dGlsL2dlbmVyYXRlUmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlciwgZmFsc2UpO1xuICB9XG4gIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBmcmFtZVggPSAwO1xuICBmcmFtZVkgPSAwO1xuXG4gIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgZG93blByZXNzZWQgPSBmYWxzZTtcblxuICBjYXQ7XG4gIHdhbGwgPSBuZXcgUHJvcCgzMiwgMzIsIFwiLi9pbWFnZS9mZW5jZS5wbmdcIiwgMCwgMCk7XG5cbiAgcmVzdWx0Q2F0ID0gZ2VuZXJhdGVSZXN1bHQoKTtcbiAgZm9vZHMgPSB7fTsgLy9mb29kcyBvYmpcbiAgb2JzdGFjbGUgPSBuZXcgU2V0KCk7XG5cbiAgbWlzcyA9IGZhbHNlO1xuICBwYXNzID0gZmFsc2U7XG5cbiAgaW5pdEl0ZW1zID0gKGxldmVsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubWlzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5wYXNzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhdCA9IG5ldyBQcm9wKFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIFwiLi9pbWFnZS9mYXRjYXQucG5nXCIsXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmZyYW1lWCxcbiAgICAgICAgdGhpcy5mcmFtZVlcbiAgICAgICk7XG4gICAgICB0aGlzLmZvb2RzID0gZ2VuZXJhdGVSYW5kb21Qcm9wcyhsZXZlbCwgZm9vZFVybHMsIHBvc2l0aW9uU2V0QXJyYXkpO1xuICAgICAgdGhpcy5vYnN0YWNsZSA9IGdlbmVyYXRlT2JzdGFjbGUobGV2ZWwsIE9iamVjdC5rZXlzKHRoaXMuZm9vZHMpKTtcblxuICAgICAgcmVzb2x2ZSgxKTtcbiAgICB9KTtcbiAgfTtcblxuICBkcmF3Qm9hcmQgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcInllbGxvd1wiKTtcbiAgICAvLyB0aGlzLmNhbnZhcy5kZWNvcmF0ZUNhbnZhcyh0aGlzLndhbGwpO1xuICAgIHRoaXMuY2FudmFzLmRyYXdQcm9wcyh0aGlzLmZvb2RzKTtcbiAgfTtcblxuICBzaG93T2JzdGFjbGUgPSAobGV2ZWwpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICBsZXQga2V5cyA9IEFycmF5LmZyb20odGhpcy5vYnN0YWNsZSk7XG4gICAgICBsZXQgZW5kID0ga2V5cy5sZW5ndGg7XG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3Qgb2JzdGFjbGVMb29wID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZHgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwiZ3JlZW5cIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdUZXh0KGxldmVsKTtcbiAgICAgICAgdGhpcy5mb29kc1trZXlzW2lkeF1dLmRyYXdPYnMoKTtcblxuICAgICAgICBpZiAoaWR4IDwgZW5kICYmIERhdGUubm93KCkgLSBzdGFydCA8IDEyMDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzdGFjbGVMb29wKTtcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPCBlbmQgLSAxKSB7XG4gICAgICAgICAgaWR4Kys7XG4gICAgICAgICAgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShvYnN0YWNsZUxvb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG9ic3RhY2xlTG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGdhbWVSZXN1bHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZW5kZXI7XG5cbiAgICAgIGlmICh0aGlzLm1pc3MpIHtcbiAgICAgICAgcmVuZGVyID0gXCJtaXNzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXIgPSBcInBhc3NcIjtcbiAgICAgIH1cbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3Q2FudmFzKFwid2hpdGVcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdNaXNzVGV4dCh0aGlzLm1pc3MpO1xuXG4gICAgICAgIHRoaXMucmVzdWx0Q2F0W3JlbmRlcl1bMF0uZHJhdygpO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0IDwgMzAwMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHsgbWlzczogcmVuZGVyID09PSBcIm1pc3NcIiA/IC0xIDogMCB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBkcmF3TG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ3aGl0ZVwiKTtcbiAgICB0aGlzLmNhbnZhcy5kcmF3TWlzc1RleHQodGhpcy5taXNzKTtcbiAgICB0aGlzLnJlc3VsdENhdC5taXNzWzJdLmRyYXcoKTtcbiAgfTtcblxuICBkcmF3V2luID0gKCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcIndoaXRlXCIpO1xuICAgIHRoaXMuY2FudmFzLmRyYXdNaXNzVGV4dCh0aGlzLm1pc3MpO1xuICAgIHRoaXMucmVzdWx0Q2F0Lm1pc3NbMl0uZHJhdygpO1xuICB9O1xuXG4gIGRlbGV0ZUl0ZW0gPSAoKSA9PiB7XG4gICAgbGV0IGZvb2RYO1xuICAgIGxldCBmb29kWTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmZvb2RzKSB7XG4gICAgICBsZXQgZm9vZCA9IHRoaXMuZm9vZHNba2V5XTtcbiAgICAgIGZvb2RYID0gZm9vZC54O1xuICAgICAgZm9vZFkgPSBmb29kLnk7XG4gICAgICBpZiAoXG4gICAgICAgIGZvb2RYIC0gMjAgPD0gdGhpcy5jYXQueCArIDMgJiZcbiAgICAgICAgZm9vZFggKyBmb29kLndpZHRoID49IHRoaXMuY2F0LnggKyB0aGlzLmNhdC53aWR0aCAtIDMgJiZcbiAgICAgICAgZm9vZFkgLSAyMCA8PSB0aGlzLmNhdC55ICsgMyAmJlxuICAgICAgICBmb29kWSArIGZvb2QuaGVpZ2h0ID49IHRoaXMuY2F0LnkgKyB0aGlzLmNhdC5oZWlnaHQgLSAzXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMub2JzdGFjbGUuaGFzKGtleSkpIHtcbiAgICAgICAgICB0aGlzLm1pc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZvb2RzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGVMb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmRyYXdCb2FyZCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlKHRoaXMuY2F0KTtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKDMpO1xuICAgICAgICB0aGlzLmlzRXF1YWwodGhpcy5mb29kcywgdGhpcy5vYnN0YWNsZSk7XG4gICAgICAgIHRoaXMuY2F0LmRyYXcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm1pc3MgJiYgIXRoaXMucGFzcykge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlTG9vcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShcIjNcIik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhbmltYXRlTG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGtleVVwSGFuZGxlciA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAzOSkge1xuICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICB0aGlzLmRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGtleURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPj0gOCkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZyYW1lWCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5mcmFtZVkgPSAyO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3KSB7XG4gICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSA4KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgICAgIHRoaXMudXBQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSAyKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLmZyYW1lWSA9IDM7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgICAgIHRoaXMuZG93blByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID49IDIpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZVggKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICB9XG4gICAgdGhpcy5jYXQuY2hhbmdlRnJhbWUodGhpcy5mcmFtZVgsIHRoaXMuZnJhbWVZKTtcbiAgfTtcblxuICBwb3NpdGlvbkNoYW5nZSA9IChwcm9wKSA9PiB7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCAmJlxuICAgICAgcHJvcC54IDwgdGhpcy5jYW52YXMud2lkdGggLSBwcm9wLndpZHRoIC0gdGhpcy53YWxsLndpZHRoXG4gICAgKSB7XG4gICAgICB4ICs9IDI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkICYmIHByb3AueCA+IHRoaXMud2FsbC53aWR0aCkge1xuICAgICAgeCAtPSAyO1xuICAgIH0gZWxzZSBpZiAodGhpcy51cFByZXNzZWQgJiYgcHJvcC55ID4gdGhpcy53YWxsLndpZHRoIC0gOSkge1xuICAgICAgeSAtPSAyO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmRvd25QcmVzc2VkICYmXG4gICAgICB5IDwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC53aWR0aCAtIHRoaXMud2FsbC53aWR0aCAtIDVcbiAgICApIHtcbiAgICAgIHkgKz0gMjtcbiAgICB9XG4gICAgcHJvcC5tb3ZlKHgsIHkpO1xuICB9O1xuXG4gIGlzRXF1YWwgPSAob2JqLCBzZXQpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IHNldC5zaXplKSByZXR1cm47XG4gICAgZm9yICh2YXIgYSBpbiBvYmopIGlmICghc2V0LmhhcyhhKSkgcmV0dXJuO1xuICAgIHRoaXMucGFzcyA9IHRydWU7XG4gIH07XG59XG4iLCJleHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG5cbiAgZHJhd0NhbnZhcyA9IChjb2xvcikgPT4ge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfTtcblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgZGVjb3JhdGVDYW52YXMgPSAocHJvcCkgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgIGkgKiBwcm9wLmhlaWdodCxcbiAgICAgICAgMCxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICBpICogcHJvcC53aWR0aCxcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC5oZWlnaHQsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICApO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBkcmF3UHJvcHMgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgICBsZXQgcHJvcCA9IHByb3BzW2tleXNbaV1dO1xuICAgICAgcHJvcC5kcmF3KCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdUZXh0ID0gKGxldmVsLCBjb2xvciA9IFwiI2ZmZlwiKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBIZWx2ZXRpY2EsIHNhbnNcIjtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAqIExldmVsICR7bGV2ZWx9ICpgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDExMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDE1MCk7XG4gIH07XG5cbiAgZHJhd01pc3NUZXh0ID0gKG1pc3NMZWZ0LCBjb2xvciA9IFwiI2ZmZlwiKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBIZWx2ZXRpY2EsIHNhbnNcIjtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJPb3BzXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgKiAke21pc3NMZWZ0fSBMZWZ0KmAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgRG8gbm90IGVhdGAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTUwKTtcbiAgfTtcblxuICAvLyBkcmF3UGxhbnRzKHByb3BMaXN0KSB7XG4gIC8vICAgLy8gd2hpbGUgKChjYW52YXMuaGVpZ2h0IC0gMiAqIHdhbGwud2lkdGgpIC8gd2FsbC53aWR0aCA+PSBqKSB7XG4gIC8vICAgbGV0IGlkeCA9IGogJSBwcm9wTGlzdC5sZW5ndGg7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgY2FudmFzLndpZHRoIC0gcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgaisrO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBJbnRyb1BhZ2UgfSBmcm9tIFwiLi9pbnRyb1BhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBpbnRyb1BhZ2UgPSBuZXcgSW50cm9QYWdlKCk7XG4gIGJvYXJkID0gbmV3IEJvYXJkKCk7XG4gIG9ic3RhY2xlcyA9IG5ldyBTZXQoKTtcblxuICB0cmllcyA9IDM7XG4gIGN1cnJlbnRMZXZlbCA9IDE7XG4gIGN1cnJlbnRTY29yZSA9IDA7XG4gIGxldmVsID0gMTtcblxuICB3aW4gPSBmYWxzZTtcbiAgbG9zZSA9IGZhbHNlO1xuICBtaXNzID0gZmFsc2U7XG4gIHBhc3MgPSBmYWxzZTtcblxuICBwbGF5ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRyaWVzIDw9IDApIHtcbiAgICAgIHRoaXMuYm9hcmQuZHJhd0xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9ZWxzZSBpZih0aGlzLmxldmVsID09PSA0KXtcbiAgICAgIHJldHVybiBcbiAgICB9XG5cbiAgICB0aGlzLmJvYXJkXG4gICAgICAuaW5pdEl0ZW1zKHRoaXMubGV2ZWwpXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLmJvYXJkLnNob3dPYnN0YWNsZSh0aGlzLmxldmVsKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQuYW5pbWF0ZSgpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5ib2FyZC5nYW1lUmVzdWx0KCkpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMudHJpZXMgKz0gcmVzLm1pc3M7XG4gICAgICAgIHRoaXMubGV2ZWwgKz0gcmVzLm1pc3MgKyAxO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgIH0pO1xuICB9O1xufVxuIiwiaW1wb3J0IFwiLi9jc3MvbWFpbi5jc3NcIjtcblxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLnBsYXkoKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgSW50cm9QYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHRoaXMuYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXBhZ2VcIik7XG4gICAgdGhpcy5nYW1lSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW50cm9cIik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgdGhpcy5hYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuICAgIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgdGhpcy5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hYm91dEJ1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3RhcnRCdXR0b25IYW5kbGVyKTtcbiAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja0J1dHRvbkhhbmRsZXIpO1xuICB9XG5cbiAgYWJvdXRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG5cbiAgc3RhcnRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gZ2FtZShsZXZlbCwgbGlmZSk7XG4gIH07XG5cbiAgYmFja0J1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5hYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5nYW1lSW50cm8uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH07XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvcCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltYWdlVXJsLCB4LCB5LCBmcmFtZVggPSAwLCBmcmFtZVkgPSAwKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmZyYW1lWCA9IGZyYW1lWDtcbiAgICB0aGlzLmZyYW1lWSA9IGZyYW1lWTtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgIGxldCBuYXR1cmFsV2lkdGggPSB0aGlzLmltYWdlLm5hdHVyYWxXaWR0aDtcbiAgICAgIGxldCBuYXR1cmFsSGVpZ2h0ID0gdGhpcy5pbWFnZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoID4gMCA/IHdpZHRoIDogbmF0dXJhbFdpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgPiAwID8gaGVpZ2h0IDogbmF0dXJhbEhlaWdodDtcblxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdPYnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlVXJsO1xuICB9XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCA/IHRoaXMuY2FudmFzLndpZHRoIDogdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0ID4gdGhpcy5jYW52YXMuaGVpZ2h0ID8gdGhpcy5jYW52YXMuaGVpZ2h0IDogdGhpcy5oZWlnaHRcbiAgICApO1xuICB9O1xuXG4gIGRyYXdPYnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHRoaXMuZnJhbWVYLFxuICAgICAgdGhpcy5mcmFtZVksXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCAvIDIsXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfTtcblxuICBtb3ZlID0gKHgsIHkpID0+IHtcbiAgICB0aGlzLnggKz0geDtcbiAgICB0aGlzLnkgKz0geTtcbiAgfTtcblxuICBjaGFuZ2VGcmFtZSA9ICh4LCB5KSA9PiB7XG4gICAgdGhpcy5mcmFtZVggPSB4ICogdGhpcy53aWR0aDtcbiAgICB0aGlzLmZyYW1lWSA9IHkgKiB0aGlzLmhlaWdodDtcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBwbGFudFVybHMgPSBbXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L2NhY3R1cy5wbmdcIixcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvaGVyYi5wbmdcIixcbiAgXCIuL2ltYWdlL3BsYW50L21hbmdvdHJlZS5wbmdcIixcbiAgXCIuL2ltYWdlL3BsYW50L3BhbG0ucG5nXCIsXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L3N1bmZsb3dlci5wbmdcIlxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC90dWxpcC5wbmdcIlxuXTtcbiIsImV4cG9ydCBjb25zdCBmb29kVXJscyA9IFtcbiAgXCIuL2ltYWdlL2Zvb2QvYXBwbGUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2JhbmFuYS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYmVlci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jYWtlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jaGVycnkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nvcm4ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nyb2lzc2FudC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY3VzdGFyZC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZGFuZ28ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2RvbnV0LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9mcmllcy5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9pY2VfY3JlYW0ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2xlbW9uLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9tZWF0LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9vcmFuZ2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BlYWNoLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9wZWFyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waWUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BpbmVhcHBsZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGlzaGEucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3JhbWVuLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zaGF2ZWRfaWNlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N0cmF3YmVycnkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N1c2hpLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgcmVzdWx0cyA9IHtcbiAgbWlzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvbWlzcy5qcGVnXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9taXNzVHdvLmpwZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQveW91bG9zZS5qcGdcIixcbiAgXSxcbiAgcGFzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvcGFzc09uZS5qcGVnXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzVHdvLmpwZWdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NUaHJlZS5qcGVnXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzRm91ci5wbmdcIixcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBwb3NpdGlvblNldEFycmF5ID0gW1xuICBbXG4gICAgWy0yOCwgLTI1XSxcbiAgICBbKzU1LCArMzBdLFxuICAgIFstNTAsICs2MF0sXG4gICAgWyszMCwgLTY1XSxcbiAgICBbKzYwLCAtNDBdLFxuICAgIFsrMTUsICs3NV0sXG4gICAgWy03NSwgKzJdLFxuICAgIFstMzcsIC03NV0sXG4gICAgWys5NSwgLTMwXSxcbiAgICBbLTEwMCwgLTgwXSxcbiAgICBbKzEwMCwgKzcwXSxcbiAgICBbKzgwLCAtMTAwXSxcbiAgICBbLTUwLCArMTAwXSxcbiAgICBbLTExMCwgKzUwXSxcbiAgICBbLTEwLCAtMTEwXSxcbiAgXSxcblxuICBbXG4gICAgWy00OCwgLTU1XSxcbiAgICBbKzU3LCArMjBdLFxuICAgIFstMzAsICs2MF0sXG4gICAgWyszNSwgLTM1XSxcbiAgICBbLTE0LCAtMzBdLFxuICAgIFsrMTksICs1NV0sXG4gICAgWy01MCwgKzJdLFxuICAgIFsrNjcsIC03NV0sXG4gICAgWys5NSwgLTMwXSxcbiAgICBbLTEwMCwgLTgwXSxcbiAgICBbKzcwLCArODBdLFxuICAgIFsrMTAsIC05MF0sXG4gICAgWy04MCwgKzMwXSxcbiAgICBbLTEwLCArMTAwXSxcbiAgICBbKzExMCwgKzMwXSxcbiAgXSxcbiAgW1xuICAgIFstOCwgLTM1XSxcbiAgICBbKzU3LCArMjBdLFxuICAgIFstMzAsICs2MF0sXG4gICAgWyszNSwgLTQwXSxcbiAgICBbLTQ0LCArMThdLFxuICAgIFsrMTksICs2NV0sXG4gICAgWy04MCwgKzQ1XSxcbiAgICBbKzY3LCAtOTBdLFxuICAgIFsrOTUsIC0zMF0sXG4gICAgWy02MCwgLTkwXSxcbiAgICBbKzczLCArOTBdLFxuICAgIFstNDAsIC02MF0sXG4gICAgWy03MCwgKzg1XSxcbiAgICBbLTEwLCArMTAwXSxcbiAgICBbKzExMCwgKzMwXSxcbiAgXSxcbl07XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50TGV2ZWxcbiAqIEBwYXJhbSB7Kn0gZm9vZEtleXNcbiAqXG4gKiByYW5kb21seSBjaG9vc2Ugb2JzdGFjbGVzIG91dCBvZiB0aGUga2V5cyBvZiBjaG9zZW4gZm9vZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2JzdGFjbGUoY3VycmVudExldmVsLCBmb29kS2V5cykge1xuICBsZXQgb2JzdGFjbGVLZXlzID0gbmV3IFNldCgpO1xuXG4gIHdoaWxlIChvYnN0YWNsZUtleXMuc2l6ZSA8IGN1cnJlbnRMZXZlbCkge1xuICAgIGxldCByYW5kb21LZXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb29kS2V5cy5sZW5ndGgpO1xuICAgIG9ic3RhY2xlS2V5cy5hZGQoZm9vZEtleXNbcmFuZG9tS2V5XSk7XG4gIH1cbiAgY29uc29sZS5sb2cob2JzdGFjbGVLZXlzKTtcbiAgcmV0dXJuIG9ic3RhY2xlS2V5cztcbn1cbiIsImltcG9ydCB7IHJlc3VsdHMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmVzdWx0ID0gKCkgPT4ge1xuICBsZXQgcmVzdWx0ID0geyBtaXNzOiBbXSwgcGFzczogW10gfTtcblxuICByZXN1bHRzLm1pc3MuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHJlc3VsdC5taXNzLnB1c2gobmV3IFByb3AoMCwgMCwgZSwgMCwgMCkpO1xuICB9KTtcblxuICByZXN1bHRzLnBhc3MuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHJlc3VsdC5wYXNzLnB1c2gobmV3IFByb3AoMCwgMCwgZSwgMCwgMCkpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi4vcHJvcFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Qcm9wcyhjdXJyZW50TGV2ZWwsIGltYWdlVXJscywgcG9zQXJyYXlTZXQpIHtcbiAgbGV0IGlkeCA9IDA7XG5cbiAgbGV0IHBvc2l0aW9uQXJyYXkgPVxuICAgIHBvc0FycmF5U2V0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc0FycmF5U2V0Lmxlbmd0aCldO1xuICBsZXQgcmFuZG9tSW1hZ2VVcmxzID0gbmV3IFNldCgpO1xuICBsZXQgcmFuZG9tUG9zaXRpb25TZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBlbGVtZW50Q291bnQgPSBjdXJyZW50TGV2ZWwgPCA0ID8gOCA6IGVsZW1lbnRDb3VudCArIDY7XG4gIGxldCByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAocmFuZG9tSW1hZ2VVcmxzLnNpemUgPCBlbGVtZW50Q291bnQpIHtcbiAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWFnZVVybHMubGVuZ3RoKTtcbiAgICByYW5kb21JbWFnZVVybHMuYWRkKGlkeCk7XG4gIH1cblxuICB3aGlsZSAocmFuZG9tUG9zaXRpb25TZXQuc2l6ZSA8IGVsZW1lbnRDb3VudCkge1xuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc2l0aW9uQXJyYXkubGVuZ3RoKTtcbiAgICByYW5kb21Qb3NpdGlvblNldC5hZGQoaWR4KTtcbiAgfVxuXG4gIGxldCBpbWdBcnIgPSBBcnJheS5mcm9tKHJhbmRvbUltYWdlVXJscyk7XG4gIGxldCBwb3NBcnIgPSBBcnJheS5mcm9tKHJhbmRvbVBvc2l0aW9uU2V0KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltZ0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdFtpXSA9IG5ldyBQcm9wKFxuICAgICAgMzIsXG4gICAgICAzMixcbiAgICAgIGltYWdlVXJsc1tpbWdBcnJbaV1dLFxuICAgICAgMjUwICsgcG9zaXRpb25BcnJheVtwb3NBcnJbaV1dWzBdLFxuICAgICAgMjUwICsgcG9zaXRpb25BcnJheVtwb3NBcnJbaV1dWzFdXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9