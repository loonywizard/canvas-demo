function init(): void {
  const canvas = <HTMLCanvasElement | null>document.getElementById('canvas')

  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  window.onresize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const canvasContext: CanvasRenderingContext2D | null = canvas.getContext('2d')

  if (!canvasContext) return

  canvasContext.fillRect(25, 25, 100, 100)
}

window.onload = init
