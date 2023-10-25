import Node from "./node.js";
import Point from "./point.js";
export default class Path {
  constructor() {
    this.nodes = [];
  }
  make_test_path() {
    for (let i = 0; i < 4; i++) {
      const position = new Point(Math.random() * 100, Math.random() * 100);
      this.nodes.push(new Node(position));
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
    for (let node of this.nodes) {
      ctx.lineTo(node.x, node.y);
    }
    ctx.stroke();
    for (let node of this.nodes) {
      node.draw(ctx);
    }
  }
}
