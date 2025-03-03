"use strict";
let message = "Hello, TypeScript!";
console.log(message);
let username = "John";
let aage = 30;
let isActivee = true;
console.log(username, age, isActive);
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
let person = ["Alice", 25];
console.log(person);
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
let employee = {
    name: "Bob",
    age: 40
};
console.log(employee);
class car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log(`${this.make} ${this.model} is driving!`);
    }
}
let myCar = new Car("Tesla", "Model S");
myCar.drive();
