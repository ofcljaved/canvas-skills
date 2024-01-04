const createRectangle = (
  context: CanvasRenderingContext2D,
  step: number = 7
) => {
  context.fillStyle = `rgba(100, 100, 100)`;
  let width = context.canvas.width;
  let height = context.canvas.height;
  let xPos = 0;
  let yPos = 0;

  while (width >= 0 && height >= 0) {
    context.fillRect(xPos, yPos, width, height);
    context.clearRect(
      xPos + 0.5 * step,
      yPos + 0.5 * step,
      width - step,
      height - step
    );
    context.strokeRect(
      xPos + step,
      yPos + step,
      width - 2 * step,
      height - 2 * step
    );
    width -= 3 * step;
    height -= 3 * step;
    xPos += 1.5 * step;
    yPos += 1.5 * step;
  }
};

export default createRectangle;
