import Point from './point';

export default class Node{
  position: Point;
  out_handle: Point;
  in_handle: Point;
  onChange:Function|null = null;
  constructor(position:Point){
    this.position = position.copy();
    this.out_handle = new Point();
    this.in_handle = new Point();
  }
  get x():number { return this.position.x; }
  get y():number { return this.position.y; }

  draw(ctx: CanvasRenderingContext2D){
    ctx.save()
    ctx.fillStyle = "black";
    ctx.fillRect(this.x-1, this.y-1, 2, 2);
    ctx.fillStyle = "red";
    if (!this.out_handle.is_zero())
      ctx.fillRect(this.out_handle.x-1+this.x, this.out_handle.y-1+this.y, 2, 2);
    if (!this.in_handle.is_zero())
      ctx.fillRect(this.in_handle.x-1+this.x, this.in_handle.y-1+this.y, 2, 2);
    ctx.restore()
  }
}