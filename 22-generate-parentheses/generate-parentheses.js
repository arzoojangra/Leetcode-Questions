/**
 * @param {number} n
 * @return {string[]}
 */

var generate = function (current, open, close, results) {
    if (open === 0 && close === 0) {
        results.push(current);
        return;
    }

    if (open > 0) {
        generate(current + '(', open - 1, close, results);
    }

    if (close > open) {
        generate(current + ')', open, close - 1, results);
    }
}

var generateParenthesis = function (n) {
    const results = [];
    generate('', n, n, results);
    return results.sort();
};