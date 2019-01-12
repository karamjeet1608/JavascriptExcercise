async function f() {
	
	let promise = new Promise( (resolve,reject) => {
		setTimeout(() => resolve("done !"), 1000)
	});

	let result = await promise // wait till the promise resolves

	alert(result);

}

f();
