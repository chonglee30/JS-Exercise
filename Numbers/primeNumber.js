// My Version:
const primeNumberCheck = function(num) {
  let isPrime = false
  if (num ===2) return true;
  for (let i=2; i<num; i++) {
    if (num%i ===0) 
      return false  
    else {
      isPrime = true
    }
  }
  return isPrime
}
//console.log(primeNumberCheck(9))

// Enhanced Version
const isPrimeNumber = function(num) {
  for (let i=2; i<num; i++) {
    if (num%i ===0) return false  
  }
  return num>1
}

console.log('----- Version2 -----')
//console.log(isPrimeNumber(1))
// Reference: https://medium.com/@ianramos_34189/technical-interviews-prime-numbers-2ddcac2ae875

const getAllPrimeNumbers = function(num) {
  const primes = []
  let primeCheck = true; 

  for (let i=2; i<=num; i++) {
    if (isPrimeNumber(i)) primes.push(i)
  }
  return primes;
}

console.log(getAllPrimeNumbers(30))
