import Drawing from './drawing';
import Listener from './listener';
import CanvasEvent from './canvas_event';
import { PointerDown } from './event_type';
import { Tool, PenTool } from './tool';



export default class BezierDrawer{
  constructor(id: string = "canvas") {
    const canvas = this._getCanvas(id);
    const context = canvas.getContext("2d");
    const tool = new PenTool();
    const drawing = new Drawing();
    drawing.onChange = () => {
      if (context) drawing.draw(context);
    }
    
    if (context) drawing.draw(context);

    const listener = new Listener(canvas);
    listener.mouseHandler = (event: CanvasEvent) => {
      tool.pointerDown(drawing, event);
    };
  }

  _getCanvas(id: string): HTMLCanvasElement {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    if (!canvas) {
      throw new Error("Canvas not found");
    }
    return canvas;
  }
}