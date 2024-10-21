//Numbers 
let a = 34;
console.log(a, typeof a);// it returns 34, number
let b = a.toString();
console.log(b, typeof b);// it returns 34, string

let c = Number(5);
console.log(c, typeof c);// it returns 5, number

let d = c.toFixed(2);
console.log(d, typeof d);// it returns 5.00, string

let f = 56.7846;
let g = f.toFixed(3);
console.log(g, typeof g);// it returns 56.785, string

let h = f.toPrecision(3);//totql 3 digits
console.log(h, typeof h);// it returns 56.8, string

let i = f.toLocaleString("ar-EG");//egypt representation.
console.log(i, typeof i);// it returns ٥٦٫٧٨٤٦, string

let j = f.toExponential(2);
console.log(j, typeof j);// it returns 5.68e+1, string

let k = f.valueOf();
console.log(k, typeof k);// it returns 56.7846, number

let l = Number.MAX_SAFE_INTEGER;
console.log(l, typeof l);// it returns 9007199254740991, number

let m = Number.MAX_VALUE;
console.log(m, typeof m);// it returns 1.7976931348623157e+308, number

let e = parseInt('34.56');
console.log(e, typeof e);// it returns 34, number

//math object
let n = Math.PI;
console.log(n, typeof n);// it returns 3.141592653589793, number

let o = Math.E;
console.log(o, typeof o);// it returns 2.718281828459045, number

let p = Math.round(4.7);
console.log(p, typeof p);// it returns 5, number

let q = Math.ceil(4.4);
console.log(q, typeof q);// it returns 5, number

let r = Math.floor(4.7);
console.log(r, typeof r);// it returns 4, number

let s = Math.trunc(4.7);
console.log(s, typeof s);// it returns 4, number

//difference between foloor and trunc is that floor always returns the lower value and trunc returns the integer part of the number.
//varies when -ve numbers are involved.

let t = Math.abs(-4.7);
console.log(t, typeof t);// it returns 4.7, number

let u = Math.sqrt(64);
console.log(u, typeof u);// it returns 8, number

let v = Math.cbrt(64);
console.log(v, typeof v);// it returns 4, number

let w = Math.pow(2, 3);
console.log(w, typeof w);// it returns 8, number

let x = Math.min(0, 150, 30, 20, -8, -200);
console.log(x, typeof x);// it returns -200, number

let y = Math.max(0, 150, 30, 20, -8, -200);
console.log(y, typeof y);// it returns 150, number

let z = Math.random();
console.log(z, typeof z);// it returns a random number between 0 and 1, number

let aa = Math.floor(Math.random() * 10);//Math.random gives a number between 0 and 1, so multiplying it by 10 gives a number between 0 and 9 and floor makes it number not decimal.
console.log(aa, typeof aa);// it returns a random number between 0 and 9, number

let ab = Math.floor(Math.random() * 10) + 1;//Math.random gives a number between 0 and 1, so multiplying it by 10 gives a number between 0 and 9 and floor makes it number not decimal. Adding 1 makes it between 1 and 10.
console.log(ab, typeof ab);// it returns a random number between 1 and 10, number

