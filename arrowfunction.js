//simple function
const displayName = function(name)
{
    return "Hi there," +name+ "!";
}
console.log(displayName('karamjeetSingh'));
//arrow function of above
const showName =(name) => `hi there ${name} !`
console.log(showName('karamjeet Singh'));
//
const employeeDetails = [{name: "karamjeet Singh", isactive: true, employeeId: 123},
{name: "Sunny Banavalikar", isactive: true, employeeId: 124},
{name: "tushar Diwedi", isactive: false, employeeId: 125},
{name: "swastik Pandit", isactive: false, employeeId: 126},
{name: "Komal", isactive: true, employeeId: 127}]
//simple function
const status = employeeDetails.filter(function(todo){
return todo.isactive ===true;
})
console.log(status);
//arrow function
const empStatusTrue = employeeDetails.filter((todo)=> todo.isactive ===true)
console.log(empStatusTrue);
const empStatusFalse = employeeDetails.filter((todo)=> todo.isactive ===true)
console.log(empStatusFalse);
