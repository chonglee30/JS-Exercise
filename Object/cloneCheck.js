// Pass by Value 
// Pass by Reference Scenarios

let obj = {
    a: 'a',
    b: 'b',
    c: {
      deep: 'try and copy me'
    }
}
let clone = Object.assign({}, obj)
let clone1 = {...obj}
let deepClone = JSON.parse(JSON.stringify(obj))
let strutClone = structuredClone(obj)

// Case1: 
obj.b = "tell me"
console.log(obj)
console.log(clone)    // no change
console.log(clone1)   // no change
console.log(deepClone)  // no change
console.log(strutClone)

// Case2:
obj.c.deep = "deep ball"
console.log(obj)
console.log(clone)    // change => shallow clone 
console.log(clone1)   // change => shallow clone
console.log(deepClone)  // no change => deep clone
console.log(strutClone)

// Case3:
clone.c.deep = 'change again'
console.log(obj)
console.log(clone)    
console.log(clone1) 
console.log(deepClone) 
console.log(strutClone)
// Object Comparison:
const user1 = {name : "nerd", org: "dev", age:35};
const user2 = {name : "nerd", org: "dev", age:35};
const eq = user1 == user2;
console.log(eq)

// Compare the contents

// Ex1:
const eq1 = JSON.stringify(user1) == JSON.stringify(user2)
console.log(eq1)  // true 
