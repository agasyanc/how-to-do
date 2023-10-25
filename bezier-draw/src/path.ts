import Node from "./node";
import Point from "./point";

export default class Path {
  nodes: Node[] = [];
  constructor(){}
  make_test_path(){
    // add four random nodes
    for (let i = 0; i < 4; i++) {
      const position = new Point(Math.random()*100, Math.random()*100);
      this.nodes.push(new Node(position));
    }
    
  }

  draw(ctx: CanvasRenderingContext2D){
    ctx.beginPath()
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
    for (let node of this.nodes) {
      ctx.lineTo(node.x, node.y);
    }
    ctx.stroke();
    // draw nodes
    for (let node of this.nodes) {
      node.draw(ctx);
    }
  }
}