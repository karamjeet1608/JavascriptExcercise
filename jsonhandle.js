//handling json data
let studentInfo1 = {name: "karamjeetSingh", id: 123, age: 28, sex: 'male'}
// converting json into string
const studentinfoobj = JSON.stringify(studentInfo1);
console.log(typeof studentinfoobj);
// from string to json
const studentinfojson = JSON.parse(studentinfoobj);
console.log(typeof studentinfojson);
