//Date and Times
let a = new Date();
console.log(a, typeof a);// it returns Tue Oct 08 2024 15:44:41 GMT+0530 (India Standard Time) 'object'

let b = new Date('8-4-2003 04:54:08');
console.log(b, typeof b);// it returns Mon Aug 04 2003 04:54:08 GMT+0530 (India Standard Time), object

let c = new Date('June 14 1903');
console.log(c, typeof c);// it returns Sun Jun 14 1903 00:00:00 GMT+0530 (India Standard Time), object

let d = new Date('8/4/2003');
console.log(d, typeof d);// it returns Mon Aug 04 2003 00:00:00 GMT+0530 (India Standard Time), object

let e = d.toString();
console.log(e, typeof e);// it returns Mon Aug 04 2003 00:00:00 GMT+0530 (India Standard Time), string

let f = new Date(2021, 6,10);
console.log(f, typeof f);// it returns Sat Jul 10 2021 00:00:00 GMT+0530 (India Standard Time), object

//also one day off issue in stack over flow
let g = new Date(0);
console.log(g, typeof g);// it returns Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time), object
//because of the time zone issue, it is showing 5:30 instead of 0:00
//also, the time is in milliseconds from 1970, 1st january.

let h = Date.now();//unix timestamp
console.log(h, typeof h);// it returns 1633683800000, number

let i = new Date();
let j = i.getTime();
console.log(j, typeof j);// it returns 1633683800000, number

let k = i.getFullYear();
console.log(k, typeof k);// it returns 2021, number

let l = new Date(1633683800000);
console.log(l, typeof l);// it returns Tue Oct 08 2024 15:43:20 GMT+0530 (India Standard Time), object

//Methods of date
let m = i.getDay();
console.log(m, typeof m);// it returns 2, number

let n = i.getDate();
console.log(n, typeof n);// it returns 8, number

let o = i.getMinutes();
console.log(o, typeof o);// it returns 44, number

let p = i.getSeconds();
console.log(p, typeof p);// it returns 41, number

let q = i.getHours();
console.log(q, typeof q);// it returns 15, number

let r = i.getTime();
console.log(r, typeof r);// it returns 1633683800000, number

let s = i.getMilliseconds();
console.log(s, typeof s);// it returns 0, number

let t = i.getMonth()+1;
console.log(t, typeof t);// it returns 9, number

let u = i.getUTCDate();
console.log(u, typeof u);//it returns 8, number

let v = i.getDay();
console.log(v, typeof v);//it returns 2, number

let w = Intl.DateTimeFormat("en-US").format(i);
console.log(w, typeof w);//it returns 10/8/2024, string

let x = Intl.DateTimeFormat("en-GB").format(i);
console.log(x, typeof x);//it returns 08/10/2024, string

let y = Intl.DateTimeFormat("default", {month:"long"}).format(i);
console.log(y, typeof y);//it returns October, string

let z = Intl.DateTimeFormat("default", {month:"short"}).format(i);
console.log(z, typeof z);//it returns Oct, string