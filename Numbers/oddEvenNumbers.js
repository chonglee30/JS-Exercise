const nums = [24, 5, 167, 26, 23, 5, 23, 453, 54, 23]
const getEvenNumbers = (nums) => {
    const evenNumbers =
    nums.filter(num => num %2 ==0)
    return evenNumbers;
}

console.log(getEvenNumbers(nums));

// Check For Sum of Array:
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);