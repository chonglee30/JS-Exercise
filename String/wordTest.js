
// 1. Reverse Words 
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

// 2. Sort Order Word based on integer inside string 
// Examples:
// Ex1: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// Ex2: "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// Ex3: ""  -->  ""

// arrayWords.forEach((word) => {
  //   const num = word.match(/\d/)
  //   console.log(num[0])
  // })


function order(words){
  const arrayWords = words.split(" ")
  arrayWords.sort((a,b) => {
    const numA = a.match(/\d/)
    const numB = b.match(/\d/)
    return numA - numB
  })
  const sortedWord = arrayWords.join(' ')
  return sortedWord
}

// shorter version:
function orderShort(words){
  return words.split(' ').sort((a,b) => {
    return a.match(/\d/) - b.match(/\d/)
  }).join(' ')
}

function orderShort1(words){
  return words.split(' ').sort((a,b) => a.match(/\d+/) - b.match(/\d+/)).join(' ')
}

// another way to test integer: const numerate = (s) => s.split('').find(x => /[0-9]/.test(x));
// way2: s.split('').find(x => x >= '0' && x <= '9')
// +x (The Unary Plus): clever JavaScript shortcut. 
// Putting a + before a string tries to convert that string into a Number.
// Ex: If x is "5", +x becomes the number 5
// parseInt() Version:
/*
const numerate = (s) => s.split('').find(x => {
  const num = parseInt(x);
  return Number.isInteger(num);
});
*/
function orderFind(words) {
  const numerate = (s) => s.split('').find(x => Number.isInteger(+x))
  return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
}

function orderReplace(words) {
  return words.split(" ").sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "")).join(" ")
}

// \D: In Regex, a capital letter usually represents the opposite of the lowercase letter.
// \D: anything that is not a digit (not a digit) 
// \d= digit.
// g: global: whole word
function orderReplace1(words) {
  return words.split(" ").sort((a, b) => a.replace(/\D/g, "") - b.replace(/\D/g, "")).join(" ")
}

const strWord = "is2 Thi1s T4est 3a";
console.log(order(strWord))
console.log(orderShort(strWord))
console.log(orderShort1(strWord))
console.log(orderFind(strWord))
console.log(orderReplace(strWord))
console.log(orderReplace1(strWord))