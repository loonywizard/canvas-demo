import { IPosition, IShape } from './types'

class Square implements IShape {
  position: IPosition
  size: number
  color: string

  constructor(position: IPosition, color: string, size: number) {
    this.position = position
    this.color = color
    this.size = size
  }

  draw(canvasContext: CanvasRenderingContext2D): void {
    const { position, color, size } = this

    canvasContext.fillStyle = color
    canvasContext.fillRect(position.x, position.y, size, size)
  }
}

export { Square }