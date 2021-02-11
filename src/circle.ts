import { IPosition, IShape } from './types'

class Circle implements IShape {
  position: IPosition
  radius: number
  color: string

  constructor(position: IPosition, color: string, radius: number) {
    this.position = position
    this.color = color
    this.radius = radius
  }

  draw(canvasContext: CanvasRenderingContext2D): void {
    const { position, color, radius } = this
    const dpi = window.devicePixelRatio

    canvasContext.fillStyle = color
    
    canvasContext.beginPath()
    canvasContext.arc(
      position.x * dpi, position.y * dpi, radius * dpi, 0, 2 * Math.PI, true
    )
    canvasContext.fill()
  }
}

export { Circle }
