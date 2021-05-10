function sum(num1) {
    return function sum(num2) {
        return function sum(num3) {
            return num1 + num2 + num3;
        }
    }
}

function sum_1(nums) {
    arg = Array.prototype.slice.call(arguments); 

    // let sum = 0;
    let sum = arg.reduce((acc, ele) => {
       
        return acc + ele;
        // sum = acc;
    }, 0)
    return sum;
}

console.log(sum(3)(4)(5))
console.log(sum_1(1,2,3,4,5))