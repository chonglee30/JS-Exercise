// Categorize New Member

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
function openOrSeniorShort(data) {
    return data.map(([age, handicap]) => (age>=55 && handicap > 7) ? 'Senior': 'Open');
}

console.log('Short Version')
console.log(openOrSeniorShort(data1))
console.log(openOrSeniorShort(data2))