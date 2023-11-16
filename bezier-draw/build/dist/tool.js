export class Tool {
}
export class PenTool extends Tool {
  pointerDown(drawing, event) {
    let path = drawing.paths.find((p) => p.closed == false);
    if (!path)
      path = drawing.add_path();
    path.add_node(event.pointer);
    console.log(path.nodes);
  }
}
