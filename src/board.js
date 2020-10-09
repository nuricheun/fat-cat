import { Prop } from "./prop";
import { Canvas } from "./canvas";
import { plantUrls } from "./propImageUrls";
import { foodUrls, positionSetArray } from "./util/data";
import { generateRandomProps } from "./util/randomGeneration";
import { generateObstacle } from "./util/generateObstacle";
import { generateResult } from "./util/generateResult";

export class Board {
  constructor() {
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }
  canvas = new Canvas();

  frameX = 0;
  frameY = 0;

  rightPressed = false;
  leftPressed = false;
  upPressed = false;
  downPressed = false;

  cat;
  wall = new Prop(32, 32, "./image/fence.png", 0, 0);

  resultCat = generateResult();
  foods = {}; //foods obj
  obstacle = new Set();

  miss = false;
  pass = false;

  initItems = (level) => {
    return new Promise((resolve, reject) => {
      this.miss = false;
      this.pass = false;
      this.cat = new Prop(
        32,
        32,
        "./image/fatcat.png",
        this.canvas.width / 2,
        this.canvas.width / 2,
        this.frameX,
        this.frameY
      );
      this.foods = generateRandomProps(level, foodUrls, positionSetArray);
      this.obstacle = generateObstacle(level, Object.keys(this.foods));

      resolve(1);
    });
  };

  drawBoard = () => {
    this.canvas.drawCanvas("yellow");
    // this.canvas.decorateCanvas(this.wall);
    this.canvas.drawProps(this.foods);
  };

  showObstacle = (level) => {
    return new Promise((resolve, reject) => {
      let idx = 0;
      let keys = Array.from(this.obstacle);
      let end = keys.length;
      let start = Date.now();
      const obstacleLoop = () => {
        // console.log(idx);
        this.canvas.drawCanvas("green");
        this.canvas.drawText(level);
        this.foods[keys[idx]].drawObs();

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
  };

  gameResult = () => {
    return new Promise((resolve, reject) => {
      let render;

      if (this.miss) {
        render = "miss";
      } else {
        render = "pass";
      }
      let start = Date.now();
      const loop = () => {
        this.canvas.clear();
        this.canvas.drawCanvas("white");
        this.canvas.drawMissText(this.miss);

        this.resultCat[render][0].draw();
        if (Date.now() - start < 3000) {
          requestAnimationFrame(loop);
        } else {
          resolve({ miss: render === "miss" ? -1 : 0 });
        }
      };
      loop();
    });
  };

  drawLose = () => {
    this.canvas.clear();
    this.canvas.drawCanvas("white");
    this.canvas.drawMissText(this.miss);
    this.resultCat.miss[2].draw();
  };

  drawWin = () => {
    this.canvas.clear();
    this.canvas.drawCanvas("white");
    this.canvas.drawMissText(this.miss);
    this.resultCat.miss[2].draw();
  };

  deleteItem = () => {
    let foodX;
    let foodY;

    for (let key in this.foods) {
      let food = this.foods[key];
      foodX = food.x;
      foodY = food.y;
      if (
        foodX - 20 <= this.cat.x + 3 &&
        foodX + food.width >= this.cat.x + this.cat.width - 3 &&
        foodY - 20 <= this.cat.y + 3 &&
        foodY + food.height >= this.cat.y + this.cat.height - 3
      ) {
        if (this.obstacle.has(key)) {
          this.miss = true;
        }
        delete this.foods[key];
      }
    }
  };

  animate = () => {
    return new Promise((resolve, reject) => {
      const animateLoop = () => {
        this.canvas.clear();
        this.drawBoard();
        this.positionChange(this.cat);
        this.deleteItem(3);
        this.isEqual(this.foods, this.obstacle);
        this.cat.draw();
        if (!this.miss && !this.pass) {
          requestAnimationFrame(animateLoop);
        } else {
          resolve("3");
        }
      };
      animateLoop();
    });
  };

  keyUpHandler = (e) => {
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
      if (this.frameX >= 8) {
        this.frameX = 6;
      } else {
        this.frameX += 1;
      }
      this.frameY = 2;
    } else if (e.keyCode == 37) {
      this.leftPressed = true;
      if (this.frameX >= 8) {
        this.frameX = 6;
      } else {
        this.frameX += 1;
      }
      this.frameY = 1;
    } else if (e.keyCode == 38) {
      this.upPressed = true;
      if (this.frameX >= 2) {
        this.frameX = 0;
      } else {
        this.frameX += 1;
      }
      this.frameY = 3;
    } else if (e.keyCode == 40) {
      this.downPressed = true;
      if (this.frameX >= 2) {
        this.frameX = 0;
      } else {
        this.frameX += 1;
      }
      this.frameY = 0;
    }
    this.cat.changeFrame(this.frameX, this.frameY);
  };

  positionChange = (prop) => {
    let x = 0;
    let y = 0;
    if (
      this.rightPressed &&
      prop.x < this.canvas.width - prop.width - this.wall.width
    ) {
      x += 2;
    } else if (this.leftPressed && prop.x > this.wall.width) {
      x -= 2;
    } else if (this.upPressed && prop.y > this.wall.width - 9) {
      y -= 2;
    } else if (
      this.downPressed &&
      y < this.canvas.height - prop.width - this.wall.width - 5
    ) {
      y += 2;
    }
    prop.move(x, y);
  };

  isEqual = (obj, set) => {
    if (Object.keys(obj).length !== set.size) return;
    for (var a in obj) if (!set.has(a)) return;
    this.pass = true;
  };
}
