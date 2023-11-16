import Path from "./path.js";
export default class Drawing {
  constructor() {
    this.paths = [];
    this.onChange = null;
  }
  add_path() {
    let path = new Path();
    this.paths.push(path);
    path.onChange = () => {
      this.onChange && this.onChange();
    };
    return path;
  }
  make_test_drawing() {
    let path = this.add_path();
    path.make_test_path();
  }
  draw(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let path of this.paths) {
      path.draw(ctx);
    }
  }
}
