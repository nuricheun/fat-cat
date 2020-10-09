import { Cat } from "./cat";
import { Prop } from "./prop";
import { Canvas } from "./canvas";
import { plantUrls } from "./propImageUrls";
import { foodUrls, positionSetArray } from "./util/data";
import { generateRandomProps } from "./util/randomGeneration";
import { generateObstacle } from "./util/generateObstacle";

export class Board {
  constructor() {
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }
  frameX = 0;
  frameY = 0;
  x = 0;
  y = 0;
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;

  canvas = new Canvas();
  cat = new Prop(
    32,
    32,
    "./image/fatcat.png",
    250,
    250,
    this.frameX,
    this.frameY
  );
  wall = new Prop(32, 32, "./image/fence.png", 0, 0);
  foods = {}; //foods obj
  obstacle = new Set();

  miss = false;

  initItems = (level) => {
    this.foods = generateRandomProps(level, foodUrls, positionSetArray);
    this.obstacle = generateObstacle(level, Object.keys(this.foods));
  };

  drawBoard = () => {
    this.canvas.drawCanvas("yellow");
    // this.canvas.decorateCanvas(this.wall);
    this.canvas.drawProps(this.foods);
  };

  showObstacle = (level, idx) => {
    return new Promise((resolve, reject) => {
      let obs = Array.from(this.obstacle);
      let end = obs.length;

      if (idx === end) {
        resolve("done");
      } else {
        this.canvas.drawCanvas("green");
        this.canvas.drawText(level);

        this.canvas.drawProp(this.foods[obs[idx]], 220, 210).then((res) => {
          if (res === "done") {
            setTimeout(() => {
              this.showObstacle(level, idx + 1);
            }, 1000);
          }
        });
      }
    });
  };

  drawHit() {}

  deleteItem = (life) => {
    let foodX;
    let foodY;

    Object.keys(this.foods).forEach((key) => {
      let food = this.foods[key];
      foodX = food.x;
      foodY = food.y;

      if (
        foodX - 20 <= this.cat.x + 3 &&
        foodX + food.width >= this.cat.x + this.cat.width - 3 &&
        foodY - 20 <= this.cat.y + 3 &&
        foodY + this.eachFood.height >= this.cat.y + this.cat.height - 3
      ) {
        for (let e in this.obstacle) {
          if (food.key === e) {
            this.miss = true;
          }
        }
        delete this.foods[key];
      }
    });
  };

  test = () => {
    this.canvas.clear();
    // this.drawBoard();
    this.cat.x += 2;
    this.cat.draw();

    requestAnimationFrame(this.test);
    // this.canvas.drawProp(this.cat);
    // this.drawBoard();

    // this.deleteItem(3);
    // if (!this.miss) {
    // }
  };

  keyUpHandler = (e) => {
    console.log("hi");
    if (e.keyCode == 39) {
      this.rightPressed = false;
    } else if (e.keyCode == 37) {
      this.leftPressed = false;
    } else if (e.keyCode == 38) {
      this.upPressed = false;
    } else if (e.keyCode == 40) {
      this.downPressed = false;
    }
  };

  keyDownHandler = (e) => {
    if (e.keyCode == 39) {
      this.rightPressed = true;
      if (this.xframeIdx >= 8) {
        this.xframeIdx = 6;
      } else {
        this.xframeIdx += 1;
      }
      this.yframeIdx = 2;
    } else if (e.keyCode == 37) {
      this.leftPressed = true;
      if (this.xframeIdx >= 8) {
        this.xframeIdx = 6;
      } else {
        this.xframeIdx += 1;
      }
      this.yframeIdx = 1;
    } else if (e.keyCode == 38) {
      this.upPressed = true;
      if (this.xframeIdx >= 2) {
        this.xframeIdx = 0;
      } else {
        this.xframeIdx += 1;
      }
      this.yframeIdx = 3;
    } else if (e.keyCode == 40) {
      this.downPressed = true;
      if (this.xframeIdx >= 2) {
        this.xframeIdx = 0;
      } else {
        this.xframeIdx += 1;
      }
      this.yframeIdx = 0;
    }
  };

  positionChange = (prop) => {
    let x = 0;
    let y = 0;

    if (
      this.rightPressed &&
      prop.x < this.canvas.width - prop.width - this.wall.width
    ) {
      x += 3;
    } else if (this.leftPressed && prop.x > this.wall.width) {
      x -= 3;
    } else if (this.upPressed && prop.y > this.wall.width - 9) {
      y -= 3;
    } else if (
      this.downPressed &&
      y < this.canvas.height - prop.width - this.wall.width - 5
    ) {
      y += 3;
    }
    return [x, y];
  };

  isEqualSet = (setOne, setTwo) => {
    if (setOne.size !== setTwo.size) return false;
    for (var a of setOne) if (!setTwo.has(a)) return false;
    return true;
  };
}
