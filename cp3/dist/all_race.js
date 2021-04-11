"use strict";
// function waitString(duration: number) {
// 	return new Promise<string>(resolve => {
// 		setTimeout(() => resolve(`${duration}ms passed.`), duration);
// 	});
// }
// function waitNumber(duration: number) {
// 	return new Promise<number>(resolve => {
// 		setTimeout(() => resolve(duration), duration);
// 	});
// }
// function waitAll() {
// 	return Promise.all([
// 		waitString(10),
// 		waitNumber(100),
// 		waitString(1000)
// 	]);
// }
// function waitRace() {
// 	return Promise.race([
// 		waitString(10),
// 		waitNumber(100),
// 		waitString(1000)
// 	]);
// }
// async function main () {
// 	const [a,b,c] = await waitAll();
// 	const ret = await waitRace();
// 	console.log(a,b,c);
// 	console.log(ret);
// }
// All
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 1500);
});
Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
});
