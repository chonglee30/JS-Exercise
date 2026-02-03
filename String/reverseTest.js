// A. Reverse String
// 1. split: string into array of characters
// 2. join: array of characters into string (reversed string)
function reverseString(str) { 
  let strArray = str.split('') // 1. Convert the immutable string into a mutable array of characters 
  let firstIndex =0 
  let lastIndex = strArray.length -1

  while (lastIndex > firstIndex) {
    let temp 
    temp = strArray[lastIndex]
    strArray[lastIndex] = strArray[firstIndex]
    strArray[firstIndex] = temp 
    lastIndex --
    firstIndex++
  }
  return strArray.join('')     // 2 convert array of characters to form string
}

function reverseStringShort(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString("Hello!"))
console.log(reverseStringShort("helloMoto"))

// B. Reverse Words 
// 1. split each words into array of string
// 2. split each string into array of characters
// 3. join: array of characters into string and push into new array of each string => array of string
// 4. join: array of string into reversed string 
function reverseWords(words) {
  const arrays = words.split(' ') // 1. split string (words) into string of array
    
  let reversedArray = []
  arrays.forEach(element => {
    let chars = element.split('') // 2. Convert the immutable string into a mutable array of characters 
    let firstIndex =0
    let lastIndex = chars.length-1
    while(lastIndex > firstIndex) {
      let temp = chars[lastIndex]
      chars[lastIndex] = chars[firstIndex]
      chars[firstIndex] = temp
      firstIndex++;
      lastIndex--;
    }
   reversedArray.push(chars.join(''))  // 3. convert array of characters to string then push each string into the array
  });

 console.log(reversedArray)
 const reversedWords = reversedArray.join(' ') // 4. convert array of string into sentence of string
 return reversedWords
}

console.log(reverseWords("Hello Canucks Fans!"))

// Leetcode #151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/submissions/1906273620/
// The sky is blue => blue is sky The
function reverseWordsOrder(words) {
  // Use /\s+/ to catch all spaces at once
  // \s: Matches any whitespace (space, tab, newline).
  // +: Matches one or more of them in a row.
  let wordsArray = words.trim().split(/\s+/)
  let reversedWord = [];

  for (let i= wordsArray.length-1; i>=0; i--) {
    reversedWord.push(wordsArray[i])
  }
  return reversedWord.join(' ')
}

const sentence1 = "The sky is blue!"
console.log(reverseWordsOrder(sentence1))
