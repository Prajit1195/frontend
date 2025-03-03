"use strict";
function identity(value) {
    return value;
}
// Calling with different types
console.log(identity("Hello"));
console.log(identity(42));
console.log(identity(true));
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return color;
}
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
function printDetails(value) {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}
printDetails("TypeScript");
printDetails(2025);
