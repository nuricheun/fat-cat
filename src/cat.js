export class Cat {
  constructor(x, y, width, height, imageUrl) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.cat = new Image(width, height);
    this.cat.src = imageUrl;
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}
