"use strict";
// function cp41 () {
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    console.log("\n######### Question." + num + " ##########");
}
var cp4 = /** @class */ (function () {
    function cp4() {
        // do nothing
    }
    //デフォルトパラメータ
    cp4.prototype.cp4_1 = function (message, usrId) {
        if (usrId === void 0) { usrId = 'Not sighn in'; }
        var time = new Date().toISOString();
        console.log(time, message, usrId);
    };
    //レストパラメータ
    cp4.prototype.cp4_2 = function () {
        var num = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            num[_i] = arguments[_i];
        }
        var sum = num.reduce(function (total, n) { return total + n; }, 0);
        console.log(sum);
    };
    //this
    // method.call(thisArg, [, arg1 [, arg2, ...]]);
    // methodは任意の関数やインスタンスが指定可能
    // 第一引数にはmethodのthisとしたいオブジェクト(参照先)を指定
    // 第二引数以降にはmethodに渡す引数
    cp4.prototype.cp4_4 = function () {
        var x = { a: function () { return this; } };
        x.a();
        var x2 = function () {
            return this.getMonth() + 1 + " / " + this.getDate() + " / " + this.getFullYear();
        };
        //x2();
        console.log(x2.call(new Date));
    };
    // ジェネレータ
    cp4.prototype.cp4_5 = function () {
        function createFunc() {
            var a, b;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        a = 0;
                        b = 1;
                        _b.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 3];
                        return [4 /*yield*/, a];
                    case 2:
                        _b.sent();
                        _a = [b, a + b], a = _a[0], b = _a[1];
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        }
        var f = createFunc();
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
        console.log(f.next());
    };
    // イテレータ
    // cp4_6() {
    // 	let f = {
    // 		*[Symbol.iterator]() {
    // 			for (let i = 1; i <= 10; i++) {
    // 				yield i;
    // 			}
    // 		}
    // 	}
    // 	for (let a of f) {
    // 		console.log(a);
    // 	}
    // 	let b = [...f];
    // 	console.log(b);
    // }
    // 呼び出しシグネチャ
    cp4.prototype.cp4_7 = function () {
        var log = function (msg, id) {
            if (id === void 0) { id = 'Not found id'; }
            var time = new Date();
            console.log(time, msg, id);
        };
        log('hello', 'abc123');
    };
    // オーバーロード
    cp4.prototype.cp4_9 = function () {
        var from = new Date();
        var tmp = new Date();
        var to = new Date(tmp.setDate(31));
        var dest = 'Tokyo';
        var reserve = function (from, toOrDest, dest) {
            console.log(from, toOrDest, dest);
        };
        reserve(from, to, dest);
    };
    // ジェネリック型 ← 汎用的なソースとなるため、使用できる場合はできるだけ使うべき
    cp4.prototype.cp4_10 = function () {
        var filter = function (array, f) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                if (f(item)) {
                    result.push(item);
                }
            }
            return result;
        };
        console.log(filter([1, 2, 3], function (_) { return _ > 2; }));
        console.log(filter(['a', 'b', 'C'], function (_) { return _ !== 'b'; }));
    };
    cp4.prototype.p1 = function () {
        //両方
    };
    cp4.prototype.p2 = function () {
        //?
    };
    cp4.prototype.p3 = function () {
        var dest = 'Tokyo';
        var reserve = function (dest) {
            console.log(dest);
        };
        reserve(dest);
    };
    cp4.prototype.p5 = function () {
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
    };
    return cp4;
}());
var c4 = new cp4();
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