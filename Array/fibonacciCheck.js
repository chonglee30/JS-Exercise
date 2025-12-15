

function checkFibonacci(array) {
  let firstNum  = array[0]
  let secondNum = array[1]
  let fibonacciStatus = true

  for (let i =2; i<array.length; i++) {
    if (array[i] !== (firstNum+ secondNum)) {
      fibonacciStatus = false;
      console.log(i +"value")
      break;
    }
    firstNum = secondNum
    secondNum = array[i]
    console.log(i + " value: "+ array[i])
  }
  return fibonacciStatus
}

const array = [0,1,1,2,3,5,8,13, 21, 34]
const array1 = [0,1,1,2,3,5,8,13, 21, 34, 94]
console.log(checkFibonacci(array))
console.log(checkFibonacci(array1))
