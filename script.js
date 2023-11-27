const canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.cssText = `background: #000;`;
const ctx = canvas.getContext('2d');

function random(min, max) {
    const result = max ? Math.floor(Math.random() * (max - min + 1) + min) : Math.floor(Math.random() * (min + 1));
    return result === 0 ? 1 : result;
}

let x, y, dx, dy, radius, color;
let balls = [];
for (let i = 0; i < 500; i++) {
    x = random(window.innerWidth);
    y = random(window.innerHeight);
    dx = random(-2, 2);  // random speed for horizontal component
    dy = random(-2, 2);  // random speed for vertical component
    radius = random(7, 20);
    color = `rgba(${random(255)}, ${random(255)}, ${random(255)}, 1)`;
    const b = new ball(x, y, dx, dy, radius, color);
    balls.push(b);
}



function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for ( let ball of balls ){
        ball.show(ctx);
        ball.move();
    }
}
animate();