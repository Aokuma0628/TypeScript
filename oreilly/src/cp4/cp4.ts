function print(...data:any):void {
	console.log('Qus: ', data[0], '\nAns: ', data[1], `(${typeof (data[1])})`);
}

function pc(num:number):void {
	console.log(`\n######### Practice${num} ##########`);
}

function p(data:any):void {
	console.log(data, `(${typeof(data)})`);
}

function pj(data:object):void {
	console.log('%j', data, `(${typeof(data)})`);
}

function func4_2(): void {
	
	// Fileter型の関数を呼び出すときに型Tに対してバインドが行われる
	type Filter = {
		<T>(array: T[], f: (item:T) => boolean): T[]
	};

	// Fileter1型の関数を宣言するときに型Tに対してバインドが行われる
	type Filter1<T> = {
		(array: T[], f: (item: T) => boolean): T[]
	};

	// Filter型と同じ意味で省略記法
	type Filter2 = <T>(array: T[], f: (item: T) => boolean) => T[];

	// Filter1型と同じ意味で省略記法
	type Filter3<T> = (array: T[], f: (item: T) => boolean) => T[];

	const filter: Filter = (array, f) => {
		let result = [];
		for (let i = 0; i < array.length; i++){
			let item = array[i];
			if (f(item))
				result.push(item);
		}
		return result;
	}

	const arr = [1, 2, 3];
	const func = (a: number): boolean => {
		return a > 10 ? true : false;
	}

	const arr2 = filter(arr, func);
	p(arr2);

	const arr3 = [123, 10, 9, 8, 233];
	p(filter(arr3, func));

	const funcs = (a: string): boolean => {
		return a.includes('bc');
	}

	const arr4 = ['123', 'bbb', 'abc', 'bcd'];
	p(filter(arr4, funcs));


	function map<T, U>(array: T[], f: (item: T) => U): U[] {
		let result = [];
		for (let i = 0; i < array.length; i++) {
			result[i] = f(array[i]);
		}
		return result;
	}

	p(map<string, number>(['a', 'b', 'c', '123'], parseInt));
	p(map([1, 2, 3, 123], String));


	let promise = new Promise<number>(resolve => resolve(100));
	promise.then(result => result * 4);

}

function func4_2_4(): void {
	type MyEvent<T> = {
		target: T;
		type: string;
	};

	type ButtonEvent = MyEvent<HTMLButtonElement>;

	type TreeNode = {
		value: string
	};
	type LeafNode = TreeNode & {
		isLeaf: true
	};
	type InnerNode = TreeNode & {
		children: [TreeNode] | [TreeNode, TreeNode]
	};


}

func4_2();
func4_2_4();