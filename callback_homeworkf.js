function doHomework(subject) {
	alert(`Starting my ${subject} homework.`);
}

doHomework('math');


function doHomework(subject, callback) {
	alert(`Starting my ${subject} homework.`);
	callback();
}

doHomework('math', function() {
	alert('Finished my homework');
});
