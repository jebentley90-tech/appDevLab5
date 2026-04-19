export const generateUniqueNames = (
    firstNames: string[],
    lastNames: string[],
    count: number
): string[] => {
    const results = new Set<string>();

    while (results.size < count) {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];
        results.add(`${first} ${last}`);
    }
    return Array.from(results);
};