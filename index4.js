{
console.log(a); // undefined
console.log(b); // cannot access 'b' before initialization
console.log(c);  // same as b

var a = 10;
let b = 30;
const c = 40;

console.log(a);  // 10
console.log(b);  // 30
console.log(c);  // 40
}