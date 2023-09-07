import Point from "./point.js";
export default class Node {
  #position;
  constructor(x = 0, y = 0) {
    this.#position = new Point(x, y);
  }
}
