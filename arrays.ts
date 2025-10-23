// arrays declaration
let numsArray: number[] = [1, 2, 3, 4, 5];
let stringsArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'  ];
let combinedArray: (string | number)[] = [1, 'Pesho', 'Ivan', 2];

//accessing array elements
stringsArray[0]; //Pesho
stringsArray[1]; //Gosho
combinedArray[2]; //Ivan

//acces array length
numsArray.length;

//method map    
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringsArray.map((currName: string) => `Hello ${currName}`);
let checkTypeOf = combinedArray.map((element: number | string) => {
    if (typeof element === 'number') {
        return element + 5;}
    else {
        return `Welcome ${element}`;}
});

//console.log(multiplyNums);
//console.log(mapNames);
//console.log(checkTypeOf);

//method filter

let positiveNums: number[] = [2,3,4,5,6];
let filteredArr: number[] = positiveNums.filter((num: number) => num > 3); 
//console.log("filteredArr:", filteredArr);

//method sort
let sortNums: number[] = [100,2,30,5,40,6];
let sortedResult = sortNums.sort((a: number, b: number) => a - b);
//console.log("sortedResult:", sortedResult);

//method push
sortedResult.push(200);
//console.log(sortedResult);

//method pop
sortedResult.pop();
//console.log(sortedResult);

//method shift
sortedResult.shift();
//console.log(sortedResult);

//method unshift
sortedResult.unshift(1);
//console.log(sortedResult);

