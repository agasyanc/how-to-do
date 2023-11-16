import CanvasEvent from "./canvas_event";
import Drawing from "./drawing";

export class Tool{}
export class PenTool extends Tool{
  pointerDown(drawing:Drawing, event:CanvasEvent){
    // find opened path
    let path = drawing.paths.find(p => p.closed == false)
    // if all closed, add new one
    if (!path) path = drawing.add_path();
    path.add_node(event.pointer)
    console.log(path.nodes);
    
  }
}