function identity<T>(value: T): T {
    return value;
}

// Calling with different types
console.log(identity<string>("Hello"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return color;
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));

function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

printDetails("TypeScript");
printDetails(2025);
