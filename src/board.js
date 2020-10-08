import { Cat } from "./cat";
import { Prop } from "./prop";
import { PropList } from "./propList";
import { Canvas } from "./canvas";
import { plantUrls } from "./propImageUrls";
import { foodUrls, positionSetArray } from "./data";
import { generateObstacle, generateRandomPosition } from "./util";

export class Board {
  constructor() {
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }
  canvas = new Canvas();
  cat = new Cat(32, 32);
  wall = new Prop(32, 32, "./image/fence.png");
  foods = []; //foods obj
  obstacle; //obstacle key set

  miss = false;
  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;

  initItems(level) {
    let foodArr = generateRandomPosition(level, foodUrls, positionSetArray);
    this.obstacle = generateObstacle(level, foodArr);
    this.foods = new PropList(foodArr).propList;
  }

  drawBoard() {
    this.canvas.drawCanvas();
    this.canvas.decorateCanvas(this.wall);
    this.canvas.drawProps(this.foods);
  }

  showObstacle() {
    this.canvas.drawCanvas();
    this.canvas.drawText(this.level);
    new Promise((resolve, reject) => {
      let i = 0;
      let clear = setInterval(() => {
        this.canvas.drawProp();
        if (i === 3) {
          clearInterval(clear);
          resolve();
        }
        i++;
      });
    });
    // ctx.drawImage(
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

  displayObstacle(level) {
    this.drawBackground();
    this.drawText(level);
    this.drawProp();
  }

  drawHit() {}

  deleteItem(life) {
    let foodX;
    let foodY;

    this.foods.forEach((food) => {
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
        this.deleted.add(food.key);
      }
    });
  }

  move(prop) {
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
    prop.move(x, y);
  }

  isEqualSet(setOne, setTwo) {
    if (setOne.size !== setTwo.size) return false;
    for (var a of setOne) if (!setTwo.has(a)) return false;
    return true;
  }

  keyUpHandler = (e) => {
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
  };

  keyDownHandler = (e) => {
    console.log("hey");
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

  animateCat() {
    return new Promise(function (resolve, reject) {
      const drawCat = setInterval(function () {
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
}
