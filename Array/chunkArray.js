// Divide an array into smaller chunks of a specified size

function divideArrayBySize(array, size) {
    let chunkArray = []
    for (let i=0; i<array.length; i+=size) {
        //console.log(i)
        //console.log(i+size)

        chunkArray.push(array.slice(i, i+size))
    }
    //console.log(chunkArray)
    return chunkArray
}

const array = ["Apple", "Banana", "Kiwi", "Watermelon", "Grapes", "Blueberry", "Strawberry", "Mango"]
console.log(divideArrayBySize(array, 2))
console.log(divideArrayBySize(array, 3))