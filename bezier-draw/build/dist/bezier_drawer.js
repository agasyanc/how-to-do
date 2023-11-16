import Drawing from "./drawing.js";
import Listener from "./listener.js";
import {PenTool} from "./tool.js";
export default class BezierDrawer {
  constructor(id = "canvas") {
    const canvas = this._getCanvas(id);
    const context = canvas.getContext("2d");
    const tool = new PenTool();
    const drawing = new Drawing();
    drawing.onChange = () => {
      if (context)
        drawing.draw(context);
    };
    if (context)
      drawing.draw(context);
    const listener = new Listener(canvas);
    listener.mouseHandler = (event) => {
      tool.pointerDown(drawing, event);
    };
  }
  _getCanvas(id) {
    const canvas = document.getElementById(id);
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}
