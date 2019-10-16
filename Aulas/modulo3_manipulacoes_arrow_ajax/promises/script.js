function doSomething() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Ok');
		}, 3000);
	});
}

doSomething()
	.then((response) => {
		console.log(`Response: ${response}`);
	});