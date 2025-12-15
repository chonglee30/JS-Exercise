// Print Steps of #

function printSteps(n) {
  for (let i=0; i<=n; i++) {
    console.log('#'.repeat(i))
  }
}

function printPyramid(height) {
  for (let row =1; row<=height; row++) {
    let spaces = ' '.repeat(height-row)
    let stones = '*'.repeat((2*row)-1)
    console.log(spaces+stones+spaces)
  }
}

//printSteps(10)
printPyramid(7)