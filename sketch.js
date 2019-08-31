const WIDTH = 600, HEIGHT = 400;
let dino, obstacles = [], score = 0;

function setup() {
	createCanvas(WIDTH, HEIGHT)
	dino = new Dino()
	obstacles.push(new Obstacle())
}

function draw() {
	background(200, 200, 200)
	
	// Score text
	textSize(20);
	fill(0);
	text(`Score: ${score}`, 10, 25);

	dino.update()
	dino.show()

	for(let i=obstacles.length-1; i>=0; i--) {
		const o = obstacles[i]
		o.show()
		o.update()
		if (dino.collision(o)) {
			console.log("Game over", i)
			noLoop()
		}
		if (o.x <= -o.width) {
			obstacles.splice(i, 1)
			score++;
			setTimeout(() => {
				obstacles.push(new Obstacle())
			}, random(0, 1000))
		}
	}
}

function keyPressed() {
	if (keyCode === 32) {
		dino.jump()
	}
}
