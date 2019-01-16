//array sysntax
//method_1
let arr = new Array();
arr = ["Karamjeet Singh", "Sunny Banavalikar","swastik","Tushar","Komal","Mitali"]
console.log(arr[1])
//method_2
let array = ["Karamjeet Singh", "Sunny Banavalikar","swastik","Tushar","Komal","Mitali","shivani"]
console.log(array[2]);
// replacing the element of array
array[2] = "pandit";
console.log(array[2]);
console.log(array);
console.log(array.pop("Mithali"));
console.log(array);
console.log(array.pop(2));
console.log(array);
console.log(array.push("Anubhav"));
console.log(array);
console.log(array.push(2));
console.log(array);
console.log(array.shift(1));
console.log(array);
//loops in array
for(let i = 0; i<array.length; i++)
console.log(array[i]);
// another syntax of for loop in arrays
for(let arrays of array)
{
    console.log(arrays);
}
// another syntax of for loop in arrays
for(let key in array)
{
    console.log(array[key]);
}
console.log(array.length);
//delete function
console.log(array);
delete array[2];
console.log(array);
console.log(array.length);
//splice method
console.log(array);
console.log(array.length);
array.splice(3,1);
console.log(array);
console.log(array.length);
//splice method with replacing the element
console.log(array);
console.log(array.length);
array.splice(3,1,"Jitin", "sagar");
console.log(array);
console.log(array.length);
console.log(array);
console.log(array.length);
array.slice(1,4);
console.log(array);
console.log(array.length);
console.log(array.indexOf("Sunny Banavalikar"));
console.log(array.indexOf("Komal")); 
// function to find sum of elements of the array
function sum()
{
    let sum = 0
    let add = [2,3,4,5,6]
    for(let i = 0; i<=(add.length)-1; i++)
    {
        sum = sum + add[i];
     }
    console.log(sum);
}