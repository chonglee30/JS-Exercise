// Reference:
// https://medium.com/better-programming/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec

// Exercise#1:
// When we call new Promise(callback), the callback function will be executed immediately.
/*
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');
*/

// Exercise#2-3:
// asynchronous code: the callback function in .then().
/*
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');
*/

// Exercise#4: Tricky PartI.
/*
console.log('start');
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('middle')
promise1.then(res => {
  console.log(2)
})
console.log('end');
*/
// Exercise#4: Tricky Part2.
/*
console.log('start')

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

console.log('middle')

fn().then(res => {
  console.log(res)
})

console.log('end')
*/

// Exercise#5: The One With a Fulfilling Promise
// Priority Concepts
// JavaScript EventLoop, there is also the concept of priority.
// Tasks with higher priority - microtasks: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
// Tasks with lower priority - macrotasks: setTimeout , setInterval and XHR .
/*console.log('start')
Promise.resolve(1).then((res) => {
  console.log(res)
})
Promise.resolve(2).then((res) => {
  console.log(res)
})
console.log('end')
*/

// Exercise#6: Microtasks mix Macrotasks
/*
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
*/

// Exercise#7:
/*
const timer1 = setTimeout(() => {
  console.log('timer1');
  
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)

const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)
*/

// Exercise#8:
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});

const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)

console.log('end');