
// 1. Capitalize the First Character of Each Word in the sentence
function capitalizeFirstWord(sentence) {
    const words = sentence.split(" ")
    let newSentence =[]

    for (let word of words) {
        let temp = word.charAt(0).toUpperCase()+word.slice(1)
        newSentence.push(temp)
    }   
    const capitalFirstWords = newSentence.join(' ')
    return capitalFirstWords
}

function capitalizeFirstWordShort(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
}

console.log(capitalizeFirstWord("another seahawks first down"))
console.log(capitalizeFirstWordShort("another geno interception"))

function capitalizeFirstCharSentence(sentence) {
    const words = sentence.split(" ")
    let wordArray = []
    words.forEach((word) => {
       const capWord = word[0].toUpperCase()+word.slice(1)
       wordArray.push(capWord)
    })
    console.log(wordArray.join(" "))
}

capitalizeFirstCharSentence("another jsn td")

function capitalizeFirstCharSentenceShort(sentence) {
    return sentence.split(" ").map((word) => word[0].toUpperCase()+word.slice(1))
                              .join(' ') 
}
console.log(capitalizeFirstCharSentenceShort("hello vancouver white cap"))

// 2. Capitalize only the First Character of Word in the sentence
function capitalizeOnlyFirstCharWord(sentence) {
    const words = sentence.split(" ")
    const firstWord = words[0].charAt(0).toUpperCase()+words[0].slice(1)    
    const arrayWords = []

    arrayWords.push(firstWord)
    for (let i=1; i<words.length; i++) {
        arrayWords.push(words[i])
    }
    
    return (arrayWords.join(' ')) 
}

console.log(capitalizeOnlyFirstCharWord("hello team!")) 