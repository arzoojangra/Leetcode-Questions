/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const mpp = new Array(256).fill(-1);
    let left = 0, right = 0, n = s.length, maxLen = 0;
    while (right < n) {
        if (mpp[s.charCodeAt(right)] != -1) {
            left = Math.max(mpp[s.charCodeAt(right)] + 1, left);
        }
        mpp[s.charCodeAt(right)] = right;

        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
};