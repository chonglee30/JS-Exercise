// factorial 

function getFactorial(n) {
  if ( n==0 || n==1) return 1
  return n*getFactorial(n-1)
  
}
console.log(getFactorial(5))

// Reference: recursive and non-recursive