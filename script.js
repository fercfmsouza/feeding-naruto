window.onload = () => {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const narutoImg = new Image(60, 180);
  narutoImg.src = './img/naruto.png';

  const lanternImg = new Image();
  lanternImg.src = './img/lantern.png';

  const hashi = new Image();
  hashi.src = './img/hashi.png';

  const ramen1 = new Image();
  ramen1.src = './img/ramen1.png';

  const ramen2 = new Image();
  ramen2.src = './img/ramen2.png';

  const sushi = new Image();
  sushi.src = './img/sushi.png';

  const temple = new Image();
  temple.src = './img/temple.png';

  const images = [
    { img: lanternImg, isObstacle: true },
    { img: hashi, isObstacle: true },
    { img: ramen1, isObstacle: false },
    { img: ramen2, isObstacle: false },
    { img: sushi, isObstacle: true },
    { img: temple, isObstacle: true },
  ];

  function createRandomFallingElement() {
    const randomNumber = Math.floor(Math.random() * images.length);

    new FallingElement(canvas, images[randomNumber], naruto);
  }

  const naruto = new Naruto(canvas, { img: narutoImg });

  setInterval(createRandomFallingElement, 3000);
};

// const myGameArea = {
//   frames: 0,
//   isGamePaused: false,
//   isGameOver: false,
//   start: function () {
//     this.interval = setInterval(updateGameArea, 20);
//   },
//   clear: function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   },
//   stop: function () {
//     clearInterval(this.interval);
//   },
//   score: function () {
//     const points = Math.floor(this.frames / 10);
//     ctx.font = '24px Rowdies';
//     ctx.fillStyle = '#e14f35';
//     ctx.fillText(`Score: ${points}`, 900, 80);
//   },
// };

// class Component {
//   constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//   }

//   render() {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   newPos() {
//     this.x += this.speedX;
//   }

//   left() {
//     return this.x;
//   }

//   right() {
//     return this.x + this.width;
//   }

//   top() {
//     return this.y;
//   }

//   bottom() {
//     return this.y + this.height;
//   }

//   crashWith(obstacle) {
//     return !(
//       this.bottom() < obstacle.top() ||
//       this.top() > obstacle.bottom() ||
//       this.right() < obstacle.left() ||
//       this.left() > obstacle.right()
//     );
//   }
// }

// class Naruto extends Component {
//   constructor(width, height, color, x, y) {
//     super(width, height, color, x, y);
//   }

//   render() {
//     const narutoImg = new Image();
//     narutoImg.src = './img/naruto.png';

//     let xPosition = this.x;

//     if (this.x < 0) xPosition = 0;
//     if (this.x > canvas.width) xPosition = canvas.width - naruto.width;

//     ctx.drawImage(narutoImg, xPosition, this.y, naruto.width, naruto.height);
//   }
// }

// const myObstacles = [];

// function renderObstacles() {
//   for (i = 0; i < myObstacles.length; i++) {
//     myObstacles[i].y += 5;
//     myObstacles[i].render();
//   }

//   const hashi = new Image();
//   hashi.src = './img/hashi.png';

//   const lantern = new Image();
//   lantern.src = './img/lantern.png';

//   const ramen1 = new Image();
//   ramen1.src = './img/ramen1.png';

//   const ramen2 = new Image();
//   ramen2.src = './img/ramen2.png';

//   const sushi = new Image();
//   sushi.src = './img/sushi.png';

//   const temple = new Image();
//   temple.src = './img/temple.png';

//   myGameArea.frames += 1;
//   if (myGameArea.frames % 100 === 0) {
//     const minHeight = 50;
//     const maxHeight = 200;
//     const randomWidth = Math.floor(
//       Math.random() * (maxHeight - minHeight + 1) + minHeight,
//     );
//     const randomObstacleXPosition = Math.floor(
//       Math.random() * canvas.width - randomWidth,
//     );

//     myObstacles.push(
//       new Component(randomWidth, 30, 'tomato', randomObstacleXPosition, 0),
//     );
//   }
// }

// function checkGameOver() {
//   const crashed = myObstacles.some(function (obstacle) {
//     return naruto.crashWith(obstacle);
//   });

//   if (crashed) {
//     myGameArea.stop();
//     canvas.style.display = 'none';
//     document.querySelector('#game-over').style.display = 'flex';
//     const gameOverText = document.querySelector('#game-over');
//     const text = document.createElement('p');
//     text.innerHTML = `<p>Total of ramen eaten: ${points}!</p>`;
//     gameOverText.appendChild(text);
//   }
// }

// const narutoSize = {
//   width: 100,
//   height: 300,
// };

// const naruto = new Naruto(
//   narutoSize.width,
//   narutoSize.height,
//   'green',
//   canvas.width / 2 - narutoSize.width / 2,
//   canvas.height - narutoSize.height,
// );

// document.addEventListener('keydown', (e) => {
//   switch (e.key) {
//     case 'ArrowLeft':
//       naruto.speedX -= 3;
//       break;
//     case 'ArrowRight':
//       naruto.speedX += 3;
//       break;
//   }
// });

// document.addEventListener('keyup', () => {
//   naruto.speedX = 0;
// });

// function updateGameArea() {
//   myGameArea.clear();
//   naruto.newPos();
//   naruto.render();
//   renderObstacles();
//   checkGameOver();
//   myGameArea.score();
// }

// document.querySelector('.start-button').onclick = () => {
//   canvas.style.display = 'flex';
//   document.querySelector('#start-game').style.display = 'none';
//   myGameArea.start();
// };
