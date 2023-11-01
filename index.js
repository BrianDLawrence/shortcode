
const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const BASE = CHARACTERS.length;

exports.encode = function (number) {
    if (number === 0 || number === null) {
        return CHARACTERS[0];
    }

    let result = '';

    while (number > 0) {
        const index = number % BASE;
        const char = CHARACTERS[index];
        result = char + result;
        number = Math.floor(number / BASE);
    }

    return result;
}

exports.decode = function (str) {
    if (str === null || str === '') {
        return 0;
    }

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = CHARACTERS.indexOf(char);
        result = result * BASE + index;
    }

    return result;
}