import { IPosition, IRGBColor, IShape } from './types'
import { generateCanvasFillStyle } from './generateCanvasFillStyle'

class Circle implements IShape {
  position: IPosition
  radius: number
  color: IRGBColor

  isHovered: boolean
  isActive: boolean

  constructor(position: IPosition, color: IRGBColor, radius: number) {
    this.position = position
    this.color = color
    this.radius = radius
  
    this.isHovered = false
    this.isActive = false
  }

  getIsMouseOverShape(mousePosition: IPosition): boolean {
    const { position, radius } = this

    return (
      (position.x - mousePosition.x) ** 2 + (position.y - mousePosition.y) ** 2 <= radius ** 2
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
    const { position, color, radius, isHovered, isActive } = this
    const dpi = window.devicePixelRatio

    canvasContext.fillStyle = generateCanvasFillStyle(color, isHovered, isActive)
    
    canvasContext.beginPath()
    canvasContext.arc(
      position.x * dpi, position.y * dpi, radius * dpi, 0, 2 * Math.PI, true
    )
    canvasContext.fill()
  }
}

export { Circle }
