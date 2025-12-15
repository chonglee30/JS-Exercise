// Conditions:
// Input: one integer argument: hours (# of hours)
// Output: number of seconds

// 1. Hours to Minutes: 1 hour = 60 Minutes
// 2. Minute to Second: 1 min = 60 seconds 

function howManySeconds(hours){
    const mins = hours *60
    const secs = mins *60
    return secs
}

const seconds = howManySeconds(1)
console.log(seconds+' seconds')