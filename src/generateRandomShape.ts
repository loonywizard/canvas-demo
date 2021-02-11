import { IPosition, IShape } from './types'
import { generateRandomNumber } from './generateRandomNumber'
import { generateRandomRGBAColor }from './generateRandomRGBAColor'
import { Square } from './square'
import { Circle } from './circle'

function generateSquare(position: IPosition, color: string): IShape {
  const size = generateRandomNumber(30, 110)

  return new Square(position, color, size)
}

function generateCircle(position: IPosition, color: string): IShape {
  const radius = generateRandomNumber(15, 70)

  return new Circle(position, color, radius)
}

function generateRandomShape(position: IPosition): IShape {
  const shapeColor = generateRandomRGBAColor()

  const randomNumber = generateRandomNumber(1, 2)

  switch (randomNumber) {
    case 1:
      return generateSquare(position, shapeColor)
    case 2:
    default:
      return generateCircle(position, shapeColor)
  }
}

export { generateRandomShape }