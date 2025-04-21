// Leetcode #1929 Concatenation of Array
// Feb 19, 2022 
// https://leetcode.com/problems/concatenation-of-array/
// YouTube Reference: https://www.youtube.com/watch?v=tcFx0t3p6as

let nums = [1,2,1]
var getConcatenation = function(nums) {
  let sumNums = nums.concat(nums);
  return sumNums;
};
console.log(getConcatenation(nums));

const getArrayConcatenate = function(nums) {
  return [... nums, ... nums];
};
console.log(getArrayConcatenate(nums));

// JS References - Array Clone References: https://www.youtube.com/watch?v=nzXc00nhbrs
// // Spread Operator - 1. Array Version
let numbers = [-4, -2, 0];
let clone = [...numbers]
console.log(clone);
// numbers[1]=-1;
// console.log(numbers);
// console.log(clone); 

let clone1 = numbers.slice();
console.log(clone1); 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1);
console.log(myBest);

// Easily clone an array in javascript
// https://www.youtube.com/watch?v=nzXc00nhbrs

// Spread Operator - 2. Object Version
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);