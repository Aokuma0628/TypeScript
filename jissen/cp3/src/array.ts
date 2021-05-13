// array 
const a1 = [true, false];
const a2 = [0, 1, '2'];

let a3: typeof a1;
let a4: typeof a2;

const a5 = [0 as 0, 1 as 1];
let a6: typeof a5;

// tuple

const t1 = [false] as [boolean];
const t2 = [false, 1] as  [boolean , number];
const t3 = [false, 1, 'aaa'] as [boolean, number, string];
const t0 = [true, 10, 'bbb'];

const v1 = t1[0];
const v2 = t2[1];
const v3 = t3[2];
const v0 = t0[1];	// vo: boolean | number | string

t1.push(true);
//t1.push(1);	error
t2.push(10);
//t2.push('ccc');	error


