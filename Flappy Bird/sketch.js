let bird;
const pipes = [];

function setup() {
    createCanvas(500, 500);
    bird = new Bird();
    pipes.push(new Pipe());
    
}

function draw(){
    background(0);
    bird.update();
    bird.show();

    for(let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        pipes[i].hits(bird);    

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

    if (frameCount % 100 === 0) {
        pipes.push(new Pipe());
    }
    
}

function keyPressed(){
    if (key === ' ') {
        bird.up();
    }
}