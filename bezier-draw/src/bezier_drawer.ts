import Drawing from './drawing';
import Listener from './listener';
import CanvasEvent from './canvas_event';
import { MouseDown } from './event_type';


export default class BezierDrawer{
  constructor(id: string = "canvas") {
    const canvas = this.getCanvas(id);
    const context = canvas.getContext("2d");
    let drawing = new Drawing();
    drawing.make_test_drawing();

    if (context) drawing.draw(context);

    const listener = new Listener(canvas)

  }

  getCanvas(id: string): HTMLCanvasElement {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}