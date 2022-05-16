const isNumber = (value) => {
    return !isNaN(value);
}

const isInteger = (value) => {
    return isNumber(value) && value % 1 === 0;
}

const roundUp = (value) => {
    return Math.ceil(value);
}

