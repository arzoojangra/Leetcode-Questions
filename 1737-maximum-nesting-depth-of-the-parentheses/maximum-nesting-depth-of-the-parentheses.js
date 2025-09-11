/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (str) {
    let counter = 0, maxCounter = 0;
    for (const s of str) {
        if (s === '(') {
            counter++;
            maxCounter = Math.max(maxCounter, counter);
        } else if (s === ')') {
            counter--;
        }
    }
    return maxCounter;
};