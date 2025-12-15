// Duplicates in Array coding challenge

             //  0  1   2   3   4  5  6   7   8   9   10  11  12  13  14 15  16 17  18 19 20
const numbers = [2, 34, 54, 34, 5, 8, 12, 21, 32, 21, 34, 55, 43, 12, 2, 34, 55, 2, 2, 55, 2]

// #1. Find Duplicates in an array using Set - must return unique array
function findDuplicates(array) {
    let duplicates = [];
    const uniqueSet = new Set()

    for (let num of array) {
        if (!uniqueSet.has(num)) {
            uniqueSet.add(num)
        } else {
            if (!duplicates.includes(num)) {
                duplicates.push(num)
            }
        }
    }
    return duplicates.sort((a,b) => a-b)
}

console.log('#1. Find Duplicate Numbers in an array using Set')
console.log(findDuplicates(numbers))

// #2. Find Duplicates in an array using Object - check with hasOwnProperty 
function getDuplicateNumbers(array) {
    const duplicateObj = {}
    array.forEach((number) => {
        if (!duplicateObj.hasOwnProperty(number)) {
            duplicateObj[number] = 1
        } else {
            duplicateObj[number]++
        }
    })

    const duplicateArray =  Object.entries(duplicateObj)
                                   .filter(([key,value]) => value >1)
                                   .map(([key,value]) => key)
                                   .map(Number)
    return duplicateArray
}   

console.log('#2. Find Duplicate Numbers in an array using Object - check with hasOwnProperty')
console.log(getDuplicateNumbers(numbers))

// #3. Find the Highest Duplicate Number in an array 
// using Object - check with hasOwnProperty 
function findHighestDuplicateFrequency(array) {
    let duplicatesNum = { dupNum : {}}
    array.forEach(number => {
        if (!duplicatesNum.hasOwnProperty(number)) {
            duplicatesNum[number] = 1
        } else {
            duplicatesNum[number]++; 
            if (!duplicatesNum.dupNum.hasOwnProperty(number)) {
                duplicatesNum.dupNum[number]=1                
            } else {
                duplicatesNum.dupNum[number]++
            }
        } 
    })

    //console.log('2 duplicate '+duplicatesNum.dupNum['2']+' times')
    const highestDupValuePair = 
        Object.entries(duplicatesNum.dupNum)
              .reduce((maxPair, currentPair) => {
                if (currentPair[1] > maxPair[1]) {
                    return currentPair 
                }
                else { return maxPair }      
        })  
    console.log('#3. Highest Duplicate Value: ',highestDupValuePair[1])    
    return highestDupValuePair[0]
}

console.log('Highest Duplicate Number in an array: '+findHighestDuplicateFrequency(numbers))

// #4 Find the Index of Duplicates
function findDuplicatesIndex(array) {
    let duplicatesNum = { dupNum : {}}
    array.forEach((number, index) => {
        if (!duplicatesNum.hasOwnProperty(number)) {
            duplicatesNum[number] = 1
        } else {
            duplicatesNum[number]++; 
            if (!duplicatesNum.dupNum.hasOwnProperty(number)) {
                duplicatesNum.dupNum[number]= [index]             
            } else {
                duplicatesNum.dupNum[number].push(index)
            }
        } 
    })
    return duplicatesNum;
}

console.log('#4. Find Index of Duplicates')
console.log(findDuplicatesIndex(numbers))
console.table(findDuplicatesIndex(numbers))

console.log(findDuplicatesIndex(numbers).dupNum['2'])
console.log(findDuplicatesIndex(numbers).dupNum)
console.log(findDuplicatesIndex(numbers))

// #5 Find the maxEntry value from findDuplicatesIndex function
const maxEntry = Object.entries(findDuplicatesIndex(numbers).dupNum).reduce((maxPair, currPair) => {
    const currLength = currPair[1].length 
    const maxLength = maxPair[1].length 

    if (currLength > maxLength) return currPair 
    else { return maxPair}
});

console.log('#5. Max Entry Value from findDuplicatesIndex')
console.log('Key Number:',maxEntry[0])
console.log('Largest Length:', maxEntry[1].length)

// #6. Find the Index of all array numbers
function findIndexOfArrayNumber(numbers) {
    const objectArray = {}
    numbers.forEach((number, index)=> {
        if (!objectArray.hasOwnProperty(number)) {
            objectArray[number] = [index]
        } else {
            objectArray[number].push(index)
        }
    })
    return objectArray
}

console.log('#6. Index of all array numbers')
console.log(findIndexOfArrayNumber(numbers))

// Reference Site
// https://www.youtube.com/watch?v=rE4Y-3WQQZ0



// #7 Remove Duplicates From Array
// 1. Sort Array
// 2. Remove using Set
function removeDuplicatesNumberUsingSet(array) {
   array.sort((a,b) => a-b );
   let set = new Set(array)
   const noDupArray = Array.from(set)
   return noDupArray
}

const array = [3,2,1, 9, 1, 3, 5, 11, 1, 2, 11,  7, 11]
console.log('#7 Remove Duplicates From Array using Set')
console.log(removeDuplicatesNumberUsingSet(array))

// #8 Remove - Duplicate numbers backward with splice method
function removeDuplicatesNumberBackward(array) {
    array.sort((a,b) => a-b );

    // Iterate backward
    for (let i = array.length - 1; i >= 1; i--) {
        // Compare current element with the previous element
        if (array[i] === array[i - 1]) {
            array.splice(i, 1); // Remove the currently pointing duplicate element (array[i])
        }
    }
    return array
}
const dataSplice = [10, 5, 2, 2, 2, 10, 8, 5, 1];
console.log('#8 Remove Duplicate numbers backward with splice method')
console.log(removeDuplicatesNumberBackward(dataSplice));

// #9. Remove - duplicate character from string
function removeDuplicateChar(str) {
    const charArray = str.toLowerCase().split('')
    charArray.sort()
    for (let i= charArray.length-1; i>=1; i--) {
        if (charArray[i] === charArray[i-1]) {
            charArray.splice(i,1)
        }
    }
    const noDupStr = charArray.join('')
    return noDupStr
}

console.log('#9 Remove Duplicate characters from String backward with splice method')
console.log(removeDuplicateChar("Raiders"))

// #10. Remove same key of array of object 
function removeDuplicateIdArrayObjects(arrayObject) {
    const uniqueSet = new Set();
    const uniqueArrayObject = []
    arrayObject.forEach((obj)=> {
        if (!uniqueSet.has(obj.id)) {
            uniqueSet.add(obj.id)
            uniqueArrayObject.push(obj)
        }
    })
    return uniqueArrayObject
}

const arrayObject = [
    { id: 101, name: 'A' },
    { id: 102, name: 'B' },
    { id: 101, name: 'C' },
    { id: 103, name: 'D' },
];

console.log('#10. Remove same key of array of object to make unique array of object')
console.log(removeDuplicateIdArrayObjects(arrayObject))
