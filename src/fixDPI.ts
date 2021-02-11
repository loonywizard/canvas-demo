function normalizeComputedStyleValue(string: string): number {
  // "250px" --> 250
  return +string.replace(/px/, '')
} 

function fixDPI(canvas: HTMLCanvasElement): void {
  const dpi = window.devicePixelRatio
  const computedStyles = getComputedStyle(canvas)
  
  const width = normalizeComputedStyleValue(computedStyles.getPropertyValue('width'))
  const height = normalizeComputedStyleValue(computedStyles.getPropertyValue('height'))

  canvas.setAttribute('width', (width * dpi).toString())
  canvas.setAttribute('height', (height * dpi).toString())
}

export { fixDPI }
