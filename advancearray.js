//arr.forEach() function calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array. The syntax of the function is as follows:
//arr.forEach(function callback(currentValue[, index[, array]]) { }[, thisArg]);
/*Arguments 
The argument to this function is another function that defines the condition to be checked for each element of the array. This function itself takes three arguments:

array
This is the array on which the .forEach() function was called.

index
This is the index of the current element being processed by the function.

element
This is the current element being processed by the function.

Another argument thisValue is used to tell the function to use this value when executing argument function.
Return value The return value of this function is always undefined. This function may or may not change the original array provided as it depends upon the functionality of the argument function.*/
//https://www.youtube.com/watch?v=upP06o5ZPls
/*array = [2,3,4,5,6];
fix = [];
console.log(array);
array.forEach(function(array)
{
   fix.push(array+array+1);
});
console.log(fix);*/
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
// foreach example
let add = [9,8,7,5,6];
add.forEach(function(tiger,index, add)
{
console.log(`the position of ${tiger} -- is ${index} in the array ${add}`);
})
// searching in array
let users = [

    {id: 1, name: "karamjeet Singh"},
    {id: 2, name: "Sunny banavalikar"},
    {id: 3, name: "tushar diwedi"}
]; 
let user = users.find(item => item.id ==1);
console.log(user.name);

//map function
let array = ["Karamjeet Singh", "Sunny Banavalikar","swastik","Tushar","Komal","Mitali","shivani"].map(item => item.length);
console.log(array);


  
  

    

