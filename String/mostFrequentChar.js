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
