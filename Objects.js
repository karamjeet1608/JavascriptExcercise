//Object declaration literal& its properties Syntax
//existence check using "in" keyword
//usage of for..in
//cloning

 let studentInfo = { name: "KaramjeetSingh", age: "28", sex: "Male"};
console.log(studentInfo.name);
console.log(studentInfo.age);
console.log(studentInfo.sex);
console.log("name" in studentInfo);
console.log("age" in studentInfo);
console.log("sex" in studentInfo);
// 2 statements below will give value as false
console.log("phone" in studentInfo);
console.log("address" in studentInfo);
// below statement will show the keys in the studenInfo 
for(let key in studentInfo)
{
console.log(key);
}
// cloning of the studentInfo 
let clone = {};
for(let key in studentInfo)
{
    clone[key] =studentInfo[key];
}
clone.name = "sunny banavalikar";
clone.age = 24;
clone.sex = "male";
console.log(clone.name);
console.log(clone.age);
console.log(clone.sex);

//Square Brackets
let user = {};
user["name"] = 'karamjeetSingh';
user["age"] = 28;
user["sex"] = 'male';
console.log(user["name"]);
console.log(user["age"]);
console.log(user["sex"]);

//property short- hand
function studentInfor(name, age, sex)
{
 return 
 {
     name,
     age,
     sex
 };
}
console.log(studentInfor("KaramjeetSingh", 28, "male"));

//object method, this

let employeeInfo = {name: "karamjeetSingh", age: 28, sex: "male"};
employeeInfo.displayMessage = function()
{
    console.log("this is my name:" + " "+ this.name);
    console.log("this is my age:" + " "+ this.age);
    console.log("this is my sex:" + " "+ this.sex);
}

employeeInfo.displayMessage();

employeeInfo ={ name: "Sunnybanavalikar", age: 24, sex: "male", showMessage()
{
    console.log("this is my name:" + " "+ this.name);
    console.log("this is my age:" + " "+ this.age);
    console.log("this is my sex:" + " "+ this.sex);
}
}
employeeInfo.showMessage();

//constructor function
function User(name,age,sex)
{
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.isadmin = false;
}
let userinfo = new User("Tushar diwedi", 27, "male");
console.log(userinfo.name);
console.log(userinfo.age);
console.log(userinfo.sex);


