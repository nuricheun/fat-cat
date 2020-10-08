import { Prop } from "./prop";

export class PropList {
  constructor(propUrls) {
    this.propList = propUrls.map(
      ({ imageUrl, x, y }) => new Prop(32, 32, imageUrl, x, y)
    );
  }
}
