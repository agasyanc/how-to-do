import Drawing from './drawing';
import Listener from './listener';
import CanvasEvent from './canvas_event';
import { MouseDown } from './event_type';


export default class BezierDrawer{
  constructor(id: string = "canvas") {
    const canvas = this.#getCanvas(id);
    let drawing = new Drawing();
    const listener = new Listener(canvas)
    listener.mouseHandler = (event: CanvasEvent) => {
      if (event.type instanceof MouseDown) {
        drawing.addNodeAtPoint(event.point);
        
      }
    }

    // new CanvasDrawer();
    // new PenTool();
  }

  #getCanvas(id: string): HTMLCanvasElement {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}