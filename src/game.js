import { Board } from "./board";

export class Game {
  constructor(level) {
    this.level = level;
  }
  board = new Board();
  done = document.getElementById("game-over");
  obstacles = new Set();
  round = 1;
  tries = 3;
  currentScore = 0;

  play = () => {
    if (this.tries <= 0) {
      // this.board.drawGameResult(this.tries ? "win" : "lose");
      this.board.gameOver();
      this.done.style.display = "flex";
      return;
    } else if (this.round === 5) {
      this.introPage.win.style.display = "flex";
      return;
    }

    this.board
      .initItems(this.round)
      .then((res) => this.board.beforeGameStart(this.round, this.tries))
      .then((res) => this.board.showObstacle(this.round, this.tries))
      .then((res) => this.board.animate())
      .then((res) => this.board.roundResult())
      .then((res) => {
        this.tries += res.miss;
        this.round += res.miss + 1;
        this.play();
      });
  };
}
