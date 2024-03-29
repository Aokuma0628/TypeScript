function sampleResolve(value: number) {
	return new Promise<number>(resolve => {
		setTimeout(() => {
			resolve(value * 2);
		}, 2000);
	})
}

/**
 * sampleResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される
 * 今回の場合、2秒後にresolve(10)が返ってきてその後の処理（return result + 5;）が再開される
 * resultにはresolveされた10が格納されているため、result + 5 = 15がreturnされる
 */
async function sample() {
	const result = await sampleResolve(5);
	return result + 5;
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
