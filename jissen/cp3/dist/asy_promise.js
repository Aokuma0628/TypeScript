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
function sampleResolve(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    });
}
/**
 * sampleResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される
 * 今回の場合、2秒後にresolve(10)が返ってきてその後の処理（return result + 5;）が再開される
 * resultにはresolveされた10が格納されているため、result + 5 = 15がreturnされる
 */
function sample() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield sampleResolve(5);
        return result + 5;
    });
}
sample().then(result => {
    console.log(result); // => 15
});
/*上の例をPrommiseを使って書き換え*/
// function sample() {
// 	return sampleResolve(5).then(result => {
// 		return result + 5;
// 	});
// }
