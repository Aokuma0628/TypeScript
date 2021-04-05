"use strict";
function taxed(amount) {
    return amount * 1.1;
}
function fee(amount) {
    return amount * 1.4;
}
function price(amount) {
    return (fee(amount));
}
console.log(taxed(10));
console.log(fee(10));
console.log(price(10));
