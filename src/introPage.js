export class IntroPage {
  constructor() {
    this.main = document.getElementById("main");
    this.about = document.getElementById("about-page");
    this.gameIntro = document.getElementById("game-intro");
    this.startButton = document.getElementById("start");
    this.aboutButton = document.getElementById("about");
    this.backButton = document.getElementById("back");

    aboutButton.addEventListener("click", this.aboutButtonHandler);

    startButton.addEventListener("click", this.startButtonHandler);

    backButton.addEventListener("click", this.backButtonHandler);
  }

  aboutButtonHandler = () => {
    this.about.style.display = "flex";
    gameIntro.style.display = "none";
  };

  startButtonHandler = () => {
    this.main.style.display = "flex";
    //game start here maybe...
    this.gameIntro.style.display = "none";
    // game(level, life);
  };

  backButtonHandler = () => {
    this.about.style.display = "none";
    this.gameIntro.style.display = "";
  };
}

// main.style.display = "flex";
