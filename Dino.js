class Dino {
	constructor() {
		this.x = 20
		this.w = 40
		this.y = HEIGHT - this.w

		this.airForce = 0.95
		this.upForce = -18
		this.gravity = 0.9
		this.velocity = 0
	}

	show() {
		fill(0)
		noStroke()
		rect(this.x, this.y, this.w, this.w)
	}

	update() {
		this.y += this.velocity
		this.velocity += this.gravity
		this.velocity *= this.airForce
		if(this.y > HEIGHT - this.w) {
			this.y = HEIGHT - this.w
		}
	}

	jump() {
		if (this.y === HEIGHT - this.w) {
			this.velocity = this.upForce
		}
	}

	collision(o) {
		const colX = this.x < o.x+o.width && this.x+this.w > o.x
		const colY = this.y < o.y+o.height && this.y+this.w > o.y
		return colX && colY
	}
}
