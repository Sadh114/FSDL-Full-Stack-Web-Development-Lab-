/* ================= Typing Effect ================= */
const text = ["John Doe", "A Futurist", "A Developer", "A Creator"];
let count = 0;
let index = 0;

(function type() {
    let current = text[count];
    document.getElementById("typing").textContent = current.slice(0, ++index);

    if (index === current.length) {
        setTimeout(() => {
            index = 0;
            count = (count + 1) % text.length;
        }, 1200);
    }
    setTimeout(type, 120);
})();

/* ================= Snowfall Effect ================= */
const canvas = document.getElementById("snowfall");
const ctx = canvas.getContext("2d");

let width, height;
let snowflakes = [];

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

class Snowflake {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 1.5 + 0.5;
        this.wind = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random();
    }
    update() {
        this.y += this.speed;
        this.x += this.wind;
        if (this.y > height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initSnow(count = 220) {
    snowflakes = [];
    for (let i = 0; i < count; i++) snowflakes.push(new Snowflake());
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    snowflakes.forEach(flake => {
        flake.update();
        flake.draw();
    });
    requestAnimationFrame(animate);
}

initSnow();
animate();