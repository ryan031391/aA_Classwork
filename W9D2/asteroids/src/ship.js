const MovingObject = require("./moving_object");
const Util = require("./util");

Util.inherits(Ship, MovingObject)

function Ship(arg) {
    arg.color = Ship.COLOR;
    arg.radius = Ship.RADIUS;
    arg.vel = [0, 0];
    MovingObject.call(this, arg);
}

Ship.COLOR = "orange";
Ship.RADIUS = 5;

Ship.prototype.relocate = function() {
    this.vel = [0, 0];
    this.pos = this.game.randomPosition();
}

Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

module.exports = Ship;