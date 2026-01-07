/*Challenge 4: The Initials Creator (map + split)
The Goal: You have a list of full names. You need to return an array of initials, capitalized and separated by dots.

Input: ["john doe", "ALICE smith", "bob builder"]
Expected Output: ["J.D.", "A.S.", "B.B."] 
*/

function initializeNames(names) {
    return names.map((name) => {
        const nameArray = name.split(" ")
        let initialName = nameArray[0].toUpperCase().charAt(0)+"."+nameArray[1].toUpperCase().charAt(0)+"."
        return initialName
    })
}

const data1 = ["john doe", "ALICE smith", "bob builder"]
console.log(initializeNames(data1))

function initializeNames1(names) {
    return names.map((name) => {
        const nameArray = name.split(" ")
        const intialNames = nameArray[0][0].toUpperCase()+"."+nameArray[1][0].toUpperCase()+"."
        return intialNames
    })
}

console.log(initializeNames1(data1))

/* Challenge 5: The Price Tagger
The Goal: You have a list of products and their raw prices. You need to return a string for each, adding a currency symbol and ensuring there are always two decimal places.
Input: [ ["Laptop", 999], ["Mouse", 25.5], ["Keycap", 0.75] ]
Expected Output: ["Laptop: $999.00", "Mouse: $25.50", "Keycap: $0.75"] */

// return as Object
function priceTagger(products) {
    return products.map(([item,price]) => {
        const priceTag = "$"+price.toFixed(2)
        const product = {[item]:priceTag}
        return product
    })
}

const productLists = [ ["Laptop", 999], ["Mouse", 25.5], ["Keycap", 0.75] ]
console.log(priceTagger(productLists))

function priceTaggerV1(products) {
    return products.map(([item,price]) => {
        return `${item}: $${price.toFixed(2)}`
    })
}
console.log(priceTaggerV1(productLists))

/* Challenge 6: The Stock Alert
The Goal: You have an inventory of items. You need to find all items that are Low in Stock (less than 5) 
but are Not Discontinued.

Input: [ ["Pens", 10, false], ["Paper", 2, false], ["Ink", 0, true] ]
(Format: [ItemName, Quantity, isDiscontinued])
Expected Output: [ ["Paper", 2, false] ] */

function stockAlert(productLists) {
    return productLists.filter(([ItemName, Quantity, isDiscontinued])=> {
        if ((Quantity <5) && (!isDiscontinued)) {
            return ([ItemName, Quantity, isDiscontinued])
        }
    })
}

const products = [ ["Pens", 10, false], ["Paper", 2, false], ["Ink", 0, true] ]
console.log(stockAlert(products))

function stockAlertV1(productLists) {
    return productLists.filter(([ItemName, Quantity, isDiscontinued])=> (Quantity <5 && !isDiscontinued))
}
console.log(stockAlertV1(products))

/*Mega-Challenge
Create a function that takes the Inventory from Challenge 6, filters for the restock items, and returns a string for each like: 
"URGENT: Paper needs restocking (Only 2 left)."
*/

function stockAlertWarning(productLists) {
    return productLists.filter(([ItemName, Quantity, isDiscontinued])=> (Quantity <5 && !isDiscontinued))
                       .map(([ItemName, Quantity, isDiscontinued]) => `URGENT: ${ItemName} needs restocking (Only ${Quantity} left).`)
}

const products1 = [ ["Pens", 10, false], ["Paper", 2, false], ["Ink", 0, true], ["Organizer", 1, false] ]
console.log(stockAlertWarning(products))
console.log(stockAlertWarning(products1))

// Object Destructing:
// The Challenge: The Playwright Test Reporter
// The Goal: You are building a custom reporter. You have an array of test result objects. 
// You need to find all tests that failed, 
// then return a list of error messages that include the test title and how long it took.

// Object Destructuring
// The big difference is that with objects, the order doesn't matter, but the names must match the keys in the object.

const testResults = [
    { title: "Login Page", status: "passed", duration: 120, error: null },
    { title: "Checkout Flow", status: "failed", duration: 450, error: "Timeout after 5000ms" },
    { title: "API Integration", status: "passed", duration: 80, error: null },
    { title: "Search Bar", status: "failed", duration: 200, error: "Element not found" }
  ];

function generateTestResults(results) {
    const tempResults =
    results.filter(({title, status, duration, error}) =>{
        if (status ==='failed') {
            return ({title, duration, error})
        }
    })
    
    return tempResults.map(({title, duration, error}) => {
        return `Error Message: ${error} with ${title} and took ${duration}ms`
    })
}

console.log(generateTestResults(testResults))

function generateTestResultsShort(results) {
    return results.filter(({status}) => status === 'failed')
           .map(({title, duration, error}) => { 
            return `Test ${title} failed with ${error} message and took ${duration}ms`
        })            
}

console.log(generateTestResultsShort(testResults))

/*Modify the code above to also include a "Warning" if a test passed but took longer than 100ms.
Hint: You would change the .filter() to find slow passing tests, and change the .map() to say "⚠️ Warning: [Title] was slow."
*/

function generateTestResultsFailWarning(results) {
    return results.filter(({status, duration}) => (status === 'failed') || (status ==='passed' && duration >100)) 
                  .map(({title, status, duration, error}) => {
                       if (status === "failed") {
                        return `Test ${title} failed with ${error} message and took ${duration}ms` 
                       } else if (status === "passed") {
                         return `Warning: ${title} was slow and took ${duration}ms`
                       }
                  })  
}


console.log(generateTestResultsFailWarning(testResults))