"use strict";
// function cp41 () {
// function add(a:number, b:number) {
// 	return a + b;
// }
// //名前付き関数
// function greet(name: string) {
// 	return 'hello ' + name;
// }
// //関数式
// let greet2 = function(name: string) {
// 	return 'hello ' + name;
// }
// //アロー関数
// let greet3 = (name: string) => {
// 	return 'hello ' + name;
// }
// //アロー関数省略記法
// let greet4 = (name: string) => 
// 	'hello ' + name;
// //オプションパラメータ
// function log(message: string, id?: string) {
// 	console.log(message, id || 'not id.');
// }
// //デフォルトパラメータ
// function log2(message: string, id = 'default id') {
// 	console.log(message, id);
// }
// //固定長配列を引数に持つ関数
// function sum(numbers: number[]) {
// 	return numbers.reduce((total, n) => total + n, 0);
// }
// //レストパラメータ
// function kakeru(...numbers: number[]) {
// 	return numbers.reduce((total, n) => total * n, 1);
// }
// console.log(add(1,2));
// console.log(add.apply(null, [10,20]));
// console.log(add.call(null,10,20));
// console.log(add.bind(null,10,20)());
// console.log(greet('tanaka'));
// console.log(greet2('nakamura'));
// console.log(greet3('hanako'));
// console.log(greet4('murata'));
// log('apple', 'id=100')
// log('banana');
// log2('ringo', 'ididid');
// log2('mikan');
// console.log(sum([1,2,3,4]));
// console.log(kakeru(1,2,3,4));
// //this
// let x = {
// 	a() {
// 		return this;
// 	}
// };
// console.log(x.a());
// let a = x.a;
// console.log(a());
// //ジェネレータ
// function* createFibonaccGenerator() {
// 	let a = 0
// 	let b = 1
// 	while (true) {
// 		yield a;
// 		[a, b] = [b, a + b]
// 	}
// }
// let fi = createFibonaccGenerator();
// let i = 0
// while (i < 10) {
// 	console.log(fi.next());
// 	i++;
// }
// //イテレーター(よくわからん)
// let numbers = {
// 	*[Symbol.iterator]() {
// 		for (let n = 1; n < 10; n++) {
// 			yield n;
// 		}
// 	}
// };
// console.log(numbers);
// //シグネチャ
// type Log = (message: string, id?: string) => void;
// let log3: Log = (
// 	message,
// 	id = 'Not signed in'
// ) => {
// 	console.log(message, id);
// }
// log3('message', 'id=1');
// }
// cp41();
// ２週目
function printc(num) {
    console.log(`\n######### Question.${num} ##########`);
}
class cp4 {
    constructor() {
        // do nothing
    }
    //デフォルトパラメータ
    cp4_1(message, usrId = 'Not sighn in') {
        let time = new Date().toISOString();
        console.log(time, message, usrId);
    }
    //レストパラメータ
    cp4_2(...num) {
        let sum = num.reduce((total, n) => total + n, 0);
        console.log(sum);
    }
    //this
    // method.call(thisArg, [, arg1 [, arg2, ...]]);
    // methodは任意の関数やインスタンスが指定可能
    // 第一引数にはmethodのthisとしたいオブジェクト(参照先)を指定
    // 第二引数以降にはmethodに渡す引数
    cp4_4() {
        let x = { a() { return this; } };
        x.a();
        let x2 = function () {
            return `${this.getMonth() + 1} / ${this.getDate()} / ${this.getFullYear()}`;
        };
        //x2();
        console.log(x2.call(new Date));
    }
    // ジェネレータ
    cp4_5() {
        function* createFunc() {
            let a = 0;
            let b = 1;
            while (true) {
                yield a;
                [a, b] = [b, a + b];
            }
        }
        let f = createFunc();
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
    }
}
printc('4-1');
const c4 = new cp4();
c4.cp4_1('hello');
c4.cp4_1('good morning', 'abc');
printc('4-2');
c4.cp4_2(1, 2, 3);
c4.cp4_2(1, 2, 3, 4);
printc('4-4');
c4.cp4_4();
printc('4-5');
c4.cp4_5();
//# sourceMappingURL=4-1.js.map