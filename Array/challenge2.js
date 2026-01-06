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
                       .map(([ItemName, Quantity, isDiscontinued]) => {return `URGENT: ${ItemName} needs restocking (Only ${Quantity} left).`})
}

const products1 = [ ["Pens", 10, false], ["Paper", 2, false], ["Ink", 0, true], ["Organizer", 1, false] ]

console.log(stockAlertWarning(products))
console.log(stockAlertWarning(products1))