import { IPosition, IShape } from './types'
import { generateRandomNumber } from './generateRandomNumber'
import { generateRandomRGBAColor }from './generateRandomRGBAColor'
import { Square } from './square'

function generateSquare(position: IPosition, color: string): IShape {
  const size = generateRandomNumber(30, 110)
  const squarePosition = {
    x: position.x - size / 2,
    y: position.y - size / 2,
  }

  return new Square(squarePosition, color, size)
}

function generateRandomShape(position: IPosition): IShape {
  const color = generateRandomRGBAColor()

  return generateSquare(position, color)
}

export { generateRandomShape }