
const arrayOfNumbers = [12, 23, 11, 0, 94]

// 1-1. Start with 0 Default Value
const sum1 = arrayOfNumbers.reduce((accumulator, currentValue) => {
    //console.log("accumulator: "+accumulator)
    //console.log("currentValue: "+currentValue)
    return accumulator += currentValue
})
console.log(sum1)  // 140 

// 1-2. Start with 0 on second parameter in reduce method
const totalPrice = arrayOfNumbers.reduce((total, currentPrice) => {
    console.log(`${total} + ${currentPrice} = ${total + currentPrice}`)
    return total + currentPrice
},0)
console.log('Total Price: '+totalPrice)
// Reduce -> only single value
// return statement update total every times 
// current price to teh total
// initialize accumulator


// 2. Start with 1000 Default Value
const sum2 = arrayOfNumbers.reduce((accumulator, currentValue) => {
    //console.log("accumulator: "+accumulator)
    //console.log("currentValue: "+currentValue)
    return accumulator += currentValue
}, 1000)
console.log(sum2) // 1140

// 3. for of 

let sum =0 
for (const currNum of arrayOfNumbers) {
    sum+= currNum
}

console.log(sum) //140
// Reference reduceRight -> back to the front 


const result1 = arrayOfNumbers.reduce((accumulator, currentValue, index, array)=> array[index -1] =array[index -1] *2  )
console.log(result1)
