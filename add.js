const add = (inputString) => {
    if (inputString === "") {
        return 0;
    }
    if (inputString.length === 1) {
        return Number(inputString)
    }
    if (inputString.length >= 2) {
        const numbers = inputString.split(',').map(Number)
        const add = numbers.reduce((a, b) => a + b, 0);
        console.log({ numbers })
        return add
    }
};

module.exports = add;