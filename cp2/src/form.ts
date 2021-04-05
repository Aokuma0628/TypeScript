// boolean
let flg: boolean = false;

// number
let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b0011;
let octal: number = 0o123;

console.log(decimal, hex, binary, octal);

// string
let color: string = 'white';
color = 'black';
let myColor: string = `My color is ${color}`;

console.log(color, myColor);

// array
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];
console.log(list1, list2);

// tuple
let x: [string, number];
x = ["hello", 10];
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); error!

// any
let some: any = 'string';
some = 10;
some = false;
some = ['1','2',12];
console.log(some);
//console.log(some[0].toFixed(1));

// unknown
let maybe: unknown[] = ['0'];
console.log(maybe[0]);
//console.log(maybe[0].toFixed(1));

// void 
function log(msg: string): void {
    console.log(msg);
}
log('abcdef');

// null
let nul: null = null;
let undef: undefined = undefined;
console.log(nul, undef);

//never
function error(msg: string): never {
    throw new Error(msg);
}
//error('hello');

// object
let obj: object;
obj = {'abc': 123};
console.log(obj);