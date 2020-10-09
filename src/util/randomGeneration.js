import { Prop } from "../prop";

export function generateRandomProps(currentLevel, imageUrls, posArraySet) {
  let idx = 0;

  let positionArray =
    posArraySet[Math.floor(Math.random() * posArraySet.length)];
  let randomImageUrls = new Set();
  let randomPositionSet = new Set();
  let elementCount = currentLevel < 4 ? 8 : elementCount + 6;
  let result = {};

  while (randomImageUrls.size < elementCount) {
    idx = Math.floor(Math.random() * imageUrls.length);
    randomImageUrls.add(idx);
  }

  while (randomPositionSet.size < elementCount) {
    idx = Math.floor(Math.random() * positionArray.length);
    randomPositionSet.add(idx);
  }

  let imgArr = Array.from(randomImageUrls);
  let posArr = Array.from(randomPositionSet);

  for (let i = 0; i < imgArr.length; i++) {
    result[i] = new Prop(
      32,
      32,
      imageUrls[imgArr[i]],
      250 + positionArray[posArr[i]][0],
      250 + positionArray[posArr[i]][1]
    );
  }

  return result;
}
