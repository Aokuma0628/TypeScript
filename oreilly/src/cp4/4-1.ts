function cp41 () {

function add(a:number, b:number) {
	return a + b;
}

//名前付き関数
function greet(name: string) {
	return 'hello ' + name;
}

//関数式
let greet2 = function(name: string) {
	return 'hello ' + name;
}

//アロー関数
let greet3 = (name: string) => {
	return 'hello ' + name;
}

//アロー関数省略記法
let greet4 = (name: string) => 
	'hello ' + name;

//オプションパラメータ
function log(message: string, id?: string) {
	console.log(message, id || 'not id.');
}

//デフォルトパラメータ
function log2(message: string, id = 'default id') {
	console.log(message, id);
}

//固定長配列を引数に持つ関数
function sum(numbers: number[]) {
	return numbers.reduce((total, n) => total + n, 0);
}

//レストパラメータ
function kakeru(...numbers: number[]) {
	return numbers.reduce((total, n) => total * n, 1);
}


console.log(add(1,2));
console.log(add.apply(null, [10,20]));
console.log(add.call(null,10,20));
console.log(add.bind(null,10,20)());


console.log(greet('tanaka'));
console.log(greet2('nakamura'));
console.log(greet3('hanako'));
console.log(greet4('murata'));

log('apple', 'id=100')
log('banana');

log2('ringo', 'ididid');
log2('mikan');

console.log(sum([1,2,3,4]));
console.log(kakeru(1,2,3,4));


//this
let x = {
	a() {
		return this;
	}
};
console.log(x.a());

let a = x.a;
console.log(a());

//ジェネレータ
function* createFibonaccGenerator() {
	let a = 0
	let b = 1
	while (true) {
		yield a;
		[a, b] = [b, a + b]
	}
}

let fi = createFibonaccGenerator();
let i = 0
while (i < 10) {
	console.log(fi.next());
	i++;
}


//イテレーター(よくわからん)
let numbers = {
	*[Symbol.iterator]() {
		for (let n = 1; n < 10; n++) {
			yield n;
		}
	}
};
console.log(numbers);

//シグネチャ
type Log = (message: string, id?: string) => void;

let log3: Log = (
	message,
	id = 'Not signed in'
) => {
	console.log(message, id);
}

log3('message', 'id=1');

}
cp41();