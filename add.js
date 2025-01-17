const add = (inputString) => {
    if (inputString === "") {
        return 0;
    }
    if (inputString.length === 1) {
        return Number(inputString)
    }
};

module.exports = add;