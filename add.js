/**
 * Adds numbers from a given input string, handles different delimiters, 
 * does not allow negative numbers.
 *
 * @param {string} inputString - The string of numbers to be summed.
 * @returns {number} The sum of the numbers in the input string.
 * @throws {Error} Throws an error if negative numbers are found.
 */


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