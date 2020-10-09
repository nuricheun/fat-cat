import "./css/main.css";

import { Game } from "./game";

window.onload = (e) => {
  const game = new Game();
  game.play();
};
