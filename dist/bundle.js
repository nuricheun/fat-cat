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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat */ "./src/cat.js");
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prop */ "./src/prop.js");
/* harmony import */ var _propList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propList */ "./src/propList.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _propImageUrls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./propImageUrls */ "./src/propImageUrls.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Board = /*#__PURE__*/function () {
  function Board() {
    var _this = this;

    _classCallCheck(this, Board);

    _defineProperty(this, "canvas", new _canvas__WEBPACK_IMPORTED_MODULE_3__["Canvas"]());

    _defineProperty(this, "cat", new _cat__WEBPACK_IMPORTED_MODULE_0__["Cat"](32, 32));

    _defineProperty(this, "wall", new _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"](32, 32, "./image/fence.png"));

    _defineProperty(this, "foods", []);

    _defineProperty(this, "obstacle", void 0);

    _defineProperty(this, "miss", false);

    _defineProperty(this, "rightPressed", false);

    _defineProperty(this, "leftPressed", false);

    _defineProperty(this, "upPressed", false);

    _defineProperty(this, "downPressed", false);

    _defineProperty(this, "keyUpHandler", function (e) {
      console.log("hey");

      if (e.keyCode == 39) {
        rightPressed = false;
      } else if (e.keyCode == 37) {
        leftPressed = false;
      } else if (e.keyCode == 38) {
        upPressed = false;
      } else if (e.keyCode == 40) {
        downPressed = false;
      }
    });

    _defineProperty(this, "keyDownHandler", function (e) {
      console.log("hey");

      if (e.keyCode == 39) {
        _this.rightPressed = true;

        if (_this.xframeIdx >= 8) {
          _this.xframeIdx = 6;
        } else {
          _this.xframeIdx += 1;
        }

        _this.yframeIdx = 2;
      } else if (e.keyCode == 37) {
        _this.leftPressed = true;

        if (_this.xframeIdx >= 8) {
          _this.xframeIdx = 6;
        } else {
          _this.xframeIdx += 1;
        }

        _this.yframeIdx = 1;
      } else if (e.keyCode == 38) {
        _this.upPressed = true;

        if (_this.xframeIdx >= 2) {
          _this.xframeIdx = 0;
        } else {
          _this.xframeIdx += 1;
        }

        _this.yframeIdx = 3;
      } else if (e.keyCode == 40) {
        _this.downPressed = true;

        if (_this.xframeIdx >= 2) {
          _this.xframeIdx = 0;
        } else {
          _this.xframeIdx += 1;
        }

        _this.yframeIdx = 0;
      }
    });

    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }

  _createClass(Board, [{
    key: "initItems",
    value: function initItems(level) {
      var foodArr = Object(_util__WEBPACK_IMPORTED_MODULE_6__["generateRandomPosition"])(level, _data__WEBPACK_IMPORTED_MODULE_5__["foodUrls"], _data__WEBPACK_IMPORTED_MODULE_5__["positionSetArray"]);
      this.obstacle = Object(_util__WEBPACK_IMPORTED_MODULE_6__["generateObstacle"])(level, foodArr);
      this.foods = new _propList__WEBPACK_IMPORTED_MODULE_2__["PropList"](foodArr).propList;
    }
  }, {
    key: "drawBoard",
    value: function drawBoard() {
      this.canvas.drawCanvas();
      this.canvas.decorateCanvas(this.wall);
      this.canvas.drawProps(this.foods);
    }
  }, {
    key: "showObstacle",
    value: function showObstacle() {
      var _this2 = this;

      this.canvas.drawCanvas();
      this.canvas.drawText(this.level);
      new Promise(function (resolve, reject) {
        var i = 0;
        var clear = setInterval(function () {
          _this2.canvas.drawProp();

          if (i === 3) {
            clearInterval(clear);
            resolve();
          }

          i++;
        });
      }); // ctx.drawImage(
      //   foods[e].food_image,
      //   0,
      //   0,
      //   foods[e].width,
      //   foods[e].height,
      //   canvas.width / 2 - foods[e].width,
      //   canvas.height / 2,
      //   foods[e].width * 1.2,
      //   foods[e].height * 1.2
      // );
    }
  }, {
    key: "displayObstacle",
    value: function displayObstacle(level) {
      this.drawBackground();
      this.drawText(level);
      this.drawProp();
    }
  }, {
    key: "drawHit",
    value: function drawHit() {}
  }, {
    key: "deleteItem",
    value: function deleteItem(life) {
      var _this3 = this;

      var foodX;
      var foodY;
      this.foods.forEach(function (food) {
        foodX = food.x;
        foodY = food.y;

        if (foodX - 20 <= _this3.cat.x + 3 && foodX + food.width >= _this3.cat.x + _this3.cat.width - 3 && foodY - 20 <= _this3.cat.y + 3 && foodY + _this3.eachFood.height >= _this3.cat.y + _this3.cat.height - 3) {
          for (var e in _this3.obstacle) {
            if (food.key === e) {
              _this3.miss = true;
            }
          }

          _this3.deleted.add(food.key);
        }
      });
    }
  }, {
    key: "move",
    value: function move(prop) {
      var x = 0;
      var y = 0;

      if (this.rightPressed && prop.x < this.canvas.width - prop.width - this.wall.width) {
        x += 3;
      } else if (this.leftPressed && prop.x > this.wall.width) {
        x -= 3;
      } else if (this.upPressed && prop.y > this.wall.width - 9) {
        y -= 3;
      } else if (this.downPressed && y < this.canvas.height - prop.width - this.wall.width - 5) {
        y += 3;
      }

      prop.move(x, y);
    }
  }, {
    key: "isEqualSet",
    value: function isEqualSet(setOne, setTwo) {
      if (setOne.size !== setTwo.size) return false;

      var _iterator = _createForOfIteratorHelper(setOne),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var a = _step.value;
          if (!setTwo.has(a)) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }, {
    key: "animateCat",
    value: function animateCat() {
      return new Promise(function (resolve, reject) {
        var drawCat = setInterval(function () {
          this.move(this.cat);
          canvas.drawProp(this.cat);
          this.deleteItem();

          if (this.miss) {
            this.drawHit();
            clearInterval(drawCat);
            reject();
          } else if (isEqualSet(obstacle, deleted)) {
            clearInterval(drawCat);
            resolve();
          }
        }, 12);
      });
    }
  }]);

  return Board;
}();

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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    _defineProperty(this, "canvas", document.getElementById("myCanvas"));

    _defineProperty(this, "ctx", this.canvas.getContext("2d"));

    _defineProperty(this, "xframeIdx", 0);

    _defineProperty(this, "yframeIdx", 0);
  }

  _createClass(Canvas, [{
    key: "drawProp",
    value: function drawProp(prop) {
      var _this = this;

      prop.image.onload = function () {
        _this.ctx.drawImage(prop.image, _this.xframeIdx * prop.width, _this.yframeIdx * prop.height + 1, prop.width, prop.height, prop.x, prop.y, prop.width * 1.2, prop.height * 1.2);
      };
    }
  }, {
    key: "drawCanvas",
    value: function drawCanvas(color) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "decorateCanvas",
    value: function decorateCanvas(prop) {
      var _this2 = this;

      var i = 0;

      prop.image.onload = function () {
        while (i < 10) {
          _this2.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.height, 0, prop.width, prop.height);

          _this2.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.width, _this2.canvas.height - prop.height, prop.width, prop.height);

          i++;
        }
      };
    }
  }, {
    key: "drawProps",
    value: function drawProps(props, deleted) {
      var _this3 = this;

      var _loop = function _loop(i) {
        var prop = props[i];
        if (deleted.has(prop.key)) return "continue";

        prop.image.onload = function () {
          _this3.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, _this3.canvas.width / 2 + prop.x, _this3.canvas.height / 2 + prop.y, prop.width * 0.8, prop.height * 0.8);
        };
      };

      for (var i = 0; i < props.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "drawText",
    value: function drawText(level) {
      this.ctx.fillStyle = "white";
      this.ctx.font = "30px Helvetica, sans";
      this.ctx.textAlign = "center";
      this.ctx.fillText("* Level ".concat(level, " *"), this.canvas.width / 2, 110);
      this.ctx.fillText("Do not eat", this.canvas.width / 2, 150);
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

  }]);

  return Canvas;
}();

