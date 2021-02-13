import { IPosition, IRGBColor } from './types'

abstract class Shape {
  /* Shape's position is a center of the shape */
  position: IPosition
  color: IRGBColor

  isHovered: boolean
  isActive: boolean

  constructor(position: IPosition, color: IRGBColor) {
    this.position = position
    this.color = color

    this.isHovered = false
    this.isActive = false
  }

  abstract getIsMouseOverShape(mousePosition: IPosition): boolean

  abstract draw(canvasContext: CanvasRenderingContext2D): void

  onMouseMove(mousePosition: IPosition): boolean {
    const isMouseOverShape = this.getIsMouseOverShape(mousePosition)

    this.isHovered = isMouseOverShape

    return isMouseOverShape
  }

  onClick(mousePosition: IPosition): boolean {
    const isMouseOverShape = this.getIsMouseOverShape(mousePosition)

    if (isMouseOverShape) {
      this.isActive = !this.isActive
    }

    return isMouseOverShape
  }
}

export { Shape }
