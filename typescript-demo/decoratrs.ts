function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value;
        },
        set: function (newEmail: string) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(newEmail)) {
                throw new Error(`Invalid email: ${newEmail}`);
            }
            value = newEmail;
        },
        enumerable: true,
        configurable: true
    });
}

class UserWithEmail {
    @ValidateEmail
    public email: string;

    constructor(email: string) {
        this.email = email; // Setter will validate the email
    }
}

// Test cases
try {
    const validUser = new UserWithEmail("test@example.com");
    console.log("Valid email:", validUser.email);
} catch (error) {
    console.error(error);
}

try {
    const invalidUser = new UserWithEmail("invalid-email"); // Should throw an error
} catch (error) {
    console.error(error); // Expected: Error: Invalid email: invalid-email
}
