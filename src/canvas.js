export class Canvas {
  canvas = document.getElementById("myCanvas");
  ctx = this.canvas.getContext("2d");
  xframeIdx = 0;
  yframeIdx = 0;

  drawProp(prop) {
    prop.image.onload = () => {
      this.ctx.drawImage(
        prop.image,
        this.xframeIdx * prop.width,
        this.yframeIdx * prop.height + 1,
        prop.width,
        prop.height,
        prop.x,
        prop.y,
        prop.width * 1.2,
        prop.height * 1.2
      );
    };
  }

  drawCanvas(color) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  decorateCanvas(prop) {
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
  }

  drawProps(props, deleted) {
    for (let i = 0; i < props.length; i++) {
      let prop = props[i];
      if (deleted.has(prop.key)) continue;
      prop.image.onload = () => {
        this.ctx.drawImage(
          prop.image,
          0,
          0,
          prop.width,
          prop.height,
          this.canvas.width / 2 + prop.x,
          this.canvas.height / 2 + prop.y,
          prop.width * 0.8,
          prop.height * 0.8
        );
      };
    }
  }

  drawText(level) {
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px Helvetica, sans";
    this.ctx.textAlign = "center";
    this.ctx.fillText(`* Level ${level} *`, this.canvas.width / 2, 110);
    this.ctx.fillText(`Do not eat`, this.canvas.width / 2, 150);
  }

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
