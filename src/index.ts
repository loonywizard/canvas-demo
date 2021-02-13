import { IPosition, IShape } from './types'
import { generateRandomShape } from './generateRandomShape'
import { fixDPI } from './fixDPI'

const shapes: IShape[] = []

function init(): void {
  const canvas = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (!canvas) return

  canvas.addEventListener('click', (event: MouseEvent) => {
    const mousePosition: IPosition = { x: event.pageX, y: event.pageY }

    const clickedOnAnyShape = shapes
      .map((shape) => shape.onClick(mousePosition))
      .some((clickedOnShape) => clickedOnShape)
    
    if (!clickedOnAnyShape) shapes.push(generateRandomShape(mousePosition))
  })

  canvas.addEventListener('mousemove', (event: MouseEvent) => {
    const mousePosition: IPosition = { x: event.pageX, y: event.pageY }

    shapes.forEach((shape) => shape.onMouseMove(mousePosition))
  })

  const canvasContext = <CanvasRenderingContext2D>canvas.getContext('2d')

  if (!canvasContext) return

  function loop(): void {
    fixDPI(<HTMLCanvasElement>canvas)

    shapes.forEach((shape) => shape.draw(canvasContext))

    window.requestAnimationFrame(loop)
  }

  loop()
}

window.onload = init
