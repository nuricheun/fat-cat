import { Game } from "./game";
import { IntroPage } from "./introPage";

window.onload = (e) => {
  const introPage = new IntroPage();
  const game = new Game();

  game.play();
};
