const arr = [1, 2, 3, 4]; //array
// arr = [1, 2, 3, 4, 5]; //assignment to constant variable is not allowed
console.log('arr', arr);
arr.push(5); // it is allowed
console.log('arr', arr);
arr.concat([6, 7, 8]); // it is allowed
console.log('arr', arr);
arr.fill(0); // it is allowed
console.log('arr', arr);

const person = {
  //object
  name: 'John',
  age: 30,
};
console.log('person', person);
// person = {
//   name: 'Doe',
//   age: 31,
// }; //assignment to constant variable is not allowed
person.name = 'Doe'; // it is allowed
console.log('person', person);
person.email = 'a.gmail.com'; // it is allowed

console.log('person', person);

let a = 1,
  b,
  c = 30;
console.log(a); // it returns undefined
console.log(b); // it returns undefined
console.log(c); // it returns 30

const x = null;
console.log(x, typeof x); // it returns null, object

const y = undefined;
console.log(y, typeof y); // it returns undefined, undefined

const e = 5,
  f = 90;
console.log(e); // it returns 5
console.log(f); // it returns 90

const id = Symbol('id');
console.log(id, typeof id); // it returns Symbol(id), symbol

const bigint = 1234567890123456789012345678901234567890n;
console.log(bigint, typeof bigint); // it returns 1234567890123456789012345678901234567890n, bigint

const arr1 = [1, 2, 3, 4];
console.log(arr1, typeof arr1); // it returns [1, 2, 3, 4], object
//any reference type is object

function add(a, b) {
  return a + b;
}
console.log(add, typeof add); // it returns [Function: add], function

const fun = (a,b) => {return a-b}
console.log(fun, typeof fun); // it returns [Function: fun], function
console.log(fun(5,3)); // it returns 2

//type cating
//string to number
let g = '5';
console.log(g, typeof g); // it returns 5, string
g = parseInt(g);
console.log(g, typeof g); // it returns 5, number

let h = '5';
console.log(h, typeof h); // it returns 5, string
h = +h;
console.log(h, typeof h); // it returns 5, number

let i = '5';
console.log(i, typeof i); // it returns 5, string
i = Number(i);
console.log(i, typeof i); // it returns 5, number

let l = '5.5';
console.log(l, typeof l); // it returns 5.5, string
l = parseFloat(l);
console.log(l, typeof l); // it returns 5.5, number

//NAN
let p = 'vishnu';
console.log(p, typeof p); // it returns vishnu, string
p = parseInt(p);
console.log(p, typeof p); // it returns NaN, number


//number to string
let j = 5;
console.log(j, typeof j); // it returns 5, number
j = j.toString();//j is number but only objects have methods. js converts it to object using wrapper class
console.log(j, typeof j); // it returns 5, string

let k = 5;
console.log(k, typeof k); // it returns 5, number
k = String(k);
console.log(k, typeof k); // it returns 5, string

//number to boolean
let m = 1;
console.log(m, typeof m); // it returns 1, number
m = Boolean(m);//anything other than 0 is true
console.log(m, typeof m); // it returns true, boolean

let n = 0;
console.log(n, typeof n); // it returns 0, number
n = Boolean(n);
console.log(n, typeof n); // it returns false, boolean

let o = -1;
console.log(o, typeof o); // it returns -1, number
o = Boolean(o);
console.log(o, typeof o); // it returns true, boolean

//Nan occurance
console.log(0/0); // it returns NaN
console.log(1/0); // it returns Infinity
console.log(-1/0); // it returns -Infinity
console.log(Math.sqrt(-1)); // it returns NaN
console.log(Math.log(-1)); // it returns NaN
console.log(1+NaN)// it returns NaN
console.log(undefined+undefined)// it returns NaN;
console.log('foo'/3)// it returns NaN;
