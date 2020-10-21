import { Game } from "./game";

export class IntroPage {
  constructor() {
    this.game = null;

    this.main = document.getElementById("main");
    this.about = document.getElementById("about-page");
    this.gameover = document.getElementById("game-over");
    this.win = document.getElementById("win");

    this.gameIntro = document.getElementById("game-intro");
    this.startButton = document.getElementById("start");
    this.aboutButton = document.getElementById("about");
    this.backButton = document.getElementById("back");
    this.backToMainButton = document.getElementById("back-to-main");
    this.nextLevelButton = document.getElementById("next-level");

    main.style.display = "flex";
    this.gameStart = false;
    this.gameover.style.backgroundImage = "url('./image/cat/lose.png')";
    this.win.style.backgroundImage = "url('./image/cat/winner.png')";

    this.aboutButton.addEventListener("click", this.aboutButtonHandler);
    this.startButton.addEventListener("click", this.startButtonHandler);
    this.backButton.addEventListener("click", this.backButtonHandler);
    this.backToMainButton.addEventListener(
      "click",
      this.backToMainButtonHandler
    );
    this.nextLevelButton.addEventListener("click", this.nextButtonHandler);
  }

  aboutButtonHandler = () => {
    this.about.style.display = "flex";
    this.gameIntro.style.display = "none";
  };

  startButtonHandler = () => {
    this.main.style.display = "flex";
    this.gameIntro.style.display = "none";
    this.game = new Game();
    this.game.play();
  };

  backButtonHandler = () => {
    this.about.style.display = "none";
    this.gameIntro.style.display = "";
  };

  backToMainButtonHandler = () => {
    this.gameIntro.style.display = "flex";
    this.gameover.style.display = "none";
  };

  nextButtonHandler = () => {
    this.main.style.display = "flex";

    this.win.style.display = "none";
    this.game.play();
  };
}
