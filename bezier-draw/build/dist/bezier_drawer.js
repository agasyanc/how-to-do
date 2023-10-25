import Drawing from "./drawing.js";
import Listener from "./listener.js";
export default class BezierDrawer {
  constructor(id = "canvas") {
    const canvas = this.getCanvas(id);
    const context = canvas.getContext("2d");
    let drawing = new Drawing();
    drawing.make_test_drawing();
    if (context)
      drawing.draw(context);
    const listener = new Listener(canvas);
  }
  getCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}
