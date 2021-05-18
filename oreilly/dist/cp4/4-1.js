"use strict";
function cp41() {
    function add(a, b) {
        return a + b;
    }
    //名前付き関数
    function greet(name) {
        return 'hello ' + name;
    }
    //関数式
    let greet2 = function (name) {
        return 'hello ' + name;
    };
    //アロー関数
    let greet3 = (name) => {
        return 'hello ' + name;
    };
    //アロー関数省略記法
    let greet4 = (name) => 'hello ' + name;
    //オプションパラメータ
    function log(message, id) {
        console.log(message, id || 'not id.');
    }
    //デフォルトパラメータ
    function log2(message, id = 'default id') {
        console.log(message, id);
    }
    //固定長配列を引数に持つ関数
    function sum(numbers) {
        return numbers.reduce((total, n) => total + n, 0);
    }
    //レストパラメータ
    function kakeru(...numbers) {
        return numbers.reduce((total, n) => total * n, 1);
    }
    console.log(add(1, 2));
    console.log(add.apply(null, [10, 20]));
    console.log(add.call(null, 10, 20));
    console.log(add.bind(null, 10, 20)());
    console.log(greet('tanaka'));
    console.log(greet2('nakamura'));
    console.log(greet3('hanako'));
    console.log(greet4('murata'));
    log('apple', 'id=100');
    log('banana');
    log2('ringo', 'ididid');
    log2('mikan');
    console.log(sum([1, 2, 3, 4]));
    console.log(kakeru(1, 2, 3, 4));
    //this
    let x = {
        a() {
            return this;
        }
    };
    console.log(x.a());
    let a = x.a;
    console.log(a());
}
cp41();
//# sourceMappingURL=4-1.js.map