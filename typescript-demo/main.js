"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SomeLibrary_1 = require("SomeLibrary");
const config = {
    apiUrl: "https://api.example.com",
    retryCount: 3
};
(0, SomeLibrary_1.initializeApp)(config);
const lodash_1 = require("lodash");
const numbers = [1, 2, 3, 4, 5, 6];
console.log((0, lodash_1.chunk)(numbers, 2)); // Output: [[1,2], [3,4], [5,6]]
