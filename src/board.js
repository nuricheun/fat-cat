import { Prop } from "./prop";
import { Canvas } from "./canvas";
import { foodUrls } from "./util/data";
import { generateRandomProps } from "./util/randomGeneration";
import { generateObstacle } from "./util/generateObstacle";
import { generateResultProps } from "./util/generateResult";

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
  spacePressed = false;

  cat;
  background = new Prop(0, 0, "./image/cat/pantry.png", 0, 0);

  resultCat = generateResultProps();
  foods = {};
  obstacle = new Set();

  miss = false;
  pass = false;

  initItems = (round) => {
    return new Promise((resolve, reject) => {
      this.miss = false;
      this.pass = false;
      this.cat = new Prop(
        32,
        32,
        "./image/fatcat.png",
        63,
        335,
        this.frameX,
        this.frameY
      );
      this.foods = generateRandomProps(round, foodUrls);
      this.obstacle = generateObstacle(round + 2, Object.keys(this.foods));

      resolve(1);
    });
  };

  drawBoard = () => {
    this.canvas.drawProps(this.foods);
  };

  gameOver = () => {
    this.canvas.clear();
  };

  beforeGameStart = (round, tries, level) => {
    return new Promise((resolve, reject) => {
      let start = Date.now();
      const backgroundLoop = () => {
        this.canvas.drawCanvas("green");
        this.canvas.drawText(round);
        this.canvas.drawLeftTriesText(tries);
        this.canvas.drawCurrentLevel(level);

        if (Date.now() - start < 1200) {
          requestAnimationFrame(backgroundLoop);
        } else {
          resolve();
        }
      };
      backgroundLoop();
    });
  };

  showObstacle = (round, tries, level) => {
    return new Promise((resolve, reject) => {
      let idx = 0;
      let keys = Array.from(this.obstacle);
      let end = keys.length;
      let start = Date.now();
      const obstacleLoop = () => {
        this.canvas.clear();
        this.canvas.drawCanvas("green");
        this.canvas.drawText(round);
        this.canvas.drawLeftTriesText(tries);
        this.canvas.drawCurrentLevel(level);
        this.foods[keys[idx]].drawObs();

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
  };

  roundResult = () => {
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
        if (Date.now() - start < 1500) {
          requestAnimationFrame(loop);
        } else {
          resolve({ miss: render === "miss" ? -1 : 0 });
        }
      };
      loop();
    });
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
        foodY + food.height >= this.cat.y + this.cat.height - 3 &&
        this.spacePressed
      ) {
        if (this.obstacle.has(key)) {
          delete this.foods[key];
          this.obstacle.delete(key);
          this.spacePressed = false;
        } else {
          this.miss = true;
        }
      }
    }
  };

  animate = () => {
    return new Promise((resolve, reject) => {
      const animateLoop = () => {
        this.canvas.clear();
        this.background.draw();
        this.drawBoard();
        this.positionChange(this.cat);
        this.spritePositionUpdate();
        this.deleteItem();
        this.isEqual(this.obstacle);
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
    if (e.keyCode === 39) {
      this.rightPressed = false;
    } else if (e.keyCode === 37) {
      this.leftPressed = false;
    } else if (e.keyCode === 38) {
      this.upPressed = false;
    } else if (e.keyCode === 40) {
      this.downPressed = false;
    } else if (e.keyCode === 32) {
      this.spacePressed = false;
    }
  };

  keyDownHandler = (e) => {
    let y = 0;
    if (e.keyCode === 39) {
      this.rightPressed = true;
    } else if (e.keyCode === 37) {
      this.leftPressed = true;
    } else if (e.keyCode === 38) {
      this.upPressed = true;
      y -= 74;
    } else if (e.keyCode === 40) {
      this.downPressed = true;

      y += 74;
    } else if (e.keyCode === 32) {
      this.spacePressed = true;
    }

    this.cat.move(0, y);
  };

  positionChange = (prop) => {
    let x = 0;
    // let y = 0;

    if (this.rightPressed && prop.x < this.canvas.width - prop.width) {
      x += 3;
    } else if (this.leftPressed && prop.x > 0) {
      x -= 3;
    }
    // else if (this.upPressed && prop.y > this.wall.width - 9) {
    //   y -= 3;
    // } else if (
    //   this.downPressed &&
    //   y < this.canvas.height - prop.width - this.wall.width - 5
    // ) {
    //   y += 3;
    // }

    prop.move(x, 0);
  };

  spritePositionUpdate = () => {
    if (this.rightPressed) {
      if (this.frameX >= 8) {
        this.frameX = 6;
      } else {
        this.frameX += 1;
      }
    } else if (this.leftPressed) {
      if (this.frameX >= 8) {
        this.frameX = 6;
      } else {
        this.frameX += 1;
      }
    } else if (this.upPressed) {
      if (this.frameX >= 2) {
        this.frameX = 0;
      } else {
        this.frameX += 1;
      }
    } else if (this.downPressed) {
      if (this.frameX >= 2) {
        this.frameX = 0;
      } else {
        this.frameX += 1;
      }
    }
    this.cat.changeFrame(this.frameX, 0);
  };

  isEqual = (obstacleSet) => {
    if (obstacleSet.size === 0) {
      this.pass = true;
    }
  };
}
