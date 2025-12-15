// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// alert(eq); // gives false

const number = 100
const string = "Jay"
let obj1 = {
  value: "obj1-a"
}
let obj2 = {
  value: "obj2-b"
}
let obj3 = obj2;

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj2.value = "change"
    obj1 = obj2;
    obj1.value = "change again by obj1"
    console.log('inside:', obj1)
    obj2.value = "c";
}

console.log('#1 ------ Before call change function ----------')
console.log('number: '+number);  // 100 - Right 
console.log('string: '+string);  // Jay - Right
console.log('obj1 - value: '+obj1.value); // a - Right => no change
console.log('obj2 - value: '+obj2.value); // changed because of

change(number, string, obj1, obj2);

console.log('#1 ------ After call change function ----------')
console.log('number: '+number);  // 100 - Right 
console.log('string: '+string);  // Jay - Right
console.log('obj1 - value: '+obj1.value); // a - Right
console.log('obj2 - value: '+obj2.value);

// Case1:
var a = 5;
var b = a;
b++;
console.log(a)  // 5
console.log(b)  // 6 

// Case2:
let obj11 = {name: 'Yao', password: '123'};
let obj12 = 'address in memory'
obj12 = obj11

obj12.password = 'easypeasy';
console.log('------------- After only change obj12 -------------')
// // Both passwords changed because of pass by reference
console.log(obj11);
console.log(obj12);

let c = [1,2,3,4,5]
let d = [].concat(c);
let e =d;
console.log('------------- Before modify Array Reference -------------')
console.log(c);
console.log(d);
console.log(e);

console.log('------------- Intermediate modify d only Array Reference -------------')
d.push(123712378327812787812)
console.log(d);
console.log(e);

e[2] =23
console.log('------------- After modify e only Array Reference -------------')
console.log(c);
console.log(d);
console.log(e);
