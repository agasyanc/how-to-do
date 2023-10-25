export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  copy() {
    return new Point(this.x, this.y);
  }
  is_zero() {
    return this.x == 0 && this.y == 0;
  }
  equals(p) {
    return this.x == p.x && this.y == p.y;
  }
}
