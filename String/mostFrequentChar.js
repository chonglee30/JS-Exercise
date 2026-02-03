// Version1:
// The code syntax charObj[key] = (charObj[key] || 0) + 1 
// Scenario A: Key is Encountered for the FIRST TIME: Ex: (undefined || 0) + 1  => 0 + 1 => 1
// Scenario B: Key is Encountered AGAIN: Ex: (5 || 0) + 1  => 5 + 1 => 6
// 1. Get the largest value from array of values
// 2. Get the key as compared each key in the array and compare if key belong to the largest value 
function getMostFrequentCharacter(str) {
  let charObj = {}
  for (let key of str) {
    charObj[key] = (charObj[key] || 0) +1
  }

  const values = Object.values(charObj)
  let maxValue =0;
  for (let value of values) {
    if (value>maxValue) {
      maxValue = value
    }
  }
 const maxKey = Object.keys(charObj).find(key => charObj[key] === maxValue)
 return maxKey
}

// Test Version1:
console.log("Most Frequent Character: "+getMostFrequentCharacter("book"))
console.log("Most Frequent Character: "+getMostFrequentCharacter("raiders"))

// Version2:
function getMostFrequentCharacter2(str) {
  let charObj = {}
  let maxChar ='', maxValue =0

  for (let key of str) {
    charObj[key] = (charObj[key] || 0) +1

    if (charObj[key] > maxValue) {
      maxChar = key
      maxValue = charObj[key]
    }
  }
  return maxChar
}

// Test Version2:
console.log("Most Frequent Character: "+getMostFrequentCharacter2("java"))

// Version3:
function getMostFrequentCharacterPair(str) {
  let charObj = {}
  let compValue=0
  let compKey

  for (const key of str) {
    charObj[key] = (charObj[key] || 0)+1
    if (charObj[key] > compValue) {
      compKey = key
      compValue = charObj[key]
    }
  }
  const highestPair = { [compKey]: compValue }
  return highestPair
}

// Test Version3:
console.log('Test Version3: Most Frequent Pair:', getMostFrequentCharacterPair("sammy"))


// My Way:
function getMostFrequentCharacter3(str) {
    let charMap = {}

    for (let char of str) {
      if(!charMap.hasOwnProperty(char)) {
        charMap[char]=1
      } else {
        charMap[char]++
      }
    }

    const highestValue = Object.values(charMap)
      .reduce((high, current) => {
        if (current> high) {
          return current
        } else {
          return high
        }
    })
    
    const highestKey = Object.keys(charMap).find((key => {
      return charMap[key] === highestValue
    }))
    return highestKey
}

console.log("Most Frequent Character: "+getMostFrequentCharacter3("java"))
console.log("Most Frequent Character: "+getMostFrequentCharacter3("developer"))

// Represent in Object
function getMostFrequentPair(str) {
  let charMap = {}
  for (let char of str) {
    if (!charMap.hasOwnProperty(char)) {
      charMap[char] =1
    } else {
      charMap[char]++
    }
  }
  console.log(charMap)

  const arrayObject = []; 
  const highestPair 
      = Object.entries(charMap)
              .reduce((maxPair, currPair) => {
          if (currPair[1] > maxPair[1]) {
            return currPair
          } else {
            return maxPair
          }
  }) 

  arrayObject.push(highestPair)
  console.log(arrayObject)

  const hightestPairObject = Object.fromEntries(arrayObject)
  console.log(hightestPairObject)
}

getMostFrequentPair("raiders") 

// Given variables from your context:
const compKey = 'a';
const charObj = { 'a': 3, 'b': 1, 'c': 5 };
const compValue = charObj[compKey]; // compValue is 3

// 1. Define the new object using Computed Property Names
const newObject = {
    [compKey]: compValue
};

console.log(compKey)
console.log(compValue)
console.log(newObject); // Output: { a: 3 }

// Most frequently used words in a text
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/javascript
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript
// Write a function that, given a string of text (possibly with punctuation and line-breaks), 
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

function topThreeWords(text) {
  
  let keysArray = new Array();

  // Return Empty Array if empty text
  if (text.length ===0) return keysArray;

  const newText = text.toLowerCase().replace(/[^a-z']+/g, ' ').trim()
  
  if (newText.length ===0) return keysArray;

  // Split by one or more whitespace characters
  const words = newText.split(/\s+/).filter((word) => /[a-z]/.test(word))
  if (words.length ===0) return [];
  //console.log("Words: ")
  //console.log(words)

  const wordsMap = new Map();
  words.forEach((word) => {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word)+1)
    } else {
      wordsMap.set(word, 1)
    }
  })

  const wordsArray = [...wordsMap]
  wordsArray.sort((a,b) => b[1] -a[1]);
  const sortedMapDescending = new Map(wordsArray)
  const mapSize = sortedMapDescending.size

  console.log(sortedMapDescending)

  if (mapSize>=3) {
    keysArray = [ ...sortedMapDescending.keys()].slice(0,3)
  } else {
    keysArray = [ ...sortedMapDescending.keys()].slice(0,mapSize)
  }

  return keysArray
}

// Ex2:
const text1 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
//--> ["e", "ddd", "aa"]
//console.log(topThreeWords(text1)) 

const text2 = "  //wont won't won't"
console.log(topThreeWords(text2)) 

const text3 = "  ...  "
console.log(topThreeWords(text3)) 

const text4 ="  '  "
console.log(topThreeWords(text4)) 