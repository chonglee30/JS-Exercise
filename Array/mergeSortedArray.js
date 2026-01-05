// Merge two sorted array into one sorted array 
//nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3

function sortTwoArrays(nums1, nums2) {
    let mergedArray = []
    const num1Length = nums1.length;
    const num2Length = nums2.length;
    let i =0; j=0;

    while ((i<num1Length) && j< (num2Length)) {
        if (nums1[i] <= nums2[j]) {  
            mergedArray.push(nums1[i])
            i++
        }  else { 
            mergedArray.push(nums2[j])
            j++
        }
    }

    // fill the rest
    while (i < num1Length) {
       mergedArray.push(nums1[i])
       i++ 
    }

    while (j < num2Length) {
        mergedArray.push(nums2[j])
        j++
    }
    console.log(mergedArray)
};

const nums1 = [1,2,3] 
const nums2 = [2,5,6]
sortTwoArrays(nums1, nums2)

const nums11 = [1]
const nums12 = []

sortTwoArrays(nums11, nums12)