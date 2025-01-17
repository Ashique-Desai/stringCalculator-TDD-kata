const add = (inputString) => {
    // check for custom delimiter at start
    if (inputString.startsWith('//')) {
        inputString = inputString.slice(2);
    }
    // split the string by commas, newLines or semicolons and convert each part to a number
    const numbers = inputString.split(/,|\n|;/).map(Number);
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum
};

module.exports = add;