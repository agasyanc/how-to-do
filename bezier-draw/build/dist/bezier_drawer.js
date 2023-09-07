import Drawing from "./drawing.js";
import Listener from "./listener.js";
import {MouseDown} from "./event_type.js";
export default class BezierDrawer {
  constructor(id = "canvas") {
    const canvas = this.#getCanvas(id);
    let drawing = new Drawing();
    const listener = new Listener(canvas);
    listener.mouseHandler = (event) => {
      if (event.type instanceof MouseDown) {
        drawing.addNodeAtPoint(event.point);
      }
    };
  }
  #getCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}
