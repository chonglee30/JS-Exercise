// Find Intersection 

const groupA = ['Alice', 'Bob', 'Charlie', 'David'];
const groupB = ['Charlie', 'Eve', 'Alice', 'Frank'];

function findIntersection(groupA, groupB) {
  const setA = new Set(groupA)

  const intersectPersons = groupB.reduce((accu, currentPerson)=> {
    if (setA.has(currentPerson)) {
      accu.add(currentPerson)
    }
    return accu
  }, new Set())
  return [...intersectPersons]
}

console.log(findIntersection(groupA, groupB))

// Use Filter: shorter code version
function findIntersectionV1(groupA, groupB) {
  const setA = new Set(groupA)
  return groupB.filter(person => setA.has(person))
}
console.log(findIntersectionV1(groupA, groupB))

// Case Insensitive Version:
function findIntersectionCaseInsensive(groupA, groupB) {
  const setA = new Set(groupA.map(person => person.toLowerCase())) 
  return groupB.filter(person => setA.has(person.toLowerCase()))
} 

const groupA1 = ['Alice', 'Bob', 'Charlie'];
const groupB1 = ['ALICE', 'Eve', 'bob', 'Frank'];

console.log(findIntersectionCaseInsensive(groupA1, groupB1))