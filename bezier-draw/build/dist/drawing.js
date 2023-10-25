import Path from "./path.js";
export default class Drawing {
  constructor() {
    this.paths = [];
  }
  make_test_drawing() {
    let path = this.add_path();
    path.make_test_path();
  }
  add_path() {
    let path = new Path();
    this.paths.push(path);
    return path;
  }
  draw(ctx) {
    for (let path of this.paths) {
      path.draw(ctx);
    }
  }
}
