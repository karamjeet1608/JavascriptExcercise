// basic syntax of function

function displayName()
{
    console.log("Meine nama ist Karamjeet Singh");
}
//calling the function
displayName();

// function with local variable
function showLocalVariable()
{
    let message = "I m learning Javascript";
    console.log(message);
}
// uncomment the below line to see whther the value of message is accessible or not
//console.log(message);
showLocalVariable();
//global variable
//Variables declared outside of any function 
//Global variables are visible from any function (unless shadowed by locals).
//The global variable is only used if there’s no local one. So an occasional modification may happen if we forget let.
//If a same-named variable is declared inside the function then it shadows the outer one.
//Usually, a function declares all variables specific to its task. Global variables only store project-level data, so when it’s important that these variables are accesible from anywhere. Modern code has few or no globals. Most variables reside in their functions.
//When the function is called the given values are copied to local variables from and text. Then the function uses them.

let name = "karamjeetSingh"
function globalVariableDisplay()
{
    let message = "this is global variable:";
    console.log(message + " " + name);
}
globalVariableDisplay();
//Parameters
//We can pass arbitrary data to functions using parameters (also called function arguments)

function displayMessage(from, text)
{
    console.log(from + ':' + text);
}
displayMessage('KaramjeetSingh', 'Hello......');

// default value
// if no value is passed then its value becomes undefined.
function displayMessages(from, text)
{
    console.log(from + ':' + text);
}
displayMessages('KaramjeetSingh');

// but we can give a default value
function displayChatMessages(from, text="there are no messages to display")
{
    console.log(from + ':' + text);
}
displayChatMessages('KaramjeetSingh');

//we can also use another function
function displayChatMessagesOtherFuntion(from, text=displayName())
{
    console.log(from + ':' + text);
}
displayChatMessagesOtherFuntion('KaramjeetSingh');
//returning a value
//A function can return a value back into the calling code as the result.
function mathAddition(a, b)
{
    return a+b;
}

let sum = mathAddition(345,9870)
console.log(sum);

function mathSubtraction(a, b)
{
    return a-b;
}

let diff = mathSubtraction(345,9870)
console.log(diff);

