//to print the second character in the string
// in different line
console.log("cats".charAt(1));
console.log("alon".charAt(1));
console.log("pies".charAt(1));
console.log("daps".charAt(1));
console.log("arks".charAt(1));
// in same line method 1
console.log("cats".charAt(1) +  "alon".charAt(1) +"pies".charAt(1) + "daps".charAt(1)+ "arks".charAt(1))
// in same line method 2
console.log("cats"["cats".length - 3] +  "alon"["alon".length - 3] +"pies"["pies".length - 3] + 
"daps"["daps".length - 3]+ "arks"["arks".length - 3])
//typeof function example
console.log(typeof("this is the string session"));