const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Util = require("./util");

Util.inherits(Asteroid, MovingObject)

const Aster = {
    randomVec(length) {
      const deg = 2 * Math.PI * Math.random();
      return Aster.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
      return [vec[0] * m, vec[1] * m];
    }
};


function Asteroid(arg){
    arg.color = Asteroid.COLOR;
    arg.radius = Asteroid.RADIUS;
    arg.vel = Aster.randomVec(5);
    // console.log(arg);
    MovingObject.call(this, arg)
}

Asteroid.COLOR = "blue";
Asteroid.RADIUS = 10;

Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();
    }
}

module.exports = Asteroid;
// a = new Asteroid
// console.log(a)
