/*
// Normal JS code

function greeter(person:) {
    return "Hello, " + person;
}

let user = "Jane user";

document.body.innerHTML = greeter(user);



// Type Annotation with TypeScript

function greeter(person:string) {
    return "Hello, " + person;
}

let user = [0, 1, 2]; // different type, will show error but generate a js file anyway

document.body.innerHTML = greeter(user);



// Interfaces

interface Person {
    firstName : string;
    last name : string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user);


*/
//Classes
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
