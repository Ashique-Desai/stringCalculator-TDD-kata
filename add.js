const add = (inputString) => {
    // check for custom delimiter // at start and remove it
    if (inputString.startsWith('//')) {
        inputString = inputString.slice(2);
    }
    // split the string by commas, newLines or semicolons and convert each part to a number
    const numbers = inputString.split(/,|\n|;/).map(Number);

    const negativeNumbers = numbers.filter((number) => number < 0)

    // do not allow negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum
};

module.exports = add;