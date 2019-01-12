//let is used to declare the variable local to block
//var is used to declare the variable global to function and block
//const is used to declare the constant values
// we can change the value of a variable without writing let,var,const
// uncomment the code and try
// in javascript we have only number not floating, integer or double

let firstname = "Karamjeet";
let Lastname = "Singh";
let age = 28;
let address = "germany@#4 12345667";
const studentId = 121223;
console.log(firstname + " " + Lastname + " "+ age+" " + address);

firstname = "Rahul";
Lastname = "Sharma";
age = 22;
address = "germany@Japan";
//studentId = 121213;
console.log(firstname + " " + Lastname + " "+ age+" " + address);

/*console.log(item);
for (var item =0; item<10; item=item+1)
{
console.log(item);
}
console.log(item);*/

//console.log(item);
for (let item =0; item<10; item=item+1)
{
console.log(item);
}
//console.log(item);

let username = "Karamjeetsingh";
let userage = 28;
let gender = "male";

let sentence = `the user is ${username} his age is ${userage} and he/she is ${gender}`;

console.log(sentence);

