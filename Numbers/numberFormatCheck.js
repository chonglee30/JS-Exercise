function numberFormatCheck(str) {
    if (isNaN(str)) {
        console.log('not number')
    } else console.log('number')

    if (typeof str !== 'number')  {console.log('not true number')
    } else console.log('it is number')

    const num1 = "00000"
    console.log("Length of num:", num1.length)
}

const str1 = "1e1"
numberFormatCheck(str1)



