function wait(duration: number) {

	const promise = new Promise(resolve => {
		setTimeout(() => resolve(`${duration}ms passed`), duration);
	});

	promise.then(res => {
		console.log(res);
	});
}

async function queue() {
	const message = await wait(1000)
	return message;
}