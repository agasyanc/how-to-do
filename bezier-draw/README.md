# How to draw a curve on an HTML Canvas
<!-- [In Russian](bezier-draw/README.md) -->

In a world where all vector editors have already been created, it is almost impossible to find information about how these editors work. It's a little sad, but don't worry — now we'll figure out how to draw and edit the curve.

## Model first

Let's figure out how to store information about the curve. The curve in vector editors combines segments of lines and Bezier curves. 

The simplest data type is the `Point` vector. The vector stores information about the coordinates `x` and `y` and methods of transformation of such vectors — addition, subtraction, multiplication, calculation of length, angle, etc.

[./src/point.ts](./src/point.ts)
```typescript
class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0){
    this.x = x;
    this.y = y;
  }
  copy():Point{}
  add(point:Point){
    ...
  }
  ...
}
```
The vector itself is not part of the model. But it will be useful to use it in other places.

The curve elements themselves can be described in different ways. For example, in the Illustrator, each node contains two guides, and in Glyphs, both the node and the guides are the same type.

The first and second methods have their pros and cons. When the guides are node properties, it is easier to draw and edit such a curve. The second method makes it easier to draw on Canvas by easy division into segments, and in some cases it is easier to edit.

Let's try to implement the Illustrator's method.

The model consists of several nested sets. At the top level there will be Drawing, it will be an element, like a layer in an Illustrator. Its task is to contain a set of Path paths. Each path contains a set of Nodes. Each node contains information about its location and the location of its guides.

[./src/drawing.ts](./src/drawing.ts)
[./src/path.ts](./src/path.ts)
[./src/node.ts](./src/node.ts)

```ts
class Drawing{
	paths: Path[] = [];
  constructor() {}
  ...
}

class Path{
	nodes: Node[] = [];
  constructor(){}
  ...
}

class Node{
  position: Point;
  out_handle: Point;
  in_handle: Point;
  constructor(position:Point){
    this.position = position.copy();
    this.out_handle = new Point();
    this.in_handle = new Point();
  }
  get x():number { return this.position.x; }
  get y():number { return this.position.y; }
  ...
}

```
Note that `Node` does not take two coordinates in the construction, but an object of the Point class at once. And the guides have relative coordinates.

To be continued…
