interface IPosition {
  x: number,
  y: number,
}

interface IShape {
  position: IPosition,
  color: string,
  draw(canvasContext: CanvasRenderingContext2D): void,
}

export {
  IPosition,
  IShape,
}
