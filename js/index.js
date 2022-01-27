const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    //car();
  };

  function startGame() {
    const img = new Image();
    img.addEventListener("load", () => {});
    img.src = "./images/road.png";
    ctx.drawImage(img, 0, 0, 500, 700);
    game.draw();
  }

  /* function car() {
    const imgCar = new Image();
    imgCar.addEventListener("load", () => {});
    imgCar.src = "./images/car.png";
    ctx.drawImage(imgCar, 220, 520, 60, 150);
  } */
};

class Game {
  constructor() {
    this.x = 220;
    this.y = 520;

    const imgCar = new Image();
    imgCar.addEventListener("load", () => {
      this.img = imgCar;
      this.draw();
    });
    imgCar.src = "./images/car.png";
  }
  draw() {
    ctx.drawImage(this.imgCar, this.x, this.y, 60, 150);
  }
}
const game = new Game();
//console.log(game);
//const carPlayer = new
