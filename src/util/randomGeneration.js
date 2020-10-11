import { Prop } from "../prop";

const positionArrGenerator = (
  firstX = 63,
  firstY = 45,
  height = 72,
  width = 46,
  pantryLevel = 5
) => {
  let result = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
      if ((i === 4 && j === 0) || (i === 4 && j === 1)) continue;
      result.push([firstX + width * j, firstY + height * i]);
    }
  }

  return result;
};

export function generateRandomProps(currentLevel, imageUrls) {
  const positionArray = positionArrGenerator();
  let idx = 0;

  let randomImageUrls = new Set();
  let randomPositionSet = new Set();
  let elementCount = currentLevel + 12;
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
      positionArray[posArr[i]][0],
      positionArray[posArr[i]][1]
    );
  }

  return result;
}
