"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}
function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
}
function sequentialStart() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('==SEQUENTIAL START==');
        // 1. ここは即時実行される
        const slow = yield resolveAfter2Seconds();
        console.log(slow); // 2. ここは 1. の2秒後に実行される
        const fast = yield resolveAfter1Second();
        console.log(fast); // 3. ここは 1. の3秒後に実行される
    });
}
function concurrentStart() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('==CONCURRENT START with await==');
        const slow = resolveAfter2Seconds(); // 即時実行
        const fast = resolveAfter1Second(); // 即時実行
        // 1. ここは即時実行される
        console.log(yield slow); // 2. ここは 1. の2秒後に実行される
        console.log(yield fast); // 3. ここは 1. の2秒後（2.の直後）に実行される
    });
}
function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]); // slow
        console.log(messages[1]); // fast
    });
}
function parallel() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('==PARALLEL with await Promise.all==');
        // 2つの jobs を並列に実行し両方が完了するのを待つ
        yield Promise.all([
            (() => __awaiter(this, void 0, void 0, function* () { return console.log(yield resolveAfter2Seconds()); }))(),
            (() => __awaiter(this, void 0, void 0, function* () { return console.log(yield resolveAfter1Second()); }))()
        ]);
    });
}
// この関数はエラーハンドリングをしていません。後述の注意書きを参照してください。
function parallelPromise() {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}
sequentialStart(); // 2秒後に "slow" をログ出力し、その1秒後に "fast" をログ出力する
// 見やすくするため setTimeout で直前の処理が終わるのを待つ
setTimeout(concurrentStart, 4000); // 2秒後に "slow" と "fast" をログ出力する
// 直前の処理を待つ
setTimeout(concurrentPromise, 7000); // concurrentStart と同様
// 直前の処理を待つ
setTimeout(parallel, 10000); // 本当に並列処理となるため1秒後に "fast" とログ出力し、その1秒後に "slow" とログ出力する
// 直前の処理を待つ
setTimeout(parallelPromise, 13000); // parallel と同様
