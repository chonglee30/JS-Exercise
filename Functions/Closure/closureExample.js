// Closure - function which remember the variables from the place where it was defined
//           even after original scope has finished executing it.
// Reference: https://www.youtube.com/watch?v=pWsREdKdtf8

// Example1:
function addTwoNumbers(num1) {
    return function(num2) {
      return num1+num2;
    }
}

console.log('------- Example0 -------')
const addOtherNumber = addTwoNumbers(15)
const addResult1 = addOtherNumber(30)
console.log(addResult1)

// Example2:
function incrementCount() {
    let counter =0;
    return () => {
      counter+=1
      return counter
    }
}

const incrementCounter = incrementCount()

console.log('------- Example2 -------')
console.log(incrementCounter())
console.log(incrementCounter())
console.log(incrementCounter())
