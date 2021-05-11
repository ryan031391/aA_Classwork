function Animal (name) {
  this.name = name;
};

Animal.prototype.roar = function() {
    console.log(`${this.name} roars!`)
}

function Cat(name, color) {
        Animal.call(this, name);
        this.color = color;
    }


function Surrogate() {

};


Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();
Cat.prototype.constructor = Cat;

const simba = new Cat('Simba', 'Brown');
const pumba = new Animal('Pumba');

simba.roar()
pumba.roar()
/*
 ------------------------------------------------------------------------------------
*/
// function Animal (name) {
//   this.name = name;
// };

// Animal.prototype.sayHello = function () {
//   console.log("Hello, my name is " + this.name);
// };

// function Dog (name, coatColor) {
//   Animal.call(this, name);

//   this.coatColor = coatColor;
// }

// // A surrogate will be used to construct `Dog.prototype`.
// // A `Surrogate` instance should delegate to `Animal.prototype`.
// function Surrogate () {};
// Surrogate.prototype = Animal.prototype;

// // Set `Dog.prototype` to a `Surrogate` instance.
// Dog.prototype = new Surrogate();

// // Make sure that instances of Dog have instance.constructor === Dog (rather than Animal)
// Dog.prototype.constructor = Dog;