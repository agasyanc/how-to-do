import Path from "./path";
import Point from "./point";


export default class Drawing {
  paths: Path[] = [];
  onChange:Function|null = null;
  constructor() {}

  add_path():Path {
    let path = new Path();
    this.paths.push(path);
    path.onChange = () => {
      this.onChange && this.onChange();
    }
    return path;
  }
  
  make_test_drawing(){

    let path = this.add_path();
    path.make_test_path();

  }
  

  draw(ctx:CanvasRenderingContext2D){
    // clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let path of this.paths) {
      path.draw(ctx);
    }
  }
}