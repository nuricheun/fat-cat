import { gameResultImgUrls } from "./data";
import { Prop } from "../prop";

export const generateResultProps = () => {
  let gameResultProps = {};
  for (let key in gameResultImgUrls) {
    if (!(key in gameResultProps)) {
      gameResultProps[key] = [];
    }
    gameResultImgUrls[key].forEach((e) =>
      gameResultProps[key].push(new Prop(0, 0, e, 0, 0))
    );
  }

  return gameResultProps;
};
