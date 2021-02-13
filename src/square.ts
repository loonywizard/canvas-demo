import { IPosition, IRGBColor } from './types'
import { generateCanvasFillStyle } from './generateCanvasFillStyle'
import { Shape } from './shape'

class Square extends Shape {
  size: number

  constructor(position: IPosition, color: IRGBColor, size: number) {
    super(position, color)
    
    this.size = size
  }

  getIsMouseOverShape(mousePosition: IPosition): boolean {
    const { position, size } = this

    return (
      (mousePosition.x >= (position.x - size / 2)) && (mousePosition.x <= (position.x + size / 2))
        &&
      (mousePosition.y >= (position.y - size / 2)) && (mousePosition.y <= (position.y + size / 2))
    )
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