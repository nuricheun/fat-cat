export class Prop {
  constructor(width, height, imgUrl, x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.src = imgUrl;
  }
}
