import { IPosition, IShape } from './types'
import { generateRandomShape } from './generateRandomShape'
import { fixDPI } from './fixDPI'

const shapes: IShape[] = []

function init(): void {
  const canvas = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (!canvas) return

  canvas.addEventListener('click', (event: MouseEvent) => {
    const position: IPosition = { x: event.pageX, y: event.pageY }
    
    shapes.push(generateRandomShape(position))
  })

  const canvasContext = <CanvasRenderingContext2D>canvas.getContext('2d')

  if (!canvasContext) return

  function loop(): void {
    fixDPI(<HTMLCanvasElement>canvas)

    shapes.map((shape) => shape.draw(canvasContext))

    window.requestAnimationFrame(loop)
  }

  loop()
}

window.onload = init
