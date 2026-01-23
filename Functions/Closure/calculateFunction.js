
// Option1: regular function
/*
function zero(operation) {
    // If 'operation' exists, it means zero is the OUTER function (left operand)
    if (operation) {
        return operation(0)
    }
    // no argument; 0 is the inner function (right operand)
    return 0;
}

function one(operation) {
    if (operation) {
        return operation(1)
    }
    return 1;
}

function two(operation) {
    if (operation) {
        return operation(2)
    }
    return 2;
}

function three(operation) {
    if (operation) {
        return operation(3)
    }
    return 3;
}

function four(operation) {
    if (operation) {
        return operation(4)
    }
    return 4;
}

function five(operation) {
    if (operation) {
        return operation(5)
    }
    return 5;
}

function six(operation) {
    if (operation) {
        return operation(6)
    }
    return 6;
}

function seven(operation) {
    if (operation) {
        return operation(7)
    }
    return 7;
}

function eight(operation) {
    if (operation) {
        return operation(8)
    }
    return 8;
}

function nine(operation) {
    if (operation) {
        return operation(9)
    }
    return 9;
}

// Operands:
// Plus Operands:
function plus(rightNum) {
    return function(leftNum) {
        return leftNum+rightNum
    }
}

// Minus Operands:
function minus(rightNum) {
    return function(leftNum) {
        return leftNum-rightNum
    }
}

// Times Operands:
function times(rightNum) {  // rightNum is 7
    return function(leftNum) { 
      return leftNum * rightNum; // This function "carries" the 7 in its backpack
    };
}

// Divide Operands:
function dividedBy(rightNum) {
    return function(leftNum) {
        return Math.floor(leftNum/rightNum)
    }
}
*/

// Option2: arrow function
// Numbers:
/*
const zero = (op) => op ? op(0) : 0;
const one = (op) => op ?  op(1) : 1;
const two = (op) => op ? op(2) : 2;
const three = (op) => op ? op(3) : 3;
const four = (op) => op ? op(4) : 4;
const five = (op) => op ? op(5) : 5;
const six = (op) => op ? op(6) : 6;
const seven = (op) => op ? op(7) : 7;
const eight = (op) => op ? op(8) : 8;
const nine = (op) => op ? op(9) : 9;

const plus = (rightNum) => (leftNum) => leftNum + rightNum;
const minus = (rightNum) => (leftNum) => leftNum - rightNum;
const times = (rightNum) => (leftNum) => leftNum * rightNum;
const dividedBy = (rightNum) => (leftNum) => Math.floor(leftNum/rightNum)
*/
// Option3: util function
const number = (num) => (f) => f ? f(num): num;
const zero = number(0)
const one = number(1)
const two = number(2)
const three = number(3)
const four = number(4)
const five = number(5)
const six = number(6)
const seven = number(7)
const eight = number(8)
const nine = number(9)

const plus = (d) => (n) => n+d 
const minus = (d) => (n) => n-d
const times = (d) => (n) => n*d 
const dividedBy = (d) => (n) => Math.floor(n/d)

console.log(seven(times(five ())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two  ())))


