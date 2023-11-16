import Point from "./point";
import {PointerDown} from "./event_type";
import CanvasEvent from "./canvas_event";


export default class Listener {
  mouseHandler: Function|null = null;
  constructor(canvas: HTMLCanvasElement) {
    
    canvas.addEventListener("pointerdown", (e)=>{
      const x = e.clientX - canvas.offsetLeft;
      const y = e.clientY - canvas.offsetTop;
      let event = new CanvasEvent(new Point(x,y), new PointerDown());

      if (this.mouseHandler) this.mouseHandler(event);
    });
  }
}