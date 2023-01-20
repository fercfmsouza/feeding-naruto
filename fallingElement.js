class FallingElement extends Shape {
  static points = 0;

  constructor(canvas, { img, isObstacle }, naruto) {
    const initialPosition = {
      x: Math.floor(Math.random() * (canvas.width - img.width)),
      y: -img.height,
    };

    super(canvas, { img }, initialPosition);

    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.width = img.width;
    this.height = img.height;
    this.naruto = naruto;

    const reRender = () => {
      this.ctx.clearRect(this.x, this.y, this.width, this.height);

      this.y += 1;

      this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
    };

    const checkCollision = (naruto) => {
      const narutoXRight = naruto.x + naruto.width;
      const narutoYBottom = naruto.y + naruto.height;
      const fallingElementXRight = this.x + this.width;
      const fallingElementYBottom = this.y + this.height;

      const overlapX =
        (naruto.x <= fallingElementXRight && naruto.x >= this.x) ||
        (narutoXRight <= fallingElementXRight && narutoXRight >= this.x);
      const overlapY =
        (naruto.y <= fallingElementYBottom && naruto.y >= this.y) ||
        (narutoYBottom <= fallingElementYBottom && narutoYBottom >= this.y);

      const isColliding = overlapX && overlapY;

      if (isColliding) {
        if (isObstacle) {
          console.log('IM OBSTACLE!');
        } else {
          this.ctx.clearRect(this.x, this.y, this.width, this.height);
          this.ctx.clearRect(canvas.width - 200, 80, 300, 60);
          clearInterval(interval);
          console.log('YAMMMY!');
          FallingElement.points++;
        }
      }
    };

    const interval = setInterval(() => {
      reRender();
      checkCollision(this.naruto);

      this.ctx.font = '24px Rowdies';
      this.ctx.fillStyle = '#e14f35';
      this.ctx.fillText(
        `Score: ${FallingElement.points}`,
        canvas.width - 200,
        80,
      );

      if (this.y === canvas.height + this.height) {
        clearInterval(interval);
      }
    }, 10);
  }
}
