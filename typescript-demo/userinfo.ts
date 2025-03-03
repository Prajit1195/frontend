let age: number = 30;
let isActive: boolean = true;

function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

console.log(getUserInfo(age, isActive));
