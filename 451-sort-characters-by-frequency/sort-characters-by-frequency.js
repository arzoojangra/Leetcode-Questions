/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = new Map();
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }
    let sorted = [...freq.entries()].sort((a, b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
    });

    let result = '';
    for (let [char, count] of sorted) {
        result += char.repeat(count);
    }
    return result;
};