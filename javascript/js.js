// Menu hamburguer 
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// =======================
// CANVAS BACKGROUND GAME
// =======================

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let pacman = { x: 0, y: 0 };
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let foods = [];

let mouth = 0;
let mouthSpeed = 0.12;
const SPEED = 0.18;

// ---------- RESIZE ----------
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// ---------- MOUSE ----------
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// ---------- FOOD ----------
function spawnFood() {
  foods.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height
  });
}

// inicial
for (let i = 0; i < 12; i++) spawnFood();

// ---------- UPDATE ----------
function update() {
  // Movimento suave
  pacman.x += (mouse.x - pacman.x) * SPEED;
  pacman.y += (mouse.y - pacman.y) * SPEED;

  // Limite SOMENTE nas bordas
  pacman.x = Math.max(20, Math.min(canvas.width - 20, pacman.x));
  pacman.y = Math.max(20, Math.min(canvas.height - 20, pacman.y));

  // Boca
  mouth += mouthSpeed;
  if (mouth > 0.25 || mouth < 0) mouthSpeed *= -1;

  // Comer comida
  for (let i = foods.length - 1; i >= 0; i--) {
    const d = Math.hypot(pacman.x - foods[i].x, pacman.y - foods[i].y);
    if (d < 22) foods.splice(i, 1);
  }

  // Repor comida
  if (foods.length < 15 && Math.random() < 0.02) spawnFood();
}

// ---------- DRAW ----------
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Comidas
  ctx.fillStyle = "#FFB8AE";
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#FFB8AE";

  foods.forEach(f => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.shadowBlur = 0;

  // Pac-Man
  const angle = Math.atan2(mouse.y - pacman.y, mouse.x - pacman.x);

  ctx.save();
  ctx.translate(pacman.x, pacman.y);
  ctx.rotate(angle);

  ctx.fillStyle = "#FFFF00";
  ctx.shadowBlur = 15;
  ctx.shadowColor = "#FFFF00";

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.arc(0, 0, 20, mouth * Math.PI, (2 - mouth) * Math.PI);
  ctx.lineTo(0, 0);
  ctx.fill();

  ctx.restore();
}

// ---------- LOOP ----------
function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

pacman.x = canvas.width / 2;
pacman.y = canvas.height / 2;
loop();
