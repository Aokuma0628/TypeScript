function taxed(amount: number): number {
    return amount * 1.1;
}

function fee(amount: number): number {
    return amount * 1.4;
}

function price(amount: number): number {
    return (fee(amount));
}

console.log(taxed(10));
console.log(fee(10));
console.log(price(10));
