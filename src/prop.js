export class Prop {
  constructor(width, height, imageUrl, x, y, frameX = 0, frameY = 0) {
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.x = x;
    this.y = y;
    this.frameX = frameX;
    this.frameY = frameY;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.addEventListener("load", () => {
      this.draw();
    });
    this.image.src = imageUrl;
  }

  draw = () => {
    this.ctx.drawImage(
      this.image,
      this.frameX,
      this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * 1.2,
      this.height * 1.2
    );
  };
}
