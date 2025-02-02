/**
 * Adds numbers from a given input string, handles different delimiters, 
 * does not allow negative numbers.
 *
 * @param {string} inputString - The string of numbers to be summed.
 * @returns {number} The sum of the numbers in the input string.
 * @throws {Error} Throws an error if negative numbers are found.
 */
const add = (inputString) => {
    let delimiter = ","
    // check for "//"" at start of input and get custom delimiter (ex: ; or :), remove "//"" from inputString
    if (inputString.startsWith('//')) {
        // Extract custom delimiter starting from index 2 (after `//`)
        const delimiterEndIndex = inputString.indexOf('\n');
        delimiter = inputString.slice(2, delimiterEndIndex);
        inputString = inputString.slice(2);
    }
    // split the string by commas, newLines or semicolons and convert each part to a number
    const numbers = inputString.split(new RegExp(`\n|${delimiter}`)).map(Number);

    const negativeNumbers = numbers.filter((number) => number < 0)

    // do not allow negative numbers
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum
};

module.exports = add;