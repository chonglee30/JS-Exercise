
// that takes a string input, and returns the first character that is not repeated anywhere in the string.
// Ex1: stress  => t
// Ex2: sTreSS  => T 
// all repeating characters => ""

// Option1: map
function first_non_repeating_letter(str) {
  const charMap = new Map()
  const lowerStr = str.toLowerCase();

  if (str.length ===0) return ''

  for (const char of lowerStr) {
    if (!charMap.has(char)) {
      charMap.set(char, 1)
    } else {
      let count = charMap.get(char)
      count++
      charMap.set(char, count)
    }
  }

  for (let i=0; i < str.length; i++) {
    let lowerChar = str.charAt(i).toLowerCase()
    if (charMap.get(lowerChar) ===1) {
      return str.charAt(i)
    }
  }
  return ''
}

// Option2: index and lastIndex
function first_non_repeating_letterIndex(str) {
  let lowerCaseStr = str.toLowerCase()
  for (let i =0; i< str.length; i++) {
    if (lowerCaseStr.indexOf(lowerCaseStr[i]) === lowerCaseStr.lastIndexOf(lowerCaseStr[i])) {
        return str.charAt(i)
    }
  }
  return ""
}

// Option3: Functional One Liner 
// Avoid for loop - chain several JS array methods
function first_non_repeating_letterFunctional(str) {
  const chars = str.toLowerCase().split('')
  const index = chars.findIndex(letter => chars.filter(c => c === letter).length ===1)
  return str.charAt(index) || ''
}

// Option4: Missing Piece strategy 
// clever way of isolating one character at a time and checking if it exists anywhere else in the list.
function first_non_repeating_letterMIssingPiece(str) {
  let char =''
  str.toLowerCase().split('').some((value, index, array) => {
    if (array.slice(0,index).concat(array.slice(index+1)).indexOf(value) ==-1 ) {
      char = str[index]
      return true;
    }
  }) 
  return char
}

console.log("2. Using Index")
console.log(first_non_repeating_letterIndex("stress"))
console.log(first_non_repeating_letterIndex("sTreSS"))
console.log(first_non_repeating_letterIndex("moonmen"))

console.log("3. Using Functional One liner")
console.log(first_non_repeating_letterFunctional("stress"))
console.log(first_non_repeating_letterFunctional("sTreSS"))
console.log(first_non_repeating_letterFunctional("moonmen"))

console.log("4. Mising Piece Stratgy")
console.log(first_non_repeating_letterMIssingPiece("stress"))
console.log(first_non_repeating_letterMIssingPiece("sTreSS"))
console.log(first_non_repeating_letterMIssingPiece("moonmen"))
console.log(first_non_repeating_letterMIssingPiece(""))



console.log('1. Using Map')
console.log(first_non_repeating_letter("stress"))
console.log(first_non_repeating_letter("sTreSS"))

//console.log('Other Test')
console.log(first_non_repeating_letter("a"))
console.log(first_non_repeating_letter("moonmen"))

console.log(first_non_repeating_letter("stress"))
console.log(first_non_repeating_letter(""))
console.log(first_non_repeating_letter("aa"))


// Quick Exercise Code:
// In test automation, we often want to find "Broken Links" on a page. 
// Imagine you have an array of Status Codes: [200, 200, 404, 200, 500].
// Could you write a quick one-liner using .filter() 
// that returns only the "Error" codes (anything that is NOT 200)?
const statusCodes = [200, 200, 404, 200, 500]

function getErrorCodes (statusCodes) {
  return statusCodes.filter(code => code !== 200)
}
console.log(getErrorCodes (statusCodes))