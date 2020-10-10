import { Game } from "./game";

export class IntroPage {
  constructor() {
    this.main = document.getElementById("main");
    this.win = document.getElementById("win");
    this.lose = document.getElementById("lose");
    this.about = document.getElementById("about-page");
    this.gameIntro = document.getElementById("game-intro");
    this.startButton = document.getElementById("start");
    this.aboutButton = document.getElementById("about");
    this.backButton = document.getElementById("back");
    main.style.display = "flex";
    this.gameStart = false;
    this.game;

    this.aboutButton.addEventListener("click", this.aboutButtonHandler);
    this.startButton.addEventListener("click", this.startButtonHandler);
    this.backButton.addEventListener("click", this.backButtonHandler);
  }

  aboutButtonHandler = () => {
    this.about.style.display = "flex";
    this.gameIntro.style.display = "none";
  };

  startButtonHandler = () => {
    this.main.style.display = "flex";
    //game start here maybe...
    this.gameIntro.style.display = "none";
    // game(level, life);
    this.game = new Game();
    this.game.play();
  };

  backButtonHandler = () => {
    this.about.style.display = "none";
    this.gameIntro.style.display = "";
  };
}
