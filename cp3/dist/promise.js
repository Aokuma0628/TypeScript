"use strict";
// function wait(duration: number) {
// 	const promise = new Promise(resolve => {
// 		setTimeout(() => resolve(`${duration}ms passed`), duration);
// 	});
// 	promise.then(res => {
// 		console.log(res);
// 	});
// }
// wait(1000);
// const promise = new Promise((resolve, reject) => {
// 	//resolve(123);
// 	reject(new Error("うわあああ"));
// });
// promise.then((res) => {
// 	console.log('I get called:', res == 123);
// });
// promise.catch((err) => {
// 	console.log(err.message);
// });
Promise.resolve(123)
    .then((res) => {
    console.log(res);
    return 456;
})
    .then((res) => {
    console.log(res);
    return Promise.resolve(789);
})
    .then((res) => {
    console.log(res);
    return 123;
});
