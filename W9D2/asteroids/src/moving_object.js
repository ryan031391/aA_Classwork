
function MovingObject (options){
    // console.log(options);
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.draw = function (ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    // console.log(this);
    this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject){
    let x_1 = this.pos[0];
    let y_1 = this.pos[1];
    let x_2 = otherObject.pos[0];
    let y_2 = otherObject.pos[1];
    let dist = Math.sqrt(Math.pow((x_1 - x_2), 2) + Math.pow((y_1 - y_2), 2));
    if (dist < (this.radius + otherObject.radius)){
        return true;
    }
    else{
        return false;
    }
};

MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(this);
    // this.game.remove(otherObject);
}

module.exports = MovingObject;

