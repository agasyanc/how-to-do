import Path from "./path";
import Point from "./point";


export default class Drawing {
  paths: Path[] = [];
  constructor() {}
  
  make_test_drawing(){

    let path = this.add_path();
    path.make_test_path();

  }
  add_path() {
    let path = new Path();
    this.paths.push(path);
    return path;
  }

  draw(ctx:CanvasRenderingContext2D){
    for (let path of this.paths) {
      path.draw(ctx);
    }
  }
}