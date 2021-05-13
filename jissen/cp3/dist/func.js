"use strict";
function tax(amount, tax) {
    return `￥${amount * tax}`;
}
let val = tax(1000, 1.05);
console.log(val, ', ', val.length);
let num = 1;
console.log(`${num * num}`);
function getScore(score) {
    if (score > 80)
        return null;
    return score * 1.2;
}
let val2 = getScore(20);
console.log(val2);
