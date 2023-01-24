window.onload = () => {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const narutoImg = new Image(80, 180);
  narutoImg.src = './img/naruto.png';

  const lanternImg = new Image();
  lanternImg.src = './img/lantern.png';

  const hashi = new Image();
  hashi.src = './img/hashi.png';

  const ramen1 = new Image();
  ramen1.src = './img/ramen1.png';

  const ramen2 = new Image();
  ramen2.src = './img/ramen2.png';

  const ramen3 = new Image();
  ramen3.src = './img/ramen3.png';

  const ramen4 = new Image();
  ramen4.src = './img/ramen4.png';

  const sushi = new Image();
  sushi.src = './img/sushi.png';

  const temple = new Image();
  temple.src = './img/temple.png';

  const cloud = new Image();
  cloud.src = './img/cloud.png';

  const images = [
    { img: lanternImg, isObstacle: true },
    { img: hashi, isObstacle: true },
    { img: ramen1, isObstacle: false },
    { img: ramen2, isObstacle: false },
    { img: ramen3, isObstacle: false },
    { img: ramen4, isObstacle: false },
    { img: sushi, isObstacle: true },
    { img: temple, isObstacle: true },
    { img: cloud, isObstacle: true },
  ];

  function startGame() {
    GameAudio.playStartGameSound();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    FallingElement.points = 0;

    function createRandomFallingElement() {
      const randomNumber = Math.floor(Math.random() * images.length);
      new FallingElement(canvas, images[randomNumber], naruto);
    }

    const naruto = new Naruto(canvas, { img: narutoImg });
    const interval = setInterval(createRandomFallingElement, 1500);

    function endGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      clearInterval(interval);
    }

    window.endGame = endGame;
  }

  document.querySelector('.start-button').onclick = () => {
    document.querySelector('#start-game').style.display = 'none';
    canvas.style.display = 'flex';
    startGame();
  };

  document.querySelector('.restart-button').onclick = () => {
    document.querySelector('#start-game').style.display = 'none';
    canvas.style.display = 'flex';
    GameAudio.stopGameOverSound();
    startGame();
  };
};
