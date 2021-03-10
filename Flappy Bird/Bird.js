class Bird{
    constructor() {
        this.x = 50;
        this.y = height/2;
        this.gravity = 0.1;
        this.force = -10;
        this.velocity = 0;
    }

    show () {
        fill(255);
        ellipse(this.x, this.y, 50, 50);
    }

    update () {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height){
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0 ){
            this.y = 0;
            this.velocity = 0;
        }
    }

    up () {
        this.velocity += this.force;
    }
}