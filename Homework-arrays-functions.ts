
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log("1. Add element:", fruits);

// 2. 
let numbers: number[] = [10, 20, 30, 40];
numbers.shift();
console.log("2. Remove first element:", numbers);

// 3. 
let nums: number[] = [1, 2, 3, 4, 5];
let dividedByTwo = nums.map(num => num / 2);
console.log("3. Divided by 2:", dividedByTwo);

// 4. 
let mixNums: number[] = [3, 7, 1, 9, 12, 4];
let greaterThanFive = mixNums.filter(num => num > 5);
console.log("4. Greater than 5:", greaterThanFive);

// 5. 
let unsorted: number[] = [9, 3, 7, 2, 8, 5];
let sortedAsc = unsorted.sort((a, b) => a - b);
console.log("5. Sorted ascending:", sortedAsc);

// 6. 
let fruits2: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
let firstThree = fruits2.slice(0, 3);
console.log("6. First three elements:", firstThree);

// 7. 
let vehicles: string[] = ["car", "bike", "bus", "train", "boat"];
vehicles.splice(1, 2); // remove 2 elements starting from index 1
console.log("7. After splice:", vehicles);

// 8. 
function findLargest(a: number, b: number, c: number): number {
    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}
console.log("8. Largest number:", findLargest(5, 10, 7));

// 9. 
function convertToCentimeters(inches: number = 10): number {
    return inches * 2.54;
}
console.log("9. Default inches:", convertToCentimeters());
console.log("9. With parameter:", convertToCentimeters(20));

// 10.
function calculateArea(width: number, height?: number): number {
    if (height === undefined) {
        return width * width; // square
    } else {
        return width * height; // rectangle
    }
}
console.log("10. Square area:", calculateArea(5));
console.log("10. Rectangle area:", calculateArea(5, 10));