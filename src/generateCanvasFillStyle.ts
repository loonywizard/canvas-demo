import { IRGBColor } from './types'

function getAlphaForRGBAColor(isHovered: boolean, isActive: boolean) {
  if (isActive) return 0.8
  if (isHovered) return 0.6
  
  return 0.2
}

function generateCanvasFillStyle(color: IRGBColor, isHovered: boolean, isActive: boolean): string {
  const { red, green, blue } = color
  
  return `rgba(${red}, ${green}, ${blue}, ${getAlphaForRGBAColor(isHovered, isActive)})`
}

export { generateCanvasFillStyle }
