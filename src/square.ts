import { IPosition, IRGBColor, IShape } from './types'
import { generateCanvasFillStyle } from './generateCanvasFillStyle'

class Square implements IShape {
  position: IPosition
  size: number
  color: IRGBColor

  isHovered: boolean
  isActive: boolean

  constructor(position: IPosition, color: IRGBColor, size: number) {
    this.position = position
    this.color = color
    this.size = size

    this.isHovered = false
    this.isActive = false
  }

  getIsMouseOverShape(mousePosition: IPosition): boolean {
    const { position, size } = this

    return (
      (mousePosition.x >= (position.x - size / 2)) && (mousePosition.x <= (position.x + size / 2))
        &&
      (mousePosition.y >= (position.y - size / 2)) && (mousePosition.y <= (position.y + size / 2))
    )
  }

  onMouseMove(mousePosition: IPosition): void {
    this.isHovered = this.getIsMouseOverShape(mousePosition)
  }

  onClick(mousePosition: IPosition): boolean {
    const isMouseOverShape = this.getIsMouseOverShape(mousePosition)

    if (isMouseOverShape) {
      this.isActive = !this.isActive
    }

    return isMouseOverShape
  }

  draw(canvasContext: CanvasRenderingContext2D): void {
    const { position, color, size, isHovered, isActive } = this
    const dpi = window.devicePixelRatio

    canvasContext.fillStyle = generateCanvasFillStyle(color, isHovered, isActive)
    canvasContext.fillRect(
      (position.x - size / 2) * dpi, (position.y - size / 2) * dpi, size * dpi, size * dpi
    )
  }
}

export { Square }