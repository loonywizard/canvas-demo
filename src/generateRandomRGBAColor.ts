import { generateRandomNumber } from './generateRandomNumber'

function generateRandomRGBAColor(): string {
  const r = generateRandomNumber(0, 255)
  const g = generateRandomNumber(0, 255)
  const b = generateRandomNumber(0, 255)
  const a = generateRandomNumber(1, 4) / 10

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export { generateRandomRGBAColor }
