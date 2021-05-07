const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, CompletionCallback) {
    
    if (numsLeft > 0) {
        reader.question("Enter a number: ", function (numString){
            const num = parseInt(numString);
            sum += num;
            console.log(`Partial Sum: ${sum}`);
            addNumbers(sum, numsLeft-1, CompletionCallback);
        })
    } else {
        CompletionCallback(sum);
    }
}



// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)); // 


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Whether ${el1} > ${el2}(just put yes or no): `, function (answer){
    if (answer === "yes") {
        callback(true);
    } else {
        callback(false);
    }
  })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
   
//    console.log(arr.length);
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i == arr.length - 1) {
      outerBubbleSortLoop(madeAnySwaps);
  } else {
    // console.log("i'm running");
      askIfGreaterThan(arr[i], arr[i+1], function (ele) {
        if (ele === true) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
      })
  
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}
// innerBubbleSortLoop([3,5,1,6,4,2], 0, false)

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    // console.log("i'm running");
    madeAnySwaps = true;
    outerBubbleSortLoop(madeAnySwaps)
  function outerBubbleSortLoop(madeAnySwaps) {
    //   console.log("outterloop running");
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
        sortCompletionCallback(arr);
    }
  }
  
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
