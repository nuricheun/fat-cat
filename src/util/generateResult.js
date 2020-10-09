import { results } from "./data";
import { Prop } from "../prop";

export const generateResult = () => {
  let result = { miss: [], pass: [] };

  results.miss.forEach((e) => {
    result.miss.push(new Prop(0, 0, e, 0, 0));
  });

  results.pass.forEach((e) => {
    result.pass.push(new Prop(0, 0, e, 0, 0));
  });

  return result;
};
