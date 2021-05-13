const obj = {
	foo: false,
	var: 1,
	baz: 'abc'
};

let obj2: typeof obj;
//obj2['var'] = 123;

const obj3 = {
	a: 'string' as 'string',
	b: 1 as 1
}

let obj4: typeof obj3;
//obj4['a'] = 'string';