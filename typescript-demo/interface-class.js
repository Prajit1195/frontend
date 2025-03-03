"use strict";
class Employee {
    constructor(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    getEmployeeDetails() {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}
const emp = new Employee("John Doe", 30, 101);
console.log(emp.getEmployeeDetails());
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`${this.make} ${this.model} (${this.year}) engine started.`);
    }
}
const MyCar = new Car("Toyota", "Corolla", 2022);
myCar.startEngine();
