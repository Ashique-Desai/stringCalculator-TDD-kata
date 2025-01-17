const add = (inputString) => {
    const numbers = inputString.split(',').map(Number)
    const add = numbers.reduce((a, b) => a + b, 0);
    return add
};

module.exports = add;