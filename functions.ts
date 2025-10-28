//Functions
function displayPersonalData(name: string, age: number) {
    return `${name} is ${age} years old.`;
}

    displayPersonalData("Daniel", 20);
   // console.log(displayPersonalData("Daniel", 20));

    const personalData = displayPersonalData("Peter", 25);
   // console.log(personalData);

function greetingVoid(): void {
    console.log(`This function doesn't return anything!(type void)`);
}

function devideNums(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}
devideNums(10, 5);
devideNums(50, 5);
devideNums(100, 5);













//console.log(greeting(Trifon, 30));

//default parameters
function substractNums(numOne: number=10, numTwo: number = 5) {
  //  console.log(numOne-numTwo());
}
//substractNums(50);
//substractNums(50, 30);

// Function with parameter of union type
function printId(id: number | string) {
    console.log(`id - ${id} is type of ${typeof id} `);
}

printId("10");
printId(10);
