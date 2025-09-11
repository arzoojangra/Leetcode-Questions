/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (str) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let ans = 0;
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && roman[str[i]] < roman[str[i + 1]]) {
            ans -= roman[str[i]];
        } else {
            ans += roman[str[i]];
        }
    }
    return ans;
};