import { IPosition } from './types'
import { generateRandomShape } from './generateRandomShape'
import { Shape } from './shape'
import { fixDPI } from './fixDPI'

const shapes: Shape[] = []

function init(): void {
  const canvas = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (!canvas) return

  canvas.addEventListener('click', (event: MouseEvent) => {
    const mousePosition: IPosition = { x: event.pageX, y: event.pageY }

    const clickedOnAnyShape = shapes
      .map((shape) => shape.onClick(mousePosition))
      .some((clickedOnShape) => clickedOnShape)
    
    if (!clickedOnAnyShape) shapes.push(generateRandomShape(mousePosition))

    canvas.style.cursor = 'pointer'
  })

  canvas.addEventListener('mousemove', (event: MouseEvent) => {
    const mousePosition: IPosition = { x: event.pageX, y: event.pageY }

    const hoveredAnyShape = shapes
      .map((shape) => shape.onMouseMove(mousePosition))
      .some((hoveredShape) => hoveredShape)
    
    canvas.style.cursor = hoveredAnyShape ? 'pointer' : 'default'
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
