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
___CSS_LOADER_EXPORT___.push([module.i, ".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  /* display: none; */\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  width: 100%;\n  margin: 0 auto;\n}\n", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB","sourcesContent":[".game-info {\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  align-items: center;\n  font-family: \"Press Start 2P\", cursive;\n  font-size: 12px;\n}\n\n.up {\n  width: 32px;\n  height: 32px;\n  background-position: 0 0;\n}\n\n.down {\n  width: 32px;\n  height: 32px;\n  background-position: 32px 0;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  background-position: 64px 0;\n}\n\n.left {\n  width: 32px;\n  height: 32px;\n  background-position: -65px 0;\n}\n\n#main {\n  /* display: none; */\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n#fatcatintro {\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp {\n  cursor: pointer;\n  margin-top: 8px;\n  font-size: 13px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.exp:hover {\n  font-size: 14px;\n}\n\n.catimg-div {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n#about-page {\n  display: none;\n}\n\n.title {\n  margin: 0 auto;\n  /* width: 100%; */\n  font-size: 17px;\n  margin-bottom: 10px;\n  /* display: flex; */\n  /* align-items: center; */\n}\n\n#intro-div {\n  width: 500px;\n  padding: 20px;\n  margin: 0 auto;\n}\n\n.game-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.myCanvas {\n  width: 100%;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { IntroPage } from "./introPage";

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
    } else if (_this.level === 4) {
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
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



window.onload = function (e) {
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["Game"]();
  game.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9wLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9wSW1hZ2VVcmxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVPYnN0YWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZVJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kb21HZW5lcmF0aW9uLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiQ2FudmFzIiwiUHJvcCIsImdlbmVyYXRlUmVzdWx0UHJvcHMiLCJTZXQiLCJsZXZlbCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWlzcyIsInBhc3MiLCJjYXQiLCJmcmFtZVgiLCJmcmFtZVkiLCJmb29kcyIsImdlbmVyYXRlUmFuZG9tUHJvcHMiLCJmb29kVXJscyIsIm9ic3RhY2xlIiwiZ2VuZXJhdGVPYnN0YWNsZSIsIk9iamVjdCIsImtleXMiLCJjYW52YXMiLCJkcmF3UHJvcHMiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJiYWNrZ3JvdW5kTG9vcCIsImRyYXdDYW52YXMiLCJkcmF3VGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlkeCIsIkFycmF5IiwiZnJvbSIsImVuZCIsImxlbmd0aCIsIm9ic3RhY2xlTG9vcCIsImNsZWFyIiwiZHJhd09icyIsInJlbmRlciIsImxvb3AiLCJkcmF3TWlzc1RleHQiLCJyZXN1bHRDYXQiLCJkcmF3IiwicmVzdWx0IiwiZm9vZFgiLCJmb29kWSIsImtleSIsImZvb2QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhY2VQcmVzc2VkIiwiY29uc29sZSIsImxvZyIsImhhcyIsImFuaW1hdGVMb29wIiwiYmFja2dyb3VuZCIsImRyYXdCb2FyZCIsInBvc2l0aW9uQ2hhbmdlIiwic3ByaXRlUG9zaXRpb25VcGRhdGUiLCJkZWxldGVJdGVtIiwiaXNFcXVhbCIsImUiLCJrZXlDb2RlIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsIm1vdmUiLCJwcm9wIiwiY2hhbmdlRnJhbWUiLCJvYnN0YWNsZVNldCIsInNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImNvbG9yIiwiY3R4IiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJpIiwiZHJhd0ltYWdlIiwiaW1hZ2UiLCJwcm9wcyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsIm1pc3NMZWZ0IiwiR2FtZSIsInRyaWVzIiwiYm9hcmQiLCJkcmF3R2FtZVJlc3VsdCIsImluaXRJdGVtcyIsInRoZW4iLCJyZXMiLCJiZWZvcmVHYW1lU3RhcnQiLCJzaG93T2JzdGFjbGUiLCJhbmltYXRlIiwicm91bmRSZXN1bHQiLCJwbGF5Iiwib25sb2FkIiwiZ2FtZSIsImltYWdlVXJsIiwiSW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwic3JjIiwicGxhbnRVcmxzIiwiZ2FtZVJlc3VsdEltZ1VybHMiLCJ3aW4iLCJsb3NlIiwicG9zaXRpb25BcnJheSIsImN1cnJlbnRMZXZlbCIsImZvb2RLZXlzIiwib2JzdGFjbGVLZXlzIiwicmFuZG9tS2V5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWRkIiwiZ2FtZVJlc3VsdFByb3BzIiwiZm9yRWFjaCIsInB1c2giLCJwb3NpdGlvbkFyckdlbmVyYXRvciIsImZpcnN0WCIsImZpcnN0WSIsInBhbnRyeUxldmVsIiwiaiIsImltYWdlVXJscyIsInJhbmRvbUltYWdlVXJscyIsInJhbmRvbVBvc2l0aW9uU2V0IiwiZWxlbWVudENvdW50IiwiaW1nQXJyIiwicG9zQXJyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxlQUFlLGlCQUFp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LEdBQUczRyxLQUFLLENBQUNDLElBQU4sQ0FBV3VHLGVBQVgsQ0FBYjtBQUNBLE1BQUlJLE1BQU0sR0FBRzVHLEtBQUssQ0FBQ0MsSUFBTixDQUFXd0csaUJBQVgsQ0FBYjs7QUFFQSxPQUFLLElBQUlsRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0QsTUFBTSxDQUFDeEcsTUFBM0IsRUFBbUNvRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDM0MsVUFBTSxDQUFDMkMsQ0FBRCxDQUFOLEdBQVksSUFBSXBGLDBDQUFKLENBQ1YsRUFEVSxFQUVWLEVBRlUsRUFHVm9JLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDcEQsQ0FBRCxDQUFQLENBSEMsRUFJVitCLGFBQWEsQ0FBQ3NCLE1BQU0sQ0FBQ3JELENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBSlUsRUFLVitCLGFBQWEsQ0FBQ3NCLE1BQU0sQ0FBQ3JELENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBTFUsQ0FBWjtBQU9EOztBQUVELFNBQU8zQyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udXAge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5kb3duIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzJweCAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2NHB4IDA7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggMDtcXG59XFxuXFxuI21haW4ge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmYXRjYXRpbnRybyB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cDpob3ZlciB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jYXRpbWctZGl2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4jaW50cm8tZGl2IHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm15Q2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lLWluZm8ge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJlc3MgU3RhcnQgMlBcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udXAge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxufVxcblxcbi5kb3duIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzJweCAwO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2NHB4IDA7XFxufVxcblxcbi5sZWZ0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggMDtcXG59XFxuXFxuI21haW4ge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNmYXRjYXRpbnRybyB7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmV4cDpob3ZlciB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jYXRpbWctZGl2IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhYm91dC1wYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4jaW50cm8tZGl2IHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm15Q2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi9wcm9wXCI7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmltcG9ydCB7IHBsYW50VXJscyB9IGZyb20gXCIuL3Byb3BJbWFnZVVybHNcIjtcbmltcG9ydCB7IGZvb2RVcmxzIH0gZnJvbSBcIi4vdXRpbC9kYXRhXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbVByb3BzIH0gZnJvbSBcIi4vdXRpbC9yYW5kb21HZW5lcmF0aW9uXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU9ic3RhY2xlIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZU9ic3RhY2xlXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJlc3VsdFByb3BzIH0gZnJvbSBcIi4vdXRpbC9nZW5lcmF0ZVJlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgZnJhbWVYID0gMDtcbiAgZnJhbWVZID0gMDtcblxuICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuXG4gIGNhdDtcbiAgYmFja2dyb3VuZCA9IG5ldyBQcm9wKDAsIDAsIFwiLi9pbWFnZS9jYXQvcGFudHJ5LnBuZ1wiLCAwLCAwKTtcblxuICByZXN1bHRDYXQgPSBnZW5lcmF0ZVJlc3VsdFByb3BzKCk7XG4gIGZvb2RzID0ge307XG4gIG9ic3RhY2xlID0gbmV3IFNldCgpO1xuXG4gIG1pc3MgPSBmYWxzZTtcbiAgcGFzcyA9IGZhbHNlO1xuXG4gIGluaXRJdGVtcyA9IChsZXZlbCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLm1pc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMucGFzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXQgPSBuZXcgUHJvcChcbiAgICAgICAgMzIsXG4gICAgICAgIDMyLFxuICAgICAgICBcIi4vaW1hZ2UvZmF0Y2F0LnBuZ1wiLFxuICAgICAgICA2MyxcbiAgICAgICAgMzM1LFxuICAgICAgICB0aGlzLmZyYW1lWCxcbiAgICAgICAgdGhpcy5mcmFtZVlcbiAgICAgICk7XG4gICAgICB0aGlzLmZvb2RzID0gZ2VuZXJhdGVSYW5kb21Qcm9wcyhsZXZlbCwgZm9vZFVybHMpO1xuICAgICAgdGhpcy5vYnN0YWNsZSA9IGdlbmVyYXRlT2JzdGFjbGUobGV2ZWwgKyAyLCBPYmplY3Qua2V5cyh0aGlzLmZvb2RzKSk7XG5cbiAgICAgIHJlc29sdmUoMSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZHJhd0JvYXJkID0gKCkgPT4ge1xuICAgIC8vIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ5ZWxsb3dcIik7XG4gICAgdGhpcy5jYW52YXMuZHJhd1Byb3BzKHRoaXMuZm9vZHMpO1xuICB9O1xuXG4gIGJlZm9yZUdhbWVTdGFydCA9IChsZXZlbCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgYmFja2dyb3VuZExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJncmVlblwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd1RleHQobGV2ZWwpO1xuXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPCAxMjAwKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJhY2tncm91bmRMb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBiYWNrZ3JvdW5kTG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHNob3dPYnN0YWNsZSA9IChsZXZlbCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgaWR4ID0gMDtcbiAgICAgIGxldCBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLm9ic3RhY2xlKTtcbiAgICAgIGxldCBlbmQgPSBrZXlzLmxlbmd0aDtcbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCBvYnN0YWNsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJncmVlblwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd1RleHQobGV2ZWwpO1xuICAgICAgICB0aGlzLmZvb2RzW2tleXNbaWR4XV0uZHJhd09icygpO1xuXG4gICAgICAgIGlmIChpZHggPCBlbmQgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0IDwgODAwKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic3RhY2xlTG9vcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaWR4IDwgZW5kIC0gMSkge1xuICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzdGFjbGVMb29wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBvYnN0YWNsZUxvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICByb3VuZFJlc3VsdCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJlbmRlcjtcblxuICAgICAgaWYgKHRoaXMubWlzcykge1xuICAgICAgICByZW5kZXIgPSBcIm1pc3NcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlciA9IFwicGFzc1wiO1xuICAgICAgfVxuICAgICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ3aGl0ZVwiKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd01pc3NUZXh0KHRoaXMubWlzcyk7XG5cbiAgICAgICAgdGhpcy5yZXN1bHRDYXRbcmVuZGVyXVswXS5kcmF3KCk7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPCAxNTAwKSB7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoeyBtaXNzOiByZW5kZXIgPT09IFwibWlzc1wiID8gLTEgOiAwIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgbG9vcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRyYXdHYW1lUmVzdWx0ID0gKHJlc3VsdCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcIndoaXRlXCIpO1xuICAgIHRoaXMucmVzdWx0Q2F0W3Jlc3VsdF1bMF0uZHJhdygpO1xuICB9O1xuXG4gIGRlbGV0ZUl0ZW0gPSAoKSA9PiB7XG4gICAgbGV0IGZvb2RYO1xuICAgIGxldCBmb29kWTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmZvb2RzKSB7XG4gICAgICBsZXQgZm9vZCA9IHRoaXMuZm9vZHNba2V5XTtcbiAgICAgIGZvb2RYID0gZm9vZC54O1xuICAgICAgZm9vZFkgPSBmb29kLnk7XG4gICAgICBpZiAoXG4gICAgICAgIGZvb2RYIC0gMjAgPD0gdGhpcy5jYXQueCArIDMgJiZcbiAgICAgICAgZm9vZFggKyBmb29kLndpZHRoID49IHRoaXMuY2F0LnggKyB0aGlzLmNhdC53aWR0aCAtIDMgJiZcbiAgICAgICAgZm9vZFkgLSAyMCA8PSB0aGlzLmNhdC55ICsgMyAmJlxuICAgICAgICBmb29kWSArIGZvb2QuaGVpZ2h0ID49IHRoaXMuY2F0LnkgKyB0aGlzLmNhdC5oZWlnaHQgLSAzICYmXG4gICAgICAgIHRoaXMuc3BhY2VQcmVzc2VkXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYnN0YWNsZSwga2V5KTtcbiAgICAgICAgaWYgKHRoaXMub2JzdGFjbGUuaGFzKGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5mb29kc1trZXldO1xuICAgICAgICAgIHRoaXMub2JzdGFjbGUuZGVsZXRlKGtleSk7XG4gICAgICAgICAgdGhpcy5zcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1pc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGVMb29wID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdCb2FyZCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlKHRoaXMuY2F0KTtcbiAgICAgICAgdGhpcy5zcHJpdGVQb3NpdGlvblVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oKTtcbiAgICAgICAgdGhpcy5pc0VxdWFsKHRoaXMub2JzdGFjbGUpO1xuICAgICAgICB0aGlzLmNhdC5kcmF3KCk7XG4gICAgICAgIGlmICghdGhpcy5taXNzICYmICF0aGlzLnBhc3MpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZUxvb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoXCIzXCIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYW5pbWF0ZUxvb3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBrZXlVcEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgdGhpcy51cFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIHRoaXMuZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGtleURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgICBsZXQgeSA9IDA7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgdGhpcy51cFByZXNzZWQgPSB0cnVlO1xuICAgICAgeSAtPSA3NDtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIHRoaXMuZG93blByZXNzZWQgPSB0cnVlO1xuXG4gICAgICB5ICs9IDc0O1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzMikge1xuICAgICAgdGhpcy5zcGFjZVByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhdC55KTtcbiAgICB0aGlzLmNhdC5tb3ZlKDAsIHkpO1xuICB9O1xuXG4gIHBvc2l0aW9uQ2hhbmdlID0gKHByb3ApID0+IHtcbiAgICBsZXQgeCA9IDA7XG4gICAgLy8gbGV0IHkgPSAwO1xuXG4gICAgaWYgKHRoaXMucmlnaHRQcmVzc2VkICYmIHByb3AueCA8IHRoaXMuY2FudmFzLndpZHRoIC0gcHJvcC53aWR0aCkge1xuICAgICAgeCArPSAzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZWZ0UHJlc3NlZCAmJiBwcm9wLnggPiAwKSB7XG4gICAgICB4IC09IDM7XG4gICAgfVxuICAgIC8vIGVsc2UgaWYgKHRoaXMudXBQcmVzc2VkICYmIHByb3AueSA+IHRoaXMud2FsbC53aWR0aCAtIDkpIHtcbiAgICAvLyAgIHkgLT0gMztcbiAgICAvLyB9IGVsc2UgaWYgKFxuICAgIC8vICAgdGhpcy5kb3duUHJlc3NlZCAmJlxuICAgIC8vICAgeSA8IHRoaXMuY2FudmFzLmhlaWdodCAtIHByb3Aud2lkdGggLSB0aGlzLndhbGwud2lkdGggLSA1XG4gICAgLy8gKSB7XG4gICAgLy8gICB5ICs9IDM7XG4gICAgLy8gfVxuXG4gICAgcHJvcC5tb3ZlKHgsIDApO1xuICB9O1xuXG4gIHNwcml0ZVBvc2l0aW9uVXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID49IDgpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZVggKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSA4KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwUHJlc3NlZCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID49IDIpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mcmFtZVggKz0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZG93blByZXNzZWQpIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+PSAyKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZnJhbWVYICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2F0LmNoYW5nZUZyYW1lKHRoaXMuZnJhbWVYLCAwKTtcbiAgfTtcblxuICBpc0VxdWFsID0gKG9ic3RhY2xlU2V0KSA9PiB7XG4gICAgaWYgKG9ic3RhY2xlU2V0LnNpemUgPT09IDApIHtcbiAgICAgIHRoaXMucGFzcyA9IHRydWU7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuXG4gIGRyYXdDYW52YXMgPSAoY29sb3IpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgY2xlYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9O1xuXG4gIGRlY29yYXRlQ2FudmFzID0gKHByb3ApID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICBpICogcHJvcC5oZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICBwcm9wLmltYWdlLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICBwcm9wLmhlaWdodCxcbiAgICAgICAgaSAqIHByb3Aud2lkdGgsXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAtIHByb3AuaGVpZ2h0LFxuICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICBwcm9wLmhlaWdodFxuICAgICAgKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH07XG5cbiAgZHJhd1Byb3BzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgd2hpbGUgKGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgbGV0IHByb3AgPSBwcm9wc1trZXlzW2ldXTtcbiAgICAgIHByb3AuZHJhdygpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfTtcblxuICBkcmF3VGV4dCA9IChsZXZlbCwgY29sb3IgPSBcIiNmZmZcIikgPT4ge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggTGFsZXphciwgY3Vyc2l2ZVwiO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFJvdW5kICR7bGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBZT1UgQ0FOIEVBVGAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTUwKTtcbiAgfTtcblxuICBkcmF3TWlzc1RleHQgPSAobWlzc0xlZnQsIGNvbG9yID0gXCIjZmZmXCIpID0+IHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IExhbGV6YXIsIGN1cnNpdmVcIjtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgdGhpcy5jdHguZmlsbFRleHQoXCJPb3BzXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgKiAke21pc3NMZWZ0fSBMZWZ0KmAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgWU9VIENBTiBFQVRgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDE1MCk7XG4gIH07XG5cbiAgLy8gZHJhd1BsYW50cyhwcm9wTGlzdCkge1xuICAvLyAgIC8vIHdoaWxlICgoY2FudmFzLmhlaWdodCAtIDIgKiB3YWxsLndpZHRoKSAvIHdhbGwud2lkdGggPj0gaikge1xuICAvLyAgIGxldCBpZHggPSBqICUgcHJvcExpc3QubGVuZ3RoO1xuICAvLyAgIGN0eC5kcmF3SW1hZ2UoXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLnBsYW50SW1hZ2UsXG4gIC8vICAgICAwLFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGgsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodCxcbiAgLy8gICAgIDAsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodCAqIGosXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLndpZHRoICogMC43LFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHRcbiAgLy8gICApO1xuICAvLyAgIGN0eC5kcmF3SW1hZ2UoXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLnBsYW50SW1hZ2UsXG4gIC8vICAgICAwLFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGgsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodCxcbiAgLy8gICAgIGNhbnZhcy53aWR0aCAtIHByb3BMaXN0W2lkeF0ud2lkdGgsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodCAqIGosXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLndpZHRoICogMC43LFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHRcbiAgLy8gICApO1xuICAvLyAgIGorKztcbiAgLy8gICAvLyB9XG4gIC8vIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi9ib2FyZFwiO1xuLy8gaW1wb3J0IHsgSW50cm9QYWdlIH0gZnJvbSBcIi4vaW50cm9QYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgLy8gaW50cm9QYWdlID0gbmV3IEludHJvUGFnZSgpO1xuICBib2FyZCA9IG5ldyBCb2FyZCgpO1xuICBvYnN0YWNsZXMgPSBuZXcgU2V0KCk7XG5cbiAgdHJpZXMgPSAzO1xuICBjdXJyZW50U2NvcmUgPSAwO1xuICBsZXZlbCA9IDE7XG5cbiAgcGxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50cmllcyA8PSAwKSB7XG4gICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lUmVzdWx0KHRoaXMudHJpZXMgPyBcIndpblwiIDogXCJsb3NlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sZXZlbCA9PT0gNCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYm9hcmRcbiAgICAgIC5pbml0SXRlbXModGhpcy5sZXZlbClcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQuYmVmb3JlR2FtZVN0YXJ0KHRoaXMubGV2ZWwpKVxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5ib2FyZC5zaG93T2JzdGFjbGUodGhpcy5sZXZlbCkpXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLmJvYXJkLmFuaW1hdGUoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuYm9hcmQucm91bmRSZXN1bHQoKSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy50cmllcyArPSByZXMubWlzcztcbiAgICAgICAgdGhpcy5sZXZlbCArPSByZXMubWlzcyArIDE7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgXCIuL2Nzcy9tYWluLmNzc1wiO1xuXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKGUpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUucGxheSgpO1xufTtcbiIsImV4cG9ydCBjbGFzcyBQcm9wIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgaW1hZ2VVcmwsIHgsIHksIGZyYW1lWCA9IDAsIGZyYW1lWSA9IDApIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZnJhbWVYID0gZnJhbWVYO1xuICAgIHRoaXMuZnJhbWVZID0gZnJhbWVZO1xuXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgbGV0IG5hdHVyYWxXaWR0aCA9IHRoaXMuaW1hZ2UubmF0dXJhbFdpZHRoO1xuICAgICAgbGV0IG5hdHVyYWxIZWlnaHQgPSB0aGlzLmltYWdlLm5hdHVyYWxIZWlnaHQ7XG4gICAgICB0aGlzLndpZHRoID0gd2lkdGggPiAwID8gd2lkdGggOiBuYXR1cmFsV2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCA+IDAgPyBoZWlnaHQgOiBuYXR1cmFsSGVpZ2h0O1xuXG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIHRoaXMuZHJhd09icygpO1xuICAgIH0pO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gIH1cblxuICBkcmF3ID0gKCkgPT4ge1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICB0aGlzLmZyYW1lWCxcbiAgICAgIHRoaXMuZnJhbWVZLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoID8gdGhpcy5jYW52YXMud2lkdGggOiB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQgPiB0aGlzLmNhbnZhcy5oZWlnaHQgPyB0aGlzLmNhbnZhcy5oZWlnaHQgOiB0aGlzLmhlaWdodFxuICAgICk7XG4gIH07XG5cbiAgZHJhd09icyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy5mcmFtZVgsXG4gICAgICB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDIwLFxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMixcbiAgICAgIHRoaXMud2lkdGggKiAxLjIsXG4gICAgICB0aGlzLmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH07XG5cbiAgbW92ZSA9ICh4LCB5KSA9PiB7XG4gICAgdGhpcy54ICs9IHg7XG4gICAgdGhpcy55ICs9IHk7XG4gIH07XG5cbiAgY2hhbmdlRnJhbWUgPSAoeCwgeSkgPT4ge1xuICAgIHRoaXMuZnJhbWVYID0geCAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy5mcmFtZVkgPSB5ICogdGhpcy5oZWlnaHQ7XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgcGxhbnRVcmxzID0gW1xuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9jYWN0dXMucG5nXCIsXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L2hlcmIucG5nXCIsXG4gIFwiLi9pbWFnZS9wbGFudC9tYW5nb3RyZWUucG5nXCIsXG4gIFwiLi9pbWFnZS9wbGFudC9wYWxtLnBuZ1wiLFxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9zdW5mbG93ZXIucG5nXCJcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvdHVsaXAucG5nXCJcbl07XG4iLCJleHBvcnQgY29uc3QgZm9vZFVybHMgPSBbXG4gIFwiLi9pbWFnZS9mb29kL2FwcGxlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9iYW5hbmEucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2JlZXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2J1cmdlci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY2FrZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY2hlcnJ5LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jb3JuLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2N1c3RhcmQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2RhbmdvLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9kb251dC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZnJpZXMucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2dyYXBlcy5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9sZW1vbi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvbWVhdC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9wZWFjaC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGVhci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGllLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waW5lYXBwbGUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3Bpc2hhLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9yYW1lbi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc2hhdmVkX2ljZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3BhZ2hldHRpLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zdXNoaS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3dlZXRfcG90YXRvLnBuZ1wiLFxuXTtcblxuZXhwb3J0IGNvbnN0IGdhbWVSZXN1bHRJbWdVcmxzID0ge1xuICBtaXNzOiBbXG4gICAgXCIuL2ltYWdlL2NhdC9taXNzT25lLnBuZ1wiLFxuICAgIFwiLi9pbWFnZS9jYXQvbWlzc1R3by5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L21pc3NUaHJlZS5wbmdcIixcbiAgXSxcbiAgcGFzczogW1xuICAgIFwiLi9pbWFnZS9jYXQvcGFzc09uZS5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NUd28ucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzVGhyZWUucG5nXCIsXG4gICAgXCIuL2ltYWdlL2NhdC9wYXNzRm91ci5wbmdcIixcbiAgICBcIi4vaW1hZ2UvY2F0L3Bhc3NGaXZlLnBuZ1wiLFxuICBdLFxuICB3aW46IFtcIi4vaW1hZ2UvY2F0L3dpbm5lci5wbmdcIl0sXG4gIGxvc2U6IFtcIi4vaW1hZ2UvY2F0L2xvc2UucG5nXCJdLFxufTtcblxuZXhwb3J0IGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBbXG4gIFs3MywgNDZdLFxuICBbNzMgKyA0NywgNDZdLFxuICBbNzMgKyA0NyAqIDIsIDQ2XSxcbiAgWzczICsgNDcgKiAzLCA0Nl0sXG4gIFs3MyArIDQ3ICogNCwgNDZdLFxuICBbNzMgKyA0NyAqIDUsIDQ2XSxcbiAgWzczICsgNDcgKiA2LCA0Nl0sXG4gIFs3MyArIDMxMCwgNDZdLFxuXTtcbiIsImltcG9ydCB7IFByb3AgfSBmcm9tIFwiLi4vcHJvcFwiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnRMZXZlbFxuICogQHBhcmFtIHsqfSBmb29kS2V5c1xuICpcbiAqIHJhbmRvbWx5IGNob29zZSBvYnN0YWNsZXMgb3V0IG9mIHRoZSBrZXlzIG9mIGNob3NlbiBmb29kIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPYnN0YWNsZShjdXJyZW50TGV2ZWwsIGZvb2RLZXlzKSB7XG4gIGxldCBvYnN0YWNsZUtleXMgPSBuZXcgU2V0KCk7XG5cbiAgd2hpbGUgKG9ic3RhY2xlS2V5cy5zaXplIDwgY3VycmVudExldmVsKSB7XG4gICAgbGV0IHJhbmRvbUtleSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZvb2RLZXlzLmxlbmd0aCk7XG4gICAgb2JzdGFjbGVLZXlzLmFkZChmb29kS2V5c1tyYW5kb21LZXldKTtcbiAgfVxuICByZXR1cm4gb2JzdGFjbGVLZXlzO1xufVxuIiwiaW1wb3J0IHsgZ2FtZVJlc3VsdEltZ1VybHMgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmVzdWx0UHJvcHMgPSAoKSA9PiB7XG4gIGxldCBnYW1lUmVzdWx0UHJvcHMgPSB7fTtcbiAgZm9yIChsZXQga2V5IGluIGdhbWVSZXN1bHRJbWdVcmxzKSB7XG4gICAgaWYgKCEoa2V5IGluIGdhbWVSZXN1bHRQcm9wcykpIHtcbiAgICAgIGdhbWVSZXN1bHRQcm9wc1trZXldID0gW107XG4gICAgfVxuICAgIGdhbWVSZXN1bHRJbWdVcmxzW2tleV0uZm9yRWFjaCgoZSkgPT5cbiAgICAgIGdhbWVSZXN1bHRQcm9wc1trZXldLnB1c2gobmV3IFByb3AoMCwgMCwgZSwgMCwgMCkpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBnYW1lUmVzdWx0UHJvcHM7XG59O1xuIiwiaW1wb3J0IHsgUHJvcCB9IGZyb20gXCIuLi9wcm9wXCI7XG5cbmNvbnN0IHBvc2l0aW9uQXJyR2VuZXJhdG9yID0gKFxuICBmaXJzdFggPSA2MyxcbiAgZmlyc3RZID0gNDUsXG4gIGhlaWdodCA9IDcyLFxuICB3aWR0aCA9IDQ2LFxuICBwYW50cnlMZXZlbCA9IDVcbikgPT4ge1xuICBsZXQgcmVzdWx0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDY7IGorKykge1xuICAgICAgaWYgKChpID09PSA0ICYmIGogPT09IDApIHx8IChpID09PSA0ICYmIGogPT09IDEpKSBjb250aW51ZTtcbiAgICAgIHJlc3VsdC5wdXNoKFtmaXJzdFggKyB3aWR0aCAqIGosIGZpcnN0WSArIGhlaWdodCAqIGldKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUHJvcHMoY3VycmVudExldmVsLCBpbWFnZVVybHMpIHtcbiAgY29uc3QgcG9zaXRpb25BcnJheSA9IHBvc2l0aW9uQXJyR2VuZXJhdG9yKCk7XG4gIGxldCBpZHggPSAwO1xuXG4gIGxldCByYW5kb21JbWFnZVVybHMgPSBuZXcgU2V0KCk7XG4gIGxldCByYW5kb21Qb3NpdGlvblNldCA9IG5ldyBTZXQoKTtcbiAgbGV0IGVsZW1lbnRDb3VudCA9IGN1cnJlbnRMZXZlbCArIDEyO1xuICBsZXQgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKHJhbmRvbUltYWdlVXJscy5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VVcmxzLmxlbmd0aCk7XG4gICAgcmFuZG9tSW1hZ2VVcmxzLmFkZChpZHgpO1xuICB9XG5cbiAgd2hpbGUgKHJhbmRvbVBvc2l0aW9uU2V0LnNpemUgPCBlbGVtZW50Q291bnQpIHtcbiAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NpdGlvbkFycmF5Lmxlbmd0aCk7XG4gICAgcmFuZG9tUG9zaXRpb25TZXQuYWRkKGlkeCk7XG4gIH1cblxuICBsZXQgaW1nQXJyID0gQXJyYXkuZnJvbShyYW5kb21JbWFnZVVybHMpO1xuICBsZXQgcG9zQXJyID0gQXJyYXkuZnJvbShyYW5kb21Qb3NpdGlvblNldCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdBcnIubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRbaV0gPSBuZXcgUHJvcChcbiAgICAgIDMyLFxuICAgICAgMzIsXG4gICAgICBpbWFnZVVybHNbaW1nQXJyW2ldXSxcbiAgICAgIHBvc2l0aW9uQXJyYXlbcG9zQXJyW2ldXVswXSxcbiAgICAgIHBvc2l0aW9uQXJyYXlbcG9zQXJyW2ldXVsxXVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==