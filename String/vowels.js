// A, E, I, O, and U
function countVowels(word) {
  let count =0;

  for (char of word) {
    const vowels = 'aeiou'
    if (vowels.includes(char.toLowerCase())) {
      count++
      console.log(char)
    }
  }
  //console.log(count)
  return count
}

function countVowelsShort(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return word.split('').filter(char => vowels.includes(char.toLowerCase())).length
}

console.log('Count of Vowels:'+countVowels('Apple'))
console.log('Count of Vowels:'+countVowelsShort('Apple'))