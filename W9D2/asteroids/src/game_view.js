const Game = require("./game");
// const Key = require("./keymaster");

function GameView() {
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.game = new Game();
}

GameView.prototype.start = function() {
    let that = this;
    that.bindKeyHandlers();
    setInterval(function() {that.game.step(), that.game.draw(that.ctx)} , 20)
    // that.game.step();
    // that.game.draw(that.ctx);
};

GameView.prototype.bindKeyHandlers = function () {
    that_game = this.game;
    key('w', function () { that_game.ship.power([0,-1])});
    key('a', function () { that_game.ship.power([-1, 0]) });
    key('s', function () { that_game.ship.power([0, 1]) });
    key('d', function () { that_game.ship.power([1, 0]) });
};

module.exports = GameView;