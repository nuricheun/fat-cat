import { Board } from "./board";

export class Game {
  board = new Board();
  obstacles = new Set();

  lifeLeft = 3;
  currentLevel = 1;
  currentScore = 0;
  level = 1;
  win = false;
  lose = false;
  miss = false;
  pass = false;

  execute() {
    // if (this.life > 0) {
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

  preview() {}

  play() {
    if (this.lifeLeft > 0) {
      this.board.initItems(this.level);
      this.board.showObstacle().then(() => {
        this.board.drawBoard();
      });

      // this.execute();
    }
    console.log("you lose!!");
  }
}
