const persons = [{
  "name": "Joe",
  "age": 17
}, {
  "name": "Bob",
  "age": 17
},{
  "name": "Carl",
  "age": 35
}]

// A. Return Unique Ages
// 1. Using Map, Sets and Spread Operator
const allAges = persons.map(person => person.age)
console.log(allAges) // [ 17, 17, 35 ]

const people17 = persons.filter(person => person.age === 17)
console.log(people17) // 

const uniquePersons = [... new Set(persons.map(person => person.age))]
console.log('Unique Ages')
console.log(uniquePersons)

// 1. map with callback return the age property value from each object and put them in the array 
//    => [ 17, 17, 35 ] 
// 2. Pass returned array into Set => Set(2) { 17, 35 }
// 3. spread operator: convert set to array 

// 2. Using Map, Sets and Array.from 
// instead of spread operator, replace with Array.from
const uniquePersons1 = Array.from(new Set(persons.map(person => person.age)))
console.log(uniquePersons1)
// Array.from() lets you create Array s from: iterable objects (objects such as Map and Set ); 
// or, if the object is not iterable, array-like objects 
// (objects with a length property and indexed elements).

// 3. Using Map and Filter 
// 3-1 regular function
const uniquePersons2 
= persons.map(person => person.age)
         .filter(function(value, index, self) {
              return self.indexOf(value) === index
              //console.log(value)
              //console.log(index)
              //console.log(self)
              //console.log(self.indexOf(value))
          })                    
console.log(uniquePersons2)

// 3-2 arrow function
const uniquePersons3
= persons.map(person => person.age)
         .filter((value, index, self) => self.indexOf(value) === index)                    
console.log(uniquePersons3)
// value: value of the array returned from map 
// index: index of the element of the array returned fro mmap 
// self: array - returned by map 
// indexof -> return the index of the 1st element of a value 


