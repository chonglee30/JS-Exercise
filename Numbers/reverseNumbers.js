// Reverse Number
// Hint: https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr

let num = 15786
let r;
let reversedNum =0;

console.log("Before Reverse Number: "+num);
while (num >0) {
    r = num%10
    reversedNum = reversedNum*10 +r
    num = Math.floor(num/10)
}
console.log("After Reverse Number: "+reversedNum);