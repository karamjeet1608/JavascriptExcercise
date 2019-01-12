let promise = new Promise(function(resolve, reject) {
	//the function is executed automatically when the promise is constructed

	//after 1 second signal that the job is done with result "done !"
	setTimeout(() => resolve("done !"), 1000);
});

//resolve runs the first function in .then
promise.then(
	result => alert(result), // shows 'done !' after 1 second
	error => alert(error) // doesn't run
);