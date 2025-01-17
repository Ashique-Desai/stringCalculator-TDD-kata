const add = (inputString) => {
    const processNewLineAndComma = inputString.split(/,|\n/).map(Number)
    const add = processNewLineAndComma.reduce((a, b) => a + b, 0);
    return add
};

module.exports = add;