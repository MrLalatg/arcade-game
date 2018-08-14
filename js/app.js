// Enemies our player must avoid
class Enemy {
    constructor(y, isRight = true) {

    	this.isRight = isRight;
    	this.isRight ? this.x = -101 : this.x = 505;
    	this.y = 125 + (y*81);
    	this.speed = Math.floor(Math.random() * (500 - 100)) + 100;
        this.isRight ? this.speed = this.speed : this.speed = -this.speed;
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.isRight ? this.sprite = 'images/enemy-bug.png' : this.sprite = 'images/enemy-bug-left.png';
    }

    changeDirection(){
    	this.speed = Math.floor(Math.random() * (500 - 100)) + 100;

    	//Interesting construction, huh? Works like if(){}, I found it myself :)
    	this.isRight && (this.speed = this.speed * -1);
        
        this.isRight = !this.isRight;
    	this.sprite =  `images/enemy-bug${ this.isRight ? '': '-left'}.png` 
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
    	this.x += this.speed*dt;
       
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
	constructor(){
		this.startX = 202;
		this.startY = 449;
		this.x = this.startX;
		this.y = this.startY;
		this.sprite = "images/char-boy.png";
	}

	update(x, y){
		this.x = x;
		this.y = y;
		this.render();
	}

	handleInput(direction){
		switch(direction){
			case "left":
				this.update(this.x - 101, this.y);
				if(this.x < 0)
					this.update(this.x + 101, this.y);
				break;
			case "right":
				this.update(this.x + 101, this.y);
				if(this.x > canvas.width - 101)
					this.update(this.x - 101, this.y);
				break;
			case "up":
				this.update(this.x, this.y - 81);
				if(this.y < 0)
					this.update(this.x, this.y + 81);
				break;
			case "down":
				this.update(this.x, this.y + 81);
				if(this.y > canvas.height - 81 - 70)
					this.update(this.x, this.y - 81);
				break;
		}
	}

	render(){

		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

allEnemies = [new Enemy(0), new Enemy(1, false), new Enemy(1)];
player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
