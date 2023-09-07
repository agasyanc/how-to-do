import Point from "./point";
import {MouseDown} from "./event_type";
import CanvasEvent from "./canvas_event";


export default class Listener {
  #canvas: HTMLCanvasElement
  mouseHandler: Function|null = null;
  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    
    this.#canvas.addEventListener("mousedown", (e)=>{
      const x = e.clientX - this.#canvas.offsetLeft;
      const y = e.clientY - this.#canvas.offsetTop;
      let event = new CanvasEvent(new Point(x,y), new MouseDown());

      if (this.mouseHandler) this.mouseHandler(event);
    });
  }

}