export class Canvas {
  canvas = document.getElementById("myCanvas");
  ctx = this.canvas.getContext("2d");
  image = new Image();
  constructor() {
    this.image.addEventListener("load", () => {
      ctx.drawImage(this.image, 32, 32);
    });
  }

  // drawProp = (prop, startX = 0, startY = 0) => {
  //   console.log(prop);
  //   return new Promise((resolve, reject) => {
  //     this.image = new Image();
  //     this.image.onload = () => {
  //       this.ctx.drawImage(
  //         image,
  //         prop.width,
  //         prop.height,
  //         prop.width,
  //         prop.height,
  //         startX || prop.x,
  //         startY || prop.y,
  //         prop.width * 1.2,
  //         prop.height * 1.2
  //       );
  //       resolve("done");
  //     };
  //     image.src = prop.src;
  //   });
  // };
  draw = (prop) => {
    this.ctx.drawImage(
      this.image,
      prop.width,
      prop.height,
      prop.width,
      prop.height,
      250,
      250,
      prop.width * 1.2,
      prop.height * 1.2
    );
  };

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

    prop.image.onload = () => {
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
  };

  drawProps = (props) => {
    let i = 0;
    let keys = Object.keys(props);

    while (i < keys.length) {
      let prop = props[keys[i]];
      let image = new Image();
      image.onload = () => {
        this.ctx.drawImage(
          image,
          0,
          0,
          prop.width,
          prop.height,
          this.canvas.width / 2 + prop.x + this.x,
          this.canvas.height / 2 + prop.y,
          prop.width * 0.8,
          prop.height * 0.8
        );
      };
      image.src = "./image/fatcat.png";
      i++;
    }
  };

  drawText = (level) => {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Helvetica, sans";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`* Level ${level} *`, this.canvas.width / 2, 110);
    this.ctx.fillText(`Do not eat`, this.canvas.width / 2, 150);
  };

  // drawPlants(propList) {
  //   // while ((canvas.height - 2 * wall.width) / wall.width >= j) {
  //   let idx = j % propList.length;
  //   ctx.drawImage(
  //     propList[idx].plantImage,
  //     0,
  //     0,
  //     propList[idx].width,
  //     propList[idx].height,
  //     0,
  //     propList[idx].height * j,
  //     propList[idx].width * 0.7,
  //     propList[idx].height
  //   );
  //   ctx.drawImage(
  //     propList[idx].plantImage,
  //     0,
  //     0,
  //     propList[idx].width,
  //     propList[idx].height,
  //     canvas.width - propList[idx].width,
  //     propList[idx].height * j,
  //     propList[idx].width * 0.7,
  //     propList[idx].height
  //   );
  //   j++;
  //   // }
  // }
}
