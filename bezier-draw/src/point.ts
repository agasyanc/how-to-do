export default class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0){
    this.x = x;
    this.y = y;
  }
  copy():Point{
    return new Point(this.x, this.y);
  }
  is_zero():boolean{
    return this.x == 0 && this.y == 0;
  }
  equals(p:Point):boolean{
    return this.x == p.x && this.y == p.y;
  }
}