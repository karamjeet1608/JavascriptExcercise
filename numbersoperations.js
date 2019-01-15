var num1 = 20;
var num2 = 30;
var num3 = 40;
// addition
var add = num1+num2+num3;
// subtraction
var subt = num3-num2;
var subtract = num1-num2;
// multiplication
var multi = num1 * num2 * num3;
// division
var division = num3/num2;
var divi = num1/num2;
console.log("the sum is:" + add);
console.log("the difference is:" + subt);
console.log("the difference is:" + subtract);
console.log("the multiplication is:" + multi);
console.log("the division is:" + division);
console.log("the division is:" + divi);
//type conversion
//tostring
let value = true;
console.log(typeof value);
value = toString(value);
console.log(typeof value);
//tonumber
let str = "1234";
console.log(typeof str);
str = Number(typeof str);
console.log(typeof str);
//Excercise
let a = "" + 1 + 0;
let b = "" - 1 + 0;
let c = true + false;
let d = 6 / "3";
let e = "2" * "3";
let f = 4 + 5 + "px";
let g = "$" + 4 + 5;
let h = "4" - 2;
let i = "4px" - 2;
let j = 7 / 0;
let k = "  -9  " + 5;
let l = "  -9  " - 5;
let m = null + 1;
let n = undefined + 1;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
//unary + 
let o = +1;
console.log(o);
//exponentiation
p = 2**3;
console.log(p);
//increment/decrement
var q = 1;
q++;
console.log(q);
q--;
console.log(q);
var r =1;
--r;
console.log(r);
++r;
/* Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea. */
//boolean operators
console.log(r);
var s = 6>3;
console.log(s);
s= 2>3;
console.log(s);
//String comparison
t= "z">"a";
console.log(t);
t = "a">"z";
console.log(t);
//strict operator
console.log(0 === false);
console.log(0   == false);



