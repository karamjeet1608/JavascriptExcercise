const convertToRs = (dollar) => {
    if (typeof dollar === 'number')
    {
        return dollar *64;
    }
    else
    {
        throw Error('please enter the amount in digits')
    }
} 
try{
const myValue = convertToRs('five');
console.log(myValue);

}catch (error)
{
    console.log(error)
}

console.log("hi");
