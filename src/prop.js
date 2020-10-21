export class Prop {
  constructor(width, height, imageUrl, x, y, frameX = 0, frameY = 0) {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.frameX = frameX;
    this.frameY = frameY;

    this.image = new Image();
    this.image.addEventListener("load", () => {
      let naturalWidth = this.image.naturalWidth;
      let naturalHeight = this.image.naturalHeight;
      this.width = width > 0 ? width : naturalWidth;
      this.height = height > 0 ? height : naturalHeight;

      this.draw();
      this.drawObs();
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
      this.width > this.canvas.width ? this.canvas.width : this.width,
      this.height > this.canvas.height ? this.canvas.height : this.height
    );
  };

  drawObs = () => {
    this.ctx.drawImage(
      this.image,
      this.frameX,
      this.frameY,
      this.width,
      this.height,
      this.canvas.width / 2 - 20,
      this.canvas.height / 2,
      this.width * 1.2,
      this.height * 1.2
    );
  };

  move = (x, y) => {
    this.x += x;
    this.y += y;
  };

  changeFrame = (x, y) => {
    this.frameX = x * this.width;
    this.frameY = y * this.height;
  };
}
