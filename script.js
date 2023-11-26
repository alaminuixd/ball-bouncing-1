const canvas = document.getElementById('canvas1');
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.cssText = `background: #000;`;
const ctx = canvas.getContext('2d');

const balls = new ball( innerWidth/ 2, innerHeight/2, 5, 5, 20, '#F00');


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.show(ctx);
}
animate();