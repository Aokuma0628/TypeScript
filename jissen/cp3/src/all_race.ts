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

/* All                                                   */
/* Promise.all はすべての resolve または最初の reject を待つ  */

// let p1 = Promise.resolve(3);
// let p2 = 1337;
// let p3 = new Promise<string>((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("foo");
// 	}, 1500);
// });
// let p4 = new Promise<string>((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("bar");
// 	}, 1000);
// });
// Promise.all([p1, p2, p3]).then(values => {
// 	console.log(values);
// });

// let pa1 = Promise.all([1,2,3]);
// let pa2 = Promise.all([1,2,3, Promise.resolve(444)]);
// let pa3 = Promise.all([1,2,3, Promise.reject(555)]);

// setTimeout(() => {
// 	console.log(pa1);
// 	console.log(pa2);
// 	console.log(pa3);
// });

// let resolveArray = [Promise.resolve(33), Promise.resolve(44)];

// let p = Promise.all(resolveArray);
// console.log(p);

// setTimeout(() => {
// 	console.log('the stack is now empty.');
// 	console.log(p);
// });


// javascript info

let promise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		if(0) {
			resolve("OK");
		}
		else {
			reject(new Error("NG"));
		}


		// 最初のresolve, reject のみが反映される
		resolve("OK2");	//無視される
		reject(new Error('NG2')); //無視される

	}, 1000);
});

promise.then((resolve) => console.log(resolve));