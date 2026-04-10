const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const birthdaySong = new Audio("birthday_song.mp3");
birthdaySong.loop = true; // optional: remove loop if not needed
window.addEventListener("click", () => birthdaySong.play(), { once: true });

let fireworks = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}
class Firework {
  constructor() {
    this.x = random(100, canvas.width - 100);
    this.y = canvas.height;
    this.targetY = random(100, canvas.height / 2);
    this.particles = [];
    this.exploded = false;
    this.color = `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`;
  }

  update() {
    if (!this.exploded) {
      this.y -= 4;
      if (this.y <= this.targetY) {
        this.exploded = true;
        for (let i = 0; i < 50; i++) {
          this.particles.push(new Particle(this.x, this.y, this.color));
        }
      }
    } else {
      this.particles.forEach(p => p.update());
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      this.particles.forEach(p => p.draw());
    }
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 6);
    this.angle = random(0, Math.PI * 2);
    this.gravity = 0.05;
    this.alpha = 1;
    this.color = color;
  }
update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  fireworks.forEach((fw, index) => {
    fw.update();
    fw.draw();
    if (fw.exploded && fw.particles.every(p => p.alpha <= 0)) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
