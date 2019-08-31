class Obstacle {
	constructor() {
		this.width = 30
		this.height = 60
		this.speed = -10
		this.x = WIDTH
		this.y = HEIGHT - this.height
	}

	show() {
		fill(0, 255, 0)
		rect(this.x, this.y, this.width, this.height)
	}

	update() {
		this.x += this.speed
	}

}
