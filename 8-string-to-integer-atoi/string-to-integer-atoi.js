/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
    let len = str.length, i = 0;

    while (i < len && str[i] === ' ') {
        i++;
    }

    let sign = 1;
    if (i < len && str[i] === '-') {
        sign = -1;
        i++;
    } else if (i < len && str[i] === '+') {
        i++;
    }

    let result = 0;
    while (i < len && /[0-9]/.test(str[i])) {
        result = result * 10 + (str[i] - '0');
        i++;
        if (result * sign >= Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        }
        if (result * sign <= -Math.pow(2, 31)) {
            return -Math.pow(2, 31);
        }
    }
    return result * sign;
};