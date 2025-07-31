/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let count = 0, n = s.length;
    let lastSeen = [-1, -1, -1];
    for (let i = 0; i < n; i++) {
        lastSeen[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        if (lastSeen[0] != -1 && lastSeen[1] != -1 && lastSeen[2] != -1) {
            let minIdx = (Math.min(lastSeen[0], lastSeen[1]));
            minIdx = Math.min(minIdx, lastSeen[2]);
            count += minIdx + 1;
        }
    }
    return count;
};