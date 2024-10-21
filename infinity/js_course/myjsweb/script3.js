//operators
//arithmetic operators
// + - * / % ++ --
//comparison operators
// == === != !== > < >= <=
let x = 2 == 2; //type coersion is done
console.log(x); // it returns true

let y = 2 == '2'; //type coersion is done
console.log(y); // it returns true

let z = 2 === '2'; //type coersion is not done
console.log(z); // it returns false

//Type Coersion
let a = 2 + '2'; //number is converted to string
console.log(a); // it returns 22

let b = 2 + 2 + '2'; //number is converted to string with left to right associativity
console.log(b); // it returns 42

let c = '2' + 2 + 2; //number is converted to string with left to right associativity
console.log(c); // it returns 222

let g = 5 + null; //null is converted to 0
console.log(g); // it returns 5

let h = 5 + undefined; //undefined is converted to NaN
console.log(h); // it returns NaN

let d = 3 - '2'; //string is converted to number
console.log(d); // it returns 1

let e = 3 - '2a'; //string is converted to number
console.log(e); // it returns NaN

let f = 3 * '2'; //string is converted to number
console.log(f); // it returns 6

//Template literals
let name = 'Vishnu';
let age = 21;
let sentence = `My name is ${name} and I am ${age} years old.`;//backticks are used
console.log(sentence); // it returns My name is Vishnu and I am 21 years old.

//String Properties and Methods
//strings are immutable
let str = 'Hello World';//str = new String('Hello World'); actual happening with hep of wrapper class
console.log(str); // it returns Hello World
console.log(str.length); // it returns 11
console.log(str.toLowerCase()); // it returns hello world
console.log(str.toUpperCase()); // it returns HELLO WORLD
console.log(str.substr(1, 4)); // it returns ello
console.log(str.substring(1, 4)); // it returns ell
console.log(str.substring(4));// it returns 'o World'
console.log(str.slice(1, 4)); // it returns ell
//slice and substring are same but slice can take negative values

console.log(str[0]); // it returns H access by index
console.log(str.charAt(0)); // it returns H access by charAt
console.log(str.indexOf('o')); // it returns 4
console.log(str.__proto__); // it returns [String: 'Hello World'] access by prototype
console.log(str.trim()); // it returns Hello World
console.log(str.startsWith('H')); // it returns true
console.log(str.endsWith('d')); // it returns true
console.log(str.includes('o')); // it returns true
console.log(str.split(' ')); // it returns [ 'Hello', 'World' ]
console.log(str.replace('World', 'Universe')); // it returns Hello Universe
console.log(str.includes('llo')); // it returns true
console.log(str.includes("xxx")); // it returns false
console.log(str.repeat(2)); // it returns Hello WorldHello World
s[0] = 'h';//strings are immutable
console.log(str); // it returns Hello World

let str1 = new String('Hello World');
console.log(str1); // it returns [String: 'Hello World']
