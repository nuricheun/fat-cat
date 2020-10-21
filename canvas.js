export class Canvas {
  canvas = document.getElementById("myCanvas");
  ctx = this.canvas.getContext("2d");
  width = this.canvas.width;
  height = this.canvas.height;

  drawCanvas = (color) => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  clear = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  decorateCanvas = (prop) => {
    let i = 0;

    while (i < 10) {
      this.ctx.drawImage(
        prop.image,
        0,
        0,
        prop.width,
        prop.height,
        i * prop.height,
        0,
        prop.width,
        prop.height
      );
      this.ctx.drawImage(
        prop.image,
        0,
        0,
        prop.width,
        prop.height,
        i * prop.width,
        this.canvas.height - prop.height,
        prop.width,
        prop.height
      );
      i++;
    }
  };

  drawProps = (props) => {
    let i = 0;

    let keys = Object.keys(props);
    while (i < keys.length) {
      let prop = props[keys[i]];
      prop.draw();
      i++;
    }
  };

  drawText = (level, color = "#fff") => {
    this.ctx.fillStyle = color;
    this.ctx.font = "30px Lalezar";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`Round ${level}`, this.canvas.width / 2, 110);
    this.ctx.fillText(`YOU CAN EAT`, this.canvas.width / 2, 150);
  };

  drawLeftTriesText = (tries, color = "#fff") => {
    this.ctx.fillStyle = color;
    this.ctx.font = "28px Lalezar";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`LIFE ${tries}`, this.canvas.width / 2 + 120, 50);
  };

  drawCurrentLevel = (level, color = "#fff") => {
    this.ctx.fillStyle = color;
    this.ctx.font = "28px Lalezar";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`LEVEL ${level}`, this.canvas.width / 2 - 120, 50);
  };

  drawMissText = (missLeft, color = "#fff") => {
    this.ctx.fillStyle = color;
    this.ctx.font = "30px Lalezar";
    this.ctx.textAlign = "center";

    this.ctx.fillText("Oops", this.canvas.width / 2, 110);
    this.ctx.fillText(`* ${missLeft} Left*`, this.canvas.width / 2, 110);
    this.ctx.fillText(`YOU CAN EAT`, this.canvas.width / 2, 150);
  };
}
