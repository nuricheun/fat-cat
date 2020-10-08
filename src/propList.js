import { Prop } from "./prop";

export class PropList {
  constructor(propUrls) {
    this.propList = Object.keys(propUrls).map((key) => {
      const { imageUrl, x, y } = propUrls[key];
      return new Prop(32, 32, imageUrl, x, y);
    });
  }
}
