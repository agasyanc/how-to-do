import Point from './point';
import {EventType} from './event_type';

export default class CanvasEvent {
  pointer: Point;
  type: EventType;
  constructor(pointer:Point, type:EventType) {
    this.pointer = pointer;
    this.type = type;
  }
}