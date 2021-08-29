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
    // イテレータ
    cp4_6() {
        let f = {
            *[Symbol.iterator]() {
                for (let i = 1; i <= 10; i++) {
                    yield i;
                }
            }
        };
        for (let a of f) {
            console.log(a);
        }
        let b = [...f];
        console.log(b);
    }
    //　呼び出しシグネチャ
    cp4_7() {
        let log = (msg, id = 'Not found id') => {
            let time = new Date();
            console.log(time, msg, id);
        };
        log('hello', 'abc123');
    }
    // オーバーロード
    cp4_9() {
        let from = new Date();
        let tmp = new Date();
        let to = new Date(tmp.setDate(31));
        let dest = 'Tokyo';
        let reserve = (from, toOrDest, dest) => {
            console.log(from, toOrDest, dest);
        };
        reserve(from, to, dest);
    }
    // ジェネリック型 ← 汎用的なソースとなるため、使用できる場合はできるだけ使うべき
    cp4_10() {
        let filter = (array, f) => {
            let result = [];
            for (let i = 0; i < array.length; i++) {
                let item = array[i];
                if (f(item)) {
                    result.push(item);
                }
            }
            return result;
        };
        console.log(filter([1, 2, 3], _ => _ > 2));
        console.log(filter(['a', 'b', 'C'], _ => _ !== 'b'));
    }
    p1() {
        //両方
    }
    p2() {
        //?
    }
    p3() {
        let dest = 'Tokyo';
        let reserve = (dest) => {
            console.log(dest);
        };
        reserve(dest);
    }
    p5() {
        function is(a, b) {
            if (a === b) {
                return true;
            }
            else {
                return false;
            }
        }
        console.log(is('string', 'aaa'));
        console.log(is(true, false));
        console.log(is(42, 42));
        //console.log(is(42, 'aaa'));
    }
}
const c4 = new cp4();
// printc('4-1');
// c4.cp4_1('hello');
// c4.cp4_1('good morning', 'abc');
// printc('4-2');
// c4.cp4_2(1,2,3);
// c4.cp4_2(1, 2, 3, 4);
// printc('4-4');
// c4.cp4_4();
// printc('4-5');
// c4.cp4_5();
// printc('4-6');
// c4.cp4_6();
// printc('4-7');
// c4.cp4_7();
// printc('4-9');
// c4.cp4_9();
// printc('4-10');
// c4.cp4_10();
printc('p1');
c4.p1();
printc('p2');
c4.p2();
printc('p3');
c4.p3();
printc('p5');
c4.p5();
//# sourceMappingURL=4-1.js.map