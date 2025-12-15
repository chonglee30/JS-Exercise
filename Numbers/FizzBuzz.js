// 
function basicFizzBuzz (number) {
    for (let i =1; i<= number; i++) {
        if ((i%3 ===0)&& (i%5 ===0)) {
            console.log(i+"Fizz Buzz")
        }
        else if (i%3 ==0) {
            console.log(i+"Fizz")
        } else if (i%5 ==0) {
            console.log(i+"Buzz")
        } else {
            console.log(i);
        }
    }
}

//basicFizzBuzz(100)

function enhancedFizzBuzz(number) {
    
    for (let i=0; i<number; i++) {
        let result=''
        if (i%3===0) result+='Fizz'
        if (i%5===0) result+='Buzz'
        //if ((i%3!==0)&&(i%5!==0)) result+=i
        //console.log(result)
        console.log(result||i)
    }
}

enhancedFizzBuzz(100)
//Fizz Buzz Efficient Coding Reverence: https://www.youtube.com/watch?v=ObWSm4GPyCI