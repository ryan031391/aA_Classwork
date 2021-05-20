/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nUtil.inherits(Asteroid, MovingObject)\n\nconst Aster = {\n    randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Aster.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n    }\n};\n\n\nfunction Asteroid(arg){\n    arg.color = Asteroid.COLOR;\n    arg.radius = Asteroid.RADIUS;\n    arg.vel = Aster.randomVec(5);\n    // console.log(arg);\n    MovingObject.call(this, arg)\n}\n\nAsteroid.COLOR = \"blue\";\nAsteroid.RADIUS = 10;\n\nAsteroid.prototype.collideWith = function(otherObject) {\n    if (otherObject instanceof Ship) {\n        otherObject.relocate();\n    }\n}\n\nmodule.exports = Asteroid;\n// a = new Asteroid\n// console.log(a)\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Game (){\n    this.DIM_X = 900;\n    this.DIM_Y = 450;\n    this.NUM_ASTEROIDS = 10;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship({pos: this.randomPosition(), game: this});\n}\n\nGame.prototype.addAsteroids = function (){\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));\n    }\n};\n\nGame.prototype.randomPosition = function (){\n    return [Math.floor(Math.random() * (this.DIM_X - 2*Asteroid.RADIUS)) + Asteroid.RADIUS, Math.floor(Math.random() * (this.DIM_Y - 2*Asteroid.RADIUS)) + Asteroid.RADIUS ];\n};\n\nGame.prototype.draw = function (ctx){\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.allObjects().forEach(function(ele) {\n        ele.draw(ctx);\n    });\n};\n\nGame.prototype.moveObjects = function (){\n    this.allObjects().forEach(function(ele) {\n        ele.move();\n    });\n}\n\nGame.prototype.wrap = function(pos) {\n    if(pos[0] > this.DIM_X){\n        return [0, pos[1]];\n    }\n    else if (pos[0] < 0){\n        return [this.DIM_X, pos[1]];\n    }\n    else if (pos[1] > this.DIM_Y) {\n        return [pos[0], 0];\n    }\n    else if (pos[1] < 0) {\n        return [pos[0], this.DIM_Y];\n    }\n    return pos;\n};\n\nGame.prototype.checkCollisions = function (){\n    that = this;\n    that.allObjects().forEach(function(ele1){\n        that.allObjects().forEach(function(ele2){\n            if(ele1 !== ele2){\n                if (ele1.isCollidedWith(ele2)){\n                    // alert(\"COLLISION\");\n                    // console.log(\"COLLISION\");\n                    ele1.collideWith(ele2);\n                }\n            }\n        });\n    });\n};\n\nGame.prototype.step = function (){\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.remove = function (asteroid){\n    let i = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(i, 1);\n};\n\nGame.prototype.allObjects = function() {\n    let arr = this.asteroids.slice();\n    arr.push(this.ship);\n    // console.log(arr);\n    return arr;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// const Key = require(\"./keymaster\");\n\nfunction GameView() {\n    this.canvas = document.getElementById('game-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n    let that = this;\n    that.bindKeyHandlers();\n    setInterval(function() {that.game.step(), that.game.draw(that.ctx)} , 20)\n    // that.game.step();\n    // that.game.draw(that.ctx);\n};\n\nGameView.prototype.bindKeyHandlers = function () {\n    that_game = this.game;\n    key('w', function () { that_game.ship.power([0,-1])});\n    key('a', function () { that_game.ship.power([-1, 0]) });\n    key('s', function () { that_game.ship.power([0, 1]) });\n    key('d', function () { that_game.ship.power([1, 0]) });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\n\nconsole.log(\"Webpack is working!\")\n\n\n\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n// });\n\n// const aster_1 = new Asteroid({pos: [100,50]})\n\nwindow.addEventListener('DOMContentLoaded', function(event) {\n    // const canvas = document.getElementById('game-canvas');\n    // const ctx = canvas.getContext('2d');\n    console.log(\"I'm running\")\n    gameview = new GameView();\n    gameview.start();\n    // mo.draw(ctx);\n    // aster_1.draw(ctx);\n    // const game = new Game();\n    // game.draw(gameview.ctx);\n});\n\n// console.log(aster_1);\n// aster_1.move();\n// mo.move();\n\n// Util.inherits(Asteroid, MovingObject)\n\n// function Asteroid(){\n    \n// }\n\n// a = new Asteroid\n// console.log(a)\n\n// console.log(mo);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject (options){\n    // console.log(options);\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.strokeStyle = this.color;\n    ctx.stroke();\n    ctx.fillStyle = this.color;\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // console.log(this);\n    this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function (otherObject){\n    let x_1 = this.pos[0];\n    let y_1 = this.pos[1];\n    let x_2 = otherObject.pos[0];\n    let y_2 = otherObject.pos[1];\n    let dist = Math.sqrt(Math.pow((x_1 - x_2), 2) + Math.pow((y_1 - y_2), 2));\n    if (dist < (this.radius + otherObject.radius)){\n        return true;\n    }\n    else{\n        return false;\n    }\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n    // this.game.remove(this);\n    // this.game.remove(otherObject);\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nUtil.inherits(Ship, MovingObject)\n\nfunction Ship(arg) {\n    arg.color = Ship.COLOR;\n    arg.radius = Ship.RADIUS;\n    arg.vel = [0, 0];\n    MovingObject.call(this, arg);\n}\n\nShip.COLOR = \"orange\";\nShip.RADIUS = 5;\n\nShip.prototype.relocate = function() {\n    this.vel = [0, 0];\n    this.pos = this.game.randomPosition();\n}\n\nShip.prototype.power = function(impulse){\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n      //...\n      function Surrogate() {};\n      Surrogate.prototype = parentClass.prototype;\n      childClass.prototype = new Surrogate();\n      childClass.prototype.constructor = childClass;\n    }\n  };\n  \n  module.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;