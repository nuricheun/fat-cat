/**
 *
 * @param {*} currentLevel
 * @param {*} foodKeys
 *
 * randomly choose obstacles out of the keys of chosen food object
 */
export function generateObstacle(currentLevel, foodKeys) {
  let obstacleSet = new Set();
  while (obstacleSet.size < currentLevel) {
    obstacleSet.add(foodKeys[Math.floor(Math.random() * foodKeys.length)]);
  }
  
  console.log(obstacleSet);
  return obstacleSet;
}
