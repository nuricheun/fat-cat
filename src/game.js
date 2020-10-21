import { Board } from "./board";

export class Game {
  level = 1;
  board = new Board();
  done = document.getElementById("game-over");
  win = document.getElementById("win");
  obstacles = new Set();
  round = 1;
  tries = 3;
  currentScore = 0;

  play = () => {
    if (this.tries <= 0) {
      this.board.gameOver();
      this.tries = 3;
      this.done.style.display = "flex";
      return;
    } else if (this.round === 2) {
      this.board.gameOver();

      this.level++;
      this.round = 1;
      this.win.style.display = "flex";
      return;
    }

    this.board
      .initItems(this.round)
      .then((res) =>
        this.board.beforeGameStart(this.round, this.tries, this.level)
      )
      .then((res) =>
        this.board.showObstacle(this.round, this.tries, this.level)
      )
      .then((res) => this.board.animate())
      .then((res) => this.board.roundResult())
      .then((res) => {
        this.tries += res.miss;
        this.round += res.miss + 1;
        this.play();
      });
  };
}
