import { IPosition, IRGBColor } from './types'
import { generateRandomNumber } from './generateRandomNumber'
import { generateRandomRGBColor }from './generateRandomRGBColor'
import { Shape } from './shape'
import { Square } from './square'
import { Circle } from './circle'

function generateSquare(position: IPosition, color: IRGBColor): Square {
  const size = generateRandomNumber(30, 110)

  return new Square(position, color, size)
}

function generateCircle(position: IPosition, color: IRGBColor): Circle {
  const radius = generateRandomNumber(15, 70)

  return new Circle(position, color, radius)
}

function generateRandomShape(position: IPosition): Shape {
  const shapeColor = generateRandomRGBColor()

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