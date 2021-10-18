function func(): void {
	const a = 'hello';
	console.log(a);
	for (let i = 0; i < 10; i++) {
		console.log(a);
	}
}

function func2(): number {
	const a = 123;
	return a;
}

func();

func2();