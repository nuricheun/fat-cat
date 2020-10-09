import { results } from "./data";
import { Prop } from "../prop";

export const generateResult = () => {
  let result = {};
  for (let key in results) {
    if (!(key in result)) {
      result[key] = [];
    }
    results[key].forEach((e) => result[key].push(new Prop(0, 0, e, 0, 0)));
  }

  return result;
};
