interface IPosition {
  x: number,
  y: number,
}

interface IShape {
  /* Shape's position is a center of the shape */
  position: IPosition,
  color: string,
  draw(canvasContext: CanvasRenderingContext2D): void,
}

export {
  IPosition,
  IShape,
}
