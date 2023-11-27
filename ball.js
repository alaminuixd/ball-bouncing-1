class ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }
    show = function(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    move = function(){
        this.x += this.dx;
        if(this.x >= this.width || this.x <= 0 ){
            this.dx *= -1;
        }
        this.y += this.dy;
        if(this.y >= this.height || this.y <= 0 ){
            this.dy *= -1;
        }
    }
}