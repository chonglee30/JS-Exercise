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
//console.log(addOtherNumber)
const addResult1 = addOtherNumber(30)
console.log(addResult1)

console.log('Option#2 Addition')
console.log(addTwoNumbers(25)(35))

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

// Challenge#1: Greeting
function greet(msg1) {
  return function(msg2) {
    return msg1+", "+msg2+"!"
  }
} 

const sayHello = greet("Hello");
console.log(sayHello("David"))

const sayHi = greet("Hi");
console.log(sayHi("Phil"))

// Challenge#2: Automation URL Builder" (Advanced)
function createUrl(protocol) {
  return function(domain) {
    return function(path) {
      return protocol+"://"+domain+"/"+path
    }
  }
}

const https = createUrl("https");
const google = https("google.com");
console.log(google("search")); // Returns "https://google.com/search"
console.log(google("images")); // Returns "https://google.com/images"

// Arrow Function Way 
createUrlArrow = protocol => domain => path => protocol+"://"+domain+"/"+path

const https1 = createUrlArrow("https");
const yahoo = https1("yahoo.com")
console.log(yahoo("search"))