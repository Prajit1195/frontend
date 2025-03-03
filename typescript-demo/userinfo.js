"use strict";
let age = 30;
let isActive = true;
function getUserInfo(age, isActive) {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}
console.log(getUserInfo(age, isActive));
