interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

const emp = new Employee("John Doe", 30, 101);
console.log(emp.getEmployeeDetails());
interface Vehicle {
    startEngine(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`${this.make} ${this.model} (${this.year}) engine started.`);
    }
}

const MyCar = new Car("Toyota", "Corolla", 2022);
myCar.startEngine();
