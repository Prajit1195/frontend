function LogInstance(constructor: Function) {
    console.log(`Class ${constructor.name} was instantiated.`);
}

@LogInstance
class User {
    constructor(public name: string) {
        console.log(`User ${this.name} created.`);
    }
}

// Instantiating the class
const user1 = new User("Alice");
const user2 = new User("Bob");
