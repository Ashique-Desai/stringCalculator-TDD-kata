const add = (inputString) => {
    console.log({ inputString })
    if (inputString.startsWith('//')) {
        console.log('Yes starts with //')
        inputString = inputString.slice(2)
    }
    const processNewLineAndComma = inputString.split(/,|\n|;/).map(Number)
    console.log({ processNewLineAndComma })
    const add = processNewLineAndComma.reduce((a, b) => a + b, 0);
    return add
};

module.exports = add;