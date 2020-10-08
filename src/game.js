import { Board } from "./board";
import { IntroPage } from "./introPage";

export class Game {
  introPage = new IntroPage();
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

  play = () => {
    if (this.lifeLeft > 0) {
      this.board.initItems(3);
      // this.board.showObstacle(this.level, 0).then((res) => console.log(res));
      // this.board.drawBoard();
      this.board.test();
    }
  };
}
