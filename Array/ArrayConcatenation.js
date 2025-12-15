// Leetcode #1929 Concatenation of Array
// Feb 19, 2022 
// https://leetcode.com/problems/concatenation-of-array/
// YouTube Reference: https://www.youtube.com/watch?v=tcFx0t3p6as

let nums = [1,2,1]
// 1. Using array concat function method 
const getConcatenation = function(nums) {
  let sumNums = nums.concat(nums);
  return sumNums;
};
console.log('1. Using array concat')
console.log(getConcatenation(nums));  // [ 1, 2, 1, 1, 2, 1 ]

// 2. Concatenation using the Spread Operator ( ... )
const getArrayConcatenate = function(nums) {
  return [... nums, ... nums];
};
console.log('2. Using the Spread Operator')
console.log(getArrayConcatenate(nums));

// JS References - Array Clone References: https://www.youtube.com/watch?v=nzXc00nhbrs
// // Spread Operator - 1. Array Version
let numbers = [-4, -2, 0];
let clone = [...numbers]
console.log('3. Clone')
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