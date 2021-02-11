import { IPosition, IShape } from './types'
import { generateRandomShape } from './generateRandomShape'

const shapes: IShape[] = []

function init(): void {
  const canvas = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  window.onresize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  canvas.addEventListener('click', (event: MouseEvent) => {
    const position: IPosition = { x: event.pageX, y: event.pageY }
    
    shapes.push(generateRandomShape(position))
  })

  const canvasContext = <CanvasRenderingContext2D>canvas.getContext('2d')

  if (!canvasContext) return

  function loop(): void {
    shapes.map((shape) => shape.draw(canvasContext))

    window.requestAnimationFrame(loop)
  }

  loop()
}

window.onload = init
