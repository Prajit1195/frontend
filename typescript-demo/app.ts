let message: string = "Hello, TypeScript!";
console.log(message);

let username: string = "John";
let age: number = 30;
let isActive: boolean = true;

console.log(username, age, isActive);

let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits);

let person: [string, number] = ["Alice", 25];
console.log(person);

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));

interface Person {
    name: string;
    age: number;
}
let employee: Person = {
    name: "Bob",
    age: 40
};
console.log(employee);

class Car {
    make: string;
    model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log(`${this.make} ${this.model} is driving!`);
    }
}

let myCar = new Car("Tesla", "Model S");
myCar.drive();
