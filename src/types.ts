interface IPosition {
  x: number,
  y: number,
}

interface IRGBColor {
  red: number,
  green: number,
  blue: number,
}

interface IShape {
  /* Shape's position is a center of the shape */
  position: IPosition,

  color: IRGBColor,
  
  isHovered: boolean,
  isActive: boolean,
  
  getIsMouseOverShape(mousePosition: IPosition): boolean,
  
  /* returns true if clicked on shape */
  onClick(mousePosition: IPosition): boolean,
  onMouseMove(mousePosition: IPosition): void,
  
  draw(canvasContext: CanvasRenderingContext2D): void,
}

export {
  IPosition,
  IRGBColor,
  IShape,
}
