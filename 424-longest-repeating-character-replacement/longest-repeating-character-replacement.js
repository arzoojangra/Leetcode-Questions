/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let n = s.length, maxFreq = 0, maxLen = 0, left = 0, right = 0;
    const hash = new Array(26).fill(0);
    while (right < n) {
        let index = s.charCodeAt(right) - 'A'.charCodeAt(0);
        hash[index]++;
        maxFreq = Math.max(maxFreq, hash[index]);
        if ((right - left + 1) - maxFreq > k) {
            let lIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
            hash[lIndex]--;
            maxFreq = 0;
            left++;
        }
                
        let changes = (right - left + 1) - maxFreq;
        if (changes <= k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
        right++;
    }
    return maxLen;
};