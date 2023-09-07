import Point from "./point.js";
import {MouseDown} from "./event_type.js";
import CanvasEvent from "./canvas_event.js";
export default class Listener {
  constructor(canvas) {
    this.mouseHandler = null;
    this.#canvas = canvas;
    this.#canvas.addEventListener("mousedown", (e) => {
      const x = e.clientX - this.#canvas.offsetLeft;
      const y = e.clientY - this.#canvas.offsetTop;
      let event = new CanvasEvent(new Point(x, y), new MouseDown());
      if (this.mouseHandler)
        this.mouseHandler(event);
    });
  }
  #canvas;
}
