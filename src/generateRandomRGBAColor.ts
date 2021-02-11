import { generateRandomNumber } from './generateRandomNumber'

function generateRandomRGBAColor(): string {
  const r = generateRandomNumber(0, 255)
  const g = generateRandomNumber(0, 255)
  const b = generateRandomNumber(0, 255)

  return `rgba(${r}, ${g}, ${b}, 0.1)`
}

export { generateRandomRGBAColor }
