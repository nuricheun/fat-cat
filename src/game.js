import { Board } from "./board";
// import { IntroPage } from "./introPage";

export class Game {
  // introPage = new IntroPage();
  board = new Board();
  obstacles = new Set();

  tries = 3;
  currentScore = 0;
  level = 1;

  play = () => {
    if (this.tries <= 0) {
      this.board.drawGameResult(this.tries ? "win" : "lose");
      return;
    } else if (this.level === 4) {
      return;
    }

    this.board
      .initItems(this.level)
      .then((res) => this.board.beforeGameStart(this.level))
      .then((res) => this.board.showObstacle(this.level))
      .then((res) => this.board.animate())
      .then((res) => this.board.roundResult())
      .then((res) => {
        this.tries += res.miss;
        this.level += res.miss + 1;
        this.play();
      });
  };
}
