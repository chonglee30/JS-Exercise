const products = [
    {name: "Laptop", price: 500, color: "White"},
    {name: "IPHone", price: 1500, color: "Gold"},
    {name: "IPad", price: 1000, color: "Blue"},
    {name: "MacbookAir", price: 1400, color: "Grey"},
]

const discounts1 = products.map((product) => {
    return product.price *0.5
})
console.log('50% discount prices only')
console.log(discounts1)  // [ 250, 750, 500, 700 ]

const discounts2 = products.map((product) => {
    return {
        ...product,  // copy all properties from the original product object
        price: product.price * 0.5  // overwrite the price only 
    }
})
console.log('all products including 50% discount prices')
console.log(discounts2) // all product including 50% discounts
