import { Prop } from "../prop";

/**
 *
 * @param {*} currentLevel
 * @param {*} foodKeys
 *
 * randomly choose obstacles out of the keys of chosen food object
 */
export function generateObstacle(currentLevel, foodKeys) {
  let obstacleKeys = new Set();

  while (obstacleKeys.size < currentLevel) {
    let randomKey = Math.floor(Math.random() * foodKeys.length);
    obstacleKeys.add(foodKeys[randomKey]);
  }
  console.log(obstacleKeys);
  return obstacleKeys;
}
