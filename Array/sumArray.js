// Two Sum 
// #1. Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// #2. Input: nums = [3,2,4], target = 6  Output: [1,2]
// #3. Input: nums = [3,3], target = 6    Output: [0,1]

// 1. Two For Loops:
const twoSumTwoLoop = function(nums, target) {
  const sumIndexes = []
  for (let i=0; i<nums.length-1; i++) {
    for (let j=1; j<nums.length; j++) {
      if (nums[i]+nums[j] === target) {
        sumIndexes.push(i)
        sumIndexes.push(j)
      }
    }
  }
  return sumIndexes
};

const twoSumMap = function(nums, target) {
  const sumIndexes = []
  const map = new Map()

  nums.forEach((num, index) => {
    let other = target - num 
    if (!map.has(other)) {
      map.set(num, index)
    } else {
        if (!map.has(num)) map.set(num, index)
           sumIndexes.push(map.get(other))
           sumIndexes.push(map.get(num))
    }
  })
  return sumIndexes
}

const twoSum = function(nums, target) {
  const map = new Map()
  for (let i=0; i<nums.length; i++) {
    let otherValue = target - nums[i]    
    if (map.get(otherValue)!== undefined) return [map.get(otherValue), i]
    map.set(nums[i], i)
  }
};

const nums1 = [2,7,11,15] 
const target1 = 9
console.log(twoSumMap(nums1,target1))
console.log(twoSum(nums1,target1))

const nums2 = [3,2,4] 
const target2 = 6 
console.log(twoSumTwoLoop(nums2,target2))
console.log(twoSum(nums2,target2))

const nums3 = [3,3] 
const target3 = 6 
console.log(twoSumTwoLoop(nums3,target3))
console.log(twoSum(nums3,target3))

// Reference Youtube: https://www.youtube.com/watch?v=iqPB55JuNTI
