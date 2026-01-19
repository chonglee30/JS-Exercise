// Problem: Create Phone Number Challenge
function createPhoneNumber(numbers){
  function loopPhoneNumber(firstNum, lastNum) {
    for (let j=firstNum; j<=lastNum; j++) {
      phoneNumber+=numbers[j]
    }    
  }
   let phoneNumber='('    
    loopPhoneNumber(0,2)  
    phoneNumber+=') '
    loopPhoneNumber(3,5)  
    phoneNumber+='-'
    loopPhoneNumber(6,numbers.length-1) 
  return phoneNumber
}

// Using String replace method 
function replacePhoneNumber(numbers){
  let phoneFormat = '(xxx) xxx-xxxx'
  for (let i=0; i< numbers.length; i++) {
    phoneFormat = phoneFormat.replace('x', numbers[i])
  }
  return phoneFormat;
}

// Using String substring method 
function substringPhoneNumber(numbers){
  let strNumbers = numbers.join('')

  return '('+strNumbers.substring(0,3)+') '
         +strNumbers.substring(3,6)+'-'+strNumbers.substring(6,numbers.length)
}

// Using Array reduce method
function reducePhoneNumber(numbers){
  return numbers.reduce((accu, current) => {
    return accu.replace('x',current)
  }, '(xxx) xxx-xxxx')
}

// Using Array reduce method - one line
function reducePhoneNumberOneLine(numbers){
  return numbers.reduce((accu, current) => accu.replace('x',current), '(xxx) xxx-xxxx')
}

// Using Array slice method - Create new array without changing the original one
// Using Array splice method - modify original array by add/remove/replace
function slicePhoneNumber(numbers){
  return '('+numbers.slice(0,3).join('')+') '
         +numbers.slice(3,6).join('')+'-'+numbers.slice(6).join('')
}

// => returns (123) 456-7890
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(createPhoneNumber(numbers))
console.log(replacePhoneNumber(numbers))
console.log(substringPhoneNumber(numbers))
console.log(reducePhoneNumber(numbers))
console.log(reducePhoneNumberOneLine(numbers))
console.log(slicePhoneNumber(numbers))