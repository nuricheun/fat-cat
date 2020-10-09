export class Cat {
  constructor(x, y, width, height, imageUrl) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.addEventListener("load", () => {
      this.draw();
    });
    this.image.src = imageUrl;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
  }

  move = (x, y) => {
    this.x += x;
    this.y += y;
  };

  draw = () => {
    this.ctx.drawImage(
      this.image,
      this.width,
      this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * 1.2,
      this.height * 1.2
    );
  };
}
