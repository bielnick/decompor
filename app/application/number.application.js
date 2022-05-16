export const isNumber = (value) => {
    return !isNaN(value);
}

export const isInteger = (value) => {
    return isNumber(value) && value % 1 === 0;
}

export const roundUp = (value) => {
    return Math.ceil(value);
}
