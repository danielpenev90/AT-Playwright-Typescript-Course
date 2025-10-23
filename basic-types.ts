
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = 'Welcome!'
//@workspace /explain Cannot assign to 'welcomeMssg' because it is a constant.
//welcomeMssg = 'Welcome Daniel'

// string
let message: string = 'Hello, Daniel!'

let messageLength: number = message.length;
console.log(messageLength);

//string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

//Number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean (true/false)
let areEqual : boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterorEqual: boolean = numOne >= numTwo;

//logical operators
let areEqualTo: boolean = numOne === 10  && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10  || numTwo === 5;

// Conditions

// ternary operator
//let PositiveNumComparison: string = (numOne > 0) ? "The number is positive" : "The number is negative";
//console.log(PositiveNumComparison);

let PositiveNumComparison: string = numOne > 0
? `The number ${numOne} is positive`
: `The number ${numOne} is negative`;

console.log(PositiveNumComparison);

// if/else statement
if (numOne > 3) {
    console.log ("numOne is greater than 3");
} else {
    console.log("numOne is not greater than 3");
}

//console.log("areEqualTo", areEqualTo);
//console.log("isAnyNumEqualTo", isAnyNumEqualTo);



//console.log("areEqual" , areEqual);


