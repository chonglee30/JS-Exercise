// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each other 
// and preserving the original order of elements.

// Example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder= function(iterable){
  //your code here - remember iterable can be a string or an array
  const uniqueArray = []

  let prev = ''
  for (iter of iterable) {
    if (iter !== prev) {
      uniqueArray.push(iter)
    }
    prev=iter
  }
  //console.log(uniqueArray)
  return uniqueArray
}


uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD') 

uniqueInOrder([1,2,2,3,3])