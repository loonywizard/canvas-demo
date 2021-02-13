import { IPosition, IRGBColor } from './types'
import { generateCanvasFillStyle } from './generateCanvasFillStyle'
import { Shape } from './shape'

class Circle extends Shape {
  radius: number

  constructor(position: IPosition, color: IRGBColor, radius: number) {
    super(position, color)
    
    this.radius = radius
  }

  getIsMouseOverShape(mousePosition: IPosition): boolean {
    const { position, radius } = this

    return (
      (position.x - mousePosition.x) ** 2 + (position.y - mousePosition.y) ** 2 <= radius ** 2
    )
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
