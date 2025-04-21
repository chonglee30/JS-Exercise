// Find the smallest and the largest array 

const nums = [24, 5, 167, 26,23, 5, 23, 453, 54, 23]
let small = nums[0]
let largest = nums[0]

// Length = 10
// Solution#1: loop through
for (let i=1; i<nums.length; i++) {
    if (nums[i] > largest) {
        largest = nums[i]
    }

    if (nums[i] < small) {
        small = nums[i]
    }
}

console.log(small+ " ," + largest)     // 5 and 453

// Solution#2: sort 
const numbers = [24, 5, 167, 26,23, 5, 23, 453, 54, 23]
// Sort an Array 

function findSmallBig (numArray) {
const sortedArray = numArray.sort((a,b) => a-b);
const smallest = sortedArray[0]
const big = sortedArray[sortedArray.length-1];
return {smallest, big}
}

console.log(findSmallBig(numbers));