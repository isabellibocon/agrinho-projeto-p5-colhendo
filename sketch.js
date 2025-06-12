let fazendeiroX = 390;

let plantas = [
  { x: 40, y: 300, visivel: true },
  { x: 100, y: 300, visivel: true },
  { x: 300, y: 300, visivel: true },
];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#03A9F4");
  fill("#795548");
  noStroke();
  rect(0, height - 100, width, 100);

  textSize(60);

  let todasColhidas = plantas.every((planta) => !planta.visivel); // colher as plantas
  if (todasColhidas) {
    textSize(30);
    fill("white");
    text("agora vamos levar para a cidade", 100, 200);
  }

  for (let planta of plantas) {
    if (planta.visivel) {
      text("🌱", planta.x, planta.y);
    }
  }
  textSize(30);
  fill("white");
  text("Vamos ajudar o chico a colher a soja!", 50, 100);
  textSize(80);
  text("👨🏼‍🌾", fazendeiroX, 300); // emoji do fazendeiro

  for (let planta of plantas) {
    if (planta.visivel && colidiu(fazendeiroX, planta.x)) {
      planta.visivel = false; // faz a planta sumir
    }
  }
}

function keyPressed() {
  if (key === "a" || key === "A") {
    // o emoji anda para a esquerda
    fazendeiroX -= 10;
  }
  if (key === "b" || key === "B") {
    // o emoji anda para a direita
    fazendeiroX += 10;
  }

  fazendeiroX = constrain(fazendeiroX, 0, width - 60);
}

function colidiu(fX, pX) {
  return abs(fX - pX) < 40;
}
