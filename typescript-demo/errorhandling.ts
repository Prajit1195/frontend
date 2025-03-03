function divideNumbers(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

// Test cases
try {
    console.log(divideNumbers(10, 2)); // Output: 5
    console.log(divideNumbers(5, 0)); // Should throw an error
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}
