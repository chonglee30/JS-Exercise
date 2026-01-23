/*
Implement a function that computes the difference between two lists. 
The function should remove all occurrences of elements from the first list (a) 
that are present in the second list (b). 

The order of elements in the first list should be preserved in the result.
If a = [1, 2] and b = [1], the result should be [2].
If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3]
*/

function arrayDiff(a, b) {
    for (let i=0; i<b.length; i++) {
        for (let j= a.length-1; j>=0; j--) {
            if (a[j]===b[i]) {
                a.splice(j,1)
            }
        }
    }
    return a
}

//Filter Method - JS Array
// If the callback returns true, the element is included in the new filtered array.
// If the callback returns false, the element is excluded. 
function arrayDiffFilter(a, b) {
    return a.filter((num) => !b.includes(num))
}

function arrayDiffSet(a, b) {
    let bSet = new Set(b)
    return a.filter((num) => !bSet.has(num))
}

let a = [1, 2, 2, 2, 3] 
let b = [2]
console.log(arrayDiff(a, b))
console.log(arrayDiffFilter(a, b))
console.log(arrayDiffSet(a, b))

let aa = [1, 2] 
let bb = [1]
console.log(arrayDiff(aa, bb))
console.log(arrayDiffFilter(aa, bb))
console.log(arrayDiffSet(aa, bb))