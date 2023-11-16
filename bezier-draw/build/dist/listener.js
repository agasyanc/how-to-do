import Point from "./point.js";
import {PointerDown} from "./event_type.js";
import CanvasEvent from "./canvas_event.js";
export default class Listener {
  constructor(canvas) {
    this.mouseHandler = null;
    canvas.addEventListener("pointerdown", (e) => {
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      let event = new CanvasEvent(new Point(x, y), new PointerDown());
      if (this.mouseHandler)
        this.mouseHandler(event);
    });
  }
}
