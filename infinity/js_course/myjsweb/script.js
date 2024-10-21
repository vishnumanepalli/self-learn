// alert('Hi');
console.log('Hello'); //warn, error, table
//(method) Console.log(...data: any[]): void

console.table({ a: 1, b: 2 });

console.group('Group');
console.log('Hello');
console.log('Hello');
console.groupEnd();

const styles = 'padding: 10px; color: white; background-color: black;';

console.log('%cHello', styles);

/* or  ghoiure
Multi line comment
rth

trh

th
*/

let d;
console.log(d);// it returns undefined
d= 4;
console.log(d);

let a = 30;
console.log(a);

console.log(b); // it returns undefined not error due to hoisting
var b =30;

console.log(c); // it is not defined
let c = 30;

c = 31;
console.log(c);

const x =1;
x=2;//assignment to constant variable is not allowed
console.log("x",x);
