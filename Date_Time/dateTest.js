const newDate = new Date()
console.log(newDate)
const year = newDate.getFullYear()
const month = (newDate.getMonth()+1) // start with 0
const date = newDate.getDate()

const today = month+"-"+date+"-"+year 
console.log(today)

const hours = newDate.getHours()
const minutes = newDate.getMinutes()
const seconds = newDate.getSeconds() 
const miliSeconds = newDate.getMilliseconds()
const time = hours+"-"+minutes+"-"+seconds
console.log(time)

console.log(newDate.getTime())
