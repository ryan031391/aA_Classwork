const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game (){
    this.DIM_X = 900;
    this.DIM_Y = 450;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship({pos: this.randomPosition(), game: this});
}

Game.prototype.addAsteroids = function (){
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
    }
};

Game.prototype.randomPosition = function (){
    return [Math.floor(Math.random() * (this.DIM_X - 2*Asteroid.RADIUS)) + Asteroid.RADIUS, Math.floor(Math.random() * (this.DIM_Y - 2*Asteroid.RADIUS)) + Asteroid.RADIUS ];
};

Game.prototype.draw = function (ctx){
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach(function(ele) {
        ele.draw(ctx);
    });
};

Game.prototype.moveObjects = function (){
    this.allObjects().forEach(function(ele) {
        ele.move();
    });
}

Game.prototype.wrap = function(pos) {
    if(pos[0] > this.DIM_X){
        return [0, pos[1]];
    }
    else if (pos[0] < 0){
        return [this.DIM_X, pos[1]];
    }
    else if (pos[1] > this.DIM_Y) {
        return [pos[0], 0];
    }
    else if (pos[1] < 0) {
        return [pos[0], this.DIM_Y];
    }
    return pos;
};

Game.prototype.checkCollisions = function (){
    that = this;
    that.allObjects().forEach(function(ele1){
        that.allObjects().forEach(function(ele2){
            if(ele1 !== ele2){
                if (ele1.isCollidedWith(ele2)){
                    // alert("COLLISION");
                    // console.log("COLLISION");
                    ele1.collideWith(ele2);
                }
            }
        });
    });
};

Game.prototype.step = function (){
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function (asteroid){
    let i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i, 1);
};

Game.prototype.allObjects = function() {
    let arr = this.asteroids.slice();
    arr.push(this.ship);
    // console.log(arr);
    return arr;
};

module.exports = Game;