export function generateRandomPosition(currentLevel, imageUrls, posArraySet) {
  let idx = 0;
  let positionArray =
    posArraySet[Math.floor(Math.random() * posArraySet.length)];
  let randomImageUrls = new Set();
  let randomPositionSet = new Set();
  let elementCount = currentLevel < 4 ? 8 : elementCount + 6;
  let randomProps2 = {};
  let randomProps = new Array(elementCount).fill(null).map((e) => {
    return { x: "", y: "", imageUrl: "", key: "" };
  });

  while (randomImageUrls.size < elementCount) {
    idx = Math.floor(Math.random() * imageUrls.length);
    randomImageUrls.add(idx);
  }

  while (randomPositionSet.size < elementCount) {
    idx = Math.floor(Math.random() * positionArray.length);
    randomPositionSet.add(idx);
  }

  Array.from(randomImageUrls).forEach((urlIdx, i) => {
    randomProps[i].imageUrl = imageUrls[urlIdx];
    randomProps[i].key = i;
    randomProps2[i] = {};
    randomProps2[i]["imageUrl"] = imageUrls[urlIdx];
  });

  Array.from(randomPositionSet).forEach((posIdx, i) => {
    randomProps[i].x = positionArray[posIdx][0];
    randomProps[i].y = positionArray[posIdx][1];
    randomProps2[i]["x"] = positionArray[posIdx][0];
    randomProps2[i]["y"] = positionArray[posIdx][1];
  });

  console.log(randomProps2);
  return randomProps;
}

// create food list that cat should not eat
// randomly chosen within the numbers of food keys
export function generateObstacle(currentLevel, foodKeys) {
  let obstacleSet = new Set();
  while (obstacleSet.size < currentLevel) {
    obstacleSet.add(foodKeys[Math.floor(Math.random() * foodKeys.length)].key);
  }

  return obstacleSet;
}
