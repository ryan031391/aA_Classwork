const MovingObject = require("./moving_object");
const Util = require("./util");
const Asteroid = require("./asteroid");
const Game = require("./game");
const GameView = require("./game_view")

console.log("Webpack is working!")



// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
// });

// const aster_1 = new Asteroid({pos: [100,50]})

window.addEventListener('DOMContentLoaded', function(event) {
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    console.log("I'm running")
    gameview = new GameView();
    gameview.start();
    // mo.draw(ctx);
    // aster_1.draw(ctx);
    // const game = new Game();
    // game.draw(gameview.ctx);
});

// console.log(aster_1);
// aster_1.move();
// mo.move();

// Util.inherits(Asteroid, MovingObject)

// function Asteroid(){
    
// }

// a = new Asteroid
// console.log(a)

// console.log(mo);