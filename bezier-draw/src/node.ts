import Point from './point';

export default class Node{
  #position: Point;
  constructor(x: number = 0, y: number = 0){
    this.#position = new Point(x, y);
  }
}