// Question1: Categorize New Member

// My Solution:
function openOrSenior(data){
    const newMemberCategory = [];

    for (const [age, handicap] of data) {
        if ((age >= 55) && (handicap >7) ) {
            newMemberCategory.push('Senior')
        } else {
            newMemberCategory.push('Open')
        }
    }
    //console.log(newMemberCategory)
    return newMemberCategory
}

const data1 = [[45, 12],[55,21],[19, -2],[104, 20]]
console.log(openOrSenior(data1))

const data2 = [[3, 12],[55,1],[91, -2],[53, 23]]
console.log(openOrSenior(data2))

const data3 = [[59, 12],[55,-1],[12, -2],[12, 12]]
console.log(openOrSenior(data3))

function openOrSeniorMap(data){
   const results = data.map(([age, handicap]) => (age >= 55 && handicap >7) ? 'Senior': 'Open') 
   return results; 
}

console.log(openOrSeniorMap(data1))

// Check Other Solution:
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions/javascript

function openOrSeniorV1(data) {
    // Destructure [age, handicap] directly in the map arguments
    return data.map(([age, handicap]) => {
      return (age >= 55 && handicap > 7) ? 'Senior' : 'Open';
    });
}

console.log('Version1')
console.log(openOrSeniorV1(data1))
console.log(openOrSeniorV1(data2))

// 1. Array Destructuring in Parameters ([age, handicap])
//    As .map() iterates, it looks at the current sub-array (e.g., [61, 12]).
// .map() is a loop. It goes to every single item in your array
// handing one single result (either 'Senior' or 'Open') back to the .map() machine
// 2. .map() method is used for transformation.
// go through every item in data, apply a rule, and give you back a new array of the exact same length
// turning an array of numbers into an array of strings (names of categories)
function openOrSeniorShort(data) {
    return data.map(([age, handicap]) => (age>=55 && handicap > 7) ? 'Senior': 'Open');
}

console.log('Short Version')
console.log(openOrSeniorShort(data1))
console.log(openOrSeniorShort(data2))

// Higher Order Function - using helper function
// example of Functional Iteration (looping) using a Helper Function
function openOrSeniorV2(data) {
    function determineCategorization(member) {
        return (member[0] >= 55 && member[1] >7) ? 'Senior': 'Open'
    }
    return data.map(determineCategorization)
}

console.log('Higher Order Function - helper function Version')
console.log(openOrSeniorV2(data1))
console.log(openOrSeniorV2(data2))

// Question2: The VIP Guest List
// The Goal: You have a list of guests. 
// You only want to keep the guests who are on the "VIP" list and are at least 21 years old.
// (Format: [Name, Age, isVip])

// Filter return only meeting condition
// map will return only T/F value
function vipGuestLists(data) {
    return data.filter(([Name, Age, isVip]) => {
        return (Age >=21 && isVip)
    })
}

const guests1 = [["Alice", 25, true], ["Bob", 19, true], ["Charlie", 30, false]];
console.log(vipGuestLists(guests1))
