"use strict";
// boolean
var flg = false;
// number
var decimal = 256;
var hex = 0xfff;
var binary = 3;
var octal = 83;
console.log(decimal, hex, binary, octal);
// string
var color = 'white';
color = 'black';
var myColor = "My color is " + color;
console.log(color, myColor);
// array
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
console.log(list1, list2);
// tuple
var x;
x = ["hello", 10];
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); error!
// any
var some = 'string';
some = 10;
some = false;
some = ['1', '2', 12];
console.log(some);
//console.log(some[0].toFixed(1));
// unknown
var maybe = ['0'];
console.log(maybe[0]);
//console.log(maybe[0].toFixed(1));
// void 
function log(msg) {
    console.log(msg);
}
log('abcdef');
// null
var nul = null;
var undef = undefined;
console.log(nul, undef);
//never
function error(msg) {
    throw new Error(msg);
}
//error('hello');
// object
var obj;
obj = { 'abc': 123 };
console.log(obj);
