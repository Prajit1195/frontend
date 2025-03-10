function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error parsing JSON:", error.message);
        } else {
            console.error("Unknown error occurred while parsing JSON.");
        }
        return null;
    }
}


