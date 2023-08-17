console.log('I am linked now!');

//step2
var name;
let name = "Assala";
alert(Assala);

//step3
let age = 23;
var lastName = "Meslmani";
const DOB = "2000-10-10";
age = 25;
lastName = "Jean";
DOB = "1998-06-10";
console.log(age, lastName, DOB);

//step4
console.log(typeof "this is a text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof 1215);
console.log(typeof "999");
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);

let name = "Assala";//string
let weight = 53;//number
let student = true;//boolean
let height = 1.68;//number
let hobbies = ["reading", "painting", "swimming", "basketball"];//array
let address = { street: "123 main st", city: "beirut" };//object

console.log("name:", typeof name);
console.log("weight:", typeof weight);
console.log("student:", typeof student);
console.log("height:", typeof height);
console.log("hobbies:", typeof hobbies);
console.log("address:", typeof address);

//step5
let myText = "Hello, how are you?"

let text1 = "this is a string using double quotations";//double quot

let text2 = 'this is a string using single quotation'; //single quot

let text3 = 'this is a sting using backticks (template literals)';//backticks

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote = `This is my text using single quotations ${counter} times`;
const doubleQuote = `This is my text using double quotations ${counter} times`;
const tryThisAlso = `This is my new version, it's the ${2 + 3}th version`;//In these examples, the ${counter} placeholder is replaced with the value of the counter variable, and the ${2 + 3} placeholder is replaced with the result of the expression 2 + 3. This way, you can dynamically include variables and expressions within your strings. Well done!

console.log("backtick:", backtick);
console.log("singleQuote:", singleQuote);
console.log("doubleQuote:", doubleQuote);
console.log("tryThisAlso:", tryThisAlso);
//This will log the values of all the variables (`backtick`, singleQuote, doubleQuote, `tryThisAlso`) to the console.
//backticks (template literals) are the most versatile as they support string interpolation and multi-line strings. Single and double quotations are more basic and do not support string interpolation.

//step6
const greeting = "Hello, how are you!";
const favcolor = "my fav color is black.";

let result;
result = greeting + "" + favcolor;

//step7
//Strict Equality Operator (===):
console.log(5 === "5"); // false
console.log(true === 1); // false

//Strict Inequality Operator (!==):
console.log(5 !== "5"); // true
console.log(true !== 1); // true

//Loose Equality Operator (==):
console.log(5 == "5"); // true
console.log(true == 1); // true

//Loose Inequality Operator (!=):
console.log(5 != "5"); // false
console.log(true != 1); // false


//Greater than (>): 
console.log(5 > 3); // true
console.log("apple" > "banana"); // false

//Greater than or equals (>=):
console.log(5 >= 5); // true
console.log("apple" >= "banana"); // false

//Less than (<):
console.log(3 < 5); // true
console.log("apple" < "banana"); // true

// Less than or equals (<=):
console.log(5 <= 5); // true
console.log("apple" <= "banana"); // true