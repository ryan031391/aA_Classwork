// function sum(num1) {
//     return function sum(num2) {
//         return function sum(num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }

// function sum_1(nums) {
//     arg = Array.prototype.slice.call(arguments); 

//     let sum = arg.reduce((acc, ele) => {
       
//         return acc + ele;
//     }, 0)
//     return sum;
// }

// console.log(sum(3)(4)(5))
// console.log(sum_1(1,2,3,4,5))

// function sum_2(...nums) {

//     let sum = nums.reduce((acc, ele) => {
       
//         return acc + ele;
//         // sum = acc;
//     }, 0)
//     return sum;
// }

// console.log(sum_2(1,2,3,4,5))

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

Function.prototype.myBind = function(ctx, ...bindArgs) {
    that = this;
    return function(...callArgs){
        return that.apply(ctx, [...bindArgs, ...callArgs]);
    }
}

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // // Pavlov says meow to a tree!
// // // true

// // // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // // Pavlov says meow to Markov!
// // // true

// // // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // // Pavlov says meow to me!
// // true

// function sumThree(num1, num2, num3) {
// return num1 + num2 + num3;
// }

// console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
 // == 30

function curriedSum(numArgs) {
    let numbers = [];
    
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length < numArgs) {
            console.log(numbers); 
            return _curriedSum;
        } else if (numbers.length === numArgs) {
            return numbers.reduce((acc, ele) => {
                return acc + ele;
            }) 
        }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
// console.log(sum);
console.log(sum(5)(30)(20)(1)); // => 56

// _cuuriedsum(5) => numbers = [5], return _curriedSum()
// curriedSum(3)(4)(20)(6);

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
  // or more briefly:
   // == 30
Function.prototype.curry = function(numArgs) {
    let numbers = [];
    that = this;
    
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length < numArgs) {
            // console.log(numbers); 
            return _curriedSum;
        } else if (numbers.length === numArgs) {
            // return numbers.reduce((acc, ele) => {
            //     return acc + ele;
            // }) 
            return that(...numbers);
        }
    }
    return _curriedSum;
}

console.log(sumThree.curry(3)(4)(20)(6));
