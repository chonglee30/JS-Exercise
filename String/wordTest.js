
function reverseWords(words) {
  const strArray = words.split(" ");
  console.log(strArray.length)

  let reversedWord = []

  words.split(" ").forEach(word => {
    const charArray = word.split("");
    const charArrayLength = charArray.length;
    let firstIndex =0;
    let lastIndex = charArrayLength -1 
    while (firstIndex < lastIndex) {
      let temp = charArray[lastIndex]
      charArray[lastIndex] = charArray[firstIndex]
      charArray[firstIndex] = temp
      firstIndex++
      lastIndex--
    }
    reversedWord.push(charArray.join(''))
  });

  console.log(reversedWord.join(' '))
}

function reverseWordsShort(words) {
  return words.split(" ").map((word) => {
    return word.split('').reverse().join('')
  }).join(' ')
}

function reverseWordsShorter(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}


const str1 = "double  spaces"
const str2 = "This is an example!"

const str3 = "Hello Seahawks beat 49ers!"

reverseWords(str3)
console.log("Newer Way:")
console.log(reverseWordsShort(str3))
