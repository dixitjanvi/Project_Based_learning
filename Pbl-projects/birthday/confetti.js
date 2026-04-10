const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for (let i = 0; i < 200; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    angle: Math.random() * Math.PI * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    p.y += p.speed;
    p.x += Math.sin(p.angle);
    p.angle += 0.01;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }

    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();