/***/ }),

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! exports provided: Cat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cat = /*#__PURE__*/function () {
  function Cat(x, y, width, height, imageUrl) {
    _classCallCheck(this, Cat);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.cat = new Image(width, height);
    this.cat.src = imageUrl;
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }

  _createClass(Cat, [{
    key: "move",
    value: function move(x, y) {
      this.x += x;
      this.y += y;
    }
  }]);

  return Cat;
}();

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: foodUrls, positionSetArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodUrls", function() { return foodUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionSetArray", function() { return positionSetArray; });
var foodUrls = ["./image/food/apple.png", "./image/food/banana.png", "./image/food/beer.png", "./image/food/burger.png", "./image/food/cake.png", "./image/food/cherry.png", "./image/food/corn.png", "./image/food/croissant.png", "./image/food/custard.png", "./image/food/dango.png", "./image/food/donut.png", "./image/food/fries.png", "./image/food/grapes.png", "./image/food/ice_cream.png", "./image/food/lemon.png", "./image/food/meat.png", "./image/food/orange.png", "./image/food/peach.png", "./image/food/pear.png", "./image/food/pie.png", "./image/food/pineapple.png", "./image/food/pisha.png", "./image/food/ramen.png", "./image/food/shaved_ice.png", "./image/food/spaghetti.png", "./image/food/strawberry.png", "./image/food/sushi.png", "./image/food/sweet_potato.png"];
var positionSetArray = [[[-28, -25], [+55, +30], [-50, +60], [+30, -65], [+60, -40], [+15, +75], [-75, +2], [-37, -75], [+95, -30], [-100, -80], [+100, +70], [+80, -100], [-50, +100], [-110, +50], [-10, -110]], [[-48, -55], [+57, +20], [-30, +60], [+35, -35], [-14, -30], [+19, +55], [-50, +2], [+67, -75], [+95, -30], [-100, -80], [+70, +80], [+10, -90], [-80, +30], [-10, +100], [+110, +30]], [[-8, -35], [+57, +20], [-30, +60], [+35, -40], [-44, +18], [+19, +65], [-80, +45], [+67, -90], [+95, -30], [-60, -90], [+73, +90], [-40, -60], [-70, +85], [-10, +100], [+110, +30]]];

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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    _defineProperty(this, "board", new _board__WEBPACK_IMPORTED_MODULE_0__["Board"]());

    _defineProperty(this, "obstacles", new Set());

    _defineProperty(this, "lifeLeft", 3);

    _defineProperty(this, "currentLevel", 1);

    _defineProperty(this, "currentScore", 0);

    _defineProperty(this, "level", 1);

    _defineProperty(this, "win", false);

    _defineProperty(this, "lose", false);

    _defineProperty(this, "miss", false);

    _defineProperty(this, "pass", false);
  }

  _createClass(Game, [{
    key: "execute",
    value: function execute() {// if (this.life > 0) {
      //   if (this.life >= 3) {
      //     let beforeSetInterval = setInterval(function () {
      //       let i = 0;
      //       before(donoteatarr[i]);
      //       if (i === donoteatarr.length) clearInterval(beforeSetInterval);
      //     }, 700);
      //   }
      // } else {
      // }
    }
  }, {
    key: "preview",
    value: function preview() {}
  }, {
    key: "play",
    value: function play() {
      var _this = this;

      if (this.lifeLeft > 0) {
        this.board.initItems(this.level);
        this.board.showObstacle().then(function () {
          _this.board.drawBoard();
        }); // this.execute();
      }

      console.log("you lose!!");
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _introPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introPage */ "./src/introPage.js");



window.onload = function (e) {
  var introPage = new _introPage__WEBPACK_IMPORTED_MODULE_1__["IntroPage"]();
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
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
  aboutButton.addEventListener("click", this.aboutButtonHandler);
  startButton.addEventListener("click", this.startButtonHandler);
  backButton.addEventListener("click", this.backButtonHandler);
}; // main.style.display = "flex";

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

var Prop = function Prop(width, height, imgUrl) {
  var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  _classCallCheck(this, Prop);

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = new Image(width, height);
  this.image.src = imgUrl;
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

/***/ "./src/propList.js":
/*!*************************!*\
  !*** ./src/propList.js ***!
  \*************************/
/*! exports provided: PropList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropList", function() { return PropList; });
/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prop */ "./src/prop.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var PropList = function PropList(propUrls) {
  _classCallCheck(this, PropList);

  this.propList = propUrls.map(function (_ref) {
    var imageUrl = _ref.imageUrl,
        x = _ref.x,
        y = _ref.y;
    return new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, imageUrl, x, y);
  });
};

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: generateRandomPosition, generateObstacle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomPosition", function() { return generateRandomPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateObstacle", function() { return generateObstacle; });
function generateRandomPosition(currentLevel, imageUrls, posArraySet) {
  var idx = 0;
  var positionArray = posArraySet[Math.floor(Math.random() * posArraySet.length)];
  var randomImageUrls = new Set();
  var randomPositionSet = new Set();
  var elementCount = currentLevel < 4 ? 8 : elementCount + 6;
  var randomProps2 = {};
  var randomProps = new Array(elementCount).fill(null).map(function (e) {
    return {
      x: "",
      y: "",
      imageUrl: "",
      key: ""
    };
  });

  while (randomImageUrls.size < elementCount) {
    idx = Math.floor(Math.random() * imageUrls.length);
    randomImageUrls.add(idx);
  }

  while (randomPositionSet.size < elementCount) {
    idx = Math.floor(Math.random() * positionArray.length);
    randomPositionSet.add(idx);
  }

  Array.from(randomImageUrls).forEach(function (urlIdx, i) {
    randomProps[i].imageUrl = imageUrls[urlIdx];
    randomProps[i].key = i;
    randomProps2[i] = {};
    randomProps2[i]["imageUrl"] = imageUrls[urlIdx];
  });
  Array.from(randomPositionSet).forEach(function (posIdx, i) {
    randomProps[i].x = positionArray[posIdx][0];
    randomProps[i].y = positionArray[posIdx][1];
    randomProps2[i]["x"] = positionArray[posIdx][0];
    randomProps2[i]["y"] = positionArray[posIdx][1];
  });
  console.log(randomProps2);
  return randomProps;
} // create food list that cat should not eat
// randomly chosen within the numbers of food keys

function generateObstacle(currentLevel, foodKeys) {
  var obstacleSet = new Set();

  while (obstacleSet.size < currentLevel) {
    obstacleSet.add(foodKeys[Math.floor(Math.random() * foodKeys.length)].key);
  }

  return obstacleSet;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludHJvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcEltYWdlVXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiQm9hcmQiLCJDYW52YXMiLCJDYXQiLCJQcm9wIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXlDb2RlIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJ1cFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInhmcmFtZUlkeCIsInlmcmFtZUlkeCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImxldmVsIiwiZm9vZEFyciIsImdlbmVyYXRlUmFuZG9tUG9zaXRpb24iLCJmb29kVXJscyIsInBvc2l0aW9uU2V0QXJyYXkiLCJvYnN0YWNsZSIsImdlbmVyYXRlT2JzdGFjbGUiLCJmb29kcyIsIlByb3BMaXN0IiwicHJvcExpc3QiLCJjYW52YXMiLCJkcmF3Q2FudmFzIiwiZGVjb3JhdGVDYW52YXMiLCJ3YWxsIiwiZHJhd1Byb3BzIiwiZHJhd1RleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImkiLCJjbGVhciIsInNldEludGVydmFsIiwiZHJhd1Byb3AiLCJjbGVhckludGVydmFsIiwiZHJhd0JhY2tncm91bmQiLCJsaWZlIiwiZm9vZFgiLCJmb29kWSIsImZvckVhY2giLCJmb29kIiwieCIsInkiLCJjYXQiLCJ3aWR0aCIsImVhY2hGb29kIiwiaGVpZ2h0Iiwia2V5IiwibWlzcyIsImRlbGV0ZWQiLCJhZGQiLCJwcm9wIiwibW92ZSIsInNldE9uZSIsInNldFR3byIsInNpemUiLCJhIiwiaGFzIiwiZHJhd0NhdCIsImRlbGV0ZUl0ZW0iLCJkcmF3SGl0IiwiaXNFcXVhbFNldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiaW1hZ2UiLCJvbmxvYWQiLCJjdHgiLCJkcmF3SW1hZ2UiLCJjb2xvciIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicHJvcHMiLCJsZW5ndGgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJpbWFnZVVybCIsIkltYWdlIiwic3JjIiwiR2FtZSIsIlNldCIsImxpZmVMZWZ0IiwiYm9hcmQiLCJpbml0SXRlbXMiLCJzaG93T2JzdGFjbGUiLCJ0aGVuIiwiZHJhd0JvYXJkIiwiaW50cm9QYWdlIiwiSW50cm9QYWdlIiwiZ2FtZSIsInBsYXkiLCJhYm91dCIsInN0eWxlIiwiZGlzcGxheSIsImdhbWVJbnRybyIsIm1haW4iLCJzdGFydEJ1dHRvbiIsImFib3V0QnV0dG9uIiwiYmFja0J1dHRvbiIsImFib3V0QnV0dG9uSGFuZGxlciIsInN0YXJ0QnV0dG9uSGFuZGxlciIsImJhY2tCdXR0b25IYW5kbGVyIiwiaW1nVXJsIiwicGxhbnRVcmxzIiwicHJvcFVybHMiLCJtYXAiLCJjdXJyZW50TGV2ZWwiLCJpbWFnZVVybHMiLCJwb3NBcnJheVNldCIsImlkeCIsInBvc2l0aW9uQXJyYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21JbWFnZVVybHMiLCJyYW5kb21Qb3NpdGlvblNldCIsImVsZW1lbnRDb3VudCIsInJhbmRvbVByb3BzMiIsInJhbmRvbVByb3BzIiwiQXJyYXkiLCJmaWxsIiwiZnJvbSIsInVybElkeCIsInBvc0lkeCIsImZvb2RLZXlz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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQ2F0IH0gZnJvbSBcIi4vY2F0XCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcFwiO1xuaW1wb3J0IHsgUHJvcExpc3QgfSBmcm9tIFwiLi9wcm9wTGlzdFwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBwbGFudFVybHMgfSBmcm9tIFwiLi9wcm9wSW1hZ2VVcmxzXCI7XG5pbXBvcnQgeyBmb29kVXJscywgcG9zaXRpb25TZXRBcnJheSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IGdlbmVyYXRlT2JzdGFjbGUsIGdlbmVyYXRlUmFuZG9tUG9zaXRpb24gfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVVwSGFuZGxlciwgZmFsc2UpO1xuICB9XG4gIGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgY2F0ID0gbmV3IENhdCgzMiwgMzIpO1xuICB3YWxsID0gbmV3IFByb3AoMzIsIDMyLCBcIi4vaW1hZ2UvZmVuY2UucG5nXCIpO1xuICBmb29kcyA9IFtdOyAvL2Zvb2RzIG9ialxuICBvYnN0YWNsZTsgLy9vYnN0YWNsZSBrZXkgc2V0XG5cbiAgbWlzcyA9IGZhbHNlO1xuICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGRvd25QcmVzc2VkID0gZmFsc2U7XG5cbiAgaW5pdEl0ZW1zKGxldmVsKSB7XG4gICAgbGV0IGZvb2RBcnIgPSBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKGxldmVsLCBmb29kVXJscywgcG9zaXRpb25TZXRBcnJheSk7XG4gICAgdGhpcy5vYnN0YWNsZSA9IGdlbmVyYXRlT2JzdGFjbGUobGV2ZWwsIGZvb2RBcnIpO1xuICAgIHRoaXMuZm9vZHMgPSBuZXcgUHJvcExpc3QoZm9vZEFycikucHJvcExpc3Q7XG4gIH1cblxuICBkcmF3Qm9hcmQoKSB7XG4gICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcygpO1xuICAgIHRoaXMuY2FudmFzLmRlY29yYXRlQ2FudmFzKHRoaXMud2FsbCk7XG4gICAgdGhpcy5jYW52YXMuZHJhd1Byb3BzKHRoaXMuZm9vZHMpO1xuICB9XG5cbiAgc2hvd09ic3RhY2xlKCkge1xuICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoKTtcbiAgICB0aGlzLmNhbnZhcy5kcmF3VGV4dCh0aGlzLmxldmVsKTtcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdQcm9wKCk7XG4gICAgICAgIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIGN0eC5kcmF3SW1hZ2UoXG4gICAgLy8gICBmb29kc1tlXS5mb29kX2ltYWdlLFxuICAgIC8vICAgMCxcbiAgICAvLyAgIDAsXG4gICAgLy8gICBmb29kc1tlXS53aWR0aCxcbiAgICAvLyAgIGZvb2RzW2VdLmhlaWdodCxcbiAgICAvLyAgIGNhbnZhcy53aWR0aCAvIDIgLSBmb29kc1tlXS53aWR0aCxcbiAgICAvLyAgIGNhbnZhcy5oZWlnaHQgLyAyLFxuICAgIC8vICAgZm9vZHNbZV0ud2lkdGggKiAxLjIsXG4gICAgLy8gICBmb29kc1tlXS5oZWlnaHQgKiAxLjJcbiAgICAvLyApO1xuICB9XG5cbiAgZGlzcGxheU9ic3RhY2xlKGxldmVsKSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIHRoaXMuZHJhd1RleHQobGV2ZWwpO1xuICAgIHRoaXMuZHJhd1Byb3AoKTtcbiAgfVxuXG4gIGRyYXdIaXQoKSB7fVxuXG4gIGRlbGV0ZUl0ZW0obGlmZSkge1xuICAgIGxldCBmb29kWDtcbiAgICBsZXQgZm9vZFk7XG5cbiAgICB0aGlzLmZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICAgIGZvb2RYID0gZm9vZC54O1xuICAgICAgZm9vZFkgPSBmb29kLnk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZm9vZFggLSAyMCA8PSB0aGlzLmNhdC54ICsgMyAmJlxuICAgICAgICBmb29kWCArIGZvb2Qud2lkdGggPj0gdGhpcy5jYXQueCArIHRoaXMuY2F0LndpZHRoIC0gMyAmJlxuICAgICAgICBmb29kWSAtIDIwIDw9IHRoaXMuY2F0LnkgKyAzICYmXG4gICAgICAgIGZvb2RZICsgdGhpcy5lYWNoRm9vZC5oZWlnaHQgPj0gdGhpcy5jYXQueSArIHRoaXMuY2F0LmhlaWdodCAtIDNcbiAgICAgICkge1xuICAgICAgICBmb3IgKGxldCBlIGluIHRoaXMub2JzdGFjbGUpIHtcbiAgICAgICAgICBpZiAoZm9vZC5rZXkgPT09IGUpIHtcbiAgICAgICAgICAgIHRoaXMubWlzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsZXRlZC5hZGQoZm9vZC5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbW92ZShwcm9wKSB7XG4gICAgbGV0IHggPSAwO1xuICAgIGxldCB5ID0gMDtcbiAgICBpZiAoXG4gICAgICB0aGlzLnJpZ2h0UHJlc3NlZCAmJlxuICAgICAgcHJvcC54IDwgdGhpcy5jYW52YXMud2lkdGggLSBwcm9wLndpZHRoIC0gdGhpcy53YWxsLndpZHRoXG4gICAgKSB7XG4gICAgICB4ICs9IDM7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkICYmIHByb3AueCA+IHRoaXMud2FsbC53aWR0aCkge1xuICAgICAgeCAtPSAzO1xuICAgIH0gZWxzZSBpZiAodGhpcy51cFByZXNzZWQgJiYgcHJvcC55ID4gdGhpcy53YWxsLndpZHRoIC0gOSkge1xuICAgICAgeSAtPSAzO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLmRvd25QcmVzc2VkICYmXG4gICAgICB5IDwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC53aWR0aCAtIHRoaXMud2FsbC53aWR0aCAtIDVcbiAgICApIHtcbiAgICAgIHkgKz0gMztcbiAgICB9XG4gICAgcHJvcC5tb3ZlKHgsIHkpO1xuICB9XG5cbiAgaXNFcXVhbFNldChzZXRPbmUsIHNldFR3bykge1xuICAgIGlmIChzZXRPbmUuc2l6ZSAhPT0gc2V0VHdvLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBhIG9mIHNldE9uZSkgaWYgKCFzZXRUd28uaGFzKGEpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpO1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3KSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpO1xuICAgIGlmIChlLmtleUNvZGUgPT0gMzkpIHtcbiAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnhmcmFtZUlkeCA+PSA4KSB7XG4gICAgICAgIHRoaXMueGZyYW1lSWR4ID0gNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMueGZyYW1lSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLnlmcmFtZUlkeCA9IDI7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzcpIHtcbiAgICAgIHRoaXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMueGZyYW1lSWR4ID49IDgpIHtcbiAgICAgICAgdGhpcy54ZnJhbWVJZHggPSA2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy54ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMueWZyYW1lSWR4ID0gMTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzOCkge1xuICAgICAgdGhpcy51cFByZXNzZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMueGZyYW1lSWR4ID49IDIpIHtcbiAgICAgICAgdGhpcy54ZnJhbWVJZHggPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy54ZnJhbWVJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMueWZyYW1lSWR4ID0gMztcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSA0MCkge1xuICAgICAgdGhpcy5kb3duUHJlc3NlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy54ZnJhbWVJZHggPj0gMikge1xuICAgICAgICB0aGlzLnhmcmFtZUlkeCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnhmcmFtZUlkeCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy55ZnJhbWVJZHggPSAwO1xuICAgIH1cbiAgfTtcblxuICBhbmltYXRlQ2F0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBkcmF3Q2F0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vdmUodGhpcy5jYXQpO1xuICAgICAgICBjYW52YXMuZHJhd1Byb3AodGhpcy5jYXQpO1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oKTtcbiAgICAgICAgaWYgKHRoaXMubWlzcykge1xuICAgICAgICAgIHRoaXMuZHJhd0hpdCgpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZHJhd0NhdCk7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNFcXVhbFNldChvYnN0YWNsZSwgZGVsZXRlZCkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGRyYXdDYXQpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTIpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB4ZnJhbWVJZHggPSAwO1xuICB5ZnJhbWVJZHggPSAwO1xuXG4gIGRyYXdQcm9wKHByb3ApIHtcbiAgICBwcm9wLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgdGhpcy54ZnJhbWVJZHggKiBwcm9wLndpZHRoLFxuICAgICAgICB0aGlzLnlmcmFtZUlkeCAqIHByb3AuaGVpZ2h0ICsgMSxcbiAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgIHByb3AueCxcbiAgICAgICAgcHJvcC55LFxuICAgICAgICBwcm9wLndpZHRoICogMS4yLFxuICAgICAgICBwcm9wLmhlaWdodCAqIDEuMlxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhd0NhbnZhcyhjb2xvcikge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGRlY29yYXRlQ2FudmFzKHByb3ApIHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBwcm9wLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIHByb3AuaW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgICAgaSAqIHByb3AuaGVpZ2h0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgICBwcm9wLmhlaWdodFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgICBwcm9wLmhlaWdodCxcbiAgICAgICAgICBpICogcHJvcC53aWR0aCxcbiAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLSBwcm9wLmhlaWdodCxcbiAgICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZHJhd1Byb3BzKHByb3BzLCBkZWxldGVkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmIChkZWxldGVkLmhhcyhwcm9wLmtleSkpIGNvbnRpbnVlO1xuICAgICAgcHJvcC5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBwcm9wLmltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoIC8gMiArIHByb3AueCxcbiAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgcHJvcC55LFxuICAgICAgICAgIHByb3Aud2lkdGggKiAwLjgsXG4gICAgICAgICAgcHJvcC5oZWlnaHQgKiAwLjhcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZHJhd1RleHQobGV2ZWwpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBIZWx2ZXRpY2EsIHNhbnNcIjtcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAqIExldmVsICR7bGV2ZWx9ICpgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDExMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYERvIG5vdCBlYXRgLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDE1MCk7XG4gIH1cblxuICAvLyBkcmF3UGxhbnRzKHByb3BMaXN0KSB7XG4gIC8vICAgLy8gd2hpbGUgKChjYW52YXMuaGVpZ2h0IC0gMiAqIHdhbGwud2lkdGgpIC8gd2FsbC53aWR0aCA+PSBqKSB7XG4gIC8vICAgbGV0IGlkeCA9IGogJSBwcm9wTGlzdC5sZW5ndGg7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgMCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgY3R4LmRyYXdJbWFnZShcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ucGxhbnRJbWFnZSxcbiAgLy8gICAgIDAsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0LFxuICAvLyAgICAgY2FudmFzLndpZHRoIC0gcHJvcExpc3RbaWR4XS53aWR0aCxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0ICogaixcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0ud2lkdGggKiAwLjcsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLmhlaWdodFxuICAvLyAgICk7XG4gIC8vICAgaisrO1xuICAvLyAgIC8vIH1cbiAgLy8gfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhdCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGltYWdlVXJsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmNhdCA9IG5ldyBJbWFnZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLmNhdC5zcmMgPSBpbWFnZVVybDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuXG4gIG1vdmUoeCwgeSkge1xuICAgIHRoaXMueCArPSB4O1xuICAgIHRoaXMueSArPSB5O1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgZm9vZFVybHMgPSBbXG4gIFwiLi9pbWFnZS9mb29kL2FwcGxlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9iYW5hbmEucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2JlZXIucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2J1cmdlci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY2FrZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY2hlcnJ5LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jb3JuLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jcm9pc3NhbnQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2N1c3RhcmQucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2RhbmdvLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9kb251dC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZnJpZXMucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2dyYXBlcy5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvaWNlX2NyZWFtLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9sZW1vbi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvbWVhdC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvb3JhbmdlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9wZWFjaC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGVhci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGllLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waW5lYXBwbGUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3Bpc2hhLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9yYW1lbi5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc2hhdmVkX2ljZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3BhZ2hldHRpLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zdHJhd2JlcnJ5LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zdXNoaS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2Qvc3dlZXRfcG90YXRvLnBuZ1wiLFxuXTtcblxuZXhwb3J0IGNvbnN0IHBvc2l0aW9uU2V0QXJyYXkgPSBbXG4gIFtcbiAgICBbLTI4LCAtMjVdLFxuICAgIFsrNTUsICszMF0sXG4gICAgWy01MCwgKzYwXSxcbiAgICBbKzMwLCAtNjVdLFxuICAgIFsrNjAsIC00MF0sXG4gICAgWysxNSwgKzc1XSxcbiAgICBbLTc1LCArMl0sXG4gICAgWy0zNywgLTc1XSxcbiAgICBbKzk1LCAtMzBdLFxuICAgIFstMTAwLCAtODBdLFxuICAgIFsrMTAwLCArNzBdLFxuICAgIFsrODAsIC0xMDBdLFxuICAgIFstNTAsICsxMDBdLFxuICAgIFstMTEwLCArNTBdLFxuICAgIFstMTAsIC0xMTBdLFxuICBdLFxuXG4gIFtcbiAgICBbLTQ4LCAtNTVdLFxuICAgIFsrNTcsICsyMF0sXG4gICAgWy0zMCwgKzYwXSxcbiAgICBbKzM1LCAtMzVdLFxuICAgIFstMTQsIC0zMF0sXG4gICAgWysxOSwgKzU1XSxcbiAgICBbLTUwLCArMl0sXG4gICAgWys2NywgLTc1XSxcbiAgICBbKzk1LCAtMzBdLFxuICAgIFstMTAwLCAtODBdLFxuICAgIFsrNzAsICs4MF0sXG4gICAgWysxMCwgLTkwXSxcbiAgICBbLTgwLCArMzBdLFxuICAgIFstMTAsICsxMDBdLFxuICAgIFsrMTEwLCArMzBdLFxuICBdLFxuICBbXG4gICAgWy04LCAtMzVdLFxuICAgIFsrNTcsICsyMF0sXG4gICAgWy0zMCwgKzYwXSxcbiAgICBbKzM1LCAtNDBdLFxuICAgIFstNDQsICsxOF0sXG4gICAgWysxOSwgKzY1XSxcbiAgICBbLTgwLCArNDVdLFxuICAgIFsrNjcsIC05MF0sXG4gICAgWys5NSwgLTMwXSxcbiAgICBbLTYwLCAtOTBdLFxuICAgIFsrNzMsICs5MF0sXG4gICAgWy00MCwgLTYwXSxcbiAgICBbLTcwLCArODVdLFxuICAgIFstMTAsICsxMDBdLFxuICAgIFsrMTEwLCArMzBdLFxuICBdLFxuXTtcbiIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBib2FyZCA9IG5ldyBCb2FyZCgpO1xuICBvYnN0YWNsZXMgPSBuZXcgU2V0KCk7XG5cbiAgbGlmZUxlZnQgPSAzO1xuICBjdXJyZW50TGV2ZWwgPSAxO1xuICBjdXJyZW50U2NvcmUgPSAwO1xuICBsZXZlbCA9IDE7XG4gIHdpbiA9IGZhbHNlO1xuICBsb3NlID0gZmFsc2U7XG4gIG1pc3MgPSBmYWxzZTtcbiAgcGFzcyA9IGZhbHNlO1xuXG4gIGV4ZWN1dGUoKSB7XG4gICAgLy8gaWYgKHRoaXMubGlmZSA+IDApIHtcbiAgICAvLyAgIGlmICh0aGlzLmxpZmUgPj0gMykge1xuICAgIC8vICAgICBsZXQgYmVmb3JlU2V0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgICAgbGV0IGkgPSAwO1xuICAgIC8vICAgICAgIGJlZm9yZShkb25vdGVhdGFycltpXSk7XG4gICAgLy8gICAgICAgaWYgKGkgPT09IGRvbm90ZWF0YXJyLmxlbmd0aCkgY2xlYXJJbnRlcnZhbChiZWZvcmVTZXRJbnRlcnZhbCk7XG4gICAgLy8gICAgIH0sIDcwMCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyB9XG4gIH1cblxuICBwcmV2aWV3KCkge31cblxuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLmxpZmVMZWZ0ID4gMCkge1xuICAgICAgdGhpcy5ib2FyZC5pbml0SXRlbXModGhpcy5sZXZlbCk7XG4gICAgICB0aGlzLmJvYXJkLnNob3dPYnN0YWNsZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdCb2FyZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInlvdSBsb3NlISFcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBJbnRyb1BhZ2UgfSBmcm9tIFwiLi9pbnRyb1BhZ2VcIjtcblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIGNvbnN0IGludHJvUGFnZSA9IG5ldyBJbnRyb1BhZ2UoKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgZ2FtZS5wbGF5KCk7XG59O1xuIiwiZXhwb3J0IGNsYXNzIEludHJvUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICB0aGlzLmFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC1wYWdlXCIpO1xuICAgIHRoaXMuZ2FtZUludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWludHJvXCIpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuICAgIHRoaXMuYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuICAgIHRoaXMuYmFja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKTtcblxuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFib3V0QnV0dG9uSGFuZGxlcik7XG5cbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5zdGFydEJ1dHRvbkhhbmRsZXIpO1xuXG4gICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5iYWNrQnV0dG9uSGFuZGxlcik7XG4gIH1cblxuICBhYm91dEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5hYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBzdGFydEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAvL2dhbWUgc3RhcnQgaGVyZSBtYXliZS4uLlxuICAgIHRoaXMuZ2FtZUludHJvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBnYW1lKGxldmVsLCBsaWZlKTtcbiAgfTtcblxuICBiYWNrQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfTtcbn1cblxuLy8gbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4iLCJleHBvcnQgY2xhc3MgUHJvcCB7XG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGltZ1VybCwgeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1nVXJsO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgcGxhbnRVcmxzID0gW1xuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9jYWN0dXMucG5nXCIsXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L2hlcmIucG5nXCIsXG4gIFwiLi9pbWFnZS9wbGFudC9tYW5nb3RyZWUucG5nXCIsXG4gIFwiLi9pbWFnZS9wbGFudC9wYWxtLnBuZ1wiLFxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC9zdW5mbG93ZXIucG5nXCJcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvdHVsaXAucG5nXCJcbl07XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcFwiO1xuXG5leHBvcnQgY2xhc3MgUHJvcExpc3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9wVXJscykge1xuICAgIHRoaXMucHJvcExpc3QgPSBwcm9wVXJscy5tYXAoXG4gICAgICAoeyBpbWFnZVVybCwgeCwgeSB9KSA9PiBuZXcgUHJvcCgzMiwgMzIsIGltYWdlVXJsLCB4LCB5KVxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVBvc2l0aW9uKGN1cnJlbnRMZXZlbCwgaW1hZ2VVcmxzLCBwb3NBcnJheVNldCkge1xuICBsZXQgaWR4ID0gMDtcbiAgbGV0IHBvc2l0aW9uQXJyYXkgPVxuICAgIHBvc0FycmF5U2V0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc0FycmF5U2V0Lmxlbmd0aCldO1xuICBsZXQgcmFuZG9tSW1hZ2VVcmxzID0gbmV3IFNldCgpO1xuICBsZXQgcmFuZG9tUG9zaXRpb25TZXQgPSBuZXcgU2V0KCk7XG4gIGxldCBlbGVtZW50Q291bnQgPSBjdXJyZW50TGV2ZWwgPCA0ID8gOCA6IGVsZW1lbnRDb3VudCArIDY7XG4gIGxldCByYW5kb21Qcm9wczIgPSB7fTtcbiAgbGV0IHJhbmRvbVByb3BzID0gbmV3IEFycmF5KGVsZW1lbnRDb3VudCkuZmlsbChudWxsKS5tYXAoKGUpID0+IHtcbiAgICByZXR1cm4geyB4OiBcIlwiLCB5OiBcIlwiLCBpbWFnZVVybDogXCJcIiwga2V5OiBcIlwiIH07XG4gIH0pO1xuXG4gIHdoaWxlIChyYW5kb21JbWFnZVVybHMuc2l6ZSA8IGVsZW1lbnRDb3VudCkge1xuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltYWdlVXJscy5sZW5ndGgpO1xuICAgIHJhbmRvbUltYWdlVXJscy5hZGQoaWR4KTtcbiAgfVxuXG4gIHdoaWxlIChyYW5kb21Qb3NpdGlvblNldC5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zaXRpb25BcnJheS5sZW5ndGgpO1xuICAgIHJhbmRvbVBvc2l0aW9uU2V0LmFkZChpZHgpO1xuICB9XG5cbiAgQXJyYXkuZnJvbShyYW5kb21JbWFnZVVybHMpLmZvckVhY2goKHVybElkeCwgaSkgPT4ge1xuICAgIHJhbmRvbVByb3BzW2ldLmltYWdlVXJsID0gaW1hZ2VVcmxzW3VybElkeF07XG4gICAgcmFuZG9tUHJvcHNbaV0ua2V5ID0gaTtcbiAgICByYW5kb21Qcm9wczJbaV0gPSB7fTtcbiAgICByYW5kb21Qcm9wczJbaV1bXCJpbWFnZVVybFwiXSA9IGltYWdlVXJsc1t1cmxJZHhdO1xuICB9KTtcblxuICBBcnJheS5mcm9tKHJhbmRvbVBvc2l0aW9uU2V0KS5mb3JFYWNoKChwb3NJZHgsIGkpID0+IHtcbiAgICByYW5kb21Qcm9wc1tpXS54ID0gcG9zaXRpb25BcnJheVtwb3NJZHhdWzBdO1xuICAgIHJhbmRvbVByb3BzW2ldLnkgPSBwb3NpdGlvbkFycmF5W3Bvc0lkeF1bMV07XG4gICAgcmFuZG9tUHJvcHMyW2ldW1wieFwiXSA9IHBvc2l0aW9uQXJyYXlbcG9zSWR4XVswXTtcbiAgICByYW5kb21Qcm9wczJbaV1bXCJ5XCJdID0gcG9zaXRpb25BcnJheVtwb3NJZHhdWzFdO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhyYW5kb21Qcm9wczIpO1xuICByZXR1cm4gcmFuZG9tUHJvcHM7XG59XG5cbi8vIGNyZWF0ZSBmb29kIGxpc3QgdGhhdCBjYXQgc2hvdWxkIG5vdCBlYXRcbi8vIHJhbmRvbWx5IGNob3NlbiB3aXRoaW4gdGhlIG51bWJlcnMgb2YgZm9vZCBrZXlzXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPYnN0YWNsZShjdXJyZW50TGV2ZWwsIGZvb2RLZXlzKSB7XG4gIGxldCBvYnN0YWNsZVNldCA9IG5ldyBTZXQoKTtcbiAgd2hpbGUgKG9ic3RhY2xlU2V0LnNpemUgPCBjdXJyZW50TGV2ZWwpIHtcbiAgICBvYnN0YWNsZVNldC5hZGQoZm9vZEtleXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9vZEtleXMubGVuZ3RoKV0ua2V5KTtcbiAgfVxuXG4gIHJldHVybiBvYnN0YWNsZVNldDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=