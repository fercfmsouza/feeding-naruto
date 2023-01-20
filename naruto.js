class Naruto extends Shape {
  constructor(canvas, { img }) {
    const initialPosition = {
      x: canvas.width / 2 - img.width / 2,
      y: canvas.height - img.height,
    };

    super(canvas, { img }, initialPosition);

    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.width = img.width;
    this.height = img.height;

    window.addEventListener(
      'mousemove',
      (e) => {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);

        this.x = e.clientX;
        this.y = e.clientY;

        this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
      },
      false,
    );
  }
}
