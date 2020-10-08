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
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _propImageUrls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propImageUrls */ "./src/propImageUrls.js");
/* harmony import */ var _util_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/data */ "./src/util/data.js");
/* harmony import */ var _util_randomGeneration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/randomGeneration */ "./src/util/randomGeneration.js");
/* harmony import */ var _util_generateObstacle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/generateObstacle */ "./src/util/generateObstacle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Board = /*#__PURE__*/function () {
  function Board() {
    var _this = this;

    _classCallCheck(this, Board);

    _defineProperty(this, "xframeIdx", 0);

    _defineProperty(this, "yframeIdx", 0);

    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "rightPressed", false);

    _defineProperty(this, "leftPressed", false);

    _defineProperty(this, "upPressed", false);

    _defineProperty(this, "downPressed", false);

    _defineProperty(this, "canvas", new _canvas__WEBPACK_IMPORTED_MODULE_2__["Canvas"]());

    _defineProperty(this, "cat", new _cat__WEBPACK_IMPORTED_MODULE_0__["Cat"](250, 250, 32, 32, "./image/fatcat.png", this.canvas.ctx));

    _defineProperty(this, "wall", new _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"](32, 32, "./image/fence.png"));

    _defineProperty(this, "foods", {});

    _defineProperty(this, "obstacle", void 0);

    _defineProperty(this, "miss", false);

    _defineProperty(this, "initItems", function (level) {
      _this.foods = Object(_util_randomGeneration__WEBPACK_IMPORTED_MODULE_5__["generateRandomProps"])(level, _util_data__WEBPACK_IMPORTED_MODULE_4__["foodUrls"], _util_data__WEBPACK_IMPORTED_MODULE_4__["positionSetArray"]);
      _this.obstacle = Object(_util_generateObstacle__WEBPACK_IMPORTED_MODULE_6__["generateObstacle"])(level, Object.keys(_this.foods));
    });

    _defineProperty(this, "drawBoard", function () {
      _this.canvas.drawCanvas("yellow"); // this.canvas.decorateCanvas(this.wall);
      // this.canvas.drawProps(this.foods);

    });

    _defineProperty(this, "showObstacle", function (level, idx) {
      return new Promise(function (resolve, reject) {
        var obs = Array.from(_this.obstacle);
        var end = obs.length;

        if (idx === end) {
          resolve("done");
        } else {
          _this.canvas.drawCanvas("green");

          _this.canvas.drawText(level);

          _this.canvas.drawProp(_this.foods[obs[idx]], 220, 210).then(function (res) {
            if (res === "done") {
              setTimeout(function () {
                _this.showObstacle(level, idx + 1);
              }, 1000);
            }
          });
        }
      });
    });

    _defineProperty(this, "deleteItem", function (life) {
      var foodX;
      var foodY;
      Object.keys(_this.foods).forEach(function (key) {
        var food = _this.foods[key];
        foodX = food.x;
        foodY = food.y;

        if (foodX - 20 <= _this.cat.x + 3 && foodX + food.width >= _this.cat.x + _this.cat.width - 3 && foodY - 20 <= _this.cat.y + 3 && foodY + _this.eachFood.height >= _this.cat.y + _this.cat.height - 3) {
          for (var e in _this.obstacle) {
            if (food.key === e) {
              _this.miss = true;
            }
          }

          delete _this.foods[key];
        }
      });
    });

    _defineProperty(this, "test", function () {
      _this.canvas.clear(); // this.drawBoard();


      _this.cat.x += 2;

      _this.cat.draw(); // this.canvas.drawProp(this.cat);


      requestAnimationFrame(_this.test); // this.canvas.drawProp(this.cat);
      // this.drawBoard();
      // this.deleteItem(3);
      // if (!this.miss) {
      // }
    });

    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }

  _createClass(Board, [{
    key: "drawHit",
    value: function drawHit() {} // keyUpHandler = (e) => {
    //   console.log("hi");
    //   if (e.keyCode == 39) {
    //     this.rightPressed = false;
    //   } else if (e.keyCode == 37) {
    //     this.leftPressed = false;
    //   } else if (e.keyCode == 38) {
    //     this.upPressed = false;
    //   } else if (e.keyCode == 40) {
    //     this.downPressed = false;
    //   }
    // };
    // keyDownHandler = (e) => {
    //   if (e.keyCode == 39) {
    //     this.rightPressed = true;
    //     if (this.xframeIdx >= 8) {
    //       this.xframeIdx = 6;
    //     } else {
    //       this.xframeIdx += 1;
    //     }
    //     this.yframeIdx = 2;
    //   } else if (e.keyCode == 37) {
    //     this.leftPressed = true;
    //     if (this.xframeIdx >= 8) {
    //       this.xframeIdx = 6;
    //     } else {
    //       this.xframeIdx += 1;
    //     }
    //     this.yframeIdx = 1;
    //   } else if (e.keyCode == 38) {
    //     this.upPressed = true;
    //     if (this.xframeIdx >= 2) {
    //       this.xframeIdx = 0;
    //     } else {
    //       this.xframeIdx += 1;
    //     }
    //     this.yframeIdx = 3;
    //   } else if (e.keyCode == 40) {
    //     this.downPressed = true;
    //     if (this.xframeIdx >= 2) {
    //       this.xframeIdx = 0;
    //     } else {
    //       this.xframeIdx += 1;
    //     }
    //     this.yframeIdx = 0;
    //   }
    // };
    // positionChange = (prop) => {
    //   let x = 0;
    //   let y = 0;
    //   if (
    //     this.rightPressed &&
    //     prop.x < this.canvas.width - prop.width - this.wall.width
    //   ) {
    //     x += 3;
    //   } else if (this.leftPressed && prop.x > this.wall.width) {
    //     x -= 3;
    //   } else if (this.upPressed && prop.y > this.wall.width - 9) {
    //     y -= 3;
    //   } else if (
    //     this.downPressed &&
    //     y < this.canvas.height - prop.width - this.wall.width - 5
    //   ) {
    //     y += 3;
    //   }
    //   return [x, y];
    // };
    // isEqualSet = (setOne, setTwo) => {
    //   if (setOne.size !== setTwo.size) return false;
    //   for (var a of setOne) if (!setTwo.has(a)) return false;
    //   return true;
    // };

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Canvas = function Canvas() {
  var _this = this;

  _classCallCheck(this, Canvas);

  _defineProperty(this, "canvas", document.getElementById("myCanvas"));

  _defineProperty(this, "ctx", this.canvas.getContext("2d"));

  _defineProperty(this, "image", new Image());

  _defineProperty(this, "draw", function (prop) {
    _this.ctx.drawImage(_this.image, prop.width, prop.height, prop.width, prop.height, 250, 250, prop.width * 1.2, prop.height * 1.2);
  });

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

    prop.image.onload = function () {
      while (i < 10) {
        _this.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.height, 0, prop.width, prop.height);

        _this.ctx.drawImage(prop.image, 0, 0, prop.width, prop.height, i * prop.width, _this.canvas.height - prop.height, prop.width, prop.height);

        i++;
      }
    };
  });

  _defineProperty(this, "drawProps", function (props) {
    var i = 0;
    var keys = Object.keys(props);

    var _loop = function _loop() {
      var prop = props[keys[i]];
      var image = new Image();

      image.onload = function () {
        _this.ctx.drawImage(image, 0, 0, prop.width, prop.height, _this.canvas.width / 2 + prop.x + _this.x, _this.canvas.height / 2 + prop.y, prop.width * 0.8, prop.height * 0.8);
      };

      image.src = "./image/fatcat.png";
      i++;
    };

    while (i < keys.length) {
      _loop();
    }
  });

  _defineProperty(this, "drawText", function (level) {
    _this.ctx.fillStyle = "white";
    _this.ctx.font = "30px Helvetica, sans";
    _this.ctx.textAlign = "center";

    _this.ctx.fillText("* Level ".concat(level, " *"), _this.canvas.width / 2, 110);

    _this.ctx.fillText("Do not eat", _this.canvas.width / 2, 150);
  });

  this.image.addEventListener("load", function () {
    ctx.drawImage(_this.image, 32, 32);
  });
} // drawProp = (prop, startX = 0, startY = 0) => {
//   console.log(prop);
//   return new Promise((resolve, reject) => {
//     this.image = new Image();
//     this.image.onload = () => {
//       this.ctx.drawImage(
//         image,
//         prop.width,
//         prop.height,
//         prop.width,
//         prop.height,
//         startX || prop.x,
//         startY || prop.y,
//         prop.width * 1.2,
//         prop.height * 1.2
//       );
//       resolve("done");
//     };
//     image.src = prop.src;
//   });
// };
// drawPlants(propList) {
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cat = function Cat(_x, _y, width, height, imageUrl, ctx) {
  var _this = this;

  _classCallCheck(this, Cat);

  _defineProperty(this, "move", function (x, y) {
    _this.x += x;
    _this.y += y;
  });

  _defineProperty(this, "draw", function () {
    _this.ctx.drawImage(_this.image, _this.width, _this.height, _this.width, _this.height, _this.x, _this.y, _this.width * 1.2, _this.height * 1.2);
  });

  this.x = _x;
  this.y = _y;
  this.width = width;
  this.height = height;
  this.image = new Image();
  this.image.addEventListener("load", function () {
    _this.draw();
  });
  this.image.src = imageUrl;
  this.ctx = ctx;
};

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

  _defineProperty(this, "lifeLeft", 3);

  _defineProperty(this, "currentLevel", 1);

  _defineProperty(this, "currentScore", 0);

  _defineProperty(this, "level", 1);

  _defineProperty(this, "win", false);

  _defineProperty(this, "lose", false);

  _defineProperty(this, "miss", false);

  _defineProperty(this, "pass", false);

  _defineProperty(this, "play", function () {
    if (_this.lifeLeft > 0) {
      _this.board.initItems(3); // this.board.showObstacle(this.level, 0).then((res) => console.log(res));
      // this.board.drawBoard();


      _this.board.test();
    }
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function (e) {
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
  this.aboutButton.addEventListener("click", this.aboutButtonHandler);
  this.startButton.addEventListener("click", this.startButtonHandler);
  this.backButton.addEventListener("click", this.backButtonHandler);
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
  this.src = imgUrl;
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
/*! exports provided: foodUrls, positionSetArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodUrls", function() { return foodUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionSetArray", function() { return positionSetArray; });
var foodUrls = ["./image/food/apple.png", "./image/food/banana.png", "./image/food/beer.png", "./image/food/burger.png", "./image/food/cake.png", "./image/food/cherry.png", "./image/food/corn.png", "./image/food/croissant.png", "./image/food/custard.png", "./image/food/dango.png", "./image/food/donut.png", "./image/food/fries.png", "./image/food/grapes.png", "./image/food/ice_cream.png", "./image/food/lemon.png", "./image/food/meat.png", "./image/food/orange.png", "./image/food/peach.png", "./image/food/pear.png", "./image/food/pie.png", "./image/food/pineapple.png", "./image/food/pisha.png", "./image/food/ramen.png", "./image/food/shaved_ice.png", "./image/food/spaghetti.png", "./image/food/strawberry.png", "./image/food/sushi.png", "./image/food/sweet_potato.png"];
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
/**
 *
 * @param {*} currentLevel
 * @param {*} foodKeys
 *
 * randomly choose obstacles out of the keys of chosen food object
 */
function generateObstacle(currentLevel, foodKeys) {
  var obstacleSet = new Set();

  while (obstacleSet.size < currentLevel) {
    obstacleSet.add(foodKeys[Math.floor(Math.random() * foodKeys.length)]);
  }

  console.log(obstacleSet);
  return obstacleSet;
}

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
    console.log(imgArr[i]);
    result[i] = new _prop__WEBPACK_IMPORTED_MODULE_0__["Prop"](32, 32, imageUrls[imgArr[i]], positionArray[posArr[i]][0], positionArray[posArr[i]][1]);
  }

  return result;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludHJvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcEltYWdlVXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlT2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmFuZG9tR2VuZXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJCb2FyZCIsIkNhbnZhcyIsIkNhdCIsImNhbnZhcyIsImN0eCIsIlByb3AiLCJsZXZlbCIsImZvb2RzIiwiZ2VuZXJhdGVSYW5kb21Qcm9wcyIsImZvb2RVcmxzIiwicG9zaXRpb25TZXRBcnJheSIsIm9ic3RhY2xlIiwiZ2VuZXJhdGVPYnN0YWNsZSIsIk9iamVjdCIsImtleXMiLCJkcmF3Q2FudmFzIiwiaWR4IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvYnMiLCJBcnJheSIsImZyb20iLCJlbmQiLCJsZW5ndGgiLCJkcmF3VGV4dCIsImRyYXdQcm9wIiwidGhlbiIsInJlcyIsInNldFRpbWVvdXQiLCJzaG93T2JzdGFjbGUiLCJsaWZlIiwiZm9vZFgiLCJmb29kWSIsImZvckVhY2giLCJrZXkiLCJmb29kIiwieCIsInkiLCJjYXQiLCJ3aWR0aCIsImVhY2hGb29kIiwiaGVpZ2h0IiwiZSIsIm1pc3MiLCJjbGVhciIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0ZXN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJJbWFnZSIsInByb3AiLCJkcmF3SW1hZ2UiLCJpbWFnZSIsImNvbG9yIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJpIiwib25sb2FkIiwicHJvcHMiLCJzcmMiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJpbWFnZVVybCIsIkdhbWUiLCJJbnRyb1BhZ2UiLCJTZXQiLCJsaWZlTGVmdCIsImJvYXJkIiwiaW5pdEl0ZW1zIiwiZ2FtZSIsInBsYXkiLCJhYm91dCIsInN0eWxlIiwiZGlzcGxheSIsImdhbWVJbnRybyIsIm1haW4iLCJzdGFydEJ1dHRvbiIsImFib3V0QnV0dG9uIiwiYmFja0J1dHRvbiIsImFib3V0QnV0dG9uSGFuZGxlciIsInN0YXJ0QnV0dG9uSGFuZGxlciIsImJhY2tCdXR0b25IYW5kbGVyIiwiaW1nVXJsIiwicGxhbnRVcmxzIiwiY3VycmVudExldmVsIiwiZm9vZEtleXMiLCJvYnN0YWNsZVNldCIsInNpemUiLCJhZGQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VVcmxzIiwicG9zQXJyYXlTZXQiLCJwb3NpdGlvbkFycmF5IiwicmFuZG9tSW1hZ2VVcmxzIiwicmFuZG9tUG9zaXRpb25TZXQiLCJlbGVtZW50Q291bnQiLCJyZXN1bHQiLCJpbWdBcnIiLCJwb3NBcnIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FB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Q0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCRyxTQUFTLENBQUMvRSxNQUFyQyxDQUFOO0FBQ0FrRixtQkFBZSxDQUFDVCxHQUFoQixDQUFvQmpGLEdBQXBCO0FBQ0Q7O0FBRUQsU0FBTzJGLGlCQUFpQixDQUFDWCxJQUFsQixHQUF5QlksWUFBaEMsRUFBOEM7QUFDNUM1RixPQUFHLEdBQUdrRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSyxhQUFhLENBQUNqRixNQUF6QyxDQUFOO0FBQ0FtRixxQkFBaUIsQ0FBQ1YsR0FBbEIsQ0FBc0JqRixHQUF0QjtBQUNEOztBQUVELE1BQUk4RixNQUFNLEdBQUd6RixLQUFLLENBQUNDLElBQU4sQ0FBV29GLGVBQVgsQ0FBYjtBQUNBLE1BQUlLLE1BQU0sR0FBRzFGLEtBQUssQ0FBQ0MsSUFBTixDQUFXcUYsaUJBQVgsQ0FBYjs7QUFFQSxPQUFLLElBQUkzQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHOEMsTUFBTSxDQUFDdEYsTUFBM0IsRUFBbUN3QyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDcUMsV0FBTyxDQUFDQyxHQUFSLENBQVlRLE1BQU0sQ0FBQzlDLENBQUQsQ0FBbEI7QUFDQTZDLFVBQU0sQ0FBQzdDLENBQUQsQ0FBTixHQUFZLElBQUkzRCwwQ0FBSixDQUNWLEVBRFUsRUFFVixFQUZVLEVBR1ZrRyxTQUFTLENBQUNPLE1BQU0sQ0FBQzlDLENBQUQsQ0FBUCxDQUhDLEVBSVZ5QyxhQUFhLENBQUNNLE1BQU0sQ0FBQy9DLENBQUQsQ0FBUCxDQUFiLENBQXlCLENBQXpCLENBSlUsRUFLVnlDLGFBQWEsQ0FBQ00sTUFBTSxDQUFDL0MsQ0FBRCxDQUFQLENBQWIsQ0FBeUIsQ0FBekIsQ0FMVSxDQUFaO0FBT0Q7O0FBRUQsU0FBTzZDLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgQ2F0IH0gZnJvbSBcIi4vY2F0XCI7XG5pbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4vcHJvcFwiO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgeyBwbGFudFVybHMgfSBmcm9tIFwiLi9wcm9wSW1hZ2VVcmxzXCI7XG5pbXBvcnQgeyBmb29kVXJscywgcG9zaXRpb25TZXRBcnJheSB9IGZyb20gXCIuL3V0aWwvZGF0YVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21Qcm9wcyB9IGZyb20gXCIuL3V0aWwvcmFuZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVPYnN0YWNsZSB9IGZyb20gXCIuL3V0aWwvZ2VuZXJhdGVPYnN0YWNsZVwiO1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxuICB4ZnJhbWVJZHggPSAwO1xuICB5ZnJhbWVJZHggPSAwO1xuICB4ID0gMDtcbiAgeSA9IDA7XG4gIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgZG93blByZXNzZWQgPSBmYWxzZTtcblxuICBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG4gIGNhdCA9IG5ldyBDYXQoMjUwLCAyNTAsIDMyLCAzMiwgXCIuL2ltYWdlL2ZhdGNhdC5wbmdcIiwgdGhpcy5jYW52YXMuY3R4KTtcbiAgd2FsbCA9IG5ldyBQcm9wKDMyLCAzMiwgXCIuL2ltYWdlL2ZlbmNlLnBuZ1wiKTtcbiAgZm9vZHMgPSB7fTsgLy9mb29kcyBvYmpcbiAgb2JzdGFjbGU7IC8vb2JzdGFjbGUga2V5IHNldFxuXG4gIG1pc3MgPSBmYWxzZTtcblxuICBpbml0SXRlbXMgPSAobGV2ZWwpID0+IHtcbiAgICB0aGlzLmZvb2RzID0gZ2VuZXJhdGVSYW5kb21Qcm9wcyhsZXZlbCwgZm9vZFVybHMsIHBvc2l0aW9uU2V0QXJyYXkpO1xuICAgIHRoaXMub2JzdGFjbGUgPSBnZW5lcmF0ZU9ic3RhY2xlKGxldmVsLCBPYmplY3Qua2V5cyh0aGlzLmZvb2RzKSk7XG4gIH07XG5cbiAgZHJhd0JvYXJkID0gKCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmRyYXdDYW52YXMoXCJ5ZWxsb3dcIik7XG4gICAgLy8gdGhpcy5jYW52YXMuZGVjb3JhdGVDYW52YXModGhpcy53YWxsKTtcbiAgICAvLyB0aGlzLmNhbnZhcy5kcmF3UHJvcHModGhpcy5mb29kcyk7XG4gIH07XG5cbiAgc2hvd09ic3RhY2xlID0gKGxldmVsLCBpZHgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IG9icyA9IEFycmF5LmZyb20odGhpcy5vYnN0YWNsZSk7XG4gICAgICBsZXQgZW5kID0gb2JzLmxlbmd0aDtcblxuICAgICAgaWYgKGlkeCA9PT0gZW5kKSB7XG4gICAgICAgIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0NhbnZhcyhcImdyZWVuXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3VGV4dChsZXZlbCk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd1Byb3AodGhpcy5mb29kc1tvYnNbaWR4XV0sIDIyMCwgMjEwKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzID09PSBcImRvbmVcIikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd09ic3RhY2xlKGxldmVsLCBpZHggKyAxKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZHJhd0hpdCgpIHt9XG5cbiAgZGVsZXRlSXRlbSA9IChsaWZlKSA9PiB7XG4gICAgbGV0IGZvb2RYO1xuICAgIGxldCBmb29kWTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMuZm9vZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGZvb2QgPSB0aGlzLmZvb2RzW2tleV07XG4gICAgICBmb29kWCA9IGZvb2QueDtcbiAgICAgIGZvb2RZID0gZm9vZC55O1xuXG4gICAgICBpZiAoXG4gICAgICAgIGZvb2RYIC0gMjAgPD0gdGhpcy5jYXQueCArIDMgJiZcbiAgICAgICAgZm9vZFggKyBmb29kLndpZHRoID49IHRoaXMuY2F0LnggKyB0aGlzLmNhdC53aWR0aCAtIDMgJiZcbiAgICAgICAgZm9vZFkgLSAyMCA8PSB0aGlzLmNhdC55ICsgMyAmJlxuICAgICAgICBmb29kWSArIHRoaXMuZWFjaEZvb2QuaGVpZ2h0ID49IHRoaXMuY2F0LnkgKyB0aGlzLmNhdC5oZWlnaHQgLSAzXG4gICAgICApIHtcbiAgICAgICAgZm9yIChsZXQgZSBpbiB0aGlzLm9ic3RhY2xlKSB7XG4gICAgICAgICAgaWYgKGZvb2Qua2V5ID09PSBlKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5mb29kc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIGFuaW1hdGVDYXQoKSB7XG4gIC8vICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgLy8gICAgIGNvbnN0IGRyYXdDYXQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgICAgIHRoaXMubW92ZSh0aGlzLmNhdCk7XG4gIC8vICAgICAgIGNhbnZhcy5kcmF3UHJvcCh0aGlzLmNhdCk7XG4gIC8vICAgICAgIHRoaXMuZGVsZXRlSXRlbSgpO1xuICAvLyAgICAgICBpZiAodGhpcy5taXNzKSB7XG4gIC8vICAgICAgICAgdGhpcy5kcmF3SGl0KCk7XG4gIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbChkcmF3Q2F0KTtcbiAgLy8gICAgICAgICByZWplY3QoKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmIChpc0VxdWFsU2V0KG9ic3RhY2xlLCBkZWxldGVkKSkge1xuICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwoZHJhd0NhdCk7XG4gIC8vICAgICAgICAgcmVzb2x2ZSgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LCAxMik7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICB0ZXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG4gICAgLy8gdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICB0aGlzLmNhdC54ICs9IDI7XG4gICAgdGhpcy5jYXQuZHJhdygpO1xuICAgIC8vIHRoaXMuY2FudmFzLmRyYXdQcm9wKHRoaXMuY2F0KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50ZXN0KTtcbiAgICAvLyB0aGlzLmNhbnZhcy5kcmF3UHJvcCh0aGlzLmNhdCk7XG4gICAgLy8gdGhpcy5kcmF3Qm9hcmQoKTtcblxuICAgIC8vIHRoaXMuZGVsZXRlSXRlbSgzKTtcbiAgICAvLyBpZiAoIXRoaXMubWlzcykge1xuICAgIC8vIH1cbiAgfTtcblxuICAvLyBrZXlVcEhhbmRsZXIgPSAoZSkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PSAzOSkge1xuICAvLyAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgLy8gICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PSAzNykge1xuICAvLyAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAvLyAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM4KSB7XG4gIC8vICAgICB0aGlzLnVwUHJlc3NlZCA9IGZhbHNlO1xuICAvLyAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDQwKSB7XG4gIC8vICAgICB0aGlzLmRvd25QcmVzc2VkID0gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIC8vIGtleURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgLy8gICBpZiAoZS5rZXlDb2RlID09IDM5KSB7XG4gIC8vICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gIC8vICAgICBpZiAodGhpcy54ZnJhbWVJZHggPj0gOCkge1xuICAvLyAgICAgICB0aGlzLnhmcmFtZUlkeCA9IDY7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0aGlzLnhmcmFtZUlkeCArPSAxO1xuICAvLyAgICAgfVxuICAvLyAgICAgdGhpcy55ZnJhbWVJZHggPSAyO1xuICAvLyAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09IDM3KSB7XG4gIC8vICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgLy8gICAgIGlmICh0aGlzLnhmcmFtZUlkeCA+PSA4KSB7XG4gIC8vICAgICAgIHRoaXMueGZyYW1lSWR4ID0gNjtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHRoaXMueGZyYW1lSWR4ICs9IDE7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aGlzLnlmcmFtZUlkeCA9IDE7XG4gIC8vICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gMzgpIHtcbiAgLy8gICAgIHRoaXMudXBQcmVzc2VkID0gdHJ1ZTtcbiAgLy8gICAgIGlmICh0aGlzLnhmcmFtZUlkeCA+PSAyKSB7XG4gIC8vICAgICAgIHRoaXMueGZyYW1lSWR4ID0gMDtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHRoaXMueGZyYW1lSWR4ICs9IDE7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aGlzLnlmcmFtZUlkeCA9IDM7XG4gIC8vICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT0gNDApIHtcbiAgLy8gICAgIHRoaXMuZG93blByZXNzZWQgPSB0cnVlO1xuICAvLyAgICAgaWYgKHRoaXMueGZyYW1lSWR4ID49IDIpIHtcbiAgLy8gICAgICAgdGhpcy54ZnJhbWVJZHggPSAwO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy54ZnJhbWVJZHggKz0gMTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHRoaXMueWZyYW1lSWR4ID0gMDtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgLy8gcG9zaXRpb25DaGFuZ2UgPSAocHJvcCkgPT4ge1xuICAvLyAgIGxldCB4ID0gMDtcbiAgLy8gICBsZXQgeSA9IDA7XG5cbiAgLy8gICBpZiAoXG4gIC8vICAgICB0aGlzLnJpZ2h0UHJlc3NlZCAmJlxuICAvLyAgICAgcHJvcC54IDwgdGhpcy5jYW52YXMud2lkdGggLSBwcm9wLndpZHRoIC0gdGhpcy53YWxsLndpZHRoXG4gIC8vICAgKSB7XG4gIC8vICAgICB4ICs9IDM7XG4gIC8vICAgfSBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkICYmIHByb3AueCA+IHRoaXMud2FsbC53aWR0aCkge1xuICAvLyAgICAgeCAtPSAzO1xuICAvLyAgIH0gZWxzZSBpZiAodGhpcy51cFByZXNzZWQgJiYgcHJvcC55ID4gdGhpcy53YWxsLndpZHRoIC0gOSkge1xuICAvLyAgICAgeSAtPSAzO1xuICAvLyAgIH0gZWxzZSBpZiAoXG4gIC8vICAgICB0aGlzLmRvd25QcmVzc2VkICYmXG4gIC8vICAgICB5IDwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gcHJvcC53aWR0aCAtIHRoaXMud2FsbC53aWR0aCAtIDVcbiAgLy8gICApIHtcbiAgLy8gICAgIHkgKz0gMztcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIFt4LCB5XTtcbiAgLy8gfTtcblxuICAvLyBpc0VxdWFsU2V0ID0gKHNldE9uZSwgc2V0VHdvKSA9PiB7XG4gIC8vICAgaWYgKHNldE9uZS5zaXplICE9PSBzZXRUd28uc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAvLyAgIGZvciAodmFyIGEgb2Ygc2V0T25lKSBpZiAoIXNldFR3by5oYXMoYSkpIHJldHVybiBmYWxzZTtcbiAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgLy8gfTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDYW52YXMge1xuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzMiwgMzIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZHJhd1Byb3AgPSAocHJvcCwgc3RhcnRYID0gMCwgc3RhcnRZID0gMCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKHByb3ApO1xuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIC8vICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gIC8vICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgLy8gICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAvLyAgICAgICAgIGltYWdlLFxuICAvLyAgICAgICAgIHByb3Aud2lkdGgsXG4gIC8vICAgICAgICAgcHJvcC5oZWlnaHQsXG4gIC8vICAgICAgICAgcHJvcC53aWR0aCxcbiAgLy8gICAgICAgICBwcm9wLmhlaWdodCxcbiAgLy8gICAgICAgICBzdGFydFggfHwgcHJvcC54LFxuICAvLyAgICAgICAgIHN0YXJ0WSB8fCBwcm9wLnksXG4gIC8vICAgICAgICAgcHJvcC53aWR0aCAqIDEuMixcbiAgLy8gICAgICAgICBwcm9wLmhlaWdodCAqIDEuMlxuICAvLyAgICAgICApO1xuICAvLyAgICAgICByZXNvbHZlKFwiZG9uZVwiKTtcbiAgLy8gICAgIH07XG4gIC8vICAgICBpbWFnZS5zcmMgPSBwcm9wLnNyYztcbiAgLy8gICB9KTtcbiAgLy8gfTtcbiAgZHJhdyA9IChwcm9wKSA9PiB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIHByb3Aud2lkdGgsXG4gICAgICBwcm9wLmhlaWdodCxcbiAgICAgIHByb3Aud2lkdGgsXG4gICAgICBwcm9wLmhlaWdodCxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIHByb3Aud2lkdGggKiAxLjIsXG4gICAgICBwcm9wLmhlaWdodCAqIDEuMlxuICAgICk7XG4gIH07XG5cbiAgZHJhd0NhbnZhcyA9IChjb2xvcikgPT4ge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgfTtcblxuICBjbGVhciA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG5cbiAgZGVjb3JhdGVDYW52YXMgPSAocHJvcCkgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIHByb3AuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgd2hpbGUgKGkgPCAxMCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgcHJvcC5pbWFnZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgcHJvcC53aWR0aCxcbiAgICAgICAgICBwcm9wLmhlaWdodCxcbiAgICAgICAgICBpICogcHJvcC5oZWlnaHQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICAgIHByb3AuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBwcm9wLmltYWdlLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBwcm9wLndpZHRoLFxuICAgICAgICAgIHByb3AuaGVpZ2h0LFxuICAgICAgICAgIGkgKiBwcm9wLndpZHRoLFxuICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAtIHByb3AuaGVpZ2h0LFxuICAgICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgICAgcHJvcC5oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZHJhd1Byb3BzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuXG4gICAgd2hpbGUgKGkgPCBrZXlzLmxlbmd0aCkge1xuICAgICAgbGV0IHByb3AgPSBwcm9wc1trZXlzW2ldXTtcbiAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIHByb3Aud2lkdGgsXG4gICAgICAgICAgcHJvcC5oZWlnaHQsXG4gICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggLyAyICsgcHJvcC54ICsgdGhpcy54LFxuICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyBwcm9wLnksXG4gICAgICAgICAgcHJvcC53aWR0aCAqIDAuOCxcbiAgICAgICAgICBwcm9wLmhlaWdodCAqIDAuOFxuICAgICAgICApO1xuICAgICAgfTtcbiAgICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZS9mYXRjYXQucG5nXCI7XG4gICAgICBpKys7XG4gICAgfVxuICB9O1xuXG4gIGRyYXdUZXh0ID0gKGxldmVsKSA9PiB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggSGVsdmV0aWNhLCBzYW5zXCI7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgKiBMZXZlbCAke2xldmVsfSAqYCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBEbyBub3QgZWF0YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAxNTApO1xuICB9O1xuXG4gIC8vIGRyYXdQbGFudHMocHJvcExpc3QpIHtcbiAgLy8gICAvLyB3aGlsZSAoKGNhbnZhcy5oZWlnaHQgLSAyICogd2FsbC53aWR0aCkgLyB3YWxsLndpZHRoID49IGopIHtcbiAgLy8gICBsZXQgaWR4ID0gaiAlIHByb3BMaXN0Lmxlbmd0aDtcbiAgLy8gICBjdHguZHJhd0ltYWdlKFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5wbGFudEltYWdlLFxuICAvLyAgICAgMCxcbiAgLy8gICAgIDAsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLndpZHRoLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHQsXG4gIC8vICAgICAwLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHQgKiBqLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCAqIDAuNyxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0XG4gIC8vICAgKTtcbiAgLy8gICBjdHguZHJhd0ltYWdlKFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5wbGFudEltYWdlLFxuICAvLyAgICAgMCxcbiAgLy8gICAgIDAsXG4gIC8vICAgICBwcm9wTGlzdFtpZHhdLndpZHRoLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHQsXG4gIC8vICAgICBjYW52YXMud2lkdGggLSBwcm9wTGlzdFtpZHhdLndpZHRoLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS5oZWlnaHQgKiBqLFxuICAvLyAgICAgcHJvcExpc3RbaWR4XS53aWR0aCAqIDAuNyxcbiAgLy8gICAgIHByb3BMaXN0W2lkeF0uaGVpZ2h0XG4gIC8vICAgKTtcbiAgLy8gICBqKys7XG4gIC8vICAgLy8gfVxuICAvLyB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ2F0IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgaW1hZ2VVcmwsIGN0eCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmltYWdlLnNyYyA9IGltYWdlVXJsO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgbW92ZSA9ICh4LCB5KSA9PiB7XG4gICAgdGhpcy54ICs9IHg7XG4gICAgdGhpcy55ICs9IHk7XG4gIH07XG5cbiAgZHJhdyA9ICgpID0+IHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0LFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCAqIDEuMixcbiAgICAgIHRoaXMuaGVpZ2h0ICogMS4yXG4gICAgKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IEludHJvUGFnZSB9IGZyb20gXCIuL2ludHJvUGFnZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIGludHJvUGFnZSA9IG5ldyBJbnRyb1BhZ2UoKTtcbiAgYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgb2JzdGFjbGVzID0gbmV3IFNldCgpO1xuXG4gIGxpZmVMZWZ0ID0gMztcbiAgY3VycmVudExldmVsID0gMTtcbiAgY3VycmVudFNjb3JlID0gMDtcbiAgbGV2ZWwgPSAxO1xuXG4gIHdpbiA9IGZhbHNlO1xuICBsb3NlID0gZmFsc2U7XG4gIG1pc3MgPSBmYWxzZTtcbiAgcGFzcyA9IGZhbHNlO1xuXG4gIHBsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlmZUxlZnQgPiAwKSB7XG4gICAgICB0aGlzLmJvYXJkLmluaXRJdGVtcygzKTtcbiAgICAgIC8vIHRoaXMuYm9hcmQuc2hvd09ic3RhY2xlKHRoaXMubGV2ZWwsIDApLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gICAgICAvLyB0aGlzLmJvYXJkLmRyYXdCb2FyZCgpO1xuICAgICAgdGhpcy5ib2FyZC50ZXN0KCk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLnBsYXkoKTtcbn07XG4iLCJleHBvcnQgY2xhc3MgSW50cm9QYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHRoaXMuYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXBhZ2VcIik7XG4gICAgdGhpcy5nYW1lSW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtaW50cm9cIik7XG4gICAgdGhpcy5zdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIik7XG4gICAgdGhpcy5hYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgdGhpcy5iYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrXCIpO1xuXG4gICAgdGhpcy5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5hYm91dEJ1dHRvbkhhbmRsZXIpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3RhcnRCdXR0b25IYW5kbGVyKTtcbiAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYmFja0J1dHRvbkhhbmRsZXIpO1xuICB9XG5cbiAgYWJvdXRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG5cbiAgc3RhcnRCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgLy9nYW1lIHN0YXJ0IGhlcmUgbWF5YmUuLi5cbiAgICB0aGlzLmdhbWVJbnRyby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gZ2FtZShsZXZlbCwgbGlmZSk7XG4gIH07XG5cbiAgYmFja0J1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5hYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGhpcy5nYW1lSW50cm8uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH07XG59XG5cbi8vIG1haW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuIiwiZXhwb3J0IGNsYXNzIFByb3Age1xuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBpbWdVcmwsIHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5zcmMgPSBpbWdVcmw7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBwbGFudFVybHMgPSBbXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L2NhY3R1cy5wbmdcIixcbiAgLy8gXCIuL3NyYy9pbWcvcGxhbnQvaGVyYi5wbmdcIixcbiAgXCIuL2ltYWdlL3BsYW50L21hbmdvdHJlZS5wbmdcIixcbiAgXCIuL2ltYWdlL3BsYW50L3BhbG0ucG5nXCIsXG4gIC8vIFwiLi9zcmMvaW1nL3BsYW50L3N1bmZsb3dlci5wbmdcIlxuICAvLyBcIi4vc3JjL2ltZy9wbGFudC90dWxpcC5wbmdcIlxuXTtcbiIsImV4cG9ydCBjb25zdCBmb29kVXJscyA9IFtcbiAgXCIuL2ltYWdlL2Zvb2QvYXBwbGUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2JhbmFuYS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYmVlci5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvYnVyZ2VyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jYWtlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9jaGVycnkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nvcm4ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2Nyb2lzc2FudC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvY3VzdGFyZC5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZGFuZ28ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2RvbnV0LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9mcmllcy5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvZ3JhcGVzLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9pY2VfY3JlYW0ucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL2xlbW9uLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9tZWF0LnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9vcmFuZ2UucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BlYWNoLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9wZWFyLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9waWUucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3BpbmVhcHBsZS5wbmdcIixcbiAgXCIuL2ltYWdlL2Zvb2QvcGlzaGEucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3JhbWVuLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zaGF2ZWRfaWNlLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zcGFnaGV0dGkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N0cmF3YmVycnkucG5nXCIsXG4gIFwiLi9pbWFnZS9mb29kL3N1c2hpLnBuZ1wiLFxuICBcIi4vaW1hZ2UvZm9vZC9zd2VldF9wb3RhdG8ucG5nXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgcG9zaXRpb25TZXRBcnJheSA9IFtcbiAgW1xuICAgIFstMjgsIC0yNV0sXG4gICAgWys1NSwgKzMwXSxcbiAgICBbLTUwLCArNjBdLFxuICAgIFsrMzAsIC02NV0sXG4gICAgWys2MCwgLTQwXSxcbiAgICBbKzE1LCArNzVdLFxuICAgIFstNzUsICsyXSxcbiAgICBbLTM3LCAtNzVdLFxuICAgIFsrOTUsIC0zMF0sXG4gICAgWy0xMDAsIC04MF0sXG4gICAgWysxMDAsICs3MF0sXG4gICAgWys4MCwgLTEwMF0sXG4gICAgWy01MCwgKzEwMF0sXG4gICAgWy0xMTAsICs1MF0sXG4gICAgWy0xMCwgLTExMF0sXG4gIF0sXG5cbiAgW1xuICAgIFstNDgsIC01NV0sXG4gICAgWys1NywgKzIwXSxcbiAgICBbLTMwLCArNjBdLFxuICAgIFsrMzUsIC0zNV0sXG4gICAgWy0xNCwgLTMwXSxcbiAgICBbKzE5LCArNTVdLFxuICAgIFstNTAsICsyXSxcbiAgICBbKzY3LCAtNzVdLFxuICAgIFsrOTUsIC0zMF0sXG4gICAgWy0xMDAsIC04MF0sXG4gICAgWys3MCwgKzgwXSxcbiAgICBbKzEwLCAtOTBdLFxuICAgIFstODAsICszMF0sXG4gICAgWy0xMCwgKzEwMF0sXG4gICAgWysxMTAsICszMF0sXG4gIF0sXG4gIFtcbiAgICBbLTgsIC0zNV0sXG4gICAgWys1NywgKzIwXSxcbiAgICBbLTMwLCArNjBdLFxuICAgIFsrMzUsIC00MF0sXG4gICAgWy00NCwgKzE4XSxcbiAgICBbKzE5LCArNjVdLFxuICAgIFstODAsICs0NV0sXG4gICAgWys2NywgLTkwXSxcbiAgICBbKzk1LCAtMzBdLFxuICAgIFstNjAsIC05MF0sXG4gICAgWys3MywgKzkwXSxcbiAgICBbLTQwLCAtNjBdLFxuICAgIFstNzAsICs4NV0sXG4gICAgWy0xMCwgKzEwMF0sXG4gICAgWysxMTAsICszMF0sXG4gIF0sXG5dO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50TGV2ZWxcbiAqIEBwYXJhbSB7Kn0gZm9vZEtleXNcbiAqXG4gKiByYW5kb21seSBjaG9vc2Ugb2JzdGFjbGVzIG91dCBvZiB0aGUga2V5cyBvZiBjaG9zZW4gZm9vZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2JzdGFjbGUoY3VycmVudExldmVsLCBmb29kS2V5cykge1xuICBsZXQgb2JzdGFjbGVTZXQgPSBuZXcgU2V0KCk7XG4gIHdoaWxlIChvYnN0YWNsZVNldC5zaXplIDwgY3VycmVudExldmVsKSB7XG4gICAgb2JzdGFjbGVTZXQuYWRkKGZvb2RLZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZvb2RLZXlzLmxlbmd0aCldKTtcbiAgfVxuICBcbiAgY29uc29sZS5sb2cob2JzdGFjbGVTZXQpO1xuICByZXR1cm4gb2JzdGFjbGVTZXQ7XG59XG4iLCJpbXBvcnQgeyBQcm9wIH0gZnJvbSBcIi4uL3Byb3BcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUHJvcHMoY3VycmVudExldmVsLCBpbWFnZVVybHMsIHBvc0FycmF5U2V0KSB7XG4gIGxldCBpZHggPSAwO1xuXG4gIGxldCBwb3NpdGlvbkFycmF5ID1cbiAgICBwb3NBcnJheVNldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NBcnJheVNldC5sZW5ndGgpXTtcbiAgbGV0IHJhbmRvbUltYWdlVXJscyA9IG5ldyBTZXQoKTtcbiAgbGV0IHJhbmRvbVBvc2l0aW9uU2V0ID0gbmV3IFNldCgpO1xuICBsZXQgZWxlbWVudENvdW50ID0gY3VycmVudExldmVsIDwgNCA/IDggOiBlbGVtZW50Q291bnQgKyA2O1xuICBsZXQgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKHJhbmRvbUltYWdlVXJscy5zaXplIDwgZWxlbWVudENvdW50KSB7XG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1hZ2VVcmxzLmxlbmd0aCk7XG4gICAgcmFuZG9tSW1hZ2VVcmxzLmFkZChpZHgpO1xuICB9XG5cbiAgd2hpbGUgKHJhbmRvbVBvc2l0aW9uU2V0LnNpemUgPCBlbGVtZW50Q291bnQpIHtcbiAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NpdGlvbkFycmF5Lmxlbmd0aCk7XG4gICAgcmFuZG9tUG9zaXRpb25TZXQuYWRkKGlkeCk7XG4gIH1cblxuICBsZXQgaW1nQXJyID0gQXJyYXkuZnJvbShyYW5kb21JbWFnZVVybHMpO1xuICBsZXQgcG9zQXJyID0gQXJyYXkuZnJvbShyYW5kb21Qb3NpdGlvblNldCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWdBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhpbWdBcnJbaV0pO1xuICAgIHJlc3VsdFtpXSA9IG5ldyBQcm9wKFxuICAgICAgMzIsXG4gICAgICAzMixcbiAgICAgIGltYWdlVXJsc1tpbWdBcnJbaV1dLFxuICAgICAgcG9zaXRpb25BcnJheVtwb3NBcnJbaV1dWzBdLFxuICAgICAgcG9zaXRpb25BcnJheVtwb3NBcnJbaV1dWzFdXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9