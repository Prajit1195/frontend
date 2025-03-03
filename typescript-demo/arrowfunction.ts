// Normal function
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

// Arrow function
const multiplyNumbersArrow = (a: number, b: number): number => a * b;

console.log(multiplyNumbers(3, 4));       // Output: 12
console.log(multiplyNumbersArrow(3, 4));  // Output: 12
const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 2, 3, 4, 5]));  // Output: 15
console.log(sum([10, 20, 30]));      // Output: 60
