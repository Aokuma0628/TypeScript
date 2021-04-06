function type(): void {
	// typeof
	let str: string = '';
	let value: typeof str;
	value = 'value';
	console.log(value);
	
	let obj = {foo: 'foo'};
	let obj2: typeof obj = {foo: ''};
	obj2['foo'] = 'val';
	//obj2['bar'] = 'val';

	console.log(obj2);

	// keyof
	type sometype = {
		foo: string,
		bar: string,
		baz: string
	};

	type key= keyof sometype;
	let k:key = 'foo';
	k = 'bar';
	console.log(k);

}

type();


