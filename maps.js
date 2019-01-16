//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();
map.set(1, 'karamjeetSingh');
map.set("2", 'sagarBhave');
map.set('3', 'SunnyBanavalikar');
map.set(4, 'Tushardiwedi');
map.set("naam", 'SwastikPandit');
map.set(true, 'KomalKarkare');
map.set(7, 'jasmineKaur');
console.log(map.get(1));
console.log(map.get(2));
console.log(map.get("2"));
console.log(map.get('3'));
console.log(map.get("naam"));
console.log(map.get(true));
//Map can also use objects as keys.
let studentInfo = {name: "karamjeetSingh", id: 123, age: 28, sex: 'male'};
visitCount = new Map();
visitCount.set(studentInfo,324);
console.log(visitCount.get(studentInfo))
let studentInfo1 = {name: "karamjeetSingh", id: 123, age: 28, sex: 'male'}
let studentInfo2 = {name: "SunnyBanavalikar", id: 124, age: 24, sex: 'male'}
let studentInfo3 = {name: "TusharDiwedi", id: 125, age: 26, sex: 'male'}
studentMap = new Map();
console.log(typeof studentMap);
studentMap.set('studentInfo1', studentInfo1)
studentMap.set('studentInfo2', studentInfo2)
studentMap.set('studentInfo3', studentInfo3)
// the cat family is the key that i have created.
studentMap.set('tiger', studentInfo1)
studentMap.set('leopard', studentInfo2)
studentMap.set('lion', studentInfo3)
console.log(studentMap);
console.log(studentMap.size);
console.log(studentMap.get('tiger'))
console.log(studentMap.keys());
console.log(studentMap.values());
//for..of loop

for (const aloo of studentMap.keys())
{
    console.log(aloo);
}

for (const chat of studentMap.values())
{
    console.log(chat);
}

for (const dahi of studentMap.values())
{
    console.log(dahi.name);
}

for (const [key, value] of studentMap.entries()) {
    
    console.log(key + "="+ value.id);
}

studentMap.forEach((value,key) => {
    console.log(key + "="+ value.name);
});
//array of array
var arrOfArr = [['one','1'],['two','2'],['three','3']]
var arrayMap = new Map(arrOfArr);
console.log(arrayMap);

